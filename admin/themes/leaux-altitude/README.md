# Leaux Altitude

Dedicated AgentCMS theme for leaux.ovh. Ridgelines pass in front of the home title, each section is a summit on an orientation table, each post gets a contour map generated from its slug, and a reading climb follows the scroll.

Section slugs and colors live in `src/rubrics.ts` and `src/theme.css` (`[data-rubric]`). Hero texts are editable on the theme settings page.

## Custom fields

| Field | Type | Effect |
|---|---|---|
| `header-photo` | yes / no | On a post with a featured image, `true` puts the image behind the header, with a parallax on scroll, instead of the contour map. The image is then not repeated under the header. |
| `toc` | yes / no | `true` adds a table of contents built from the body's `h2` (numbered) and `h3` (indented); the headings get ids. Wide screens (≥ 1200 px): the text moves left, aligned with the title, and the contents stay open in a sticky column on the right, current section highlighted and the rail filling as you read. Narrower: a sticky bar under the header that shows the current section and a reading progress line, and drops the list down on tap. Without JS: an open list above the text. Shown only with at least 2 headings. |

## Article components (raw HTML in Markdown)

- Video card (YouTube link with thumbnail, no embed): `<div class="lx-video"><a class="lx-video__thumb" href="https://www.youtube.com/watch?v=ID" aria-label="Regarder « Titre » sur YouTube"><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" loading="lazy"></a><div><p class="lx-video__meta">Chaîne · 18 min · en anglais</p><p class="lx-video__title"><a href="https://www.youtube.com/watch?v=ID">Titre</a></p><p>Résumé…</p></div></div>`.
- En bref (key points, first block of a long post): `<aside class="lx-brief" aria-label="En bref"><p class="lx-brief__tag">En bref</p><ul><li>… <strong>…</strong></li></ul></aside>`.

- Pull quote: `<figure class="lx-pullquote"><blockquote><p>…</p></blockquote></figure>` (optional `<figcaption>`).
- Case box: `<aside class="lx-case"><p class="lx-case__tag">Cas réel · date</p><p class="lx-case__title">…</p><p>…</p><p class="lx-case__src">Source : <a href="…">…</a></p></aside>`.
- Key figures: `<div class="lx-stats"><div><strong>48 %</strong><span>…</span></div>…</div>`, optionally followed by `<p class="lx-case__src">Source : …</p>`.
- Bar chart: `<figure class="lx-chart"><p class="lx-chart__title">…</p><p class="lx-chart__sub">…</p><div class="lx-chart__cols" style="--n:9"><div class="lx-chart__col is-lab" style="--v:.4" title="2020 : 18 322"><div class="lx-chart__bar"></div><span class="lx-chart__val">18 322</span></div>…</div><div class="lx-chart__axis" style="--n:9"><span>2020</span>…</div><p class="lx-case__src">Source : …</p></figure>`. `--v` is the bar height (0–1). Column modifiers: `is-hi` (highlighted), `is-part` (hatched, partial period), `is-lab` (value always shown; others on hover). Axis labels with `is-minor` hide on phones.
- Paired horizontal bars: `<div class="lx-chart__rows"><div class="lx-chart__row"><span>Label</span><div class="lx-chart__hb" style="--v:.3"><i></i>1 200 <em>2025</em></div><div class="lx-chart__hb is-hi" style="--v:.8"><i></i>3 400 <em>2026</em></div></div></div>` with a `<ul class="lx-chart__legend"><li><i></i>2025</li><li><i class="is-hi"></i>2026</li></ul>`.

## Section pages (1.6.0)

The band of each section page features its latest post: image as background (rubric-tinted gradient), kicker « Rubrique — Dernier article », title, excerpt, « Lire l'article » button, date and reading time, ridge edge kept. The other posts follow under « Articles précédents ». The h1 of the page is the logo, with the section name visually hidden; `<title>` and meta description still come from the category.

## Home (1.7.0)

Newest post in the band (same design as section pages), one block per section (newest post large, two more beside it, link « Toute la rubrique »), « Mes projets » as round logos, « Par où monter ? » at the bottom. Project fields on posts of « Mes projets »: `project` (name), `project-logo` (URL of the `square` image format), `project-tagline` (optional). New image format `square` (320×320).

## Home data (1.7.1)

The manifest sets `homeCategoryPosts: 12`: AgentCMS ≥ 0.4.4 passes the newest 12 posts of every category to the home (`props.categories`), used for the section blocks and the projects. `postsPerPage` no longer has to be large. Older AgentCMS: fallback on `props.posts`.

## Transitions and parallax (1.7.2)

The list → post transition starts from the feature band, the home cards and the project logos too (`lxVtPair` in BaseLayout's head script). The band parallax uses CSS scroll-driven animations (off the main thread, smooth on phones); the JS version is a fallback for mouse users on browsers without them.


### 1.7.3

The bands' view timeline uses `view-timeline-inset: 0`. With the default (`auto`) it took html's `scroll-padding-top` (88 px, 132 px on posts with a table of contents), so the parallax had already started at load and the header photo sat ~27 px below the site header.

### 1.7.4

Post and page titles (`.lx-band--article h1`) use the same size as the home's featured title (`.lx-feature__title`): `clamp(2.5rem, 5.2vw, 5rem)`, 18ch wide — 75 px instead of 104 px at 1440 px. The 2.5rem floor keeps phones at 40 px.

### 1.8.8

- « Récit au scroll » (field `scroll-story: true`): each run of consecutive images in the body (figure.lx-3d, or a paragraph holding only an image) becomes a tall section with a sticky full-screen stage. While it is pinned the image grows from the column width to full screen, the next images of the run slide over it, then the last one shrinks back and the text resumes. Images far from the screen's shape are shown whole on a blurred copy of themselves. A still copy carries the transforms; a 3D photo fades in over it once settled full screen (the Agent3D player must never be scaled). Off with reduced motion.

### 1.8.7

- 3D post header: field `header-3d` = folder of an Agent3D export on the site (`/agent3d/<name>/`, with `scene.json` and a `scene-wide.json` framed larger for headers wider than 1.95:1). On landscape screens ≥ 768 px, after the page load, the header photo becomes the poster of that scene under the readability veils; the text lets the pointer through. Phones in portrait keep the photo (the header there is much taller than the photo). Needs `header-photo: true`.

### 1.8.6

- 3D photos on iOS Safari: the device tilt needs `DeviceOrientationEvent.requestPermission()` from a tap, which the Agent3D player never calls. A « Bouger avec le téléphone » chip (iOS only) on each 3D photo asks once and disappears everywhere when granted; later pages of the same tab session renew the permission on the first tap.

### 1.8.5

- 3D photos (Agent3D) in post bodies, sanitizer-proof: the body holds `<figure class="lx-3d" data-3d-src="…/scene.json" data-3d-runtime="…/agent3d-photo.js" data-3d-aspect="4:3" style="aspect-ratio:4/3"><img src="…/poster.webp" alt="…" loading="lazy"></figure>` (AgentCMS drops unknown elements such as `<agent3d-scene>` when it sanitizes a body). `menu-loader.js` loads the player module with the first figure that comes within 600 px of the viewport and builds the `<agent3d-scene>` around the image (its poster) only then.

### 1.8.4

- First version of the lazy 3D photos (`<agent3d-scene data-src>` in the body; replaced by 1.8.5 because the sanitizer strips the element).

### 1.8.3

- Every photo band (post headers too) gets the home band's veil: dark on the text side (left on wide screens, bottom on phones), clear elsewhere. Images are uploaded untouched.

### 1.8.2

- Home `<title>`: « <site title> — IA, transformation et projets tech » (`homeTitle` in i18n.ts).
- `data-nosnippet` on the featured-post labels, the header menu and the footer, so Google builds snippets from the meta description and the content; a space between the rubric chip and « Dernier article ».
- Footer: optional portrait in a gradient ring next to the name (theme setting `footer.portrait`, a square image URL), the name on two lines beside it.
- Field `photo-shade` (boolean): stronger veil over the hero, for light images or images with text.

### 1.8.1

- Home: an « Observatoire IA » block after « Mes projets », shown while the header menu links to `observatoire-ia.html`. Its 6 key figures and update date are copied at runtime from the published page (`.lx-obs__kpis`, `.lx-obs__updated`), each linking to its section, so the block follows every refresh of the page with no home regeneration.
- Home: « Passions » moved to the last block.

### 1.8.0

Observatoire de l'IA (page with the custom field `dashboard: true`): compact header (rubric chip « Observatoire », update date from the field `obs-updated`, title and lead side by side), full-width body outside the prose column, `.lx-obs` dashboard components (key figures with sparklines, per-section accents, line / column / bar / scatter charts in plain HTML + SVG, data tables), hover tooltips and a scroll reveal (lines draw, bars grow, figures count up; off with reduced motion, visible without JS). The section nav sticks under the header and follows it when it hides.

### 1.7.5

Google Tag Manager container replaced: `GTM-PJ68GND6` (was `GTM-KNDFD5GH`), same snippet after the footer.
