# Leaux Altitude

Dedicated AgentCMS theme for leaux.ovh. Ridgelines pass in front of the home title, each section is a summit on an orientation table, each post gets a contour map generated from its slug, and a reading climb follows the scroll.

Section slugs and colors live in `src/rubrics.ts` and `src/theme.css` (`[data-rubric]`). Hero texts are editable on the theme settings page.

## Custom fields

| Field | Type | Effect |
|---|---|---|
| `header-photo` | yes / no | On a post with a featured image, `true` puts the image behind the header, with a parallax on scroll, instead of the contour map. The image is then not repeated under the header. |

## Article components (raw HTML in Markdown)

- Pull quote: `<figure class="lx-pullquote"><blockquote><p>…</p></blockquote></figure>` (optional `<figcaption>`).
- Case box: `<aside class="lx-case"><p class="lx-case__tag">Cas réel · date</p><p class="lx-case__title">…</p><p>…</p><p class="lx-case__src">Source : <a href="…">…</a></p></aside>`.
- Key figures: `<div class="lx-stats"><div><strong>48 %</strong><span>…</span></div>…</div>`, optionally followed by `<p class="lx-case__src">Source : …</p>`.
