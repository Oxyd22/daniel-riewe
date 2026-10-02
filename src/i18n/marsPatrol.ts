import type { Lang } from "./content";

export type MarsCopy = {
  eyebrow: string;
  insertCoin: string;
  lede: string[];
  titleAlt: string;
  creditsAlt: string;
  creditsCaption: string;
  shotAlt: string;
  shotCaption: string;
  worldHeading: string;
  worldBody: string[];
  grokHeading: string;
  grokBody: string[];
  howHeading: string;
  howItems: { label: string; text: string }[];
  controlsHeading: string;
  controlsNote: string;
  controlHeaders: [string, string, string, string];
  controls: [string, string, string, string][];
  mechanicsHeading: string;
  mechanicsItems: { label: string; text: string }[];
  platformsHeading: string;
  platformsBody: string;
  fanNotice: string;
  trademarks: string;
  attribution: string;
  licenseLine: string;
  privateNote: string;
};

export const marsPatrol: Record<Lang, MarsCopy> = {
  de: {
    eyebrow: "iOS & macOS · Arcade Remake",
    insertCoin: "INSERT COIN",
    lede: [
      "Side-Scroller im Arcade-Stil: Cybertruck auf dem Mars, Tesla-, SpaceX- und Grok-Motive. Nativ auf iPhone, iPad und Mac.",
      "Grok sitzt an Bord wie KITT — frech, abschaltbar, Sprache DE oder EN im Menü umschaltbar.",
      "Privates Repo. Kein Store-Link, kein Source-Link hier.",
    ],
    titleAlt: "Mars Patrol Titelbild — Pixel-Art Schriftzug und Cybertruck vor Mars-Himmel",
    creditsAlt: "Mars Patrol Credits-Art mit Cybertruck, Grok und cyanem Glow",
    creditsCaption: "Key-Art / Credits",
    shotAlt: "Mars Patrol Gameplay-Screenshot auf macOS — Cybertruck, HUD und Mars-Landschaft",
    shotCaption: "Echter macOS-Gameplay-Screenshot",
    worldHeading: "Spielwelt",
    worldBody: [
      "Cybertruck mit einzeln gefederten Rädern und rotem KITT-Scanner. Gegner: gehackte Starlinks, Mars-UFOs, gekaperter Tesla Semi, Optimus, Felsbrocken, Alien-Minen. Hintergründe mit Olympus Mons, Starbase, Tesla Diner/Supercharger und landendem Starship.",
      "Kurs: Beginner (ruhiger) oder Champion (schneller, dichter). Remake des Arcade-Klassikers Moon Patrol — alles neu themed.",
    ],
    grokHeading: "Grok & HUD",
    grokBody: [
      "Grok kommentiert wie ein 80er-Bordcomputer (Stimme „Reed“). HUD mit Emblem und KITT-Voicebox. Stimme und Musik: Menü oder Tasten V / M (Mac: ⇧⌘V / ⇧⌘M).",
      "Sprache Deutsch oder Englisch — im Hauptmenü umschaltbar. Grok-Zeilen folgen der gewählten Sprache.",
    ],
    howHeading: "So wird gespielt",
    howItems: [
      {
        label: "Ziel",
        text: "Von Start @ über Checkpoints A–Z. Schneller Checkpoint = höherer Zeitbonus. Nach Z: nächste, schnellere Runde.",
      },
      {
        label: "Springen",
        text: "Über Krater, Felsen, Minen und rollende Felsbrocken — früh abspringen (Sprung ~0,85 s).",
      },
      {
        label: "Schießen",
        text: "Jeder Schuss geht gleichzeitig nach vorn und nach oben. Gegnerschüsse sind abfangbar. Halten = Dauerfeuer.",
      },
      {
        label: "Gegner",
        text: "Starlink: rotes Auge → Senkrechtschuss. UFO: Bomben, die Krater hinterlassen. Semi & Optimus: Flachschüsse von vorn.",
      },
      {
        label: "Leben",
        text: "Beginner 3, Champion 4. Extraleben bei 10 000 / 30 000 / 50 000 Punkten. Starlink-Formation komplett abschießen → Formationsbonus.",
      },
    ],
    controlsHeading: "Steuerung",
    controlsNote:
      "Mac: Menü Game (Pause ⌘P, Grok ⇧⌘V, Musik ⇧⌘M). Hardware-Tastatur am iPad wie am Mac. Ausführliche Anleitung auch im Spiel.",
    controlHeaders: ["Aktion", "Mac-Tastatur", "iPhone / iPad", "Gamepad"],
    controls: [
      ["Springen", "Leertaste, ↑, W", "Button links unten", "A, LB, LT, Steuerkreuz ↑"],
      ["Schießen (halten = Dauerfeuer)", "X, J, F", "Button rechts unten", "B, X, RB, RT"],
      ["Pause", "P, Esc", "Pause oben rechts", "Menu / Options"],
      ["Weiter (Pause)", "Return", "Tippen", "Menu / Options"],
      ["Hauptmenü (Pause)", "Q, ⌫", "„MENÜ“ tippen", "Y"],
      ["Grok-Stimme an/aus", "V", "Hauptmenü", "Hauptmenü"],
      ["Musik an/aus", "M", "Hauptmenü", "Hauptmenü"],
    ],
    mechanicsHeading: "Mechanik kurz",
    mechanicsItems: [
      {
        label: "Sprung",
        text: "0,85 s Dauer, Scheitel 46 pt — schneller Absprung, flacher „Schwebe“-Apex.",
      },
      {
        label: "Dual-Schuss",
        text: "Vorwärts trifft Bodenhindernisse & Flachgeschosse; Aufwärts trifft Starlinks, UFOs und Bomben.",
      },
      {
        label: "Formation",
        text: "Ganze Starlink-Welle: 3 → +500, 4 → +800, 5+ → +1000.",
      },
      {
        label: "Zeitbonus",
        text: "Je schneller zum Checkpoint, desto mehr Punkte (Basis Beginner 1000 / Champion 2000).",
      },
    ],
    platformsHeading: "iOS & macOS",
    platformsBody:
      "SpriteKit nativ auf beiden Plattformen. Mac: Tastatur und Gamepad, Fokusverlust pausiert. Tests nachgeprüft: iOS 96 + 3 UI-Tests, macOS 97.",
    fanNotice:
      "Inoffizielles Fan-Projekt – nicht verbunden mit Tesla, SpaceX, xAI oder Irem. Alle Marken gehören ihren Inhabern.",
    trademarks:
      "Tesla, Cybertruck, Semi, Optimus u. a. · SpaceX, Starship, Starlink · Grok (xAI) · Moon Patrol (Irem) — nur als Fan-/Parodie-Bezug, keine Markenrechte werden eingeräumt.",
    attribution: "Grafiken & Sounds: CC BY-NC 4.0 — Attribution „Mars Patrol – Oxyd22“.",
    licenseLine:
      "Nicht-kommerziell · Code PolyForm NC 1.0.0 · Assets CC BY-NC 4.0 · Schrift Press Start 2P: SIL OFL 1.1.",
    privateNote: "Privates Repo — kein Source-Link, kein erfundener Store-Eintrag.",
  },
  en: {
    eyebrow: "iOS & macOS · Arcade remake",
    insertCoin: "INSERT COIN",
    lede: [
      "Arcade-style side-scroller: Cybertruck on Mars, Tesla, SpaceX, and Grok motifs. Native on iPhone, iPad, and Mac.",
      "Grok rides shotgun like KITT — cheeky, muteable, language DE or EN switchable in the menu.",
      "Private repo. No store link, no source link here.",
    ],
    titleAlt: "Mars Patrol title art — pixel-art logo and Cybertruck against a Mars sky",
    creditsAlt: "Mars Patrol credits art with Cybertruck, Grok, and cyan glow",
    creditsCaption: "Key art / credits",
    shotAlt: "Mars Patrol gameplay screenshot on macOS — Cybertruck, HUD, and Mars landscape",
    shotCaption: "Real macOS gameplay screenshot",
    worldHeading: "Game world",
    worldBody: [
      "Cybertruck with independently sprung wheels and a red KITT scanner. Enemies: hacked Starlinks, Mars UFOs, a hijacked Tesla Semi, Optimus, boulders, alien mines. Backdrops: Olympus Mons, Starbase, Tesla Diner/Supercharger, landing Starship.",
      "Courses: Beginner (calmer) or Champion (faster, denser). Remake of the arcade classic Moon Patrol — fully re-themed.",
    ],
    grokHeading: "Grok & HUD",
    grokBody: [
      "Grok comments like an 1980s onboard computer (“Reed” voice). HUD with emblem and KITT voicebox. Voice and music: menu or keys V / M (Mac: ⇧⌘V / ⇧⌘M).",
      "German or English — switchable in the title menu. Grok lines follow the selected language.",
    ],
    howHeading: "How to play",
    howItems: [
      {
        label: "Goal",
        text: "From start @ through checkpoints A–Z. Faster checkpoint = bigger time bonus. After Z: next, faster lap.",
      },
      {
        label: "Jump",
        text: "Over craters, rocks, mines, and rolling boulders — take off early (jump ~0.85 s).",
      },
      {
        label: "Shoot",
        text: "Every shot fires forward and upward at once. Enemy shots can be shot down. Hold for rapid fire.",
      },
      {
        label: "Enemies",
        text: "Starlink: red eye → vertical shot. UFO: bombs that leave craters. Semi & Optimus: low shots from the front.",
      },
      {
        label: "Lives",
        text: "Beginner 3, Champion 4. Extra lives at 10,000 / 30,000 / 50,000. Clear a whole Starlink formation → formation bonus.",
      },
    ],
    controlsHeading: "Controls",
    controlsNote:
      "Mac: Game menu (Pause ⌘P, Grok ⇧⌘V, Music ⇧⌘M). Hardware keyboard on iPad works like on Mac. Full guide also in-game.",
    controlHeaders: ["Action", "Mac keyboard", "iPhone / iPad", "Gamepad"],
    controls: [
      ["Jump", "Space, ↑, W", "Bottom-left button", "A, LB, LT, D-pad ↑"],
      ["Shoot (hold = rapid fire)", "X, J, F", "Bottom-right button", "B, X, RB, RT"],
      ["Pause", "P, Esc", "Pause, top right", "Menu / Options"],
      ["Resume (paused)", "Return", "Tap", "Menu / Options"],
      ["Main menu (paused)", "Q, ⌫", "Tap “MENU”", "Y"],
      ["Grok voice on/off", "V", "Title menu", "Title menu"],
      ["Music on/off", "M", "Title menu", "Title menu"],
    ],
    mechanicsHeading: "Mechanics (short)",
    mechanicsItems: [
      {
        label: "Jump",
        text: "0.85 s duration, 46 pt apex — snappy takeoff, flat “hover” peak.",
      },
      {
        label: "Dual shot",
        text: "Forward hits ground hazards & low projectiles; upward hits Starlinks, UFOs, and bombs.",
      },
      {
        label: "Formation",
        text: "Whole Starlink wave: 3 → +500, 4 → +800, 5+ → +1000.",
      },
      {
        label: "Time bonus",
        text: "Faster to checkpoint = more points (base Beginner 1000 / Champion 2000).",
      },
    ],
    platformsHeading: "iOS & macOS",
    platformsBody:
      "SpriteKit native on both platforms. Mac: keyboard and gamepad; losing focus pauses. Tests verified: iOS 96 + 3 UI tests, macOS 97.",
    fanNotice:
      "Unofficial fan project – not affiliated with Tesla, SpaceX, xAI, or Irem. All trademarks belong to their respective owners.",
    trademarks:
      "Tesla, Cybertruck, Semi, Optimus, etc. · SpaceX, Starship, Starlink · Grok (xAI) · Moon Patrol (Irem) — used only as fan/parody reference; no trademark rights granted.",
    attribution: "Art & sounds: CC BY-NC 4.0 — attribution “Mars Patrol – Oxyd22”.",
    licenseLine:
      "Non-commercial · Code PolyForm NC 1.0.0 · Assets CC BY-NC 4.0 · Font Press Start 2P: SIL OFL 1.1.",
    privateNote: "Private repo — no source link, no invented store listing.",
  },
};
