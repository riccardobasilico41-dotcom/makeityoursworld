import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { getAllViaggi } from '@/lib/viaggi'
import { getAllPaesi, getDestinazioniByPaese, getEsperienzeByPaese } from '@/lib/geo'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { listeAttrezzatura } from '@/content/attrezzatura'

export default function sitemap(): MetadataRoute.Sitemap {
  const paesi = getAllPaesi()

  const routes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/viaggi', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/destinazioni', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/meraviglie', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/trasparenza', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/lavoriamo-insieme', priority: 0.5, changeFrequency: 'monthly' as const },
    ...getAllMeraviglie().map((m) => ({
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
    ...getAllViaggi().map((v) => ({
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
      getDestinazioniByPaese(p.slug).map((d) => ({
        path: `/destinazioni/${p.slug}/${d.slug}`,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
      }))
    ),
    ...paesi.flatMap((p) =>
      getEsperienzeByPaese(p.slug).map((e) => ({
        path: `/esperienze/${p.slug}/${e.slug}`,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
      }))
    ),
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
