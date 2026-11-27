// Leaux Altitude runtime, uploaded as theme-assets/leaux-altitude-menu.js.
// Menus, burger, the hero ridgelines, the trail, the reading climb and
// related posts. Every part fails silently: the static page stays usable.
(function () {
  "use strict";
  var meta = document.querySelector('meta[name="x-cms-base"]');
  var BASE = (meta && meta.getAttribute("content")) || "/";
  if (BASE.charAt(BASE.length - 1) !== "/") BASE += "/";
  function withBase(url) {
    if (!url || BASE === "/" || /^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url) || url.indexOf(BASE) === 0) return url;
    return BASE + url.replace(/^\//, "");
  }
  var here = location.pathname.replace(/\/$/, "/index.html");
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
      var txt = el.textContent, m = txt.match(/\d[\d\u00a0\u202f ]*(?:,\d+)?/);
      if (!m) return;
      var raw = m[0], dec = (raw.split(",")[1] || "").length, target = parseFloat(raw.replace(/[\s\u00a0\u202f]/g, "").replace(",", "."));
      var fmt = function (v) {
        var s = v.toFixed(dec).split("."), int = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
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

/* 3D photos (Agent3D). The post body holds only <figure class="lx-3d" data-3d-src data-3d-runtime
   data-3d-aspect><img></figure> (AgentCMS sanitizes bodies and drops unknown elements such as
   <agent3d-scene>). When a figure comes within 600 px of the viewport, the player module is loaded
   (once) and an <agent3d-scene> is created around the image, which becomes its poster: a post with
   many 3D photos only downloads the ones the reader reaches. */
(function () {
  var figs = document.querySelectorAll("figure.lx-3d[data-3d-src]");
  if (!figs.length) return;
  var player = false;
  function start(fig) {
    var img = fig.querySelector("img"), runtime = fig.getAttribute("data-3d-runtime");
    if (!player && runtime) {
      player = true;
      var s = document.createElement("script");
      s.type = "module"; s.src = runtime;
      document.head.appendChild(s);
    }
    var el = document.createElement("agent3d-scene");
    el.setAttribute("aspect", fig.getAttribute("data-3d-aspect") || "16:9");
    el.setAttribute("role", "img");
    if (img) { el.setAttribute("aria-label", img.alt); img.setAttribute("slot", "poster"); }
    fig.insertBefore(el, img || null);
    if (img) el.appendChild(img);
    el.setAttribute("src", fig.getAttribute("data-3d-src"));
    fig.removeAttribute("data-3d-src");
  }
  /* iOS Safari only sends device tilt after DeviceOrientationEvent.requestPermission(), called from
     a tap (the player listens but never asks). A chip on each 3D photo asks once; once granted in this
     tab session, the first tap anywhere renews it silently on the next pages. */
  var DOE = window.DeviceOrientationEvent;
  if (DOE && typeof DOE.requestPermission === "function") {
    var granted = false, KEY = "lx3dTilt";
    var done = function () { granted = true; try { sessionStorage.setItem(KEY, "1"); } catch (e) {} document.querySelectorAll(".lx-3d__tilt").forEach(function (b) { b.remove(); }); };
    var ask = function () { return DOE.requestPermission().then(function (st) { if (st === "granted") done(); }).catch(function () {}); };
    var remembered = false;
    try { remembered = sessionStorage.getItem(KEY) === "1"; } catch (e) {}
    if (remembered) document.addEventListener("touchend", function once() { document.removeEventListener("touchend", once); ask(); }, { passive: true });
    figs.forEach(function (fig) {
      if (remembered) return;
      var b = document.createElement("button");
      b.type = "button"; b.className = "lx-3d__tilt";
      b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="3" width="10" height="18" rx="2" transform="rotate(-14 12 12)"/><path d="M3 9a9 9 0 0 0 0 6M21 9a9 9 0 0 1 0 6"/></svg>Bouger avec le téléphone';
      b.addEventListener("click", function (e) { e.stopPropagation(); if (!granted) ask(); });
      fig.appendChild(b);
    });
  }
  if (!("IntersectionObserver" in window)) { figs.forEach(start); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { io.unobserve(en.target); start(en.target); } });
  }, { rootMargin: "600px 0px" });
  figs.forEach(function (f) { io.observe(f); });
})();

/* 3D post header ("header-3d" field): on landscape screens ≥ 768 px, once the page has loaded, the
   header photo becomes the poster of an Agent3D scene (scene-wide.json for very wide headers, where
   the photo is framed larger so no edge shows). Phones in portrait keep the photo. */
(function () {
  var box = document.querySelector(".lx-band__photo[data-3d-dir]");
  if (!box || !window.matchMedia || !matchMedia("(orientation: landscape) and (min-width: 768px)").matches) return;
  function start() {
    var img = box.querySelector("img"), r = box.getBoundingClientRect();
    var dir = box.getAttribute("data-3d-dir"), runtime = box.getAttribute("data-3d-runtime");
    if (runtime) { var s = document.createElement("script"); s.type = "module"; s.src = runtime; document.head.appendChild(s); }
    var el = document.createElement("agent3d-scene");
    el.setAttribute("role", "presentation");
    if (img) { img.setAttribute("slot", "poster"); }
    box.insertBefore(el, img || null);
    if (img) el.appendChild(img);
    el.setAttribute("src", dir + (r.width / Math.max(1, r.height) > 1.95 ? "scene-wide.json" : "scene.json"));
  }
  var later = function () { if (window.requestIdleCallback) requestIdleCallback(start, { timeout: 1500 }); else setTimeout(start, 200); };
  if (document.readyState === "complete") later(); else window.addEventListener("load", later, { once: true });
})();

/* Scroll story ("scroll-story" field, .lx-prose[data-story]). Each run of consecutive images
   (figure.lx-3d or a paragraph holding only an image) becomes a tall section with a sticky
   full-screen stage: while it is pinned, the image grows from the column width to full screen,
   the next images of the run slide over it one by one, then the last one shrinks back and the
   text goes on. Images whose shape is far from the screen's are shown whole on a blurred copy
   of themselves instead of being cropped. Off with reduced motion: the post stays as written. */
(function () {
  var prose = document.querySelector(".lx-prose[data-story]");
  if (!prose || !window.requestAnimationFrame) return;
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  function isMedia(n) {
    if (n.nodeType !== 1) return false;
    if (n.matches("figure.lx-3d")) return true;
    return n.tagName === "P" && n.children.length === 1 && n.firstElementChild.tagName === "IMG" && !n.textContent.trim();
  }
  var groups = [], cur = null;
  [].slice.call(prose.childNodes).forEach(function (n) {
    if (n.nodeType === 3 && !n.textContent.trim()) return;
    if (isMedia(n)) { if (!cur) { cur = []; groups.push(cur); } cur.push(n); } else cur = null;
  });
  if (!groups.length) return;
  var clamp = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
  var ease = function (v) { return v < .5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2; };
  var vw = 0, vh = 0, colW = 0;
  var stories = groups.map(function (group) {
    var sec = document.createElement("div"); sec.className = "lx-story";
    var stage = document.createElement("div"); stage.className = "lx-story__stage";
    sec.appendChild(stage);
    prose.insertBefore(sec, group[0]);
    var items = group.map(function (node) {
      var img = node.tagName === "P" ? node.firstElementChild : node.querySelector("img"), aspect = 0, live = null;
      if (node.tagName === "P") {
        aspect = (+img.getAttribute("width") / +img.getAttribute("height")) || (img.naturalWidth / img.naturalHeight) || 1.5;
        node.remove();
      } else {
        var m = /([\d.]+)\s*[:/]\s*([\d.]+)/.exec(node.getAttribute("data-3d-aspect") || node.style.aspectRatio || "");
        aspect = m ? +m[1] / +m[2] : 1.5;
        node.style.aspectRatio = "";
        live = node; live.classList.add("lx-story__live");
      }
      var item = document.createElement("div"); item.className = "lx-story__item";
      // The still image carries every zoom / slide transform. A 3D scene is never transformed
      // (the player sizes its canvas from its on-screen box): it fades in over the still once
      // the image is settled full screen.
      var still = document.createElement("div"); still.className = "lx-story__media lx-story__still";
      var copy = document.createElement("img"); copy.src = img.getAttribute("src"); copy.alt = img.alt; copy.decoding = "async";
      if (live) copy.setAttribute("aria-hidden", "true"), copy.alt = "";
      still.appendChild(live ? copy : img);
      item.style.setProperty("--bg", "url(\"" + copy.src + "\")");
      item.appendChild(still);
      if (live) item.appendChild(live);
      stage.appendChild(item);
      return { item: item, still: still, live: live, aspect: aspect, s0: 1 };
    });
    return { sec: sec, stage: stage, items: items, D: 0, E: 0, H: 0, X: 0 };
  });
  function layout() {
    vw = document.documentElement.clientWidth; vh = window.innerHeight;
    var cs = getComputedStyle(prose);
    colW = prose.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    var A = vw / vh;
    stories.forEach(function (st) {
      st.items.forEach(function (it) {
        var a = it.aspect, contain = A / a > 1.7 || a / A > 1.7, w, h;
        if (contain) { if (a > A) { w = vw; h = vw / a; } else { h = vh; w = vh * a; } }
        else { if (a > A) { h = vh; w = vh * a; } else { w = vw; h = vw / a; } }
        it.item.setAttribute("data-fit", contain ? "contain" : "cover");
        [it.still, it.live].forEach(function (el) {
          if (!el) return;
          var ms = el.style;
          ms.width = w + "px"; ms.height = h + "px"; ms.left = (vw - w) / 2 + "px"; ms.top = (vh - h) / 2 + "px";
        });
        it.s0 = Math.min(colW / w, .86 * vh / h);
      });
      st.E = .9 * vh; st.H = 1.1 * vh; st.X = .9 * vh;
      st.D = st.E + st.items.length * st.H + st.X;
      st.sec.style.height = (vh + st.D) + "px";
    });
    update();
  }
  function update() {
    stories.forEach(function (st) {
      var r = st.sec.getBoundingClientRect();
      if (r.bottom < -50 || r.top > vh + 50) return;
      var t = Math.max(0, Math.min(st.D, -r.top)), n = st.items.length;
      var zoom = ease(clamp(t / st.E)) * (1 - ease(clamp((t - st.E - n * st.H) / st.X)));
      st.stage.style.setProperty("--z", zoom.toFixed(3));
      var u = t - st.E;
      st.items.forEach(function (it, i) {
        var sl = i === 0 ? 1 : clamp((u - (i - .45) * st.H) / (.45 * st.H));
        var next = i + 1 < n ? clamp((u - (i + .55) * st.H) / (.45 * st.H)) : 0;
        var s = it.s0 + (1 - it.s0) * zoom;
        it.item.style.visibility = sl <= 0 || next >= 1 ? "hidden" : "visible";
        it.item.style.transform = sl >= 1 ? "" : "translate3d(0," + ((1 - ease(sl)) * 100).toFixed(2) + "%,0)";
        it.item.style.setProperty("--z", zoom.toFixed(3));
        it.still.style.transform = "scale(" + (s * (1 - .06 * next)).toFixed(4) + ")";
        it.still.style.filter = next > 0 ? "brightness(" + (1 - .45 * next).toFixed(3) + ")" : "";
        if (it.live) it.live.classList.toggle("is-on", zoom > .995 && sl >= 1 && next <= 0);
      });
    });
  }
  var ticking = false;
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; update(); }); } }, { passive: true });
  var lastW = 0, lastH = 0;
  window.addEventListener("resize", function () {
    // Mobile browsers resize the viewport height while their toolbars slide: ignore small height changes.
    if (document.documentElement.clientWidth === lastW && Math.abs(window.innerHeight - lastH) < 140) return;
    lastW = document.documentElement.clientWidth; lastH = window.innerHeight; layout();
  });
  lastW = document.documentElement.clientWidth; lastH = window.innerHeight;
  layout();
})();
