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
    var W = 0, H = 0, lines = 44, cut = 24, samples = 150;
    var far = [91, 61, 245], mid = [214, 76, 170], near = [255, 107, 61];
    var pointer = { x: -9, y: -9, sx: -9, sy: -9 };
    var start = performance.now(), visible = true, raf = 0;

    function size() {
      var ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      W = hero.clientWidth; H = hero.clientHeight;
      [back, front].forEach(function (c) { c.width = W * ratio; c.height = H * ratio; });
      bctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      fctx.setTransform(ratio, 0, 0, ratio, 0, 0);
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
        var base = H * (.6 + .5 * Math.pow(d, 1.25));
        var amp = H * (.1 + .27 * d) * rise;
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
      window.addEventListener("resize", function () { size(); draw(performance.now()); });
      return;
    }
    window.addEventListener("resize", size);
    hero.addEventListener("pointermove", function (e) {
      var box = hero.getBoundingClientRect();
      pointer.x = (e.clientX - box.left) / box.width;
      pointer.y = Math.pow(Math.max(0, ((e.clientY - box.top) / box.height - .6) / .5), 1 / 1.25);
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

  function start() {
    wireBurger();
    data("/data/menu.json").then(fill).catch(function () {});
    var hero = document.querySelector("[data-lx-hero]");
    if (hero) try { ridgelines(hero); } catch (e) {}
    var trailHost = document.querySelector("[data-lx-trail]");
    if (trailHost) try { trail(trailHost); } catch (e) {}
    var climbHost = document.querySelector("[data-lx-climb]");
    if (climbHost) try { climb(climbHost); } catch (e) {}
    var relatedHost = document.querySelector("[data-lx-related]");
    if (relatedHost) related(relatedHost);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
