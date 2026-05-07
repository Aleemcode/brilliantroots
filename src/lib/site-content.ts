export type PathwaySlug =
  | "foundations"
  | "family-rhythm"
  | "names-and-identity"
  | "quran-companion"
  | "adab-and-character"
  | "screen-free-learning";

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Pathway", href: "/pathways" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
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
    tool: "Start with Pathway reading and the Jumu'ah Digest before choosing a product.",
    href: "/pathways/foundations",
    recommendedToolHref: "/explore/jumuah-digest",
    recommendedTool: "Jumu'ah Digest",
    nextStepHref: "/explore/jumuah-digest",
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
    recommendedToolHref: "/explore/jumuah-digest",
    recommendedTool: "Family routines",
    nextStepHref: "/explore/jumuah-digest",
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
    recommendedToolHref: "/explore/mqcd",
    recommendedTool: "Qur'an Companion Device",
    nextStepHref: "/explore/mqcd",
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
    recommendedToolHref: "/explore/intentional-muslim-home",
    recommendedTool: "Parent guidance works",
    nextStepHref: "/explore#published-works",
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
    recommendedToolHref: "/explore/mqcd",
    recommendedTool: "Qur'an Companion Device",
    nextStepHref: "/explore",
    nextStep: "Explore fitting support",
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
