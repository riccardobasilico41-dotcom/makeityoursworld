import type { Consiglio } from './tipi'
import { consiglioAurora } from './aurora-boreale-dove-quando'
import { consiglioGuidaSinistra } from './guida-a-sinistra'
import { consiglioIslandaTenda } from './islanda-in-tenda'
import { consiglioQuandoGiappone } from './quando-andare-in-giappone'
import { consiglioCostoIndia } from './quanto-costa-un-viaggio-in-india'
import { consiglioThailandiaMare } from './thailandia-quale-mare-quando'
import { consiglioBangkokRooftopBar } from './bangkok-rooftop-bar'
import { consiglioCittaDelMessicoDiSera } from './citta-del-messico-di-sera'
import { consiglioDoveDormireBangkok } from './dove-dormire-a-bangkok'
import { consiglioDoveDormireCittaDelMessico } from './dove-dormire-a-citta-del-messico'
import { consiglioDoveDormireDubai } from './dove-dormire-a-dubai'
import { consiglioDoveDormireEdimburgo } from './dove-dormire-a-edimburgo'
import { consiglioDoveDormireHongKong } from './dove-dormire-a-hong-kong'
import { consiglioDoveDormireIstanbul } from './dove-dormire-a-istanbul'
import { consiglioDoveDormireKyoto } from './dove-dormire-a-kyoto'
import { consiglioDoveDormireLisbona } from './dove-dormire-a-lisbona'
import { consiglioDoveDormireLondra } from './dove-dormire-a-londra'
import { consiglioDoveDormireMarrakech } from './dove-dormire-a-marrakech'
import { consiglioDoveDormireNewYork } from './dove-dormire-a-new-york'
import { consiglioDoveDormireParigi } from './dove-dormire-a-parigi'
import { consiglioDoveDormireRoma } from './dove-dormire-a-roma'
import { consiglioDoveDormireSeoul } from './dove-dormire-a-seoul'
import { consiglioDoveDormireSingapore } from './dove-dormire-a-singapore'
import { consiglioDoveDormireTokyo } from './dove-dormire-a-tokyo'
import { consiglioDoveMangiareBangkok } from './dove-mangiare-a-bangkok'
import { consiglioDoveMangiareCittaDelMessico } from './dove-mangiare-a-citta-del-messico'
import { consiglioDoveMangiareDubai } from './dove-mangiare-a-dubai'
import { consiglioDoveMangiareEdimburgo } from './dove-mangiare-a-edimburgo'
import { consiglioDoveMangiareHongKong } from './dove-mangiare-a-hong-kong'
import { consiglioDoveMangiareIstanbul } from './dove-mangiare-a-istanbul'
import { consiglioDoveMangiareKyoto } from './dove-mangiare-a-kyoto'
import { consiglioDoveMangiareLisbona } from './dove-mangiare-a-lisbona'
import { consiglioDoveMangiareLondra } from './dove-mangiare-a-londra'
import { consiglioDoveMangiareMarrakech } from './dove-mangiare-a-marrakech'
import { consiglioDoveMangiareNewYork } from './dove-mangiare-a-new-york'
import { consiglioDoveMangiareParigi } from './dove-mangiare-a-parigi'
import { consiglioDoveMangiareRoma } from './dove-mangiare-a-roma'
import { consiglioDoveMangiareSeoul } from './dove-mangiare-a-seoul'
import { consiglioDoveMangiareTokyo } from './dove-mangiare-a-tokyo'
import { consiglioDubaiRooftopBarPuntiPanoramici } from './dubai-rooftop-bar-e-punti-panoramici'
import { consiglioEdimburgoWhiskyBar } from './edimburgo-whisky-bar'
import { consiglioPanoramiHongKong } from './hong-kong-panorami-rooftop'
import { consiglioIstanbulRooftop } from './istanbul-rooftop-bar'
import { consiglioKyotoAlba } from './kyoto-all-alba'
import { consiglioLisbonaMiradourosRooftop } from './lisbona-miradouros-e-rooftop-bar'
import { consiglioMercatiLondra } from './mercati-di-londra'
import { consiglioNewYorkRooftop } from './new-york-rooftop-bar'
import { consiglioParigiRooftop } from './parigi-rooftop-e-punti-panoramici'
import { consiglioSeoulDiSera } from './seoul-di-sera'
import { consiglioHawkerSingapore } from './singapore-hawker-centre'
import { consiglioRooftopSingapore } from './singapore-rooftop-bar'
import { consiglioSoukMarrakech } from './souk-di-marrakech'
import { consiglioTokyoDiSera } from './tokyo-di-sera'
import { consiglioBaliOThailandia } from './bali-o-thailandia'
import { consiglioDoveAndareDicembre } from './dove-andare-a-dicembre'
import { consiglioDoveAndareFebbraio } from './dove-andare-a-febbraio'
import { consiglioDoveAndareGennaio } from './dove-andare-a-gennaio'
import { consiglioDoveAndareGiugno } from './dove-andare-a-giugno'
import { consiglioDoveAndareLuglio } from './dove-andare-a-luglio'
import { consiglioDoveAndareMaggio } from './dove-andare-a-maggio'
import { consiglioDoveAndareMarzo } from './dove-andare-a-marzo'
import { consiglioDoveAndareNovembre } from './dove-andare-a-novembre'
import { consiglioDoveAndareOttobre } from './dove-andare-a-ottobre'
import { consiglioDoveAndareSettembre } from './dove-andare-a-settembre'
import { consiglioDoveAndareAgosto } from './dove-andare-ad-agosto'
import { consiglioDoveAndareAprile } from './dove-andare-ad-aprile'
import { consiglioGiapponeOCorea } from './giappone-o-corea-del-sud'
import { consiglioIslandaONorvegia } from './islanda-o-norvegia'
import { consiglioMaroccoOGiordania } from './marocco-o-giordania'
import { consiglioMessicoOCostaRica } from './messico-o-costa-rica'
import { consiglioPeruOBolivia } from './peru-o-bolivia'
import { consiglioPortogalloOSpagnaNord } from './portogallo-o-spagna-del-nord'
import { consiglioSriLankaOMaldive } from './sri-lanka-o-maldive'

/** Registro degli articoli «Consigli» (generato da tools/indice-consigli.mjs). */
export const CONSIGLI: Consiglio[] = [
  consiglioAurora,
  consiglioGuidaSinistra,
  consiglioIslandaTenda,
  consiglioQuandoGiappone,
  consiglioCostoIndia,
  consiglioThailandiaMare,
  consiglioBangkokRooftopBar,
  consiglioCittaDelMessicoDiSera,
  consiglioDoveDormireBangkok,
  consiglioDoveDormireCittaDelMessico,
  consiglioDoveDormireDubai,
  consiglioDoveDormireEdimburgo,
  consiglioDoveDormireHongKong,
  consiglioDoveDormireIstanbul,
  consiglioDoveDormireKyoto,
  consiglioDoveDormireLisbona,
  consiglioDoveDormireLondra,
  consiglioDoveDormireMarrakech,
  consiglioDoveDormireNewYork,
  consiglioDoveDormireParigi,
  consiglioDoveDormireRoma,
  consiglioDoveDormireSeoul,
  consiglioDoveDormireSingapore,
  consiglioDoveDormireTokyo,
  consiglioDoveMangiareBangkok,
  consiglioDoveMangiareCittaDelMessico,
  consiglioDoveMangiareDubai,
  consiglioDoveMangiareEdimburgo,
  consiglioDoveMangiareHongKong,
  consiglioDoveMangiareIstanbul,
  consiglioDoveMangiareKyoto,
  consiglioDoveMangiareLisbona,
  consiglioDoveMangiareLondra,
  consiglioDoveMangiareMarrakech,
  consiglioDoveMangiareNewYork,
  consiglioDoveMangiareParigi,
  consiglioDoveMangiareRoma,
  consiglioDoveMangiareSeoul,
  consiglioDoveMangiareTokyo,
  consiglioDubaiRooftopBarPuntiPanoramici,
  consiglioEdimburgoWhiskyBar,
  consiglioPanoramiHongKong,
  consiglioIstanbulRooftop,
  consiglioKyotoAlba,
  consiglioLisbonaMiradourosRooftop,
  consiglioMercatiLondra,
  consiglioNewYorkRooftop,
  consiglioParigiRooftop,
  consiglioSeoulDiSera,
  consiglioHawkerSingapore,
  consiglioRooftopSingapore,
  consiglioSoukMarrakech,
  consiglioTokyoDiSera,
  consiglioBaliOThailandia,
  consiglioDoveAndareDicembre,
  consiglioDoveAndareFebbraio,
  consiglioDoveAndareGennaio,
  consiglioDoveAndareGiugno,
  consiglioDoveAndareLuglio,
  consiglioDoveAndareMaggio,
  consiglioDoveAndareMarzo,
  consiglioDoveAndareNovembre,
  consiglioDoveAndareOttobre,
  consiglioDoveAndareSettembre,
  consiglioDoveAndareAgosto,
  consiglioDoveAndareAprile,
  consiglioGiapponeOCorea,
  consiglioIslandaONorvegia,
  consiglioMaroccoOGiordania,
  consiglioMessicoOCostaRica,
  consiglioPeruOBolivia,
  consiglioPortogalloOSpagnaNord,
  consiglioSriLankaOMaldive,
]
