export type PathwaySlug =
  | "foundations"
  | "family-rhythm"
  | "names-and-identity"
  | "quran-companion"
  | "adab-and-character"
  | "screen-free-learning";

export type ToolSlug =
  | "baytul-asmaa"
  | "quran-companion-device"
  | "tarbiyah-corner-library";

export const mainNav = [
  { label: "Start Here", href: "/start-here" },
  { label: "Pathways", href: "/pathways" },
  { label: "Tools", href: "/tools" },
  { label: "Library", href: "/library" },
  { label: "About", href: "/about" },
];

export const intentionSteps = [
  {
    label: "Intend",
    title: "Clarify the purpose",
    body: "Name what you are trying to nurture before choosing content, tools, or routines.",
  },
  {
    label: "Understand",
    title: "Learn the principle",
    body: "Give the parent enough grounding to make a deliberate household choice.",
  },
  {
    label: "Practice",
    title: "Bring it home",
    body: "Turn the idea into one repeatable action, conversation, or weekly rhythm.",
  },
  {
    label: "Equip",
    title: "Choose the right support",
    body: "Use a tool only when it serves the intention and fits the child or family stage.",
  },
  {
    label: "Continue",
    title: "Return with support",
    body: "Keep the work alive through reminders, community, digest, and next steps.",
  },
];

export const startPaths = [
  {
    title: "I need foundations",
    href: "/pathways/foundations",
    body: "For parents who want clarity before adding more Islamic content or products.",
    firstStep: "Read the method, choose one tarbiyah concern, and begin with a parent reflection.",
  },
  {
    title: "I need family rhythm",
    href: "/pathways/family-rhythm",
    body: "For homes where good intentions exist, but consistency keeps slipping.",
    firstStep: "Choose one anchor habit for the week and connect it to a simple family prompt.",
  },
  {
    title: "I need child-ready tools",
    href: "/tools",
    body: "For parents ready to choose a product, but wanting it tied to a known purpose.",
    firstStep: "Start with the tool finder, then open the pathway connected to that tool.",
  },
  {
    title: "I need screen/device guidance",
    href: "/pathways/screen-free-learning",
    body: "For families trying to support learning while protecting attention and routine.",
    firstStep: "Decide what the device should replace, support, and never become.",
  },
];

export const pathways = [
  {
    slug: "foundations",
    title: "Foundations Pathway",
    shortTitle: "Foundations",
    intent: "For parents who need clarity before adding more tools.",
    problem: "A parent can care deeply about Islam in the home and still feel scattered, reactive, or unsure where to begin.",
    principle: "Tarbiyah begins with the parent as the root: intention, understanding, practice, and consistency before performance.",
    practice: "Set aside one weekly reflection: what am I trying to nurture in my home this week, and what small action will show it?",
    tool: "Start with the method page and the Jumu'ah Digest before choosing a product.",
    href: "/pathways/foundations",
    recommendedToolHref: "/library/method",
    recommendedTool: "The brilliantroots Method",
    nextStepHref: "/library/jumuah-digest",
    nextStep: "Join the weekly digest",
  },
  {
    slug: "family-rhythm",
    title: "Family Rhythm Pathway",
    shortTitle: "Family Rhythm",
    intent: "For families who need repeatable household practice.",
    problem: "The family learns in bursts, but the home does not yet have a rhythm that makes practice natural.",
    principle: "A small repeated rhythm often carries more tarbiyah weight than a large plan that cannot survive real family life.",
    practice: "Choose one anchor: after Maghrib, Friday morning, bedtime, or weekend breakfast. Attach one reminder or conversation to it.",
    tool: "Use routines, prompts, and parent notes before adding more material.",
    href: "/pathways/family-rhythm",
    recommendedToolHref: "/library",
    recommendedTool: "Family routines",
    nextStepHref: "/library/jumuah-digest",
    nextStep: "Practice this week",
  },
  {
    slug: "names-and-identity",
    title: "Names & Identity Pathway",
    shortTitle: "Names & Identity",
    intent: "For expecting and new parents choosing names with meaning.",
    problem: "Naming can become aesthetic, trend-driven, or rushed when it should be a deliberate act of identity and dua.",
    principle: "A name carries meaning, story, pronunciation, and belonging. The parent should choose with knowledge and care.",
    practice: "Discuss the meaning, pronunciation, and family hopes attached to a shortlisted name.",
    tool: "Baytul Asmaa supports intentional name discovery and family reflection.",
    href: "/pathways/names-and-identity",
    recommendedToolHref: "https://baytul-asmaa.com/",
    recommendedTool: "Baytul Asmaa",
    nextStepHref: "https://baytul-asmaa.com/",
    nextStep: "Explore the tool",
  },
  {
    slug: "quran-companion",
    title: "Qur'an Companion Pathway",
    shortTitle: "Qur'an Companion",
    intent: "For families supporting recitation and memorization without passive screen habits.",
    problem: "Parents want Qur'an in the home, but screens, noise, and inconsistent routines can weaken attention.",
    principle: "A listening tool should serve remembrance, repetition, and parent-supported routine, not become another passive device.",
    practice: "Choose one surah, one listening time, and one parent check-in each week.",
    tool: "My Qur'an Companion Device supports screen-light listening rhythms.",
    href: "/pathways/quran-companion",
    recommendedToolHref: "/tools/quran-companion-device",
    recommendedTool: "Qur'an Companion Device",
    nextStepHref: "/tools/quran-companion-device",
    nextStep: "See product context",
  },
  {
    slug: "adab-and-character",
    title: "Adab & Character Pathway",
    shortTitle: "Adab & Character",
    intent: "For parents nurturing manners, self-control, speech, and responsibility.",
    problem: "Character conversations often happen only after something goes wrong.",
    principle: "Adab is formed through modeling, reminders, correction, and repeated family language.",
    practice: "Choose one phrase or adab focus for the week, then notice and name it when it appears.",
    tool: "Tarbiyah Corner can carry parent notes, stories, and prompts for recurring character work.",
    href: "/pathways/adab-and-character",
    recommendedToolHref: "/tools/tarbiyah-corner-library",
    recommendedTool: "Tarbiyah Corner Library",
    nextStepHref: "/library",
    nextStep: "Browse parent guides",
  },
  {
    slug: "screen-free-learning",
    title: "Screen-Free Learning Pathway",
    shortTitle: "Screen-Free Learning",
    intent: "For families protecting attention while keeping Islamic learning accessible.",
    problem: "Digital convenience can quietly train children toward distraction, speed, and passive consumption.",
    principle: "The tool should reduce friction without replacing the parent, the book, the conversation, or the household rhythm.",
    practice: "Define one screen-free learning window and prepare the physical or audio material before it begins.",
    tool: "Use devices and printables only where they protect attention and support practice.",
    href: "/pathways/screen-free-learning",
    recommendedToolHref: "/tools/quran-companion-device",
    recommendedTool: "Qur'an Companion Device",
    nextStepHref: "/tools",
    nextStep: "Find a fitting tool",
  },
] satisfies Array<{
  slug: PathwaySlug;
  title: string;
  shortTitle: string;
  intent: string;
  problem: string;
  principle: string;
  practice: string;
  tool: string;
  href: string;
  recommendedToolHref: string;
  recommendedTool: string;
  nextStepHref: string;
  nextStep: string;
}>;

export const tools = [
  {
    slug: "baytul-asmaa",
    title: "Baytul Asmaa",
    subtitle: "Names & Identity Tool",
    purpose: "Help expecting and new parents choose names with meaning, confidence, pronunciation, and family reflection.",
    bestFor: "Expecting parents, new parents, and families revisiting identity conversations.",
    websiteHref: "https://baytul-asmaa.com/",
    pathwayHref: "/pathways/names-and-identity",
    pathway: "Names & Identity Pathway",
    details: [
      "Search and reflect through meaning, story, and pronunciation.",
      "Move from a beautiful name to an intentional family decision.",
      "Keep the naming process connected to dua, identity, and belonging.",
    ],
  },
  {
    slug: "quran-companion-device",
    title: "My Qur'an Companion Device",
    subtitle: "Screen-Light Qur'an Support",
    purpose: "Support listening, repetition, and memorization rhythms without turning Qur'an practice into more screen time.",
    bestFor: "Young children, memorization support, bedtime listening, and family review routines.",
    websiteHref: "",
    pathwayHref: "/pathways/quran-companion",
    pathway: "Qur'an Companion Pathway",
    details: [
      "Designed around attention, repetition, and household rhythm.",
      "Helps parents make Qur'an listening easier without surrendering the environment to screens.",
      "Pairs with a weekly listening plan and parent check-in.",
    ],
  },
  {
    slug: "tarbiyah-corner-library",
    title: "Tarbiyah Corner Library",
    subtitle: "Parent Guidance & Family Prompts",
    purpose: "Give parents grounded notes, prompts, and practical teaching support for recurring tarbiyah themes.",
    bestFor: "Parents who want a calmer way to teach foundations, adab, and family practice.",
    websiteHref: "",
    pathwayHref: "/pathways/foundations",
    pathway: "Foundations Pathway",
    details: [
      "Organizes parent-facing notes and child-facing prompts in one place.",
      "Works as a companion for foundations, family rhythm, and adab conversations.",
      "Keeps the parent from improvising every Islamic teaching moment from scratch.",
    ],
  },
] satisfies Array<{
  slug: ToolSlug;
  title: string;
  subtitle: string;
  purpose: string;
  bestFor: string;
  websiteHref: string;
  pathwayHref: string;
  pathway: string;
  details: string[];
}>;
