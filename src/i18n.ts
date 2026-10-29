// Adreces de cada idioma. El català és l'idioma per defecte (arrel); el castellà va a /es/.
// Els textos són a contingut/<idioma>/ (vegeu src/content.ts).
import type { Lang } from './data/apps';

export type { Lang };

export const routes = {
  ca: { home: '/', support: '/suport/', about: '/sobre/', privacy: '/privacitat/', policy: (id: string) => `/privacitat/${id}/`, app: (id: string) => `/apps/${id}/` },
  es: { home: '/es/', support: '/es/apoyo/', about: '/es/sobre/', privacy: '/es/privacidad/', policy: (id: string) => `/es/privacidad/${id}/`, app: (id: string) => `/es/apps/${id}/` },
} as const;

export const otherLang = (lang: Lang): Lang => (lang === 'ca' ? 'es' : 'ca');

// Nom de cada idioma en la seva llengua (selector) i en la llengua de la pàgina (fitxa de l'app).
export const langName: Record<Lang, string> = { ca: 'Català', es: 'Castellano' };
export const langNameIn: Record<Lang, Record<Lang, string>> = {
  ca: { ca: 'Català', es: 'Castellà' },
  es: { ca: 'Catalán', es: 'Castellano' },
};
