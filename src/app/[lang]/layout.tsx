import { IntroFiligrane } from '@/components/IntroFiligrane'
import { IMMAGINI_INTRO } from '@/content/intro-immagini'
import { SALTA_INTRO } from '@/lib/intro-salta'
import type { Metadata } from "next";
import { classiHtml } from "../caratteri";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TornaSu } from "@/components/TornaSu";
import { autore } from "@/lib/structured-data";
import { localizza } from "@/lib/i18n/percorsi";
import { siteConfig } from "@/lib/site-config";
import { lang } from "next/root-params";
import { LINGUE, LOCALE, isLingua } from "@/lib/i18n/config";
import { LinguaProvider } from "@/lib/i18n/LinguaProvider";
import { SITO } from "@/lib/i18n/sito";

export async function generateMetadata(): Promise<Metadata> {
  const l = await lang();
  const lingua = isLingua(l) ? l : "en";
  const { tagline, description } = SITO[lingua];
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.brandName} — ${tagline}`,
      template: `%s | ${siteConfig.shortName}`,
    },
    description,
    openGraph: {
      title: siteConfig.brandName,
      description,
      url: siteConfig.url,
      siteName: siteConfig.shortName,
      locale: LOCALE[lingua].og,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.brandName,
      description,
    },
  };
}

export function generateStaticParams() {
  return LINGUE.map((lang) => ({ lang }));
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const l = await lang();
  // La 404 statica (_not-found) si costruisce senza il parametro della lingua: con notFound() qui il
  // layout falliva e Next mandava una pagina vuota (`__next_error__`). Il proxy fa passare solo lingue
  // valide, quindi senza lingua si usa l'inglese, la lingua principale.
  const lingua = isLingua(l) ? l : "en";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: siteConfig.brandName,
    description: SITO[lingua].description,
    // home e autore nella lingua della pagina (prima: sempre la radice inglese e la scheda italiana)
    url: `${siteConfig.url}${localizza("/", lingua)}`,
    inLanguage: LOCALE[lingua].html,
    author: autore(lingua),
  };

  return (
    <html
      lang={LOCALE[lingua].html}
      suppressHydrationWarning
      className={classiHtml}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        {/* senza JavaScript le animazioni d'ingresso non partono: il contenuto resta visibile */}
        <noscript>
          <style>{'[style*="opacity:0"]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        {/* Il marchio si batte a macchina solo alla prima pagina della visita: dalle successive è già scritto. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('marchio'))document.documentElement.dataset.marchio='visto';else sessionStorage.setItem('marchio','1')}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LinguaProvider lingua={lingua}>
          <Header />
          <IntroFiligrane immagini={IMMAGINI_INTRO} />
          <script dangerouslySetInnerHTML={{ __html: SALTA_INTRO }} />
          <main id="contenuto" tabIndex={-1} className="flex-1 focus:outline-none">{children}</main>
          <Footer />
          <TornaSu />
        </LinguaProvider>
      </body>
    </html>
  );
}
