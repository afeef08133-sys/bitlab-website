# BitLab Website — Project Context

## 1. Project

This repository contains the public-facing marketing website for BitLab.

The website is currently a simple static website:

- HTML
- CSS
- JavaScript
- local assets

The site is deployed through Railway and connected to the domain:

bitlabhq.com

The local development workflow is:

1. Edit files in VS Code.
2. Use VS Code Live Server to inspect the website locally.
3. Review changes visually.
4. Commit to Git only after the design is approved.
5. Railway deploys the committed/pushed version.

Do NOT change the deployment configuration unless explicitly asked.

---

# 2. About BitLab

BitLab is a business solutions company.

The company is NOT primarily a pharmacy software company. The pharmacy application is one concrete product that demonstrates what BitLab can build.

Core offerings:

- Database solutions
- Consultation
- AI automation
- Taking traditional/local businesses online
- Custom business software and digital tools

The website should make BitLab look like a capable technical solutions provider.

The pharmacy PWA should act as proof of capability, not as the entire identity of the company.

---

# 3. Brand positioning

BitLab should feel:

- technical
- capable
- modern
- sharp
- practical
- confident
- approachable
- distinctive

It should NOT feel like:

- generic SaaS marketing
- a generic software agency template
- a stock-photo business website
- an overly corporate consultancy
- an AI hype website
- a pastel startup landing page

Avoid generic marketing language such as:

- revolutionize
- game-changing
- seamless
- unlock the future
- cutting-edge solutions
- transform your business

Prefer concrete language.

BitLab's actual capabilities are more persuasive than exaggerated claims.

---

# 4. BitLab offerings

## Database solutions

BitLab builds and manages structured data systems for businesses.

Possible website concepts:

- inventory
- customers
- sales
- purchases
- reports
- structured records
- business data

The visual language can include tables, records, charts, relationships, databases and structured information.

## Consultation

BitLab provides business/technical consultation.

The website should not make this sound like generic management consulting.

Focus on practical technology and workflow decisions.

## AI automation

BitLab applies AI to automate business workflows.

Possible visual language:

- workflow nodes
- input → processing → output
- AI-assisted decisions
- repetitive tasks becoming automated
- connected business processes

Avoid making exaggerated claims about AI.

## Taking your shop online

BitLab helps traditional, in-person businesses gain a real digital presence and operational tooling.

This begins with pharmacies, but is not limited to pharmacies.

The concept is broader than simply creating a storefront website.

It can include:

- inventory
- sales
- customer records
- business data
- digital workflows
- operational software

---

# 5. Featured product — Pharmacy POS / Inventory PWA

BitLab has built a real working Progressive Web App specifically for pharmacies in Bangladesh.

This is NOT a generic template or mockup.

It includes:

### New Sale

- ring up sales
- take cash
- mark sales as due
- strip/loose unit tracking for medicines

### Add Stock

- record incoming inventory
- supplier discounts
- free bonus units
- negotiated prices

### Inventory

- live stock levels
- low-stock tracking
- out-of-stock tracking

### Calibrate

A deliberate stock-reconciliation system.

It allows the shop to compare the actual physical shelf count with the recorded database stock.

This exists because real-world inventory often starts imperfect and needs correction.

This is an important example of BitLab designing around real business conditions.

### Customers and Due

- customer directory
- credit/due balance tracking

### Reports

- sales
- profit
- purchases

### Language

The application has full Bangla language support.

It is not simply an English application with a translation layer added later.

---

# 6. Pharmacy PWA technical facts

These facts are useful when writing accurate copy but should not all necessarily appear on the homepage.

The application:

- is a real PWA
- works offline
- can be installed on a phone
- synchronizes when back online
- uses a multi-shop architecture
- keeps each pharmacy's data isolated
- has one real pilot pharmacy currently using it

The public website must NEVER link to or expose private pharmacy deployments.

Only the intentionally public demo instance may be linked.

The public demo is called internally "Shop 2".

The demo contains realistic but completely fake data.

It is intentionally public and unprotected so visitors can explore it.

If the demo URL is already present in the project, preserve it.

If it is not present, DO NOT invent a URL.

---

# 7. Important privacy / deployment rule

There are multiple Pharmacy PWA deployments.

Only the public demo may be linked from the website.

Never:

- link to the real pilot pharmacy
- mention its private deployment
- expose internal testing deployments
- expose private shop data
- infer or construct URLs for private deployments

If referring to adoption, use abstract wording such as:

"Already being used by a pharmacy in Bangladesh."

Do not identify the private pharmacy unless explicitly instructed.

---

# 8. Current brand colors

The original BitLab color palette is:

```css
--primary-violet: #8e7dff;
--primary-pink: #ff7da7;
--bg-light: #faf9ff;
--text-dark: #2d264d;
--text-muted: #6b628a;
--card-bg: #ffffff;

--gradient: linear-gradient(
    135deg,
    #a78bfa 0%,
    #f472b6 100%
);

The colors #8e7dff and #ff7da7 are the important brand colors.

We experimented with a softer gradient and found that it made the site look too foggy/pastel.

The current design direction is to use the colors more sharply and vibrantly.

For the dark hero experiment, prefer the original saturated colors:

#8e7dff
#ff7da7

rather than muting them.

9. Current visual direction

We are currently experimenting with a DARK HERO.

Do not immediately redesign the entire website.

The first task is ONLY to explore how the dark hero looks.

The rest of the site can remain simple/light for now.

The intended dark hero direction:

near-black / deep purple background
bright violet and pink accents
white typography
strong contrast
minimal blur
minimal fog
restrained glow
technical visual language

Possible background colors:

#0a0811
#100d1b
#151025

Do not overuse gradients.

Do not create a giant blurry violet/pink glow covering the page.

The goal is:

SHARP + VIBRANT

not:

SOFT + FOGGY

10. Hero structure

The first screen should communicate what BitLab does quickly.

Current hero wording:

"We help businesses"

followed by a rotating phrase.

The current rotating phrases are:

"organize data."
"automate work."
"build software."

Do NOT currently use:

"take your shop online."

It was removed because it made the line awkward and caused excessive variation in the visual size.

The rotating phrase should occupy a FIXED-SIZE container.

The overall layout must NOT resize when a different phrase appears.

The words should change inside the same fixed area.

11. Hero animation concept

The original idea from the designer/owner was similar to a calendar changing pages.

The concept is:

"We help businesses"

then a phrase appears on a page/card:

"organize data."

Then the page changes to:

"automate work."

Then:

"build software."

The transition should feel like a physical page/card changing.

It should NOT simply fade between words.

A vertical page-turn / slide / flip effect is appropriate.

The layout must remain stable during the animation.

Avoid:

resizing the container
jumping text
changing the overall hero dimensions
excessive 3D effects
distracting animations

The animation should feel deliberate and polished.

12. Hero visual — important design direction

The right-side hero element should NOT be treated as a generic decorative card.

Call it the:

"hero visual"

or

"visual panel"

if needed.

The hero visual should have a VIBE that represents the current concept.

For example:

When the phrase is:

"organize data."

the visual should resemble a stylized database/data environment.

Possible elements:

tables
rows
product counts
customer counts
sales numbers
charts
data points
database labels
structured records

When the phrase is:

"automate work."

the visual should transform into an automation/workflow concept.

Possible elements:

INPUT
  ↓
PROCESS
  ↓
AI
  ↓
ACTION

with connected nodes and moving indicators.

When the phrase is:

"build software."

the visual should become a stylized application interface.

Possible elements:

dashboard
application panels
interface components
navigation
data
status indicators

The visual should feel like something BitLab actually builds.

13. Preferred implementation for hero visuals

Prefer HTML/CSS/SVG/JavaScript for the hero visual when practical.

Do NOT immediately use stock images.

Do NOT use generic stock photography.

A custom visual built from HTML/CSS/SVG is preferable because:

it can animate
it matches the brand
it is lightweight
it demonstrates technical capability
it can transform between concepts
it does not depend on external images

Images or video may be considered later if they genuinely improve the design.

14. Manim / video possibility

The owner has significant experience with Manim.

A custom Manim animation is therefore a possible future option.

However, do NOT assume a video is automatically better.

First test whether the hero can be achieved cleanly with:

CSS
SVG
JavaScript

If a Manim animation would clearly produce a better visual, discuss that option before replacing the CSS/SVG approach.

The website should not become unnecessarily heavy just to use video.

15. Website structure — planned

The homepage will eventually contain sections such as:

Hero

Quick explanation of BitLab and the animated concept.

What we do
Database solutions
Consultation
AI automation
Digital/business software
Pharmacy PWA

A real product demonstration.

The section should clearly say it is a real working product.

It should have a strong CTA such as:

"Try it now"

which links ONLY to the public demo.

Other sections

These can be designed later.

Do not invent a large number of sections before the core visual identity is settled.

16. Current development philosophy

This is a design-first project.

The owner prefers to discuss the visual concept before implementing major changes.

Therefore:

make changes in small iterations
do not redesign everything at once
preserve working parts
let the owner review the result in Live Server
avoid unnecessary dependencies
avoid frameworks unless specifically requested

The current stack is:

HTML + CSS + JavaScript.

17. Git workflow

The project is already a Git repository.

Do NOT initialize another repository.

Do NOT create another project.

Do NOT commit automatically unless explicitly asked.

The owner wants to:

inspect changes locally
use Live Server
approve the design
then commit
then push
Railway deploys the new version

When making changes, keep the Git diff understandable.

18. Coding style

Prefer:

readable HTML
semantic elements
CSS variables
organized CSS sections
plain JavaScript
comments for non-obvious animation logic
responsive design

Avoid:

unnecessary libraries
huge dependencies
minified source
overly complicated abstractions
generated code that is difficult to understand

The owner is learning web development and should be able to understand the project.

19. Current immediate task

DO NOT redesign the entire website.

The immediate task is:

Build a dark hero experiment.

Requirements:

dark background
sharp/vibrant BitLab violet and pink
white text
fixed-size rotating phrase
page/calendar-like transition
three phrases:
organize data.
automate work.
build software.
right-side hero visual
hero visual should represent the current phrase
initial visual can focus on the database concept
no "take your shop online" phrase in the rotating hero
minimal blur
strong contrast
responsive

The owner will inspect it with VS Code Live Server.

Do not touch the rest of the site more than necessary to support the hero experiment.

20. Important instruction for Codex

Before making major design decisions, inspect the existing:

index.html
style.css
script.js

Preserve useful existing work.

Do not overwrite the whole project blindly.

Implement the dark hero as an iterative change.