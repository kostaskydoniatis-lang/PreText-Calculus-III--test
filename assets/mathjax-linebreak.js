// CLAUDE 2026-09-15: let MathJax 4 wrap display math that is wider than
// its column (long <me>/<md> lines were running out of the solution boxes
// in HTML).  PreTeXt sets window.MathJax = {...} from mathjax_startup.js
// after this file has run, so intercept that assignment and add the
// output options it does not set.  Loaded through the html.js.extra
// stringparam in project.ptx; this file is copied to external/ by the
// build because assets/ is the external directory (see docinfo.ptx).
(function () {
  var stored;
  Object.defineProperty(window, "MathJax", {
    configurable: true,
    enumerable: true,
    get: function () {
      return stored;
    },
    set: function (value) {
      // The config object is a plain object; once MathJax itself loads it
      // reuses that object, so only touch it when it is still just config.
      if (value && typeof value === "object" && !value.version) {
        value.output = Object.assign({}, value.output, {
          displayOverflow: "linebreak",
          linebreaks: Object.assign({}, (value.output || {}).linebreaks, {
            inline: true
          })
        });
      }
      stored = value;
    }
  });
})();
