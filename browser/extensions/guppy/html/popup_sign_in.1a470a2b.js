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

var $3y9LR = parcelRequire("3y9LR"), $1S1F0 = parcelRequire("1S1F0"), $eTIp8 = parcelRequire("eTIp8"), $izBf7 = parcelRequire("izBf7");

document.querySelector("form").addEventListener("submit", (event => {
  event.preventDefault(), $parcel$interopDefault($3y9LR)("#email, #password").css("border-color", "black"), 
  $parcel$interopDefault($3y9LR)(".error-message").text("");
  const email = $parcel$interopDefault($3y9LR)("#email").val(), pass = $parcel$interopDefault($3y9LR)("#password").val();
  email && pass ? $parcel$interopDefault($1S1F0).runtime.sendMessage({
    message: "login",
    payload: {
      email: email,
      pass: pass
    }
  }).then((response => {
    "success" === response ? window.location.replace("../html/popup_account.html") : $parcel$interopDefault($3y9LR)(".error-message").text("This account is not valid");
  })) : ($parcel$interopDefault($3y9LR)("#email").attr("placeholder", "Enter an email."), 
  $parcel$interopDefault($3y9LR)("#password").attr("placeholder", "Enter a password."), 
  $parcel$interopDefault($3y9LR)("#email, #password").css("border-color", "red"));
})), document.querySelector("#signup-link").addEventListener("click", (() => {
  $parcel$interopDefault($1S1F0).tabs.create({
    url: $eTIp8.env.guppyApiUrl + "/signup/"
  });
})), window.addEventListener("load", (() => {
  $izBf7.isAdsReplacerDisabled().then((checked => {
    !1 === checked ? $2f3e00f66f5539b3$var$switchButton.checked = !1 : !0 === checked ? $2f3e00f66f5539b3$var$switchButton.checked = !0 : document.querySelector(".switch-button-block").style.display = "none";
  }));
}));

const $2f3e00f66f5539b3$var$switchButton = document.querySelector(".switch-button input");

$2f3e00f66f5539b3$var$switchButton.addEventListener("change", $izBf7.toggleAdsReplacer);