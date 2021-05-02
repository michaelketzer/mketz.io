import type { NextApiRequest, NextApiResponse } from 'next';
import faunadb, { ExprArg } from 'faunadb';

interface Document {
  ref: ExprArg;
  data: {
    hits: number;
  };
}

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  const q = faunadb.query;
  const client = new faunadb.Client({ secret: process.env.FAUNADB_TOKEN });
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ message: 'Recipe slug not provided' });
  }

  let hits = 0;

  if (process.env.NODE_ENV === 'production') {
    const doesDocExist = await client.query(q.Exists(q.Match(q.Index('hits_by_slug'), slug)));
    if (!doesDocExist) {
      await client.query(q.Create(q.Collection('recipes'), { data: { slug: slug, hits: 0 } }));
    }

    const document: Document = await client.query(q.Get(q.Match(q.Index('hits_by_slug'), slug)));
    await client.query(q.Update(document.ref, { data: { hits: document.data.hits + 1 } }));
    hits = document.data.hits;
  }

  return res.status(200).json({ hits });
};
