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

document.querySelector("button#signout").addEventListener("click", (() => {
  $parcel$interopDefault($1S1F0).runtime.sendMessage({
    message: "logout"
  }).then((response => {
    "success" === response.message && window.location.replace("../html/popup_sign_in.html");
  }));
})), window.addEventListener("load", (() => {
  $parcel$interopDefault($1S1F0).runtime.sendMessage({
    message: "userAccount"
  }).then((response => {
    if ("success" === response.message) {
      let status = "Inactive";
      response.data.profile.status && (status = "Active"), $parcel$interopDefault($3y9LR)("#name").text(response.data.profile.full_name), 
      $parcel$interopDefault($3y9LR)("#email").text(response.data.user), $parcel$interopDefault($3y9LR)("#address").text(response.data.profile.address), 
      $parcel$interopDefault($3y9LR)("#time").text(response.data.profile.last_time), $parcel$interopDefault($3y9LR)("#status").text(status);
      let accountType = "Waitlist";
      response.data.profile.is_waitlisted ? $parcel$interopDefault($3y9LR)(".amount-block").addClass("hidden") : ($parcel$interopDefault($3y9LR)(".amount-block").removeClass("hidden"), 
      accountType = "Approved", $parcel$interopDefault($3y9LR)("#paid_amount").text(response.data.profile.paid_amount_text), 
      $parcel$interopDefault($3y9LR)("#requesting_amount").text(response.data.profile.requesting_amount_text), 
      $parcel$interopDefault($3y9LR)("#unpaid_amount").text(response.data.profile.unpaid_amount_text), 
      response.data.profile.unpaid_amount >= 1e3 && ($parcel$interopDefault($3y9LR)(".button-enabled").removeClass("hidden"), 
      $parcel$interopDefault($3y9LR)(".button-disabled").addClass("hidden"))), $parcel$interopDefault($3y9LR)("#type").text(accountType);
    } else window.location.replace("../html/popup_sign_in.html");
  })), $parcel$interopDefault($3y9LR)(".request-payout").click((() => {
    $parcel$interopDefault($3y9LR).ajax({
      url: $eTIp8.env.guppyApiUrl + "/api/payouts/request/",
      type: "GET",
      dataType: "json"
    }).done((() => {
      $parcel$interopDefault($3y9LR)(".payout-message").text("Your request is sent"), 
      $parcel$interopDefault($3y9LR)(".payout-message").addClass("alert-info");
    })).fail((response => {
      $parcel$interopDefault($3y9LR)(".payout-message").text(response.responseJSON.message), 
      $parcel$interopDefault($3y9LR)(".payout-message").addClass("alert-danger");
    })), $parcel$interopDefault($3y9LR)(".request-payout").prop("disabled", !0);
  })), $izBf7.isAdsReplacerDisabled().then((checked => {
    !1 === checked ? $ddb40498161650fe$var$switchButton.checked = !1 : !0 === checked ? $ddb40498161650fe$var$switchButton.checked = !0 : document.querySelector(".switch-button-block").style.display = "none";
  }));
}));

const $ddb40498161650fe$var$switchButton = document.querySelector(".switch-button input");

$ddb40498161650fe$var$switchButton.addEventListener("change", $izBf7.toggleAdsReplacer);