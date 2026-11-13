import { jsxs as s, jsx as e, Fragment as $ } from "react/jsx-runtime";
import { i18n as le, pickPublicLocale as oe, canonicalUrl as te, buildPostUrl as se, postSortMillis as P, pickFormat as H, buildTermUrl as ne, SocialIcon as de, socialLabel as ce, toast as pe } from "@agent-cms/runtime";
import { useState as Q, useEffect as xe } from "react";
import { useTranslation as he } from "react-i18next";
const me = `@import url("https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&display=swap");

/* Palette: a relief map at dusk. Every section owns a hypsometric tint. */
:root {
  --lx-night: #10163f;
  --lx-night-2: #1a2259;
  --lx-glacier: #e8eff3;
  --lx-snow: #f7fafb;
  --lx-ink: #141a42;
  --lx-muted: #535b84;
  --lx-line: #c6d2dc;
  --lx-bg: var(--lx-glacier);
  --lx-text: var(--lx-ink);
  --lx-code: var(--lx-night);
  --lx-tint: #6d4dff;
  --lx-deep: #4a2fd0;
  --lx-display: "Archivo", "Arial Narrow", sans-serif;
  --lx-serif: "Newsreader", Georgia, serif;
  --lx-gutter: clamp(16px, 4vw, 64px);
}
:root:not([data-theme="light"]) { color-scheme: light dark; }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --lx-bg: var(--lx-night);
    --lx-text: var(--lx-glacier);
    --lx-muted: #a7afd6;
    --lx-line: #333c7a;
    --lx-snow: var(--lx-night-2);
    --lx-code: var(--lx-night-2);
  }
}
[data-rubric="transition-ia"] { --lx-tint: #8467ff; --lx-deep: #4a2fd0; }
[data-rubric="mes-projets"] { --lx-tint: #14c9ac; --lx-deep: #00776a; }
[data-rubric="passions"] { --lx-tint: #ff6b3d; --lx-deep: #c23a10; }
[data-rubric="news-tech-ia"] { --lx-tint: #45a8ff; --lx-deep: #0b60c0; }
[data-rubric="edito"] { --lx-tint: #ffc53d; --lx-deep: #805a00; }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) [data-rubric] { --lx-deep: var(--lx-tint); }
}

*, *::before, *::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; scroll-padding-top: 88px; }
body.lx { margin: 0; background: var(--lx-bg); color: var(--lx-text); font: 400 1.0625rem/1.55 var(--lx-display); overflow-x: clip; -webkit-font-smoothing: antialiased; }
.lx img { max-width: 100%; height: auto; display: block; }
.lx a { color: inherit; }
.lx :focus-visible { outline: 3px solid var(--lx-tint); outline-offset: 3px; border-radius: 2px; }
.lx h1, .lx h2, .lx h3 { font-family: var(--lx-display); margin: 0; text-wrap: balance; }

/* Header */
.lx-header { position: sticky; top: 0; z-index: 30; display: flex; align-items: center; gap: 24px; min-height: 68px; padding: 0 var(--lx-gutter); background: var(--lx-night); color: var(--lx-glacier); }
.lx-header { transition: transform .35s cubic-bezier(.2, .7, .2, 1); }
.lx-header.is-hidden { transform: translateY(-100%); }
@media (prefers-reduced-motion: reduce) { .lx-header { transition: none; } }
.lx-brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-weight: 800; font-stretch: 112%; white-space: nowrap; }
.lx-brand svg { width: 30px; height: 20px; fill: #ff6b3d; }
.lx-nav { margin-left: auto; }
.lx-nav ul { display: flex; align-items: center; gap: clamp(14px, 1.8vw, 28px); list-style: none; margin: 0; padding: 0; }
.lx-nav a { position: relative; padding: 6px 0; text-decoration: none; font-size: .95rem; font-weight: 500; }
.lx-nav a::after { content: ""; position: absolute; inset: auto 0 0; height: 2px; background: #ff6b3d; transform: scaleX(0); transform-origin: left; transition: transform .2s; }
.lx-nav a:hover::after, .lx-nav a[aria-current="page"]::after { transform: scaleX(1); }
.lx-header__tools { display: flex; align-items: center; gap: 6px; }
.lx-iconbtn { width: 44px; height: 44px; display: grid; place-items: center; background: none; border: 0; color: inherit; cursor: pointer; }
.lx-iconbtn svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
.lx-burger { display: none; }
@media (max-width: 960px) {
  .lx-burger { display: grid; }
  .lx-header__tools { margin-left: auto; }
  .lx-nav { position: fixed; inset: 68px 0 0; margin: 0; padding: 32px var(--lx-gutter); background: var(--lx-night); visibility: hidden; opacity: 0; transition: opacity .2s; overflow-y: auto; }
  .lx-nav.is-open { visibility: visible; opacity: 1; }
  .lx-nav ul { flex-direction: column; align-items: flex-start; gap: 16px; }
  .lx-nav a { font-size: clamp(2rem, 9vw, 3rem); font-weight: 800; font-stretch: 110%; line-height: 1.1; }
}

/* Hero */
.lx-hero { position: relative; isolation: isolate; height: calc(100svh - 68px); min-height: 560px; max-height: 1100px; overflow: hidden; background: var(--lx-night); color: var(--lx-snow); }
.lx-hero__canvas { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
.lx-hero__canvas--front { z-index: 3; pointer-events: none; }
.lx-hero__copy { position: absolute; inset: auto 0 41%; z-index: 1; padding: 0 var(--lx-gutter); }
.lx-hero::after { content: ""; position: absolute; inset: auto 0 0; height: 22%; z-index: 4; pointer-events: none; background: linear-gradient(transparent, var(--lx-night)); }
.lx-hero__tagline { max-width: 34ch; margin: 0 0 clamp(16px, 3vh, 32px); font: italic 400 clamp(1.15rem, 1.7vw, 1.6rem)/1.3 var(--lx-serif); color: #cdd6f4; }
.lx-hero__name { font-size: min(15.4vw, 24vh, 22rem); font-weight: 900; font-stretch: 125%; line-height: .84; letter-spacing: -.035em; color: var(--lx-glacier); }
.lx-hero__name span { display: block; }
.lx-hero__name span:last-child { padding-left: .62em; }
.lx-hero__static { position: absolute; inset: auto 0 0; width: 100%; height: 42%; z-index: 2; }
.lx-hero__static path { fill: var(--lx-night-2); }
.lx-hero__static path:nth-child(2) { fill: #3b2a96; }
.lx-hero__static path:nth-child(3) { fill: #ff6b3d; }
.lx-hero.is-live .lx-hero__static { display: none; }
@media (max-width: 640px) {
  .lx-hero { height: min(calc(100svh - 68px), 150vw); }
  .lx-hero__copy { inset: 20px 0 auto; }
  .lx-hero__name { font-size: 16vw; }
  .lx-hero__name span:last-child { padding-left: 0; }
}

/* Panorama: the orientation table */
.lx-pano { position: relative; background: var(--lx-night); color: var(--lx-glacier); padding-top: clamp(48px, 8vw, 110px); }
.lx-pano__title { padding: 0 var(--lx-gutter); font-size: clamp(2.2rem, 5vw, 4.5rem); font-weight: 800; font-stretch: 112%; letter-spacing: -.02em; line-height: 1; }
.lx-pano__stage { position: relative; margin-top: clamp(60px, 8vw, 110px); aspect-ratio: 1600 / 620; }
.lx-pano__stage > svg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; overflow: visible; }
.lx-peak { transition: transform .35s cubic-bezier(.2, .9, .3, 1.2); }
.lx-peak__lit { fill: var(--lx-tint); }
.lx-peak__shade { fill: var(--lx-night); opacity: .3; }
.lx-pano:has([data-label="transition-ia"] a:hover) [data-peak="transition-ia"],
.lx-pano:has([data-label="mes-projets"] a:hover) [data-peak="mes-projets"],
.lx-pano:has([data-label="passions"] a:hover) [data-peak="passions"],
.lx-pano:has([data-label="news-tech-ia"] a:hover) [data-peak="news-tech-ia"],
.lx-pano:has([data-label="edito"] a:hover) [data-peak="edito"],
a:hover > .lx-peak { transform: translateY(-16px); }
.lx-pano__labels { list-style: none; margin: 0; padding: 0; }
.lx-pano__labels li { position: absolute; width: max-content; max-width: 19ch; transform: translate(-50%, calc(-100% - 14px)); text-align: center; }
.lx-pano__labels li::after { content: ""; display: block; width: 2px; height: 12px; margin: 6px auto 0; background: var(--lx-tint); }
.lx-pano__labels a { display: block; text-decoration: none; }
.lx-pano__labels strong { display: block; font-size: clamp(1.05rem, 1.7vw, 1.7rem); font-weight: 800; font-stretch: 108%; line-height: 1.05; }
.lx-pano__labels span { display: block; margin-top: 4px; font-size: .9rem; line-height: 1.25; color: #c3cbea; }
.lx-pano__labels a:hover strong { color: var(--lx-tint); }
@media (max-width: 860px) {
  .lx-pano__stage { aspect-ratio: auto; display: flex; flex-direction: column; }
  .lx-pano__stage > svg { position: relative; inset: auto; order: 2; aspect-ratio: 1600 / 620; height: auto; margin-top: 8px; }
  .lx-pano__labels { padding: 0 var(--lx-gutter); }
  .lx-pano__labels li { position: static; transform: none; width: auto; max-width: none; text-align: left; border-left: 6px solid var(--lx-tint); margin-bottom: 18px; padding-left: 14px; left: auto !important; top: auto !important; }
  .lx-pano__labels li::after { display: none; }
  .lx-pano__labels strong { font-size: 1.5rem; }
  .lx-pano__labels span { font-size: 1rem; }
}

/* Sections and trail */
.lx-section { max-width: 1320px; margin: 0 auto; padding: clamp(64px, 9vw, 130px) var(--lx-gutter) clamp(48px, 7vw, 90px); }
.lx-section--flush { padding-top: clamp(32px, 5vw, 64px); }
.lx-section__title { font-size: clamp(2.2rem, 5vw, 4.5rem); font-weight: 800; font-stretch: 112%; letter-spacing: -.02em; line-height: 1; margin-bottom: clamp(36px, 5vw, 72px) !important; }
.lx-empty { font: italic 1.4rem/1.4 var(--lx-serif); color: var(--lx-muted); }
.lx-trail { position: relative; display: grid; gap: clamp(48px, 7vw, 104px); }
.lx-trail__path { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; overflow: visible; z-index: 0; }
.lx-trail__path path { fill: none; stroke: #ff6b3d; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.lx-way { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); gap: clamp(24px, 4vw, 64px); align-items: center; width: min(100%, 980px); }
.lx-way:nth-child(even of .lx-way) { justify-self: end; grid-template-columns: minmax(0, 6fr) minmax(0, 5fr); }
.lx-way:nth-child(even of .lx-way) .lx-way__art { order: 2; }
.lx-way--first { width: 100%; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); }
.lx-way__pin { position: absolute; left: -11px; top: 50%; width: 22px; height: 22px; border-radius: 50%; border: 5px solid var(--lx-bg); background: var(--lx-tint); z-index: 2; }
.lx-way:nth-child(even of .lx-way) .lx-way__pin { left: auto; right: -11px; }
.lx-way__art { position: relative; display: block; aspect-ratio: 8 / 5; overflow: hidden; background: var(--lx-tint); color: var(--lx-night); clip-path: polygon(0 7%, 14% 0, 34% 5%, 57% 0, 78% 4%, 100% 0, 100% 100%, 0 100%); transition: clip-path .4s ease; }
.lx-way:nth-child(3n) .lx-way__art { clip-path: polygon(0 0, 22% 5%, 41% 0, 66% 6%, 84% 1%, 100% 6%, 100% 100%, 0 100%); }
.lx-way__art:hover { clip-path: polygon(0 0, 14% 0, 34% 0, 57% 0, 78% 0, 100% 0, 100% 100%, 0 100%); }
.lx-way__art img { width: 100%; height: 100%; object-fit: cover; }
.lx-topo { display: block; width: 100%; height: 100%; }
.lx-topo path { fill: none; stroke: currentColor; stroke-linecap: round; vector-effect: non-scaling-stroke; }
.lx-topo__minor { stroke-width: .8; opacity: .55; }
.lx-topo__major { stroke-width: 1.6; }
.lx-way__meta { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 0 0 10px; font-size: .95rem; color: var(--lx-muted); }
.lx-way__meta a { color: var(--lx-deep); font-weight: 700; text-decoration: none; }
.lx-way__meta a:hover { text-decoration: underline; }
.lx-way h3 { font-size: clamp(1.55rem, 2.7vw, 2.5rem); font-weight: 800; font-stretch: 104%; line-height: 1.06; letter-spacing: -.012em; }
.lx-way--first h3 { font-size: clamp(2rem, 4vw, 3.8rem); font-stretch: 112%; line-height: 1; }
.lx-way h3 a { text-decoration: none; background: linear-gradient(var(--lx-tint), var(--lx-tint)) 0 100% / 0 3px no-repeat; transition: background-size .3s; }
.lx-way h3 a:hover { background-size: 100% 3px; }
.lx-way__excerpt { margin: 12px 0 0; font: 400 1.2rem/1.45 var(--lx-serif); color: var(--lx-muted); max-width: 46ch; }
.lx-more { margin: clamp(40px, 5vw, 64px) 0 0; font-weight: 700; }
@media (max-width: 760px) {
  .lx-trail { padding-left: 22px; }
  .lx-way, .lx-way--first, .lx-way:nth-child(even of .lx-way) { grid-template-columns: minmax(0, 1fr); gap: 16px; width: 100%; }
  .lx-way:nth-child(even of .lx-way) .lx-way__art { order: 0; }
  .lx-way__pin, .lx-way:nth-child(even of .lx-way) .lx-way__pin { left: -33px; right: auto; top: 12px; }
}

/* Color bands: top of article, category and author pages */
.lx-band { position: relative; overflow: hidden; isolation: isolate; background: var(--lx-tint); color: var(--lx-night); }
.lx-article:not([data-rubric]) .lx-band, .lx-band--author { background: var(--lx-night-2); color: var(--lx-glacier); }
.lx-band__art { position: absolute; inset: 0; z-index: -1; opacity: .5; transform-origin: 50% 0; }
.lx-band--category .lx-band__art, .lx-band--category .lx-band__inner { will-change: transform; }
.lx-band--photo { display: flex; align-items: flex-end; min-height: min(88vh, 860px); background: var(--lx-night) !important; color: #fff !important; }
.lx-band--photo .lx-band__art { opacity: 1; will-change: transform; }
.lx-band--photo .lx-band__inner { width: 100%; will-change: transform; }
.lx-band__photo img { width: 100%; height: 100%; object-fit: cover; }
.lx-band__photo::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(16,22,63,.25) 0%, rgba(16,22,63,.1) 35%, rgba(16,22,63,.72) 100%); }
.lx-band--photo h1, .lx-band--photo .lx-band__lead, .lx-band--photo .lx-band__count { text-shadow: 0 2px 18px rgba(0,0,0,.45); }
.lx-band--photo .lx-band__count a { color: inherit; }
.lx-band__inner { max-width: 1320px; margin: 0 auto; padding: clamp(40px, 7vw, 96px) var(--lx-gutter) clamp(80px, 11vw, 150px); }
.lx-band h1 { font-weight: 900; letter-spacing: -.025em; line-height: .96; }
.lx-band--article h1 { max-width: 19ch; font-size: clamp(2.5rem, 7.2vw, 7rem); font-stretch: 112%; }
.lx-band--category h1 { font-size: clamp(3.4rem, 13.5vw, 13rem); font-stretch: 125%; line-height: .88; letter-spacing: -.035em; }
.lx-band--author h1 { font-size: clamp(3rem, 10vw, 9rem); font-stretch: 120%; }
.lx-band__rubric { display: inline-block; margin-bottom: 18px; padding: 5px 12px 6px; background: var(--lx-night); color: var(--lx-glacier) !important; font-weight: 700; text-decoration: none; }
.lx-band__lead { max-width: 40ch; margin: 30px 0 0; font: 500 clamp(1.3rem, 2.2vw, 1.85rem)/1.25 var(--lx-serif); }
.lx-band__bio { max-width: 58ch; margin: 14px 0 0; font: 400 1.25rem/1.45 var(--lx-serif); }
.lx-band__count { display: flex; flex-wrap: wrap; gap: 4px 20px; margin: 22px 0 0; font-weight: 600; }
.lx-band__edge { position: absolute; inset: auto 0 -1px; width: 100%; height: clamp(44px, 7vw, 90px); }
.lx-band__edge path { fill: var(--lx-bg); }
/* Section pages: the latest post takes the band, its image behind the text */
.lx-sr { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
.lx-brand-h { display: contents; font: inherit; }
.lx-band--feature { display: flex; align-items: flex-end; min-height: min(84vh, 800px); }
.lx-band--feature .lx-band__inner { padding-top: clamp(40px, 6vw, 80px); padding-bottom: clamp(84px, 9vw, 130px); }
.lx-band--feature .lx-band__inner { width: 100%; }
.lx-band--feature.lx-band--photo .lx-band__photo::after { background:
  radial-gradient(120% 90% at 0% 100%, color-mix(in srgb, var(--lx-tint) 26%, transparent) 0%, transparent 55%),
  linear-gradient(90deg, rgba(16,22,63,.9) 0%, rgba(16,22,63,.66) 42%, rgba(16,22,63,.12) 78%),
  linear-gradient(180deg, rgba(16,22,63,.35) 0%, rgba(16,22,63,0) 30%, rgba(16,22,63,.55) 100%); }
.lx-feature { max-width: 980px; }
.lx-feature__kicker { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px; margin: 0; font-size: .8rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
.lx-feature__kicker > span:last-child { display: inline-flex; align-items: center; gap: 14px; }
.lx-feature__kicker > span:last-child::before { content: ""; width: 34px; height: 2px; background: var(--lx-tint); }
.lx-feature__rubric { padding: 6px 12px 6px; background: var(--lx-tint); color: var(--lx-night); letter-spacing: .1em; }
.lx-feature__title { max-width: 18ch; margin-top: clamp(18px, 2.4vw, 28px) !important; font-size: clamp(2.3rem, 5.2vw, 5rem); font-weight: 900; font-stretch: 112%; line-height: .98; letter-spacing: -.025em; }
.lx-feature__title a { text-decoration: none; background: linear-gradient(var(--lx-tint), var(--lx-tint)) 0 96% / 0 .07em no-repeat; transition: background-size .45s cubic-bezier(.2, .7, .2, 1); }
.lx-feature__title a:hover, .lx-feature__title a:focus-visible { background-size: 100% .07em; }
.lx-band--feature .lx-band__lead { max-width: 46ch; margin-top: clamp(16px, 2vw, 24px); font-size: clamp(1.2rem, 1.8vw, 1.6rem); }
.lx-section__title--small { font-size: clamp(1.9rem, 3.6vw, 3.2rem); }
.lx-feature__foot { display: flex; flex-wrap: wrap; align-items: center; gap: 14px 28px; margin-top: clamp(26px, 3.4vw, 40px); }
.lx-feature__foot .lx-band__count { margin: 0; opacity: .9; }
.lx-feature__cta { display: inline-flex; align-items: center; gap: 12px; padding: 15px 24px 15px 26px; background: var(--lx-tint); color: var(--lx-night) !important; font-weight: 800; font-stretch: 108%; text-decoration: none; clip-path: polygon(0 0, 100% 0, 100% 72%, calc(100% - 12px) 100%, 0 100%); transition: background-color .2s; }
.lx-feature__cta svg { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; transition: transform .25s; }
.lx-feature__cta:hover { background: #fff; }
.lx-feature__cta:hover svg { transform: translateX(4px); }
.lx-band--feature:not(.lx-band--photo) .lx-feature__rubric, .lx-band--feature:not(.lx-band--photo) .lx-feature__cta { background: var(--lx-night); color: var(--lx-glacier) !important; }
.lx-band--feature:not(.lx-band--photo) .lx-feature__kicker > span:last-child::before { background: var(--lx-night); }
.lx-section__title span { margin-left: .4em; font-size: .38em; font-weight: 600; font-stretch: 100%; letter-spacing: 0; color: var(--lx-muted); vertical-align: middle; }
@media (max-width: 760px) {
  .lx-band--feature { min-height: min(82vh, 720px); }
  .lx-band--feature.lx-band--photo .lx-band__photo::after { background:
    radial-gradient(140% 70% at 0% 100%, color-mix(in srgb, var(--lx-tint) 24%, transparent) 0%, transparent 60%),
    linear-gradient(180deg, rgba(16,22,63,.3) 0%, rgba(16,22,63,.35) 30%, rgba(16,22,63,.86) 70%, rgba(16,22,63,.92) 100%); }
  .lx-feature__title { font-size: clamp(2.1rem, 9.4vw, 3rem); }
  .lx-band--feature .lx-band__lead { font-size: 1.2rem; }
  .lx-feature__kicker > span:last-child::before { width: 20px; }
  .lx-feature__kicker { gap: 10px 12px; }
  .lx-section__title--small { font-size: 1.6rem; }
}
.lx-avatar { width: 120px; height: 120px; object-fit: cover; border-radius: 50%; margin-bottom: 20px; }
.lx-socials { display: flex; gap: 14px; list-style: none; margin: 18px 0 0; padding: 0; }

/* Reading */
.lx-figure { max-width: 1120px; margin: clamp(24px, 4vw, 48px) auto 0; padding: 0 var(--lx-gutter); }
.lx-figure img { width: 100%; }
.lx-figure figcaption { margin-top: 10px; font: italic 1rem/1.4 var(--lx-serif); color: var(--lx-muted); }
.lx-prose { max-width: calc(68ch + 2 * var(--lx-gutter)); margin: 0 auto; padding: clamp(32px, 5vw, 64px) var(--lx-gutter) clamp(40px, 6vw, 80px); font: 400 clamp(1.2rem, 1.1rem + .3vw, 1.34rem)/1.68 var(--lx-serif); }
.lx-prose--page { padding-top: 64px; }
.lx-prose > :first-child { margin-top: 0; }
.lx-prose p, .lx-prose ul, .lx-prose ol { margin: 0 0 1.15em; }
.lx-prose h2 { margin: 1.9em 0 .55em; font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 800; font-stretch: 106%; line-height: 1.08; letter-spacing: -.012em; }
.lx-prose h3 { margin: 1.6em 0 .45em; font-size: clamp(1.3rem, 2vw, 1.6rem); font-weight: 750; line-height: 1.15; }
.lx-prose a { color: var(--lx-deep); text-decoration-thickness: 2px; text-underline-offset: 3px; }
.lx-prose li { margin-bottom: .4em; }
.lx-prose li::marker { color: var(--lx-deep); font-weight: 700; }
.lx-prose strong { font-weight: 650; }
.lx-prose img { margin: 1.6em 0; }
.lx-prose hr { height: 16px; margin: 2.4em 0; border: 0; background: var(--lx-deep); clip-path: polygon(0 100%, 8% 30%, 15% 70%, 27% 0, 38% 80%, 49% 25%, 62% 75%, 74% 10%, 87% 70%, 100% 100%, 100% 100%); }
.lx-prose blockquote { margin: 1.8em 0; padding: .1em 0 .1em clamp(18px, 3vw, 32px); border-left: 8px solid var(--lx-tint); font-size: 1.28em; font-style: italic; line-height: 1.34; }
.lx-prose blockquote p:last-child { margin-bottom: 0; }
.lx-prose .lx-pullquote { position: relative; margin: 2.2em calc(-1 * min(var(--lx-gutter), 48px)); padding: clamp(28px, 4vw, 44px) clamp(20px, 4vw, 48px) clamp(24px, 3.5vw, 36px); background: var(--lx-night); color: #fff; }
.lx-prose .lx-pullquote::before { content: "\\201C"; position: absolute; top: -.28em; left: clamp(12px, 3vw, 36px); color: var(--lx-tint); font: 900 clamp(5rem, 9vw, 7.5rem)/1 var(--lx-display); }
.lx-prose .lx-pullquote blockquote { margin: 0; padding: 0; border: 0; font: 800 clamp(1.45rem, 1.1rem + 1.4vw, 2.15rem)/1.16 var(--lx-display); font-stretch: 104%; font-style: normal; letter-spacing: -.01em; text-wrap: balance; }
.lx-prose .lx-pullquote blockquote p { margin: 0; }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) .lx-prose .lx-pullquote { background: var(--lx-night-2); } }
.lx-prose .lx-pullquote figcaption { margin-top: 14px; color: var(--lx-tint); font: 700 .62em/1.3 var(--lx-display); letter-spacing: .08em; text-transform: uppercase; }
.lx-prose .lx-case { margin: 2em 0; padding: 22px clamp(18px, 3vw, 28px) 18px; border: 2px solid var(--lx-text); border-top-width: 8px; border-top-color: var(--lx-tint); background: var(--lx-snow); font-size: .88em; line-height: 1.58; }
.lx-prose .lx-case p { margin: 0 0 .8em; }
.lx-prose .lx-case__tag { display: inline-block; margin-bottom: 12px !important; padding: 4px 10px; background: var(--lx-text); color: var(--lx-bg); font: 700 .74em/1.3 var(--lx-display); letter-spacing: .06em; text-transform: uppercase; }
.lx-prose .lx-case__title { font: 800 1.22em/1.2 var(--lx-display); }
.lx-prose .lx-case__src { margin: 0 !important; color: var(--lx-muted); font: 500 .8em/1.4 var(--lx-display); }
.lx-prose .lx-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px; margin: 2em 0 .6em; background: var(--lx-text); border: 2px solid var(--lx-text); }
.lx-prose .lx-stats > div { padding: 20px 22px; background: var(--lx-bg); }
.lx-prose .lx-stats strong { display: block; color: var(--lx-deep); font: 900 clamp(2.6rem, 6vw, 3.6rem)/1 var(--lx-display); letter-spacing: -.02em; }
.lx-prose .lx-stats span { display: block; margin-top: 8px; font: 500 .74em/1.4 var(--lx-display); }
.lx-prose .lx-chart { margin: 2.2em 0; padding: clamp(18px, 3vw, 28px); border: 2px solid var(--lx-text); background: var(--lx-snow); font-family: var(--lx-display); }
.lx-prose .lx-chart__title { margin: 0 0 4px !important; font: 800 1.02em/1.25 var(--lx-display); }
.lx-prose .lx-chart__sub { margin: 0 0 18px !important; color: var(--lx-muted); font: 500 .72em/1.4 var(--lx-display); }
.lx-prose .lx-chart__legend { display: flex; flex-wrap: wrap; gap: 6px 16px; margin: -6px 0 16px; padding: 0; list-style: none; font: 600 .7em/1.3 var(--lx-display); }
.lx-prose .lx-chart__legend li { display: flex; align-items: center; gap: 6px; margin: 0; }
.lx-prose .lx-chart__legend i { width: 12px; height: 12px; border-radius: 3px; background: var(--lx-line); }
.lx-prose .lx-chart__legend i.is-hi { background: var(--lx-deep); }
.lx-prose .lx-chart__cols { position: relative; display: grid; grid-template-columns: repeat(var(--n), minmax(0, 1fr)); align-items: end; gap: 2px clamp(2px, .8vw, 8px); height: clamp(190px, 32vw, 260px); padding-top: 26px; border-bottom: 1px solid var(--lx-text); background: repeating-linear-gradient(to top, transparent 0 calc(25% - 1px), color-mix(in srgb, var(--lx-line) 70%, transparent) calc(25% - 1px) 25%); }
.lx-prose .lx-chart__col { position: relative; display: flex; flex-direction: column; justify-content: flex-end; height: 100%; }
.lx-prose .lx-chart__bar { height: calc(var(--v) * 100%); min-height: 2px; border-radius: 4px 4px 0 0; background: var(--lx-line); transition: filter .15s; }
.lx-prose .lx-chart__col.is-hi .lx-chart__bar { background: var(--lx-deep); }
.lx-prose .lx-chart__col.is-part .lx-chart__bar { background: repeating-linear-gradient(135deg, var(--lx-deep) 0 6px, color-mix(in srgb, var(--lx-deep) 55%, transparent) 6px 9px); }
.lx-prose .lx-chart__val { position: absolute; bottom: calc(var(--v) * 100% + 4px); left: 50%; transform: translateX(-50%); white-space: nowrap; font: 800 .66em/1 var(--lx-display); font-variant-numeric: tabular-nums; }
.lx-prose .lx-chart__col:not(.is-lab) .lx-chart__val { display: none; }
.lx-prose .lx-chart__col:hover .lx-chart__bar { filter: brightness(1.15) saturate(1.2); }
.lx-prose .lx-chart__col:hover .lx-chart__val { display: block; z-index: 2; padding: 3px 6px; border-radius: 4px; background: var(--lx-text); color: var(--lx-bg); }
.lx-prose .lx-chart__axis { display: grid; grid-template-columns: repeat(var(--n), minmax(0, 1fr)); gap: 0 clamp(2px, .8vw, 8px); margin-top: 6px; color: var(--lx-muted); font: 600 .62em/1.2 var(--lx-display); text-align: center; }
.lx-prose .lx-chart__axis span { white-space: nowrap; }
.lx-prose .lx-chart__rows { display: grid; gap: 14px; margin: 0; }
.lx-prose .lx-chart__row { display: grid; grid-template-columns: minmax(84px, 130px) 1fr; align-items: center; gap: 4px 12px; font: 600 .74em/1.2 var(--lx-display); }
.lx-prose .lx-chart__row > span { grid-row: span 2; }
.lx-prose .lx-chart__hb { display: flex; white-space: nowrap; align-items: center; gap: 8px; font: 700 .9em/1 var(--lx-display); font-variant-numeric: tabular-nums; }
.lx-prose .lx-chart__hb i { display: block; width: calc(var(--v) * 82%); min-width: 2px; height: 12px; border-radius: 0 4px 4px 0; background: var(--lx-line); }
.lx-prose .lx-chart__hb.is-hi i { height: 16px; background: var(--lx-deep); }
.lx-prose .lx-chart__hb em { color: var(--lx-muted); font-style: normal; font-weight: 600; }
.lx-prose .lx-chart .lx-case__src { margin-top: 14px !important; }
.lx-prose .lx-chart details { margin-top: 10px; font: 500 .7em/1.4 var(--lx-display); }
.lx-prose .lx-chart summary { cursor: pointer; color: var(--lx-muted); }
.lx-prose .lx-chart table { margin: 8px 0 0; font-size: 1em; }
.lx-prose .lx-chart th, .lx-prose .lx-chart td { padding: 4px 8px; }
@media (max-width: 560px) { .lx-prose .lx-chart__axis span.is-minor { visibility: hidden; } .lx-prose .lx-chart__val { font-size: .56em; } .lx-prose .lx-chart__hb i { width: calc(var(--v) * 66%); } }
.lx-prose .lx-stats + .lx-case__src { margin-bottom: 1.4em !important; }
.lx-prose code { padding: .1em .3em; background: color-mix(in srgb, var(--lx-tint) 22%, transparent); font-size: .84em; font-family: ui-monospace, "SF Mono", Menlo, monospace; }
.lx-prose pre { margin: 1.7em calc(-1 * min(var(--lx-gutter), 32px)); padding: 22px 26px; overflow-x: auto; background: var(--lx-code); color: var(--lx-glacier); font-size: .82em; line-height: 1.6; }
.lx-prose pre code { padding: 0; background: none; font-size: inherit; }
.lx-prose table { width: 100%; margin: 0 0 1.4em; border-collapse: collapse; font-size: .9em; }
.lx-prose th, .lx-prose td { padding: 10px 12px; border-bottom: 1px solid var(--lx-line); text-align: left; }
.lx-tags { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; max-width: calc(68ch + 2 * var(--lx-gutter)); margin: 0 auto; padding: 0 var(--lx-gutter) 32px; }
.lx-tags li { padding: 3px 12px 4px; border: 2px solid var(--lx-deep); color: var(--lx-deep); font-weight: 600; font-size: .95rem; }
.lx-related { max-width: 1320px; margin: 0 auto; padding: clamp(32px, 5vw, 64px) var(--lx-gutter) 96px; }
.lx-related h2 { font-size: clamp(1.8rem, 3.4vw, 3rem); font-weight: 800; font-stretch: 110%; margin-bottom: 24px; }
.lx-related__list { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0 32px; }
.lx-related__list a { display: block; padding: 16px 0 22px; border-top: 4px solid var(--lx-tint); text-decoration: none; font-size: 1.35rem; font-weight: 750; line-height: 1.14; }
.lx-related__list a:hover { color: var(--lx-deep); }
.lx-related__list small { display: block; margin-bottom: 6px; font-size: .95rem; font-weight: 400; color: var(--lx-muted); }

/* Video card (weekly review): a thumbnail that links to YouTube, no embed
   (no third-party player or cookies until the reader clicks). */
.lx-prose .lx-video { display: grid; grid-template-columns: minmax(0, 248px) minmax(0, 1fr); gap: 16px 22px; align-items: start; margin: 1.8em 0; padding: 16px; border: 2px solid var(--lx-line); background: var(--lx-snow); font: 500 .8em/1.5 var(--lx-display); }
.lx-prose .lx-video__thumb { position: relative; display: block; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 4px; background: var(--lx-night); }
.lx-prose .lx-video__thumb img { width: 100%; height: 100%; margin: 0; object-fit: cover; transition: transform .35s cubic-bezier(.2, .7, .2, 1); }
.lx-prose .lx-video__thumb:hover img { transform: scale(1.05); }
.lx-prose .lx-video__thumb::after { content: ""; position: absolute; left: 50%; top: 50%; width: 56px; height: 40px; margin: -20px 0 0 -28px; border-radius: 10px; background: rgba(16, 22, 63, .84) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M8 5v14l11-7z'/%3E%3C/svg%3E") center / 20px no-repeat; transition: background-color .2s; }
.lx-prose .lx-video__thumb:hover::after { background-color: var(--lx-deep); }
.lx-prose .lx-video p { margin: 0 0 .6em; }
.lx-prose .lx-video p:last-child { margin-bottom: 0; }
.lx-prose .lx-video .lx-video__meta { margin-bottom: 4px; color: var(--lx-muted); font: 700 .78em/1.3 var(--lx-display); letter-spacing: .06em; text-transform: uppercase; }
.lx-prose .lx-video .lx-video__title { margin-bottom: 8px; font: 800 1.12em/1.25 var(--lx-display); }
.lx-prose .lx-video__title a { color: inherit; text-decoration: none; }
.lx-prose .lx-video__title a:hover { color: var(--lx-deep); text-decoration: underline; }
@media (max-width: 600px) { .lx-prose .lx-video { grid-template-columns: minmax(0, 1fr); } }

/* "En bref": key points at the top of a long post */
.lx-prose .lx-brief { margin: 0 0 2.4em; padding: 22px clamp(18px, 3vw, 30px) 20px; border-left: 8px solid var(--lx-tint); background: color-mix(in srgb, var(--lx-tint) 13%, var(--lx-snow)); font: 500 .8em/1.48 var(--lx-display); }
.lx-prose .lx-brief__tag { display: inline-block; margin: 0 0 14px; padding: 4px 10px 5px; background: var(--lx-tint); color: var(--lx-night); font: 800 .74em/1.1 var(--lx-display); letter-spacing: .1em; text-transform: uppercase; }
.lx-prose .lx-brief ul { display: grid; gap: 11px; margin: 0; padding: 0; list-style: none; }
.lx-prose .lx-brief li { position: relative; margin: 0; padding-left: 26px; }
.lx-prose .lx-brief li::before { content: ""; position: absolute; left: 0; top: .34em; width: 15px; height: 11px; background: var(--lx-deep); clip-path: polygon(0 100%, 34% 22%, 52% 56%, 74% 0, 100% 100%); }
.lx-prose .lx-brief strong { font-weight: 800; }

/* Table of contents ("toc" field). Without JS: an open list above the text.
   With JS (.is-live): a sticky bar showing the current section on narrow
   screens, a sticky rail in the left margin on wide ones. */
html:has(.lx-toc) { scroll-padding-top: 132px; }
.lx-body--toc { position: relative; }
.lx-toc { --lx-toc-top: 0px; position: relative; z-index: 25; max-width: calc(68ch + 2 * var(--lx-gutter)); margin: clamp(24px, 4vw, 40px) auto 0; padding: 0 var(--lx-gutter); font-family: var(--lx-display); }
.lx-toc__box { border: 2px solid var(--lx-line); background: var(--lx-bg); }
.lx-toc__bar { position: relative; display: flex; align-items: center; gap: 12px; min-height: 52px; padding: 0 16px; cursor: pointer; list-style: none; user-select: none; }
.lx-toc__bar::-webkit-details-marker { display: none; }
.lx-toc__title { flex: none; color: var(--lx-deep); font: 800 .78rem/1 var(--lx-display); letter-spacing: .12em; text-transform: uppercase; }
.lx-toc__now { flex: 1; min-width: 0; overflow: hidden; color: var(--lx-text); font: 650 .98rem/1.2 var(--lx-display); white-space: nowrap; text-overflow: ellipsis; }
.lx-toc__chev { flex: none; width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: transform .25s; }
.lx-toc__box[open] .lx-toc__chev { transform: rotate(180deg); }
.lx-toc__progress { position: absolute; inset: auto auto -2px 0; width: calc(var(--lx-p, 0) * 100%); height: 3px; background: var(--lx-tint); }
.lx-toc__list { margin: 0; padding: 4px 8px 12px; list-style: none; }
.lx-toc__list li { margin: 0; }
.lx-toc__list a { display: flex; gap: 12px; padding: 9px 8px; border-radius: 4px; color: var(--lx-muted); font: 600 1rem/1.3 var(--lx-display); text-decoration: none; }
.lx-toc__list a:hover { color: var(--lx-text); background: color-mix(in srgb, var(--lx-tint) 12%, transparent); }
.lx-toc__list a[aria-current="true"] { color: var(--lx-text); }
.lx-toc__list a[aria-current="true"] .lx-toc__num { color: var(--lx-night); background: var(--lx-tint); }
.lx-toc__list .is-sub a { padding-left: 50px; font-size: .92rem; font-weight: 500; }
.lx-toc__num { flex: none; display: inline-grid; place-items: center; width: 30px; height: 22px; border-radius: 3px; color: var(--lx-deep); background: color-mix(in srgb, var(--lx-tint) 16%, transparent); font: 800 .76rem/1 var(--lx-display); font-variant-numeric: tabular-nums; transition: background .2s, color .2s; }

/* Narrow screens, JS on: sticky bar, the list drops down over the text. */
@media (max-width: 1199px) {
  .lx-toc.is-live { position: sticky; top: var(--lx-toc-top); margin-top: 0; padding: 0; max-width: none; transition: top .35s cubic-bezier(.2, .7, .2, 1); }
  body:has(.lx-header:not(.is-hidden)) .lx-toc.is-live { --lx-toc-top: 68px; }
  .lx-toc.is-live .lx-toc__box { border-width: 0 0 1px; background: color-mix(in srgb, var(--lx-bg) 94%, transparent); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
  .lx-toc.is-live .lx-toc__bar { max-width: calc(68ch + 2 * var(--lx-gutter)); margin: 0 auto; padding: 0 var(--lx-gutter); }
  .lx-toc.is-live .lx-toc__progress { left: 0; }
  .lx-toc.is-live .lx-toc__list { position: absolute; top: 100%; left: 50%; width: min(100%, calc(68ch + 2 * var(--lx-gutter))); max-height: calc(100svh - var(--lx-toc-top) - 120px); overflow-y: auto; overscroll-behavior: contain; transform: translateX(-50%); padding: 8px var(--lx-gutter) 16px; background: var(--lx-bg); border-bottom: 1px solid var(--lx-line); box-shadow: 0 24px 40px -18px rgba(16, 22, 63, .45); }
  .lx-toc:not(.is-live) .lx-toc__progress { display: none; }
}
@media (prefers-reduced-motion: reduce) { .lx-toc.is-live { transition: none; } }

/* Wide screens: the text on the left, aligned with the title; the contents
   stay open in a sticky column on the right, the rail fills as you read. */
@media (min-width: 1200px) {
  .lx-body--toc { display: grid; grid-template-columns: minmax(0, 1fr) minmax(220px, 272px); column-gap: clamp(40px, 4vw, 72px); max-width: 1320px; margin: 0 auto; padding: 0 var(--lx-gutter); }
  .lx-body--toc > .lx-prose { grid-column: 1; grid-row: 1; max-width: 68ch; margin: 0; padding-left: 0; padding-right: 0; }
  .lx-toc { grid-column: 2; grid-row: 1; align-self: start; position: sticky; top: calc(var(--lx-toc-top) + 28px); max-width: none; max-height: calc(100vh - var(--lx-toc-top) - 110px); margin: clamp(32px, 5vw, 64px) 0 0; padding: 0; overflow-y: auto; transition: top .35s cubic-bezier(.2, .7, .2, 1); }
  body:has(.lx-header:not(.is-hidden)) .lx-toc { --lx-toc-top: 68px; }
  .lx-toc__box { border: 0; background: none; }
  .lx-toc__bar { min-height: 0; padding: 0 0 14px 2px; cursor: default; pointer-events: none; }
  .lx-toc__now, .lx-toc__chev, .lx-toc__progress { display: none; }
  .lx-toc__list { position: relative; padding: 0; border-left: 2px solid var(--lx-line); }
  .lx-toc__list::before { content: ""; position: absolute; left: -2px; top: 0; width: 2px; height: calc(var(--lx-p, 0) * 100%); background: color-mix(in srgb, var(--lx-tint) 60%, transparent); }
  .lx-toc__list a { position: relative; margin-left: -2px; padding: 8px 6px 8px 14px; border-left: 2px solid transparent; border-radius: 0 4px 4px 0; font-size: .9rem; }
  .lx-toc__list a[aria-current="true"] { border-left-color: var(--lx-tint); }
  .lx-toc__list .is-sub a { padding-left: 56px; font-size: .84rem; }
  .lx-toc__num { width: 28px; height: 20px; font-size: .7rem; }
}

/* The reading climb */
.lx-climb { position: fixed; inset: auto 0 0; z-index: 20; height: 60px; pointer-events: none; }
.lx-climb svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.lx-climb path { fill: none; vector-effect: non-scaling-stroke; }
.lx-climb__base { stroke: var(--lx-muted); stroke-width: 1; opacity: .4; }
.lx-climb__done { stroke: var(--lx-tint); stroke-width: 3; }
.lx-climb__dot { position: absolute; left: 0; top: 0; width: 15px; height: 15px; margin: -7.5px 0 0 -7.5px; border-radius: 50%; background: var(--lx-tint); border: 3px solid var(--lx-night); }

/* 404 */
.lx-lost { position: relative; display: grid; place-items: center; min-height: calc(100svh - 68px); overflow: hidden; background: var(--lx-night); color: var(--lx-glacier); text-align: center; }
.lx-lost__art { position: absolute; inset: 0; color: #5a48d8; }
.lx-lost__copy { position: relative; padding: 32px var(--lx-gutter); }
.lx-lost__code { margin: 0; font-size: clamp(7rem, 30vw, 24rem); font-weight: 900; font-stretch: 125%; line-height: .8; letter-spacing: -.04em; color: #ff6b3d; }
.lx-lost h1 { margin-top: 18px; font-size: clamp(2rem, 5vw, 4rem); font-weight: 800; font-stretch: 112%; }
.lx-lost p:not(.lx-lost__code) { font: italic 1.35rem/1.4 var(--lx-serif); }
.lx-button { display: inline-block; margin-top: 8px; padding: 13px 22px 14px; background: #ff6b3d; color: var(--lx-night) !important; font-weight: 800; text-decoration: none; }
.lx-button:hover { background: var(--lx-glacier); }

/* Footer */
.lx-footer { position: relative; background: var(--lx-night); color: var(--lx-glacier); margin-top: 90px; }
.lx-footer__ridge { position: absolute; inset: auto 0 calc(100% - 1px); width: 100%; height: 90px; }
.lx-footer__ridge path { fill: var(--lx-night); }
.lx-footer__body { display: grid; grid-template-columns: 1fr auto; gap: 18px 40px; align-items: end; max-width: 1320px; margin: 0 auto; padding: 24px var(--lx-gutter) 90px; }
.lx-footer__name { grid-column: 1 / -1; margin: 0; font-size: clamp(2.6rem, 9vw, 8rem); font-weight: 900; font-stretch: 125%; line-height: .9; letter-spacing: -.03em; }
.lx-footer nav ul { display: flex; flex-wrap: wrap; gap: 8px 24px; list-style: none; margin: 0; padding: 0; }
.lx-footer__note { margin: 0; color: #a7afd6; font-size: .95rem; }

@media (prefers-reduced-motion: reduce) {
  .lx *, .lx *::before, .lx *::after { transition: none !important; animation: none !important; }
}

main:has(.lx-lost) + .lx-footer { margin-top: 0; }
main:has(.lx-lost) + .lx-footer .lx-footer__ridge { display: none; }

/* Qui suis-je: the career as a climb, a pin per stage */
.lx-article--about .lx-prose > p:first-child { font-size: 1.28em; line-height: 1.42; font-weight: 500; }
.lx-article--about .lx-prose h3 { position: relative; margin: 0; padding: 26px 0 4px 34px; border-left: 3px solid #ff6b3d; font-size: clamp(1.45rem, 2.6vw, 2.1rem); font-weight: 800; font-stretch: 108%; }
.lx-article--about .lx-prose h3::before { content: ""; position: absolute; left: -12px; top: 34px; width: 21px; height: 21px; border-radius: 50%; border: 5px solid var(--lx-bg); background: #ff6b3d; }
.lx-article--about .lx-prose h3 + p { margin: 0; padding: 0 0 12px 34px; border-left: 3px solid #ff6b3d; }
.lx-article--about .lx-prose h3 + p + p:has(> img) { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin: 0; padding: 4px 0 16px 34px; border-left: 3px solid #ff6b3d; }
.lx-article--about .lx-prose h3 + p + p:has(> img) img { box-sizing: border-box; width: auto; max-width: 100%; height: 52px; margin: 0; padding: 7px 11px; border-radius: 8px; background: #fff; box-shadow: 0 1px 3px rgba(16, 22, 63, .18); object-fit: contain; }

/* Page transition: same-origin navigations only. Browsers without support
   simply load the page. */
@media (prefers-reduced-motion: no-preference) {
  @view-transition { navigation: auto; }
  .lx-header { view-transition-name: lx-header; }
  .lx-band--article { view-transition-name: lx-art; }
  .lx-band--article h1 { view-transition-name: lx-title; }
  ::view-transition-group(lx-header) { z-index: 5; }
  ::view-transition-group(lx-art), ::view-transition-group(lx-title) { animation-duration: .6s; animation-timing-function: cubic-bezier(.65, 0, .2, 1); }
  ::view-transition-group(lx-art) { overflow: clip; }
  ::view-transition-old(lx-art), ::view-transition-new(lx-art) { width: 100%; height: 100%; object-fit: cover; animation-duration: .6s; }
  ::view-transition-image-pair(lx-title) { isolation: auto; }
  ::view-transition-old(lx-title), ::view-transition-new(lx-title) { width: auto; height: 100%; object-fit: contain; object-position: left top; mix-blend-mode: normal; }
  ::view-transition-old(lx-title) { animation: lx-out .14s ease both; }
  ::view-transition-new(lx-title) { animation: lx-fade .3s .34s ease both; }
  ::view-transition-old(root) { animation: lx-out .3s ease both; }
  ::view-transition-new(root) { animation: lx-in .45s .12s ease both; }
  @keyframes lx-out { to { opacity: 0; } }
  @keyframes lx-fade { from { opacity: 0; } }
  @keyframes lx-in { from { opacity: 0; transform: translateY(24px); } }
}
`, ue = `// Leaux Altitude runtime, uploaded as theme-assets/leaux-altitude-menu.js.
// Menus, burger, the hero ridgelines, the trail, the reading climb and
// related posts. Every part fails silently: the static page stays usable.
(function () {
  "use strict";
  var meta = document.querySelector('meta[name="x-cms-base"]');
  var BASE = (meta && meta.getAttribute("content")) || "/";
  if (BASE.charAt(BASE.length - 1) !== "/") BASE += "/";
  function withBase(url) {
    if (!url || BASE === "/" || /^([a-z][a-z0-9+.-]*:|\\/\\/|#)/i.test(url) || url.indexOf(BASE) === 0) return url;
    return BASE + url.replace(/^\\//, "");
  }
  var here = location.pathname.replace(/\\/$/, "/index.html");
  var lang = document.documentElement.lang;
  var calm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var data = function (path) {
    return fetch(withBase(path), { credentials: "omit" }).then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    });
  };

  /* Menus */
  function render(items) {
    var ul = document.createElement("ul");
    items.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = withBase(item.href);
      a.textContent = (item.labels && item.labels[lang]) || item.label;
      if (a.pathname === here && !a.hash) a.setAttribute("aria-current", "page");
      li.appendChild(a);
      if (item.children && item.children.length) li.appendChild(render(item.children));
      ul.appendChild(li);
    });
    return ul;
  }
  function fill(menu) {
    ["header", "footer"].forEach(function (slot) {
      var host = document.querySelector('[data-cms-menu="' + slot + '"]');
      if (!host || !Array.isArray(menu[slot])) return;
      var old = host.querySelector("ul");
      var next = render(menu[slot]);
      if (old) host.replaceChild(next, old);
      else host.appendChild(next);
    });
  }
  function wireBurger() {
    var button = document.querySelector("[data-lx-burger]");
    var nav = document.getElementById("lx-nav");
    if (!button || !nav) return;
    function set(open) {
      button.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      document.documentElement.style.overflow = open ? "hidden" : "";
    }
    button.addEventListener("click", function () { set(button.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
  }

  /* Hero ridgelines: one terrain drawn line by line, far to near. The far
     lines go on the back canvas, the near ones on the front canvas, so the
     mountains pass in front of the title. */
  function noiseMaker() {
    var size = 256, table = new Float32Array(size * size), i, seed = 20261031;
    for (i = 0; i < table.length; i++) {
      seed = (seed * 1664525 + 1013904223) | 0;
      table[i] = (seed >>> 8) / 16777216;
    }
    function at(x, y) { return table[((y & 255) << 8) | (x & 255)]; }
    return function (x, y) {
      var xi = Math.floor(x), yi = Math.floor(y), u = x - xi, v = y - yi;
      u = u * u * (3 - 2 * u); v = v * v * (3 - 2 * v);
      var a = at(xi, yi), b = at(xi + 1, yi), c = at(xi, yi + 1), d = at(xi + 1, yi + 1);
      return (a + (b - a) * u) * (1 - v) + (c + (d - c) * u) * v;
    };
  }
  function ridgelines(hero) {
    var back = hero.querySelector("[data-lx-back]");
    var front = hero.querySelector("[data-lx-front]");
    if (!back || !front || !back.getContext) return;
    var bctx = back.getContext("2d"), fctx = front.getContext("2d");
    if (!bctx || !fctx) return;
    var noise = noiseMaker();
    var W = 0, H = 0, horizon = .56, lines = 44, cut = 24, samples = 150;
    var far = [91, 61, 245], mid = [214, 76, 170], near = [255, 107, 61];
    var pointer = { x: -9, y: -9, sx: -9, sy: -9 };
    var start = performance.now(), visible = true, raf = 0;

    function size() {
      var ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      W = hero.clientWidth; H = hero.clientHeight;
      [back, front].forEach(function (c) { c.width = W * ratio; c.height = H * ratio; });
      bctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      fctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      // The ridges start just above the foot of the title, wherever it sits.
      var name = hero.querySelector(".lx-hero__name");
      if (name && H) horizon = Math.min(.7, Math.max(.3, (name.getBoundingClientRect().bottom - hero.getBoundingClientRect().top) / H - .03));
    }
    function ridged(x, z) {
      var n = noise(x, z);
      n = 1 - Math.abs(2 * n - 1);
      return n * n;
    }
    function height(x, z) {
      return ridged(x * 1.5 + 7, z * 1.1) * .62 + ridged(x * 3.6 + 2, z * 2.3) * .28 + noise(x * 9, z * 6) * .1;
    }
    function color(d, alpha) {
      var a = d < .55 ? far : mid, b = d < .55 ? mid : near, t = d < .55 ? d / .55 : (d - .55) / .45;
      return "rgba(" + Math.round(a[0] + (b[0] - a[0]) * t) + "," + Math.round(a[1] + (b[1] - a[1]) * t) + "," + Math.round(a[2] + (b[2] - a[2]) * t) + "," + alpha + ")";
    }
    function fillFor(d) {
      var k = Math.pow(d, 2.4);
      return "rgb(" + Math.round(16 + 92 * k) + "," + Math.round(22 + 14 * k) + "," + Math.round(63 + 66 * k) + ")";
    }
    function draw(now) {
      var t = (now - start) / 1000;
      var rise = calm ? 1 : Math.min(1, t / 1.8);
      rise = 1 - Math.pow(1 - rise, 3);
      var travel = (calm ? 0 : t * .05) + (window.scrollY || 0) * .0009;
      pointer.sx += (pointer.x - pointer.sx) * .08;
      pointer.sy += (pointer.y - pointer.sy) * .08;
      bctx.clearRect(0, 0, W, H);
      fctx.clearRect(0, 0, W, H);
      var i, s;
      for (i = 0; i < lines; i++) {
        var ctx = i < cut ? bctx : fctx;
        var d = i / (lines - 1);
        var base = H * (horizon + (1.1 - horizon) * Math.pow(d, 1.25));
        var amp = H * (.1 + .34 * d) * rise;
        var z = d * 2.6 - travel;
        ctx.beginPath();
        ctx.moveTo(-2, H + 2);
        for (s = 0; s <= samples; s++) {
          var u = s / samples, x = (u - .5) * (1 + d * .7);
          var edge = .55 + .45 * Math.sin(Math.PI * u);
          var dx = u - pointer.sx, dy = d - pointer.sy;
          var bump = Math.exp(-(dx * dx * 40 + dy * dy * 14)) * .22;
          ctx.lineTo(u * (W + 4) - 2, base - amp * (height(x * 2.4 + 5, z) * edge + bump));
        }
        ctx.lineTo(W + 2, H + 2);
        ctx.closePath();
        ctx.fillStyle = fillFor(d);
        ctx.fill();
        ctx.lineWidth = .7 + d * 1.1;
        ctx.strokeStyle = color(d, .4 + d * .6);
        ctx.stroke();
      }
    }
    function loop(now) {
      raf = 0;
      if (!visible) return;
      draw(now);
      if (!document.hidden) raf = requestAnimationFrame(loop);
    }
    function kick() { if (!raf && visible) raf = requestAnimationFrame(loop); }
    size();
    hero.classList.add("is-live");
    if (calm) {
      start = performance.now() - 4000;
      draw(performance.now());
      var still = function () { size(); draw(performance.now()); };
      window.addEventListener("resize", still);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(still);
      return;
    }
    window.addEventListener("resize", size);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(size);
    hero.addEventListener("pointermove", function (e) {
      var box = hero.getBoundingClientRect();
      pointer.x = (e.clientX - box.left) / box.width;
      pointer.y = Math.pow(Math.max(0, ((e.clientY - box.top) / box.height - horizon) / (1.1 - horizon)), 1 / 1.25);
    });
    hero.addEventListener("pointerleave", function () { pointer.x = pointer.y = -9; });
    document.addEventListener("visibilitychange", kick);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; kick(); }).observe(hero);
    }
    kick();
  }

  /* The trail between the pins, drawn as the reader scrolls down. */
  function trail(host) {
    var pins = host.querySelectorAll(".lx-way__pin");
    if (pins.length < 2) return;
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    var path = document.createElementNS(ns, "path");
    svg.setAttribute("class", "lx-trail__path");
    svg.setAttribute("aria-hidden", "true");
    svg.appendChild(path);
    host.insertBefore(svg, host.firstChild);
    var length = 0, reached = 0;
    function layout() {
      var box = host.getBoundingClientRect(), d = "", last = null;
      for (var i = 0; i < pins.length; i++) {
        var p = pins[i].getBoundingClientRect();
        var x = p.left + p.width / 2 - box.left, y = p.top + p.height / 2 - box.top;
        if (!last) d = "M" + x + " " + y;
        else {
          // An S between two stages, roughened like a recorded GPS track.
          var wide = Math.abs(x - last.x) > 80;
          for (var k = 1; k <= 40; k++) {
            var t = k / 40, e = t * t * (3 - 2 * t), hump = Math.sin(Math.PI * t);
            var px = last.x + (x - last.x) * e + hump * (wide ? 0 : (i % 2 ? 16 : -16));
            var py = last.y + (y - last.y) * t;
            px += hump * (Math.sin(t * 19 + i * 2) * 7 + Math.sin(t * 47 + i * 5) * 3);
            py += hump * Math.sin(t * 31 + i) * (wide ? 6 : 2);
            d += "L" + px.toFixed(1) + " " + py.toFixed(1);
          }
        }
        last = { x: x, y: y };
      }
      path.setAttribute("d", d);
      length = path.getTotalLength();
      path.style.strokeDasharray = length + " " + length;
      update();
    }
    function update() {
      var box = host.getBoundingClientRect();
      var done = calm ? 1 : Math.min(1, Math.max(0, (innerHeight * .72 - box.top) / box.height));
      reached = Math.max(reached, done);
      path.style.strokeDashoffset = String(length * (1 - reached));
    }
    window.addEventListener("resize", layout);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("load", layout);
    layout();
  }

  /* The reading climb: a dot walks the post's elevation profile. */
  function climb(host) {
    var prose = document.querySelector("[data-lx-prose]");
    var done = host.querySelector(".lx-climb__done");
    var dot = host.querySelector(".lx-climb__dot");
    if (!prose || !done || !dot) return;
    host.hidden = false;
    var length = done.getTotalLength();
    done.style.strokeDasharray = length + " " + length;
    function update() {
      var box = prose.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, (innerHeight - box.top - 120) / (box.height)));
      done.style.strokeDashoffset = String(length * (1 - p));
      var at = done.getPointAtLength(length * p);
      dot.style.transform = "translate(" + (at.x / 1600) * host.clientWidth + "px," + at.y + "px)";
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* Related posts: same section first, then the newest. */
  function related(host) {
    var list = host.querySelector(".lx-related__list");
    data("/data/posts.json").then(function (res) {
      var current = host.getAttribute("data-current"), term = host.getAttribute("data-term");
      var posts = (res.posts || []).filter(function (p) { return p.type === "post" && p.id !== current; });
      var picks = posts.filter(function (p) { return term && p.primaryTermId === term; }).concat(posts.filter(function (p) { return !term || p.primaryTermId !== term; })).slice(0, 3);
      if (!picks.length) return;
      picks.forEach(function (p) {
        var a = document.createElement("a");
        a.href = withBase("/" + p.url);
        var small = document.createElement("small");
        small.textContent = (p.category && p.category.name) || p.dateLabel || "";
        a.appendChild(small);
        a.appendChild(document.createTextNode(p.title));
        list.appendChild(a);
      });
      host.hidden = false;
    }).catch(function () {});
  }

  /* Section pages and photo headers: the map (or photo) drifts slower than the page and the title sinks
     behind the ridge edge, as if they sat at different depths. */
  function parallax(band) {
    var art = band.querySelector(".lx-band__art");
    var inner = band.querySelector(".lx-band__inner");
    if (!art || !inner) return;
    var queued = false;
    function apply() {
      queued = false;
      var box = band.getBoundingClientRect();
      var top = band.offsetTop;
      var moved = Math.max(0, (window.scrollY || 0) - top + 68);
      if (box.bottom < 0) return;
      art.style.transform = "translate3d(0," + (moved * .42).toFixed(1) + "px,0) scale(" + (1 + moved * .00022).toFixed(4) + ")";
      inner.style.transform = "translate3d(0," + (moved * .2).toFixed(1) + "px,0)";
      inner.style.opacity = String(Math.max(0, 1 - moved / (box.height * .95)).toFixed(3));
    }
    function queue() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(apply);
    }
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    apply();
  }

  /* Header: slides away when reading down, comes back as soon as the
     reader scrolls up (headroom pattern). Stays put near the top of the
     page, while the mobile menu is open and while it holds keyboard focus. */
  function autoHide(header) {
    var nav = document.getElementById("lx-nav");
    var last = Math.max(0, window.scrollY || 0);
    var hidden = false, queued = false;
    function set(next) {
      if (next === hidden) return;
      hidden = next;
      header.classList.toggle("is-hidden", next);
    }
    function apply() {
      queued = false;
      var y = Math.max(0, window.scrollY || 0);
      var delta = y - last;
      var pinned = (nav && nav.classList.contains("is-open")) || header.querySelector(":focus-visible");
      if (pinned || y < 100) {
        set(false);
        last = y;
        return;
      }
      if (delta > 12) { set(true); last = y; }
      else if (delta < -8) { set(false); last = y; }
    }
    window.addEventListener("scroll", function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(apply);
    }, { passive: true });
    header.addEventListener("focusin", function () { set(false); });
  }

  /* Table of contents: highlights the section being read and, on narrow
     screens, becomes a sticky bar that shows it and opens on tap. */
  function toc(nav) {
    var box = nav.querySelector("details");
    var now = nav.querySelector("[data-lx-toc-now]");
    var links = nav.querySelectorAll(".lx-toc__list a");
    var prose = document.querySelector("[data-lx-prose]");
    var heads = [], labels = [];
    for (var i = 0; i < links.length; i++) {
      var h = document.getElementById(decodeURIComponent(links[i].hash.slice(1)));
      if (!h) continue;
      heads.push({ el: h, link: links[i] });
      labels.push(links[i].lastChild.textContent);
    }
    if (!heads.length || !box) return;
    var idle = now.textContent;
    var wide = window.matchMedia("(min-width: 1200px)");
    var current = -1, queued = false;
    nav.classList.add("is-live");
    function mode() {
      box.open = wide.matches;
    }
    function apply() {
      queued = false;
      var line = innerHeight * .3, k = -1;
      for (var i = 0; i < heads.length; i++) if (heads[i].el.getBoundingClientRect().top <= line) k = i;
      if (k !== current) {
        if (current >= 0) heads[current].link.removeAttribute("aria-current");
        if (k >= 0) heads[k].link.setAttribute("aria-current", "true");
        current = k;
        now.textContent = k >= 0 ? labels[k] : idle;
        // Keep the active entry visible when the rail scrolls.
        if (k >= 0 && wide.matches) {
          var a = heads[k].link, top = a.offsetTop, view = nav.scrollTop;
          if (top < view || top > view + nav.clientHeight - 40) nav.scrollTop = top - 40;
        }
      }
      if (prose) {
        var r = prose.getBoundingClientRect();
        var p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - innerHeight)));
        nav.style.setProperty("--lx-p", p.toFixed(3));
      }
    }
    function queue() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(apply);
    }
    function close() {
      if (!wide.matches && box.open) box.open = false;
    }
    // A choice in the list closes the drop-down; the browser follows the anchor.
    nav.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest(".lx-toc__list a")) close();
    });
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target)) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !wide.matches && box.open) {
        box.open = false;
        nav.querySelector("summary").focus();
      }
    });
    // On wide screens the list is always open.
    box.addEventListener("toggle", function () {
      if (wide.matches && !box.open) box.open = true;
    });
    if (wide.addEventListener) wide.addEventListener("change", mode);
    mode();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    apply();
  }

  /* Page transition: the clicked post's map grows into the article header.
     The article side is named in the CSS, the head script names the card
     when coming back. Here we name the card we are leaving from. */
  function wireTransition() {
    window.addEventListener("pageswap", function (e) {
      if (!e.viewTransition || !e.activation || !e.activation.entry) return;
      var path = new URL(e.activation.entry.url).pathname;
      var arts = document.querySelectorAll(".lx-way__art");
      for (var i = 0; i < arts.length; i++) {
        if (arts[i].pathname !== path) continue;
        var title = arts[i].parentNode.querySelector("h3");
        arts[i].style.viewTransitionName = "lx-art";
        if (title) title.style.viewTransitionName = "lx-title";
        break;
      }
    });
  }

  function start() {
    wireTransition();
    wireBurger();
    var header = document.querySelector(".lx-header");
    if (header) try { autoHide(header); } catch (e) {}
    data("/data/menu.json").then(fill).catch(function () {});
    var hero = document.querySelector("[data-lx-hero]");
    if (hero) try { ridgelines(hero); } catch (e) {}
    var trailHost = document.querySelector("[data-lx-trail]");
    if (trailHost) try { trail(trailHost); } catch (e) {}
    var climbHost = document.querySelector("[data-lx-climb]");
    if (climbHost) try { climb(climbHost); } catch (e) {}
    var band = document.querySelector(".lx-band--category, .lx-band--photo");
    if (band && !calm) try { parallax(band); } catch (e) {}
    var tocNav = document.querySelector("[data-lx-toc]");
    if (tocNav) try { toc(tocNav); } catch (e) {}
    var relatedHost = document.querySelector("[data-lx-related]");
    if (relatedHost) related(relatedHost);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
`, ge = '# Leaux Altitude\n\nDedicated AgentCMS theme for leaux.ovh. Ridgelines pass in front of the home title, each section is a summit on an orientation table, each post gets a contour map generated from its slug, and a reading climb follows the scroll.\n\nSection slugs and colors live in `src/rubrics.ts` and `src/theme.css` (`[data-rubric]`). Hero texts are editable on the theme settings page.\n\n## Custom fields\n\n| Field | Type | Effect |\n|---|---|---|\n| `header-photo` | yes / no | On a post with a featured image, `true` puts the image behind the header, with a parallax on scroll, instead of the contour map. The image is then not repeated under the header. |\n| `toc` | yes / no | `true` adds a table of contents built from the body\'s `h2` (numbered) and `h3` (indented); the headings get ids. Wide screens (≥ 1200 px): the text moves left, aligned with the title, and the contents stay open in a sticky column on the right, current section highlighted and the rail filling as you read. Narrower: a sticky bar under the header that shows the current section and a reading progress line, and drops the list down on tap. Without JS: an open list above the text. Shown only with at least 2 headings. |\n\n## Article components (raw HTML in Markdown)\n\n- Video card (YouTube link with thumbnail, no embed): `<div class="lx-video"><a class="lx-video__thumb" href="https://www.youtube.com/watch?v=ID" aria-label="Regarder « Titre » sur YouTube"><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" loading="lazy"></a><div><p class="lx-video__meta">Chaîne · 18 min · en anglais</p><p class="lx-video__title"><a href="https://www.youtube.com/watch?v=ID">Titre</a></p><p>Résumé…</p></div></div>`.\n- En bref (key points, first block of a long post): `<aside class="lx-brief" aria-label="En bref"><p class="lx-brief__tag">En bref</p><ul><li>… <strong>…</strong></li></ul></aside>`.\n\n- Pull quote: `<figure class="lx-pullquote"><blockquote><p>…</p></blockquote></figure>` (optional `<figcaption>`).\n- Case box: `<aside class="lx-case"><p class="lx-case__tag">Cas réel · date</p><p class="lx-case__title">…</p><p>…</p><p class="lx-case__src">Source : <a href="…">…</a></p></aside>`.\n- Key figures: `<div class="lx-stats"><div><strong>48 %</strong><span>…</span></div>…</div>`, optionally followed by `<p class="lx-case__src">Source : …</p>`.\n- Bar chart: `<figure class="lx-chart"><p class="lx-chart__title">…</p><p class="lx-chart__sub">…</p><div class="lx-chart__cols" style="--n:9"><div class="lx-chart__col is-lab" style="--v:.4" title="2020 : 18 322"><div class="lx-chart__bar"></div><span class="lx-chart__val">18 322</span></div>…</div><div class="lx-chart__axis" style="--n:9"><span>2020</span>…</div><p class="lx-case__src">Source : …</p></figure>`. `--v` is the bar height (0–1). Column modifiers: `is-hi` (highlighted), `is-part` (hatched, partial period), `is-lab` (value always shown; others on hover). Axis labels with `is-minor` hide on phones.\n- Paired horizontal bars: `<div class="lx-chart__rows"><div class="lx-chart__row"><span>Label</span><div class="lx-chart__hb" style="--v:.3"><i></i>1 200 <em>2025</em></div><div class="lx-chart__hb is-hi" style="--v:.8"><i></i>3 400 <em>2026</em></div></div></div>` with a `<ul class="lx-chart__legend"><li><i></i>2025</li><li><i class="is-hi"></i>2026</li></ul>`.\n';
function M(a, t) {
  const n = le.getFixedT(oe(t || a.settings.language || "en"), "theme-leaux-altitude");
  return (r) => n(`public.${r}`);
}
const E = [
  { slug: "edito", name: "Édito", x: 90, height: 0.62 },
  { slug: "news-tech-ia", name: "News tech IA", x: 68, height: 0.8 },
  { slug: "mes-projets", name: "Mes projets", x: 29, height: 0.74 },
  { slug: "passions", name: "Passions", x: 49, height: 0.98 },
  { slug: "transition-ia", name: "Transition IA", x: 10, height: 0.66 }
];
function fe(a) {
  var n;
  if (!a) return;
  const t = a.replace(/^\/+/, "");
  return (n = E.find((r) => t === r.slug || t.startsWith(r.slug + "/"))) == null ? void 0 : n.slug;
}
function O({ items: a, currentPath: t }) {
  return /* @__PURE__ */ e("ul", { children: a.map((n) => {
    const r = t !== void 0 && n.href === `/${t}`;
    return /* @__PURE__ */ s("li", { children: [
      /* @__PURE__ */ e("a", { href: n.href, "aria-current": r ? "page" : void 0, children: n.label }),
      n.children && n.children.length > 0 && /* @__PURE__ */ e(O, { items: n.children, currentPath: t })
    ] }, n.id);
  }) });
}
function ve({ site: a, currentPath: t, locale: n }) {
  var d;
  const r = M(a, n), i = ((d = a.settings.enabledPlugins) == null ? void 0 : d["agentcms-search"]) !== !1, o = E.find((c) => new RegExp(`^${c.slug}/(index\\.html|page/\\d+(/index)?\\.html)?$`).test(t ?? "")), l = /* @__PURE__ */ s("a", { className: "lx-brand", href: a.homePath ?? "/index.html", children: [
    /* @__PURE__ */ e("svg", { viewBox: "0 0 34 22", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M1 21 12 4l6 9 4-6 11 14z" }) }),
    o && /* @__PURE__ */ s("span", { className: "lx-sr", children: [
      o.name,
      " — "
    ] }),
    /* @__PURE__ */ e("span", { children: a.settings.title })
  ] });
  return /* @__PURE__ */ s("header", { className: "lx-header", children: [
    o ? /* @__PURE__ */ e("h1", { className: "lx-brand-h", children: l }) : l,
    /* @__PURE__ */ e("nav", { id: "lx-nav", className: "lx-nav", "aria-label": r("mainNav"), "data-cms-menu": "header", children: /* @__PURE__ */ e(O, { items: a.resolvedMenus.header, currentPath: t }) }),
    /* @__PURE__ */ s("div", { className: "lx-header__tools", children: [
      /* @__PURE__ */ e("div", { "data-cms-langswitch": "header" }),
      i && /* @__PURE__ */ e("button", { className: "lx-iconbtn", type: "button", "data-cms-search": !0, "aria-label": r("search"), children: /* @__PURE__ */ s("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: [
        /* @__PURE__ */ e("circle", { cx: "10.5", cy: "10.5", r: "6.5" }),
        /* @__PURE__ */ e("path", { d: "m15.5 15.5 5 5" })
      ] }) }),
      /* @__PURE__ */ e("button", { className: "lx-iconbtn lx-burger", type: "button", "aria-expanded": "false", "aria-controls": "lx-nav", "aria-label": r("menu"), "data-lx-burger": !0, children: /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3 8h18M3 16h18" }) }) })
    ] })
  ] });
}
function S(a) {
  let t = 2166136261;
  for (let n = 0; n < a.length; n++) t = Math.imul(t ^ a.charCodeAt(n), 16777619);
  return t >>> 0;
}
function U(a) {
  let t = a | 0;
  return () => {
    t = t + 1831565813 | 0;
    let n = Math.imul(t ^ t >>> 15, 1 | t);
    return n = n + Math.imul(n ^ n >>> 7, 61 | n) ^ n, ((n ^ n >>> 14) >>> 0) / 4294967296;
  };
}
function G(a) {
  const t = U(a), n = 64, r = Array.from({ length: n * n }, () => t()), i = (l, d) => r[(d % n + n) % n * n + (l % n + n) % n], o = (l) => l * l * (3 - 2 * l);
  return (l, d) => {
    const c = Math.floor(l), p = Math.floor(d), x = o(l - c), h = o(d - p), f = i(c, p) * (1 - x) + i(c + 1, p) * x, _ = i(c, p + 1) * (1 - x) + i(c + 1, p + 1) * x;
    return f * (1 - h) + _ * h;
  };
}
const N = (a) => Math.round(a * 10) / 10;
function be(a, t, n, r, i = 14) {
  const o = G(a), l = U(a ^ 2654435769), d = Math.round(r * n / t), c = [0, 1, 2].map(() => ({ x: 0.15 + l() * 0.7, y: 0.15 + l() * 0.7, s: 0.03 + l() * 0.07, a: 0.5 + l() * 0.7 })), p = t / n, x = [];
  let h = 1 / 0, f = -1 / 0;
  for (let g = 0; g <= d; g++)
    for (let v = 0; v <= r; v++) {
      const y = v / r, m = g / d;
      let u = o(y * 3 * p, m * 3) * 0.6 + o(y * 7 * p, m * 7) * 0.18;
      for (const q of c) {
        const A = (y - q.x) * p, C = m - q.y;
        u += q.a * Math.exp(-(A * A + C * C) / (2 * q.s));
      }
      x.push(u), u < h && (h = u), u > f && (f = u);
    }
  const _ = t / r, z = n / d, b = (g, v) => x[v * (r + 1) + g], w = [], L = [];
  for (let g = 1; g < i; g++) {
    const v = h + (f - h) * g / i, y = g % 4 === 0 ? L : w;
    for (let m = 0; m < d; m++)
      for (let u = 0; u < r; u++) {
        const q = b(u, m), A = b(u + 1, m), C = b(u + 1, m + 1), J = b(u, m + 1), T = [], F = (k, K, X, V, ie, re) => {
          if (k < v != K < v) {
            const Z = (v - k) / (K - k);
            T.push([(X + (ie - X) * Z) * _, (V + (re - V) * Z) * z]);
          }
        };
        F(q, A, u, m, u + 1, m), F(A, C, u + 1, m, u + 1, m + 1), F(J, C, u, m + 1, u + 1, m + 1), F(q, J, u, m, u, m + 1);
        for (let k = 0; k + 1 < T.length; k += 2)
          y.push(`M${N(T[k][0])} ${N(T[k][1])}L${N(T[k + 1][0])} ${N(T[k + 1][1])}`);
      }
  }
  return { minor: w.join(""), major: L.join("") };
}
function ee(a, t, n, r = 90) {
  const i = G(a);
  let o = "";
  for (let l = 0; l <= r; l++) {
    const d = l / r, c = n * (0.92 - 0.78 * Math.pow(d, 1.3) + (i(d * 7, 3) - 0.5) * 0.34 * Math.sin(Math.PI * d) + (i(d * 19, 8) - 0.5) * 0.1 * Math.sin(Math.PI * d));
    o += `${l ? "L" : "M"}${N(d * t)} ${N(Math.max(2, Math.min(n - 2, c)))}`;
  }
  return o;
}
function B(a, t, n, r = 70) {
  const i = G(a);
  let o = `M0 ${n}`;
  for (let l = 0; l <= r; l++) {
    const d = l / r, c = i(d * 5, 2) * 0.7 + i(d * 17, 5) * 0.3;
    o += `L${N(d * t)} ${N(n * (1 - c))}`;
  }
  return `${o}L${t} ${n}Z`;
}
function _e(a, t, n, r, i) {
  const o = U(a), l = (b) => {
    const w = [];
    for (let g = 1; g <= 9; g++) {
      const v = g / 9, y = g === 9 ? 0 : (o() - 0.5) * 0.09;
      w.push([t + b * i * (v + y * 1.2), n + (r - n) * Math.pow(v, 1.1) + (o() - 0.5) * 14 * (g === 9 ? 0 : 1)]);
    }
    return w;
  }, d = l(-1), c = l(1), p = [], x = 8;
  let h = t;
  for (let b = 1; b <= x; b++) {
    const w = b / x;
    h += (o() - 0.32) * i * 0.16, p.push([h, n + (r - n) * w]);
  }
  const f = (b) => b.map((w, L) => `${L ? "L" : "M"}${N(w[0])} ${N(w[1])}`).join(""), _ = [...d.slice().reverse(), [t, n], ...c], z = [[t, n], ...c, ...p.slice().reverse()];
  return { lit: `${f(_)}Z`, shade: `${f(z)}Z` };
}
function we({ site: a, locale: t }) {
  const n = M(a, t);
  return /* @__PURE__ */ s("footer", { className: "lx-footer", children: [
    /* @__PURE__ */ e("svg", { className: "lx-footer__ridge", viewBox: "0 0 1600 120", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: B(S("footer"), 1600, 120) }) }),
    /* @__PURE__ */ s("div", { className: "lx-footer__body", children: [
      /* @__PURE__ */ e("p", { className: "lx-footer__name", children: a.settings.title }),
      /* @__PURE__ */ e("nav", { "aria-label": n("footerNav"), "data-cms-menu": "footer", children: /* @__PURE__ */ e(O, { items: a.resolvedMenus.footer }) }),
      /* @__PURE__ */ e("div", { "data-cms-langswitch": "footer" }),
      /* @__PURE__ */ e("p", { className: "lx-footer__note", children: /* @__PURE__ */ e("a", { href: "https://github.com/fleox/agentcms", rel: "noopener", children: n("publishedWith") }) })
    ] })
  ] });
}
const ye = 'addEventListener("pagereveal",function(e){var n=window.navigation,f=n&&n.activation&&n.activation.from;if(!e.viewTransition||!f||!f.url)return;var p=new URL(f.url).pathname,a=document.querySelectorAll(".lx-way__art");for(var i=0;i<a.length;i++)if(a[i].pathname===p){var t=a[i].parentNode.querySelector("h3");a[i].style.viewTransitionName="lx-art";if(t)t.style.viewTransitionName="lx-title";e.viewTransition.finished.finally(function(){a[i].style.viewTransitionName="";if(t)t.style.viewTransitionName=""});break}})', ke = "GTM-KNDFD5GH", Ne = "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());";
function ze({ site: a, pageTitle: t, pageDescription: n, ogImage: r, currentPath: i, currentLocale: o, children: l }) {
  const d = o || a.settings.language || "en", c = a.settings.title || "", p = t ? t.includes(c) ? t : `${t} — ${c}` : c, x = a.settings.baseUrl && i ? te(a.settings.baseUrl, i) : void 0;
  return /* @__PURE__ */ s("html", { lang: d, children: [
    /* @__PURE__ */ s("head", { children: [
      /* @__PURE__ */ e("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ e("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ e("meta", { name: "theme-color", content: "#10163f" }),
      /* @__PURE__ */ e("title", { children: p }),
      n && /* @__PURE__ */ e("meta", { name: "description", content: n }),
      x && /* @__PURE__ */ e("link", { rel: "canonical", href: x }),
      /* @__PURE__ */ e("meta", { property: "og:title", content: p }),
      n && /* @__PURE__ */ e("meta", { property: "og:description", content: n }),
      r && /* @__PURE__ */ e("meta", { property: "og:image", content: r }),
      x && /* @__PURE__ */ e("meta", { property: "og:url", content: x }),
      /* @__PURE__ */ e("link", { rel: "stylesheet", href: `/${a.themeCssPath}` }),
      /* @__PURE__ */ e("link", { rel: "expect", href: "#lx-end", blocking: "render" }),
      /* @__PURE__ */ e("script", { dangerouslySetInnerHTML: { __html: ye } }),
      /* @__PURE__ */ e("script", { src: "/theme-assets/leaux-altitude-menu.js", defer: !0 }),
      /* @__PURE__ */ e("meta", { name: "x-cms-head-extra" })
    ] }),
    /* @__PURE__ */ s("body", { className: "lx", children: [
      /* @__PURE__ */ e(ve, { site: a, currentPath: i, locale: d }),
      /* @__PURE__ */ e("main", { children: l }),
      /* @__PURE__ */ e("span", { id: "lx-end" }),
      /* @__PURE__ */ e(we, { site: a, locale: d }),
      /* @__PURE__ */ e("script", { async: !0, src: `https://www.googletagmanager.com/gtm.js?id=${ke}` }),
      /* @__PURE__ */ e("script", { dangerouslySetInnerHTML: { __html: Ne } }),
      /* @__PURE__ */ e("script", { type: "application/x-cms-body-end" })
    ] })
  ] });
}
const ae = {
  hero: {
    firstLine: "Frédéric",
    secondLine: "Leaux",
    tagline: "Ce que l'IA change au travail, ce que je construis, et ce que je vais chercher en montagne."
  }
}, Se = {
  "hero.firstLine": { description: "First line of the giant home title." },
  "hero.secondLine": { description: "Second line of the giant home title." },
  "hero.tagline": { description: "Sentence shown above the home title." }
};
function R(a) {
  return { ...ae.hero, ...(a == null ? void 0 : a.hero) ?? {} };
}
function Me({ site: a }) {
  const t = M(a), n = 1600, r = 620;
  return /* @__PURE__ */ s("section", { className: "lx-pano", "aria-labelledby": "lx-pano-title", children: [
    /* @__PURE__ */ e("h2", { id: "lx-pano-title", className: "lx-pano__title", children: t("sections") }),
    /* @__PURE__ */ s("div", { className: "lx-pano__stage", children: [
      /* @__PURE__ */ e("svg", { viewBox: `0 0 ${n} ${r}`, preserveAspectRatio: "xMidYMax slice", "aria-hidden": "true", children: E.map((i) => {
        const o = _e(S(i.slug), i.x / 100 * n, r * (1 - i.height * 0.86), r + 10, 300 + i.height * 170);
        return /* @__PURE__ */ e("a", { href: `/${i.slug}/index.html`, tabIndex: -1, children: /* @__PURE__ */ s("g", { className: "lx-peak", "data-rubric": i.slug, "data-peak": i.slug, children: [
          /* @__PURE__ */ e("path", { className: "lx-peak__lit", d: o.lit }),
          /* @__PURE__ */ e("path", { className: "lx-peak__shade", d: o.shade })
        ] }) }, i.slug);
      }) }),
      /* @__PURE__ */ e("ul", { className: "lx-pano__labels", children: [...E].sort((i, o) => i.x - o.x).map((i) => /* @__PURE__ */ e("li", { "data-rubric": i.slug, "data-label": i.slug, style: { left: `${i.x}%`, top: `${100 - i.height * 86}%` }, children: /* @__PURE__ */ s("a", { href: `/${i.slug}/index.html`, children: [
        /* @__PURE__ */ e("strong", { children: i.name }),
        /* @__PURE__ */ e("span", { children: t(`r.${i.slug}`) })
      ] }) }, i.slug)) })
    ] })
  ] });
}
function W({ data: a }) {
  return /* @__PURE__ */ e("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(a).replace(/</g, "\\u003c") } });
}
function j(a, t) {
  return a.settings.baseUrl ? te(a.settings.baseUrl, t) : void 0;
}
function D(a, t) {
  const n = (t == null ? void 0 : t.displayName) || a.settings.title || "", r = ((t == null ? void 0 : t.socials) ?? []).map((i) => i.url).filter(Boolean);
  return {
    "@type": "Person",
    name: n,
    url: j(a, "qui-suis-je.html"),
    ...t != null && t.title ? { jobTitle: t.title } : {},
    ...r.length ? { sameAs: r } : {}
  };
}
function Le({ site: a }) {
  const t = j(a, "");
  return /* @__PURE__ */ e(
    W,
    {
      data: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: a.settings.title,
        description: a.settings.description,
        url: t,
        inLanguage: a.settings.language || "fr",
        author: D(a)
      }
    }
  );
}
function qe({ site: a, post: t, author: n, hero: r, primaryTerm: i }) {
  var x;
  const o = j(a, se({ post: t, primaryTerm: i })), l = new Date(P(t)).toISOString(), d = t.updatedAt ? P({ updatedAt: t.updatedAt }) : 0, c = H(r, "large"), p = [
    { name: a.settings.title, item: j(a, "") },
    ...i ? [{ name: i.name, item: j(a, ne(i)) }] : [],
    { name: t.title, item: o }
  ];
  return /* @__PURE__ */ s($, { children: [
    /* @__PURE__ */ e(
      W,
      {
        data: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t.title,
          description: ((x = t.seo) == null ? void 0 : x.description) || t.excerpt,
          url: o,
          mainEntityOfPage: o,
          inLanguage: a.settings.language || "fr",
          datePublished: l,
          dateModified: d > P(t) ? new Date(d).toISOString() : l,
          ...c ? { image: c } : {},
          ...i ? { articleSection: i.name } : {},
          author: D(a, n),
          publisher: D(a, n)
        }
      }
    ),
    /* @__PURE__ */ e(
      W,
      {
        data: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: p.map((h, f) => ({ "@type": "ListItem", position: f + 1, name: h.name, item: h.item }))
        }
      }
    )
  ] });
}
function I({ seed: a, width: t = 480, height: n = 300, cols: r = 44, className: i }) {
  const o = be(S(a), t, n, r);
  return /* @__PURE__ */ s("svg", { className: `lx-topo ${i ?? ""}`, viewBox: `0 0 ${t} ${n}`, preserveAspectRatio: "xMidYMid slice", "aria-hidden": "true", children: [
    /* @__PURE__ */ e("path", { className: "lx-topo__minor", d: o.minor }),
    /* @__PURE__ */ e("path", { className: "lx-topo__major", d: o.major })
  ] });
}
function Y({ posts: a, site: t, lead: n = !0 }) {
  const r = M(t);
  return a.length === 0 ? /* @__PURE__ */ e("p", { className: "lx-empty", children: r("empty") }) : /* @__PURE__ */ e("div", { className: "lx-trail", "data-lx-trail": !0, children: a.map((i, o) => {
    var p;
    const l = fe((p = i.category) == null ? void 0 : p.url), d = n && o === 0, c = H(i.hero, d ? "large" : "medium");
    return /* @__PURE__ */ s("article", { className: `lx-way${d ? " lx-way--first" : ""}`, "data-rubric": l, children: [
      /* @__PURE__ */ e("span", { className: "lx-way__pin", "aria-hidden": "true" }),
      /* @__PURE__ */ e("a", { className: "lx-way__art", href: "/" + i.url, tabIndex: -1, "aria-hidden": "true", children: c ? /* @__PURE__ */ e("img", { src: c, alt: "", loading: "lazy" }) : /* @__PURE__ */ e(I, { seed: i.slug, cols: d ? 64 : 44 }) }),
      /* @__PURE__ */ s("div", { className: "lx-way__text", children: [
        /* @__PURE__ */ s("p", { className: "lx-way__meta", children: [
          i.dateLabel && /* @__PURE__ */ e("span", { children: i.dateLabel }),
          i.category && /* @__PURE__ */ e("a", { href: i.category.url, children: i.category.name })
        ] }),
        /* @__PURE__ */ e("h3", { children: /* @__PURE__ */ e("a", { href: "/" + i.url, children: i.title }) }),
        i.excerpt && /* @__PURE__ */ e("p", { className: "lx-way__excerpt", children: i.excerpt })
      ] })
    ] }, i.id);
  }) });
}
function Te({ site: a }) {
  const t = R(a.themeConfig);
  return /* @__PURE__ */ s("section", { className: "lx-hero", "data-lx-hero": !0, children: [
    /* @__PURE__ */ e("canvas", { className: "lx-hero__canvas", "data-lx-back": !0, "aria-hidden": "true" }),
    /* @__PURE__ */ s("div", { className: "lx-hero__copy", children: [
      /* @__PURE__ */ e("p", { className: "lx-hero__tagline", children: t.tagline }),
      /* @__PURE__ */ s("h1", { className: "lx-hero__name", children: [
        /* @__PURE__ */ e("span", { children: t.firstLine }),
        " ",
        /* @__PURE__ */ e("span", { children: t.secondLine })
      ] })
    ] }),
    /* @__PURE__ */ e("svg", { className: "lx-hero__static", viewBox: "0 0 1600 300", preserveAspectRatio: "none", "aria-hidden": "true", children: [0, 1, 2].map((n) => /* @__PURE__ */ e("path", { d: B(S("hero" + n), 1600, 300 - n * 70), transform: `translate(0 ${n * 70})` }, n)) }),
    /* @__PURE__ */ e("canvas", { className: "lx-hero__canvas lx-hero__canvas--front", "data-lx-front": !0, "aria-hidden": "true" })
  ] });
}
function Ee({ site: a, posts: t, staticPage: n, archivesLink: r }) {
  const i = M(a);
  return n ? /* @__PURE__ */ e("div", { className: "lx-prose lx-prose--page", dangerouslySetInnerHTML: { __html: n.bodyHtml } }) : /* @__PURE__ */ s($, { children: [
    /* @__PURE__ */ e(Le, { site: a }),
    /* @__PURE__ */ e(Te, { site: a }),
    /* @__PURE__ */ e(Me, { site: a }),
    /* @__PURE__ */ s("section", { className: "lx-section", "aria-labelledby": "lx-latest", children: [
      /* @__PURE__ */ e("h2", { id: "lx-latest", className: "lx-section__title", children: i("latest") }),
      /* @__PURE__ */ e(Y, { posts: t, site: a }),
      r && /* @__PURE__ */ e("p", { className: "lx-more", children: /* @__PURE__ */ e("a", { href: r.href, children: r.label }) })
    ] })
  ] });
}
function Ae({ entries: a, label: t, countLabel: n }) {
  const r = a.filter((o) => o.level === 2).length || a.length;
  let i = 0;
  return /* @__PURE__ */ e("nav", { className: "lx-toc", "aria-labelledby": "lx-toc-title", "data-lx-toc": !0, children: /* @__PURE__ */ s("details", { className: "lx-toc__box", open: !0, children: [
    /* @__PURE__ */ s("summary", { className: "lx-toc__bar", children: [
      /* @__PURE__ */ e("span", { className: "lx-toc__title", id: "lx-toc-title", children: t }),
      /* @__PURE__ */ s("span", { className: "lx-toc__now", "data-lx-toc-now": !0, children: [
        r,
        " ",
        n
      ] }),
      /* @__PURE__ */ e("svg", { className: "lx-toc__chev", viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3 6l5 5 5-5" }) }),
      /* @__PURE__ */ e("span", { className: "lx-toc__progress", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ e("ol", { className: "lx-toc__list", children: a.map((o) => /* @__PURE__ */ e("li", { className: o.level === 3 ? "is-sub" : void 0, children: /* @__PURE__ */ s("a", { href: `#${o.id}`, children: [
      o.level === 2 && /* @__PURE__ */ e("span", { className: "lx-toc__num", "aria-hidden": "true", children: String(++i).padStart(2, "0") }),
      /* @__PURE__ */ e("span", { children: o.text })
    ] }) }, o.id)) })
  ] }) });
}
const Ce = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", rsquo: "’", laquo: "«", raquo: "»" };
function je(a) {
  return a.replace(/<[^>]*>/g, "").replace(/&#(\d+);/g, (t, n) => String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi, (t, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&([a-z]+);/gi, (t, n) => Ce[n.toLowerCase()] ?? t).replace(/[ \t\r\n]+/g, " ").trim();
}
function $e(a) {
  return a.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 64).replace(/-+$/, "") || "section";
}
function He(a) {
  const t = [], n = /* @__PURE__ */ new Set();
  return { html: a.replace(/<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi, (i, o, l, d) => {
    var h;
    const c = je(d);
    if (!c) return i;
    const p = (h = l == null ? void 0 : l.match(/\sid\s*=\s*"([^"]+)"/i)) == null ? void 0 : h[1];
    let x = p ?? $e(c);
    if (!p) {
      const f = x;
      for (let _ = 2; n.has(x); _++) x = `${f}-${_}`;
    }
    return n.add(x), t.push({ id: x, text: c, level: o === "2" ? 2 : 3 }), p ? i : `<h${o} id="${x}"${l ?? ""}>${d}</h${o}>`;
  }), entries: t };
}
function Be({ site: a, post: t, bodyHtml: n, author: r, hero: i, primaryTerm: o, tags: l }) {
  var g, v, y;
  const d = M(a), c = H(i, "large"), p = t.type === "post", x = (g = E.find((m) => m.slug === (o == null ? void 0 : o.slug))) == null ? void 0 : g.slug, h = new Date(P(t));
  let f = "";
  try {
    f = new Intl.DateTimeFormat(a.settings.language || "fr", { dateStyle: "long" }).format(h);
  } catch {
    f = h.toDateString();
  }
  const _ = !!(p && c && ((v = t.fields) == null ? void 0 : v["header-photo"]) === !0), z = ((y = t.fields) == null ? void 0 : y.toc) === !0 ? He(n) : null, b = !!(z && z.entries.length >= 2), w = t.contentMarkdown.trim().split(/\s+/).length, L = Math.max(1, Math.round(w / 220));
  return /* @__PURE__ */ s("article", { "data-rubric": x, className: `lx-article${p ? "" : " lx-article--page"}${t.slug === "qui-suis-je" ? " lx-article--about" : ""}`, children: [
    /* @__PURE__ */ s("header", { className: `lx-band lx-band--article${_ ? " lx-band--photo" : ""}`, children: [
      _ ? /* @__PURE__ */ e("div", { className: "lx-band__art lx-band__photo", "aria-hidden": "true", children: /* @__PURE__ */ e("img", { src: c, alt: "" }) }) : /* @__PURE__ */ e(I, { seed: t.slug, width: 1600, height: 720, cols: 110, className: "lx-band__art" }),
      /* @__PURE__ */ s("div", { className: "lx-band__inner", children: [
        p && o && /* @__PURE__ */ e("a", { className: "lx-band__rubric", href: `/${ne(o)}`, children: o.name }),
        /* @__PURE__ */ e("h1", { children: t.title }),
        t.excerpt && /* @__PURE__ */ e("p", { className: "lx-band__lead", children: t.excerpt }),
        p && /* @__PURE__ */ s("p", { className: "lx-band__count", children: [
          r && /* @__PURE__ */ e("span", { children: r.url ? /* @__PURE__ */ e("a", { href: r.url, children: r.displayName }) : r.displayName }),
          /* @__PURE__ */ e("time", { dateTime: h.toISOString(), children: f }),
          /* @__PURE__ */ s("span", { children: [
            L,
            " ",
            d("minutes")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("svg", { className: "lx-band__edge", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: B(S(t.slug), 1600, 90) }) })
    ] }),
    c && !_ && /* @__PURE__ */ s("figure", { className: "lx-figure", children: [
      /* @__PURE__ */ e("img", { src: c, alt: (i == null ? void 0 : i.alt) ?? "" }),
      (i == null ? void 0 : i.caption) && /* @__PURE__ */ e("figcaption", { children: i.caption })
    ] }),
    b && z ? /* @__PURE__ */ s("div", { className: "lx-body lx-body--toc", children: [
      /* @__PURE__ */ e(Ae, { entries: z.entries, label: d("toc"), countLabel: d("tocParts") }),
      /* @__PURE__ */ e("div", { className: "lx-prose", "data-lx-prose": !0, dangerouslySetInnerHTML: { __html: z.html } })
    ] }) : /* @__PURE__ */ e("div", { className: "lx-prose", "data-lx-prose": !0, dangerouslySetInnerHTML: { __html: n } }),
    p && l.length > 0 && /* @__PURE__ */ e("ul", { className: "lx-tags", "aria-label": d("tags"), children: l.map((m) => /* @__PURE__ */ e("li", { children: m.name }, m.id)) }),
    p && /* @__PURE__ */ s($, { children: [
      /* @__PURE__ */ e(qe, { site: a, post: t, author: r, hero: i, primaryTerm: o }),
      /* @__PURE__ */ s("section", { className: "lx-related", "data-lx-related": !0, "data-current": t.id, "data-term": t.primaryTermId, hidden: !0, children: [
        /* @__PURE__ */ e("h2", { children: d("continue") }),
        /* @__PURE__ */ e("div", { className: "lx-related__list" })
      ] }),
      /* @__PURE__ */ s("div", { className: "lx-climb", "data-lx-climb": !0, hidden: !0, "aria-hidden": "true", children: [
        /* @__PURE__ */ s("svg", { viewBox: "0 0 1600 60", preserveAspectRatio: "none", children: [
          /* @__PURE__ */ e("path", { className: "lx-climb__base", d: ee(S(t.slug), 1600, 60) }),
          /* @__PURE__ */ e("path", { className: "lx-climb__done", d: ee(S(t.slug), 1600, 60) })
        ] }),
        /* @__PURE__ */ e("span", { className: "lx-climb__dot" })
      ] })
    ] })
  ] });
}
function Ie({ site: a, term: t, posts: n, archivesLink: r }) {
  var h;
  const i = M(a), o = (h = E.find((f) => f.slug === t.slug)) == null ? void 0 : h.slug, [l, ...d] = n, c = l ? H(l.hero, "large") : void 0, p = l ? l.contentMarkdown.trim().split(/\s+/).length : 0, x = Math.max(1, Math.round(p / 220));
  return /* @__PURE__ */ s($, { children: [
    /* @__PURE__ */ s("header", { className: `lx-band lx-band--category lx-band--feature${c ? " lx-band--photo" : ""}`, "data-rubric": o, children: [
      c ? /* @__PURE__ */ e("div", { className: "lx-band__art lx-band__photo", "aria-hidden": "true", children: /* @__PURE__ */ e("img", { src: c, alt: "", fetchPriority: "high" }) }) : /* @__PURE__ */ e(I, { seed: (l == null ? void 0 : l.slug) ?? t.slug, width: 1600, height: 720, cols: 110, className: "lx-band__art" }),
      /* @__PURE__ */ e("div", { className: "lx-band__inner", children: l ? /* @__PURE__ */ s("article", { className: "lx-feature", children: [
        /* @__PURE__ */ s("p", { className: "lx-feature__kicker", children: [
          /* @__PURE__ */ e("span", { className: "lx-feature__rubric", children: t.name }),
          /* @__PURE__ */ e("span", { children: i("featured") })
        ] }),
        /* @__PURE__ */ e("h2", { className: "lx-feature__title", children: /* @__PURE__ */ e("a", { href: "/" + l.url, children: l.title }) }),
        l.excerpt && /* @__PURE__ */ e("p", { className: "lx-band__lead", children: l.excerpt }),
        /* @__PURE__ */ s("div", { className: "lx-feature__foot", children: [
          /* @__PURE__ */ s("a", { className: "lx-feature__cta", href: "/" + l.url, tabIndex: -1, "aria-hidden": "true", children: [
            i("readPost"),
            /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M4 12h15m-6-6 6 6-6 6" }) })
          ] }),
          /* @__PURE__ */ s("p", { className: "lx-band__count", children: [
            l.dateLabel && /* @__PURE__ */ e("span", { children: l.dateLabel }),
            /* @__PURE__ */ s("span", { children: [
              x,
              " ",
              i("minutes")
            ] })
          ] })
        ] })
      ] }) : /* @__PURE__ */ e("p", { className: "lx-band__lead", children: i("empty") }) }),
      /* @__PURE__ */ e("svg", { className: "lx-band__edge", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: B(S(t.slug), 1600, 90) }) })
    ] }),
    d.length > 0 && /* @__PURE__ */ s("section", { className: "lx-section lx-section--flush", "data-rubric": o, children: [
      /* @__PURE__ */ s("h2", { className: "lx-section__title lx-section__title--small", children: [
        i("earlier"),
        " ",
        /* @__PURE__ */ s("span", { children: [
          d.length,
          " ",
          i(d.length > 1 ? "articles" : "article")
        ] })
      ] }),
      /* @__PURE__ */ e(Y, { posts: d, site: a, lead: !1 }),
      r && /* @__PURE__ */ e("p", { className: "lx-more", children: /* @__PURE__ */ e("a", { href: r.href, children: r.label }) })
    ] })
  ] });
}
function Fe({ site: a, author: t, posts: n }) {
  const r = H(t.avatar, "small");
  return /* @__PURE__ */ s($, { children: [
    /* @__PURE__ */ s("header", { className: "lx-band lx-band--author", children: [
      /* @__PURE__ */ e(I, { seed: t.displayName, width: 1600, height: 620, cols: 110, className: "lx-band__art" }),
      /* @__PURE__ */ s("div", { className: "lx-band__inner", children: [
        r && /* @__PURE__ */ e("img", { className: "lx-avatar", src: r, alt: "", width: 120, height: 120 }),
        /* @__PURE__ */ e("h1", { children: t.displayName }),
        t.title && /* @__PURE__ */ e("p", { className: "lx-band__lead", children: t.title }),
        t.bio && /* @__PURE__ */ e("p", { className: "lx-band__bio", children: t.bio }),
        t.socials && t.socials.length > 0 && /* @__PURE__ */ e("ul", { className: "lx-socials", children: t.socials.map((i) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: i.url, rel: "me noopener", "aria-label": ce(i.network), children: /* @__PURE__ */ e(de, { network: i.network }) }) }, i.network)) })
      ] }),
      /* @__PURE__ */ e("svg", { className: "lx-band__edge", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: B(S(t.id), 1600, 90) }) })
    ] }),
    /* @__PURE__ */ e("section", { className: "lx-section lx-section--flush", children: /* @__PURE__ */ e(Y, { posts: n, site: a }) })
  ] });
}
function Pe({ site: a, message: t }) {
  const n = M(a);
  return /* @__PURE__ */ s("section", { className: "lx-lost", children: [
    /* @__PURE__ */ e(I, { seed: "hors-sentier", width: 1600, height: 900, cols: 120, className: "lx-lost__art" }),
    /* @__PURE__ */ s("div", { className: "lx-lost__copy", children: [
      /* @__PURE__ */ e("p", { className: "lx-lost__code", children: "404" }),
      /* @__PURE__ */ e("h1", { children: n("notFoundTitle") }),
      /* @__PURE__ */ e("p", { children: t ?? n("notFoundText") }),
      /* @__PURE__ */ e("a", { className: "lx-button", href: a.homePath ?? "/index.html", children: n("backHome") })
    ] })
  ] });
}
function Re({ config: a, save: t }) {
  const { t: n } = he("theme-leaux-altitude"), [r, i] = Q(R(a)), [o, l] = Q(!1);
  xe(() => i(R(a)), [a]);
  async function d(c) {
    c.preventDefault(), l(!0);
    try {
      await t({ ...a, hero: r }), pe.success(n("settings.saved"));
    } finally {
      l(!1);
    }
  }
  return /* @__PURE__ */ s("form", { onSubmit: d, "data-form-type": "other", className: "max-w-xl space-y-4", children: [
    /* @__PURE__ */ e("h1", { className: "text-xl font-semibold", children: n("settings.title") }),
    ["firstLine", "secondLine", "tagline"].map((c) => /* @__PURE__ */ s("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ e("span", { className: "label", children: n(`settings.${c}`) }),
      /* @__PURE__ */ e("input", { className: "input w-full", value: r[c], onChange: (p) => i({ ...r, [c]: p.target.value }) })
    ] }, c)),
    /* @__PURE__ */ e("button", { type: "submit", className: "btn btn-primary", disabled: o, children: /* @__PURE__ */ e("span", { children: n("settings.save") }) })
  ] });
}
const We = {
  en: {
    public: {
      menu: "Menu",
      close: "Close",
      search: "Search",
      mainNav: "Main",
      footerNav: "Footer",
      tags: "Tags",
      empty: "Nothing published here yet.",
      notFoundTitle: "Off trail",
      notFoundText: "This page does not exist or has moved.",
      backHome: "Back to the home page",
      by: "By",
      minutes: "min read",
      latest: "Latest posts",
      sections: "Where to climb next?",
      continue: "Keep reading",
      article: "post",
      articles: "posts",
      publishedWith: "Published with AgentCMS",
      toc: "Contents",
      tocParts: "sections",
      featured: "Latest post",
      readPost: "Read the post",
      earlier: "Earlier posts",
      r: { "transition-ia": "What I did, and what I learned", "mes-projets": "Things I build on my own time", passions: "Treks, summits and the rest", "news-tech-ia": "AI development news", edito: "Work, management, moods" }
    },
    settings: { navLabel: "Leaux Altitude", title: "Leaux Altitude settings", firstLine: "Title, first line", secondLine: "Title, second line", tagline: "Tagline", save: "Save", saved: "Saved. Run Regenerate → Home to publish it." }
  },
  fr: {
    public: {
      menu: "Menu",
      close: "Fermer",
      search: "Rechercher",
      mainNav: "Principal",
      footerNav: "Pied de page",
      tags: "Étiquettes",
      empty: "Rien de publié ici pour l'instant.",
      notFoundTitle: "Hors sentier",
      notFoundText: "Cette page n'existe pas ou a été déplacée.",
      backHome: "Revenir à l'accueil",
      by: "Par",
      minutes: "min de lecture",
      latest: "Derniers articles",
      sections: "Par où monter ?",
      continue: "Continuer la lecture",
      article: "article",
      articles: "articles",
      publishedWith: "Publié avec AgentCMS",
      toc: "Sommaire",
      tocParts: "parties",
      featured: "Dernier article",
      readPost: "Lire l'article",
      earlier: "Articles précédents",
      r: { "transition-ia": "Ce que j'ai fait, ce que j'en retiens", "mes-projets": "Ce que je construis à côté", passions: "Treks, sommets et le reste", "news-tech-ia": "L'actu du développement avec l'IA", edito: "Travail, management, humeurs" }
    },
    settings: { navLabel: "Leaux Altitude", title: "Réglages Leaux Altitude", firstLine: "Titre, première ligne", secondLine: "Titre, deuxième ligne", tagline: "Accroche", save: "Enregistrer", saved: "Enregistré. Lancez Régénérer → Accueil pour publier." }
  }
}, Ye = {
  id: "leaux-altitude",
  name: "Leaux Altitude",
  version: "1.6.0",
  description: "Dedicated theme for leaux.ovh: generative topographic art, one trail per section.",
  readme: ge,
  scssEntry: "theme.css",
  cssText: me,
  // Uploaded as theme-assets/leaux-altitude-menu.js; fills the menus from
  // data/menu.json so menu edits don't require regenerating every page.
  jsText: ue,
  // Image variants generated for every upload while this theme is active.
  imageFormats: {
    inputFormats: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
    outputFormat: "webp",
    quality: 80,
    defaultFormat: "medium",
    formats: {
      small: { width: 480, height: 320, fit: "cover" },
      medium: { width: 960, height: 640, fit: "cover" },
      large: { width: 1600, height: 900, fit: "cover" }
    }
  },
  templates: {
    base: ze,
    home: Ee,
    single: Be,
    category: Ie,
    author: Fe,
    notFound: Pe
  },
  // /theme-settings page: hero texts.
  settings: { navLabelKey: "settings.navLabel", defaultConfig: ae, component: Re, schema: Se },
  // Translations, namespace "theme-leaux-altitude" (admin UI + public labels).
  i18n: We
};
export {
  Ye as default
};
