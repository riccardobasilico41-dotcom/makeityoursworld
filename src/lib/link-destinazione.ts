/**
 * Percorso canonico della destinazione di una tappa o di un giorno. Usa il Paese della tappa
 * (`paeseSlug`, calcolato da `conPaesiDelleDestinazioni` per i viaggi multi-Paese) e, se manca,
 * quello del viaggio. `null` = nessun link (destinazione assente o inesistente).
 * Il percorso è italiano: lo localizza il Link di src/components/ui/Link.tsx.
 */
export function linkDestinazione(
  destinazioneSlug: string | undefined,
  paeseTappa: string | null | undefined,
  paeseViaggio: string | undefined,
): string | null {
  if (!destinazioneSlug) return null
  const paese = paeseTappa === undefined ? paeseViaggio : paeseTappa
  return paese ? `/destinazioni/${paese}/${destinazioneSlug}` : null
}
