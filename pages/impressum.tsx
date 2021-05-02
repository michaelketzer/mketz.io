import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { NextSeo } from 'next-seo';
import PageLayout from '../Components/PageLayout';
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

export default function Impressum(): ReactElement {
  return (
    <>
      <NextSeo noindex nofollow {...defaultSeo} />

      <Header />
      <PageLayout>
        <h2>Angaben gemäß § 5 TMG:</h2>
        <div>Michael Ketzer</div>
        <div>Rabenstraße 28</div>
        <div>40789 Monheim</div>

        <h2>Kontakt:</h2>
        <div>E-Mail: admin@griefco.de</div>
        <div>Discord: GriefCode#6919</div>
        <div>Twitter: @griefcode</div>

        <h2>Haftung für Inhalte</h2>
        <div>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
          eine rechtswidrige Tätigkeit hinweisen.
        </div>

        <div>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
          konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </div>

        <h2>Haftung für Links</h2>
        <div>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
          können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
          stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
          Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar.
        </div>

        <div>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
          entfernen.
        </div>

        <h2>Urheberrecht</h2>
        <div>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
          des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
          Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
          dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
          werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
          aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
          wir derartige Inhalte umgehend entfernen.
        </div>
        <Footer />
      </PageLayout>
    </>
  );
}
