import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { NextSeo } from 'next-seo';
import PageLayout from '../Components/PageLayout';
import Presentation from '../Components/Pages/Index/Presentation';
import { ReactElement } from 'react';

export const defaultSeo = {
  title: 'Michael Ketzer – Entwickler, wannabe Designer & Hobby-Koch',
  description: 'Frontend-Entwickler, NextJS Enthusiast, Creator',
  canonical: 'https://www.mketz.io/',
  openGraph: {
    url: 'https://www.mketz.io/',
    title: 'Michael Ketzer – Entwickler, wannabe Designer & Hobby-Koch',
    description: 'Frontend-Entwickler, NextJS Enthusiast, Creator',
    site_name: 'Michael Ketzer',
  },
  twitter: {
    handle: '@griefcode',
    site: '@griefcode',
    cardType: 'summary_large_image',
  },
};

export default function Home(): ReactElement {
  return (
    <>
      <NextSeo {...defaultSeo} />

      <Header />
      <PageLayout>
        <Presentation />
        <Footer />
      </PageLayout>
    </>
  );
}
