import type { Consiglio } from './tipi'
import { consiglioQuandoGiappone } from './quando-andare-in-giappone'
import { consiglioCostoIndia } from './quanto-costa-un-viaggio-in-india'
import { consiglioIslandaTenda } from './islanda-in-tenda'
import { consiglioAurora } from './aurora-boreale-dove-quando'
import { consiglioThailandiaMare } from './thailandia-quale-mare-quando'
import { consiglioGuidaSinistra } from './guida-a-sinistra'

/** Registro degli articoli «Consigli», nell'ordine in cui compaiono nella pagina. */
export const CONSIGLI: Consiglio[] = [
  consiglioQuandoGiappone,
  consiglioThailandiaMare,
  consiglioAurora,
  consiglioCostoIndia,
  consiglioIslandaTenda,
  consiglioGuidaSinistra,
]
