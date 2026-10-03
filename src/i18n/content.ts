export type Lang = "de" | "en";

export const site = {
  name: "Daniel Riewe",
  url: "https://daniel-riewe.pages.dev",
  xHandle: "@Jesaja",
  xUrl: "https://x.com/Jesaja",
  aiKalorienUrl: "https://ai-kalorien.pages.dev/",
};

type NavItem = { href: string; label: string };

export const ui = {
  de: {
    skip: "Zum Inhalt springen",
    nav: [
      { href: "/", label: "Start" },
      { href: "/vita/", label: "Vita" },
      { href: "/projekte/", label: "Projekte" },
    ] as NavItem[],
    projectsLabel: "Projekte",
    aboutLabel: "Vita",
    homeLabel: "Start",
    langOther: "EN",
    langOtherHref: "/en/",
    readMore: "Mehr lesen",
    backProjects: "Alle Projekte",
    footerNote: "Persönliche Seite",
    contactFollows: "Kontakt folgt",
    photoPlaceholder: "[Foto folgt]",
  },
  en: {
    skip: "Skip to content",
    nav: [
      { href: "/en/", label: "Home" },
      { href: "/en/about/", label: "About" },
      { href: "/en/projects/", label: "Projects" },
    ] as NavItem[],
    projectsLabel: "Projects",
    aboutLabel: "About",
    homeLabel: "Home",
    langOther: "DE",
    langOtherHref: "/",
    readMore: "Read more",
    backProjects: "All projects",
    footerNote: "Personal site",
    contactFollows: "Contact coming soon",
    photoPlaceholder: "[Photo forthcoming]",
  },
};

export const home = {
  de: {
    title: "Daniel Riewe",
    description:
      "Der Typ mit der roten Kappe am Meer. Hip-Hop in Berlin, Nintendo, Atari, heute Akai MPC.",
    eyebrow: "Portfolio & Vita",
    headline: "Hallo — ich bin Daniel.",
    lede: "Der Typ mit der roten Kappe am Meer. Als Teenager Hip-Hop in Berlin, Nintendo und Atari. Heute Old-school auf einem Akai MPC. Die Projekte stehen daneben.",
    ctaVita: "Zur Vita",
    ctaProjects: "Projekte ansehen",
    projectsTitle: "Ausgewählte Projekte",
    projectsIntro: "Kurz und ehrlich — ohne Marketing-Glanz.",
  },
  en: {
    title: "Daniel Riewe",
    description:
      "The guy in the red cap by the sea. Hip-hop in Berlin, Nintendo, Atari, an Akai MPC today.",
    eyebrow: "Portfolio & about",
    headline: "Hi — I’m Daniel.",
    lede: "The guy in the red cap by the sea. Hip-hop in Berlin as a teenager, Nintendo, and Atari. Old-school on an Akai MPC now. The projects sit next to that.",
    ctaVita: "About me",
    ctaProjects: "See projects",
    projectsTitle: "Selected projects",
    projectsIntro: "Short and honest — no marketing gloss.",
  },
};

export const about = {
  de: {
    title: "Vita",
    description: "Kurz über Daniel Riewe — Berlin, Hip-Hop, Nintendo, Atari, Akai MPC.",
    eyebrow: "Über mich",
    headline: "Rote Kappe, gelbes Shirt, Meer dahinter",
    intro:
      "Der Typ mit der roten Kappe am Meer. Zur Apple-Welt, weil Atari pleite ging. Hip-Hop, Nintendo und ein MPC gehören dazu — kein Lebenslauf.",
    timeline: [
      {
        when: "Berlin",
        title: "Hip-Hop als Teenager",
        body: "Hip-Hop in Berlin, damals mit Cubase. Direct-to-disk und MIDI.",
      },
      {
        when: "Nintendo",
        title: "Konsolen, die in Deutschland liefen",
        body: "Als Kind Konsolen importiert und umgebaut, damit sie hier liefen. Eines der ersten kleinen Geschäfte. Lieber Nintendo, wenn der Kopf voll ist.",
      },
      {
        when: "Atari",
        title: "Falcon 030 im Rack",
        body: "Zwei Jahre gespart für einen Atari Falcon 030, dann in ein 19-Zoll-Rack. Hardware und System von innen.",
      },
      {
        when: "Heute",
        title: "Akai MPC",
        body: "Old-school-Hip-Hop in der freien Zeit, jetzt auf einem Akai MPC Key 37.",
      },
    ],
    contactTitle: "Kontakt",
    contactBody:
      "Öffentlich erreichbar über X. Eine direkte E-Mail-Adresse folgt hier, sobald sie freigegeben ist.",
  },
  en: {
    title: "About",
    description: "A short note on Daniel Riewe — Berlin, hip-hop, Nintendo, Atari, an Akai MPC.",
    eyebrow: "About",
    headline: "Red cap, yellow shirt, the sea behind",
    intro:
      "The guy in the red cap by the sea. Into the Apple world because Atari went bankrupt. Hip-hop, Nintendo, and an MPC come with that — not a résumé.",
    timeline: [
      {
        when: "Berlin",
        title: "Hip-hop as a teenager",
        body: "Hip-hop in Berlin, on Cubase then. Direct-to-disk and MIDI.",
      },
      {
        when: "Nintendo",
        title: "Consoles that ran in Germany",
        body: "As a kid, imported and modded consoles so they would run here. One of the first small businesses. Would rather play Nintendo when his head is full.",
      },
      {
        when: "Atari",
        title: "Falcon 030 in a rack",
        body: "Saved for two years for an Atari Falcon 030, then put it in a 19-inch rack. Hardware and system from the inside.",
      },
      {
        when: "Today",
        title: "Akai MPC",
        body: "Old-school hip-hop in free time, now on an Akai MPC Key 37.",
      },
    ],
    contactTitle: "Contact",
    contactBody:
      "Reachable publicly on X. A direct email address will appear here once it is cleared for this site.",
  },
};

export const illustrations = {
  portrait: {
    src: "/images/author-manga.jpg",
    alt: {
      de: "Illustration einer Person mit roter Kappe, runder Brille und gelbem Shirt am Strand. Kein Foto.",
      en: "Illustration of a person in a red cap, round glasses, and a yellow shirt at the beach. Not a photograph.",
    },
  },
  beach: {
    src: "/images/banner-workbench-manga.png",
    alt: {
      de: "Illustration: Strand, Holztisch mit Akai MPC, klassischem Macintosh und roter Kappe. Kein Foto.",
      en: "Illustration: a beach, a wooden table with an Akai MPC, a classic Macintosh, and a red cap. Not a photograph.",
    },
  },
};

export const hobby = {
  de: {
    title: "Nebenbei",
    body: [
      "Lieber Nintendo, wenn der Kopf voll ist.",
      "Als Teenager Hip-Hop in Berlin, damals mit Cubase.",
      "Heute dasselbe, Old-school, auf einem Akai MPC Key 37.",
      "Karate auch. Brauner Gurt.",
    ],
    trackTitle: "Hip-Hop",
    trackLabel: "Hörprobe",
    illustrationNote: "Illustration, kein Foto.",
  },
  en: {
    title: "On the side",
    body: [
      "Would rather play Nintendo when my head is full.",
      "Hip-hop in Berlin as a teenager, on Cubase then.",
      "Same thing now, old-school, on an Akai MPC Key 37.",
      "Karate too. Brown belt.",
    ],
    trackTitle: "Hip-Hop",
    trackLabel: "Listen",
    illustrationNote: "Illustration, not a photograph.",
  },
};

export type ProjectSlug =
  | "ai-kalorien"
  | "teslaviewer"
  | "billbuddy"
  | "lmm-horoskop"
  | "nova-power-logger"
  | "mars-patrol"
  | "tschechen-jahn"
  | "jesaja"
  | "praxis-it"
  | "ios-apps"
  | "ai-harness-context";

/** Apps shown on the ios-apps hub (and featured on index pages). */
export const appSlugs = [
  "ai-kalorien",
  "teslaviewer",
  "billbuddy",
  "lmm-horoskop",
  "nova-power-logger",
  "mars-patrol",
] as const satisfies readonly ProjectSlug[];

/** Home “selected projects” — apps visible, not a dead placeholder. */
export const homeProjectOrder = [
  "ai-kalorien",
  "teslaviewer",
  "billbuddy",
  "ios-apps",
  "ai-harness-context",
  "tschechen-jahn",
  "jesaja",
  "praxis-it",
] as const satisfies readonly ProjectSlug[];

/** Full projects index order. */
export const projectsIndexOrder = [
  "ios-apps",
  "ai-kalorien",
  "teslaviewer",
  "billbuddy",
  "lmm-horoskop",
  "nova-power-logger",
  "mars-patrol",
  "ai-harness-context",
  "tschechen-jahn",
  "jesaja",
  "praxis-it",
] as const satisfies readonly ProjectSlug[];

type ProjectSection = {
  heading: string;
  body: string[];
  note?: string;
  links?: { label: string; href: string }[];
};

type ProjectCopy = {
  title: string;
  tag: string;
  card: string;
  description: string;
  body: string[];
  note?: string;
  sections?: ProjectSection[];
  heroAlt?: string;
  heroCaption?: string;
  cta?: { label: string; href: string; external?: boolean };
  linksHeading?: string;
  links?: { label: string; href: string }[];
};

export const projects: Record<
  ProjectSlug,
  {
    de: ProjectCopy;
    en: ProjectCopy;
    paths: { de: string; en: string };
  }
> = {
  "ai-kalorien": {
    paths: { de: "/projekte/ai-kalorien/", en: "/en/projects/ai-kalorien/" },
    de: {
      title: "AI Kalorien",
      tag: "iOS Shortcut",
      card: "Kostenloser Kurzbefehl: Foto, Text, Barcode oder Etikett werden zu kcal und Makros in Apple Health.",
      description:
        "Kostenloser iOS-Kurzbefehl von Daniel Riewe: Mahlzeiten per Foto, Text, Barcode oder Etikett erfassen und in Apple Health speichern.",
      body: [
        "AI Kalorien ist kein App-Store-Produkt mit Abo-Trichter — sondern ein iOS-/macOS-Kurzbefehl. Du erfasst eine Mahlzeit per Kamera, Mediathek, Text, Barcode (Open Food Facts) oder Nährwertetikett und speicherst Kalorien und Makros in Apple Health.",
        "Privat gedacht: kein Tracker-Konto bei mir. Hybrid: KI dort, wo sie hilft; exakte Daten bei Verpackung. Orientierungshilfe, keine medizinische Beratung. Die ausführliche Landingpage und der Install-Link liegen unter ai-kalorien.pages.dev.",
      ],
      cta: {
        label: "Zur Landingpage",
        href: "https://ai-kalorien.pages.dev/",
        external: true,
      },
      linksHeading: "Links",
      links: [
        {
          label: "Landingpage (Cloudflare Pages)",
          href: "https://ai-kalorien.pages.dev/",
        },
        {
          label: "Quellcode auf GitHub",
          href: "https://github.com/Oxyd22/ai-kalorien",
        },
      ],
    },
    en: {
      title: "AI Kalorien",
      tag: "iOS Shortcut",
      card: "Free Shortcut: a photo, text, barcode, or label becomes calories and macros in Apple Health.",
      description:
        "Free iOS Shortcut by Daniel Riewe: log meals via photo, text, barcode, or label into Apple Health.",
      body: [
        "AI Kalorien is not an App Store product with a subscription funnel — it is an iOS/macOS Shortcut. Log a meal via camera, photo library, text, barcode (Open Food Facts), or nutrition label, then save calories and macros to Apple Health.",
        "Built for privacy: no tracker account with me. Hybrid: AI where it helps; exact data for packaged food. Guidance only — not medical advice. The full landing page and install link live at ai-kalorien.pages.dev.",
      ],
      cta: {
        label: "Open landing page",
        href: "https://ai-kalorien.pages.dev/",
        external: true,
      },
      linksHeading: "Links",
      links: [
        {
          label: "Landing page (Cloudflare Pages)",
          href: "https://ai-kalorien.pages.dev/",
        },
        {
          label: "Source on GitHub",
          href: "https://github.com/Oxyd22/ai-kalorien",
        },
      ],
    },
  },
  teslaviewer: {
    paths: { de: "/projekte/teslaviewer/", en: "/en/projects/teslaviewer/" },
    de: {
      title: "TeslaViewer",
      tag: "macOS",
      card: "Schlanke macOS-App: sechs Tesla-Dashcam- und Sentry-Feeds synchron im 3×2-Raster.",
      description:
        "TeslaViewer von Daniel Riewe — macOS-App zum synchronen Ansehen von Tesla Dashcam- und Sentry-Aufnahmen.",
      body: [
        "TeslaViewer liest die TeslaCam-Ordnerstruktur von USB oder lokalem Pfad und spielt alle sechs Kamera-Feeds eines Ereignisses synchron in einem 3×2-Grid ab — mit durchgehender Zeitleiste, Clipgrenzen und Markierung am Sentry-Auslösezeitpunkt.",
        "Weitere ehrliche Details: Ordner merken per Security-Scoped Bookmark, einzelner Kamera-Fokus, SentryClips und SavedClips; EncryptedClips werden erkannt und übersprungen. Die App wird ohne Apple Developer Program vertrieben — sie ist nicht notarisiert und nicht im App Store. Beim ersten Start verlangt macOS deshalb die übliche „Öffnen“-Bestätigung (Rechtsklick).",
      ],
      note: "Kein App-Store-Link. Distribution und Build-Hinweise stehen im öffentlichen README.",
      cta: {
        label: "Repo auf GitHub",
        href: "https://github.com/Oxyd22/TeslaViewer",
        external: true,
      },
      linksHeading: "Links",
      links: [
        {
          label: "Quellcode auf GitHub",
          href: "https://github.com/Oxyd22/TeslaViewer",
        },
      ],
    },
    en: {
      title: "TeslaViewer",
      tag: "macOS",
      card: "Lean macOS app: six Tesla dashcam and Sentry feeds in sync on a 3×2 grid.",
      description:
        "TeslaViewer by Daniel Riewe — macOS app for synchronized Tesla dashcam and Sentry playback.",
      body: [
        "TeslaViewer reads the TeslaCam folder layout from USB or a local path and plays all six camera feeds of an event in sync on a 3×2 grid — with a continuous timeline, clip boundaries, and a marker at the Sentry trigger time.",
        "Also honest: remember the last folder via a security-scoped bookmark, single-camera focus, SentryClips and SavedClips; EncryptedClips are detected and skipped. Distributed without the Apple Developer Program — not notarized, not on the App Store. On first launch macOS asks for the usual Open confirmation (right-click).",
      ],
      note: "No App Store link. Distribution and build notes are in the public README.",
      cta: {
        label: "Repo on GitHub",
        href: "https://github.com/Oxyd22/TeslaViewer",
        external: true,
      },
      linksHeading: "Links",
      links: [
        {
          label: "Source on GitHub",
          href: "https://github.com/Oxyd22/TeslaViewer",
        },
      ],
    },
  },
  billbuddy: {
    paths: { de: "/projekte/billbuddy/", en: "/en/projects/billbuddy/" },
    de: {
      title: "BillBuddy",
      tag: "iOS",
      card: "iOS-App zum Teilen von Rechnungen, ohne öffentlichen Quellcode und ohne Store-Link.",
      description:
        "BillBuddy von Daniel Riewe — iOS-App zum Teilen von Rechnungen.",
      body: [
        "BillBuddy ist eine iOS-App zum Teilen von Rechnungen — pragmatisch, ohne Store-Schaufenster auf dieser Seite.",
        "Das App-Repo ist privat; öffentlichen Quellcode gibt es hier nicht. Für Support und Issues gibt es ein separates Support-Repo.",
      ],
      note: "Kein App-Store-Link auf dieser Seite — nur freigegebene, echte Angaben.",
      cta: {
        label: "Support auf GitHub",
        href: "https://github.com/Oxyd22/billbuddy-support",
        external: true,
      },
      linksHeading: "Links",
      links: [
        {
          label: "Support-Repo auf GitHub",
          href: "https://github.com/Oxyd22/billbuddy-support",
        },
      ],
    },
    en: {
      title: "BillBuddy",
      tag: "iOS",
      card: "iOS app for splitting bills, with no public source and no store link.",
      description: "BillBuddy by Daniel Riewe — iOS app for splitting bills.",
      body: [
        "BillBuddy is an iOS app for splitting bills — pragmatic, without a storefront on this page.",
        "The app repo is private; there is no public source link here. Support and issues live in a separate support repo.",
      ],
      note: "No App Store link on this page — only cleared, real facts.",
      cta: {
        label: "Support on GitHub",
        href: "https://github.com/Oxyd22/billbuddy-support",
        external: true,
      },
      linksHeading: "Links",
      links: [
        {
          label: "Support repo on GitHub",
          href: "https://github.com/Oxyd22/billbuddy-support",
        },
      ],
    },
  },
  "lmm-horoskop": {
    paths: { de: "/projekte/lmm-horoskop/", en: "/en/projects/lmm-horoskop/" },
    de: {
      title: "LMMHoroskop",
      tag: "iOS",
      card: "iOS-Horoskop mit lokalem Apple Foundation Model; das Repo bleibt privat.",
      description:
        "LMMHoroskop von Daniel Riewe — iOS-Horoskop mit lokalem Apple Foundation Model.",
      body: [
        "LMMHoroskop ist eine iOS-App für Horoskope, die das lokale Apple Foundation Model nutzt — on-device, ohne dass ich hier ein Store-Schaufenster erfinde.",
        "Das App-Repo ist privat. Für Support und Feedback gibt es ein öffentliches Support-Repo.",
      ],
      note: "Kein App-Store-Link und kein Source-Link zum App-Repo auf dieser Seite.",
      cta: {
        label: "Support auf GitHub",
        href: "https://github.com/Oxyd22/lmm-horoskop-support",
        external: true,
      },
      linksHeading: "Links",
      links: [
        {
          label: "Support-Repo auf GitHub",
          href: "https://github.com/Oxyd22/lmm-horoskop-support",
        },
      ],
    },
    en: {
      title: "LMMHoroskop",
      tag: "iOS",
      card: "iOS horoscope using Apple’s on-device Foundation Model; the repo stays private.",
      description:
        "LMMHoroskop by Daniel Riewe — iOS horoscope with Apple’s local Foundation Model.",
      body: [
        "LMMHoroskop is an iOS horoscope app that uses Apple’s on-device Foundation Model — local inference, without inventing a storefront here.",
        "The app repo is private. Support and feedback live in a public support repo.",
      ],
      note: "No App Store link and no source link to the app repo on this page.",
      cta: {
        label: "Support on GitHub",
        href: "https://github.com/Oxyd22/lmm-horoskop-support",
        external: true,
      },
      linksHeading: "Links",
      links: [
        {
          label: "Support repo on GitHub",
          href: "https://github.com/Oxyd22/lmm-horoskop-support",
        },
      ],
    },
  },
  "nova-power-logger": {
    paths: {
      de: "/projekte/nova-power-logger/",
      en: "/en/projects/nova-power-logger/",
    },
    de: {
      title: "NovaPowerLogger",
      tag: "macOS",
      card: "macOS-Menüleisten-App für Solar- und Wechselrichterdaten, ohne öffentlichen Quellcode.",
      description:
        "NovaPowerLogger von Daniel Riewe — macOS-Menüleiste für Solar- und Wechselrichter-Daten.",
      body: [
        "NovaPowerLogger sitzt in der macOS-Menüleiste und zeigt Solar- bzw. Wechselrichter-Daten — ein Werkzeug für den Alltag am Schreibtisch, nicht für ein Store-Schaufenster.",
        "Das Repo ist privat; auf dieser Seite gibt es keinen Quellcode-Link und keinen erdichteten Download.",
      ],
      note: "Nur Beschreibung — kein öffentlicher Source- oder Store-Link freigegeben.",
    },
    en: {
      title: "NovaPowerLogger",
      tag: "macOS",
      card: "macOS menu-bar app for solar and inverter data, with no public source.",
      description:
        "NovaPowerLogger by Daniel Riewe — macOS menu bar for solar and inverter data.",
      body: [
        "NovaPowerLogger lives in the macOS menu bar and shows solar or inverter data — a desk-side tool, not a storefront.",
        "The repo is private; this page has no source link and no invented download.",
      ],
      note: "Description only — no public source or store link has been cleared.",
    },
  },
  "mars-patrol": {
    paths: { de: "/projekte/mars-patrol/", en: "/en/projects/mars-patrol/" },
    de: {
      title: "Mars Patrol",
      tag: "iOS & macOS",
      card: "Arcade-Side-Scroller: Cybertruck auf dem Mars, nativ auf iOS und macOS.",
      description:
        "Mars Patrol von Daniel Riewe — inoffizielles Fan-Arcade (SpriteKit) mit Cybertruck, Grok DE/EN und echtem macOS-Screenshot.",
      body: [
        "Arcade-Remake im Side-Scroller-Stil: Cybertruck auf dem Mars. How-to, Steuerung und Mechanik auf der Projektseite.",
      ],
      note: "Inoffizielles Fan-Projekt – nicht verbunden mit Tesla, SpaceX, xAI oder Irem. Privates Repo — kein Source-/Store-Link.",
    },
    en: {
      title: "Mars Patrol",
      tag: "iOS & macOS",
      card: "Arcade side-scroller: a Cybertruck on Mars, native on iOS and macOS.",
      description:
        "Mars Patrol by Daniel Riewe — unofficial fan arcade (SpriteKit) with Cybertruck, Grok DE/EN, and a real macOS screenshot.",
      body: [
        "Arcade remake side-scroller: Cybertruck on Mars. How-to, controls, and mechanics on the project page.",
      ],
      note: "Unofficial fan project – not affiliated with Tesla, SpaceX, xAI, or Irem. Private repo — no source/store link.",
    },
  },
  "tschechen-jahn": {
    paths: { de: "/projekte/tschechen-jahn/", en: "/en/projects/tschechen-jahn/" },
    de: {
      title: "Der Tschechen Jahn",
      tag: "Buch / Memoir",
      card: "Memoir und True Crime aus Berlin der 80er, zurückhaltend und ohne Spektakel.",
      description:
        "Der Tschechen Jahn — Memoir / True Crime Berlin 80er von Daniel Riewe. Menschlich und zurückhaltend.",
      body: [
        "Berlin, späte Siebziger und Achtziger. Ein Sohn erzählt von seinem Vater: geboren als Honsa Naplava in Prag, geflohen unter dem Namen Jan Eichler, gestrandet in West-Berlin statt New York. Aus der Diskothek am Kudamm wird ein Geschäft; aus dem Geschäft wird Kokain — hin und her zwischen Amerika und Berlin.",
        "Daniel wächst mittendrin auf. Vier Jahre alt, zwei Jahre USA, ohne dass die Mutter Bescheid weiß. Später die UFA-Fabrik, die Straße, die Namen der Stadt. Was Familienwissen ist und was öffentlich nachprüfbar, bleibt getrennt. Kein Kitsch, keine Spekulation — nur die harte Linie einer Kindheit neben dem Mann, den manche den Tschechen Jahn nannten.",
        "True Crime und Memoir in einem: die Underworld der Berliner Achtziger, gesehen aus Augenhöhe eines Kindes.",
      ],
      heroAlt: "Nächtliche Berliner Straße mit nassem Asphalt und parkendem Oldtimer, stimmungsvoll beleuchtet",
      heroCaption:
        "Stimmungsbild: nächtliche Straße in Berlin. Foto: Darius Krause / Pexels (kostenfreie Lizenz).",
    },
    en: {
      title: "Der Tschechen Jahn",
      tag: "Book / memoir",
      card: "Memoir and true crime from 1980s Berlin, restrained and not a spectacle.",
      description:
        "Der Tschechen Jahn — memoir / true crime, 1980s Berlin, by Daniel Riewe. Human and restrained.",
      body: [
        "Berlin, late seventies and eighties. A son tells the story of his father: born Honsa Naplava in Prague, escaped under the name Jan Eichler, stranded in West Berlin instead of New York. A discotheque on the Ku’damm becomes a business; the business becomes cocaine — shuttling between America and Berlin.",
        "Daniel grows up inside it. Four years old, two years in the USA, without his mother being told. Later the UFA factory, the street, the city’s names. Family memory and public record stay clearly apart. No kitsch, no speculation — just the hard line of a childhood beside the man some called the Czech Jahn.",
        "True crime and memoir in one: the Berlin underworld of the eighties, seen at a child’s eye level.",
      ],
      heroAlt: "Nighttime Berlin street with wet pavement and a parked vintage car, atmospherically lit",
      heroCaption:
        "Atmospheric image: night street in Berlin. Photo: Darius Krause / Pexels (free license).",
    },
  },
  jesaja: {
    paths: { de: "/projekte/jesaja/", en: "/en/projects/jesaja/" },
    de: {
      title: "@Jesaja auf X",
      tag: "Social / Content",
      card: "Öffentliches Profil auf X: Agenten in Produktion, Anti-Hype, ehrlich über Brüche.",
      description:
        "Daniel Riewe als @Jesaja auf X — Content zu KI-Agenten, Automatisierung und dem, was in Produktion wirklich läuft.",
      body: [
        "Unter @Jesaja schreibe ich öffentlich über Software, Agenten und Automatisierung — inkl. der Teile, die schiefgehen. Wenig Hype, möglichst viel Signal.",
        "Das Profil ist der öffentliche Einstieg; eine separate Newsletter- oder Kontaktadresse folgt auf dieser Site später.",
      ],
      cta: {
        label: "Profil auf X öffnen",
        href: "https://x.com/Jesaja",
        external: true,
      },
    },
    en: {
      title: "@Jesaja on X",
      tag: "Social / content",
      card: "Public profile on X: agents in production, anti-hype, honest about what breaks.",
      description:
        "Daniel Riewe as @Jesaja on X — writing on AI agents, automation, and what actually runs in production.",
      body: [
        "As @Jesaja I write publicly about software, agents, and automation — including the parts that go wrong. Less hype, more signal.",
        "The profile is the public entry point; a separate newsletter or contact address will follow on this site later.",
      ],
      cta: {
        label: "Open profile on X",
        href: "https://x.com/Jesaja",
        external: true,
      },
    },
  },
  "praxis-it": {
    paths: { de: "/projekte/praxis-it/", en: "/en/projects/praxis-it/" },
    de: {
      title: "Praxis-IT & Zahnarztwebsites",
      tag: "Web & IT",
      card: "Websites und IT für Zahnarztpraxen, mit öffentlichen Entwürfen zum Anschauen.",
      description:
        "Daniel Riewe: Websites und IT für Zahnarztpraxen — inkl. öffentlicher Website-Entwürfe.",
      body: [
        "Aus der Nähe zum Praxisalltag (u. a. über Jahre mit iPad-Software für Praxen) entstehen auch Websites und IT-Hilfe für Zahnarztpraxen: klar, ruhig, mobil zuerst.",
        "Öffentlich einsehbar sind Website-Entwürfe für eine Zahnarztpraxis (Praxis Klein / Dr. Gerhardt Klein): drei Richtungen, jeweils als Claude- und Grok-Variante. Die Übersicht bündelt sie — die Entwürfe sind nicht die Live-Site der Praxis.",
        "Andere Kundennamen und interne Details bleiben hier bewusst anonym. Was öffentlich wird, entscheidet die jeweilige Praxis.",
      ],
      note: "Entwürfe zum Vergleichen, nicht die offizielle Praxis-Website.",
      cta: {
        label: "Zur Entwurfs-Übersicht",
        href: "https://pk-uebersicht.jesaja-riewe.workers.dev/",
        external: true,
      },
      linksHeading: "Sechs Varianten",
      links: [
        {
          label: "Ruhige Premium — Claude",
          href: "https://pk-ruhige-premium-claude.jesaja-riewe.workers.dev",
        },
        {
          label: "Ruhige Premium — Grok",
          href: "https://pk-ruhige-premium-grok.jesaja-riewe.workers.dev",
        },
        {
          label: "Patientenreise — Claude",
          href: "https://pk-patientenreise-claude.jesaja-riewe.workers.dev",
        },
        {
          label: "Patientenreise — Grok",
          href: "https://pk-patientenreise-grok.jesaja-riewe.workers.dev",
        },
        {
          label: "Implantologie-Fokus — Claude",
          href: "https://pk-implant-fokus-claude.jesaja-riewe.workers.dev",
        },
        {
          label: "Implantologie-Fokus — Grok",
          href: "https://pk-implant-fokus-grok.jesaja-riewe.workers.dev",
        },
      ],
    },
    en: {
      title: "Practice IT & dental websites",
      tag: "Web & IT",
      card: "Websites and IT for dental practices, with public drafts you can open.",
      description:
        "Daniel Riewe: websites and IT for dental practices — including public website drafts.",
      body: [
        "Closeness to practice life (including years with iPad software for clinics) also leads to websites and IT help for dental practices: clear, calm, mobile first.",
        "Publicly viewable are website drafts for a dental practice (Praxis Klein / Dr. Gerhardt Klein): three directions, each as a Claude and a Grok variant. The overview collects them — the drafts are not the practice’s live site.",
        "Other client names and internal details stay deliberately anonymous here. What goes public is the practice’s call.",
      ],
      note: "Drafts for comparison, not the official practice website.",
      cta: {
        label: "Open draft overview",
        href: "https://pk-uebersicht.jesaja-riewe.workers.dev/",
        external: true,
      },
      linksHeading: "Six variants",
      links: [
        {
          label: "Calm Premium — Claude",
          href: "https://pk-ruhige-premium-claude.jesaja-riewe.workers.dev",
        },
        {
          label: "Calm Premium — Grok",
          href: "https://pk-ruhige-premium-grok.jesaja-riewe.workers.dev",
        },
        {
          label: "Patient journey — Claude",
          href: "https://pk-patientenreise-claude.jesaja-riewe.workers.dev",
        },
        {
          label: "Patient journey — Grok",
          href: "https://pk-patientenreise-grok.jesaja-riewe.workers.dev",
        },
        {
          label: "Implant focus — Claude",
          href: "https://pk-implant-fokus-claude.jesaja-riewe.workers.dev",
        },
        {
          label: "Implant focus — Grok",
          href: "https://pk-implant-fokus-grok.jesaja-riewe.workers.dev",
        },
      ],
    },
  },
  "ios-apps": {
    paths: { de: "/projekte/ios-apps/", en: "/en/projects/ios-apps/" },
    de: {
      title: "Eigene Apps",
      tag: "iOS & macOS",
      card: "Übersicht der eigenen Apps, ehrlich und ohne erfundene Store-Links.",
      description:
        "Persönliche iOS- und macOS-Apps von Daniel Riewe — Übersicht mit Links zu den Projektseiten.",
      body: [
        "Hier die freigegebenen eigenen Apps — iOS und macOS, Shortcut und Menüleiste, Arcade und Werkzeug. Jede hat eine eigene Projektseite mit dem, was öffentlich gesagt werden darf.",
        "AI Kalorien hat zusätzlich eine eigene Landingpage. Öffentliche Repos und Support-Links stehen dort, wo sie existieren; private Repos bleiben ohne Source-Link. Keine erfundenen Screenshots, keine erfundenen App-Store-URLs.",
      ],
    },
    en: {
      title: "Personal apps",
      tag: "iOS & macOS",
      card: "Overview of the personal apps, honest and without invented store links.",
      description:
        "Personal iOS and macOS apps by Daniel Riewe — overview with links to project pages.",
      body: [
        "Here are the cleared personal apps — iOS and macOS, Shortcut and menu bar, arcade and utility. Each has its own project page with what can be said publicly.",
        "AI Kalorien also has its own landing page. Public repos and support links appear where they exist; private repos stay without a source link. No invented screenshots, no invented App Store URLs.",
      ],
    },
  },
  "ai-harness-context": {
    paths: {
      de: "/projekte/ai-harness-context/",
      en: "/en/projects/ai-harness-context/",
    },
    de: {
      title: "AI Harness Context",
      tag: "KI / Agent-Harness",
      card: "Experimente mit Context und Multi-Agent-Arbeit, von F.R.I.D.A.Y. über jarvis bis edith.",
      description:
        "AI Harness Context von Daniel Riewe — Experimente rund um AI Context Studio, Multi-Agent-Protokoll und projekt-lokale Blueprints.",
      body: [
        "Unter dem Dach AI Context Studio experimentiere ich mit Harness- und Content-Systemen: Generationen von F.R.I.D.A.Y. über jarvis bis edith. Immer Mensch plus KI — Content und Agent-Harness, die mir Arbeit abnehmen, ohne die Kontrolle zu ersetzen.",
        "Viel davon ist Werkstatt: ausprobieren, was hält, was bricht, was sich lohnt zu dokumentieren. Hier die freigegebenen Stücke — ehrlich, ohne Secrets und ohne private Source-Links.",
      ],
      sections: [
        {
          heading: "ContextKit",
          body: [
            "Ein projekt-lokales Second Brain / Blueprint für iOS-Arbeit mit Claude Code: Struktur, Skills und Konventionen, die im Repo liegen statt in einem losen Chat-Verlauf.",
          ],
          note: "Konzept — das Repo ist privat; hier kein Quellcode-Link.",
        },
        {
          heading: "just-the-two-of-us",
          body: [
            "Öffentliches Multi-Agent-Protokoll: Grok und Claude arbeiten an echter Software zusammen — nur über Shared Files und Git, ohne direkte API zwischen den Anbietern. Protokoll, Starter-Kits und Retrospektiven liegen im öffentlichen Repo.",
          ],
          links: [
            {
              label: "Repo auf GitHub",
              href: "https://github.com/Oxyd22/just-the-two-of-us",
            },
          ],
        },
        {
          heading: "FRIDAY-YT-Tech",
          body: [
            "Idee für eine Faceless-/Tech-Shorts-Pipeline: von Rohstoff zu kurzen Clips, ohne Gesicht vor der Kamera. Noch Konzept, kein fertiges Produkt.",
          ],
          note: "Konzept — das Repo ist privat; hier kein Quellcode-Link.",
        },
        {
          heading: "Öffentliche Assets",
          body: [
            "Zwei öffentliche Asset-Repos mit Rohmaterial (Bilder, Videos, Visuals) für die Content-Systeme F.R.I.D.A.Y. und jarvis — ohne Harness-Source, nur Assets.",
          ],
          links: [
            {
              label: "f-r-i-d-a-y-assets auf GitHub",
              href: "https://github.com/Oxyd22/f-r-i-d-a-y-assets",
            },
            {
              label: "jarvis-assets auf GitHub",
              href: "https://github.com/Oxyd22/jarvis-assets",
            },
          ],
        },
      ],
      cta: {
        label: "just-the-two-of-us auf GitHub",
        href: "https://github.com/Oxyd22/just-the-two-of-us",
        external: true,
      },
      linksHeading: "Öffentliche Links",
      links: [
        {
          label: "just-the-two-of-us (Protokoll & Kits)",
          href: "https://github.com/Oxyd22/just-the-two-of-us",
        },
        {
          label: "f-r-i-d-a-y-assets",
          href: "https://github.com/Oxyd22/f-r-i-d-a-y-assets",
        },
        {
          label: "jarvis-assets",
          href: "https://github.com/Oxyd22/jarvis-assets",
        },
      ],
    },
    en: {
      title: "AI Harness Context",
      tag: "AI / agent harness",
      card: "Experiments with context and multi-agent work, from F.R.I.D.A.Y. through jarvis to edith.",
      description:
        "AI Harness Context by Daniel Riewe — experiments around AI Context Studio, a multi-agent protocol, and project-local blueprints.",
      body: [
        "Under the umbrella of AI Context Studio I experiment with harness and content systems: generations from F.R.I.D.A.Y. through jarvis to edith. Always human plus AI — content and agent harnesses that take work off my plate without replacing control.",
        "Much of it is workshop: try what holds, what breaks, what is worth documenting. Here are the pieces cleared for this site — honest, no secrets, no private source links.",
      ],
      sections: [
        {
          heading: "ContextKit",
          body: [
            "A project-local second brain / blueprint for iOS work with Claude Code: structure, skills, and conventions that live in the repo instead of a loose chat history.",
          ],
          note: "Concept — the repo is private; no source link here.",
        },
        {
          heading: "just-the-two-of-us",
          body: [
            "A public multi-agent protocol: Grok and Claude collaborate on real software — through shared files and Git only, with no direct API between vendors. Protocol, starter kits, and retrospectives live in the public repo.",
          ],
          links: [
            {
              label: "Repo on GitHub",
              href: "https://github.com/Oxyd22/just-the-two-of-us",
            },
          ],
        },
        {
          heading: "FRIDAY-YT-Tech",
          body: [
            "An idea for a faceless / tech-shorts pipeline: from raw material to short clips, without a face on camera. Still a concept, not a finished product.",
          ],
          note: "Concept — the repo is private; no source link here.",
        },
        {
          heading: "Public assets",
          body: [
            "Two public asset repos with raw material (images, videos, visuals) for the F.R.I.D.A.Y. and jarvis content systems — assets only, no harness source.",
          ],
          links: [
            {
              label: "f-r-i-d-a-y-assets on GitHub",
              href: "https://github.com/Oxyd22/f-r-i-d-a-y-assets",
            },
            {
              label: "jarvis-assets on GitHub",
              href: "https://github.com/Oxyd22/jarvis-assets",
            },
          ],
        },
      ],
      cta: {
        label: "just-the-two-of-us on GitHub",
        href: "https://github.com/Oxyd22/just-the-two-of-us",
        external: true,
      },
      linksHeading: "Public links",
      links: [
        {
          label: "just-the-two-of-us (protocol & kits)",
          href: "https://github.com/Oxyd22/just-the-two-of-us",
        },
        {
          label: "f-r-i-d-a-y-assets",
          href: "https://github.com/Oxyd22/f-r-i-d-a-y-assets",
        },
        {
          label: "jarvis-assets",
          href: "https://github.com/Oxyd22/jarvis-assets",
        },
      ],
    },
  },
};

export const cardMedia: Record<
  ProjectSlug,
  { src: string; alt: Record<Lang, string>; pixel?: boolean }
> = {
  "ai-kalorien": {
    src: "/images/ai-kalorien-card.webp",
    alt: {
      de: "Screenshot des Kurzbefehls: Tageskalorien eingetragen, mit Fortschritt in Apple Health",
      en: "Shortcut screenshot: daily calories logged, with progress toward Apple Health",
    },
  },
  teslaviewer: {
    src: "/images/teslaviewer-card.webp",
    pixel: true,
    alt: {
      de: "Pixelbild eines Fensters mit sechs Kamera-Kacheln im 3×2-Raster",
      en: "Pixel illustration of a window with six camera tiles in a 3×2 grid",
    },
  },
  billbuddy: {
    src: "/images/billbuddy-card.webp",
    pixel: true,
    alt: {
      de: "Pixelbild einer Rechnung, die in zwei Stapel geteilt wird",
      en: "Pixel illustration of a receipt split into two stacks",
    },
  },
  "lmm-horoskop": {
    src: "/images/lmm-horoskop-card.webp",
    pixel: true,
    alt: {
      de: "Pixelbild eines Nachthimmels mit Mond über einem kleinen Bildschirm",
      en: "Pixel illustration of a night sky and moon above a small screen",
    },
  },
  "nova-power-logger": {
    src: "/images/nova-power-logger-card.webp",
    pixel: true,
    alt: {
      de: "Pixelbild einer Menüleiste mit Sonne und grünen Solar-Balken",
      en: "Pixel illustration of a menu bar with a sun and green solar bars",
    },
  },
  "mars-patrol": {
    src: "/images/mars-patrol-card.webp",
    alt: {
      de: "Titelbild von Mars Patrol: Cybertruck, Startrampe und Marslandschaft",
      en: "Mars Patrol title art: Cybertruck, launch tower, and Martian landscape",
    },
  },
  "tschechen-jahn": {
    src: "/images/tschechen-jahn-card.webp",
    alt: {
      de: "Nachtstraße mit Käfer und Laternen in lila-rosa Licht",
      en: "Night street with a Beetle and street lamps in purple-pink light",
    },
  },
  jesaja: {
    src: "/images/jesaja-card.webp",
    pixel: true,
    alt: {
      de: "Pixelbild eines Terminals mit Sprechblasen, ohne Porträt",
      en: "Pixel illustration of a terminal and speech bubbles, no portrait",
    },
  },
  "praxis-it": {
    src: "/images/praxis-it-card.webp",
    alt: {
      de: "Ausschnitt eines Praxis-Website-Entwurfs: blaues Behandlungszimmer",
      en: "Crop of a practice-website draft: a blue treatment room",
    },
  },
  "ios-apps": {
    src: "/images/ios-apps-card.webp",
    pixel: true,
    alt: {
      de: "Pixel-Raster aus sechs farbigen App-Kacheln",
      en: "Pixel grid of six colored app tiles",
    },
  },
  "ai-harness-context": {
    src: "/images/ai-harness-context-card.webp",
    pixel: true,
    alt: {
      de: "Pixelbild von drei verbundenen Knoten für Agenten-Experimente",
      en: "Pixel illustration of three connected nodes for agent experiments",
    },
  },
};

export const projectsIndex = {
  de: {
    title: "Projekte",
    description:
      "Projekte von Daniel Riewe — Apps, AI Harness, Memoir, X, Praxis-IT.",
    eyebrow: "Arbeit & Experimente",
    headline: "Projekte",
    intro:
      "Apps, Side-Hustle und Geschichten — nebeneinander, ohne Marketing-Glanz.",
  },
  en: {
    title: "Projects",
    description:
      "Projects by Daniel Riewe — apps, AI harness, memoir, X, practice IT.",
    eyebrow: "Work & experiments",
    headline: "Projects",
    intro: "Apps, side hustle, and stories — side by side, without marketing gloss.",
  },
};

export function langPath(lang: Lang, dePath: string, enPath: string) {
  return lang === "de" ? dePath : enPath;
}

export function alternatePath(
  lang: Lang,
  slug?: ProjectSlug | "home" | "about" | "projects",
) {
  if (!slug || slug === "home") return lang === "de" ? "/en/" : "/";
  if (slug === "about") return lang === "de" ? "/en/about/" : "/vita/";
  if (slug === "projects") return lang === "de" ? "/en/projects/" : "/projekte/";
  return lang === "de" ? projects[slug].paths.en : projects[slug].paths.de;
}
