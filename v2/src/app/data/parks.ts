import guidance from '../../../../data/park-guidance.json';

// Both clients use the same reviewed content. Months in this client are zero-based.
const images = import.meta.glob('../../../../assets/images/parks/*.jpg', {
  eager: true, query: '?url', import: 'default'
}) as Record<string, string>;
export const parks = Object.values(guidance).map(p => ({
  ...p,
  permitNote: 'permitNote' in p ? String(p.permitNote) : undefined,
  image: images[`../../../../assets/images/parks/${p.id}.jpg`],
  bestMonths: p.bestMonths.map(m => m - 1),
}));
export type Park = typeof parks[number];
export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
