function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

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
}, $parcel$global.parcelRequire94c2 = parcelRequire);

var $1S1F0 = parcelRequire("1S1F0");

window.addEventListener("load", (() => {
  $parcel$interopDefault($1S1F0).runtime.sendMessage({
    message: "refreshStorage"
  }).then((() => {
    $parcel$interopDefault($1S1F0).runtime.sendMessage({
      message: "userStatus"
    }).then((response => {
      "success" === response.message ? window.location.replace("../html/popup_account.html") : window.location.replace("../html/popup_sign_in.html");
    }));
  }));
}));