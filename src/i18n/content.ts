export type Lang = "de" | "en";

export const site = {
  name: "Daniel Riewe",
  url: "https://daniel-riewe.pages.dev",
  xHandle: "@Jesaja",
  xUrl: "https://x.com/Jesaja",
  aiKalorienUrl: "https://oxyd22.github.io/ai-kalorien/",
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
    footerNote: "Persönliche Seite · Holzgerlingen / Region Stuttgart",
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
    footerNote: "Personal site · Holzgerlingen / Stuttgart region",
    contactFollows: "Contact coming soon",
    photoPlaceholder: "[Photo forthcoming]",
  },
};

export const home = {
  de: {
    title: "Daniel Riewe",
    description:
      "iOS-Entwickler bei Mercedes-Benz. Side-Hustle: KI-Bots und Automatisierung. Persönliche Projekte — von Shortcuts bis Memoir.",
    eyebrow: "Portfolio & Vita",
    headline: "Hallo — ich bin Daniel.",
    lede: "iOS-Entwickler bei Mercedes-Benz, früher Apps für Zahnarztpraxen. Nebenbei baue ich KI-Bots, Automatisierung und Dinge, die mir unter den Nägeln brennen — von einem kostenlosen Kalorien-Shortcut bis zu einem Memoir über Berlin in den Achtzigern.",
    ctaVita: "Zur Vita",
    ctaProjects: "Projekte ansehen",
    projectsTitle: "Ausgewählte Projekte",
    projectsIntro: "Kurz und ehrlich — ohne Marketing-Glanz.",
  },
  en: {
    title: "Daniel Riewe",
    description:
      "iOS developer at Mercedes-Benz. Side hustle: AI bots and automation. Personal projects — from Shortcuts to memoir.",
    eyebrow: "Portfolio & about",
    headline: "Hi — I’m Daniel.",
    lede: "iOS developer at Mercedes-Benz, formerly building apps for dental practices. On the side I build AI bots, automation, and things that won’t leave me alone — from a free calorie Shortcut to a memoir about Berlin in the 1980s.",
    ctaVita: "About me",
    ctaProjects: "See projects",
    projectsTitle: "Selected projects",
    projectsIntro: "Short and honest — no marketing gloss.",
  },
};

export const about = {
  de: {
    title: "Vita",
    description: "Kurz über Daniel Riewe — iOS, Praxis-IT, KI und Schreiben.",
    eyebrow: "Über mich",
    headline: "Ein knapper Lebens- und Arbeitsweg",
    intro:
      "Ich bin 51, lebe in der Region Stuttgart (Holzgerlingen und Umgebung) und arbeite als iOS-Entwickler bei Mercedes-Benz. Technik ist mein Handwerk; neben dem Hauptjob bleiben Raum für Experimente und für Geschichten, die erzählt werden wollen.",
    timeline: [
      {
        when: "Heute",
        title: "iOS-Entwickler · Mercedes-Benz",
        body: "Apps und Features für die mobile Welt eines großen Herstellers — solide, teamförmig, produktnah.",
      },
      {
        when: "4 Jahre",
        title: "solutio / charly",
        body: "iPad-Apps für Zahnarztpraxen. Nähe zu Praxisalltag, Abrechnung und den Menschen hinter dem Stuhl.",
      },
      {
        when: "Nebenbei",
        title: "KI-Bots & Automatisierung",
        body: "Side-Hustle: Agenten, Shortcuts, kleine Systeme, die Arbeit abnehmen — inkl. der Teile, die kaputtgehen.",
      },
      {
        when: "Schreiben",
        title: "Der Tschechen Jahn",
        body: "Ein Memoir / True-Crime-Stoff aus Berlin der 80er. Zurückhaltend, menschlich — kein Voyeurismus.",
      },
    ],
    contactTitle: "Kontakt",
    contactBody:
      "Öffentlich erreichbar über X. Eine direkte E-Mail-Adresse folgt hier, sobald sie freigegeben ist.",
  },
  en: {
    title: "About",
    description: "A short note on Daniel Riewe — iOS, practice IT, AI, and writing.",
    eyebrow: "About",
    headline: "A brief path through work and life",
    intro:
      "I’m 51, live in the Stuttgart region (Holzgerlingen and nearby), and work as an iOS developer at Mercedes-Benz. Craft is the day job; beside it there is room for experiments and for stories that insist on being told.",
    timeline: [
      {
        when: "Now",
        title: "iOS developer · Mercedes-Benz",
        body: "Apps and features in the mobile world of a large manufacturer — solid, team-shaped, close to the product.",
      },
      {
        when: "4 years",
        title: "solutio / charly",
        body: "iPad apps for dental practices. Close to daily practice life, billing, and the people behind the chair.",
      },
      {
        when: "On the side",
        title: "AI bots & automation",
        body: "Side hustle: agents, Shortcuts, small systems that take work off your plate — including the parts that break.",
      },
      {
        when: "Writing",
        title: "Der Tschechen Jahn",
        body: "A memoir / true-crime thread from 1980s Berlin. Restrained, human — not voyeuristic.",
      },
    ],
    contactTitle: "Contact",
    contactBody:
      "Reachable publicly on X. A direct email address will appear here once it is cleared for this site.",
  },
};

export type ProjectSlug =
  | "ai-kalorien"
  | "tschechen-jahn"
  | "jesaja"
  | "praxis-it"
  | "ios-apps";

export const projects: Record<
  ProjectSlug,
  {
    de: {
      title: string;
      tag: string;
      card: string;
      description: string;
      body: string[];
      note?: string;
      cta?: { label: string; href: string; external?: boolean };
    };
    en: {
      title: string;
      tag: string;
      card: string;
      description: string;
      body: string[];
      note?: string;
      cta?: { label: string; href: string; external?: boolean };
    };
    paths: { de: string; en: string };
  }
> = {
  "ai-kalorien": {
    paths: { de: "/projekte/ai-kalorien/", en: "/en/projects/ai-kalorien/" },
    de: {
      title: "AI Kalorien",
      tag: "iOS Shortcut",
      card: "Kostenloser Kurzbefehl: Foto, Text, Barcode oder Etikett → kcal & Makros in Apple Health. Ohne Abo, ohne eigenes Konto.",
      description:
        "Kostenloser iOS-Kurzbefehl von Daniel Riewe: Mahlzeiten per Foto, Text, Barcode oder Etikett erfassen und in Apple Health speichern.",
      body: [
        "AI Kalorien ist kein App-Store-Produkt mit Abo-Trichter — sondern ein iOS-Kurzbefehl. Du erfasst eine Mahlzeit per Kamera, Mediathek, Text, Barcode (Open Food Facts) oder Nährwertetikett und speicherst Kalorien und Makros in Apple Health.",
        "Privat gedacht: kein Tracker-Konto bei mir. Hybrid: KI dort, wo sie hilft; exakte Daten bei Verpackung. Orientierungshilfe, keine medizinische Beratung.",
      ],
      cta: {
        label: "Zur Landingpage",
        href: "https://oxyd22.github.io/ai-kalorien/",
        external: true,
      },
    },
    en: {
      title: "AI Kalorien",
      tag: "iOS Shortcut",
      card: "Free Shortcut: photo, text, barcode, or label → calories & macros in Apple Health. No subscription, no account of mine.",
      description:
        "Free iOS Shortcut by Daniel Riewe: log meals via photo, text, barcode, or label into Apple Health.",
      body: [
        "AI Kalorien is not an App Store product with a subscription funnel — it is an iOS Shortcut. Log a meal via camera, photo library, text, barcode (Open Food Facts), or nutrition label, then save calories and macros to Apple Health.",
        "Built for privacy: no tracker account with me. Hybrid: AI where it helps; exact data for packaged food. Guidance only — not medical advice.",
      ],
      cta: {
        label: "Open landing page",
        href: "https://oxyd22.github.io/ai-kalorien/",
        external: true,
      },
    },
  },
  "tschechen-jahn": {
    paths: { de: "/projekte/tschechen-jahn/", en: "/en/projects/tschechen-jahn/" },
    de: {
      title: "Der Tschechen Jahn",
      tag: "Buch / Memoir",
      card: "Memoir und True Crime aus Berlin der 80er. Trauma-bewusst, zurückhaltend — kein Spektakel.",
      description:
        "Der Tschechen Jahn — Memoir / True Crime Berlin 80er von Daniel Riewe. Menschlich und zurückhaltend.",
      body: [
        "Ein Buchprojekt über eine Geschichte aus Berlin in den achtziger Jahren — Memoir und True Crime, ohne Sensationshunger.",
        "Der Ton soll menschlich bleiben: Trauma-aware, ohne Voyeurismus, ohne Spekulation über Details, die nicht hierher gehören. Was veröffentlicht wird, kommt, wenn der Text so weit ist.",
      ],
      note: "Inhalt und Veröffentlichungsdetails folgen. Keine Spekulation auf dieser Seite.",
    },
    en: {
      title: "Der Tschechen Jahn",
      tag: "Book / memoir",
      card: "Memoir and true crime from 1980s Berlin. Trauma-aware, restrained — not a spectacle.",
      description:
        "Der Tschechen Jahn — memoir / true crime, 1980s Berlin, by Daniel Riewe. Human and restrained.",
      body: [
        "A book project about a story from 1980s Berlin — memoir and true crime, without a hunger for spectacle.",
        "The tone should stay human: trauma-aware, without voyeurism, without speculation about details that do not belong here. What gets published will arrive when the text is ready.",
      ],
      note: "Content and publication details forthcoming. No speculation on this page.",
    },
  },
  jesaja: {
    paths: { de: "/projekte/jesaja/", en: "/en/projects/jesaja/" },
    de: {
      title: "@Jesaja auf X",
      tag: "Social / Content",
      card: "Öffentliches Profil: Agenten in Produktion, Anti-Hype, ehrlich über das, was bricht.",
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
      card: "Public profile: agents in production, anti-hype, honest about what breaks.",
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
      card: "Websites und IT für Zahnarztpraxen — ruhig, vertrauenswürdig, ohne Kundennamen-Shopfenster.",
      description:
        "Daniel Riewe: Websites und IT-Unterstützung für Zahnarztpraxen. Kundendetails bleiben privat.",
      body: [
        "Aus der Nähe zum Praxisalltag (u. a. über Jahre mit iPad-Software für Praxen) entstehen auch Websites und IT-Hilfe für Zahnarztpraxen: klar, ruhig, mobil zuerst.",
        "Kundennamen und interne Details bleiben hier bewusst anonym. Was öffentlich wird, entscheidet die jeweilige Praxis.",
      ],
      note: "Keine Kundenliste auf dieser Seite.",
    },
    en: {
      title: "Practice IT & dental websites",
      tag: "Web & IT",
      card: "Websites and IT for dental practices — calm, trustworthy, without a customer name shopfront.",
      description:
        "Daniel Riewe: websites and IT support for dental practices. Client details stay private.",
      body: [
        "Closeness to practice life (including years with iPad software for clinics) also leads to websites and IT help for dental practices: clear, calm, mobile first.",
        "Client names and internal details stay deliberately anonymous here. What goes public is the practice’s call.",
      ],
      note: "No client list on this page.",
    },
  },
  "ios-apps": {
    paths: { de: "/projekte/ios-apps/", en: "/en/projects/ios-apps/" },
    de: {
      title: "Eigene iOS-Apps",
      tag: "iOS",
      card: "Mehrere eigene Apps — viele ohne öffentliche Vermarktung. Liste folgt ehrlich, nicht erfunden.",
      description:
        "Persönliche iOS-Apps von Daniel Riewe. Einige sind privat oder ohne Store-Auftritt.",
      body: [
        "Über die Jahre sind mehrere eigene iOS-Projekte entstanden. Manche sind Experimente, manche intern, manche ohne aktive Vermarktung — und deshalb hier nicht als App-Store-Schaufenster aufgeführt.",
        "Sobald freigegebene Namen und Links stehen, erscheinen sie an dieser Stelle. Bis dahin: kein Fake-Store-Link, kein erfundener App-Name.",
      ],
      note: "[App-Liste folgt — nur freigegebene, echte Einträge]",
    },
    en: {
      title: "Personal iOS apps",
      tag: "iOS",
      card: "Several personal apps — many without public marketing. An honest list will follow, not invented.",
      description:
        "Personal iOS apps by Daniel Riewe. Some are private or without a store listing.",
      body: [
        "Over the years several personal iOS projects have taken shape. Some are experiments, some internal, some without active marketing — and therefore not listed here as an App Store shop window.",
        "Once cleared names and links exist, they will appear here. Until then: no fake store links, no invented app names.",
      ],
      note: "[App list forthcoming — only cleared, real entries]",
    },
  },
};

export const projectsIndex = {
  de: {
    title: "Projekte",
    description: "Projekte von Daniel Riewe — AI Kalorien, Memoir, X, Praxis-IT, iOS.",
    eyebrow: "Arbeit & Experimente",
    headline: "Projekte",
    intro: "Fünf Stränge, die nebeneinanderlaufen — Beruf, Side-Hustle und Geschichten.",
  },
  en: {
    title: "Projects",
    description: "Projects by Daniel Riewe — AI Kalorien, memoir, X, practice IT, iOS.",
    eyebrow: "Work & experiments",
    headline: "Projects",
    intro: "Five threads running side by side — day job, side hustle, and stories.",
  },
};

export function langPath(lang: Lang, dePath: string, enPath: string) {
  return lang === "de" ? dePath : enPath;
}

export function alternatePath(lang: Lang, slug?: ProjectSlug | "home" | "about" | "projects") {
  if (!slug || slug === "home") return lang === "de" ? "/en/" : "/";
  if (slug === "about") return lang === "de" ? "/en/about/" : "/vita/";
  if (slug === "projects") return lang === "de" ? "/en/projects/" : "/projekte/";
  return lang === "de" ? projects[slug].paths.en : projects[slug].paths.de;
}
