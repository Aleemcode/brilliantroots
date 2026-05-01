# Design

## Product Intent

Build a calm, trustworthy website that helps Muslim parents understand the brilliantroots ecosystem and choose the next right step in their family tarbiyah journey.

The interface should feel like guided counsel, not a shop shouting for attention. It should still convert, but conversion should follow clarity.

## Design Principles

1. Parent-first, child-supporting
   - Speak first to the parent carrying responsibility.
   - Products are framed as aids to a household rhythm, not isolated purchases.

2. Calm confidence
   - Use generous spacing, clear hierarchy, and measured motion.
   - Avoid overdecorated Islamic visual tropes.
   - Let trust come from structure, restraint, and useful detail.

3. Guided, not generic
   - Every page should answer "Where am I, and what should I do next?"
   - Use pathways, staged content, and clear next actions.

4. Authenticity before aesthetics
   - Methodology, sourcing, suitability, and boundaries should be visible.
   - Beautiful UI must not hide weak content.

5. One faithful next step
   - Each page should end with one primary CTA and one secondary CTA.
   - CTAs should fit the user's stage: read, start, explore, join, buy, ask.

## Information Architecture Model

The site has four content layers:

1. Orientation
   - What is brilliantroots?
   - Who is it for?
   - What problem does it solve?

2. Guidance
   - Parent journey
   - Methodology
   - Start-here pathways
   - Routines and frameworks

3. Ecosystem
   - Products
   - Resources
   - Guides
   - Community

4. Conversion and continuity
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

CTA: Start with the Digest or Explore Tools.

### Products / Ecosystem

Purpose: Help users find the right tool.

Product listing should support:

- Filter by family need: names, Qur'an/memorization, parent formation, routines, adab.
- Filter by format: digital platform, device, book, printable, guide.
- Filter by stage/age where relevant.
- Compare products by outcome, not only type.

Card content:

- Product name.
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

- Start Here
- Method
- Products
- Resources
- Community

Utility navigation:

- Login
- Contact
- Cart/Shop when commerce is enabled

Mobile navigation should preserve the same labels. Avoid hiding "Start Here"; it is the main routing concept.

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
- Product images need alt text that describes the product meaningfully.
- CTAs should be clear without relying only on color.
- Dark-mode borders should be soft enough not to vibrate, but visible enough to show structure.

## Success Metrics

Early qualitative metrics:

- Parents can explain what brilliantroots does after the hero and first section.
- Parents can identify their starting path without reading the whole page.
- Product cards make clear which family need each product serves.
- Users trust the methodology before reaching the final CTA.

Quantitative metrics later:

- Digest signup conversion.
- Product card open rate.
- Product detail CTA conversion.
- Start-here path click distribution.
- Resource return visits.
- Community join conversion.

