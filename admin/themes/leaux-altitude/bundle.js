import { jsxs as o, jsx as e, Fragment as B } from "react/jsx-runtime";
import { i18n as pe, pickPublicLocale as xe, canonicalUrl as ne, pickFormat as I, buildPostUrl as he, postSortMillis as R, buildTermUrl as ae, SocialIcon as me, socialLabel as ge, toast as ue } from "@agent-cms/runtime";
import { useState as Z, useEffect as fe } from "react";
import { useTranslation as be } from "react-i18next";
const ve = `@import url("https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&display=swap");

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

/* Home: one block per section */
.lx-shelves { display: grid; gap: clamp(72px, 9vw, 128px); max-width: 1320px; margin: 0 auto; padding: clamp(40px, 6vw, 80px) var(--lx-gutter) clamp(110px, 12vw, 170px); }
.lx-shelf__head { position: relative; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 14px 32px; padding-bottom: 20px; border-bottom: 2px solid var(--lx-line); }
.lx-shelf__head::after { content: ""; position: absolute; left: 0; bottom: -2px; width: clamp(80px, 12vw, 160px); height: 2px; background: var(--lx-tint); }
.lx-shelf__title { display: flex; align-items: center; gap: .32em; font-size: clamp(2.1rem, 4.4vw, 3.8rem); font-weight: 900; font-stretch: 118%; letter-spacing: -.028em; line-height: 1; }
.lx-shelf__title svg { flex: none; width: .78em; height: .5em; fill: var(--lx-tint); }
.lx-shelf__title a { text-decoration: none; transition: color .2s; }
.lx-shelf__title a:hover { color: var(--lx-deep); }
.lx-shelf__tag { margin: 10px 0 0; font: italic 400 clamp(1.1rem, 1.5vw, 1.3rem)/1.35 var(--lx-serif); color: var(--lx-muted); }
.lx-shelf__all { display: inline-flex; align-items: center; gap: 10px; padding-bottom: 4px; font-weight: 700; white-space: nowrap; text-decoration: none; color: var(--lx-deep) !important; }
.lx-shelf__all svg, .lx-feature__cta svg { flex: none; }
.lx-shelf__all svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; transition: transform .25s; }
.lx-shelf__all:hover svg { transform: translateX(4px); }
.lx-shelf__grid { display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: clamp(28px, 4vw, 64px); margin-top: clamp(28px, 3.5vw, 44px); }
.lx-shelf__side { display: grid; align-content: start; gap: clamp(22px, 2.6vw, 34px); }
.lx-shelf__side .lx-card + .lx-card { padding-top: clamp(22px, 2.6vw, 34px); border-top: 1px solid var(--lx-line); }
.lx-card { position: relative; }
.lx-card__art { position: relative; display: block; overflow: hidden; aspect-ratio: 16 / 10; background: var(--lx-tint); color: var(--lx-night); clip-path: polygon(0 6%, 14% 0, 34% 4%, 57% 0, 78% 4%, 100% 0, 100% 100%, 0 100%); }
.lx-card__art img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s cubic-bezier(.2, .7, .2, 1); }
.lx-card:hover .lx-card__art img { transform: scale(1.04); }
.lx-card__meta { margin: 0 0 8px; font-size: .9rem; font-weight: 600; color: var(--lx-muted); }
.lx-card h3 { font-size: 1.3rem; font-weight: 780; font-stretch: 104%; line-height: 1.14; letter-spacing: -.008em; }
.lx-card h3 a { text-decoration: none; background: linear-gradient(var(--lx-tint), var(--lx-tint)) 0 100% / 0 3px no-repeat; transition: background-size .3s; }
.lx-card h3 a:hover { background-size: 100% 3px; }
.lx-card--lead .lx-card__text { margin-top: 22px; }
.lx-card--lead h3 { font-size: clamp(1.7rem, 2.8vw, 2.6rem); font-weight: 850; font-stretch: 108%; line-height: 1.04; letter-spacing: -.015em; }
.lx-card__excerpt { max-width: 52ch; margin: 12px 0 0; font: 400 1.18rem/1.45 var(--lx-serif); color: var(--lx-muted); }
.lx-card:not(.lx-card--lead) { display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 3fr); gap: 20px; align-items: center; }
.lx-card:not(.lx-card--lead) .lx-card__art { aspect-ratio: 3 / 2; clip-path: polygon(0 8%, 30% 0, 62% 6%, 100% 0, 100% 100%, 0 100%); }
.lx-shelf__grid--solo { grid-template-columns: minmax(0, 1fr); }
.lx-shelf__grid--solo .lx-card--lead { display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: clamp(28px, 4vw, 64px); align-items: center; }
.lx-shelf__grid--solo .lx-card--lead .lx-card__text { margin-top: 0; }
.lx-shelves__more { margin: 0; padding-top: 28px; border-top: 2px solid var(--lx-line); text-align: center; }
.lx-shelves__more a { display: inline-block; padding: 14px 26px; border: 2px solid currentColor; text-decoration: none; transition: background-color .2s, color .2s; }
.lx-shelves__more a:hover { background: var(--lx-text); color: var(--lx-bg); }

/* Home: "Mes projets", one round logo per project */
.lx-projects { position: relative; isolation: isolate; overflow: hidden; margin: 0 calc(50% - 50vw); padding: clamp(110px, 12vw, 170px) 0; background: var(--lx-night); color: var(--lx-glacier); }
.lx-projects::before { content: ""; position: absolute; inset: 0; z-index: -1; background: radial-gradient(60% 80% at 85% 30%, color-mix(in srgb, var(--lx-tint) 22%, transparent), transparent 70%), radial-gradient(50% 70% at 5% 100%, color-mix(in srgb, var(--lx-tint) 14%, transparent), transparent 70%); }
.lx-projects__art { position: absolute; inset: 0; z-index: -2; color: var(--lx-tint); opacity: .14; }
.lx-projects__edge { position: absolute; left: 0; bottom: -1px; width: 100%; height: clamp(44px, 7vw, 90px); }
.lx-projects__edge--top { top: -1px; bottom: auto; transform: rotate(180deg); }
.lx-projects__edge path { fill: var(--lx-bg); }
.lx-projects__inner { max-width: 1320px; margin: 0 auto; padding: 0 var(--lx-gutter); }
.lx-projects .lx-shelf__head { border-color: rgba(232, 239, 243, .18); }
.lx-projects .lx-shelf__tag { color: #c3cbea; }
.lx-projects .lx-shelf__title a:hover, .lx-projects .lx-shelf__all { color: var(--lx-tint) !important; }
.lx-projects__list { display: flex; flex-wrap: wrap; gap: clamp(32px, 5vw, 72px); margin: clamp(44px, 5vw, 72px) 0 0; padding: 0; list-style: none; }
.lx-projects__list a { display: flex; flex-direction: column; align-items: center; width: clamp(132px, 13vw, 176px); text-align: center; text-decoration: none; }
.lx-projects__logo { display: grid; place-items: center; width: clamp(112px, 10.5vw, 148px); aspect-ratio: 1; overflow: hidden; border-radius: 50%; background: #fff; box-shadow: 0 0 0 5px var(--lx-night), 0 0 0 7px var(--lx-tint), 0 22px 44px rgba(0, 0, 0, .38); transition: transform .4s cubic-bezier(.2, .9, .3, 1.2), box-shadow .3s; }
.lx-projects__logo img { width: 100%; height: 100%; object-fit: cover; }
.lx-projects__logo:not(:has(img)) { background: linear-gradient(140deg, var(--lx-tint), var(--lx-deep)); }
.lx-projects__logo > span { font-size: clamp(2rem, 3vw, 2.8rem); font-weight: 900; font-stretch: 120%; letter-spacing: -.02em; color: var(--lx-night); }
.lx-projects__list a:hover .lx-projects__logo, .lx-projects__list a:focus-visible .lx-projects__logo { transform: translateY(-8px); box-shadow: 0 0 0 5px var(--lx-night), 0 0 0 8px var(--lx-tint), 0 0 0 18px color-mix(in srgb, var(--lx-tint) 18%, transparent), 0 28px 50px rgba(0, 0, 0, .45); }
.lx-projects__name { margin-top: 24px; font-size: 1.25rem; font-weight: 800; font-stretch: 108%; line-height: 1.15; }
.lx-projects__list a:hover .lx-projects__name { color: var(--lx-tint); }
.lx-projects__tag { margin-top: 6px; font: italic 400 1rem/1.35 var(--lx-serif); color: #c3cbea; }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .lx-projects { background: var(--lx-night-2); }
  :root:not([data-theme="light"]) .lx-projects__logo { box-shadow: 0 0 0 5px var(--lx-night-2), 0 0 0 7px var(--lx-tint), 0 22px 44px rgba(0, 0, 0, .38); }
}
:root[data-theme="dark"] .lx-projects { background: var(--lx-night-2); }

/* Home ends with the orientation table, straight into the footer */
.lx-pano__edge { position: absolute; left: 0; top: -1px; width: 100%; height: clamp(44px, 7vw, 90px); transform: rotate(180deg); }
.lx-pano__edge path { fill: var(--lx-bg); }
main:has(> .lx-pano:last-child) ~ .lx-footer { margin-top: 0; }
main:has(> .lx-pano:last-child) ~ .lx-footer .lx-footer__ridge { display: none; }

@media (max-width: 760px) {
  .lx-shelf__grid, .lx-shelf__grid--solo .lx-card--lead { grid-template-columns: minmax(0, 1fr); }
  .lx-shelf__grid--solo .lx-card--lead .lx-card__text { margin-top: 0; }
  .lx-card:not(.lx-card--lead) { grid-template-columns: 112px minmax(0, 1fr); gap: 16px; }
  .lx-card:not(.lx-card--lead) .lx-card__art { aspect-ratio: 1; }
  .lx-card h3 { font-size: 1.12rem; }
  .lx-projects__list { justify-content: center; gap: 36px 24px; }
  .lx-projects__list a { width: 140px; }
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
/* Same size as the home's featured title (.lx-feature__title) from desktop up; 2.5rem floor keeps phones unchanged. */
.lx-band--article h1 { max-width: 18ch; font-size: clamp(2.5rem, 5.2vw, 5rem); font-stretch: 112%; line-height: .98; }
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
  .lx-feature__kicker > span:last-child::before { display: none; }
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

/* Parallax of the section / photo bands, driven by the scroll on the compositor
   (smooth on phones). Browsers without scroll-driven animations use the JS
   fallback in menu-loader.js (mouse only). */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    /* Inset 0: the default (auto) takes html's scroll-padding-top (88 px, 132 px
       with a table of contents) and would start the animation before any scroll. */
    .lx-band--category, .lx-band--photo { view-timeline: --lx-band block; view-timeline-inset: 0; }
    .lx-band--category .lx-band__art, .lx-band--photo .lx-band__art { animation: lx-par-art linear both; animation-timeline: --lx-band; animation-range: exit-crossing 0% exit-crossing 100%; }
    .lx-band--category .lx-band__inner, .lx-band--photo .lx-band__inner { animation: lx-par-inner linear both; animation-timeline: --lx-band; animation-range: exit-crossing 0% exit-crossing 90%; }
  }
}
@keyframes lx-par-art { from { transform: translate3d(0, 0, 0) scale(1); } to { transform: translate3d(0, 42%, 0) scale(1.17); } }
@keyframes lx-par-inner { from { transform: translate3d(0, 0, 0); opacity: 1; } to { transform: translate3d(0, 30%, 0); opacity: 0; } }

/* Observatoire de l'IA: dashboard page (candidate for leaux-altitude 1.8.0). */
.lx-obs { --obs-0: #8a93b8; --obs-1: #4a2fd0; --obs-2: #0b8577; --obs-3: #c8461d; max-width: 1320px; margin: 0 auto; padding: clamp(28px, 4vw, 56px) var(--lx-gutter) clamp(90px, 10vw, 150px); font-family: var(--lx-display); }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .lx-obs { --obs-0: #7d86b3; --obs-1: #9a85ff; --obs-2: #14c9ac; --obs-3: #ff7a4d; }
}
.lx-obs__updated { display: flex; align-items: center; gap: 10px; margin: 0 0 18px; color: var(--lx-muted); font: 700 .78rem/1.3 var(--lx-display); letter-spacing: .06em; text-transform: uppercase; }
.lx-obs__live { width: 9px; height: 9px; border-radius: 50%; background: var(--obs-2); box-shadow: 0 0 0 0 color-mix(in srgb, var(--obs-2) 60%, transparent); animation: lx-obs-pulse 2.4s infinite; }
@keyframes lx-obs-pulse { 70% { box-shadow: 0 0 0 9px transparent; } 100% { box-shadow: 0 0 0 0 transparent; } }
@media (prefers-reduced-motion: reduce) { .lx-obs__live { animation: none; } }

/* Section accents (light, then dark). --acc fills marks, --acc-ink is the text-safe shade. */
.lx-obs [data-acc="securite"], .lx-obs[data-acc="securite"] { --acc: #d4531f; --acc-ink: #b33f10; }
.lx-obs [data-acc="adoption"] { --acc: #5b3ce0; --acc-ink: #4a2fd0; }
.lx-obs [data-acc="emploi"] { --acc: #0f9a88; --acc-ink: #0a7a6c; }
.lx-obs [data-acc="couts"] { --acc: #1a73d9; --acc-ink: #0b5bb5; }
.lx-obs [data-acc="modeles"] { --acc: #b8358f; --acc-ink: #9a2476; }
.lx-obs [data-acc="economie"] { --acc: #2f8f3a; --acc-ink: #23722c; }
.lx-obs [data-acc="energie"] { --acc: #d18b00; --acc-ink: #8f5e00; }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .lx-obs [data-acc="securite"] { --acc: #ff7a4d; --acc-ink: #ff8f68; }
  :root:not([data-theme="light"]) .lx-obs [data-acc="adoption"] { --acc: #9a85ff; --acc-ink: #ad9cff; }
  :root:not([data-theme="light"]) .lx-obs [data-acc="emploi"] { --acc: #14c9ac; --acc-ink: #3fd8bf; }
  :root:not([data-theme="light"]) .lx-obs [data-acc="couts"] { --acc: #45a8ff; --acc-ink: #6cbaff; }
  :root:not([data-theme="light"]) .lx-obs [data-acc="modeles"] { --acc: #f070c8; --acc-ink: #f58fd5; }
  :root:not([data-theme="light"]) .lx-obs [data-acc="economie"] { --acc: #5fd36a; --acc-ink: #7ddd86; }
  :root:not([data-theme="light"]) .lx-obs [data-acc="energie"] { --acc: #ffc53d; --acc-ink: #ffd36a; }
}
.lx-obs .sa { --c: var(--acc); }

/* Compact header: title and lead side by side, key figures overlap the band so they show without scrolling. */
.lx-band--obs .lx-band__inner { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: end; gap: 14px clamp(28px, 4vw, 64px); padding: clamp(22px, 3vw, 40px) var(--lx-gutter) clamp(96px, 9vw, 124px); }
.lx-band--obs .lx-band__rubric { margin: 0; justify-self: start; }
.lx-band--obs .lx-obs__updated { margin: 0; align-self: center; color: inherit; opacity: .8; }
.lx-band--obs h1 { max-width: none; font-size: clamp(2.3rem, 4.4vw, 4rem); white-space: nowrap; }
.lx-band--obs .lx-band__lead { max-width: 44ch; margin: 0; font-size: clamp(1.05rem, 1.45vw, 1.32rem); line-height: 1.3; }
.lx-band--obs .lx-obs__live { background: var(--lx-night); }
.lx-band--obs + .lx-dash > .lx-obs { position: relative; z-index: 2; margin-top: clamp(-84px, -6vw, -48px); padding-top: 0; }
.lx-band--obs + .lx-dash > .lx-obs .lx-obs__kpis { box-shadow: 0 24px 48px -28px rgba(16, 22, 63, .5); }
@media (max-width: 900px) {
  .lx-band--obs .lx-band__inner { grid-template-columns: minmax(0, 1fr); gap: 10px; }
  .lx-band--obs h1 { white-space: normal; }
  .lx-band--obs .lx-obs__updated { order: 3; }
}
/* Key figures */
.lx-obs__kpis { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(10px, 1.2vw, 16px); margin: 0; padding: 0; list-style: none; }
.lx-obs__kpis li { min-width: 0; }
.lx-obs__kpis a { position: relative; isolation: isolate; display: flex; flex-direction: column; height: 100%; box-sizing: border-box; overflow: hidden; padding: clamp(14px, 1.6vw, 20px) clamp(16px, 1.8vw, 22px) clamp(14px, 1.6vw, 18px); border: 2px solid var(--lx-text); background: radial-gradient(120% 90% at 100% 0%, color-mix(in srgb, var(--acc) 13%, transparent), transparent 60%), var(--lx-snow); color: inherit; text-decoration: none; transition: transform .25s cubic-bezier(.2, .7, .2, 1), box-shadow .25s; }
.lx-obs__kpis a::before { content: ""; position: absolute; inset: 0 0 auto; height: 5px; background: var(--acc); }
.lx-obs__kpis a:hover { transform: translateY(-3px); box-shadow: 0 14px 28px -16px color-mix(in srgb, var(--acc) 70%, transparent); }
.lx-obs__kcat { display: flex; align-items: center; gap: 7px; margin-top: 2px; color: var(--lx-muted); font: 800 .68rem/1 var(--lx-display); letter-spacing: .09em; text-transform: uppercase; }
.lx-obs__kcat::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--acc); }
.lx-obs__kpis strong { margin-top: 12px; color: var(--acc-ink); font: 900 clamp(2rem, 3.4vw, 3rem)/1 var(--lx-display); font-stretch: 112%; letter-spacing: -.02em; font-variant-numeric: tabular-nums; white-space: nowrap; }
.lx-obs__klab { position: relative; z-index: 1; max-width: 26ch; margin: 8px 0 14px; font: 600 .95rem/1.3 var(--lx-display); }
.lx-obs__kpis em { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 6px; align-self: flex-start; margin-top: auto; padding: 4px 10px 4px 8px; border-radius: 999px; background: color-mix(in srgb, var(--acc) 15%, var(--lx-snow)); color: var(--acc-ink); font: 700 .76rem/1.2 var(--lx-display); font-style: normal; font-variant-numeric: tabular-nums; }
.lx-obs__kpis em b { font-size: 1.1em; line-height: 1; }
/* Home teaser: the page's key figures, copied at runtime (menu-loader.js). */
.lx-obs--home { max-width: none; margin: clamp(22px, 2.6vw, 32px) 0 0; padding: 0; }
.lx-obs-home__skel li { min-height: clamp(168px, 15vw, 196px); border: 2px solid var(--lx-line); background: linear-gradient(100deg, transparent 30%, color-mix(in srgb, var(--lx-tint) 9%, transparent) 50%, transparent 70%) 0 0 / 300% 100%, var(--lx-snow); animation: lx-obs-shimmer 1.6s linear infinite; }
@keyframes lx-obs-shimmer { to { background-position: -150% 0, 0 0; } }
.lx-obs--home .lx-obs__updated { margin: 16px 0 0; }
@media (prefers-reduced-motion: reduce) { .lx-obs-home__skel li { animation: none; } }
.lx-obs__spark { position: absolute; right: 0; bottom: 0; z-index: -1; width: 58%; height: 46%; overflow: visible; }
.lx-obs__spark path { fill: none; stroke: var(--acc); stroke-width: 2px; stroke-linejoin: round; vector-effect: non-scaling-stroke; opacity: .85; }
.lx-obs__spark path.is-area { fill: color-mix(in srgb, var(--acc) 16%, transparent); stroke: none; }
@media (max-width: 900px) { .lx-obs__kpis { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 520px) { .lx-obs__kpis strong { font-size: 1.9rem; } .lx-obs__klab { font-size: .84rem; } .lx-obs__kpis em { font-size: .7rem; } }

/* Section nav */
.lx-obs__nav { --lx-obs-top: 0px; position: sticky; top: var(--lx-obs-top); z-index: 5; transition: top .35s cubic-bezier(.2, .7, .2, 1); margin: clamp(36px, 5vw, 64px) calc(var(--lx-gutter) * -1) 0; padding: 12px var(--lx-gutter); background: color-mix(in srgb, var(--lx-bg) 92%, transparent); backdrop-filter: blur(8px); border-bottom: 1px solid var(--lx-line); }
/* Follows the headroom header: glued to the top when it hides, under it when it shows (like .lx-toc). */
body:has(.lx-header:not(.is-hidden)) .lx-obs__nav { --lx-obs-top: 68px; }
@media (prefers-reduced-motion: reduce) { .lx-obs__nav { transition: none; } }
.lx-obs__nav ol { display: flex; gap: 8px; margin: 0; padding: 0; list-style: none; overflow-x: auto; scrollbar-width: none; }
.lx-obs__nav a { display: block; padding: 7px 14px; border: 2px solid var(--lx-text); border-radius: 999px; color: inherit; font: 700 .85rem/1 var(--lx-display); text-decoration: none; white-space: nowrap; }
.lx-obs__nav a:hover { background: var(--lx-text); color: var(--lx-bg); }

/* Sections */
.lx-obs__sec { scroll-margin-top: 140px; padding-top: clamp(48px, 6vw, 88px); }
.lx-obs__sec > header { position: relative; display: grid; grid-template-columns: auto 1fr; align-items: baseline; gap: 4px 18px; margin-bottom: clamp(20px, 3vw, 32px); padding-bottom: 18px; border-bottom: 2px solid var(--lx-line); }
.lx-obs__sec > header::after { content: ""; position: absolute; left: 0; bottom: -2px; width: clamp(80px, 12vw, 160px); height: 2px; background: var(--acc, var(--obs-1)); height: 3px; }
.lx-obs__num { color: var(--acc-ink, var(--obs-1)); font: 800 1rem/1 var(--lx-display); font-variant-numeric: tabular-nums; }
.lx-obs__sec h2 { font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 800; font-stretch: 112%; letter-spacing: -.02em; line-height: 1; }
.lx-obs__sec > header p { grid-column: 2; margin: 6px 0 0; color: var(--lx-muted); font: italic 400 clamp(1.08rem, 1.4vw, 1.25rem)/1.35 var(--lx-serif); }
.lx-obs__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
@media (max-width: 960px) { .lx-obs__grid { grid-template-columns: minmax(0, 1fr); } }

/* Cards */
.lx-obs__card { display: flex; flex-direction: column; min-width: 0; margin: 0; padding: clamp(18px, 2.4vw, 28px); border: 2px solid var(--lx-text); border-top: 5px solid var(--acc, var(--lx-text)); background: var(--lx-snow); scroll-margin-top: 140px; }
.lx-obs__card.is-wide { grid-column: 1 / -1; }
.lx-obs__card h3 { font-size: 1.18rem; font-weight: 800; line-height: 1.25; }
.lx-obs__take { margin: 8px 0 20px; font: 400 1.08rem/1.45 var(--lx-serif); }
.lx-obs__src { margin: auto 0 0; padding-top: 16px; color: var(--lx-muted); font: 500 .76rem/1.45 var(--lx-display); }
.lx-obs__src a { color: inherit; text-underline-offset: 2px; }
.lx-obs__legend { display: flex; flex-wrap: wrap; gap: 6px 18px; margin: -6px 0 14px; padding: 0; list-style: none; font: 600 .8rem/1.3 var(--lx-display); }
.lx-obs__legend li { display: flex; align-items: center; gap: 7px; }
.lx-obs__legend i { width: 14px; height: 4px; border-radius: 2px; background: var(--c); }

/* Series colors */
.lx-obs .s0 { --c: var(--obs-0); } .lx-obs .s1 { --c: var(--obs-1); } .lx-obs .s2 { --c: var(--obs-2); } .lx-obs .s3 { --c: var(--obs-3); }

/* Plot */
.lx-obs__chart { position: relative; padding: 8px 84px 0 44px; }
.lx-obs__plot { position: relative; height: var(--h, 230px); border-bottom: 1px solid var(--lx-text); }
.lx-obs__plot.is-cols { margin-right: -72px; }
.lx-obs__gy { position: absolute; left: 0; right: 0; height: 0; border-top: 1px solid color-mix(in srgb, var(--lx-line) 75%, transparent); }
.lx-obs__gy b { position: absolute; right: calc(100% + 8px); transform: translateY(-50%); color: var(--lx-muted); font: 600 .72rem/1 var(--lx-display); font-variant-numeric: tabular-nums; white-space: nowrap; }
.lx-obs__plot svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.lx-obs__plot svg { color: var(--c); }
.lx-obs__plot path.is-area { stroke: none; }
.lx-obs__plot path:not(.is-area) { fill: none; stroke: var(--c); stroke-width: 2.5px; stroke-linejoin: round; stroke-linecap: round; vector-effect: non-scaling-stroke; }
.lx-obs__plot path.is-dash { stroke-dasharray: 3 5; }
.lx-obs__dot { position: absolute; width: 10px; height: 10px; border-radius: 50%; background: var(--c); box-shadow: 0 0 0 2px var(--lx-snow); transform: translate(-50%, -50%); }
.lx-obs__end { position: absolute; left: calc(100% + 12px); display: flex; flex-direction: column; transform: translateY(-50%); color: var(--lx-muted); font: 600 .72rem/1.15 var(--lx-display); white-space: nowrap; }
.lx-obs__end small { font-size: 1em; }
.lx-obs__end b { color: var(--lx-text); font-size: 1.15em; font-weight: 800; font-variant-numeric: tabular-nums; }
.lx-obs__xl { position: relative; height: 16px; margin-top: 8px; color: var(--lx-muted); font: 600 .72rem/1 var(--lx-display); }
.lx-obs__xl span { position: absolute; transform: translateX(-50%); white-space: nowrap; }
.lx-obs__cols { position: absolute; inset: 0; display: grid; grid-template-columns: repeat(var(--n), minmax(0, 1fr)); align-items: end; gap: 2px; }
.lx-obs__cols span { height: calc(var(--v) * 100%); min-height: 2px; border-radius: 3px 3px 0 0; background: color-mix(in srgb, var(--acc) 30%, var(--lx-snow)); outline: none; transition: filter .15s; }
.lx-obs__cols span.is-hi { background: linear-gradient(to top, color-mix(in srgb, var(--acc) 78%, var(--lx-snow)), var(--acc)); }
.lx-obs__cols span.is-part { background: repeating-linear-gradient(135deg, var(--acc) 0 5px, color-mix(in srgb, var(--acc) 35%, transparent) 5px 8px); }
.lx-obs__cols span:hover, .lx-obs__cols span:focus-visible { filter: brightness(1.2) saturate(1.2); }
.lx-obs__pt { position: absolute; width: 11px; height: 11px; border-radius: 50%; background: color-mix(in srgb, var(--acc) 72%, transparent); box-shadow: 0 0 0 2px var(--lx-snow); transform: translate(-50%, -50%); outline: none; }
.lx-obs__pt:hover, .lx-obs__pt:focus-visible { z-index: 3; background: var(--acc); width: 15px; height: 15px; }
.lx-obs__hover { position: absolute; z-index: 6; top: 0; padding: 7px 10px; border-radius: 6px; background: var(--lx-text); color: var(--lx-bg); font: 600 .78rem/1.35 var(--lx-display); white-space: nowrap; pointer-events: none; transform: translateX(-50%); }
.lx-obs__hover b { display: block; margin-bottom: 2px; font-weight: 800; }
.lx-obs__hover i { display: inline-block; width: 8px; height: 8px; margin-right: 6px; border-radius: 50%; background: var(--c); }
.lx-obs__cross { position: absolute; top: 0; bottom: 0; width: 0; border-left: 1px dashed var(--lx-muted); pointer-events: none; }

/* Horizontal bars */
.lx-obs__bars { display: grid; gap: 12px; margin: 0; padding: 0; list-style: none; }
.lx-obs__bars li { display: grid; grid-template-columns: minmax(96px, 36%) 1fr; align-items: center; gap: 12px; font: 600 .86rem/1.25 var(--lx-display); }
.lx-obs__bars li > span { min-width: 0; overflow-wrap: anywhere; }
.lx-obs__bars em { display: block; color: var(--lx-muted); font: 500 .74rem/1.3 var(--lx-display); font-style: normal; }
.lx-obs__bars b { display: flex; align-items: center; gap: 8px; font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; }
.lx-obs__bars b i { flex: none; width: calc(var(--v) * (100% - 76px)); min-width: 2px; height: 14px; border-radius: 0 4px 4px 0; background: color-mix(in srgb, var(--acc) 34%, var(--lx-snow)); }
.lx-obs__bars li.is-hi b i { background: linear-gradient(90deg, color-mix(in srgb, var(--acc) 70%, var(--lx-snow)), var(--acc)); }
.lx-obs__bars li.is-proj b i { background: repeating-linear-gradient(135deg, var(--obs-0) 0 5px, color-mix(in srgb, var(--obs-0) 35%, transparent) 5px 8px); }
.lx-obs__bars li.is-gap { color: var(--lx-muted); }

.lx-obs__bars.is-div li.is-pos b i { background: var(--acc); }
.lx-obs__bars.is-div li.is-neg b i { background: var(--obs-3); }
/* Mini stats, pending, data tables */
.lx-obs__mini { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2px; background: var(--lx-line); border: 2px solid var(--lx-line); }
.lx-obs__mini div { padding: 16px; background: var(--lx-snow); }
.lx-obs__mini strong { display: block; color: var(--acc-ink); font: 900 clamp(1.7rem, 3vw, 2.3rem)/1 var(--lx-display); font-variant-numeric: tabular-nums; }
.lx-obs__mini span { display: block; margin-top: 6px; color: var(--lx-muted); font: 600 .76rem/1.35 var(--lx-display); }
.lx-obs__pending { display: grid; place-items: center; min-height: 200px; padding: 20px; border: 2px dashed var(--lx-line); color: var(--lx-muted); font: 600 .9rem/1.4 var(--lx-display); text-align: center; }
.lx-obs__data { min-width: 0; max-width: 100%; margin-top: 12px; font-size: .82rem; }
.lx-obs__data td:first-child { white-space: normal; min-width: 9em; }
.lx-obs__data summary { display: inline-flex; cursor: pointer; color: var(--lx-text); font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
.lx-obs__scroll { max-width: 100%; max-height: 280px; margin-top: 10px; overflow: auto; border: 1px solid var(--lx-line); }
.lx-obs__data table { width: 100%; border-collapse: collapse; font-variant-numeric: tabular-nums; }
.lx-obs__data th, .lx-obs__data td { padding: 6px 10px; border-bottom: 1px solid var(--lx-line); text-align: left; white-space: nowrap; }
.lx-obs__data th { position: sticky; top: 0; background: var(--lx-snow); }

/* Method */
.lx-obs__prose { max-width: 72ch; font: 400 1.12rem/1.6 var(--lx-serif); }
.lx-obs__prose li { margin-bottom: .6em; }
.lx-obs__prose strong { font-family: var(--lx-display); font-size: .92em; }

@media (max-width: 520px) {
  .lx-obs__chart { padding-left: 38px; padding-right: 64px; }
  .lx-obs__plot.is-cols { margin-right: -56px; }
  .lx-obs__end { left: calc(100% + 8px); font-size: .66rem; }
  .lx-obs__end small { display: none; }
  .lx-obs__bars li { grid-template-columns: minmax(0, 1fr); gap: 4px; }
}

/* Scroll reveal (only when JS opted in and motion is allowed): cards fade up, lines draw left to right, bars grow. */
@media (prefers-reduced-motion: no-preference) {
  .lx-obs-anim .lx-obs__card, .lx-obs-anim .lx-obs__kpis li { opacity: 0; transform: translateY(14px); transition: opacity .6s ease, transform .6s cubic-bezier(.2, .7, .2, 1); }
  .lx-obs-anim .lx-obs__kpis li:nth-child(2) { transition-delay: .06s; } .lx-obs-anim .lx-obs__kpis li:nth-child(3) { transition-delay: .12s; }
  .lx-obs-anim .lx-obs__kpis li:nth-child(4) { transition-delay: .18s; } .lx-obs-anim .lx-obs__kpis li:nth-child(5) { transition-delay: .24s; } .lx-obs-anim .lx-obs__kpis li:nth-child(6) { transition-delay: .3s; }
  .lx-obs-anim .is-in .lx-obs__card, .lx-obs-anim .lx-obs__card.is-in, .lx-obs-anim .is-in > li { opacity: 1; transform: none; }
  .lx-obs-anim .lx-obs__plot svg, .lx-obs-anim .lx-obs__spark { clip-path: inset(-12px 100% -12px -12px); transition: clip-path 1.5s cubic-bezier(.45, .05, .25, 1) .25s; }
  .lx-obs-anim .is-in .lx-obs__plot svg, .lx-obs-anim .is-in .lx-obs__spark { clip-path: inset(-12px -12px -12px -12px); }
  .lx-obs-anim .lx-obs__dot, .lx-obs-anim .lx-obs__end { opacity: 0; transition: opacity .5s ease 1.5s; }
  .lx-obs-anim .is-in .lx-obs__dot, .lx-obs-anim .is-in .lx-obs__end { opacity: 1; }
  .lx-obs-anim .lx-obs__cols span { transform: scaleY(0); transform-origin: 50% 100%; transition: transform .7s cubic-bezier(.2, .7, .2, 1) calc(.2s + var(--i) * 18ms), filter .15s; }
  .lx-obs-anim .is-in .lx-obs__cols span { transform: none; }
  .lx-obs-anim .lx-obs__bars b i { transform: scaleX(0); transform-origin: 0 50%; transition: transform .9s cubic-bezier(.2, .7, .2, 1) calc(.2s + var(--i) * 70ms); }
  .lx-obs-anim .is-in .lx-obs__bars b i { transform: none; }
  .lx-obs-anim .lx-obs__pt { opacity: 0; scale: .3; transition: opacity .4s ease calc(.2s + var(--i) * 16ms), scale .4s cubic-bezier(.2, .7, .3, 1.4) calc(.2s + var(--i) * 16ms); }
  .lx-obs-anim .is-in .lx-obs__pt { opacity: 1; scale: 1; }
}
`, _e = `// Leaux Altitude runtime, uploaded as theme-assets/leaux-altitude-menu.js.
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
      if (window.lxVtName && window.lxVtPair) window.lxVtName(window.lxVtPair(new URL(e.activation.entry.url).pathname));
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
    // Parallax: CSS scroll-driven animations when supported (smooth on phones,
    // they run off the main thread); otherwise JS, but only with a mouse —
    // on touch screens JS lags one frame behind the finger, so no parallax.
    var band = document.querySelector(".lx-band--category, .lx-band--photo");
    var cssParallax = window.CSS && CSS.supports && CSS.supports("animation-timeline: view()");
    var touch = window.matchMedia && matchMedia("(pointer: coarse)").matches;
    if (band && !calm && !cssParallax && !touch) try { parallax(band); } catch (e) {}
    var tocNav = document.querySelector("[data-lx-toc]");
    if (tocNav) try { toc(tocNav); } catch (e) {}
    var relatedHost = document.querySelector("[data-lx-related]");
    if (relatedHost) related(relatedHost);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();

/* Observatoire: hover/focus tooltips (progressive enhancement; charts read fine without it). */
(function () {
  /* Scroll reveal + KPI count-up. The class is set first so nothing is hidden when JS is off. */
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.querySelector(".lx-obs");
  if (!root) return;
  window.lxObsReady = true;
  var io = null;
  if ("IntersectionObserver" in window && !reduce) {
    document.documentElement.classList.add("lx-obs-anim");
    var countUp = function (el) {
      var txt = el.textContent, m = txt.match(/\\d[\\d\\u00a0\\u202f ]*(?:,\\d+)?/);
      if (!m) return;
      var raw = m[0], dec = (raw.split(",")[1] || "").length, target = parseFloat(raw.replace(/[\\s\\u00a0\\u202f]/g, "").replace(",", "."));
      var fmt = function (v) {
        var s = v.toFixed(dec).split("."), int = s[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, "\\u00a0");
        return txt.replace(raw, int + (dec ? "," + s[1] : ""));
      };
      var t0 = null, dur = 1100;
      var step = function (t) {
        if (t0 === null) t0 = t;
        var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = k < 1 ? fmt(target * e) : txt;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        en.target.querySelectorAll("[data-count]").forEach(countUp);
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .15 });
    root.querySelectorAll(".lx-obs__card, .lx-obs__kpis").forEach(function (el) { io.observe(el); });
  }

  /* Home teaser: copy the key figures and the update date from the published page, links pointing to its sections. */
  var home = document.querySelector("[data-lx-obs-home]");
  if (home && window.fetch && window.DOMParser) {
    var page = home.closest("section").querySelector(".lx-shelf__all").href.split("#")[0];
    var drop = function () { var s = home.querySelector(".lx-obs-home__skel"); if (s) s.remove(); };
    var load = function () {
      fetch(page, { credentials: "same-origin" }).then(function (r) { if (!r.ok) throw r.status; return r.text(); }).then(function (html) {
        var doc = new DOMParser().parseFromString(html, "text/html"), kpis = doc.querySelector(".lx-obs__kpis");
        if (!kpis) return drop();
        kpis.querySelectorAll("a[href^='#']").forEach(function (a) { a.setAttribute("href", page + a.getAttribute("href")); });
        var ul = document.importNode(kpis, true), upd = doc.querySelector(".lx-obs__updated");
        home.replaceChildren(ul);
        if (upd) home.appendChild(document.importNode(upd, true));
        if (io) io.observe(ul);
      }).catch(drop);
    };
    if ("IntersectionObserver" in window) {
      var near = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { near.disconnect(); load(); } }, { rootMargin: "900px 0px" });
      near.observe(home);
    } else load();
  } else if (home) home.replaceChildren();

  function place(tip, plot, x) {
    tip.hidden = false;
    var w = plot.clientWidth, half = tip.offsetWidth / 2;
    tip.style.left = Math.max(half - 40, Math.min(w - half + 70, x)) + "px";
  }
  document.querySelectorAll("[data-lx-obs]").forEach(function (chart) {
    var series = JSON.parse(chart.getAttribute("data-lx-obs"));
    var plot = chart.querySelector(".lx-obs__plot"), tip = plot.querySelector(".lx-obs__hover");
    var cross = document.createElement("div");
    cross.className = "lx-obs__cross"; cross.hidden = true; plot.appendChild(cross);
    function show(px) {
      var rect = plot.getBoundingClientRect(), xp = (px - rect.left) / rect.width * 100, rows = [], at = null, label = "";
      series.forEach(function (s) {
        var best = null;
        s.p.forEach(function (p) { if (!best || Math.abs(p[0] - xp) < Math.abs(best[0] - xp)) best = p; });
        if (best && Math.abs(best[0] - xp) < 6) {
          if (at === null || Math.abs(best[0] - xp) < Math.abs(at - xp)) { at = best[0]; label = best[2]; }
          rows.push('<span class="' + s.c + '"><i></i>' + (series.length > 1 ? s.n + " : " : "") + best[3] + "</span>");
        }
      });
      if (at === null) return hide();
      tip.innerHTML = "<b>" + label + "</b>" + rows.join("<br>");
      cross.hidden = false; cross.style.left = at + "%";
      place(tip, plot, at / 100 * rect.width);
    }
    function hide() { tip.hidden = true; cross.hidden = true; }
    plot.addEventListener("pointermove", function (e) { show(e.clientX); });
    plot.addEventListener("pointerleave", hide);
  });
  document.querySelectorAll(".lx-obs__plot").forEach(function (plot) {
    var tip = plot.querySelector(".lx-obs__hover");
    plot.querySelectorAll("[data-tip]").forEach(function (el) {
      function on() {
        var r = el.getBoundingClientRect(), pr = plot.getBoundingClientRect();
        tip.textContent = el.getAttribute("data-tip");
        place(tip, plot, r.left - pr.left + r.width / 2);
        tip.style.top = Math.max(0, r.top - pr.top - 44) + "px";
      }
      function off() { tip.hidden = true; tip.style.top = ""; }
      el.addEventListener("pointerenter", on); el.addEventListener("focus", on);
      el.addEventListener("pointerleave", off); el.addEventListener("blur", off);
    });
  });
})();
`, we = '# Leaux Altitude\n\nDedicated AgentCMS theme for leaux.ovh. Ridgelines pass in front of the home title, each section is a summit on an orientation table, each post gets a contour map generated from its slug, and a reading climb follows the scroll.\n\nSection slugs and colors live in `src/rubrics.ts` and `src/theme.css` (`[data-rubric]`). Hero texts are editable on the theme settings page.\n\n## Custom fields\n\n| Field | Type | Effect |\n|---|---|---|\n| `header-photo` | yes / no | On a post with a featured image, `true` puts the image behind the header, with a parallax on scroll, instead of the contour map. The image is then not repeated under the header. |\n| `toc` | yes / no | `true` adds a table of contents built from the body\'s `h2` (numbered) and `h3` (indented); the headings get ids. Wide screens (≥ 1200 px): the text moves left, aligned with the title, and the contents stay open in a sticky column on the right, current section highlighted and the rail filling as you read. Narrower: a sticky bar under the header that shows the current section and a reading progress line, and drops the list down on tap. Without JS: an open list above the text. Shown only with at least 2 headings. |\n\n## Article components (raw HTML in Markdown)\n\n- Video card (YouTube link with thumbnail, no embed): `<div class="lx-video"><a class="lx-video__thumb" href="https://www.youtube.com/watch?v=ID" aria-label="Regarder « Titre » sur YouTube"><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" loading="lazy"></a><div><p class="lx-video__meta">Chaîne · 18 min · en anglais</p><p class="lx-video__title"><a href="https://www.youtube.com/watch?v=ID">Titre</a></p><p>Résumé…</p></div></div>`.\n- En bref (key points, first block of a long post): `<aside class="lx-brief" aria-label="En bref"><p class="lx-brief__tag">En bref</p><ul><li>… <strong>…</strong></li></ul></aside>`.\n\n- Pull quote: `<figure class="lx-pullquote"><blockquote><p>…</p></blockquote></figure>` (optional `<figcaption>`).\n- Case box: `<aside class="lx-case"><p class="lx-case__tag">Cas réel · date</p><p class="lx-case__title">…</p><p>…</p><p class="lx-case__src">Source : <a href="…">…</a></p></aside>`.\n- Key figures: `<div class="lx-stats"><div><strong>48 %</strong><span>…</span></div>…</div>`, optionally followed by `<p class="lx-case__src">Source : …</p>`.\n- Bar chart: `<figure class="lx-chart"><p class="lx-chart__title">…</p><p class="lx-chart__sub">…</p><div class="lx-chart__cols" style="--n:9"><div class="lx-chart__col is-lab" style="--v:.4" title="2020 : 18 322"><div class="lx-chart__bar"></div><span class="lx-chart__val">18 322</span></div>…</div><div class="lx-chart__axis" style="--n:9"><span>2020</span>…</div><p class="lx-case__src">Source : …</p></figure>`. `--v` is the bar height (0–1). Column modifiers: `is-hi` (highlighted), `is-part` (hatched, partial period), `is-lab` (value always shown; others on hover). Axis labels with `is-minor` hide on phones.\n- Paired horizontal bars: `<div class="lx-chart__rows"><div class="lx-chart__row"><span>Label</span><div class="lx-chart__hb" style="--v:.3"><i></i>1 200 <em>2025</em></div><div class="lx-chart__hb is-hi" style="--v:.8"><i></i>3 400 <em>2026</em></div></div></div>` with a `<ul class="lx-chart__legend"><li><i></i>2025</li><li><i class="is-hi"></i>2026</li></ul>`.\n\n## Section pages (1.6.0)\n\nThe band of each section page features its latest post: image as background (rubric-tinted gradient), kicker « Rubrique — Dernier article », title, excerpt, « Lire l\'article » button, date and reading time, ridge edge kept. The other posts follow under « Articles précédents ». The h1 of the page is the logo, with the section name visually hidden; `<title>` and meta description still come from the category.\n\n## Home (1.7.0)\n\nNewest post in the band (same design as section pages), one block per section (newest post large, two more beside it, link « Toute la rubrique »), « Mes projets » as round logos, « Par où monter ? » at the bottom. Project fields on posts of « Mes projets »: `project` (name), `project-logo` (URL of the `square` image format), `project-tagline` (optional). New image format `square` (320×320).\n\n## Home data (1.7.1)\n\nThe manifest sets `homeCategoryPosts: 12`: AgentCMS ≥ 0.4.4 passes the newest 12 posts of every category to the home (`props.categories`), used for the section blocks and the projects. `postsPerPage` no longer has to be large. Older AgentCMS: fallback on `props.posts`.\n\n## Transitions and parallax (1.7.2)\n\nThe list → post transition starts from the feature band, the home cards and the project logos too (`lxVtPair` in BaseLayout\'s head script). The band parallax uses CSS scroll-driven animations (off the main thread, smooth on phones); the JS version is a fallback for mouse users on browsers without them.\n\n\n### 1.7.3\n\nThe bands\' view timeline uses `view-timeline-inset: 0`. With the default (`auto`) it took html\'s `scroll-padding-top` (88 px, 132 px on posts with a table of contents), so the parallax had already started at load and the header photo sat ~27 px below the site header.\n\n### 1.7.4\n\nPost and page titles (`.lx-band--article h1`) use the same size as the home\'s featured title (`.lx-feature__title`): `clamp(2.5rem, 5.2vw, 5rem)`, 18ch wide — 75 px instead of 104 px at 1440 px. The 2.5rem floor keeps phones at 40 px.\n\n### 1.8.1\n\n- Home: an « Observatoire IA » block after « Mes projets », shown while the header menu links to `observatoire-ia.html`. Its 6 key figures and update date are copied at runtime from the published page (`.lx-obs__kpis`, `.lx-obs__updated`), each linking to its section, so the block follows every refresh of the page with no home regeneration.\n- Home: « Passions » moved to the last block.\n\n### 1.8.0\n\nObservatoire de l\'IA (page with the custom field `dashboard: true`): compact header (rubric chip « Observatoire », update date from the field `obs-updated`, title and lead side by side), full-width body outside the prose column, `.lx-obs` dashboard components (key figures with sparklines, per-section accents, line / column / bar / scatter charts in plain HTML + SVG, data tables), hover tooltips and a scroll reveal (lines draw, bars grow, figures count up; off with reduced motion, visible without JS). The section nav sticks under the header and follows it when it hides.\n\n### 1.7.5\n\nGoogle Tag Manager container replaced: `GTM-PJ68GND6` (was `GTM-KNDFD5GH`), same snippet after the footer.\n';
function q(n, t) {
  const a = pe.getFixedT(xe(t || n.settings.language || "en"), "theme-leaux-altitude");
  return (i) => a(`public.${i}`);
}
const E = [
  { slug: "edito", name: "Édito", x: 90, height: 0.62 },
  { slug: "news-tech-ia", name: "News tech IA", x: 68, height: 0.8 },
  { slug: "mes-projets", name: "Mes projets", x: 29, height: 0.74 },
  { slug: "passions", name: "Passions", x: 49, height: 0.98 },
  { slug: "transition-ia", name: "Transition IA", x: 10, height: 0.66 }
];
function F(n) {
  var a;
  if (!n) return;
  const t = n.replace(/^\/+/, "");
  return (a = E.find((i) => t === i.slug || t.startsWith(i.slug + "/"))) == null ? void 0 : a.slug;
}
function W({ items: n, currentPath: t }) {
  return /* @__PURE__ */ e("ul", { children: n.map((a) => {
    const i = t !== void 0 && a.href === `/${t}`;
    return /* @__PURE__ */ o("li", { children: [
      /* @__PURE__ */ e("a", { href: a.href, "aria-current": i ? "page" : void 0, children: a.label }),
      a.children && a.children.length > 0 && /* @__PURE__ */ e(W, { items: a.children, currentPath: t })
    ] }, a.id);
  }) });
}
function ye({ site: n, currentPath: t, locale: a }) {
  var c;
  const i = q(n, a), r = ((c = n.settings.enabledPlugins) == null ? void 0 : c["agentcms-search"]) !== !1, l = E.find((p) => new RegExp(`^${p.slug}/(index\\.html|page/\\d+(/index)?\\.html)?$`).test(t ?? "")), s = t === "index.html" || `/${t}` === (n.homePath ?? "/index.html"), d = /* @__PURE__ */ o("a", { className: "lx-brand", href: n.homePath ?? "/index.html", children: [
    /* @__PURE__ */ e("svg", { viewBox: "0 0 34 22", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M1 21 12 4l6 9 4-6 11 14z" }) }),
    l && /* @__PURE__ */ o("span", { className: "lx-sr", children: [
      l.name,
      " — "
    ] }),
    /* @__PURE__ */ e("span", { children: n.settings.title })
  ] });
  return /* @__PURE__ */ o("header", { className: "lx-header", children: [
    l || s ? /* @__PURE__ */ e("h1", { className: "lx-brand-h", children: d }) : d,
    /* @__PURE__ */ e("nav", { id: "lx-nav", className: "lx-nav", "aria-label": i("mainNav"), "data-cms-menu": "header", children: /* @__PURE__ */ e(W, { items: n.resolvedMenus.header, currentPath: t }) }),
    /* @__PURE__ */ o("div", { className: "lx-header__tools", children: [
      /* @__PURE__ */ e("div", { "data-cms-langswitch": "header" }),
      r && /* @__PURE__ */ e("button", { className: "lx-iconbtn", type: "button", "data-cms-search": !0, "aria-label": i("search"), children: /* @__PURE__ */ o("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: [
        /* @__PURE__ */ e("circle", { cx: "10.5", cy: "10.5", r: "6.5" }),
        /* @__PURE__ */ e("path", { d: "m15.5 15.5 5 5" })
      ] }) }),
      /* @__PURE__ */ e("button", { className: "lx-iconbtn lx-burger", type: "button", "aria-expanded": "false", "aria-controls": "lx-nav", "aria-label": i("menu"), "data-lx-burger": !0, children: /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3 8h18M3 16h18" }) }) })
    ] })
  ] });
}
function N(n) {
  let t = 2166136261;
  for (let a = 0; a < n.length; a++) t = Math.imul(t ^ n.charCodeAt(a), 16777619);
  return t >>> 0;
}
function J(n) {
  let t = n | 0;
  return () => {
    t = t + 1831565813 | 0;
    let a = Math.imul(t ^ t >>> 15, 1 | t);
    return a = a + Math.imul(a ^ a >>> 7, 61 | a) ^ a, ((a ^ a >>> 14) >>> 0) / 4294967296;
  };
}
function U(n) {
  const t = J(n), a = 64, i = Array.from({ length: a * a }, () => t()), r = (s, d) => i[(d % a + a) % a * a + (s % a + a) % a], l = (s) => s * s * (3 - 2 * s);
  return (s, d) => {
    const c = Math.floor(s), p = Math.floor(d), h = l(s - c), m = l(d - p), f = r(c, p) * (1 - h) + r(c + 1, p) * h, _ = r(c, p + 1) * (1 - h) + r(c + 1, p + 1) * h;
    return f * (1 - m) + _ * m;
  };
}
const L = (n) => Math.round(n * 10) / 10;
function ke(n, t, a, i, r = 14) {
  const l = U(n), s = J(n ^ 2654435769), d = Math.round(i * a / t), c = [0, 1, 2].map(() => ({ x: 0.15 + s() * 0.7, y: 0.15 + s() * 0.7, s: 0.03 + s() * 0.07, a: 0.5 + s() * 0.7 })), p = t / a, h = [];
  let m = 1 / 0, f = -1 / 0;
  for (let b = 0; b <= d; b++)
    for (let w = 0; w <= i; w++) {
      const S = w / i, u = b / d;
      let g = l(S * 3 * p, u * 3) * 0.6 + l(S * 7 * p, u * 7) * 0.18;
      for (const z of c) {
        const T = (S - z.x) * p, M = u - z.y;
        g += z.a * Math.exp(-(T * T + M * M) / (2 * z.s));
      }
      h.push(g), g < m && (m = g), g > f && (f = g);
    }
  const _ = t / i, y = a / d, v = (b, w) => h[w * (i + 1) + b], x = [], k = [];
  for (let b = 1; b < r; b++) {
    const w = m + (f - m) * b / r, S = b % 4 === 0 ? k : x;
    for (let u = 0; u < d; u++)
      for (let g = 0; g < i; g++) {
        const z = v(g, u), T = v(g + 1, u), M = v(g + 1, u + 1), G = v(g, u + 1), H = [], $ = (j, V, Y, X, de, ce) => {
          if (j < w != V < w) {
            const K = (w - j) / (V - j);
            H.push([(Y + (de - Y) * K) * _, (X + (ce - X) * K) * y]);
          }
        };
        $(z, T, g, u, g + 1, u), $(T, M, g + 1, u, g + 1, u + 1), $(G, M, g, u + 1, g + 1, u + 1), $(z, G, g, u, g, u + 1);
        for (let j = 0; j + 1 < H.length; j += 2)
          S.push(`M${L(H[j][0])} ${L(H[j][1])}L${L(H[j + 1][0])} ${L(H[j + 1][1])}`);
      }
  }
  return { minor: x.join(""), major: k.join("") };
}
function Q(n, t, a, i = 90) {
  const r = U(n);
  let l = "";
  for (let s = 0; s <= i; s++) {
    const d = s / i, c = a * (0.92 - 0.78 * Math.pow(d, 1.3) + (r(d * 7, 3) - 0.5) * 0.34 * Math.sin(Math.PI * d) + (r(d * 19, 8) - 0.5) * 0.1 * Math.sin(Math.PI * d));
    l += `${s ? "L" : "M"}${L(d * t)} ${L(Math.max(2, Math.min(a - 2, c)))}`;
  }
  return l;
}
function A(n, t, a, i = 70) {
  const r = U(n);
  let l = `M0 ${a}`;
  for (let s = 0; s <= i; s++) {
    const d = s / i, c = r(d * 5, 2) * 0.7 + r(d * 17, 5) * 0.3;
    l += `L${L(d * t)} ${L(a * (1 - c))}`;
  }
  return `${l}L${t} ${a}Z`;
}
function Ne(n, t, a, i, r) {
  const l = J(n), s = (v) => {
    const x = [];
    for (let b = 1; b <= 9; b++) {
      const w = b / 9, S = b === 9 ? 0 : (l() - 0.5) * 0.09;
      x.push([t + v * r * (w + S * 1.2), a + (i - a) * Math.pow(w, 1.1) + (l() - 0.5) * 14 * (b === 9 ? 0 : 1)]);
    }
    return x;
  }, d = s(-1), c = s(1), p = [], h = 8;
  let m = t;
  for (let v = 1; v <= h; v++) {
    const x = v / h;
    m += (l() - 0.32) * r * 0.16, p.push([m, a + (i - a) * x]);
  }
  const f = (v) => v.map((x, k) => `${k ? "L" : "M"}${L(x[0])} ${L(x[1])}`).join(""), _ = [...d.slice().reverse(), [t, a], ...c], y = [[t, a], ...c, ...p.slice().reverse()];
  return { lit: `${f(_)}Z`, shade: `${f(y)}Z` };
}
function Se({ site: n, locale: t }) {
  const a = q(n, t);
  return /* @__PURE__ */ o("footer", { className: "lx-footer", children: [
    /* @__PURE__ */ e("svg", { className: "lx-footer__ridge", viewBox: "0 0 1600 120", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: A(N("footer"), 1600, 120) }) }),
    /* @__PURE__ */ o("div", { className: "lx-footer__body", children: [
      /* @__PURE__ */ e("p", { className: "lx-footer__name", children: n.settings.title }),
      /* @__PURE__ */ e("nav", { "aria-label": a("footerNav"), "data-cms-menu": "footer", children: /* @__PURE__ */ e(W, { items: n.resolvedMenus.footer }) }),
      /* @__PURE__ */ e("div", { "data-cms-langswitch": "footer" }),
      /* @__PURE__ */ e("p", { className: "lx-footer__note", children: /* @__PURE__ */ e("a", { href: "https://github.com/fleox/agentcms", rel: "noopener", children: a("publishedWith") }) })
    ] })
  ] });
}
const ze = 'window.lxVtPair=function(p){var q=[[".lx-feature__title a",function(a){var b=a.closest(".lx-band");return[b&&b.querySelector(".lx-band__art"),a.closest("h2")]}],[".lx-way__art,.lx-card__art",function(a){return[a,a.parentNode.querySelector("h3")]}],[".lx-projects__list a",function(a){return[a.querySelector(".lx-projects__logo"),a.querySelector(".lx-projects__name")]}]];for(var k=0;k<q.length;k++){var l=document.querySelectorAll(q[k][0]);for(var i=0;i<l.length;i++)if(l[i].pathname===p)return q[k][1](l[i])}return null};window.lxVtName=function(r){if(!r)return function(){};if(r[0])r[0].style.viewTransitionName="lx-art";if(r[1])r[1].style.viewTransitionName="lx-title";return function(){if(r[0])r[0].style.viewTransitionName="";if(r[1])r[1].style.viewTransitionName=""}};addEventListener("pagereveal",function(e){var n=window.navigation,f=n&&n.activation&&n.activation.from;if(!e.viewTransition||!f||!f.url)return;var c=lxVtName(lxVtPair(new URL(f.url).pathname));e.viewTransition.finished.finally(c)});if(window.matchMedia&&matchMedia("(prefers-reduced-motion: no-preference)").matches&&"IntersectionObserver"in window){document.documentElement.classList.add("lx-obs-anim");setTimeout(function(){if(!window.lxObsReady)document.documentElement.classList.remove("lx-obs-anim")},3000)}', Me = "GTM-PJ68GND6", je = "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());";
function Le({ site: n, pageTitle: t, pageDescription: a, ogImage: i, currentPath: r, currentLocale: l, children: s }) {
  const d = l || n.settings.language || "en", c = n.settings.title || "", p = t ? t.includes(c) ? t : `${t} — ${c}` : c, h = n.settings.baseUrl && r ? ne(n.settings.baseUrl, r) : void 0;
  return /* @__PURE__ */ o("html", { lang: d, children: [
    /* @__PURE__ */ o("head", { children: [
      /* @__PURE__ */ e("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ e("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ e("meta", { name: "theme-color", content: "#10163f" }),
      /* @__PURE__ */ e("title", { children: p }),
      a && /* @__PURE__ */ e("meta", { name: "description", content: a }),
      h && /* @__PURE__ */ e("link", { rel: "canonical", href: h }),
      /* @__PURE__ */ e("meta", { property: "og:title", content: p }),
      a && /* @__PURE__ */ e("meta", { property: "og:description", content: a }),
      i && /* @__PURE__ */ e("meta", { property: "og:image", content: i }),
      h && /* @__PURE__ */ e("meta", { property: "og:url", content: h }),
      /* @__PURE__ */ e("link", { rel: "stylesheet", href: `/${n.themeCssPath}` }),
      /* @__PURE__ */ e("link", { rel: "expect", href: "#lx-end", blocking: "render" }),
      /* @__PURE__ */ e("script", { dangerouslySetInnerHTML: { __html: ze } }),
      /* @__PURE__ */ e("script", { src: "/theme-assets/leaux-altitude-menu.js", defer: !0 }),
      /* @__PURE__ */ e("meta", { name: "x-cms-head-extra" })
    ] }),
    /* @__PURE__ */ o("body", { className: "lx", children: [
      /* @__PURE__ */ e(ye, { site: n, currentPath: r, locale: d }),
      /* @__PURE__ */ e("main", { children: s }),
      /* @__PURE__ */ e("span", { id: "lx-end" }),
      /* @__PURE__ */ e(Se, { site: n, locale: d }),
      /* @__PURE__ */ e("script", { async: !0, src: `https://www.googletagmanager.com/gtm.js?id=${Me}` }),
      /* @__PURE__ */ e("script", { dangerouslySetInnerHTML: { __html: je } }),
      /* @__PURE__ */ e("script", { type: "application/x-cms-body-end" })
    ] })
  ] });
}
function C({ seed: n, width: t = 480, height: a = 300, cols: i = 44, className: r }) {
  const l = ke(N(n), t, a, i);
  return /* @__PURE__ */ o("svg", { className: `lx-topo ${r ?? ""}`, viewBox: `0 0 ${t} ${a}`, preserveAspectRatio: "xMidYMid slice", "aria-hidden": "true", children: [
    /* @__PURE__ */ e("path", { className: "lx-topo__minor", d: l.minor }),
    /* @__PURE__ */ e("path", { className: "lx-topo__major", d: l.major })
  ] });
}
function qe(n) {
  return Math.max(1, Math.round(n.contentMarkdown.trim().split(/\s+/).length / 220));
}
function re({ site: n, post: t, rubric: a, label: i, edgeSeed: r }) {
  const l = q(n), s = t ? I(t.hero, "large") : void 0;
  return /* @__PURE__ */ o("header", { className: `lx-band lx-band--category lx-band--feature${s ? " lx-band--photo" : ""}`, "data-rubric": a, children: [
    s ? /* @__PURE__ */ e("div", { className: "lx-band__art lx-band__photo", "aria-hidden": "true", children: /* @__PURE__ */ e("img", { src: s, alt: "", fetchPriority: "high" }) }) : /* @__PURE__ */ e(C, { seed: (t == null ? void 0 : t.slug) ?? r, width: 1600, height: 720, cols: 110, className: "lx-band__art" }),
    /* @__PURE__ */ e("div", { className: "lx-band__inner", children: t ? /* @__PURE__ */ o("article", { className: "lx-feature", children: [
      /* @__PURE__ */ o("p", { className: "lx-feature__kicker", children: [
        i && /* @__PURE__ */ e("span", { className: "lx-feature__rubric", children: i }),
        /* @__PURE__ */ e("span", { children: l("featured") })
      ] }),
      /* @__PURE__ */ e("h2", { className: "lx-feature__title", children: /* @__PURE__ */ e("a", { href: "/" + t.url, children: t.title }) }),
      t.excerpt && /* @__PURE__ */ e("p", { className: "lx-band__lead", children: t.excerpt }),
      /* @__PURE__ */ o("div", { className: "lx-feature__foot", children: [
        /* @__PURE__ */ o("a", { className: "lx-feature__cta", href: "/" + t.url, tabIndex: -1, "aria-hidden": "true", children: [
          l("readPost"),
          /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M4 12h15m-6-6 6 6-6 6" }) })
        ] }),
        /* @__PURE__ */ o("p", { className: "lx-band__count", children: [
          t.dateLabel && /* @__PURE__ */ e("span", { children: t.dateLabel }),
          /* @__PURE__ */ o("span", { children: [
            qe(t),
            " ",
            l("minutes")
          ] })
        ] })
      ] })
    ] }) : /* @__PURE__ */ e("p", { className: "lx-band__lead", children: l("empty") }) }),
    /* @__PURE__ */ e("svg", { className: "lx-band__edge", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: A(N(r), 1600, 90) }) })
  ] });
}
function Te({ site: n }) {
  const t = q(n), a = 1600, i = 620;
  return /* @__PURE__ */ o("section", { className: "lx-pano", "aria-labelledby": "lx-pano-title", children: [
    /* @__PURE__ */ e("svg", { className: "lx-pano__edge", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: A(N("pano-top"), 1600, 90) }) }),
    /* @__PURE__ */ e("h2", { id: "lx-pano-title", className: "lx-pano__title", children: t("sections") }),
    /* @__PURE__ */ o("div", { className: "lx-pano__stage", children: [
      /* @__PURE__ */ e("svg", { viewBox: `0 0 ${a} ${i}`, preserveAspectRatio: "xMidYMax slice", "aria-hidden": "true", children: E.map((r) => {
        const l = Ne(N(r.slug), r.x / 100 * a, i * (1 - r.height * 0.86), i + 10, 300 + r.height * 170);
        return /* @__PURE__ */ e("a", { href: `/${r.slug}/index.html`, tabIndex: -1, children: /* @__PURE__ */ o("g", { className: "lx-peak", "data-rubric": r.slug, "data-peak": r.slug, children: [
          /* @__PURE__ */ e("path", { className: "lx-peak__lit", d: l.lit }),
          /* @__PURE__ */ e("path", { className: "lx-peak__shade", d: l.shade })
        ] }) }, r.slug);
      }) }),
      /* @__PURE__ */ e("ul", { className: "lx-pano__labels", children: [...E].sort((r, l) => r.x - l.x).map((r) => /* @__PURE__ */ e("li", { "data-rubric": r.slug, "data-label": r.slug, style: { left: `${r.x}%`, top: `${100 - r.height * 86}%` }, children: /* @__PURE__ */ o("a", { href: `/${r.slug}/index.html`, children: [
        /* @__PURE__ */ e("strong", { children: r.name }),
        /* @__PURE__ */ e("span", { children: t(`r.${r.slug}`) })
      ] }) }, r.slug)) })
    ] })
  ] });
}
function O({ data: n }) {
  return /* @__PURE__ */ e("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(n).replace(/</g, "\\u003c") } });
}
function P(n, t) {
  return n.settings.baseUrl ? ne(n.settings.baseUrl, t) : void 0;
}
function D(n, t) {
  const a = (t == null ? void 0 : t.displayName) || n.settings.title || "", i = ((t == null ? void 0 : t.socials) ?? []).map((r) => r.url).filter(Boolean);
  return {
    "@type": "Person",
    name: a,
    url: P(n, "qui-suis-je.html"),
    ...t != null && t.title ? { jobTitle: t.title } : {},
    ...i.length ? { sameAs: i } : {}
  };
}
function Ee({ site: n }) {
  const t = P(n, "");
  return /* @__PURE__ */ e(
    O,
    {
      data: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: n.settings.title,
        description: n.settings.description,
        url: t,
        inLanguage: n.settings.language || "fr",
        author: D(n)
      }
    }
  );
}
function Ae({ site: n, post: t, author: a, hero: i, primaryTerm: r }) {
  var h;
  const l = P(n, he({ post: t, primaryTerm: r })), s = new Date(R(t)).toISOString(), d = t.updatedAt ? R({ updatedAt: t.updatedAt }) : 0, c = I(i, "large"), p = [
    { name: n.settings.title, item: P(n, "") },
    ...r ? [{ name: r.name, item: P(n, ae(r)) }] : [],
    { name: t.title, item: l }
  ];
  return /* @__PURE__ */ o(B, { children: [
    /* @__PURE__ */ e(
      O,
      {
        data: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: t.title,
          description: ((h = t.seo) == null ? void 0 : h.description) || t.excerpt,
          url: l,
          mainEntityOfPage: l,
          inLanguage: n.settings.language || "fr",
          datePublished: s,
          dateModified: d > R(t) ? new Date(d).toISOString() : s,
          ...c ? { image: c } : {},
          ...r ? { articleSection: r.name } : {},
          author: D(n, a),
          publisher: D(n, a)
        }
      }
    ),
    /* @__PURE__ */ e(
      O,
      {
        data: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: p.map((m, f) => ({ "@type": "ListItem", position: f + 1, name: m.name, item: m.item }))
        }
      }
    )
  ] });
}
const Ce = ["transition-ia", "mes-projets", "observatoire", "news-tech-ia", "edito", "passions"], He = "observatoire-ia.html", Ie = 3, Pe = 12;
function ie({ rubric: n, t, id: a }) {
  return /* @__PURE__ */ o("div", { className: "lx-shelf__head", children: [
    /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("h2", { id: a, className: "lx-shelf__title", children: [
        /* @__PURE__ */ e("svg", { viewBox: "0 0 34 22", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M1 21 12 4l6 9 4-6 11 14z" }) }),
        /* @__PURE__ */ e("a", { href: `/${n.slug}/index.html`, children: n.name })
      ] }),
      /* @__PURE__ */ e("p", { className: "lx-shelf__tag", children: t(`r.${n.slug}`) })
    ] }),
    /* @__PURE__ */ o("a", { className: "lx-shelf__all", href: `/${n.slug}/index.html`, children: [
      t("allSection"),
      /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M4 12h15m-6-6 6 6-6 6" }) })
    ] })
  ] });
}
function ee({ post: n, lead: t }) {
  const a = I(n.hero, t ? "large" : "small");
  return /* @__PURE__ */ o("article", { className: `lx-card${t ? " lx-card--lead" : ""}`, children: [
    /* @__PURE__ */ e("a", { className: "lx-card__art", href: "/" + n.url, tabIndex: -1, "aria-hidden": "true", children: a ? /* @__PURE__ */ e("img", { src: a, alt: "", loading: "lazy" }) : /* @__PURE__ */ e(C, { seed: n.slug, cols: t ? 60 : 30 }) }),
    /* @__PURE__ */ o("div", { className: "lx-card__text", children: [
      n.dateLabel && /* @__PURE__ */ e("p", { className: "lx-card__meta", children: n.dateLabel }),
      /* @__PURE__ */ e("h3", { children: /* @__PURE__ */ e("a", { href: "/" + n.url, children: n.title }) }),
      t && n.excerpt && /* @__PURE__ */ e("p", { className: "lx-card__excerpt", children: n.excerpt })
    ] })
  ] });
}
function Be({ rubric: n, posts: t, t: a }) {
  const [i, ...r] = t, l = `lx-shelf-${n.slug}`;
  return /* @__PURE__ */ o("section", { className: "lx-shelf", "data-rubric": n.slug, "aria-labelledby": l, children: [
    /* @__PURE__ */ e(ie, { rubric: n, t: a, id: l }),
    /* @__PURE__ */ o("div", { className: `lx-shelf__grid${r.length ? "" : " lx-shelf__grid--solo"}`, children: [
      /* @__PURE__ */ e(ee, { post: i, lead: !0 }),
      r.length > 0 && /* @__PURE__ */ e("div", { className: "lx-shelf__side", children: r.map((s) => /* @__PURE__ */ e(ee, { post: s }, s.id)) })
    ] })
  ] });
}
function $e(n) {
  var a, i, r;
  const t = /* @__PURE__ */ new Map();
  for (const l of n) {
    const s = (a = l.fields) == null ? void 0 : a.project;
    if (typeof s != "string" || !s.trim() || t.has(s.trim())) continue;
    const d = (i = l.fields) == null ? void 0 : i["project-logo"], c = (r = l.fields) == null ? void 0 : r["project-tagline"];
    t.set(s.trim(), {
      name: s.trim(),
      logo: typeof d == "string" && d ? d : void 0,
      tagline: typeof c == "string" && c ? c : void 0,
      post: l
    });
  }
  return [...t.values()];
}
function Re(n) {
  const t = n.replace(/[^\p{L}\p{N} ]/gu, " ").split(/\s+/).filter(Boolean);
  return (t.length > 1 ? t[0][0] + t[1][0] : (t[0] ?? "?").slice(0, 2)).toUpperCase();
}
function Fe({ rubric: n, projects: t, t: a }) {
  const i = `lx-shelf-${n.slug}`;
  return /* @__PURE__ */ o("section", { className: "lx-projects", "data-rubric": n.slug, "aria-labelledby": i, children: [
    /* @__PURE__ */ e("svg", { className: "lx-projects__edge lx-projects__edge--top", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: A(N("projects-top"), 1600, 90) }) }),
    /* @__PURE__ */ e(C, { seed: "projects", width: 1600, height: 700, cols: 90, className: "lx-projects__art" }),
    /* @__PURE__ */ o("div", { className: "lx-projects__inner", children: [
      /* @__PURE__ */ e(ie, { rubric: n, t: a, id: i }),
      /* @__PURE__ */ e("ul", { className: "lx-projects__list", children: t.map((r) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ o("a", { href: "/" + r.post.url, children: [
        /* @__PURE__ */ e("span", { className: "lx-projects__logo", children: r.logo ? /* @__PURE__ */ e("img", { src: r.logo, alt: "", loading: "lazy" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", children: Re(r.name) }) }),
        /* @__PURE__ */ e("span", { className: "lx-projects__name", children: r.name }),
        r.tagline && /* @__PURE__ */ e("span", { className: "lx-projects__tag", children: r.tagline })
      ] }) }, r.name)) })
    ] }),
    /* @__PURE__ */ e("svg", { className: "lx-projects__edge", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: A(N("projects-bottom"), 1600, 90) }) })
  ] });
}
function le(n, t) {
  for (const a of n) {
    if (a.href.split("#")[0].endsWith("/" + t)) return a;
    const i = a.children && le(a.children, t);
    if (i) return i;
  }
}
function Oe({ item: n, t }) {
  const a = "lx-shelf-observatoire";
  return /* @__PURE__ */ o("section", { className: "lx-shelf lx-obs-home", "data-rubric": "news-tech-ia", "aria-labelledby": a, children: [
    /* @__PURE__ */ o("div", { className: "lx-shelf__head", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ o("h2", { id: a, className: "lx-shelf__title", children: [
          /* @__PURE__ */ e("svg", { viewBox: "0 0 34 22", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M1 21 12 4l6 9 4-6 11 14z" }) }),
          /* @__PURE__ */ e("a", { href: n.href, children: n.label })
        ] }),
        /* @__PURE__ */ e("p", { className: "lx-shelf__tag", children: t("obsTag") })
      ] }),
      /* @__PURE__ */ o("a", { className: "lx-shelf__all", href: n.href, children: [
        t("obsAll"),
        /* @__PURE__ */ e("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M4 12h15m-6-6 6 6-6 6" }) })
      ] })
    ] }),
    /* @__PURE__ */ o("div", { className: "lx-obs lx-obs--home", "data-lx-obs-home": n.href, children: [
      /* @__PURE__ */ e("ul", { className: "lx-obs__kpis lx-obs-home__skel", "aria-hidden": "true", children: [0, 1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ e("li", {}, i)) }),
      /* @__PURE__ */ e("noscript", { dangerouslySetInnerHTML: { __html: "<style>.lx-obs-home__skel{display:none}</style>" } })
    ] })
  ] });
}
function De({ site: n, posts: t, staticPage: a, archivesLink: i, categories: r }) {
  var p, h;
  const l = q(n);
  if (a)
    return /* @__PURE__ */ e("div", { className: "lx-prose lx-prose--page", dangerouslySetInnerHTML: { __html: a.bodyHtml } });
  const [s, ...d] = t, c = F((p = s == null ? void 0 : s.category) == null ? void 0 : p.url);
  return /* @__PURE__ */ o(B, { children: [
    /* @__PURE__ */ e(Ee, { site: n }),
    /* @__PURE__ */ e(re, { site: n, post: s, rubric: c, label: (h = s == null ? void 0 : s.category) == null ? void 0 : h.name, edgeSeed: "home" }),
    /* @__PURE__ */ o("div", { className: "lx-shelves", children: [
      Ce.map((m) => {
        var v;
        if (m === "observatoire") {
          const x = le(n.resolvedMenus.header, He);
          return x ? /* @__PURE__ */ e(Oe, { item: x, t: l }, m) : null;
        }
        const f = E.find((x) => x.slug === m);
        if (!f) return null;
        const _ = ((v = r == null ? void 0 : r.find((x) => x.term.slug === m)) == null ? void 0 : v.posts) ?? t.filter((x) => {
          var k;
          return F((k = x.category) == null ? void 0 : k.url) === m;
        }), y = _.filter((x) => x.id !== (s == null ? void 0 : s.id));
        if (m === "mes-projets") {
          const x = $e(_);
          if (x.length) return /* @__PURE__ */ e(Fe, { rubric: f, projects: x, t: l }, m);
        }
        return y.length ? /* @__PURE__ */ e(Be, { rubric: f, posts: y.slice(0, Ie), t: l }, m) : null;
      }),
      i && /* @__PURE__ */ e("p", { className: "lx-more lx-shelves__more", children: /* @__PURE__ */ e("a", { href: i.href, children: i.label }) })
    ] }),
    /* @__PURE__ */ e(Te, { site: n })
  ] });
}
function We({ entries: n, label: t, countLabel: a }) {
  const i = n.filter((l) => l.level === 2).length || n.length;
  let r = 0;
  return /* @__PURE__ */ e("nav", { className: "lx-toc", "aria-labelledby": "lx-toc-title", "data-lx-toc": !0, children: /* @__PURE__ */ o("details", { className: "lx-toc__box", open: !0, children: [
    /* @__PURE__ */ o("summary", { className: "lx-toc__bar", children: [
      /* @__PURE__ */ e("span", { className: "lx-toc__title", id: "lx-toc-title", children: t }),
      /* @__PURE__ */ o("span", { className: "lx-toc__now", "data-lx-toc-now": !0, children: [
        i,
        " ",
        a
      ] }),
      /* @__PURE__ */ e("svg", { className: "lx-toc__chev", viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M3 6l5 5 5-5" }) }),
      /* @__PURE__ */ e("span", { className: "lx-toc__progress", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ e("ol", { className: "lx-toc__list", children: n.map((l) => /* @__PURE__ */ e("li", { className: l.level === 3 ? "is-sub" : void 0, children: /* @__PURE__ */ o("a", { href: `#${l.id}`, children: [
      l.level === 2 && /* @__PURE__ */ e("span", { className: "lx-toc__num", "aria-hidden": "true", children: String(++r).padStart(2, "0") }),
      /* @__PURE__ */ e("span", { children: l.text })
    ] }) }, l.id)) })
  ] }) });
}
const Je = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", rsquo: "’", laquo: "«", raquo: "»" };
function Ue(n) {
  return n.replace(/<[^>]*>/g, "").replace(/&#(\d+);/g, (t, a) => String.fromCodePoint(Number(a))).replace(/&#x([0-9a-f]+);/gi, (t, a) => String.fromCodePoint(parseInt(a, 16))).replace(/&([a-z]+);/gi, (t, a) => Je[a.toLowerCase()] ?? t).replace(/[ \t\r\n]+/g, " ").trim();
}
function Ge(n) {
  return n.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 64).replace(/-+$/, "") || "section";
}
function Ve(n) {
  const t = [], a = /* @__PURE__ */ new Set();
  return { html: n.replace(/<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi, (r, l, s, d) => {
    var m;
    const c = Ue(d);
    if (!c) return r;
    const p = (m = s == null ? void 0 : s.match(/\sid\s*=\s*"([^"]+)"/i)) == null ? void 0 : m[1];
    let h = p ?? Ge(c);
    if (!p) {
      const f = h;
      for (let _ = 2; a.has(h); _++) h = `${f}-${_}`;
    }
    return a.add(h), t.push({ id: h, text: c, level: l === "2" ? 2 : 3 }), p ? r : `<h${l} id="${h}"${s ?? ""}>${d}</h${l}>`;
  }), entries: t };
}
function Ye({ site: n, post: t, bodyHtml: a, author: i, hero: r, primaryTerm: l, tags: s }) {
  var S, u, g, z, T;
  const d = q(n), c = I(r, "large"), p = t.type === "post", h = (S = E.find((M) => M.slug === (l == null ? void 0 : l.slug))) == null ? void 0 : S.slug, m = new Date(R(t));
  let f = "";
  try {
    f = new Intl.DateTimeFormat(n.settings.language || "fr", { dateStyle: "long" }).format(m);
  } catch {
    f = m.toDateString();
  }
  const _ = !!(p && c && ((u = t.fields) == null ? void 0 : u["header-photo"]) === !0), y = ((g = t.fields) == null ? void 0 : g.toc) === !0 ? Ve(a) : null, v = !!(y && y.entries.length >= 2), x = ((z = t.fields) == null ? void 0 : z.dashboard) === !0, k = typeof ((T = t.fields) == null ? void 0 : T["obs-updated"]) == "string" ? t.fields["obs-updated"] : "", b = t.contentMarkdown.trim().split(/\s+/).length, w = Math.max(1, Math.round(b / 220));
  return /* @__PURE__ */ o("article", { "data-rubric": x ? "news-tech-ia" : h, className: `lx-article${p ? "" : " lx-article--page"}${t.slug === "qui-suis-je" ? " lx-article--about" : ""}`, children: [
    /* @__PURE__ */ o("header", { className: `lx-band lx-band--article${_ ? " lx-band--photo" : ""}${x ? " lx-band--obs" : ""}`, children: [
      _ ? /* @__PURE__ */ e("div", { className: "lx-band__art lx-band__photo", "aria-hidden": "true", children: /* @__PURE__ */ e("img", { src: c, alt: "" }) }) : /* @__PURE__ */ e(C, { seed: t.slug, width: 1600, height: 720, cols: 110, className: "lx-band__art" }),
      /* @__PURE__ */ o("div", { className: "lx-band__inner", children: [
        p && l && /* @__PURE__ */ e("a", { className: "lx-band__rubric", href: `/${ae(l)}`, children: l.name }),
        x && /* @__PURE__ */ e("span", { className: "lx-band__rubric", children: "Observatoire" }),
        x && k && /* @__PURE__ */ o("div", { className: "lx-obs__updated", children: [
          /* @__PURE__ */ e("span", { className: "lx-obs__live" }),
          "Mis à jour le ",
          k,
          " · mise à jour hebdomadaire"
        ] }),
        /* @__PURE__ */ e("h1", { children: t.title }),
        t.excerpt && /* @__PURE__ */ e("p", { className: "lx-band__lead", children: t.excerpt }),
        p && /* @__PURE__ */ o("p", { className: "lx-band__count", children: [
          i && /* @__PURE__ */ e("span", { children: i.url ? /* @__PURE__ */ e("a", { href: i.url, children: i.displayName }) : i.displayName }),
          /* @__PURE__ */ e("time", { dateTime: m.toISOString(), children: f }),
          /* @__PURE__ */ o("span", { children: [
            w,
            " ",
            d("minutes")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("svg", { className: "lx-band__edge", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: A(N(t.slug), 1600, 90) }) })
    ] }),
    c && !_ && !x && /* @__PURE__ */ o("figure", { className: "lx-figure", children: [
      /* @__PURE__ */ e("img", { src: c, alt: (r == null ? void 0 : r.alt) ?? "" }),
      (r == null ? void 0 : r.caption) && /* @__PURE__ */ e("figcaption", { children: r.caption })
    ] }),
    x ? /* @__PURE__ */ e("div", { className: "lx-dash", dangerouslySetInnerHTML: { __html: a } }) : v && y ? /* @__PURE__ */ o("div", { className: "lx-body lx-body--toc", children: [
      /* @__PURE__ */ e(We, { entries: y.entries, label: d("toc"), countLabel: d("tocParts") }),
      /* @__PURE__ */ e("div", { className: "lx-prose", "data-lx-prose": !0, dangerouslySetInnerHTML: { __html: y.html } })
    ] }) : /* @__PURE__ */ e("div", { className: "lx-prose", "data-lx-prose": !0, dangerouslySetInnerHTML: { __html: a } }),
    p && s.length > 0 && /* @__PURE__ */ e("ul", { className: "lx-tags", "aria-label": d("tags"), children: s.map((M) => /* @__PURE__ */ e("li", { children: M.name }, M.id)) }),
    p && /* @__PURE__ */ o(B, { children: [
      /* @__PURE__ */ e(Ae, { site: n, post: t, author: i, hero: r, primaryTerm: l }),
      /* @__PURE__ */ o("section", { className: "lx-related", "data-lx-related": !0, "data-current": t.id, "data-term": t.primaryTermId, hidden: !0, children: [
        /* @__PURE__ */ e("h2", { children: d("continue") }),
        /* @__PURE__ */ e("div", { className: "lx-related__list" })
      ] }),
      /* @__PURE__ */ o("div", { className: "lx-climb", "data-lx-climb": !0, hidden: !0, "aria-hidden": "true", children: [
        /* @__PURE__ */ o("svg", { viewBox: "0 0 1600 60", preserveAspectRatio: "none", children: [
          /* @__PURE__ */ e("path", { className: "lx-climb__base", d: Q(N(t.slug), 1600, 60) }),
          /* @__PURE__ */ e("path", { className: "lx-climb__done", d: Q(N(t.slug), 1600, 60) })
        ] }),
        /* @__PURE__ */ e("span", { className: "lx-climb__dot" })
      ] })
    ] })
  ] });
}
function oe({ posts: n, site: t, lead: a = !0 }) {
  const i = q(t);
  return n.length === 0 ? /* @__PURE__ */ e("p", { className: "lx-empty", children: i("empty") }) : /* @__PURE__ */ e("div", { className: "lx-trail", "data-lx-trail": !0, children: n.map((r, l) => {
    var p;
    const s = F((p = r.category) == null ? void 0 : p.url), d = a && l === 0, c = I(r.hero, d ? "large" : "medium");
    return /* @__PURE__ */ o("article", { className: `lx-way${d ? " lx-way--first" : ""}`, "data-rubric": s, children: [
      /* @__PURE__ */ e("span", { className: "lx-way__pin", "aria-hidden": "true" }),
      /* @__PURE__ */ e("a", { className: "lx-way__art", href: "/" + r.url, tabIndex: -1, "aria-hidden": "true", children: c ? /* @__PURE__ */ e("img", { src: c, alt: "", loading: "lazy" }) : /* @__PURE__ */ e(C, { seed: r.slug, cols: d ? 64 : 44 }) }),
      /* @__PURE__ */ o("div", { className: "lx-way__text", children: [
        /* @__PURE__ */ o("p", { className: "lx-way__meta", children: [
          r.dateLabel && /* @__PURE__ */ e("span", { children: r.dateLabel }),
          r.category && /* @__PURE__ */ e("a", { href: r.category.url, children: r.category.name })
        ] }),
        /* @__PURE__ */ e("h3", { children: /* @__PURE__ */ e("a", { href: "/" + r.url, children: r.title }) }),
        r.excerpt && /* @__PURE__ */ e("p", { className: "lx-way__excerpt", children: r.excerpt })
      ] })
    ] }, r.id);
  }) });
}
function Xe({ site: n, term: t, posts: a, archivesLink: i }) {
  var c;
  const r = q(n), l = (c = E.find((p) => p.slug === t.slug)) == null ? void 0 : c.slug, [s, ...d] = a;
  return /* @__PURE__ */ o(B, { children: [
    /* @__PURE__ */ e(re, { site: n, post: s, rubric: l, label: t.name, edgeSeed: t.slug }),
    d.length > 0 && /* @__PURE__ */ o("section", { className: "lx-section lx-section--flush", "data-rubric": l, children: [
      /* @__PURE__ */ o("h2", { className: "lx-section__title lx-section__title--small", children: [
        r("earlier"),
        " ",
        /* @__PURE__ */ o("span", { children: [
          d.length,
          " ",
          r(d.length > 1 ? "articles" : "article")
        ] })
      ] }),
      /* @__PURE__ */ e(oe, { posts: d, site: n, lead: !1 }),
      i && /* @__PURE__ */ e("p", { className: "lx-more", children: /* @__PURE__ */ e("a", { href: i.href, children: i.label }) })
    ] })
  ] });
}
function Ke({ site: n, author: t, posts: a }) {
  const i = I(t.avatar, "small");
  return /* @__PURE__ */ o(B, { children: [
    /* @__PURE__ */ o("header", { className: "lx-band lx-band--author", children: [
      /* @__PURE__ */ e(C, { seed: t.displayName, width: 1600, height: 620, cols: 110, className: "lx-band__art" }),
      /* @__PURE__ */ o("div", { className: "lx-band__inner", children: [
        i && /* @__PURE__ */ e("img", { className: "lx-avatar", src: i, alt: "", width: 120, height: 120 }),
        /* @__PURE__ */ e("h1", { children: t.displayName }),
        t.title && /* @__PURE__ */ e("p", { className: "lx-band__lead", children: t.title }),
        t.bio && /* @__PURE__ */ e("p", { className: "lx-band__bio", children: t.bio }),
        t.socials && t.socials.length > 0 && /* @__PURE__ */ e("ul", { className: "lx-socials", children: t.socials.map((r) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("a", { href: r.url, rel: "me noopener", "aria-label": ge(r.network), children: /* @__PURE__ */ e(me, { network: r.network }) }) }, r.network)) })
      ] }),
      /* @__PURE__ */ e("svg", { className: "lx-band__edge", viewBox: "0 0 1600 90", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: A(N(t.id), 1600, 90) }) })
    ] }),
    /* @__PURE__ */ e("section", { className: "lx-section lx-section--flush", children: /* @__PURE__ */ e(oe, { posts: a, site: n }) })
  ] });
}
function Ze({ site: n, message: t }) {
  const a = q(n);
  return /* @__PURE__ */ o("section", { className: "lx-lost", children: [
    /* @__PURE__ */ e(C, { seed: "hors-sentier", width: 1600, height: 900, cols: 120, className: "lx-lost__art" }),
    /* @__PURE__ */ o("div", { className: "lx-lost__copy", children: [
      /* @__PURE__ */ e("p", { className: "lx-lost__code", children: "404" }),
      /* @__PURE__ */ e("h1", { children: a("notFoundTitle") }),
      /* @__PURE__ */ e("p", { children: t ?? a("notFoundText") }),
      /* @__PURE__ */ e("a", { className: "lx-button", href: n.homePath ?? "/index.html", children: a("backHome") })
    ] })
  ] });
}
const se = {
  hero: {
    firstLine: "Frédéric",
    secondLine: "Leaux",
    tagline: "Ce que l'IA change au travail, ce que je construis, et ce que je vais chercher en montagne."
  }
}, Qe = {
  "hero.firstLine": { description: "First line of the giant home title." },
  "hero.secondLine": { description: "Second line of the giant home title." },
  "hero.tagline": { description: "Sentence shown above the home title." }
};
function te(n) {
  return { ...se.hero, ...(n == null ? void 0 : n.hero) ?? {} };
}
function et({ config: n, save: t }) {
  const { t: a } = be("theme-leaux-altitude"), [i, r] = Z(te(n)), [l, s] = Z(!1);
  fe(() => r(te(n)), [n]);
  async function d(c) {
    c.preventDefault(), s(!0);
    try {
      await t({ ...n, hero: i }), ue.success(a("settings.saved"));
    } finally {
      s(!1);
    }
  }
  return /* @__PURE__ */ o("form", { onSubmit: d, "data-form-type": "other", className: "max-w-xl space-y-4", children: [
    /* @__PURE__ */ e("h1", { className: "text-xl font-semibold", children: a("settings.title") }),
    ["firstLine", "secondLine", "tagline"].map((c) => /* @__PURE__ */ o("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ e("span", { className: "label", children: a(`settings.${c}`) }),
      /* @__PURE__ */ e("input", { className: "input w-full", value: i[c], onChange: (p) => r({ ...i, [c]: p.target.value }) })
    ] }, c)),
    /* @__PURE__ */ e("button", { type: "submit", className: "btn btn-primary", disabled: l, children: /* @__PURE__ */ e("span", { children: a("settings.save") }) })
  ] });
}
const tt = {
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
      allSection: "The whole section",
      projectsTitle: "My projects",
      obsTag: "The numbers behind the AI wave, updated every week",
      obsAll: "Open the observatory",
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
      allSection: "Toute la rubrique",
      projectsTitle: "Mes projets",
      obsTag: "Les chiffres qui mesurent la vague IA, mis à jour chaque semaine",
      obsAll: "Voir l'observatoire",
      r: { "transition-ia": "Ce que j'ai fait, ce que j'en retiens", "mes-projets": "Ce que je construis à côté", passions: "Treks, sommets et le reste", "news-tech-ia": "L'actu du développement avec l'IA", edito: "Travail, management, humeurs" }
    },
    settings: { navLabel: "Leaux Altitude", title: "Réglages Leaux Altitude", firstLine: "Titre, première ligne", secondLine: "Titre, deuxième ligne", tagline: "Accroche", save: "Enregistrer", saved: "Enregistré. Lancez Régénérer → Accueil pour publier." }
  }
}, lt = {
  id: "leaux-altitude",
  name: "Leaux Altitude",
  version: "1.8.1",
  description: "Dedicated theme for leaux.ovh: generative topographic art, one trail per section.",
  readme: we,
  scssEntry: "theme.css",
  cssText: ve,
  // Uploaded as theme-assets/leaux-altitude-menu.js; fills the menus from
  // data/menu.json so menu edits don't require regenerating every page.
  jsText: _e,
  // The home gets the newest posts of every category (props.categories).
  homeCategoryPosts: Pe,
  // Image variants generated for every upload while this theme is active.
  imageFormats: {
    inputFormats: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
    outputFormat: "webp",
    quality: 80,
    defaultFormat: "medium",
    formats: {
      small: { width: 480, height: 320, fit: "cover" },
      medium: { width: 960, height: 640, fit: "cover" },
      large: { width: 1600, height: 900, fit: "cover" },
      // Round project logos on the home (field "project-logo").
      square: { width: 320, height: 320, fit: "cover" }
    }
  },
  templates: {
    base: Le,
    home: De,
    single: Ye,
    category: Xe,
    author: Ke,
    notFound: Ze
  },
  // /theme-settings page: hero texts.
  settings: { navLabelKey: "settings.navLabel", defaultConfig: se, component: et, schema: Qe },
  // Translations, namespace "theme-leaux-altitude" (admin UI + public labels).
  i18n: tt
};
export {
  lt as default
};
