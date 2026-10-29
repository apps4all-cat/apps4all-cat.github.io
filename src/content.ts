// Llegeix els textos de contingut/<idioma>/ (Markdown i YAML) i comprova que no en falti cap.
// Si falta un fitxer o un camp, la compilació s'atura i diu quin.
import { parse } from 'yaml';
import type { Lang } from './data/apps';

type MdModule = { frontmatter: Record<string, unknown>; Content: any };

const pages = import.meta.glob<MdModule>('../contingut/*/*.md', { eager: true });
const appPages = import.meta.glob<MdModule>('../contingut/*/apps/*.md', { eager: true });
const shortTexts = import.meta.glob<string>('../contingut/*/textos.yml', { eager: true, query: '?raw', import: 'default' });

export const LANGS: Lang[] = ['ca', 'es'];

function fail(file: string, msg: string): never {
  throw new Error(`contingut/${file}: ${msg}`);
}

/** Comprova que l'objecte té tots els camps (amb punts per als niats: 'menu.apps') i que són text no buit. */
function check(file: string, obj: unknown, fields: string[]) {
  for (const f of fields) {
    const v = f.split('.').reduce<any>((o, k) => (o == null ? o : o[k]), obj);
    if (typeof v !== 'string' || v.trim() === '') fail(file, `falta el camp «${f}»`);
  }
}

function md(dict: Record<string, MdModule>, rel: string, fields: string[]) {
  const mod = dict[`../contingut/${rel}`] ?? fail(rel, 'no existeix aquest fitxer');
  check(rel, mod.frontmatter, fields);
  return { data: mod.frontmatter as Record<string, any>, Content: mod.Content };
}

const PAGE_FIELDS = {
  inici: ['titol', 'entradeta', 'titol_apps'],
  suport: ['titol', 'entradeta', 'liberapay', 'paypal', 'aviat', 'menors', 'gracies'],
  'qui-som': ['titol', 'descripcio'],
  privadesa: ['titol', 'descripcio'],
} as const;

export type PageName = keyof typeof PAGE_FIELDS;

export function page(lang: Lang, name: PageName) {
  const p = md(pages, `${lang}/${name}.md`, [...PAGE_FIELDS[name]]);
  if (name === 'inici') {
    const pr = p.data.principis;
    if (!Array.isArray(pr) || pr.length === 0) fail(`${lang}/inici.md`, 'falta la llista «principis»');
    for (const x of pr) check(`${lang}/inici.md`, x, ['titol', 'text']);
  }
  return p;
}

export function appText(lang: Lang, id: string) {
  return md(appPages, `${lang}/apps/${id}.md`, ['nom', 'resum']);
}

const SHORT_FIELDS = [
  'descripcio_web', 'salta_al_contingut',
  'menu.apps', 'menu.qui_som', 'menu.cafe',
  'fitxa.per_a_escola', 'fitxa.descarrega', 'fitxa.aviat', 'fitxa.versio', 'fitxa.idiomes', 'fitxa.permisos',
  'fitxa.cap_permis', 'fitxa.captures', 'fitxa.privadesa', 'fitxa.codi', 'fitxa.tornar',
  'peu.lema', 'peu.privadesa', 'peu.contacte',
  'error_404.titol', 'error_404.tornar',
];

export function texts(lang: Lang) {
  const rel = `${lang}/textos.yml`;
  const raw = shortTexts[`../contingut/${rel}`] ?? fail(rel, 'no existeix aquest fitxer');
  let data: any;
  try {
    data = parse(raw);
  } catch (e) {
    fail(rel, `format incorrecte (${(e as Error).message.split('\n')[0]})`);
  }
  check(rel, data, SHORT_FIELDS);
  return data as {
    descripcio_web: string;
    salta_al_contingut: string;
    menu: { apps: string; qui_som: string; cafe: string };
    fitxa: Record<'per_a_escola' | 'descarrega' | 'aviat' | 'versio' | 'idiomes' | 'permisos' | 'cap_permis' | 'captures' | 'privadesa' | 'codi' | 'tornar', string>;
    peu: { lema: string; privadesa: string; contacte: string };
    error_404: { titol: string; tornar: string };
  };
}
