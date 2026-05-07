# Design

---
version: beta
name: brilliantroots
description: "A joyful Islamic family commerce and guidance system inspired by My Salah Mat's confident color play, Lil Crescent's clean product clarity, and Tiny Ummah's emotional parent depth. brilliantroots should not feel like a generic beige editorial site. It should use a clean white commerce canvas with bright, trustworthy, tactile components: a colorful Explore catalogue for Islamic products, tools, published works, free guides, parental kits, and author resources, grounded by a Pathway system that helps Muslim homes choose with intention."

colors:
  primary: "#001F51"
  on-primary: "#FFFFFF"
  primary-hover: "#002B70"
  primary-shadow: "#001436"
  secondary-blue: "#3B86FE"
  accent-gold: "#FFCB66"
  accent-orange: "#FB5707"
  accent-green: "#1BC67F"
  accent-red: "#FF4B4B"
  ink: "#001F51"
  ink-muted: "#625A4D"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F7F7F7"
  surface-blue: "#EAF3FF"
  surface-gold: "#FFF3CC"
  surface-orange: "#FFF0E8"
  surface-green: "#E7FAF2"
  border: "rgba(0, 31, 81, 0.12)"
  dark-border: "rgba(255, 255, 255, 0.05)"

typography:
  display:
    fontFamily: "Sora, Nunito, -apple-system, sans-serif"
    fontSize: 56px
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: -0.035em
  body:
    fontFamily: "Sora, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: 0
  warmth:
    fontFamily: "Libre Baskerville, Georgia, serif"
    usage: "Short emotional notes, pull quotes, mission lines, and parent-facing reflections only."

spacing:
  base: 8px
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 104]

radius:
  sm: 8px
  md: 12px
  lg: 18px
  xl: 26px
  pill: 9999px

shadows:
  button: "0 4px 0 var(--button-shadow)"
  card: "0 3px 0 rgba(0, 31, 81, 0.12)"
  elevated: "0 18px 40px rgba(0, 31, 81, 0.12)"

motion:
  duration-fast: 100ms
  duration-base: 180ms
  easing: cubic-bezier(0.34, 1.56, 0.64, 1)
---

## 0. New Visual Thesis

brilliantroots should borrow the **confidence and color discipline** of My Salah Mat, not copy its exact ecommerce look.

What we want from My Salah Mat:

- Bright, memorable color accents.
- Clear product categories.
- Product cards that feel active and easy to understand.
- Trust blocks that are visually obvious.
- Parent confidence through simple, direct explanations.
- Joy without losing Islamic seriousness.

What brilliantroots must add:

- A more intentional parent journey.
- A clearer Explore umbrella.
- Emotional depth for prospective spouses and parents.
- Published works and author resources, not only products.
- A warmer, less marketplace-like brand presence.

The result should be:

> A clean white Islamic family commerce canvas with joyful, colorful, tactile catalogue components and parent-guided clarity.

---

## 1. Color System

Use **white canvas as the clarity anchor** and **navy as the identity anchor**, then let supporting colors do real jobs.

### Core Identity

- Navy `#001F51`: logo, headings, main CTA, primary trust.
- White `#FFFFFF`: page atmosphere and product clarity.
- Soft gray `#F7F7F7`: section contrast and quiet panels.
- Very light category tints: badges, icon wells, and card headers only.

### Supporting Colors

- Blue `#3B86FE`: tools, digital support, Baytul Asmaa, interactive aids.
- Gold `#FFCB66`: published works, highlights, premium family value.
- Orange `#FB5707`: urgency, preorder, launches, warm CTA moments.
- Green `#1BC67F`: Pathway growth, family practice, positive progress.
- Red `#FF4B4B`: alert states only; use very sparingly.

### Category Mapping

- Products: Navy + Gold.
- Tools: Blue.
- Pathway: Green.
- Published Works: Gold.
- Free Guides: Orange.
- Parental Kits: Navy + Green.
- Author Resources: Blue + Gold.

### Rule

Each section may use multiple colors, but each color must mean something. No decorative rainbow.

---

## 2. Component Style

The user likes My Salah Mat's component style. Translate that into brilliantroots like this:

### Buttons

- Large, rounded, physically clickable.
- Primary buttons use navy with a darker 3D bottom shadow.
- Accent buttons may use orange/gold/green only when the action matches the meaning.
- Pressed state should move down by 2-3px and reduce shadow.
- Buttons should feel substantial, not flat.

### Cards

- Cards should be bold and friendly, with clear borders and category color strips.
- Product cards need:
  - Product image.
  - Category label.
  - Status badge.
  - Best-for line.
  - One practical benefit.
  - Clear CTA.
- Cards can use a 2-4px bottom shadow like a physical tile.
- Avoid thin, fragile editorial cards as the default.

### Trust Blocks

- Use icon + short proof statement.
- Examples:
  - "Screen-light support"
  - "Built for parent guidance"
  - "Products tied to Pathway"
  - "Published works clearly marked"
- Trust blocks should be colorful and easy to scan.

### Explore Tiles

Explore is the heart of the system. It should feel like a bright product catalogue, not a blog index.

Each tile should show:

- Type: Product, Tool, Published Work, Free Guide, Kit, Author Resource.
- Status: Buy Now, Preorder, Coming Soon, Free, Inquiry.
- Best for.
- Pathway connection.
- CTA.

### Pathway Cards

Pathway cards should feel calmer than product cards:

- More white/cream space.
- Green accent.
- Clear audience label.
- One emotional promise.
- One next step.

---

## 3. Visual Atmosphere

The background should feel clean like Lil Crescent and My Salah Mat: bright white, easy to scan, and product-forward.

The Islamic family feeling should come from:

- emotionally clear copy
- product clarity
- colorful category language
- gentle iconography
- Pathway guidance
- trust notes
- real Islamic family use cases

Not from beige or parchment backgrounds.

Do:

- Use white canvas.
- Use soft gray section contrast where needed.
- Use bright, purposeful category colors.
- Use colored headers, badges, icon wells, shadows, and CTA strips.
- Let product images carry visual interest.
- Use large, friendly headings.
- Let blue/green/orange/gold accents create energy and wayfinding.

Do not:

- Make every surface beige.
- Use parchment or warm paper as the default background.
- Make the site feel like a cold app dashboard; the copy and components must carry warmth.
- Rely only on thin dividers.
- Use a monochrome editorial layout.
- Make dark mode borders harsh.
- Make the site feel like a design studio portfolio.

---

## 4. Interaction Feel

Interactions should feel friendly and responsive:

- Buttons depress.
- Cards lift slightly.
- Badges brighten subtly.
- Category filters should feel tappable.
- Avoid excessive animation.

The interaction should be closer to **educational ecommerce** than magazine editorial.

---

## 5. Standout Strategy

Competitors tend to be:

- Product-first shops.
- Story libraries.
- Kids learning apps.
- Homeschool/curriculum resources.

brilliantroots should stand out as:

> The intentional Muslim home catalogue: colorful enough to feel joyful, structured enough to guide parents, and grounded enough to earn trust.

This means the UI must make the brand system obvious:

- Explore is colorful and practical.
- Pathway is calming and clarifying.
- About is mission-led.
- Contact is routing-focused.

---

## Product Intent

Build a calm, trustworthy website that helps Muslim parents understand the brilliantroots ecosystem, explore useful support, and choose the next right step in their family tarbiyah journey.

The interface should feel like guided counsel, not a shop shouting for attention. It should still convert, but conversion should follow clarity.

## Design Principles

1. Parent-first, child-supporting
   - Speak first to the parent carrying responsibility.
   - Products are framed as aids to a household rhythm, not isolated purchases.

2. Calm confidence
   - Use generous spacing, clear hierarchy, and measured motion.
   - Avoid overdecorated Islamic visual tropes.
   - Let trust come from structure, restraint, and useful detail.

3. Intentional, not generic
   - Every page should answer "Where am I, and what should I do next?"
   - Use pathways, staged content, and clear next actions.
   - Products should only appear after their intention is clear.

4. Authenticity before aesthetics
   - Methodology, sourcing, suitability, and boundaries should be visible.
   - Beautiful UI must not hide weak content.

5. One faithful next step
   - Each page should end with one primary CTA and one secondary CTA.
   - CTAs should fit the user's stage: read, start, explore, join, buy, ask.

## Information Architecture Model

The site has five content layers:

1. Orientation
   - What is brilliantroots?
   - Who is it for?
   - What problem does it solve?

2. Intentional Pathways
   - Foundations
   - Family rhythm
   - Names and identity
   - Qur'an companion
   - Adab and character
   - Screen-free learning

3. Practice Library
   - Method
   - Digest
   - Guides
   - Routines
   - Downloads

4. Explore
   - Physical products
   - Digital tools
   - Published works
   - Free guides
   - Parental kits
   - Author resources

5. Conversion and continuity
   - Product purchase/preorder
   - Digest signup
   - Community join
   - Account/login
   - Contact/support

## Page System

### Home

Purpose: Orient, reassure, and route.

Page sections:

- Hero: plain promise and primary value proposition.
- Problem/Tension: scattered advice and product noise.
- Parent Journey: parent, rhythm, tools, guidance.
- Start Where You Are: three entry doors.
- Ecosystem Preview: core products/resources.
- Method & Trust: why this approach is different.
- Featured Resource: digest or lead magnet.
- Final CTA: next faithful step.

Primary CTA: Find Your Starting Point.
Secondary CTA: Explore the Ecosystem.

### Start Here

Purpose: Route users by need/state.

Entry paths:

- I need foundations.
- I need family rhythm.
- I need child-ready tools.
- I need help with screens/devices.
- I want to join the community.

Pattern: diagnostic cards, not a quiz at first. Later this can become an interactive guided assessment.

### Pathways

Purpose: Turn a parent intention into a guided sequence.

Each pathway should follow:

- Intention: what the parent is trying to nurture.
- Understand: the principle or method.
- Practice: one household rhythm or prompt.
- Equip: tools/resources that serve the intention.
- Continue: next reminder, guide, or pathway.

Pathways are the signature IA structure and the strongest expression of the brand's core value.

### Methodology

Purpose: Establish trust and mental model.

Content blocks:

- What is tarbiyah?
- Parent as root.
- Household rhythm.
- Tools as supports.
- Qur'an/Sunnah/Salaf grounding.
- What brilliantroots avoids.
- How resources are reviewed.

CTA: Start with the Digest or Explore the catalogue.

### Explore / Catalogue

Purpose: Help users find the right product, tool, work, or guide without splitting the mental model across several top-level destinations.

Explore listing should support:

- Filter by family need: names, Qur'an/memorization, parent formation, routines, adab.
- Filter by format: physical product, digital platform, book, printable, guide, kit.
- Filter by stage/age where relevant.
- Compare entries by outcome, not only type.

Card content:

- Entry name.
- Need it serves.
- Best for.
- Format.
- Primary outcome.
- Status: available, preorder, coming soon.

### Product Detail

Purpose: Help the user decide confidently.

Recommended page structure:

- Product hero with actual product image.
- Outcome: what changes in the home?
- Who it is for / not for.
- What's included.
- How to use it in a household rhythm.
- Methodology/trust notes.
- FAQs.
- Purchase/preorder CTA.
- Related next step.

### Resources

Purpose: Build ongoing trust and search demand.

Resource types:

- Jumu'ah Digest.
- Parent guides.
- Family routines.
- Teaching prompts.
- Product implementation guides.
- Articles.
- Downloads.

Content should be categorized by family job:

- Build foundations.
- Practice daily.
- Teach children.
- Manage modern challenges.
- Choose tools.

### Community

Purpose: Offer belonging and continuity.

Content blocks:

- Why community exists.
- What members receive.
- Etiquette and boundaries.
- Channels: WhatsApp, Telegram, email.
- CTA: Join or subscribe.

### About / Trust

Purpose: Answer "Who is behind this, and can I trust them?"

Content blocks:

- Mission.
- Methodology.
- Review/advisory process.
- Values.
- What brilliantroots will and will not do.
- Contact.

## Navigation

Primary navigation:

- Home
- Explore
- Pathway
- About Us
- Contact Us

Utility navigation:

- Cart
- Checkout
- Account

Mobile navigation should preserve the same labels. Explore is the public umbrella for products, tools, works, and guides; Pathway is the guidance structure that helps people choose with intention.

## Visual System

### Color

Use the theme switcher as an atmosphere control, not a decorative accent toggle. The selected color should influence:

- Primary CTA.
- Soft icon containers.
- Active borders.
- Surface tint.
- Highlight panels.
- Badges.

Avoid mixing multiple fixed accent colors in one section unless the content genuinely needs categorical distinction.

### Typography

Use strong, quiet headings with generous line-height. Avoid all-caps except small eyebrow labels.

Recommended hierarchy:

- Hero H1: emotionally clear promise.
- Section H2: user problem or outcome.
- H3: scannable card or subsection label.
- Body: practical, concise guidance.

### Motion

Motion should feel like a gentle reveal, not spectacle.

Rules:

- Use short fade/slide reveals.
- Avoid large layout shifts.
- Respect reduced motion later.
- Do not hide essential content behind delayed animation.

### Components

Core components:

- Section
- Card
- PathwayCard
- ExploreCard
- ProductCard
- ProductSlideover
- Badge
- Button
- ThemeToggle
- TrustNote
- ResourceCard
- JourneyStep

## Accessibility

- Text contrast must hold in all color themes and dark mode.
- Cards that navigate should be links with clear accessible names.
- Product and publication images need alt text that describes the entry meaningfully.
- CTAs should be clear without relying only on color.
- Dark-mode borders should be soft enough not to vibrate, but visible enough to show structure.

## Success Metrics

Early qualitative metrics:

- Parents can explain what brilliantroots does after the hero and first section.
- Parents can identify their starting path without reading the whole page.
- Product cards make clear which family need each product serves.
- Explore cards make clear whether the entry is a product, tool, work, guide, or kit.
- Users trust the methodology before reaching the final CTA.

Quantitative metrics later:

- Digest signup conversion.
- Product card open rate.
- Product detail CTA conversion.
- Start-here path click distribution.
- Resource return visits.
- Community join conversion.
