'use strict';
const _0x5ccf = ["val", "removeClass", "hide", "slice", "removeAttr", "Deaths", "Dec", "#country option:selected", "<option></option>", "https://api.covid19api.com/", "bg-white", "map", "Recovered", "#country, .btn-select-country", ".loader-indicator", "recovered", "Mar", "labels", "catch", "error", "text", "#country", "sort", "addClass", "transparent", "Tests", "Feb", "date", "Slug", "countries", ".t-identified", "show", "Jun", "data", "line", "html", "#6200EA", ".cover .contains-btn button", "bangladesh", 
".stats-container", "log", "Jan", "Nov", ".t-deaths", "json", "click", "Apr", "Confirmed", "last", "acting-welcome", "Aug", "update", "search-visible", "identified", "push", "country selected", "slow", "N/A", "Sep", ".btn-select-country", "iso", "death", "ISO2", "test", "Date", "#statChart", "toDateString", "Identified", "ready", "then", "Country", "datasets", ".contains-country-selector", ".stat-title span", ".t-recovered", "Jul", ".contains-country-selector .input-group-text", ".contains-btn, .cover h1, .chart-icon", 
"disabled", "length", "#d50000", "localeCompare"];
(function(data, i) {
  const write = function(isLE) {
    for (; --isLE;) {
      data["push"](data["shift"]());
    }
  };
  write(++i);
})(_0x5ccf, 247);
const _0x46a6 = function(url, whensCollection) {
  /** @type {number} */
  url = url - 0;
  let _0x46a61 = _0x5ccf[url];
  return _0x46a61;
};
"use strict";
const API_BASE = _0x46a6("0x8");
const MONTHS = [_0x46a6("0x28"), _0x46a6("0x19"), _0x46a6("0xf"), _0x46a6("0x2d"), "May", _0x46a6("0x1f"), _0x46a6("0x4a"), _0x46a6("0x31"), _0x46a6("0x39"), "Oct", _0x46a6("0x29"), _0x46a6("0x5")];
/**
 * @param {?} url
 * @return {?}
 */
async function httpGet(url) {
  const props = {};
  return fetch(url, props)[_0x46a6("0x44")]((canCreateDiscussions) => {
    return canCreateDiscussions[_0x46a6("0x2b")]();
  })[_0x46a6("0x11")]((b) => {
    return console[_0x46a6("0x27")](_0x46a6("0x12"), b);
  });
}
/**
 * @return {undefined}
 */
async function populateCountries() {
  const url = API_BASE + _0x46a6("0x1c");
  const _0x1533f1 = await httpGet(url);
  const deps = _0x1533f1[_0x46a6("0x15")]((canCreateDiscussions, isSlidingUp) => {
    return canCreateDiscussions[_0x46a6("0x45")][_0x46a6("0x50")](isSlidingUp[_0x46a6("0x45")]);
  });
  $(_0x46a6("0x14"))[_0x46a6("0x22")]("");
  for (const depPkgUri of deps) {
    $(_0x46a6("0x14"))["append"]($(_0x46a6("0x7"))[_0x46a6("0x51")](depPkgUri[_0x46a6("0x1b")])[_0x46a6("0x20")](_0x46a6("0x3b"), depPkgUri[_0x46a6("0x3d")])[_0x46a6("0x22")](depPkgUri[_0x46a6("0x45")]));
  }
  $(_0x46a6("0x14"))[_0x46a6("0x51")](_0x46a6("0x25"));
  $(_0x46a6("0xc"))[_0x46a6("0x3")](_0x46a6("0x4d"));
  $(_0x46a6("0x4b"))[_0x46a6("0x16")](_0x46a6("0x9"));
}
$(document)[_0x46a6("0x43")]((canCreateDiscussions) => {
  /**
   * @return {undefined}
   */
  async function init() {
    console[_0x46a6("0x27")](_0x46a6("0x36"));
    $(".loader-indicator")[_0x46a6("0x1e")]();
    $(_0x46a6("0x26"))["hide"]();
    const id = $("#country")[_0x46a6("0x51")]();
    $(_0x46a6("0x48"))[_0x46a6("0x13")]($(_0x46a6("0x6"))["text"]());
    const url = API_BASE + "country/" + id;
    const trace = await httpGet(url);
    console[_0x46a6("0x27")]("stat count", trace[_0x46a6("0x4e")]);
    const _0x1bae81 = trace[_0x46a6("0xa")]((data, step) => {
      const parsed = {
        "date" : data[_0x46a6("0x3f")],
        "test" : 0,
        "identified" : data[_0x46a6("0x2e")],
        "death" : data[_0x46a6("0x4")],
        "recovered" : data[_0x46a6("0xb")]
      };
      if (step > 0) {
        const out = trace[step - 1];
        /** @type {number} */
        parsed["identified"] = data[_0x46a6("0x2e")] - out[_0x46a6("0x2e")];
        /** @type {number} */
        parsed[_0x46a6("0x3c")] = data[_0x46a6("0x4")] - out[_0x46a6("0x4")];
        /** @type {number} */
        parsed[_0x46a6("0xe")] = data[_0x46a6("0xb")] - out[_0x46a6("0xb")];
      }
      /** @type {number} */
      parsed["test"] = 100 * parsed[_0x46a6("0x34")] / 16;
      return parsed;
    });
    const data = trace[trace[_0x46a6("0x4e")] - 1];
    console[_0x46a6("0x27")](_0x46a6("0x2f"), data);
    $(".t-test")[_0x46a6("0x13")](_0x46a6("0x38"));
    $(_0x46a6("0x1d"))[_0x46a6("0x13")](data[_0x46a6("0x2e")]);
    $(_0x46a6("0x2a"))[_0x46a6("0x13")](data["Deaths"]);
    $(_0x46a6("0x49"))[_0x46a6("0x13")](data[_0x46a6("0xb")]);
    $(".t-updated")["text"]((new Date(data[_0x46a6("0x3f")]))[_0x46a6("0x41")]());
    const deps = _0x1bae81[_0x46a6("0x2")](-10);
    /** @type {!Array} */
    anEncryptedData[_0x46a6("0x20")][_0x46a6("0x10")] = [];
    /** @type {!Array} */
    anEncryptedData[_0x46a6("0x20")][_0x46a6("0x46")][0][_0x46a6("0x20")] = [];
    /** @type {!Array} */
    anEncryptedData[_0x46a6("0x20")][_0x46a6("0x46")][1][_0x46a6("0x20")] = [];
    /** @type {!Array} */
    anEncryptedData[_0x46a6("0x20")][_0x46a6("0x46")][2][_0x46a6("0x20")] = [];
    /** @type {!Array} */
    anEncryptedData[_0x46a6("0x20")][_0x46a6("0x46")][3][_0x46a6("0x20")] = [];
    for (const depPkgUri of deps) {
      const _0x1e84a1 = new Date(depPkgUri[_0x46a6("0x1a")]);
      const artistTrack = MONTHS[_0x1e84a1["getMonth"]()] + " " + _0x1e84a1["getDate"]();
      anEncryptedData[_0x46a6("0x20")][_0x46a6("0x10")][_0x46a6("0x35")](artistTrack);
      anEncryptedData["data"][_0x46a6("0x46")][0]["data"][_0x46a6("0x35")](depPkgUri[_0x46a6("0x3e")]);
      anEncryptedData["data"][_0x46a6("0x46")][1][_0x46a6("0x20")][_0x46a6("0x35")](depPkgUri[_0x46a6("0x34")]);
      anEncryptedData["data"]["datasets"][2][_0x46a6("0x20")][_0x46a6("0x35")](depPkgUri[_0x46a6("0x3c")]);
      anEncryptedData[_0x46a6("0x20")][_0x46a6("0x46")][3][_0x46a6("0x20")][_0x46a6("0x35")](depPkgUri[_0x46a6("0xe")]);
    }
    anEncryptedData[_0x46a6("0x32")]();
    $(_0x46a6("0xd"))["hide"]();
    $(_0x46a6("0x26"))[_0x46a6("0x1e")]();
  }
  const ctxPie = $(_0x46a6("0x40"));
  const anEncryptedData = new Chart(ctxPie, {
    "type" : _0x46a6("0x21"),
    "data" : {
      "labels" : [],
      "datasets" : [{
        "label" : _0x46a6("0x18"),
        "data" : [],
        "backgroundColor" : "transparent",
        "borderColor" : _0x46a6("0x23"),
        "borderWidth" : 3
      }, {
        "label" : _0x46a6("0x42"),
        "data" : [],
        "backgroundColor" : _0x46a6("0x17"),
        "borderColor" : "#FF6D00",
        "borderWidth" : 3
      }, {
        "label" : "Deaths",
        "data" : [],
        "backgroundColor" : "transparent",
        "borderColor" : _0x46a6("0x4f"),
        "borderWidth" : 3
      }, {
        "label" : "Recovered",
        "data" : [],
        "backgroundColor" : "transparent",
        "borderColor" : "#00C853",
        "borderWidth" : 3
      }]
    },
    "options" : {}
  });
  $(_0x46a6("0x24"))[_0x46a6("0x2c")](async(canCreateDiscussions) => {
    $(".cover")[_0x46a6("0x0")](_0x46a6("0x30"))[_0x46a6("0x16")](_0x46a6("0x33"));
    $(".loader-indicator")[_0x46a6("0x1e")]();
    $(_0x46a6("0x4c"))[_0x46a6("0x1")]();
    $(_0x46a6("0x47"))["show"](_0x46a6("0x37"));
    await populateCountries();
    init();
  });
  $(_0x46a6("0x3a"))[_0x46a6("0x2c")]((canCreateDiscussions) => {
    init();
  });
});
