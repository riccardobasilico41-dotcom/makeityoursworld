import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { getAllViaggi } from '@/lib/viaggi'
import { getAllPaesi, getDestinazioniByPaese, getEsperienzeByPaese } from '@/lib/geo'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { listeAttrezzatura } from '@/content/attrezzatura'
import { LINGUE_PUBBLICATE, LINGUA_PREDEFINITA, LOCALE } from '@/lib/i18n/config'
import { localizza } from '@/lib/i18n/percorsi'
import { AREE } from '@/lib/aree'

export default function sitemap(): MetadataRoute.Sitemap {
  // i percorsi sono canonici (italiani): ogni voce esce una volta per lingua, con gli hreflang verso le altre
  const paesi = getAllPaesi('it')

  const routes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/viaggi', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/destinazioni', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/meraviglie', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/trasparenza', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/lavoriamo-insieme', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/chi-sono', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/amazzonia', priority: 0.8, changeFrequency: 'monthly' as const },
    ...AREE.map((a) => ({ path: `/aree/${a.slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
    { path: '/come-lavoro', priority: 0.5, changeFrequency: 'yearly' as const },
    ...getAllMeraviglie('it').map((m) => ({
      path: `/meraviglie/${m.slug}`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    })),
    { path: '/attrezzatura', priority: 0.7, changeFrequency: 'monthly' as const },
    ...listeAttrezzatura.map((l) => ({
      path: `/attrezzatura/${l.slug}`,
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    })),
    ...getAllViaggi('it').map((v) => ({
      path: `/viaggi/${v.slug}`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    })),
    ...paesi.map((p) => ({
      path: `/destinazioni/${p.slug}`,
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    })),
    ...paesi.flatMap((p) =>
      getDestinazioniByPaese(p.slug, 'it').map((d) => ({
        path: `/destinazioni/${p.slug}/${d.slug}`,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
      }))
    ),
    ...paesi.flatMap((p) =>
      getEsperienzeByPaese(p.slug, 'it').map((e) => ({
        path: `/esperienze/${p.slug}/${e.slug}`,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
      }))
    ),
  ]

  const oggi = new Date()
  return routes.flatMap((route) => {
    const lingue = Object.fromEntries([
      ...LINGUE_PUBBLICATE.map((l) => [LOCALE[l].html, `${siteConfig.url}${localizza(route.path, l)}`]),
      ['x-default', `${siteConfig.url}${localizza(route.path, LINGUA_PREDEFINITA)}`],
    ])
    return LINGUE_PUBBLICATE.map((l) => ({
      url: `${siteConfig.url}${localizza(route.path, l)}`,
      lastModified: oggi,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: lingue },
    }))
  })
}
