(() => {
  var $parcel$global = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, $parcel$modules = {}, $parcel$inits = {}, parcelRequire = $parcel$global.parcelRequire94c2;
  null == parcelRequire && ((parcelRequire = function(id) {
    if (id in $parcel$modules) return $parcel$modules[id].exports;
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {
        id: id,
        exports: {}
      };
      return $parcel$modules[id] = module, init.call(module.exports, module, module.exports), 
      module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    throw err.code = "MODULE_NOT_FOUND", err;
  }).register = function(id, init) {
    $parcel$inits[id] = init;
  }, $parcel$global.parcelRequire94c2 = parcelRequire), parcelRequire.register("hnMfj", (function(module, exports) {
    var e, n, v, s;
    e = module.exports, n = "env", v = () => $ca7a0246ebcb768a$export$8203705777ff332a, 
    Object.defineProperty(e, n, {
      get: v,
      set: s,
      enumerable: !0,
      configurable: !0
    });
    const $ca7a0246ebcb768a$export$8203705777ff332a = {
      guppyApiUrl: "https://guppy.co",
      easylist: "https://easylist.to/easylist/easylist.txt"
    };
  })), parcelRequire("hnMfj");
})();