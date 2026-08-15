# Cisco Fig v3 — Design System

A design-system extraction of **Cisco's Fig v3** product design library, rebuilt as runnable tokens, React components, foundation specimens, and a product UI kit.

> **Source:** the "V3.fig" Figma file provided by the user (mounted read-only). It is the ground truth for every value here — 785 component sets, 714 Figma Variables across 7 collections, and a ~294-glyph icon set. Where this system's values differ from Cisco's public Momentum/Magnetic docs, **the file wins**. The reader is not assumed to have file access; specifics are transcribed here.

---

## Context

Fig v3 is Cisco's internal product design system — the shared component library and token set behind Cisco's cloud/admin products (dashboards, network & security consoles, IT tooling). It is a broad, enterprise UI kit: forms, tables, navigation shells, feedback surfaces, charts, and an AI-assistant pattern set, all themeable across light/dark and "Magnetic" color modes. The core brand action color is **Magnetic Blue `#0A60FF`**; the type voice is the proprietary **CiscoSansTT** family.

## Products represented in the source

The file is organized page-per-component plus pattern pages. Notable surfaces: **UI-Shell**, **AI-Assistant**, **Forms**, **Filters**, **Table / Table2**, **Side-Nav / Secondary-Nav / Header / Footer**, **Charts**, **Date/Time Pickers**, and a **Templates** section. This system rebuilds the foundational tokens, the reusable primitives, and one representative product surface (Cloud Console).

---

## Content fundamentals

How Fig product copy reads (observed in the source frames and standard for Cisco enterprise UI):

- **Voice:** clear, direct, task-oriented. Addresses the user as **"you"**; the product speaks plainly ("Add device", "1 device requires attention", "No results").
- **Casing:** **Sentence case** everywhere — buttons, labels, headings, menu items ("Add device", not "Add Device"). ALL-CAPS is reserved for micro-labels (table column headers, overline tags) with `letter-spacing: 0.2px`.
- **Tone:** professional, calm, precise. Enterprise-appropriate — no jokes, no exclamation. Status language is factual ("Degraded", "Sustained above 85%").
- **Buttons/labels:** verb-first and short ("Save", "Export", "Claim device", "Sign in").
- **Emoji:** **none.** Meaning is carried by the icon set, sentiment color, and copy — never emoji.
- **Numbers & units:** explicit and spaced ("8.4 Gbps", "99.98%", "47 devices").
- **Vibe:** trustworthy infrastructure software — dense but legible, information-first.

## Visual foundations

- **Color:** Magnetic Blue `#0A60FF` is the primary action color (hover `#124FC9`, pressed `#0E3A99`). Sky Blue `#00BCEB` is the classic Cisco secondary. Neutrals run midnight `#07182D` → slate `#536070` → `#A1A9B2` → border `#E1E6EB` → tint `#F2F5F7` → white. Semantics: info `#0070D2`, success `#1B9E3E`, warning `#D67B00`, danger `#D91821`, each with a `-weak` background. A separate categorical **data-viz** palette (blue, teal, purple, lavender, pink, magenta, lime, orange, slate) drives charts. Max 1–2 background colors per surface.
- **Type:** CiscoSansTT (substituted with **Mulish** — see Fonts). Light 300 for display/hero, Regular 400 body, Medium 500 labels/buttons, Bold 700 headings. Scale: display 56–80, H1 48 → H6 20, body 16/14/12. Headings/display carry `-0.01em` tracking.
- **Spacing:** 4px base grid (4, 8, 12, 16, 20, 24, 32, 40, 48, 64).
- **Radius:** tags 4, inputs/small 8, cards 12, large surfaces 16, buttons are **fully pill-shaped** (radius = height/2), avatars/badges full-round.
- **Backgrounds:** flat and solid — tinted `#F2F5F7` app canvas, white surfaces. **No gradients, no photographic hero washes, no textures** in product UI (marketing surfaces aside). The one dark surface is the midnight brand panel.
- **Cards:** white, 12px radius, a **1px hairline border** (`#E1E6EB`) by default; elevation (drop shadow) is used for floating surfaces (modals, menus, toasts) rather than resting cards. Interactive cards add a subtle shadow on hover.
- **Elevation:** four steps (xs→lg) built from soft black alphas (0.08 / 0.12 / 0.18). Low and diffuse — never harsh.
- **Borders:** 1px hairlines separate structure; inputs use a 1px resting ring that thickens to a **2px Magnetic-Blue focus ring** (no browser outline).
- **Animation:** short and functional — 120–200ms on `cubic-bezier(0.4,0,0.2,1)`. Fades and small position/color transitions; **no bounce, no springy overshoot.** Spinners rotate linearly.
- **Hover:** fills darken (buttons) or gain a weak tint (minimal/nav); links underline. **Press:** color darkens one step (no scale/shrink). **Disabled:** desaturated to tint bg + `#A1A9B2` text.
- **Transparency/blur:** sparing — modal scrim is `rgba(7,24,45,0.5)`; presence dots and badges use a 2px white ring to separate from content. No glassmorphism.
- **Iconography color:** monochrome, inherits `currentColor`; sentiment icons take the semantic color.

## Iconography

- Fig ships a **first-party line/solid icon set** (~294 glyphs materialized here from the file). Each icon has an outline and a `Filled` counterpart (e.g. `Bell` / `BellFilled`). Categories: App, Audio & Video, Device, Direction, Files, Product, Social, Status, Technology, Time.
- **Delivery:** icons are stored as SVG path data in `assets/icons/icon-data.js` and rendered with a single `<Icon name="…" size={…} />` wrapper. Single-color glyphs paint with `currentColor` — recolor via CSS `color`.
- **No emoji, no Unicode-glyph icons.** Chevrons/arrows come from the set (`ChevronDown`, `ArrowRight`), not text characters.
- Common product glyphs: `Cisco`, `Webex`, `Home`, `Search`, `Bell`, `Setting`, `Server`, `Group`, `Compliance`, `Graph`, `More`, `Add`, `Close`, `Check`, `Warning`, `Danger`, `InfoCircle`, `CheckCircle`.

---

## Fonts — substitution flagged

⚠️ **CiscoSansTT is proprietary and is NOT included in the source file.** The system substitutes Google Fonts **Mulish** (closest free humanist match — open apertures, comparable x-height/proportions), plus **IBM Plex Mono** for the mono role. `--font-sans` is declared as `'CiscoSansTT', 'Mulish', …` so the real face takes over automatically once uploaded. **Please provide the CiscoSansTT `.woff2` files** (Thin/Light/Regular/Medium/Bold) and add matching `@font-face` rules to `tokens/fonts.css`.

**No logo asset exists in the source file**, so the Cisco wordmark is rendered in type (see the Brand card and thumbnail); a real logo was not reconstructed from memory.

---

## Index / manifest

- **`styles.css`** — global entry point (import this). Pulls in:
  - `tokens/fonts.css` — webfont imports (Mulish + IBM Plex Mono).
  - `tokens/fig-tokens.css` — 713 Figma Variables (all 7 collections, all theme modes).
  - `tokens/fig-typography.css` — type scale, weights, `.fig-*` type classes.
  - `tokens/aliases.css` — readable semantic aliases (`--fig-brand-blue`, `--fig-surface`, spacing, radius, shadow, motion) + keyframes.
- **`assets/icons/`** — `Icon.jsx` wrapper, `icon-data.js` (294 glyphs), `Icon.d.ts` name index.
- **`components/`** — reusable primitives (see below).
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand).
- **`ui_kits/cloud-console/`** — interactive Cisco admin dashboard recreation.
- **`thumbnail.html`** — homepage tile.

### Components

- **core/** — `Button`, `SplitButton`, `IconButton`, `Link`, `Loader`, `Divider`, `Kbd`
- **forms/** — `FormField`, `TextInput`, `PasswordInput`, `TextArea`, `Select`, `Combobox`, `NumberInput`, `Slider`, `Checkbox`, `Radio`, `Switch`, `SearchInput`, `FileUploader`, `Rating`, `Calendar`, `TimePicker`
- **data-display/** — `Badge`, `Tag`, `Avatar`, `Tooltip`, `Card`, `KeyValue`, `Accordion`, `Table`, `Indicator`, `ComponentStatus`, `ColorSwatch`, `Timeline`, `BarChart`, `LineChart`, `DonutChart`, `GaugeChart`
- **feedback/** — `Banner`, `Callout`, `Toast`, `Toaster`, `Modal`, `Drawer`, `Popover`, `Overlay`, `ProgressBar`, `Skeleton`, `EmptyState`
- **navigation/** — `Header`, `PageTitle`, `Breadcrumb`, `Tabs`, `SecondaryNav`, `Pagination`, `Stepper`, `SideNav`, `NavGroup`, `Menu`, `Toolbar`, `FilterBar`, `Footer`, `Cover`, `ViewSwitcher`, `ButtonGroup`, `ScrollArea`, `Connector`
- **ai/** — `AIInputField`, `AIResponse`, `AIMark`, `AIModelSelect`, `ConversationPanel`
- **assets/icons/** — `Icon`

## Scope & coverage

The source is very large: its ~2,200 "component families" are overwhelmingly **internal variant sub-parts** — individual cells, labels, help-text fragments, per-color chart legend swatches, single nav-item states, per-digit badges — not distinct components a designer picks from a palette. This system implements the **documented top-level component families** (the pages in the file) as clean, reusable primitives: **64 components** (including a first-class AI-Assistant group, date/time pickers, and filter chips) spanning actions, forms, data display, feedback, and navigation. That is the set a designer or engineer actually reaches for; the thousands of remaining "families" are the composition parts folded *into* these components.

Deliberately **not** rebuilt as separate components (and why):

- **Chart internals** (per-color Bar/Line/Donut/Gauge legends, arcs, indicators — hundreds of one-off variant symbols) — represented by real `BarChart` / `DonutChart` primitives plus the categorical palette tokens; charts are composed per-use rather than shipped as hundreds of frozen variants.
- **Beta pages** (Date-Picker, Time-Picker, Passwords, Filters) — flagged Beta in the source; `Rating` is included as a representative. Ask if you want the pickers built out.
- **Deprecated-Components**, `V4-Testing`, and internal `.`-prefixed sub-symbols (`.Cell`, `.Label`, `.Help Text`, `.Header/Nav Item`, `_StatusBar-time`, `.Modal/Column`, etc.) — these are composition parts, folded into the components that use them.
- **AI-Assistant** pattern set — a full product pattern rather than a primitive; the best candidate for a second UI kit.

No components, tokens, or brand assets were invented beyond what the source defines. The one intentional addition is the **`Icon`** wrapper — a thin renderer over the file's own extracted glyph data (needed to use the icon set in code).
