// Dades tècniques de les apps (apps.json) i els seus textos (contingut/<idioma>/apps/<id>.md).
// Si hi falta un camp o té un format incorrecte, la compilació s'atura.
import raw from './apps.json';

export type Lang = 'ca' | 'es';

export interface App {
  id: string;
  package: string;
  audience: 'escola' | 'general';
  languages: Lang[];
  permissions: string[];
  version: string;
  icon: string;
  screenshots: string[];
  playUrl: string | null;
  fdroidUrl: string | null;
  repoUrl: string | null;
}

function fail(id: string, msg: string): never {
  throw new Error(`src/data/apps.json › ${id}: ${msg}`);
}

function validate(a: any, seen: Set<string>): App {
  const id = typeof a?.id === 'string' && /^[a-z0-9-]+$/.test(a.id) ? a.id : fail(String(a?.id), 'id ha de ser minúscules, xifres o guions');
  if (seen.has(id)) fail(id, 'id repetit');
  seen.add(id);
  if (!/^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+$/.test(a.package ?? '')) fail(id, 'package no vàlid');
  if (!['escola', 'general'].includes(a.audience)) fail(id, 'audience ha de ser "escola" o "general"');
  if (!Array.isArray(a.languages) || a.languages.length === 0) fail(id, 'languages buit');
  if (!Array.isArray(a.permissions)) fail(id, 'permissions ha de ser una llista');
  if (typeof a.version !== 'string') fail(id, 'version ha de ser text');
  if (typeof a.icon !== 'string' || !a.icon.startsWith('/')) fail(id, 'icon ha de ser un camí que comenci per /');
  if (!Array.isArray(a.screenshots)) fail(id, 'screenshots ha de ser una llista');
  for (const k of ['playUrl', 'fdroidUrl', 'repoUrl'] as const) {
    if (a[k] !== null && !(typeof a[k] === 'string' && /^https:\/\//.test(a[k]))) fail(id, `${k} ha de ser null o una URL https`);
  }
  return a as App;
}

const seen = new Set<string>();
export const apps: App[] = (raw as unknown[]).map((a) => validate(a, seen));
