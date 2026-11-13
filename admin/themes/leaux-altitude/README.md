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
