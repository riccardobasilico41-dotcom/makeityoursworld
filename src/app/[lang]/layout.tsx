import { IntroFiligrane } from '@/components/IntroFiligrane'
import { IMMAGINI_INTRO } from '@/content/intro-immagini'
import { SALTA_INTRO } from '@/lib/intro-salta'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TornaSu } from "@/components/TornaSu";
import { AUTORE } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";
import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { LINGUE, LOCALE, isLingua } from "@/lib/i18n/config";
import { LinguaProvider } from "@/lib/i18n/LinguaProvider";
import { SITO } from "@/lib/i18n/sito";

// Stile A "Ghat": grotesk espressivo per i titoli, grotesk sobrio per il testo.
// Font variabili ospitati sul sito (src/app/fonts): niente richieste a Google, niente errori di build.
const bricolage = localFont({
  src: "../fonts/BricolageGrotesque-normal-500-800.woff2",
  variable: "--font-bricolage",
  weight: "500 800",
  display: "swap",
});

const schibsted = localFont({
  src: "../fonts/SchibstedGrotesk-normal-400-700.woff2",
  variable: "--font-schibsted",
  weight: "400 700",
  display: "swap",
});

// Macchina da scrivere solo per il marchio, come il titolo del video «Runaway».
// Su Mac e iPhone si usa American Typewriter (lo stesso del video), altrove Courier Prime.
const courierPrime = localFont({
  src: "../fonts/CourierPrime-700-latin.woff2",
  variable: "--font-courier-prime",
  weight: "700",
  display: "swap",
});

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
  if (!isLingua(l)) notFound();
  const lingua = l;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: siteConfig.brandName,
    description: SITO[lingua].description,
    url: siteConfig.url,
    inLanguage: LOCALE[lingua].html,
    author: AUTORE,
  };

  return (
    <html
      lang={LOCALE[lingua].html}
      suppressHydrationWarning
      className={`${bricolage.variable} ${schibsted.variable} ${courierPrime.variable} h-full antialiased`}
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
          <main className="flex-1">{children}</main>
          <Footer />
          <TornaSu />
        </LinguaProvider>
      </body>
    </html>
  );
}
