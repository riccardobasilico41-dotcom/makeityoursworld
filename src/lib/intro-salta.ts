/** Script in linea per IntroFiligrane: va subito dopo l'apertura nell'HTML del server. */
// Stessa regola di daSaltare(), ma eseguita subito nell'HTML, prima del primo disegno.
export const SALTA_INTRO = `(function(){try{var q=new URLSearchParams(location.search).get('intro');var f=q==='colore'||q==='bn';var v=sessionStorage.getItem('intro-vista')==='1';var r=matchMedia('(prefers-reduced-motion: reduce)').matches;if(!f&&(v||r)){var e=document.getElementById('intro-filigrane');if(e)e.style.display='none'}}catch(_){}})()`
