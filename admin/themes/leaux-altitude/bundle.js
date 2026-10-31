import { jsxs as l, jsx as e, Fragment as B } from "react/jsx-runtime";
import { i18n as ee, pickPublicLocale as te, canonicalUrl as ne, pickFormat as R, postSortMillis as ae, buildTermUrl as ie, SocialIcon as re, socialLabel as le, toast as oe } from "@agent-cms/runtime";
import { useState as Y, useEffect as se } from "react";
import { useTranslation as ce } from "react-i18next";
const de = `@import url("https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&display=swap");

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
`, he = `// Leaux Altitude runtime, uploaded as theme-assets/leaux-altitude-menu.js.
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

  /* Section pages: the map drifts slower than the page and the title sinks
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
    data("/data/menu.json").then(fill).catch(function () {});
    var hero = document.querySelector("[data-lx-hero]");
    if (hero) try { ridgelines(hero); } catch (e) {}
    var trailHost = document.querySelector("[data-lx-trail]");
    if (trailHost) try { trail(trailHost); } catch (e) {}
    var climbHost = document.querySelector("[data-lx-climb]");
    if (climbHost) try { climb(climbHost); } catch (e) {}
    var band = document.querySelector(".lx-band--category");
    if (band && !calm) try { parallax(band); } catch (e) {}
    var relatedHost = document.querySelector("[data-lx-related]");
    if (relatedHost) related(relatedHost);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
`, pe = "# Leaux Altitude\n\nDedicated AgentCMS theme for leaux.ovh. Ridgelines pass in front of the home title, each section is a summit on an orientation table, each post gets a contour map generated from its slug, and a reading climb follows the scroll.\n\nSection slugs and colors live in `src/rubrics.ts` and `src/theme.css` (`[data-rubric]`). Hero texts are editable on the theme settings page.\n";
function N(a, n) {
  const t = ee.getFixedT(te(n || a.settings.language || "en"), "theme-leaux-altitude");
  return (i) => t(`public.${i}`);
}
function I({ items: a, currentPath: n }) {
  return /* @__PURE__ */ e("ul", { children: a.map((t) => {
    const i = n !== void 0 && t.href === `/${n}`;
    return /* @__PURE__ */ l("li", { children: [
      /* @__PURE__ */ e("a", { href: t.href, "aria-current": i ? "page" : void 0, children: t.label }),
      t.children && t.children.length > 0 && /* @__PURE__ */ e(I, { items: t.children, currentPath: n })
    ] }, t.id);
  }) });
}
function xe({ site: a, currentPath: n, locale: t }) {
  var o;
  const i = N(a, t), r = ((o = a.settings.enabledPlugins) == null ? void 0 : o["agentcms-search"]) !== !1;
  return /* @__PURE__ */ l("header", { className: "lx-header", children: [
    /* @__PURE__ */ l("a", { className: "lx-brand", href: a.homePath ?? "/index.html", children: [
      /* @__PURE__ */ e("svg", { viewBox: "0 0 34 22", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M1 21 12 4l6 9 4-6 11 14z" }) }),
      /* @__PURE__ */ e("span", { children: a.settings.title })
    ] }),
    /* @__PURE__ */ e("nav", { id: "lx-nav", className: "lx-nav", "aria-label": i("mainNav"), "data-cms-menu": "header", children: /* @__PURE__ */ e(I, { items: a.resolvedMenus.header, currentPath: n }) }),
    /* @__PURE__ */ l("div", { className: "lx-header__tools", children: [
      /* @__PURE__ */ e("div", { "data-cms-langswitch": "header" }),
      r && /* @__PURE__ */ e("button", { className: "lx-iconbtn", type: "button", "data-cms-search": !0, "aria-label": i("search"), children: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: [
        /* @__PURE__ */ e("circle", { cx: "10.5", cy: "10.5", r: "6.5" }),
        /* @__PURE__ */ e("path", { d: "m15.5 15.5 5 5" })
      ] }) }),
      /* @__PURE__ */ e("button", { className: "lx-iconbtn lx-burger", type: "button", "aria-expanded": "false", "aria-controls": "lx-nav", "aria-label": i("menu"), "data-lx-burger": !0, children: /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3 8h18M3 16h18" }) }) })
    ] })
  ] });
}
function k(a) {
  let n = 2166136261;
  for (let t = 0; t < a.length; t++) n = Math.imul(n ^ a.charCodeAt(t), 16777619);
  return n >>> 0;
}
function P(a) {
  let n = a | 0;
  return () => {
    n = n + 1831565813 | 0;
    let t = Math.imul(n ^ n >>> 15, 1 | n);
    return t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t, ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function W(a) {
  const n = P(a), t = 64, i = Array.from({ length: t * t }, () => n()), r = (s, c) => i[(c % t + t) % t * t + (s % t + t) % t], o = (s) => s * s * (3 - 2 * s);
  return (s, c) => {
    const d = Math.floor(s), h = Math.floor(c), m = o(s - d), v = o(c - h), b = r(d, h) * (1 - m) + r(d + 1, h) * m, M = r(d, h + 1) * (1 - m) + r(d + 1, h + 1) * m;
    return b * (1 - v) + M * v;
  };
}
const _ = (a) => Math.round(a * 10) / 10;
function me(a, n, t, i, r = 14) {
  const o = W(a), s = P(a ^ 2654435769), c = Math.round(i * t / n), d = [0, 1, 2].map(() => ({ x: 0.15 + s() * 0.7, y: 0.15 + s() * 0.7, s: 0.03 + s() * 0.07, a: 0.5 + s() * 0.7 })), h = n / t, m = [];
  let v = 1 / 0, b = -1 / 0;
  for (let u = 0; u <= c; u++)
    for (let w = 0; w <= i; w++) {
      const z = w / i, x = u / c;
      let p = o(z * 3 * h, x * 3) * 0.6 + o(z * 7 * h, x * 7) * 0.18;
      for (const S of d) {
        const E = (z - S.x) * h, C = x - S.y;
        p += S.a * Math.exp(-(E * E + C * C) / (2 * S.s));
      }
      m.push(p), p < v && (v = p), p > b && (b = p);
    }
  const M = n / i, A = t / c, g = (u, w) => m[w * (i + 1) + u], f = [], T = [];
  for (let u = 1; u < r; u++) {
    const w = v + (b - v) * u / r, z = u % 4 === 0 ? T : f;
    for (let x = 0; x < c; x++)
      for (let p = 0; p < i; p++) {
        const S = g(p, x), E = g(p + 1, x), C = g(p + 1, x + 1), U = g(p, x + 1), L = [], $ = (y, O, G, Z, X, J) => {
          if (y < w != O < w) {
            const K = (w - y) / (O - y);
            L.push([(G + (X - G) * K) * M, (Z + (J - Z) * K) * A]);
          }
        };
        $(S, E, p, x, p + 1, x), $(E, C, p + 1, x, p + 1, x + 1), $(U, C, p, x + 1, p + 1, x + 1), $(S, U, p, x, p, x + 1);
        for (let y = 0; y + 1 < L.length; y += 2)
          z.push(`M${_(L[y][0])} ${_(L[y][1])}L${_(L[y + 1][0])} ${_(L[y + 1][1])}`);
      }
  }
  return { minor: f.join(""), major: T.join("") };
}
function Q(a, n, t, i = 90) {
  const r = W(a);
  let o = "";
  for (let s = 0; s <= i; s++) {
    const c = s / i, d = t * (0.92 - 0.78 * Math.pow(c, 1.3) + (r(c * 7, 3) - 0.5) * 0.34 * Math.sin(Math.PI * c) + (r(c * 19, 8) - 0.5) * 0.1 * Math.sin(Math.PI * c));
    o += `${s ? "L" : "M"}${_(c * n)} ${_(Math.max(2, Math.min(t - 2, d)))}`;
  }
  return o;
}
function q(a, n, t, i = 70) {
  const r = W(a);
  let o = `M0 ${t}`;
  for (let s = 0; s <= i; s++) {
    const c = s / i, d = r(c * 5, 2) * 0.7 + r(c * 17, 5) * 0.3;
    o += `L${_(c * n)} ${_(t * (1 - d))}`;
  }
  return `${o}L${n} ${t}Z`;
}
function ue(a, n, t, i, r) {
  const o = P(a), s = (g) => {
    const f = [];
    for (let u = 1; u <= 9; u++) {
      const w = u / 9, z = u === 9 ? 0 : (o() - 0.5) * 0.09;
      f.push([n + g * r * (w + z * 1.2), t + (i - t) * Math.pow(w, 1.1) + (o() - 0.5) * 14 * (u === 9 ? 0 : 1)]);
    }
    return f;
  }, c = s(-1), d = s(1), h = [], m = 8;
  let v = n;
  for (let g = 1; g <= m; g++) {
    const f = g / m;
    v += (o() - 0.32) * r * 0.16, h.push([v, t + (i - t) * f]);
  }
  const b = (g) => g.map((f, T) => `${T ? "L" : "M"}${_(f[0])} ${_(f[1])}`).join(""), M = [...c.slice().reverse(), [n, t], ...d], A = [[n, t], ...d, ...h.slice().reverse()];
  return { lit: `${b(M)}Z`, shade: `${b(A)}Z` };
}
function ge({ site: a, locale: n }) {
  const t = N(a, n);
  return /* @__PURE__ */ l("footer", { className: "lx-footer", children: [
    /* @__PURE__ */ e("svg", { className: "lx-footer__ridge", viewBox: "0 0 1600 120", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: q(k("footer"), 1600, 120) }) }),
    /* @__PURE__ */ l("div", { className: "lx-footer__body", children: [
      /* @__PURE__ */ e("p", { className: "lx-footer__name", children: a.settings.title }),
      /* @__PURE__ */ e("nav", { "aria-label": t("footerNav"), "data-cms-menu": "footer", children: /* @__PURE__ */ e(I, { items: a.resolvedMenus.footer }) }),
      /* @__PURE__ */ e("div", { "data-cms-langswitch": "footer" }),
      /* @__PURE__ */ e("p", { className: "lx-footer__note", children: /* @__PURE__ */ e("a", { href: "https://github.com/fleox/agentcms", rel: "noopener", children: t("publishedWith") }) })
    ] })
  ] });
}
const fe = 'addEventListener("pagereveal",function(e){var n=window.navigation,f=n&&n.activation&&n.activation.from;if(!e.viewTransition||!f||!f.url)return;var p=new URL(f.url).pathname,a=document.querySelectorAll(".lx-way__art");for(var i=0;i<a.length;i++)if(a[i].pathname===p){var t=a[i].parentNode.querySelector("h3");a[i].style.viewTransitionName="lx-art";if(t)t.style.viewTransitionName="lx-title";e.viewTransition.finished.finally(function(){a[i].style.viewTransitionName="";if(t)t.style.viewTransitionName=""});break}})';
function ve({ site: a, pageTitle: n, pageDescription: t, ogImage: i, currentPath: r, currentLocale: o, children: s }) {
  const c = o || a.settings.language || "en", d = a.settings.title || "", h = n ? n.includes(d) ? n : `${n} — ${d}` : d, m = a.settings.baseUrl && r ? ne(a.settings.baseUrl, r) : void 0;
  return /* @__PURE__ */ l("html", { lang: c, children: [
    /* @__PURE__ */ l("head", { children: [
      /* @__PURE__ */ e("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ e("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ e("meta", { name: "theme-color", content: "#10163f" }),
      /* @__PURE__ */ e("title", { children: h }),
      t && /* @__PURE__ */ e("meta", { name: "description", content: t }),
      m && /* @__PURE__ */ e("link", { rel: "canonical", href: m }),
      /* @__PURE__ */ e("meta", { property: "og:title", content: h }),
      t && /* @__PURE__ */ e("meta", { property: "og:description", content: t }),
      i && /* @__PURE__ */ e("meta", { property: "og:image", content: i }),
      m && /* @__PURE__ */ e("meta", { property: "og:url", content: m }),
      /* @__PURE__ */ e("link", { rel: "stylesheet", href: `/${a.themeCssPath}` }),
      /* @__PURE__ */ e("link", { rel: "expect", href: "#lx-end", blocking: "render" }),
      /* @__PURE__ */ e("script", { dangerouslySetInnerHTML: { __html: fe } }),
      /* @__PURE__ */ e("script", { src: "/theme-assets/leaux-altitude-menu.js", defer: !0 }),
      /* @__PURE__ */ e("meta", { name: "x-cms-head-extra" })
    ] }),
    /* @__PURE__ */ l("body", { className: "lx", children: [
      /* @__PURE__ */ e(xe, { site: a, currentPath: r, locale: c }),
      /* @__PURE__ */ e("main", { children: s }),
      /* @__PURE__ */ e("span", { id: "lx-end" }),
      /* @__PURE__ */ e(ge, { site: a, locale: c }),
      /* @__PURE__ */ e("script", { type: "application/x-cms-body-end" })
    ] })
  ] });
}
const V = {
  hero: {
    firstLine: "Frédéric",
    secondLine: "Leaux",
    tagline: "Ce que l'IA change au travail, ce que je construis, et ce que je vais chercher en montagne."
  }
}, be = {
  "hero.firstLine": { description: "First line of the giant home title." },
  "hero.secondLine": { description: "Second line of the giant home title." },
  "hero.tagline": { description: "Sentence shown above the home title." }
};
function F(a) {
  return { ...V.hero, ...(a == null ? void 0 : a.hero) ?? {} };
}
const j = [
  { slug: "edito", name: "Édito", x: 90, height: 0.62 },
  { slug: "news-tech-ia", name: "News tech IA", x: 68, height: 0.8 },
  { slug: "mes-projets", name: "Mes projets", x: 29, height: 0.74 },
  { slug: "passions", name: "Passions", x: 49, height: 0.98 },
  { slug: "transition-ia", name: "Transition IA", x: 10, height: 0.66 }
];
function we(a) {
  var t;
  if (!a) return;
  const n = a.replace(/^\/+/, "");
  return (t = j.find((i) => n === i.slug || n.startsWith(i.slug + "/"))) == null ? void 0 : t.slug;
}
function ye({ site: a }) {
  const n = N(a), t = 1600, i = 620;
  return /* @__PURE__ */ l("section", { className: "lx-pano", "aria-labelledby": "lx-pano-title", children: [
    /* @__PURE__ */ e("h2", { id: "lx-pano-title", className: "lx-pano__title", children: n("sections") }),
    /* @__PURE__ */ l("div", { className: "lx-pano__stage", children: [
      /* @__PURE__ */ e("svg", { viewBox: `0 0 ${t} ${i}`, preserveAspectRatio: "xMidYMax slice", "aria-hidden": "true", children: j.map((r) => {
        const o = ue(k(r.slug), r.x / 100 * t, i * (1 - r.height * 0.86), i + 10, 300 + r.height * 170);
        return /* @__PURE__ */ e("a", { href: `/${r.slug}/index.html`, tabIndex: -1, children: /* @__PURE__ */ l("g", { className: "lx-peak", "data-rubric": r.slug, "data-peak": r.slug, children: [
          /* @__PURE__ */ e("path", { className: "lx-peak__lit", d: o.lit }),
          /* @__PURE__ */ e("path", { className: "lx-peak__shade", d: o.shade })
        ] }) }, r.slug);
      }) }),
      /* @__PURE__ */ e("ul", { className: "lx-pano__labels", children: [...j].sort((r, o) => r.x - o.x).map((r) => /* @__PURE__ */ e("li", { "data-rubric": r.slug, "data-label": r.slug, style: { left: `${r.x}%`, top: `${100 - r.height * 86}%` }, children: /* @__PURE__ */ l("a", { href: `/${r.slug}/index.html`, children: [
        /* @__PURE__ */ e("strong", { children: r.name }),
        /* @__PURE__ */ e("span", { children: n(`r.${r.slug}`) })
      ] }) }, r.slug)) })
    ] })
  ] });
}
function H({ seed: a, width: n = 480, height: t = 300, cols: i = 44, className: r }) {
  const o = me(k(a), n, t, i);
  return /* @__PURE__ */ l("svg", { className: `lx-topo ${r ?? ""}`, viewBox: `0 0 ${n} ${t}`, preserveAspectRatio: "xMidYMid slice", "aria-hidden": "true", children: [
    /* @__PURE__ */ e("path", { className: "lx-topo__minor", d: o.minor }),
    /* @__PURE__ */ e("path", { className: "lx-topo__major", d: o.major })
  ] });
}
function D({ posts: a, site: n }) {
  const t = N(n);
  return a.length === 0 ? /* @__PURE__ */ e("p", { className: "lx-empty", children: t("empty") }) : /* @__PURE__ */ e("div", { className: "lx-trail", "data-lx-trail": !0, children: a.map((i, r) => {
    var c;
    const o = we((c = i.category) == null ? void 0 : c.url), s = R(i.hero, r === 0 ? "large" : "medium");
    return /* @__PURE__ */ l("article", { className: `lx-way${r === 0 ? " lx-way--first" : ""}`, "data-rubric": o, children: [
      /* @__PURE__ */ e("span", { className: "lx-way__pin", "aria-hidden": "true" }),
      /* @__PURE__ */ e("a", { className: "lx-way__art", href: "/" + i.url, tabIndex: -1, "aria-hidden": "true", children: s ? /* @__PURE__ */ e("img", { src: s, alt: "", loading: "lazy" }) : /* @__PURE__ */ e(H, { seed: i.slug, cols: r === 0 ? 64 : 44 }) }),
      /* @__PURE__ */ l("div", { className: "lx-way__text", children: [
        /* @__PURE__ */ l("p", { className: "lx-way__meta", children: [
          i.dateLabel && /* @__PURE__ */ e("span", { children: i.dateLabel }),
          i.category && /* @__PURE__ */ e("a", { href: i.category.url, children: i.category.name })
        ] }),
        /* @__PURE__ */ e("h3", { children: /* @__PURE__ */ e("a", { href: "/" + i.url, children: i.title }) }),
        i.excerpt && /* @__PURE__ */ e("p", { className: "lx-way__excerpt", children: i.excerpt })
      ] })
    ] }, i.id);
  }) });
}
function _e({ site: a }) {
  const n = F(a.themeConfig);
  return /* @__PURE__ */ l("section", { className: "lx-hero", "data-lx-hero": !0, children: [
    /* @__PURE__ */ e("canvas", { className: "lx-hero__canvas", "data-lx-back": !0, "aria-hidden": "true" }),
    /* @__PURE__ */ l("div", { className: "lx-hero__copy", children: [
      /* @__PURE__ */ e("p", { className: "lx-hero__tagline", children: n.tagline }),
      /* @__PURE__ */ l("h1", { className: "lx-hero__name", children: [
        /* @__PURE__ */ e("span", { children: n.firstLine }),
        " ",
        /* @__PURE__ */ e("span", { children: n.secondLine })
      ] })
    ] }),
    /* @__PURE__ */ e("svg", { className: "lx-hero__static", viewBox: "0 0 1600 300", preserveAspectRatio: "none", "aria-hidden": "true", children: [0, 1, 2].map((t) => /* @__PURE__ */ e("path", { d: q(k("hero" + t), 1600, 300 - t * 70), transform: `translate(0 ${t * 70})` }, t)) }),
    /* @__PURE__ */ e("canvas", { className: "lx-hero__canvas lx-hero__canvas--front", "data-lx-front": !0, "aria-hidden": "true" })
  ] });
}
function ke({ site: a, posts: n, staticPage: t, archivesLink: i }) {
  const r = N(a);
  return t ? /* @__PURE__ */ e("div", { className: "lx-prose lx-prose--page", dangerouslySetInnerHTML: { __html: t.bodyHtml } }) : /* @__PURE__ */ l(B, { children: [
    /* @__PURE__ */ e(_e, { site: a }),
    /* @__PURE__ */ e(ye, { site: a }),
    /* @__PURE__ */ l("section", { className: "lx-section", "aria-labelledby": "lx-latest", children: [
      /* @__PURE__ */ e("h2", { id: "lx-latest", className: "lx-section__title", children: r("latest") }),
      /* @__PURE__ */ e(D, { posts: n, site: a }),
      i && /* @__PURE__ */ e("p", { className: "lx-more", children: /* @__PURE__ */ e("a", { href: i.href, children: i.label }) })
    ] })
  ] });
}
function Ne({ site: a, post: n, bodyHtml: t, author: i, hero: r, primaryTerm: o, tags: s }) {
  var g;
  const c = N(a), d = R(r, "large"), h = n.type === "post", m = (g = j.find((f) => f.slug === (o == null ? void 0 : o.slug))) == null ? void 0 : g.slug, v = new Date(ae(n));
  let b = "";
  try {
    b = new Intl.DateTimeFormat(a.settings.language || "fr", { dateStyle: "long" }).format(v);
  } catch {
    b = v.toDateString();
  }
  const M = n.contentMarkdown.trim().split(/\s+/).length, A = Math.max(1, Math.round(M / 220));
  return /* @__PURE__ */ l("article", { "data-rubric": m, className: `lx-article${h ? "" : " lx-article--page"}${n.slug === "qui-suis-je" ? " lx-article--about" : ""}`, children: [
    /* @__PURE__ */ l("header", { className: "lx-band lx-band--article", children: [
      /* @__PURE__ */ e(H, { seed: n.slug, width: 1600, height: 720, cols: 110, className: "lx-band__art" }),
      /* @__PURE__ */ l("div", { className: "lx-band__inner", children: [
        h && o && /* @__PURE__ */ e("a", { className: "lx-band__rubric", href: `/${ie(o)}`, children: o.name }),
        /* @__PURE__ */ e("h1", { children: n.title }),
        n.excerpt && /* @__PURE__ */ e("p", { className: "lx-band__lead", children: n.excerpt }),
        h && /* @__PURE__ */ l("p", { className: "lx-band__count", children: [
          i && /* @__PURE__ */ e("span", { children: i.url ? /* @__PURE__ */ e("a", { href: i.url, children: i.displayName }) : i.displayName }),
          /* @__PURE__ */ e("time", { dateTime: v.toISOString(), children: b }),
          /* @__PURE__ */ l("span", { children: [
            A,
            " ",
            c("minutes")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("svg", { className: "lx-band__edge", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: q(k(n.slug), 1600, 90) }) })
    ] }),
    d && /* @__PURE__ */ l("figure", { className: "lx-figure", children: [
      /* @__PURE__ */ e("img", { src: d, alt: (r == null ? void 0 : r.alt) ?? "" }),
      (r == null ? void 0 : r.caption) && /* @__PURE__ */ e("figcaption", { children: r.caption })
    ] }),
    /* @__PURE__ */ e("div", { className: "lx-prose", "data-lx-prose": !0, dangerouslySetInnerHTML: { __html: t } }),
    h && s.length > 0 && /* @__PURE__ */ e("ul", { className: "lx-tags", "aria-label": c("tags"), children: s.map((f) => /* @__PURE__ */ e("li", { children: f.name }, f.id)) }),
    h && /* @__PURE__ */ l(B, { children: [
      /* @__PURE__ */ l("section", { className: "lx-related", "data-lx-related": !0, "data-current": n.id, "data-term": n.primaryTermId, hidden: !0, children: [
        /* @__PURE__ */ e("h2", { children: c("continue") }),
        /* @__PURE__ */ e("div", { className: "lx-related__list" })
      ] }),
      /* @__PURE__ */ l("div", { className: "lx-climb", "data-lx-climb": !0, hidden: !0, "aria-hidden": "true", children: [
        /* @__PURE__ */ l("svg", { viewBox: "0 0 1600 60", preserveAspectRatio: "none", children: [
          /* @__PURE__ */ e("path", { className: "lx-climb__base", d: Q(k(n.slug), 1600, 60) }),
          /* @__PURE__ */ e("path", { className: "lx-climb__done", d: Q(k(n.slug), 1600, 60) })
        ] }),
        /* @__PURE__ */ e("span", { className: "lx-climb__dot" })
      ] })
    ] })
  ] });
}
function Me({ site: a, term: n, posts: t, archivesLink: i }) {
  var c;
  const r = N(a), o = (c = j.find((d) => d.slug === n.slug)) == null ? void 0 : c.slug, s = n.description || (o ? r(`r.${o}`) : "");
  return /* @__PURE__ */ l(B, { children: [
    /* @__PURE__ */ l("header", { className: "lx-band lx-band--category", "data-rubric": o, children: [
      /* @__PURE__ */ e(H, { seed: n.slug, width: 1600, height: 620, cols: 110, className: "lx-band__art" }),
      /* @__PURE__ */ l("div", { className: "lx-band__inner", children: [
        /* @__PURE__ */ e("h1", { children: n.name }),
        s && /* @__PURE__ */ e("p", { className: "lx-band__lead", children: s }),
        /* @__PURE__ */ l("p", { className: "lx-band__count", children: [
          t.length,
          " ",
          r(t.length > 1 ? "articles" : "article")
        ] })
      ] }),
      /* @__PURE__ */ e("svg", { className: "lx-band__edge", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: q(k(n.slug), 1600, 90) }) })
    ] }),
    /* @__PURE__ */ l("section", { className: "lx-section lx-section--flush", "data-rubric": o, children: [
      /* @__PURE__ */ e(D, { posts: t, site: a }),
      i && /* @__PURE__ */ e("p", { className: "lx-more", children: /* @__PURE__ */ e("a", { href: i.href, children: i.label }) })
    ] })
  ] });
}
function ze({ site: a, author: n, posts: t }) {
  const i = R(n.avatar, "small");
  return /* @__PURE__ */ l(B, { children: [
    /* @__PURE__ */ l("header", { className: "lx-band lx-band--author", children: [
      /* @__PURE__ */ e(H, { seed: n.displayName, width: 1600, height: 620, cols: 110, className: "lx-band__art" }),
      /* @__PURE__ */ l("div", { className: "lx-band__inner", children: [
        i && /* @__PURE__ */ e("img", { className: "lx-avatar", src: i, alt: "", width: 120, height: 120 }),
        /* @__PURE__ */ e("h1", { children: n.displayName }),
        n.title && /* @__PURE__ */ e("p", { className: "lx-band__lead", children: n.title }),
        n.bio && /* @__PURE__ */ e("p", { className: "lx-band__bio", children: n.bio }),
        n.socials && n.socials.length > 0 && /* @__PURE__ */ e("ul", { className: "lx-socials", children: n.socials.map((r) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: r.url, rel: "me noopener", "aria-label": le(r.network), children: /* @__PURE__ */ e(re, { network: r.network }) }) }, r.network)) })
      ] }),
      /* @__PURE__ */ e("svg", { className: "lx-band__edge", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: q(k(n.id), 1600, 90) }) })
    ] }),
    /* @__PURE__ */ e("section", { className: "lx-section lx-section--flush", children: /* @__PURE__ */ e(D, { posts: t, site: a }) })
  ] });
}
function Se({ site: a, message: n }) {
  const t = N(a);
  return /* @__PURE__ */ l("section", { className: "lx-lost", children: [
    /* @__PURE__ */ e(H, { seed: "hors-sentier", width: 1600, height: 900, cols: 120, className: "lx-lost__art" }),
    /* @__PURE__ */ l("div", { className: "lx-lost__copy", children: [
      /* @__PURE__ */ e("p", { className: "lx-lost__code", children: "404" }),
      /* @__PURE__ */ e("h1", { children: t("notFoundTitle") }),
      /* @__PURE__ */ e("p", { children: n ?? t("notFoundText") }),
      /* @__PURE__ */ e("a", { className: "lx-button", href: a.homePath ?? "/index.html", children: t("backHome") })
    ] })
  ] });
}
function Le({ config: a, save: n }) {
  const { t } = ce("theme-leaux-altitude"), [i, r] = Y(F(a)), [o, s] = Y(!1);
  se(() => r(F(a)), [a]);
  async function c(d) {
    d.preventDefault(), s(!0);
    try {
      await n({ ...a, hero: i }), oe.success(t("settings.saved"));
    } finally {
      s(!1);
    }
  }
  return /* @__PURE__ */ l("form", { onSubmit: c, "data-form-type": "other", className: "max-w-xl space-y-4", children: [
    /* @__PURE__ */ e("h1", { className: "text-xl font-semibold", children: t("settings.title") }),
    ["firstLine", "secondLine", "tagline"].map((d) => /* @__PURE__ */ l("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ e("span", { className: "label", children: t(`settings.${d}`) }),
      /* @__PURE__ */ e("input", { className: "input w-full", value: i[d], onChange: (h) => r({ ...i, [d]: h.target.value }) })
    ] }, d)),
    /* @__PURE__ */ e("button", { type: "submit", className: "btn btn-primary", disabled: o, children: /* @__PURE__ */ e("span", { children: t("settings.save") }) })
  ] });
}
const Ae = {
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
      r: { "transition-ia": "Ce que j'ai fait, ce que j'en retiens", "mes-projets": "Ce que je construis à côté", passions: "Treks, sommets et le reste", "news-tech-ia": "L'actu du développement avec l'IA", edito: "Travail, management, humeurs" }
    },
    settings: { navLabel: "Leaux Altitude", title: "Réglages Leaux Altitude", firstLine: "Titre, première ligne", secondLine: "Titre, deuxième ligne", tagline: "Accroche", save: "Enregistrer", saved: "Enregistré. Lancez Régénérer → Accueil pour publier." }
  }
}, qe = {
  id: "leaux-altitude",
  name: "Leaux Altitude",
  version: "1.0.7",
  description: "Dedicated theme for leaux.ovh: generative topographic art, one trail per section.",
  readme: pe,
  scssEntry: "theme.css",
  cssText: de,
  // Uploaded as theme-assets/leaux-altitude-menu.js; fills the menus from
  // data/menu.json so menu edits don't require regenerating every page.
  jsText: he,
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
    base: ve,
    home: ke,
    single: Ne,
    category: Me,
    author: ze,
    notFound: Se
  },
  // /theme-settings page: hero texts.
  settings: { navLabelKey: "settings.navLabel", defaultConfig: V, component: Le, schema: be },
  // Translations, namespace "theme-leaux-altitude" (admin UI + public labels).
  i18n: Ae
};
export {
  qe as default
};
