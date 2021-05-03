import type { NextApiRequest, NextApiResponse } from 'next';
import faunadb, { ExprArg } from 'faunadb';

interface Document {
  ref: ExprArg;
  data: {
    likes: number;
  };
}

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  const q = faunadb.query;
  const client = new faunadb.Client({ secret: process.env.FAUNADB_TOKEN });
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ message: 'Recipe slug not provided' });
  }

  let likes = 0;

  if (process.env.NODE_ENV === 'production') {
    const doesDocExist = await client.query(q.Exists(q.Match(q.Index('likes_by_slug'), slug)));
    if (!doesDocExist) {
      await client.query(q.Create(q.Collection('recipes'), { data: { slug: slug, likes: 0 } }));
    }

    const document: Document = await client.query(q.Get(q.Match(q.Index('likes_by_slug'), slug)));
    if (req.method === 'POST') {
      await client.query(q.Update(document.ref, { data: { hits: document.data.likes + 1 } }));
    }

    likes = document.data.likes;
  }

  return res.status(200).json({ likes });
};
