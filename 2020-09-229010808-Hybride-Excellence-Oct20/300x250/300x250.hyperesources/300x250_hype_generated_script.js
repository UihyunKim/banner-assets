//	HYPE.documents["300x250"]

(function () {
  (function m() {
    function k(a, b, c, d) {
      var e = !1;
      null == window[a] &&
        (null == window[b]
          ? ((window[b] = []),
            window[b].push(m),
            (a = document.getElementsByTagName("head")[0]),
            (b = document.createElement("script")),
            (e = l),
            false == !0 && (e = ""),
            (b.type = "text/javascript"),
            "" != d &&
              ((b.integrity = d), b.setAttribute("crossorigin", "anonymous")),
            (b.src = e + "/" + c),
            a.appendChild(b))
          : window[b].push(m),
        (e = !0));
      return e;
    }
    var l = "300x250.hyperesources",
      f = "300x250",
      g = "300x250_hype_container";
    if (false == !1)
      try {
        for (
          var c = document.getElementsByTagName("script"), a = 0;
          a < c.length;
          a++
        ) {
          var d = c[a].src,
            b = null != d ? d.indexOf("/300x250_hype_generated_script.js") : -1;
          if (-1 != b) {
            l = d.substr(0, b);
            break;
          }
        }
      } catch (p) {}
    c = navigator.userAgent.match(/MSIE (\d+\.\d+)/);
    c = parseFloat(c && c[1]) || null;
    d =
      !0 == (null != window.HYPE_674F || null != window.HYPE_dtl_674F) ||
      false == !0 ||
      (null != c && 10 > c);
    a = !0 == d ? "HYPE-674.full.min.js" : "HYPE-674.thin.min.js";
    c = !0 == d ? "F" : "T";
    d = d ? "" : "";
    if (
      false == !1 &&
      ((a = k("HYPE_674" + c, "HYPE_dtl_674" + c, a, d)),
      false == !0 &&
        (a =
          a ||
          k("HYPE_w_674", "HYPE_wdtl_674", "HYPE-674.waypoints.min.js", "")),
      false == !0 &&
        (a = a || k("Matter", "HYPE_pdtl_674", "HYPE-674.physics.min.js", "")),
      a)
    )
      return;
    d = window.HYPE.documents;
    if (null != d[f]) {
      b = 1;
      a = f;
      do f = "" + a + "-" + b++;
      while (null != d[f]);
      for (
        var e = document.getElementsByTagName("div"), b = !1, a = 0;
        a < e.length;
        a++
      )
        if (e[a].id == g && null == e[a].getAttribute("HYP_dn")) {
          var b = 1,
            h = g;
          do g = "" + h + "-" + b++;
          while (null != document.getElementById(g));
          e[a].id = g;
          b = !0;
          break;
        }
      if (!1 == b) return;
    }
    b = [];
    b = [
      {
        name: "clicktag1",
        source:
          "function(hypeDocument, element, event) {\t\twindow.open(window.clickTag)\n\t\n\n\t\n}",
        identifier: "18",
      },
      {
        name: "clicktag2",
        source:
          "function(hypeDocument, element, event) {\t\n\t\twindow.open(window.clickTag2)\n}",
        identifier: "19",
      },
      {
        name: "loop",
        source:
          "function(hypeDocument, element, event) {\t nloop++;\n\t if( nloop<3){\n\t hypeDocument.goToTimeInTimelineNamed(0, 'timeline principale')\n\t }else{\n\t hypeDocument.pauseTimelineNamed('timeline principale')\n\t }\n\t\n}",
        identifier: "862",
      },
    ];
    e = {};
    h = {};
    for (a = 0; a < b.length; a++)
      try {
        (h[b[a].identifier] = b[a].name),
          (e[b[a].name] = eval("(function(){return " + b[a].source + "})();"));
      } catch (n) {
        window.console && window.console.log(n),
          (e[b[a].name] = function () {});
      }
    c = new window["HYPE_674" + c](
      f,
      g,
      {
        3: { p: 1, n: "_300x250-logo.png", g: "2368", t: "@1x" },
        1: { p: 1, n: "_300x250-red-bar.png", g: "2364", t: "@1x" },
        4: { p: 1, n: "_300x250-cta.png", g: "2370", t: "@1x" },
        2: { p: 1, n: "_300x250-price.png", g: "2366", t: "@1x" },
        0: { p: 1, n: "_300x250-title.png", g: "2362", t: "@1x" },
        5: { p: 1, n: "_300x250-bg.png", g: "2372", t: "@1x" },
      },
      l,
      [],
      e,
      [{ n: "300x250", o: "1046", X: [0] }],
      [
        {
          o: "1048",
          p: "600px",
          cA: false,
          Y: 300,
          Z: 250,
          L: [],
          c: "#282830",
          bY: 1,
          d: 300,
          U: {},
          T: {
            kTimelineDefaultIdentifier: {
              q: false,
              z: 11,
              i: "kTimelineDefaultIdentifier",
              n: "Main Timeline",
              a: [
                { f: "c", y: 0.15, z: 0.15, i: "a", e: 0, s: 80, o: "2408" },
                { f: "c", y: 0.15, z: 0.15, i: "e", e: 1, s: 0, o: "2408" },
                { f: "c", y: 1, z: 0.15, i: "a", e: 0, s: 160, o: "2405" },
                { f: "c", y: 1, z: 0.15, i: "e", e: 1, s: 0, o: "2405" },
                { y: 1, i: "a", s: 0, z: 0, o: "2408", f: "c" },
                { y: 1, i: "e", s: 1, z: 0, o: "2408", f: "c" },
                { y: 1.15, i: "a", s: 0, z: 0, o: "2405", f: "c" },
                { y: 1.15, i: "e", s: 1, z: 0, o: "2405", f: "c" },
                { f: "c", y: 2, z: 0.15, i: "e", e: 1, s: 0, o: "2404" },
                { f: "c", y: 2, z: 0.15, i: "a", e: 0, s: -10, o: "2404" },
                { f: "c", y: 2.15, z: 1.15, i: "e", e: 1, s: 1, o: "2404" },
                { f: "c", y: 2.15, z: 1.15, i: "a", e: 0, s: 0, o: "2404" },
                { f: "c", y: 4, z: 0.15, i: "a", e: 10, s: 0, o: "2404" },
                { f: "c", y: 4, z: 0.15, i: "e", e: 0, s: 1, o: "2404" },
                { f: "c", y: 4.15, z: 0, i: "e", e: 0, s: 0, o: "2406" },
                { f: "c", y: 4.15, z: 0, i: "a", e: -10, s: -14, o: "2406" },
                { f: "c", y: 4.15, z: 0.15, i: "a", e: 0, s: -10, o: "2406" },
                { f: "c", y: 4.15, z: 0.15, i: "e", e: 1, s: 0, o: "2406" },
                { y: 4.15, i: "a", s: 10, z: 0, o: "2404", f: "c" },
                { y: 4.15, i: "e", s: 0, z: 0, o: "2404", f: "c" },
                { y: 5, i: "e", s: 1, z: 0, o: "2406", f: "c" },
                { y: 5, i: "a", s: 0, z: 0, o: "2406", f: "c" },
                { f: "c", y: 7, z: 0, i: "e", e: 0, s: 0, o: "2407" },
                { f: "c", y: 7, z: 0, i: "a", e: -10, s: -14, o: "2407" },
                { f: "c", y: 7, z: 0.15, i: "a", e: 0, s: -10, o: "2407" },
                { f: "c", y: 7, z: 0.15, i: "e", e: 1, s: 0, o: "2407" },
                { y: 7.15, i: "e", s: 1, z: 0, o: "2407", f: "c" },
                { y: 7.15, i: "a", s: 0, z: 0, o: "2407", f: "c" },
                {
                  f: "c",
                  p: 2,
                  y: 11,
                  z: 0,
                  i: "ActionHandler",
                  s: { a: [{ p: 4, h: "862" }] },
                  o: "kTimelineDefaultIdentifier",
                },
              ],
              f: 30,
              b: [],
            },
          },
          bZ: 180,
          O: ["2407", "2406", "2404", "2403", "2402", "2408", "2405"],
          n: "Untitled Layout",
          _: 0,
          v: {
            2408: {
              h: "2364",
              p: "no-repeat",
              x: "visible",
              a: 80,
              dB: "img",
              q: "100% 100%",
              j: "absolute",
              r: "inline",
              z: 106,
              b: 0,
              k: "div",
              d: 250,
              c: 300,
              e: 0,
            },
            2405: {
              h: "2372",
              p: "no-repeat",
              x: "visible",
              a: 160,
              dB: "img",
              q: "100% 100%",
              j: "absolute",
              r: "inline",
              z: 101,
              b: 0,
              k: "div",
              d: 250,
              c: 300,
              e: 0,
            },
            2402: {
              h: "2368",
              p: "no-repeat",
              x: "visible",
              a: 0,
              dB: "img",
              q: "100% 100%",
              j: "absolute",
              r: "inline",
              z: 105,
              k: "div",
              b: 0,
              d: 250,
              c: 300,
            },
            2406: {
              h: "2366",
              p: "no-repeat",
              x: "visible",
              a: -14,
              dB: "img",
              q: "100% 100%",
              j: "absolute",
              r: "inline",
              z: 103,
              b: 0,
              k: "div",
              d: 250,
              c: 300,
              e: 0,
            },
            2403: {
              c: 300,
              d: 250,
              r: "inline",
              I: "None",
              e: 0,
              J: "None",
              bD: "none",
              K: "None",
              g: "#E8EBED",
              L: "None",
              aP: "pointer",
              M: 0,
              N: 0,
              A: "#D8DDE4",
              x: "visible",
              j: "absolute",
              B: "#D8DDE4",
              P: 0,
              O: 0,
              C: "#D8DDE4",
              z: 107,
              dB: "button",
              D: "#D8DDE4",
              aA: { a: [{ p: 4, h: "18" }] },
              k: "div",
              a: 0,
              b: 0,
            },
            2407: {
              h: "2370",
              p: "no-repeat",
              x: "visible",
              a: -14,
              dB: "img",
              q: "100% 100%",
              j: "absolute",
              r: "inline",
              z: 104,
              b: 0,
              k: "div",
              d: 250,
              c: 300,
              e: 0,
            },
            2404: {
              h: "2362",
              p: "no-repeat",
              x: "visible",
              a: -10,
              dB: "img",
              q: "100% 100%",
              j: "absolute",
              r: "inline",
              z: 102,
              b: 0,
              k: "div",
              d: 250,
              c: 300,
              e: 0,
            },
          },
        },
      ],
      {},
      h,
      {},
      null,
      false,
      true,
      -1,
      true,
      true,
      false,
      true,
      true
    );
    d[f] = c.API;
    document.getElementById(g).setAttribute("HYP_dn", f);
    c.z_o(this.body);
  })();
})();
