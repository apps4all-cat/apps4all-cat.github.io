// Textos i adreces de cada idioma. El català és l'idioma per defecte (arrel); el castellà va a /es/.
import type { Lang } from './data/apps';

export type { Lang };

export const routes = {
  ca: { home: '/', support: '/suport/', about: '/sobre/', privacy: '/privacitat/', app: (id: string) => `/apps/${id}/` },
  es: { home: '/es/', support: '/es/apoyo/', about: '/es/sobre/', privacy: '/es/privacidad/', app: (id: string) => `/es/apps/${id}/` },
} as const;

export type Page = 'home' | 'support' | 'about' | 'privacy';

// Nom de cada idioma en la seva llengua (selector) i en la llengua de la pàgina (fitxa de l'app).
export const langName: Record<Lang, string> = { ca: 'Català', es: 'Castellano' };
export const langNameIn: Record<Lang, Record<Lang, string>> = {
  ca: { ca: 'Català', es: 'Castellà' },
  es: { ca: 'Catalán', es: 'Castellano' },
};

export const t = {
  ca: {
    siteDesc: 'Apps gratuïtes, sense anuncis i sense rastreig, per resoldre necessitats del dia a dia.',
    skip: 'Vés al contingut',
    nav: { apps: 'Apps', about: 'Qui som', support: 'Convida a un cafè' },
    home: {
      title: 'Apps que resolen necessitats del dia a dia',
      lead: 'Aplicacions gratuïtes i senzilles, fetes per a tothom: sense anuncis, sense rastreig i amb les teves dades al teu mòbil.',
      principles: [
        ['Gratuïtes', 'Sense versions de pagament ni funcions bloquejades.'],
        ['Sense anuncis', 'Cap anunci, mai.'],
        ['Sense rastreig', 'No recullen cap dada teva.'],
        ['Al teu mòbil', 'La majoria ni tan sols necessiten Internet.'],
      ],
      appsTitle: 'Les apps',
    },
    app: {
      forSchool: "Per a l'escola",
      version: 'Versió',
      languages: 'Idiomes',
      permissions: 'Permisos',
      noPermissions: "Cap. Ni tan sols el d'Internet.",
      features: 'Què hi trobaràs',
      screenshots: 'Captures',
      get: 'Descarrega-la',
      soon: 'Aviat a Google Play i a F-Droid.',
      privacy: 'Política de privadesa',
      source: 'Codi font',
      back: '← Totes les apps',
    },
    support: {
      title: 'Convida a un cafè',
      lead: "Si alguna d'aquestes apps t'ha resolt una necessitat del dia a dia, pots convidar-me a un cafè.",
      body: [
        'Les apps són i seguiran sent gratuïtes. Fer-les no costa diners a qui les fa servir, però sí a qui les fa: hores de feina, mòbils de proves, la quota de les botigues i el manteniment perquè continuïn funcionant amb cada versió nova d\'Android.',
        'No obtens res a canvi: les apps són idèntiques per a tothom, hagi aportat o no. És precisament la idea.',
      ],
      minors: 'Si ets menor d\'edat, demana-ho a una persona adulta.',
      liberapay: 'Aportació periòdica o puntual. Comissions baixes.',
      paypal: 'Aportació puntual amb PayPal o targeta.',
      soon: 'Les opcions per fer una aportació estaran disponibles aviat.',
      thanks: 'Moltes gràcies!',
    },
    about: {
      title: 'Qui som',
      body: [
        "Apps4All és un projecte personal d'aplicacions pensades per resoldre necessitats concretes del dia a dia.",
        "Cada app neix d'un problema real: una persona gran a qui costa trucar a la família, algú que s'oblida de prendre la medicació, un alumne que ha d'estudiar els verbs irregulars o les capitals del món, o les trucades comercials que no s'acaben mai.",
      ],
      principlesTitle: 'Com són les apps',
      principles: [
        ['Gratuïtes, i ho seran sempre.', 'Sense versions de pagament ni funcions bloquejades.'],
        ['Sense publicitat.', 'Cap anunci, mai.'],
        ['Sense rastreig.', 'No recullen cap dada teva ni fan servir serveis d\'analítica.'],
        ['Les teves dades es queden al teu mòbil.', 'La majoria ni tan sols necessiten Internet.'],
        ['Només els permisos imprescindibles.', ''],
        ['Fàcils d\'usar,', 'també per a persones grans o amb poca experiència amb el mòbil.'],
      ],
      contact: 'Contacte',
    },
    privacy: {
      title: 'Privadesa d\'aquest web',
      body: [
        'Aquest web no fa servir galetes i no recull cap dada personal.',
        "Per saber quantes visites rep, fa servir GoatCounter, un comptador de visites que no guarda adreces IP ni crea perfils: només compta quantes vegades es mira cada pàgina, des de quin tipus de dispositiu, de quin país i des de quina pàgina s'hi arriba.",
        "Cada app té la seva pròpia política de privadesa, enllaçada a la pàgina de l'app.",
      ],
    },
    footer: { tagline: 'Apps gratuïtes, sense anuncis i sense rastreig.', privacy: 'Privadesa', contact: 'Contacte' },
    notFound: { title: 'Aquesta pàgina no existeix', back: "Torna a l'inici" },
  },
  es: {
    siteDesc: 'Apps gratuitas, sin anuncios ni rastreo, para resolver necesidades del día a día.',
    skip: 'Ir al contenido',
    nav: { apps: 'Apps', about: 'Quiénes somos', support: 'Invita a un café' },
    home: {
      title: 'Apps que resuelven necesidades del día a día',
      lead: 'Aplicaciones gratuitas y sencillas, hechas para todos: sin anuncios, sin rastreo y con tus datos en tu móvil.',
      principles: [
        ['Gratuitas', 'Sin versiones de pago ni funciones bloqueadas.'],
        ['Sin anuncios', 'Ningún anuncio, nunca.'],
        ['Sin rastreo', 'No recogen ningún dato tuyo.'],
        ['En tu móvil', 'La mayoría ni siquiera necesitan Internet.'],
      ],
      appsTitle: 'Las apps',
    },
    app: {
      forSchool: 'Para la escuela',
      version: 'Versión',
      languages: 'Idiomas',
      permissions: 'Permisos',
      noPermissions: 'Ninguno. Ni siquiera el de Internet.',
      features: 'Qué encontrarás',
      screenshots: 'Capturas',
      get: 'Descárgala',
      soon: 'Pronto en Google Play y en F-Droid.',
      privacy: 'Política de privacidad',
      source: 'Código fuente',
      back: '← Todas las apps',
    },
    support: {
      title: 'Invita a un café',
      lead: 'Si alguna de estas apps te ha resuelto una necesidad del día a día, puedes invitarme a un café.',
      body: [
        'Las apps son y seguirán siendo gratuitas. Hacerlas no le cuesta dinero a quien las usa, pero sí a quien las hace: horas de trabajo, móviles de pruebas, la cuota de las tiendas y el mantenimiento para que sigan funcionando con cada nueva versión de Android.',
        'No obtienes nada a cambio: las apps son idénticas para todo el mundo, haya aportado o no. Esa es precisamente la idea.',
      ],
      minors: 'Si eres menor de edad, pídeselo a una persona adulta.',
      liberapay: 'Aportación periódica o puntual. Comisiones bajas.',
      paypal: 'Aportación puntual con PayPal o tarjeta.',
      soon: 'Las opciones para hacer una aportación estarán disponibles pronto.',
      thanks: '¡Muchas gracias!',
    },
    about: {
      title: 'Quiénes somos',
      body: [
        'Apps4All es un proyecto personal de aplicaciones pensadas para resolver necesidades concretas del día a día.',
        'Cada app nace de un problema real: una persona mayor a quien le cuesta llamar a su familia, alguien que olvida tomar su medicación, un alumno que tiene que estudiar los verbos irregulares o las capitales del mundo, o las llamadas comerciales que no terminan nunca.',
      ],
      principlesTitle: 'Cómo son las apps',
      principles: [
        ['Gratuitas, y lo serán siempre.', 'Sin versiones de pago ni funciones bloqueadas.'],
        ['Sin publicidad.', 'Ningún anuncio, nunca.'],
        ['Sin rastreo.', 'No recogen ningún dato tuyo ni usan servicios de analítica.'],
        ['Tus datos se quedan en tu móvil.', 'La mayoría ni siquiera necesitan Internet.'],
        ['Solo los permisos imprescindibles.', ''],
        ['Fáciles de usar,', 'también para personas mayores o con poca experiencia con el móvil.'],
      ],
      contact: 'Contacto',
    },
    privacy: {
      title: 'Privacidad de esta web',
      body: [
        'Esta web no usa cookies y no recoge ningún dato personal.',
        'Para saber cuántas visitas recibe, usa GoatCounter, un contador de visitas que no guarda direcciones IP ni crea perfiles: solo cuenta cuántas veces se mira cada página, desde qué tipo de dispositivo, de qué país y desde qué página se llega.',
        'Cada app tiene su propia política de privacidad, enlazada en la página de la app.',
      ],
    },
    footer: { tagline: 'Apps gratuitas, sin anuncios y sin rastreo.', privacy: 'Privacidad', contact: 'Contacto' },
    notFound: { title: 'Esta página no existe', back: 'Vuelve al inicio' },
  },
} as const;
