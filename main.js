/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/UI/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/UI/styles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(1, 61, 63);
  min-height: 100vh;
}

#container {
  display: grid;
  grid-template-rows: 100px 1fr;
  padding: 15px 50px;
  width: 1000px;
  margin: auto;
}

#container .top-part {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

button {
  appearance: none;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  background-color: purple;
  color: white;
  font-size: 2rem;
  font-weight: bold;
}

button:hover {
  cursor: pointer;
  text-decoration: underline;
}

.start-game-button.not-started {
  background-color: green;
}

.start-game-button.started {
  background-color: red;
  pointer-events: none;
}

#container .main-part {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.left-part,
.right-part {
  display: grid;
  grid-template-rows: 60px 380px;
  position: relative;
}

.left-part > p,
.right-part > p {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  place-self: center;
}

.number-board-indexes,
.letter-board-indexes {
  display: grid;
  gap: 2px;
  justify-items: center;
  font-size: 1.7rem;
  font-weight: bold;
  color: orange;
  position: absolute;
}

.number-board-indexes {
  grid-template-rows: repeat(10, 30px);
  grid-auto-columns: 30px;
  top: 90px;
  left: 20px;
}

.letter-board-indexes {
  grid-template-columns: repeat(10, 30px);
  grid-auto-rows: 30px;
  top: 60px;
  left: 50px;
}

.board-grid {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  grid-template-rows: repeat(10, 30px);
  gap: 2px;
  background-color: black;
  place-self: center;
  border: 2px solid black;
}

.square {
  background-color: white;
}

.square.contains-ship,
.square.highlight-survived-ship {
  background-color: green;
}

.board-grid.computer .square.active:hover {
  cursor: crosshair;
  background-color: orange;
}

.square.missed-shot,
.square.adjacent-to-sunk-ship {
  background-color: grey;
  /* Disabled squares are not possible to click on thanks to this property. Back initially, the app's logic relied on the board inner state */
  pointer-events: none;
}

.square.successful-shot {
  background-color: red;
  pointer-events: none;
}
`, "",{"version":3,"sources":["webpack://./src/UI/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;EACxB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;;EAEE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,QAAQ;EACR,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uCAAuC;EACvC,oBAAoB;EACpB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;EACR,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA;;EAEE,sBAAsB;EACtB,2IAA2I;EAC3I,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;AACtB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: rgb(1, 61, 63);\n  min-height: 100vh;\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 100px 1fr;\n  padding: 15px 50px;\n  width: 1000px;\n  margin: auto;\n}\n\n#container .top-part {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n}\n\nbutton {\n  appearance: none;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 15px;\n  background-color: purple;\n  color: white;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\nbutton:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.start-game-button.not-started {\n  background-color: green;\n}\n\n.start-game-button.started {\n  background-color: red;\n  pointer-events: none;\n}\n\n#container .main-part {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 50px;\n}\n\n.left-part,\n.right-part {\n  display: grid;\n  grid-template-rows: 60px 380px;\n  position: relative;\n}\n\n.left-part > p,\n.right-part > p {\n  font-size: 2.5rem;\n  font-weight: bold;\n  color: white;\n  place-self: center;\n}\n\n.number-board-indexes,\n.letter-board-indexes {\n  display: grid;\n  gap: 2px;\n  justify-items: center;\n  font-size: 1.7rem;\n  font-weight: bold;\n  color: orange;\n  position: absolute;\n}\n\n.number-board-indexes {\n  grid-template-rows: repeat(10, 30px);\n  grid-auto-columns: 30px;\n  top: 90px;\n  left: 20px;\n}\n\n.letter-board-indexes {\n  grid-template-columns: repeat(10, 30px);\n  grid-auto-rows: 30px;\n  top: 60px;\n  left: 50px;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n  gap: 2px;\n  background-color: black;\n  place-self: center;\n  border: 2px solid black;\n}\n\n.square {\n  background-color: white;\n}\n\n.square.contains-ship,\n.square.highlight-survived-ship {\n  background-color: green;\n}\n\n.board-grid.computer .square.active:hover {\n  cursor: crosshair;\n  background-color: orange;\n}\n\n.square.missed-shot,\n.square.adjacent-to-sunk-ship {\n  background-color: grey;\n  /* Disabled squares are not possible to click on thanks to this property. Back initially, the app's logic relied on the board inner state */\n  pointer-events: none;\n}\n\n.square.successful-shot {\n  background-color: red;\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/UI/styles.css":
/*!***************************!*\
  !*** ./src/UI/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/UI/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/gameLoop.js":
/*!*********************************!*\
  !*** ./src/modules/gameLoop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameLoop: () => (/* binding */ GameLoop)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");




class GameLoop {
  constructor() {
    this.humanBoard = this.#populateBoardWithShips();
    this.computerBoard = this.#populateBoardWithShips();
    this.playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('Human', this.humanBoard, this.computerBoard);
    this.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_1__.Computer(
      'Computer',
      this.computerBoard,
      this.humanBoard
    );
    this.attacksNow = this.playerOne;
    this.winner = null;
    this.coordinatesForComputerToTarget = null;
  }

  #populateBoardWithShips() {
    const board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();

    let lengthOne = 0;
    let lengthTwo = 0;
    let lengthThree = 0;
    let lengthFour = 0;

    while (lengthFour === 0) {
      const [x, y, direction] = this.#generateValuesToPlaceShip();
      const isPlaced = board.placeShip(x, y, 4, direction);
      if (isPlaced) {
        lengthFour++;
      }
    }

    while (lengthThree !== 2) {
      const [x, y, direction] = this.#generateValuesToPlaceShip();
      const isPlaced = board.placeShip(x, y, 3, direction);
      if (isPlaced) {
        lengthThree++;
      }
    }

    while (lengthTwo !== 3) {
      const [x, y, direction] = this.#generateValuesToPlaceShip();
      const isPlaced = board.placeShip(x, y, 2, direction);
      if (isPlaced) {
        lengthTwo++;
      }
    }

    while (lengthOne !== 4) {
      const [x, y, direction] = this.#generateValuesToPlaceShip();
      const isPlaced = board.placeShip(x, y, 1, direction);
      if (isPlaced) {
        lengthOne++;
      }
    }

    return board;
  }

  #generateValuesToPlaceShip() {
    const directions = ['ver', 'hor'];
    const index = Math.floor(Math.random() * 2);
    const randomDirection = directions[index];
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    const values = [];
    values.push(x, y, randomDirection);
    return values;
  }

  #passTurns() {
    this.attacksNow.name === 'Human'
      ? (this.attacksNow = this.playerTwo)
      : (this.attacksNow = this.playerOne);
  }

  #findBoardWithGameOver() {
    if (this.humanBoard.gameOver) {
      this.winner = this.playerTwo.name;
      return true;
    } else if (this.computerBoard.gameOver) {
      this.winner = this.playerOne.name;
      return true;
    } else {
      return false;
    }
  }

  makeMove(...coordinates) {
    if (this.winner) {
      return false;
    }

    if (this.attacksNow.name === 'Human') {
      const move = coordinates[0];
      const x = move[0];
      const y = move[1];

      this.playerOne.attackOpponent(x, y);

      if (!this.#findBoardWithGameOver()) {
        this.#passTurns();
      }
      return true;
    }

    if (this.attacksNow.name === 'Computer') {
      let computerMove;
      // Destructuring array assignment
      // By default computer make random moves but if it hits something, then it will try to sink the ship until it succeeds. It achieves the goal by accessing that ship object on allShips array of player's board and storing all its coordinates
      if (coordinates[0]) {
        const [x, y] = coordinates[0];
        this.playerTwo.attackOpponent(x, y);

        if (!this.#findBoardWithGameOver()) {
          this.#passTurns();
        }
        return `${x}${y}`;
      } else {
        computerMove = this.playerTwo.attackOpponent();
        if (!this.#findBoardWithGameOver()) {
          this.#passTurns();
        }
        return computerMove.join('');
      }
    }
  }

  getWhoseTurnItIs() {
    return this.attacksNow.name;
  }

  getWinner() {
    return this.winner;
  }

  getBoardOf(name) {
    if (name === 'Human') {
      return this.humanBoard.board;
    } else if (name === 'Computer') {
      return this.computerBoard.board;
    }
  }

  getSunkShipsOf(name) {
    if (name === 'Human') {
      return this.playerOne.ownBoard.getSunkShipsProperty().length;
    } else if (name === 'Computer') {
      return this.playerTwo.ownBoard.getSunkShipsProperty().length;
    }
  }

  // Randomize functionality makes usage of this method, which randomly generated ships locations and players reference the newly created grid
  changeShipsLocations() {
    this.humanBoard = this.#populateBoardWithShips();
    this.playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('Human', this.humanBoard, this.computerBoard);
    this.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_1__.Computer(
      'Computer',
      this.computerBoard,
      this.humanBoard
    );
  }

  // Helper functions for computer smart moves
  getHumanAllShips() {
    return this.playerOne.ownBoard.getAllShips();
  }

  getCoordinatesOfPreviouslyHitShip() {
    return this.coordinatesForComputerToTarget;
  }

  saveCoordinatesOfPreviouslyHitShip(coordinates) {
    this.coordinatesForComputerToTarget = coordinates;
  }

  // This method will dynamically update the array with coordinates of the currently attacked ships. And when there is one last pair of coordinates, it sets coordinatesForComputerToTarget to its initial value — null. In the meantime, it can be possibly called with attacked ships of length 1 and in that case nothing has ever been stored in coordinatesForComputerToTarger so we prevent the app from crashing by setting null too
  updateCoordinatesOfPreviouslyHitShip(coordinates) {
    if (
      !this.coordinatesForComputerToTarget ||
      this.coordinatesForComputerToTarget.length === 1
    ) {
      this.coordinatesForComputerToTarget = null;
    } else {
      this.coordinatesForComputerToTarget =
        this.coordinatesForComputerToTarget.filter((square) => {
          return coordinates !== square.join('');
        });
    }
  }
}


/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");



class Gameboard {
  constructor() {
    this.board = this.#createGameboard();
    this.allShips = [];
    this.sunkShips = [];
    this.gameOver = false;
  }

  #createGameboard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        // In each square of the board, there is an object with a few properties to control the game's flow
        board[i].push([
          {
            containsShip: false,
            isAdjacentToSomeShip: false,
            isAdjacentToSomeSunkShip: false,
            hasBeenTargetted: false,
          },
        ]);
      }
    }
    return board;
  }

  // Helpers for placeShip()
  #fitInBoardLimits(...coordinates) {
    const arrayWithCoordinates = coordinates;
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    // Arguments of this method come in two different flavors — they can be either individual X and Y values (case with a 1-square ship), or arrays with combinations of X and Y values (case with multiple-square ships)
    // It is necessary to check only if they are greater than 9 in the context of arrays, because ships are expanded to the right/down by default — a two-square ship placed horizontally at [0,0] populates to [0,0], [1,0] and never to [0,0], [-1, 0]
    if (Array.isArray(x) && Array.isArray(y)) {
      const valuesXAndY = [...x, ...y];
      const xOrYIsOutsideBoard = valuesXAndY.filter((value) => value > 9);
      if (xOrYIsOutsideBoard.length) {
        return false;
      } else {
        return true;
      }
    }

    if (x > 9 || y > 9 || x < 0 || y < 0) {
      return false;
    } else {
      return true;
    }
  }

  #reserveAdjacentSquares(...coordinates) {
    const arrayWithCoordinates = coordinates;
    const coordinateX = arrayWithCoordinates[0];
    const coordinateY = arrayWithCoordinates[1];
    const property = arrayWithCoordinates[2];

    // Use two arrays filled with all possible options for adjacent squares
    // A square can have 8 adjacent squares at most
    const adjacentCoordinatesOfX = [-1, 0, 1, 1, 1, 0, -1, -1];
    const adjacentCoordinatesOfY = [-1, -1, -1, 0, 1, 1, 1, 0];

    for (let i = 0; i < 8; i++) {
      const x = coordinateX + adjacentCoordinatesOfX[i];
      const y = coordinateY + adjacentCoordinatesOfY[i];

      if (x > 9 || y > 9 || x < 0 || y < 0) {
        continue;
      } else if (this.getInfoAtBoardCoordinates(x, y).containsShip) {
        continue;
      }

      if (property === 'isAdjacentToSomeShip') {
        this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeShip = true;
      } else if (property === 'isAdjacentToSomeSunkShip') {
        this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeSunkShip = true;
      }
    }
  }

  #confirmCoordinatesAreNotAvailable(...coordinates) {
    const resultOfHelper = this.#accessPropertyOnShipObject(
      coordinates,
      'containsShip'
    );
    return resultOfHelper;
  }

  #standInAnotherShipAdjacentSquares(...coordinates) {
    const resultOfHelper = this.#accessPropertyOnShipObject(
      coordinates,
      'isAdjacentToSomeShip'
    );
    return resultOfHelper;
  }

  // Use the rest operator to place all arguments into one array and then extract specific parts of it
  #accessPropertyOnShipObject(...coordinatesAndProperty) {
    const arrayWithArguments = coordinatesAndProperty;
    const x = arrayWithArguments[0][0];
    const y = arrayWithArguments[0][1];
    const property = arrayWithArguments[1];

    let willCancelShipCreation;
    if (Array.isArray(x) && Array.isArray(y)) {
      for (let i = 0; i < x.length; i++) {
        // Access a property on the ship with which the method was called in a less hard-coded manner with a dot notation
        willCancelShipCreation = this.getInfoAtBoardCoordinates(x[i], y[i])[
          property
        ];

        if (willCancelShipCreation) {
          return true;
        }
      }
      return false;
    } else {
      willCancelShipCreation = this.getInfoAtBoardCoordinates(x, y)[property];

      if (willCancelShipCreation) {
        return true;
      } else {
        return false;
      }
    }
  }

  #compareAgainstLimitConditions(x, y) {
    if (!this.#fitInBoardLimits(x, y)) {
      return false;
    } else if (this.#confirmCoordinatesAreNotAvailable(x, y)) {
      return false;
    } else if (this.#standInAnotherShipAdjacentSquares(x, y)) {
      return false;
    } else {
      return true;
    }
  }

  placeShip(x, y, shipSize, direction = 'hor') {
    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(shipSize);

    if (ship.length > 1) {
      const allValuesOfX = [];
      const allValuesOfY = [];

      // If placed horizontally, the ship's first square will generate the rest of squares to the right, without changing the row. If placed vertically, the ship's first square will generate the rest of squares down, without changing the column
      if (direction === 'hor') {
        for (let i = 0; i < ship.length; i++) {
          allValuesOfX.push(x);
          allValuesOfY.push(y);
          x += 1;
        }
      } else if (direction === 'ver') {
        for (let i = 0; i < ship.length; i++) {
          allValuesOfX.push(x);
          allValuesOfY.push(y);
          y += 1;
        }
      }

      if (!this.#compareAgainstLimitConditions(allValuesOfX, allValuesOfY)) {
        return false;
      }

      for (let i = 0; i < ship.length; i++) {
        this.getInfoAtBoardCoordinates(
          allValuesOfX[i],
          allValuesOfY[i]
        ).containsShip = ship;

        // Store ships inside the allShips array with their coordinates to be able to easier answer if the attacked coordinates belong to any ship
        if (i === 0) {
          this.allShips.push({
            shipInstance: ship,
            coordinates: [[allValuesOfX[i], allValuesOfY[i]]],
          });
        } else {
          this.allShips
            .at(-1)
            .coordinates.push([allValuesOfX[i], allValuesOfY[i]]);
        }
      }

      // Keep reserveAdjacentSquares() in a separate loop because it is important all ships to be priorly created to reserve only truly adjacent squares. The other 2 squares of a ship with the length of 3 are not adjacent; They are a part of the ship
      for (let i = 0; i < ship.length; i++) {
        this.#reserveAdjacentSquares(
          allValuesOfX[i],
          allValuesOfY[i],
          'isAdjacentToSomeShip'
        );
      }
    } else if (ship.length === 1) {
      if (!this.#compareAgainstLimitConditions(x, y)) {
        return false;
      }

      this.getInfoAtBoardCoordinates(x, y).containsShip = ship;
      this.#reserveAdjacentSquares(x, y, 'isAdjacentToSomeShip');
      this.allShips.push({ shipInstance: ship, coordinates: [x, y] });
    }
    // Confirm that the ship has been placed successfully
    return true;
  }

  // Helpers for receiveAttack()
  #targetCoordinatesOutsideBoard(arrayWithCoordinates) {
    const attackIsOutsideBoard = arrayWithCoordinates.filter((coordinate) => {
      return coordinate > 9 || coordinate < 0;
    });

    if (attackIsOutsideBoard.length) {
      return true;
    } else {
      return false;
    }
  }

  #confirmSquaresAreNotAvailable(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.getInfoAtBoardCoordinates(x, y).hasBeenTargetted) {
      return true;
    } else if (this.getInfoAtBoardCoordinates(x, y).isAdjacentToSomeSunkShip) {
      return true;
    } else {
      return false;
    }
  }

  #findTargettedShip(arrayWithCoordinates) {
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

    if (this.getInfoAtBoardCoordinates(x, y).containsShip) {
      return true;
    } else {
      return false;
    }
  }

  #checkIfAllShipsHaveBeenDestroyed() {
    if (
      this.allShips.length === this.sunkShips.length &&
      this.allShips.length &&
      this.sunkShips.length
    ) {
      this.gameOver = true;
    }
  }

  #checkGameState() {
    if (this.gameOver) {
      return true;
    } else {
      return false;
    }
  }

  #checkIfAttackIsAllowed(arrayWithCoordinates) {
    if (this.#checkGameState()) {
      return false;
    } else if (this.#targetCoordinatesOutsideBoard(arrayWithCoordinates)) {
      return false;
    } else if (this.#confirmSquaresAreNotAvailable(arrayWithCoordinates)) {
      return false;
    } else {
      return true;
    }
  }

  receiveAttack(...pairOfCoordinates) {
    // Convert arguments to numbers because in getSpecificShip() I have strict equality to get a ship that is under attack. But from other modules coordinates are transfered as strings to keep 0's, e.g. '03'. If it was a number in the first place, JS would erase 0 and hence an X coordinate was missing
    const arrayWithCoordinates = pairOfCoordinates;
    const x = Number(arrayWithCoordinates[0]);
    const y = Number(arrayWithCoordinates[1]);

    if (!this.#checkIfAttackIsAllowed(arrayWithCoordinates)) {
      return false;
    }

    // hasBeenTargetted property implies either a successful attack (hit a ship) or a failed one (a missed shot)
    this.getInfoAtBoardCoordinates(x, y).hasBeenTargetted = true;
    if (this.#findTargettedShip(arrayWithCoordinates)) {
      const targettedShip = this.getSpecificShip(x, y);
      targettedShip.hit();

      if (targettedShip.isSunk()) {
        this.sunkShips.push(targettedShip);
        const shipSquares = this.getSpecificShip(x, y, 'coordinates');

        // Squares around a sunk ship are not possible for attacks because they cannot contain another ship based on the rules of ships' placing — there must be a one-square gap between two different ships
        if (targettedShip.length === 1) {
          this.#reserveAdjacentSquares(
            shipSquares[0],
            shipSquares[1],
            'isAdjacentToSomeSunkShip'
          );
        } else {
          for (let i = 0; i < shipSquares.length; i++) {
            this.#reserveAdjacentSquares(
              shipSquares[i][0],
              shipSquares[i][1],
              'isAdjacentToSomeSunkShip'
            );
          }
        }
        // Gameboard should keep track of its termination state because GameLoop will rely on it later. If one board has gameOver property set to true, then there must be a winner too
        this.#checkIfAllShipsHaveBeenDestroyed();
      }
    }
    // It is important to return true here because this boolean is carried through multiple modules. For example, a computer's move might not be legal in the scenario when out of possibleMoves array it chooses one which is restricted by adjacentToSomeSunkShip property. These moves are not removed from the list of possible computer moves when the ship has been sunk, so they could be picked but are not going to register an attack
    return true;
  }

  getInfoAtBoardCoordinates(x, y) {
    return this.board.at(x).at(y).at(0);
  }

  getAllShips() {
    return this.allShips;
  }

  getSunkShipsProperty() {
    return this.sunkShips;
  }

  getSpecificShip(x, y, property = 'shipInstance') {
    // Array allShips is an array featuring objects with the 'shipInstance' and 'coordinates' properties
    // If inside 'shipInstance' there is a ship with the length of 1, then its coordinates are stored inside a single array — [...]
    // However, if it's a longer ship, then a few different coordinates are associated with the ship and attacking any of them should hit that ship. In that case, store individual coordinates inside another array — [[...], [...]]
    const ship = this.getAllShips().filter((item) => {
      if (!Array.isArray(item.coordinates[0])) {
        return item.coordinates[0] === x && item.coordinates[1] === y
          ? true
          : false;
      } else {
        for (let i = 0; i < item.coordinates.length; i++) {
          if (item.coordinates[i][0] === x && item.coordinates[i][1] === y) {
            return true;
          }
        }
        return false;
      }
    });

    return ship[0][property];
  }
}


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });


class Player {
  constructor(name, boardOne, boardTwo) {
    this.name = name;
    this.ownBoard = boardOne;
    this.enemyBoard = boardTwo;
  }

  attackOpponent(x, y) {
    return this.enemyBoard.receiveAttack(x, y);
  }
}

class Computer extends Player {
  constructor(name, boardOne, boardTwo) {
    super(name, boardOne, boardTwo);
    this.possibleMoves = this.#createAllPossibleMoves();
  }

  // Create all possible moves. After each move, that move is going to be removed from possibleMoves so that moves are never repeated. However, adjacentToSomeSunkShip moves are reserved. They are removed only when computer tries to use them but they apparently do not count as successful moves
  #createAllPossibleMoves() {
    const moves = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        moves.push(`${i}${j}`);
      }
    }

    return moves;
  }

  attackOpponent(...smartMove) {
    // If computer hits a ship partially, the smartMove argument is given
    if (smartMove[0]) {
      const [x, y] = smartMove;
      this.enemyBoard.receiveAttack(x, y);
      this.possibleMoves = this.possibleMoves.filter((move) => {
        return move !== `${x}${y}`;
      });
    } else {
      let x;
      let y;
      let attemptedAttack;
      
      // This loop might have a few iterations if out of possibleMoves, computer chooses a move that is listed there even though it is no longer available (e.g. adjacentToSomeSunkShip). Coming across those moves here, they will be manually removed from possibleMoves. And computer eventually makes a legal move and moves the game forward
      do {
        const randomIndex = Math.floor(
          Math.random() * this.possibleMoves.length
        );
        x = this.possibleMoves[randomIndex][0];
        y = this.possibleMoves[randomIndex][1];

        attemptedAttack = this.enemyBoard.receiveAttack(x, y);
        this.possibleMoves = this.possibleMoves.filter((move) => {
          return move !== `${x}${y}`;
        });
      } while (!attemptedAttack);

      return [x, y]; // Return an array of coordinates because they are important to access a specific square in the UI implementation. When human clicks manually on squares, it is easy to track but computer must process this in a different way by returning the number of square (div) it attacked
    }
  }

  getLengthOfPossibleMovesArray() {
    return this.possibleMoves.length;
  }
}


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });

class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
  }

  hit() {
    if (this.isSunk()) {
      return false;
    } else {
      this.timesHit += 1;
    }
  }

  isSunk() {
    if (this.length === this.timesHit) {
      return true;
    } else {
      return false;
    }
  }

  getTimesHitProperty() {
    return this.timesHit;
  }
}


/***/ }),

/***/ "./src/modules/visualPart.js":
/*!***********************************!*\
  !*** ./src/modules/visualPart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeGrids: () => (/* binding */ initializeGrids)
/* harmony export */ });
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ "./src/modules/gameLoop.js");



// Select control buttons
const startGameButton = document.querySelector('.start-game-button');
const randomizeButton = document.querySelector('.randomize-ships-locations');
const newGameButton = document.querySelector('.new-game-button');

// Select grids
const grids = document.querySelectorAll('.board-grid');
const numberGridIndexes = document.querySelectorAll('.number-board-indexes');
const letterGridIndexes = document.querySelectorAll('.letter-board-indexes');
const gridSquaresHuman = document.querySelector('.board-grid.human');
const gridSquaresComputer = document.querySelector('.board-grid.computer');

// Event listeners
startGameButton.addEventListener('click', startGame);
newGameButton.addEventListener('click', restartGame);
randomizeButton.addEventListener('click', randomizeShipLocations);
gridSquaresComputer.addEventListener('click', registerClicksOnBoards);

// Varible holding gameLoop object
let game = new _gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop();

// Functions
function createAndAppendElement(elementType, appendTo, ...classArg) {
  const element = document.createElement(elementType);
  appendTo.appendChild(element);

  if (classArg.length) {
    classArg.forEach((classValue) => {
      element.classList.add(classValue);
    });
  }

  return element;
}

// This is the only method that is called in index.js (from which webpack takes input)
function initializeGrids() {
  grids.forEach((div) => {
    for (let i = 0; i < 100; i++) {
      const element = createAndAppendElement('div', div, 'square');

      // Add ids for squares to connect boards arrays (LOGIC) with grids (UI). Reverse them because first coordinate is X, so it changes more frequently and make them strings to keep 0's in 01, 02
      if (i < 10) {
        element.classList.add(i + '0');
      } else {
        const reversedId = String(i).split('').reverse().join('');
        element.classList.add(reversedId);
      }
    }
  });

  numberGridIndexes.forEach((position) => {
    for (let i = 1; i < 11; i++) {
      const element = createAndAppendElement('div', position, 'board-position');
      element.textContent = i;
    }
  });

  letterGridIndexes.forEach((position) => {
    const characters = 'ABCDEFGHIJ';
    for (let i = 0; i < 10; i++) {
      const element = createAndAppendElement('div', position, 'board-position');
      element.textContent = characters[i];
    }
  });

  displayShipsOnBoards();
}

function loopOverAllDivsAndArraySquares(currentGame, property) {
  // Use the spread operator to turn HTML collection into an iterable element i.e. array
  const humanGridDivs = [...gridSquaresHuman.children];
  const computerGridDivs = [...gridSquaresComputer.children];
  const humanBoard = currentGame.getBoardOf('Human');
  const boardComputer = currentGame.getBoardOf('Computer');

  let counterForArrayWithDivs = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const computerSquare = boardComputer[j][i][0];
      const humanSquare = humanBoard[j][i][0];

      // Display the state of boards based on their squares' inner properties 
      if (computerSquare[property]) {
        if (property === 'containsShip') {
          computerGridDivs[counterForArrayWithDivs].classList.add(
            'contains-ship-hidden'
          );
        }

        if (property === 'isAdjacentToSomeSunkShip') {
          computerGridDivs[counterForArrayWithDivs].classList.add(
            'adjacent-to-sunk-ship'
          );
        }
      }

      if (humanSquare[property]) {
        if (property === 'containsShip') {
          humanGridDivs[counterForArrayWithDivs].classList.add('contains-ship');
        } else if (property === 'isAdjacentToSomeSunkShip') {
          humanGridDivs[counterForArrayWithDivs].classList.add(
            'adjacent-to-sunk-ship'
          );
        }
      }

      counterForArrayWithDivs++;
    }
  }
}

function displayShipsOnBoards() {
  loopOverAllDivsAndArraySquares(game, 'containsShip');
}

function disableAdjacentSquaresToSunkShips() {
  loopOverAllDivsAndArraySquares(game, 'isAdjacentToSomeSunkShip');
}

function startGame() {
  const confirmStartGame = confirm(
    'After starting you will not be able to randomize ships locations anymore!'
  );

  if (confirmStartGame) {
    startGameButton.classList.replace('not-started', 'started');
    alert('Game has been started!');
    toggleHoverEffectOnBoard(gridSquaresComputer);
  } else {
    alert('You can still randomize your ships locations!');
  }
}

function restartGame() {
  const buttonStatus = startGameButton.classList;
  if (buttonStatus.contains('not-started')) {
    alert('No active game has been found. You need to start one!');
    return;
  }

  if (!game.getWinner()) {
    const confirmNewGame = confirm('Are you sure you want to start new game?');
    if (!confirmNewGame) {
      alert('Your active game is saved. Play on!');
      return;
    }
  }

  alert('New game!');
  buttonStatus.replace('started', 'not-started');
  game = new _gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop();
  clearPreviousBoardsVisuals();
}

function randomizeShipLocations() {
  const buttonStatus = startGameButton.classList;
  if (buttonStatus.contains('started')) {
    alert('Cannot randomize ships locations during the game!');
  } else {
    game.changeShipsLocations();
    clearPreviousBoardsVisuals();
  }
}

function registerClicksOnBoards(event) {
  if (game.getWinner()) {
    alert('Game over! Start new game!');
    return;
  } else {
    const buttonStatus = startGameButton.classList;
    if (buttonStatus.contains('not-started')) {
      alert('Game has not been started yet!');
      return;
    }
  }

  // Apply event delegations to board grids
  const isInsideSquare = event.target.closest('div.square');
  if (!isInsideSquare) return;

  // Before the attack look at the sunkShips property and compare it with the state of the board after the attack to understand if any ship has been sunk during the move
  const sunkShipsOfPlayerTwo = game.getSunkShipsOf('Computer');

  const getSquareId = [...isInsideSquare.classList].filter((classValue) => {
    return classValue.length === 2 ? true : false;
  });
  game.makeMove(getSquareId[0]);

  if (isInsideSquare.classList.contains('contains-ship-hidden')) {
    isInsideSquare.classList.add('successful-shot');

    if (sunkShipsOfPlayerTwo !== game.getSunkShipsOf('Computer')) {
      disableAdjacentSquaresToSunkShips(game);
      if (game.getWinner()) {
        alert(`Game over! ${game.getWinner()} has won!`);
        toggleHoverEffectOnBoard(gridSquaresComputer);
        return;
      }
    }
  } else {
    isInsideSquare.classList.add('missed-shot');
  }

  computerMakesImmediateMove();
}

function computerMakesImmediateMove() {
  const sunkShipsOfPlayerOne = game.getSunkShipsOf('Human');

  let squareId;
  let isPreviouslyHitShip = game.getCoordinatesOfPreviouslyHitShip();
  // When computer hits a ship but does not sink it fully, it will store the whole ship object and sink it in the upcoming moves
  if (isPreviouslyHitShip) {
    const partOfShipUnderAttack = game
      .getCoordinatesOfPreviouslyHitShip()[0]
      .join('');
    squareId = game.makeMove(partOfShipUnderAttack);
  } else {
    squareId = game.makeMove();
  }

  const squares = [...gridSquaresHuman.children];
  let targettedSquare;
  squares.forEach((square) => {
    if (square.classList.contains(squareId)) {
      targettedSquare = square;
    }
  });

  if (targettedSquare.classList.contains('contains-ship')) {
    targettedSquare.classList.add('successful-shot');

    if (sunkShipsOfPlayerOne !== game.getSunkShipsOf('Human')) {
      game.updateCoordinatesOfPreviouslyHitShip(squareId);
      disableAdjacentSquaresToSunkShips(game);

      if (game.getWinner()) {
        alert(`Game over! ${game.getWinner()} has won`);
        revealSurvivedShips();
        toggleHoverEffectOnBoard(gridSquaresComputer);
        return;
      }
    } else if (game.getCoordinatesOfPreviouslyHitShip()) {
      game.updateCoordinatesOfPreviouslyHitShip(squareId);
    } else {
      const humanShips = game.getHumanAllShips();
      humanShips.forEach((ship) => {
        const coordinatedShip = ship.coordinates;

        // allShips array on game boards contains 1-square ships' pair of coordinates in an outer array where the pair is numbers. With multi-square ships, coordinates are still saved in an outer array. Though their pairs of coordinates are stored in inner arrays. Last but not least, it is not important for us to loop over 1-square ships because they will never be memorized as coordinatesForComputerToTarget
        if (Array.isArray(coordinatedShip[0])) {
          coordinatedShip.forEach((coordinates) => {
            if (coordinates.join('') === squareId) {
              const stillActiveShipSquares = ship.coordinates.filter(
                (square) => {
                  return squareId !== square.join('');
                }
              );
              game.saveCoordinatesOfPreviouslyHitShip(stillActiveShipSquares);
            }
          });
        }
      });
    }
  } else {
    targettedSquare.classList.add('missed-shot');
  }
}

function clearPreviousBoardsVisuals() {
  const boardElements = [...grids, ...letterGridIndexes, ...numberGridIndexes];
  boardElements.forEach((element) => {
    element.replaceChildren();
  });
  initializeGrids();
}

function toggleHoverEffectOnBoard(divs) {
  const arrayOfGridDivs = [...divs.children];
  arrayOfGridDivs.forEach((div) => {
    div.classList.toggle('active');
  });
}

function revealSurvivedShips() {
  const array = [...gridSquaresComputer.children];
  array.forEach((square) => {
    if (
      square.classList.contains('contains-ship-hidden') &&
      !square.classList.contains('successful-shot')
    ) {
      square.classList.add('highlight-survived-ship');
    }
  });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../UI/styles.css */ "./src/UI/styles.css");
/* harmony import */ var _visualPart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualPart.js */ "./src/modules/visualPart.js");



(0,_visualPart_js__WEBPACK_IMPORTED_MODULE_1__.initializeGrids)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLDZCQUE2QixjQUFjLGVBQWUsMkJBQTJCLEdBQUcsVUFBVSxxQ0FBcUMsc0JBQXNCLEdBQUcsZ0JBQWdCLGtCQUFrQixrQ0FBa0MsdUJBQXVCLGtCQUFrQixpQkFBaUIsR0FBRywwQkFBMEIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsY0FBYyxHQUFHLFlBQVkscUJBQXFCLHVCQUF1QixpQkFBaUIsd0JBQXdCLDZCQUE2QixpQkFBaUIsb0JBQW9CLHNCQUFzQixHQUFHLGtCQUFrQixvQkFBb0IsK0JBQStCLEdBQUcsb0NBQW9DLDRCQUE0QixHQUFHLGdDQUFnQywwQkFBMEIseUJBQXlCLEdBQUcsMkJBQTJCLGtCQUFrQixtQ0FBbUMsY0FBYyxHQUFHLDhCQUE4QixrQkFBa0IsbUNBQW1DLHVCQUF1QixHQUFHLHNDQUFzQyxzQkFBc0Isc0JBQXNCLGlCQUFpQix1QkFBdUIsR0FBRyxtREFBbUQsa0JBQWtCLGFBQWEsMEJBQTBCLHNCQUFzQixzQkFBc0Isa0JBQWtCLHVCQUF1QixHQUFHLDJCQUEyQix5Q0FBeUMsNEJBQTRCLGNBQWMsZUFBZSxHQUFHLDJCQUEyQiw0Q0FBNEMseUJBQXlCLGNBQWMsZUFBZSxHQUFHLGlCQUFpQixrQkFBa0IsNENBQTRDLHlDQUF5QyxhQUFhLDRCQUE0Qix1QkFBdUIsNEJBQTRCLEdBQUcsYUFBYSw0QkFBNEIsR0FBRyw2REFBNkQsNEJBQTRCLEdBQUcsK0NBQStDLHNCQUFzQiw2QkFBNkIsR0FBRyx5REFBeUQsMkJBQTJCLHlLQUF5SyxHQUFHLDZCQUE2QiwwQkFBMEIseUJBQXlCLEdBQUcscUJBQXFCO0FBQ3Q4RztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzNJMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNid0M7QUFDSTtBQUN4Qjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkNBQU07QUFDL0IseUJBQXlCLDZDQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsaURBQVM7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRSxFQUFFLEVBQUU7QUFDeEIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJDQUFNO0FBQy9CLHlCQUF5Qiw2Q0FBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xNOEI7QUFDVDs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix1Q0FBSTs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtOQUErTjtBQUMvTixzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQix5Q0FBeUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViwwQkFBMEIsd0JBQXdCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqVzRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUIsc0JBQXNCLEVBQUUsRUFBRSxFQUFFO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsRUFBRSxFQUFFLEVBQUU7QUFDakMsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsRUFBRSxFQUFFLEVBQUU7QUFDbkMsU0FBUztBQUNULFFBQVE7O0FBRVIscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnNDO0FBQ1g7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSwrQ0FBUTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsK0NBQVE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztVQzFTQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNzQjs7QUFFbEQsK0RBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1VJL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvc3R5bGVzLmNzcz85NDhjIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdmlzdWFsUGFydC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgNjEsIDYzKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcbiAgcGFkZGluZzogMTVweCA1MHB4O1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNjb250YWluZXIgLnRvcC1wYXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNDBweDtcbn1cblxuYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc3RhcnQtZ2FtZS1idXR0b24ubm90LXN0YXJ0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnN0YXJ0LWdhbWUtYnV0dG9uLnN0YXJ0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jY29udGFpbmVyIC5tYWluLXBhcnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogNTBweDtcbn1cblxuLmxlZnQtcGFydCxcbi5yaWdodC1wYXJ0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDM4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sZWZ0LXBhcnQgPiBwLFxuLnJpZ2h0LXBhcnQgPiBwIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcbn1cblxuLm51bWJlci1ib2FyZC1pbmRleGVzLFxuLmxldHRlci1ib2FyZC1pbmRleGVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAycHg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogb3JhbmdlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5udW1iZXItYm9hcmQtaW5kZXhlcyB7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDMwcHg7XG4gIHRvcDogOTBweDtcbiAgbGVmdDogMjBweDtcbn1cblxuLmxldHRlci1ib2FyZC1pbmRleGVzIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICBncmlkLWF1dG8tcm93czogMzBweDtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiA1MHB4O1xufVxuXG4uYm9hcmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xuICBnYXA6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5zcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNxdWFyZS5jb250YWlucy1zaGlwLFxuLnNxdWFyZS5oaWdobGlnaHQtc3Vydml2ZWQtc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uYm9hcmQtZ3JpZC5jb21wdXRlciAuc3F1YXJlLmFjdGl2ZTpob3ZlciB7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zcXVhcmUubWlzc2VkLXNob3QsXG4uc3F1YXJlLmFkamFjZW50LXRvLXN1bmstc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIC8qIERpc2FibGVkIHNxdWFyZXMgYXJlIG5vdCBwb3NzaWJsZSB0byBjbGljayBvbiB0aGFua3MgdG8gdGhpcyBwcm9wZXJ0eS4gQmFjayBpbml0aWFsbHksIHRoZSBhcHAncyBsb2dpYyByZWxpZWQgb24gdGhlIGJvYXJkIGlubmVyIHN0YXRlICovXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3F1YXJlLnN1Y2Nlc3NmdWwtc2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9VSS9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsMklBQTJJO0VBQzNJLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgNjEsIDYzKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG4gIHBhZGRpbmc6IDE1cHggNTBweDtcXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbiNjb250YWluZXIgLnRvcC1wYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5zdGFydC1nYW1lLWJ1dHRvbi5ub3Qtc3RhcnRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnN0YXJ0LWdhbWUtYnV0dG9uLnN0YXJ0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNjb250YWluZXIgLm1haW4tcGFydCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubGVmdC1wYXJ0LFxcbi5yaWdodC1wYXJ0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMzgwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sZWZ0LXBhcnQgPiBwLFxcbi5yaWdodC1wYXJ0ID4gcCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubnVtYmVyLWJvYXJkLWluZGV4ZXMsXFxuLmxldHRlci1ib2FyZC1pbmRleGVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDJweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubnVtYmVyLWJvYXJkLWluZGV4ZXMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDMwcHg7XFxuICB0b3A6IDkwcHg7XFxuICBsZWZ0OiAyMHB4O1xcbn1cXG5cXG4ubGV0dGVyLWJvYXJkLWluZGV4ZXMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XFxuICB0b3A6IDYwcHg7XFxuICBsZWZ0OiA1MHB4O1xcbn1cXG5cXG4uYm9hcmQtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ2FwOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3F1YXJlLmNvbnRhaW5zLXNoaXAsXFxuLnNxdWFyZS5oaWdobGlnaHQtc3Vydml2ZWQtc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJvYXJkLWdyaWQuY29tcHV0ZXIgLnNxdWFyZS5hY3RpdmU6aG92ZXIge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5zcXVhcmUubWlzc2VkLXNob3QsXFxuLnNxdWFyZS5hZGphY2VudC10by1zdW5rLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIC8qIERpc2FibGVkIHNxdWFyZXMgYXJlIG5vdCBwb3NzaWJsZSB0byBjbGljayBvbiB0aGFua3MgdG8gdGhpcyBwcm9wZXJ0eS4gQmFjayBpbml0aWFsbHksIHRoZSBhcHAncyBsb2dpYyByZWxpZWQgb24gdGhlIGJvYXJkIGlubmVyIHN0YXRlICovXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNxdWFyZS5zdWNjZXNzZnVsLXNob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tICcuL3BsYXllcic7XG5leHBvcnQgeyBHYW1lTG9vcCB9O1xuXG5jbGFzcyBHYW1lTG9vcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaHVtYW5Cb2FyZCA9IHRoaXMuI3BvcHVsYXRlQm9hcmRXaXRoU2hpcHMoKTtcbiAgICB0aGlzLmNvbXB1dGVyQm9hcmQgPSB0aGlzLiNwb3B1bGF0ZUJvYXJkV2l0aFNoaXBzKCk7XG4gICAgdGhpcy5wbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdIdW1hbicsIHRoaXMuaHVtYW5Cb2FyZCwgdGhpcy5jb21wdXRlckJvYXJkKTtcbiAgICB0aGlzLnBsYXllclR3byA9IG5ldyBDb21wdXRlcihcbiAgICAgICdDb21wdXRlcicsXG4gICAgICB0aGlzLmNvbXB1dGVyQm9hcmQsXG4gICAgICB0aGlzLmh1bWFuQm9hcmRcbiAgICApO1xuICAgIHRoaXMuYXR0YWNrc05vdyA9IHRoaXMucGxheWVyT25lO1xuICAgIHRoaXMud2lubmVyID0gbnVsbDtcbiAgICB0aGlzLmNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldCA9IG51bGw7XG4gIH1cblxuICAjcG9wdWxhdGVCb2FyZFdpdGhTaGlwcygpIHtcbiAgICBjb25zdCBib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAgIGxldCBsZW5ndGhPbmUgPSAwO1xuICAgIGxldCBsZW5ndGhUd28gPSAwO1xuICAgIGxldCBsZW5ndGhUaHJlZSA9IDA7XG4gICAgbGV0IGxlbmd0aEZvdXIgPSAwO1xuXG4gICAgd2hpbGUgKGxlbmd0aEZvdXIgPT09IDApIHtcbiAgICAgIGNvbnN0IFt4LCB5LCBkaXJlY3Rpb25dID0gdGhpcy4jZ2VuZXJhdGVWYWx1ZXNUb1BsYWNlU2hpcCgpO1xuICAgICAgY29uc3QgaXNQbGFjZWQgPSBib2FyZC5wbGFjZVNoaXAoeCwgeSwgNCwgZGlyZWN0aW9uKTtcbiAgICAgIGlmIChpc1BsYWNlZCkge1xuICAgICAgICBsZW5ndGhGb3VyKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKGxlbmd0aFRocmVlICE9PSAyKSB7XG4gICAgICBjb25zdCBbeCwgeSwgZGlyZWN0aW9uXSA9IHRoaXMuI2dlbmVyYXRlVmFsdWVzVG9QbGFjZVNoaXAoKTtcbiAgICAgIGNvbnN0IGlzUGxhY2VkID0gYm9hcmQucGxhY2VTaGlwKHgsIHksIDMsIGRpcmVjdGlvbik7XG4gICAgICBpZiAoaXNQbGFjZWQpIHtcbiAgICAgICAgbGVuZ3RoVGhyZWUrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAobGVuZ3RoVHdvICE9PSAzKSB7XG4gICAgICBjb25zdCBbeCwgeSwgZGlyZWN0aW9uXSA9IHRoaXMuI2dlbmVyYXRlVmFsdWVzVG9QbGFjZVNoaXAoKTtcbiAgICAgIGNvbnN0IGlzUGxhY2VkID0gYm9hcmQucGxhY2VTaGlwKHgsIHksIDIsIGRpcmVjdGlvbik7XG4gICAgICBpZiAoaXNQbGFjZWQpIHtcbiAgICAgICAgbGVuZ3RoVHdvKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKGxlbmd0aE9uZSAhPT0gNCkge1xuICAgICAgY29uc3QgW3gsIHksIGRpcmVjdGlvbl0gPSB0aGlzLiNnZW5lcmF0ZVZhbHVlc1RvUGxhY2VTaGlwKCk7XG4gICAgICBjb25zdCBpc1BsYWNlZCA9IGJvYXJkLnBsYWNlU2hpcCh4LCB5LCAxLCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKGlzUGxhY2VkKSB7XG4gICAgICAgIGxlbmd0aE9uZSsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gICNnZW5lcmF0ZVZhbHVlc1RvUGxhY2VTaGlwKCkge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbJ3ZlcicsICdob3InXTtcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvbiA9IGRpcmVjdGlvbnNbaW5kZXhdO1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgIHZhbHVlcy5wdXNoKHgsIHksIHJhbmRvbURpcmVjdGlvbik7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gICNwYXNzVHVybnMoKSB7XG4gICAgdGhpcy5hdHRhY2tzTm93Lm5hbWUgPT09ICdIdW1hbidcbiAgICAgID8gKHRoaXMuYXR0YWNrc05vdyA9IHRoaXMucGxheWVyVHdvKVxuICAgICAgOiAodGhpcy5hdHRhY2tzTm93ID0gdGhpcy5wbGF5ZXJPbmUpO1xuICB9XG5cbiAgI2ZpbmRCb2FyZFdpdGhHYW1lT3ZlcigpIHtcbiAgICBpZiAodGhpcy5odW1hbkJvYXJkLmdhbWVPdmVyKSB7XG4gICAgICB0aGlzLndpbm5lciA9IHRoaXMucGxheWVyVHdvLm5hbWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcHV0ZXJCb2FyZC5nYW1lT3Zlcikge1xuICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLnBsYXllck9uZS5uYW1lO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBtYWtlTW92ZSguLi5jb29yZGluYXRlcykge1xuICAgIGlmICh0aGlzLndpbm5lcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF0dGFja3NOb3cubmFtZSA9PT0gJ0h1bWFuJykge1xuICAgICAgY29uc3QgbW92ZSA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgY29uc3QgeCA9IG1vdmVbMF07XG4gICAgICBjb25zdCB5ID0gbW92ZVsxXTtcblxuICAgICAgdGhpcy5wbGF5ZXJPbmUuYXR0YWNrT3Bwb25lbnQoeCwgeSk7XG5cbiAgICAgIGlmICghdGhpcy4jZmluZEJvYXJkV2l0aEdhbWVPdmVyKCkpIHtcbiAgICAgICAgdGhpcy4jcGFzc1R1cm5zKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdHRhY2tzTm93Lm5hbWUgPT09ICdDb21wdXRlcicpIHtcbiAgICAgIGxldCBjb21wdXRlck1vdmU7XG4gICAgICAvLyBEZXN0cnVjdHVyaW5nIGFycmF5IGFzc2lnbm1lbnRcbiAgICAgIC8vIEJ5IGRlZmF1bHQgY29tcHV0ZXIgbWFrZSByYW5kb20gbW92ZXMgYnV0IGlmIGl0IGhpdHMgc29tZXRoaW5nLCB0aGVuIGl0IHdpbGwgdHJ5IHRvIHNpbmsgdGhlIHNoaXAgdW50aWwgaXQgc3VjY2VlZHMuIEl0IGFjaGlldmVzIHRoZSBnb2FsIGJ5IGFjY2Vzc2luZyB0aGF0IHNoaXAgb2JqZWN0IG9uIGFsbFNoaXBzIGFycmF5IG9mIHBsYXllcidzIGJvYXJkIGFuZCBzdG9yaW5nIGFsbCBpdHMgY29vcmRpbmF0ZXNcbiAgICAgIGlmIChjb29yZGluYXRlc1swXSkge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgdGhpcy5wbGF5ZXJUd28uYXR0YWNrT3Bwb25lbnQoeCwgeSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLiNmaW5kQm9hcmRXaXRoR2FtZU92ZXIoKSkge1xuICAgICAgICAgIHRoaXMuI3Bhc3NUdXJucygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt4fSR7eX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcHV0ZXJNb3ZlID0gdGhpcy5wbGF5ZXJUd28uYXR0YWNrT3Bwb25lbnQoKTtcbiAgICAgICAgaWYgKCF0aGlzLiNmaW5kQm9hcmRXaXRoR2FtZU92ZXIoKSkge1xuICAgICAgICAgIHRoaXMuI3Bhc3NUdXJucygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wdXRlck1vdmUuam9pbignJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0V2hvc2VUdXJuSXRJcygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tzTm93Lm5hbWU7XG4gIH1cblxuICBnZXRXaW5uZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lubmVyO1xuICB9XG5cbiAgZ2V0Qm9hcmRPZihuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09ICdIdW1hbicpIHtcbiAgICAgIHJldHVybiB0aGlzLmh1bWFuQm9hcmQuYm9hcmQ7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnQ29tcHV0ZXInKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlckJvYXJkLmJvYXJkO1xuICAgIH1cbiAgfVxuXG4gIGdldFN1bmtTaGlwc09mKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ0h1bWFuJykge1xuICAgICAgcmV0dXJuIHRoaXMucGxheWVyT25lLm93bkJvYXJkLmdldFN1bmtTaGlwc1Byb3BlcnR5KCkubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ0NvbXB1dGVyJykge1xuICAgICAgcmV0dXJuIHRoaXMucGxheWVyVHdvLm93bkJvYXJkLmdldFN1bmtTaGlwc1Byb3BlcnR5KCkubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJhbmRvbWl6ZSBmdW5jdGlvbmFsaXR5IG1ha2VzIHVzYWdlIG9mIHRoaXMgbWV0aG9kLCB3aGljaCByYW5kb21seSBnZW5lcmF0ZWQgc2hpcHMgbG9jYXRpb25zIGFuZCBwbGF5ZXJzIHJlZmVyZW5jZSB0aGUgbmV3bHkgY3JlYXRlZCBncmlkXG4gIGNoYW5nZVNoaXBzTG9jYXRpb25zKCkge1xuICAgIHRoaXMuaHVtYW5Cb2FyZCA9IHRoaXMuI3BvcHVsYXRlQm9hcmRXaXRoU2hpcHMoKTtcbiAgICB0aGlzLnBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ0h1bWFuJywgdGhpcy5odW1hbkJvYXJkLCB0aGlzLmNvbXB1dGVyQm9hcmQpO1xuICAgIHRoaXMucGxheWVyVHdvID0gbmV3IENvbXB1dGVyKFxuICAgICAgJ0NvbXB1dGVyJyxcbiAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZCxcbiAgICAgIHRoaXMuaHVtYW5Cb2FyZFxuICAgICk7XG4gIH1cblxuICAvLyBIZWxwZXIgZnVuY3Rpb25zIGZvciBjb21wdXRlciBzbWFydCBtb3Zlc1xuICBnZXRIdW1hbkFsbFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllck9uZS5vd25Cb2FyZC5nZXRBbGxTaGlwcygpO1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZXNPZlByZXZpb3VzbHlIaXRTaGlwKCkge1xuICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldDtcbiAgfVxuXG4gIHNhdmVDb29yZGluYXRlc09mUHJldmlvdXNseUhpdFNoaXAoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldCA9IGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2Qgd2lsbCBkeW5hbWljYWxseSB1cGRhdGUgdGhlIGFycmF5IHdpdGggY29vcmRpbmF0ZXMgb2YgdGhlIGN1cnJlbnRseSBhdHRhY2tlZCBzaGlwcy4gQW5kIHdoZW4gdGhlcmUgaXMgb25lIGxhc3QgcGFpciBvZiBjb29yZGluYXRlcywgaXQgc2V0cyBjb29yZGluYXRlc0ZvckNvbXB1dGVyVG9UYXJnZXQgdG8gaXRzIGluaXRpYWwgdmFsdWUg4oCUIG51bGwuIEluIHRoZSBtZWFudGltZSwgaXQgY2FuIGJlIHBvc3NpYmx5IGNhbGxlZCB3aXRoIGF0dGFja2VkIHNoaXBzIG9mIGxlbmd0aCAxIGFuZCBpbiB0aGF0IGNhc2Ugbm90aGluZyBoYXMgZXZlciBiZWVuIHN0b3JlZCBpbiBjb29yZGluYXRlc0ZvckNvbXB1dGVyVG9UYXJnZXIgc28gd2UgcHJldmVudCB0aGUgYXBwIGZyb20gY3Jhc2hpbmcgYnkgc2V0dGluZyBudWxsIHRvb1xuICB1cGRhdGVDb29yZGluYXRlc09mUHJldmlvdXNseUhpdFNoaXAoY29vcmRpbmF0ZXMpIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5jb29yZGluYXRlc0ZvckNvbXB1dGVyVG9UYXJnZXQgfHxcbiAgICAgIHRoaXMuY29vcmRpbmF0ZXNGb3JDb21wdXRlclRvVGFyZ2V0Lmxlbmd0aCA9PT0gMVxuICAgICkge1xuICAgICAgdGhpcy5jb29yZGluYXRlc0ZvckNvbXB1dGVyVG9UYXJnZXQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldCA9XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXNGb3JDb21wdXRlclRvVGFyZ2V0LmZpbHRlcigoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzICE9PSBzcXVhcmUuam9pbignJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuI2NyZWF0ZUdhbWVib2FyZCgpO1xuICAgIHRoaXMuYWxsU2hpcHMgPSBbXTtcbiAgICB0aGlzLnN1bmtTaGlwcyA9IFtdO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgfVxuXG4gICNjcmVhdGVHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgLy8gSW4gZWFjaCBzcXVhcmUgb2YgdGhlIGJvYXJkLCB0aGVyZSBpcyBhbiBvYmplY3Qgd2l0aCBhIGZldyBwcm9wZXJ0aWVzIHRvIGNvbnRyb2wgdGhlIGdhbWUncyBmbG93XG4gICAgICAgIGJvYXJkW2ldLnB1c2goW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRhaW5zU2hpcDogZmFsc2UsXG4gICAgICAgICAgICBpc0FkamFjZW50VG9Tb21lU2hpcDogZmFsc2UsXG4gICAgICAgICAgICBpc0FkamFjZW50VG9Tb21lU3Vua1NoaXA6IGZhbHNlLFxuICAgICAgICAgICAgaGFzQmVlblRhcmdldHRlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIC8vIEhlbHBlcnMgZm9yIHBsYWNlU2hpcCgpXG4gICNmaXRJbkJvYXJkTGltaXRzKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgYXJyYXlXaXRoQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICBjb25zdCB4ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzFdO1xuXG4gICAgLy8gQXJndW1lbnRzIG9mIHRoaXMgbWV0aG9kIGNvbWUgaW4gdHdvIGRpZmZlcmVudCBmbGF2b3JzIOKAlCB0aGV5IGNhbiBiZSBlaXRoZXIgaW5kaXZpZHVhbCBYIGFuZCBZIHZhbHVlcyAoY2FzZSB3aXRoIGEgMS1zcXVhcmUgc2hpcCksIG9yIGFycmF5cyB3aXRoIGNvbWJpbmF0aW9ucyBvZiBYIGFuZCBZIHZhbHVlcyAoY2FzZSB3aXRoIG11bHRpcGxlLXNxdWFyZSBzaGlwcylcbiAgICAvLyBJdCBpcyBuZWNlc3NhcnkgdG8gY2hlY2sgb25seSBpZiB0aGV5IGFyZSBncmVhdGVyIHRoYW4gOSBpbiB0aGUgY29udGV4dCBvZiBhcnJheXMsIGJlY2F1c2Ugc2hpcHMgYXJlIGV4cGFuZGVkIHRvIHRoZSByaWdodC9kb3duIGJ5IGRlZmF1bHQg4oCUIGEgdHdvLXNxdWFyZSBzaGlwIHBsYWNlZCBob3Jpem9udGFsbHkgYXQgWzAsMF0gcG9wdWxhdGVzIHRvIFswLDBdLCBbMSwwXSBhbmQgbmV2ZXIgdG8gWzAsMF0sIFstMSwgMF1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSAmJiBBcnJheS5pc0FycmF5KHkpKSB7XG4gICAgICBjb25zdCB2YWx1ZXNYQW5kWSA9IFsuLi54LCAuLi55XTtcbiAgICAgIGNvbnN0IHhPcllJc091dHNpZGVCb2FyZCA9IHZhbHVlc1hBbmRZLmZpbHRlcigodmFsdWUpID0+IHZhbHVlID4gOSk7XG4gICAgICBpZiAoeE9yWUlzT3V0c2lkZUJvYXJkLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCA+IDkgfHwgeSA+IDkgfHwgeCA8IDAgfHwgeSA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgI3Jlc2VydmVBZGphY2VudFNxdWFyZXMoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBhcnJheVdpdGhDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVYID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgY29vcmRpbmF0ZVkgPSBhcnJheVdpdGhDb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzJdO1xuXG4gICAgLy8gVXNlIHR3byBhcnJheXMgZmlsbGVkIHdpdGggYWxsIHBvc3NpYmxlIG9wdGlvbnMgZm9yIGFkamFjZW50IHNxdWFyZXNcbiAgICAvLyBBIHNxdWFyZSBjYW4gaGF2ZSA4IGFkamFjZW50IHNxdWFyZXMgYXQgbW9zdFxuICAgIGNvbnN0IGFkamFjZW50Q29vcmRpbmF0ZXNPZlggPSBbLTEsIDAsIDEsIDEsIDEsIDAsIC0xLCAtMV07XG4gICAgY29uc3QgYWRqYWNlbnRDb29yZGluYXRlc09mWSA9IFstMSwgLTEsIC0xLCAwLCAxLCAxLCAxLCAwXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gY29vcmRpbmF0ZVggKyBhZGphY2VudENvb3JkaW5hdGVzT2ZYW2ldO1xuICAgICAgY29uc3QgeSA9IGNvb3JkaW5hdGVZICsgYWRqYWNlbnRDb29yZGluYXRlc09mWVtpXTtcblxuICAgICAgaWYgKHggPiA5IHx8IHkgPiA5IHx8IHggPCAwIHx8IHkgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuY29udGFpbnNTaGlwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcGVydHkgPT09ICdpc0FkamFjZW50VG9Tb21lU2hpcCcpIHtcbiAgICAgICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmlzQWRqYWNlbnRUb1NvbWVTaGlwID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkgPT09ICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnKSB7XG4gICAgICAgIHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5pc0FkamFjZW50VG9Tb21lU3Vua1NoaXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNjb25maXJtQ29vcmRpbmF0ZXNBcmVOb3RBdmFpbGFibGUoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCByZXN1bHRPZkhlbHBlciA9IHRoaXMuI2FjY2Vzc1Byb3BlcnR5T25TaGlwT2JqZWN0KFxuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAnY29udGFpbnNTaGlwJ1xuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdE9mSGVscGVyO1xuICB9XG5cbiAgI3N0YW5kSW5Bbm90aGVyU2hpcEFkamFjZW50U3F1YXJlcyguLi5jb29yZGluYXRlcykge1xuICAgIGNvbnN0IHJlc3VsdE9mSGVscGVyID0gdGhpcy4jYWNjZXNzUHJvcGVydHlPblNoaXBPYmplY3QoXG4gICAgICBjb29yZGluYXRlcyxcbiAgICAgICdpc0FkamFjZW50VG9Tb21lU2hpcCdcbiAgICApO1xuICAgIHJldHVybiByZXN1bHRPZkhlbHBlcjtcbiAgfVxuXG4gIC8vIFVzZSB0aGUgcmVzdCBvcGVyYXRvciB0byBwbGFjZSBhbGwgYXJndW1lbnRzIGludG8gb25lIGFycmF5IGFuZCB0aGVuIGV4dHJhY3Qgc3BlY2lmaWMgcGFydHMgb2YgaXRcbiAgI2FjY2Vzc1Byb3BlcnR5T25TaGlwT2JqZWN0KC4uLmNvb3JkaW5hdGVzQW5kUHJvcGVydHkpIHtcbiAgICBjb25zdCBhcnJheVdpdGhBcmd1bWVudHMgPSBjb29yZGluYXRlc0FuZFByb3BlcnR5O1xuICAgIGNvbnN0IHggPSBhcnJheVdpdGhBcmd1bWVudHNbMF1bMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aEFyZ3VtZW50c1swXVsxXTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFycmF5V2l0aEFyZ3VtZW50c1sxXTtcblxuICAgIGxldCB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHgpICYmIEFycmF5LmlzQXJyYXkoeSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBBY2Nlc3MgYSBwcm9wZXJ0eSBvbiB0aGUgc2hpcCB3aXRoIHdoaWNoIHRoZSBtZXRob2Qgd2FzIGNhbGxlZCBpbiBhIGxlc3MgaGFyZC1jb2RlZCBtYW5uZXIgd2l0aCBhIGRvdCBub3RhdGlvblxuICAgICAgICB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uID0gdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHhbaV0sIHlbaV0pW1xuICAgICAgICAgIHByb3BlcnR5XG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKHdpbGxDYW5jZWxTaGlwQ3JlYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uID0gdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpW3Byb3BlcnR5XTtcblxuICAgICAgaWYgKHdpbGxDYW5jZWxTaGlwQ3JlYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2NvbXBhcmVBZ2FpbnN0TGltaXRDb25kaXRpb25zKHgsIHkpIHtcbiAgICBpZiAoIXRoaXMuI2ZpdEluQm9hcmRMaW1pdHMoeCwgeSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuI2NvbmZpcm1Db29yZGluYXRlc0FyZU5vdEF2YWlsYWJsZSh4LCB5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy4jc3RhbmRJbkFub3RoZXJTaGlwQWRqYWNlbnRTcXVhcmVzKHgsIHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcCh4LCB5LCBzaGlwU2l6ZSwgZGlyZWN0aW9uID0gJ2hvcicpIHtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcFNpemUpO1xuXG4gICAgaWYgKHNoaXAubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgYWxsVmFsdWVzT2ZYID0gW107XG4gICAgICBjb25zdCBhbGxWYWx1ZXNPZlkgPSBbXTtcblxuICAgICAgLy8gSWYgcGxhY2VkIGhvcml6b250YWxseSwgdGhlIHNoaXAncyBmaXJzdCBzcXVhcmUgd2lsbCBnZW5lcmF0ZSB0aGUgcmVzdCBvZiBzcXVhcmVzIHRvIHRoZSByaWdodCwgd2l0aG91dCBjaGFuZ2luZyB0aGUgcm93LiBJZiBwbGFjZWQgdmVydGljYWxseSwgdGhlIHNoaXAncyBmaXJzdCBzcXVhcmUgd2lsbCBnZW5lcmF0ZSB0aGUgcmVzdCBvZiBzcXVhcmVzIGRvd24sIHdpdGhvdXQgY2hhbmdpbmcgdGhlIGNvbHVtblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcicpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZYLnB1c2goeCk7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZZLnB1c2goeSk7XG4gICAgICAgICAgeCArPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcicpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZYLnB1c2goeCk7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZZLnB1c2goeSk7XG4gICAgICAgICAgeSArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy4jY29tcGFyZUFnYWluc3RMaW1pdENvbmRpdGlvbnMoYWxsVmFsdWVzT2ZYLCBhbGxWYWx1ZXNPZlkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyhcbiAgICAgICAgICBhbGxWYWx1ZXNPZlhbaV0sXG4gICAgICAgICAgYWxsVmFsdWVzT2ZZW2ldXG4gICAgICAgICkuY29udGFpbnNTaGlwID0gc2hpcDtcblxuICAgICAgICAvLyBTdG9yZSBzaGlwcyBpbnNpZGUgdGhlIGFsbFNoaXBzIGFycmF5IHdpdGggdGhlaXIgY29vcmRpbmF0ZXMgdG8gYmUgYWJsZSB0byBlYXNpZXIgYW5zd2VyIGlmIHRoZSBhdHRhY2tlZCBjb29yZGluYXRlcyBiZWxvbmcgdG8gYW55IHNoaXBcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmFsbFNoaXBzLnB1c2goe1xuICAgICAgICAgICAgc2hpcEluc3RhbmNlOiBzaGlwLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtbYWxsVmFsdWVzT2ZYW2ldLCBhbGxWYWx1ZXNPZllbaV1dXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFsbFNoaXBzXG4gICAgICAgICAgICAuYXQoLTEpXG4gICAgICAgICAgICAuY29vcmRpbmF0ZXMucHVzaChbYWxsVmFsdWVzT2ZYW2ldLCBhbGxWYWx1ZXNPZllbaV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBLZWVwIHJlc2VydmVBZGphY2VudFNxdWFyZXMoKSBpbiBhIHNlcGFyYXRlIGxvb3AgYmVjYXVzZSBpdCBpcyBpbXBvcnRhbnQgYWxsIHNoaXBzIHRvIGJlIHByaW9ybHkgY3JlYXRlZCB0byByZXNlcnZlIG9ubHkgdHJ1bHkgYWRqYWNlbnQgc3F1YXJlcy4gVGhlIG90aGVyIDIgc3F1YXJlcyBvZiBhIHNoaXAgd2l0aCB0aGUgbGVuZ3RoIG9mIDMgYXJlIG5vdCBhZGphY2VudDsgVGhleSBhcmUgYSBwYXJ0IG9mIHRoZSBzaGlwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy4jcmVzZXJ2ZUFkamFjZW50U3F1YXJlcyhcbiAgICAgICAgICBhbGxWYWx1ZXNPZlhbaV0sXG4gICAgICAgICAgYWxsVmFsdWVzT2ZZW2ldLFxuICAgICAgICAgICdpc0FkamFjZW50VG9Tb21lU2hpcCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXAubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAoIXRoaXMuI2NvbXBhcmVBZ2FpbnN0TGltaXRDb25kaXRpb25zKHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmNvbnRhaW5zU2hpcCA9IHNoaXA7XG4gICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKHgsIHksICdpc0FkamFjZW50VG9Tb21lU2hpcCcpO1xuICAgICAgdGhpcy5hbGxTaGlwcy5wdXNoKHsgc2hpcEluc3RhbmNlOiBzaGlwLCBjb29yZGluYXRlczogW3gsIHldIH0pO1xuICAgIH1cbiAgICAvLyBDb25maXJtIHRoYXQgdGhlIHNoaXAgaGFzIGJlZW4gcGxhY2VkIHN1Y2Nlc3NmdWxseVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gSGVscGVycyBmb3IgcmVjZWl2ZUF0dGFjaygpXG4gICN0YXJnZXRDb29yZGluYXRlc091dHNpZGVCb2FyZChhcnJheVdpdGhDb29yZGluYXRlcykge1xuICAgIGNvbnN0IGF0dGFja0lzT3V0c2lkZUJvYXJkID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXMuZmlsdGVyKChjb29yZGluYXRlKSA9PiB7XG4gICAgICByZXR1cm4gY29vcmRpbmF0ZSA+IDkgfHwgY29vcmRpbmF0ZSA8IDA7XG4gICAgfSk7XG5cbiAgICBpZiAoYXR0YWNrSXNPdXRzaWRlQm9hcmQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gICNjb25maXJtU3F1YXJlc0FyZU5vdEF2YWlsYWJsZShhcnJheVdpdGhDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHggPSBhcnJheVdpdGhDb29yZGluYXRlc1swXTtcbiAgICBjb25zdCB5ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMV07XG5cbiAgICBpZiAodGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmhhc0JlZW5UYXJnZXR0ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmlzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjZmluZFRhcmdldHRlZFNoaXAoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCB4ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzFdO1xuXG4gICAgaWYgKHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5jb250YWluc1NoaXApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgI2NoZWNrSWZBbGxTaGlwc0hhdmVCZWVuRGVzdHJveWVkKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuYWxsU2hpcHMubGVuZ3RoID09PSB0aGlzLnN1bmtTaGlwcy5sZW5ndGggJiZcbiAgICAgIHRoaXMuYWxsU2hpcHMubGVuZ3RoICYmXG4gICAgICB0aGlzLnN1bmtTaGlwcy5sZW5ndGhcbiAgICApIHtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gICNjaGVja0dhbWVTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5nYW1lT3Zlcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjY2hlY2tJZkF0dGFja0lzQWxsb3dlZChhcnJheVdpdGhDb29yZGluYXRlcykge1xuICAgIGlmICh0aGlzLiNjaGVja0dhbWVTdGF0ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLiN0YXJnZXRDb29yZGluYXRlc091dHNpZGVCb2FyZChhcnJheVdpdGhDb29yZGluYXRlcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuI2NvbmZpcm1TcXVhcmVzQXJlTm90QXZhaWxhYmxlKGFycmF5V2l0aENvb3JkaW5hdGVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKC4uLnBhaXJPZkNvb3JkaW5hdGVzKSB7XG4gICAgLy8gQ29udmVydCBhcmd1bWVudHMgdG8gbnVtYmVycyBiZWNhdXNlIGluIGdldFNwZWNpZmljU2hpcCgpIEkgaGF2ZSBzdHJpY3QgZXF1YWxpdHkgdG8gZ2V0IGEgc2hpcCB0aGF0IGlzIHVuZGVyIGF0dGFjay4gQnV0IGZyb20gb3RoZXIgbW9kdWxlcyBjb29yZGluYXRlcyBhcmUgdHJhbnNmZXJlZCBhcyBzdHJpbmdzIHRvIGtlZXAgMCdzLCBlLmcuICcwMycuIElmIGl0IHdhcyBhIG51bWJlciBpbiB0aGUgZmlyc3QgcGxhY2UsIEpTIHdvdWxkIGVyYXNlIDAgYW5kIGhlbmNlIGFuIFggY29vcmRpbmF0ZSB3YXMgbWlzc2luZ1xuICAgIGNvbnN0IGFycmF5V2l0aENvb3JkaW5hdGVzID0gcGFpck9mQ29vcmRpbmF0ZXM7XG4gICAgY29uc3QgeCA9IE51bWJlcihhcnJheVdpdGhDb29yZGluYXRlc1swXSk7XG4gICAgY29uc3QgeSA9IE51bWJlcihhcnJheVdpdGhDb29yZGluYXRlc1sxXSk7XG5cbiAgICBpZiAoIXRoaXMuI2NoZWNrSWZBdHRhY2tJc0FsbG93ZWQoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaGFzQmVlblRhcmdldHRlZCBwcm9wZXJ0eSBpbXBsaWVzIGVpdGhlciBhIHN1Y2Nlc3NmdWwgYXR0YWNrIChoaXQgYSBzaGlwKSBvciBhIGZhaWxlZCBvbmUgKGEgbWlzc2VkIHNob3QpXG4gICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmhhc0JlZW5UYXJnZXR0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLiNmaW5kVGFyZ2V0dGVkU2hpcChhcnJheVdpdGhDb29yZGluYXRlcykpIHtcbiAgICAgIGNvbnN0IHRhcmdldHRlZFNoaXAgPSB0aGlzLmdldFNwZWNpZmljU2hpcCh4LCB5KTtcbiAgICAgIHRhcmdldHRlZFNoaXAuaGl0KCk7XG5cbiAgICAgIGlmICh0YXJnZXR0ZWRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHRoaXMuc3Vua1NoaXBzLnB1c2godGFyZ2V0dGVkU2hpcCk7XG4gICAgICAgIGNvbnN0IHNoaXBTcXVhcmVzID0gdGhpcy5nZXRTcGVjaWZpY1NoaXAoeCwgeSwgJ2Nvb3JkaW5hdGVzJyk7XG5cbiAgICAgICAgLy8gU3F1YXJlcyBhcm91bmQgYSBzdW5rIHNoaXAgYXJlIG5vdCBwb3NzaWJsZSBmb3IgYXR0YWNrcyBiZWNhdXNlIHRoZXkgY2Fubm90IGNvbnRhaW4gYW5vdGhlciBzaGlwIGJhc2VkIG9uIHRoZSBydWxlcyBvZiBzaGlwcycgcGxhY2luZyDigJQgdGhlcmUgbXVzdCBiZSBhIG9uZS1zcXVhcmUgZ2FwIGJldHdlZW4gdHdvIGRpZmZlcmVudCBzaGlwc1xuICAgICAgICBpZiAodGFyZ2V0dGVkU2hpcC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKFxuICAgICAgICAgICAgc2hpcFNxdWFyZXNbMF0sXG4gICAgICAgICAgICBzaGlwU3F1YXJlc1sxXSxcbiAgICAgICAgICAgICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKFxuICAgICAgICAgICAgICBzaGlwU3F1YXJlc1tpXVswXSxcbiAgICAgICAgICAgICAgc2hpcFNxdWFyZXNbaV1bMV0sXG4gICAgICAgICAgICAgICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBHYW1lYm9hcmQgc2hvdWxkIGtlZXAgdHJhY2sgb2YgaXRzIHRlcm1pbmF0aW9uIHN0YXRlIGJlY2F1c2UgR2FtZUxvb3Agd2lsbCByZWx5IG9uIGl0IGxhdGVyLiBJZiBvbmUgYm9hcmQgaGFzIGdhbWVPdmVyIHByb3BlcnR5IHNldCB0byB0cnVlLCB0aGVuIHRoZXJlIG11c3QgYmUgYSB3aW5uZXIgdG9vXG4gICAgICAgIHRoaXMuI2NoZWNrSWZBbGxTaGlwc0hhdmVCZWVuRGVzdHJveWVkKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEl0IGlzIGltcG9ydGFudCB0byByZXR1cm4gdHJ1ZSBoZXJlIGJlY2F1c2UgdGhpcyBib29sZWFuIGlzIGNhcnJpZWQgdGhyb3VnaCBtdWx0aXBsZSBtb2R1bGVzLiBGb3IgZXhhbXBsZSwgYSBjb21wdXRlcidzIG1vdmUgbWlnaHQgbm90IGJlIGxlZ2FsIGluIHRoZSBzY2VuYXJpbyB3aGVuIG91dCBvZiBwb3NzaWJsZU1vdmVzIGFycmF5IGl0IGNob29zZXMgb25lIHdoaWNoIGlzIHJlc3RyaWN0ZWQgYnkgYWRqYWNlbnRUb1NvbWVTdW5rU2hpcCBwcm9wZXJ0eS4gVGhlc2UgbW92ZXMgYXJlIG5vdCByZW1vdmVkIGZyb20gdGhlIGxpc3Qgb2YgcG9zc2libGUgY29tcHV0ZXIgbW92ZXMgd2hlbiB0aGUgc2hpcCBoYXMgYmVlbiBzdW5rLCBzbyB0aGV5IGNvdWxkIGJlIHBpY2tlZCBidXQgYXJlIG5vdCBnb2luZyB0byByZWdpc3RlciBhbiBhdHRhY2tcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkLmF0KHgpLmF0KHkpLmF0KDApO1xuICB9XG5cbiAgZ2V0QWxsU2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsU2hpcHM7XG4gIH1cblxuICBnZXRTdW5rU2hpcHNQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdW5rU2hpcHM7XG4gIH1cblxuICBnZXRTcGVjaWZpY1NoaXAoeCwgeSwgcHJvcGVydHkgPSAnc2hpcEluc3RhbmNlJykge1xuICAgIC8vIEFycmF5IGFsbFNoaXBzIGlzIGFuIGFycmF5IGZlYXR1cmluZyBvYmplY3RzIHdpdGggdGhlICdzaGlwSW5zdGFuY2UnIGFuZCAnY29vcmRpbmF0ZXMnIHByb3BlcnRpZXNcbiAgICAvLyBJZiBpbnNpZGUgJ3NoaXBJbnN0YW5jZScgdGhlcmUgaXMgYSBzaGlwIHdpdGggdGhlIGxlbmd0aCBvZiAxLCB0aGVuIGl0cyBjb29yZGluYXRlcyBhcmUgc3RvcmVkIGluc2lkZSBhIHNpbmdsZSBhcnJheSDigJQgWy4uLl1cbiAgICAvLyBIb3dldmVyLCBpZiBpdCdzIGEgbG9uZ2VyIHNoaXAsIHRoZW4gYSBmZXcgZGlmZmVyZW50IGNvb3JkaW5hdGVzIGFyZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNoaXAgYW5kIGF0dGFja2luZyBhbnkgb2YgdGhlbSBzaG91bGQgaGl0IHRoYXQgc2hpcC4gSW4gdGhhdCBjYXNlLCBzdG9yZSBpbmRpdmlkdWFsIGNvb3JkaW5hdGVzIGluc2lkZSBhbm90aGVyIGFycmF5IOKAlCBbWy4uLl0sIFsuLi5dXVxuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdldEFsbFNoaXBzKCkuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5jb29yZGluYXRlc1swXSkpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uY29vcmRpbmF0ZXNbMF0gPT09IHggJiYgaXRlbS5jb29yZGluYXRlc1sxXSA9PT0geVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0uY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoaXRlbS5jb29yZGluYXRlc1tpXVswXSA9PT0geCAmJiBpdGVtLmNvb3JkaW5hdGVzW2ldWzFdID09PSB5KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBbMF1bcHJvcGVydHldO1xuICB9XG59XG4iLCJleHBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH07XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkT25lLCBib2FyZFR3bykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vd25Cb2FyZCA9IGJvYXJkT25lO1xuICAgIHRoaXMuZW5lbXlCb2FyZCA9IGJvYXJkVHdvO1xuICB9XG5cbiAgYXR0YWNrT3Bwb25lbnQoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxufVxuXG5jbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkT25lLCBib2FyZFR3bykge1xuICAgIHN1cGVyKG5hbWUsIGJvYXJkT25lLCBib2FyZFR3byk7XG4gICAgdGhpcy5wb3NzaWJsZU1vdmVzID0gdGhpcy4jY3JlYXRlQWxsUG9zc2libGVNb3ZlcygpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGFsbCBwb3NzaWJsZSBtb3Zlcy4gQWZ0ZXIgZWFjaCBtb3ZlLCB0aGF0IG1vdmUgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBmcm9tIHBvc3NpYmxlTW92ZXMgc28gdGhhdCBtb3ZlcyBhcmUgbmV2ZXIgcmVwZWF0ZWQuIEhvd2V2ZXIsIGFkamFjZW50VG9Tb21lU3Vua1NoaXAgbW92ZXMgYXJlIHJlc2VydmVkLiBUaGV5IGFyZSByZW1vdmVkIG9ubHkgd2hlbiBjb21wdXRlciB0cmllcyB0byB1c2UgdGhlbSBidXQgdGhleSBhcHBhcmVudGx5IGRvIG5vdCBjb3VudCBhcyBzdWNjZXNzZnVsIG1vdmVzXG4gICNjcmVhdGVBbGxQb3NzaWJsZU1vdmVzKCkge1xuICAgIGNvbnN0IG1vdmVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBtb3Zlcy5wdXNoKGAke2l9JHtqfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb3ZlcztcbiAgfVxuXG4gIGF0dGFja09wcG9uZW50KC4uLnNtYXJ0TW92ZSkge1xuICAgIC8vIElmIGNvbXB1dGVyIGhpdHMgYSBzaGlwIHBhcnRpYWxseSwgdGhlIHNtYXJ0TW92ZSBhcmd1bWVudCBpcyBnaXZlblxuICAgIGlmIChzbWFydE1vdmVbMF0pIHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IHNtYXJ0TW92ZTtcbiAgICAgIHRoaXMuZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgdGhpcy5wb3NzaWJsZU1vdmVzID0gdGhpcy5wb3NzaWJsZU1vdmVzLmZpbHRlcigobW92ZSkgPT4ge1xuICAgICAgICByZXR1cm4gbW92ZSAhPT0gYCR7eH0ke3l9YDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgeDtcbiAgICAgIGxldCB5O1xuICAgICAgbGV0IGF0dGVtcHRlZEF0dGFjaztcbiAgICAgIFxuICAgICAgLy8gVGhpcyBsb29wIG1pZ2h0IGhhdmUgYSBmZXcgaXRlcmF0aW9ucyBpZiBvdXQgb2YgcG9zc2libGVNb3ZlcywgY29tcHV0ZXIgY2hvb3NlcyBhIG1vdmUgdGhhdCBpcyBsaXN0ZWQgdGhlcmUgZXZlbiB0aG91Z2ggaXQgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSAoZS5nLiBhZGphY2VudFRvU29tZVN1bmtTaGlwKS4gQ29taW5nIGFjcm9zcyB0aG9zZSBtb3ZlcyBoZXJlLCB0aGV5IHdpbGwgYmUgbWFudWFsbHkgcmVtb3ZlZCBmcm9tIHBvc3NpYmxlTW92ZXMuIEFuZCBjb21wdXRlciBldmVudHVhbGx5IG1ha2VzIGEgbGVnYWwgbW92ZSBhbmQgbW92ZXMgdGhlIGdhbWUgZm9yd2FyZFxuICAgICAgZG8ge1xuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqIHRoaXMucG9zc2libGVNb3Zlcy5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgeCA9IHRoaXMucG9zc2libGVNb3Zlc1tyYW5kb21JbmRleF1bMF07XG4gICAgICAgIHkgPSB0aGlzLnBvc3NpYmxlTW92ZXNbcmFuZG9tSW5kZXhdWzFdO1xuXG4gICAgICAgIGF0dGVtcHRlZEF0dGFjayA9IHRoaXMuZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZXMgPSB0aGlzLnBvc3NpYmxlTW92ZXMuZmlsdGVyKChtb3ZlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG1vdmUgIT09IGAke3h9JHt5fWA7XG4gICAgICAgIH0pO1xuICAgICAgfSB3aGlsZSAoIWF0dGVtcHRlZEF0dGFjayk7XG5cbiAgICAgIHJldHVybiBbeCwgeV07IC8vIFJldHVybiBhbiBhcnJheSBvZiBjb29yZGluYXRlcyBiZWNhdXNlIHRoZXkgYXJlIGltcG9ydGFudCB0byBhY2Nlc3MgYSBzcGVjaWZpYyBzcXVhcmUgaW4gdGhlIFVJIGltcGxlbWVudGF0aW9uLiBXaGVuIGh1bWFuIGNsaWNrcyBtYW51YWxseSBvbiBzcXVhcmVzLCBpdCBpcyBlYXN5IHRvIHRyYWNrIGJ1dCBjb21wdXRlciBtdXN0IHByb2Nlc3MgdGhpcyBpbiBhIGRpZmZlcmVudCB3YXkgYnkgcmV0dXJuaW5nIHRoZSBudW1iZXIgb2Ygc3F1YXJlIChkaXYpIGl0IGF0dGFja2VkXG4gICAgfVxuICB9XG5cbiAgZ2V0TGVuZ3RoT2ZQb3NzaWJsZU1vdmVzQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zc2libGVNb3Zlcy5sZW5ndGg7XG4gIH1cbn1cbiIsImV4cG9ydCB7IFNoaXAgfTtcbmNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5pc1N1bmsoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy50aW1lc0hpdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXRUaW1lc0hpdFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnRpbWVzSGl0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gJy4vZ2FtZUxvb3AnO1xuZXhwb3J0IHsgaW5pdGlhbGl6ZUdyaWRzIH07XG5cbi8vIFNlbGVjdCBjb250cm9sIGJ1dHRvbnNcbmNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lLWJ1dHRvbicpO1xuY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbWl6ZS1zaGlwcy1sb2NhdGlvbnMnKTtcbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUtYnV0dG9uJyk7XG5cbi8vIFNlbGVjdCBncmlkc1xuY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtZ3JpZCcpO1xuY29uc3QgbnVtYmVyR3JpZEluZGV4ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubnVtYmVyLWJvYXJkLWluZGV4ZXMnKTtcbmNvbnN0IGxldHRlckdyaWRJbmRleGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxldHRlci1ib2FyZC1pbmRleGVzJyk7XG5jb25zdCBncmlkU3F1YXJlc0h1bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLWdyaWQuaHVtYW4nKTtcbmNvbnN0IGdyaWRTcXVhcmVzQ29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtZ3JpZC5jb21wdXRlcicpO1xuXG4vLyBFdmVudCBsaXN0ZW5lcnNcbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5uZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydEdhbWUpO1xucmFuZG9taXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmFuZG9taXplU2hpcExvY2F0aW9ucyk7XG5ncmlkU3F1YXJlc0NvbXB1dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVnaXN0ZXJDbGlja3NPbkJvYXJkcyk7XG5cbi8vIFZhcmlibGUgaG9sZGluZyBnYW1lTG9vcCBvYmplY3RcbmxldCBnYW1lID0gbmV3IEdhbWVMb29wKCk7XG5cbi8vIEZ1bmN0aW9uc1xuZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kRWxlbWVudChlbGVtZW50VHlwZSwgYXBwZW5kVG8sIC4uLmNsYXNzQXJnKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgaWYgKGNsYXNzQXJnLmxlbmd0aCkge1xuICAgIGNsYXNzQXJnLmZvckVhY2goKGNsYXNzVmFsdWUpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc1ZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG4vLyBUaGlzIGlzIHRoZSBvbmx5IG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBpbiBpbmRleC5qcyAoZnJvbSB3aGljaCB3ZWJwYWNrIHRha2VzIGlucHV0KVxuZnVuY3Rpb24gaW5pdGlhbGl6ZUdyaWRzKCkge1xuICBncmlkcy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQW5kQXBwZW5kRWxlbWVudCgnZGl2JywgZGl2LCAnc3F1YXJlJyk7XG5cbiAgICAgIC8vIEFkZCBpZHMgZm9yIHNxdWFyZXMgdG8gY29ubmVjdCBib2FyZHMgYXJyYXlzIChMT0dJQykgd2l0aCBncmlkcyAoVUkpLiBSZXZlcnNlIHRoZW0gYmVjYXVzZSBmaXJzdCBjb29yZGluYXRlIGlzIFgsIHNvIGl0IGNoYW5nZXMgbW9yZSBmcmVxdWVudGx5IGFuZCBtYWtlIHRoZW0gc3RyaW5ncyB0byBrZWVwIDAncyBpbiAwMSwgMDJcbiAgICAgIGlmIChpIDwgMTApIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGkgKyAnMCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmV2ZXJzZWRJZCA9IFN0cmluZyhpKS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQocmV2ZXJzZWRJZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBudW1iZXJHcmlkSW5kZXhlcy5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUFuZEFwcGVuZEVsZW1lbnQoJ2RpdicsIHBvc2l0aW9uLCAnYm9hcmQtcG9zaXRpb24nKTtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0dGVyR3JpZEluZGV4ZXMuZm9yRWFjaCgocG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUonO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUFuZEFwcGVuZEVsZW1lbnQoJ2RpdicsIHBvc2l0aW9uLCAnYm9hcmQtcG9zaXRpb24nKTtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjaGFyYWN0ZXJzW2ldO1xuICAgIH1cbiAgfSk7XG5cbiAgZGlzcGxheVNoaXBzT25Cb2FyZHMoKTtcbn1cblxuZnVuY3Rpb24gbG9vcE92ZXJBbGxEaXZzQW5kQXJyYXlTcXVhcmVzKGN1cnJlbnRHYW1lLCBwcm9wZXJ0eSkge1xuICAvLyBVc2UgdGhlIHNwcmVhZCBvcGVyYXRvciB0byB0dXJuIEhUTUwgY29sbGVjdGlvbiBpbnRvIGFuIGl0ZXJhYmxlIGVsZW1lbnQgaS5lLiBhcnJheVxuICBjb25zdCBodW1hbkdyaWREaXZzID0gWy4uLmdyaWRTcXVhcmVzSHVtYW4uY2hpbGRyZW5dO1xuICBjb25zdCBjb21wdXRlckdyaWREaXZzID0gWy4uLmdyaWRTcXVhcmVzQ29tcHV0ZXIuY2hpbGRyZW5dO1xuICBjb25zdCBodW1hbkJvYXJkID0gY3VycmVudEdhbWUuZ2V0Qm9hcmRPZignSHVtYW4nKTtcbiAgY29uc3QgYm9hcmRDb21wdXRlciA9IGN1cnJlbnRHYW1lLmdldEJvYXJkT2YoJ0NvbXB1dGVyJyk7XG5cbiAgbGV0IGNvdW50ZXJGb3JBcnJheVdpdGhEaXZzID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBjb21wdXRlclNxdWFyZSA9IGJvYXJkQ29tcHV0ZXJbal1baV1bMF07XG4gICAgICBjb25zdCBodW1hblNxdWFyZSA9IGh1bWFuQm9hcmRbal1baV1bMF07XG5cbiAgICAgIC8vIERpc3BsYXkgdGhlIHN0YXRlIG9mIGJvYXJkcyBiYXNlZCBvbiB0aGVpciBzcXVhcmVzJyBpbm5lciBwcm9wZXJ0aWVzIFxuICAgICAgaWYgKGNvbXB1dGVyU3F1YXJlW3Byb3BlcnR5XSkge1xuICAgICAgICBpZiAocHJvcGVydHkgPT09ICdjb250YWluc1NoaXAnKSB7XG4gICAgICAgICAgY29tcHV0ZXJHcmlkRGl2c1tjb3VudGVyRm9yQXJyYXlXaXRoRGl2c10uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICdjb250YWlucy1zaGlwLWhpZGRlbidcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnaXNBZGphY2VudFRvU29tZVN1bmtTaGlwJykge1xuICAgICAgICAgIGNvbXB1dGVyR3JpZERpdnNbY291bnRlckZvckFycmF5V2l0aERpdnNdLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAnYWRqYWNlbnQtdG8tc3Vuay1zaGlwJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGh1bWFuU3F1YXJlW3Byb3BlcnR5XSkge1xuICAgICAgICBpZiAocHJvcGVydHkgPT09ICdjb250YWluc1NoaXAnKSB7XG4gICAgICAgICAgaHVtYW5HcmlkRGl2c1tjb3VudGVyRm9yQXJyYXlXaXRoRGl2c10uY2xhc3NMaXN0LmFkZCgnY29udGFpbnMtc2hpcCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSAnaXNBZGphY2VudFRvU29tZVN1bmtTaGlwJykge1xuICAgICAgICAgIGh1bWFuR3JpZERpdnNbY291bnRlckZvckFycmF5V2l0aERpdnNdLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAnYWRqYWNlbnQtdG8tc3Vuay1zaGlwJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY291bnRlckZvckFycmF5V2l0aERpdnMrKztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVNoaXBzT25Cb2FyZHMoKSB7XG4gIGxvb3BPdmVyQWxsRGl2c0FuZEFycmF5U3F1YXJlcyhnYW1lLCAnY29udGFpbnNTaGlwJyk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVBZGphY2VudFNxdWFyZXNUb1N1bmtTaGlwcygpIHtcbiAgbG9vcE92ZXJBbGxEaXZzQW5kQXJyYXlTcXVhcmVzKGdhbWUsICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBjb25zdCBjb25maXJtU3RhcnRHYW1lID0gY29uZmlybShcbiAgICAnQWZ0ZXIgc3RhcnRpbmcgeW91IHdpbGwgbm90IGJlIGFibGUgdG8gcmFuZG9taXplIHNoaXBzIGxvY2F0aW9ucyBhbnltb3JlISdcbiAgKTtcblxuICBpZiAoY29uZmlybVN0YXJ0R2FtZSkge1xuICAgIHN0YXJ0R2FtZUJ1dHRvbi5jbGFzc0xpc3QucmVwbGFjZSgnbm90LXN0YXJ0ZWQnLCAnc3RhcnRlZCcpO1xuICAgIGFsZXJ0KCdHYW1lIGhhcyBiZWVuIHN0YXJ0ZWQhJyk7XG4gICAgdG9nZ2xlSG92ZXJFZmZlY3RPbkJvYXJkKGdyaWRTcXVhcmVzQ29tcHV0ZXIpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdZb3UgY2FuIHN0aWxsIHJhbmRvbWl6ZSB5b3VyIHNoaXBzIGxvY2F0aW9ucyEnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcbiAgY29uc3QgYnV0dG9uU3RhdHVzID0gc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdDtcbiAgaWYgKGJ1dHRvblN0YXR1cy5jb250YWlucygnbm90LXN0YXJ0ZWQnKSkge1xuICAgIGFsZXJ0KCdObyBhY3RpdmUgZ2FtZSBoYXMgYmVlbiBmb3VuZC4gWW91IG5lZWQgdG8gc3RhcnQgb25lIScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghZ2FtZS5nZXRXaW5uZXIoKSkge1xuICAgIGNvbnN0IGNvbmZpcm1OZXdHYW1lID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHN0YXJ0IG5ldyBnYW1lPycpO1xuICAgIGlmICghY29uZmlybU5ld0dhbWUpIHtcbiAgICAgIGFsZXJ0KCdZb3VyIGFjdGl2ZSBnYW1lIGlzIHNhdmVkLiBQbGF5IG9uIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGFsZXJ0KCdOZXcgZ2FtZSEnKTtcbiAgYnV0dG9uU3RhdHVzLnJlcGxhY2UoJ3N0YXJ0ZWQnLCAnbm90LXN0YXJ0ZWQnKTtcbiAgZ2FtZSA9IG5ldyBHYW1lTG9vcCgpO1xuICBjbGVhclByZXZpb3VzQm9hcmRzVmlzdWFscygpO1xufVxuXG5mdW5jdGlvbiByYW5kb21pemVTaGlwTG9jYXRpb25zKCkge1xuICBjb25zdCBidXR0b25TdGF0dXMgPSBzdGFydEdhbWVCdXR0b24uY2xhc3NMaXN0O1xuICBpZiAoYnV0dG9uU3RhdHVzLmNvbnRhaW5zKCdzdGFydGVkJykpIHtcbiAgICBhbGVydCgnQ2Fubm90IHJhbmRvbWl6ZSBzaGlwcyBsb2NhdGlvbnMgZHVyaW5nIHRoZSBnYW1lIScpO1xuICB9IGVsc2Uge1xuICAgIGdhbWUuY2hhbmdlU2hpcHNMb2NhdGlvbnMoKTtcbiAgICBjbGVhclByZXZpb3VzQm9hcmRzVmlzdWFscygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2xpY2tzT25Cb2FyZHMoZXZlbnQpIHtcbiAgaWYgKGdhbWUuZ2V0V2lubmVyKCkpIHtcbiAgICBhbGVydCgnR2FtZSBvdmVyISBTdGFydCBuZXcgZ2FtZSEnKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYnV0dG9uU3RhdHVzID0gc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdDtcbiAgICBpZiAoYnV0dG9uU3RhdHVzLmNvbnRhaW5zKCdub3Qtc3RhcnRlZCcpKSB7XG4gICAgICBhbGVydCgnR2FtZSBoYXMgbm90IGJlZW4gc3RhcnRlZCB5ZXQhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gQXBwbHkgZXZlbnQgZGVsZWdhdGlvbnMgdG8gYm9hcmQgZ3JpZHNcbiAgY29uc3QgaXNJbnNpZGVTcXVhcmUgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnZGl2LnNxdWFyZScpO1xuICBpZiAoIWlzSW5zaWRlU3F1YXJlKSByZXR1cm47XG5cbiAgLy8gQmVmb3JlIHRoZSBhdHRhY2sgbG9vayBhdCB0aGUgc3Vua1NoaXBzIHByb3BlcnR5IGFuZCBjb21wYXJlIGl0IHdpdGggdGhlIHN0YXRlIG9mIHRoZSBib2FyZCBhZnRlciB0aGUgYXR0YWNrIHRvIHVuZGVyc3RhbmQgaWYgYW55IHNoaXAgaGFzIGJlZW4gc3VuayBkdXJpbmcgdGhlIG1vdmVcbiAgY29uc3Qgc3Vua1NoaXBzT2ZQbGF5ZXJUd28gPSBnYW1lLmdldFN1bmtTaGlwc09mKCdDb21wdXRlcicpO1xuXG4gIGNvbnN0IGdldFNxdWFyZUlkID0gWy4uLmlzSW5zaWRlU3F1YXJlLmNsYXNzTGlzdF0uZmlsdGVyKChjbGFzc1ZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIGNsYXNzVmFsdWUubGVuZ3RoID09PSAyID8gdHJ1ZSA6IGZhbHNlO1xuICB9KTtcbiAgZ2FtZS5tYWtlTW92ZShnZXRTcXVhcmVJZFswXSk7XG5cbiAgaWYgKGlzSW5zaWRlU3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygnY29udGFpbnMtc2hpcC1oaWRkZW4nKSkge1xuICAgIGlzSW5zaWRlU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3NmdWwtc2hvdCcpO1xuXG4gICAgaWYgKHN1bmtTaGlwc09mUGxheWVyVHdvICE9PSBnYW1lLmdldFN1bmtTaGlwc09mKCdDb21wdXRlcicpKSB7XG4gICAgICBkaXNhYmxlQWRqYWNlbnRTcXVhcmVzVG9TdW5rU2hpcHMoZ2FtZSk7XG4gICAgICBpZiAoZ2FtZS5nZXRXaW5uZXIoKSkge1xuICAgICAgICBhbGVydChgR2FtZSBvdmVyISAke2dhbWUuZ2V0V2lubmVyKCl9IGhhcyB3b24hYCk7XG4gICAgICAgIHRvZ2dsZUhvdmVyRWZmZWN0T25Cb2FyZChncmlkU3F1YXJlc0NvbXB1dGVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpc0luc2lkZVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtc2hvdCcpO1xuICB9XG5cbiAgY29tcHV0ZXJNYWtlc0ltbWVkaWF0ZU1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZXJNYWtlc0ltbWVkaWF0ZU1vdmUoKSB7XG4gIGNvbnN0IHN1bmtTaGlwc09mUGxheWVyT25lID0gZ2FtZS5nZXRTdW5rU2hpcHNPZignSHVtYW4nKTtcblxuICBsZXQgc3F1YXJlSWQ7XG4gIGxldCBpc1ByZXZpb3VzbHlIaXRTaGlwID0gZ2FtZS5nZXRDb29yZGluYXRlc09mUHJldmlvdXNseUhpdFNoaXAoKTtcbiAgLy8gV2hlbiBjb21wdXRlciBoaXRzIGEgc2hpcCBidXQgZG9lcyBub3Qgc2luayBpdCBmdWxseSwgaXQgd2lsbCBzdG9yZSB0aGUgd2hvbGUgc2hpcCBvYmplY3QgYW5kIHNpbmsgaXQgaW4gdGhlIHVwY29taW5nIG1vdmVzXG4gIGlmIChpc1ByZXZpb3VzbHlIaXRTaGlwKSB7XG4gICAgY29uc3QgcGFydE9mU2hpcFVuZGVyQXR0YWNrID0gZ2FtZVxuICAgICAgLmdldENvb3JkaW5hdGVzT2ZQcmV2aW91c2x5SGl0U2hpcCgpWzBdXG4gICAgICAuam9pbignJyk7XG4gICAgc3F1YXJlSWQgPSBnYW1lLm1ha2VNb3ZlKHBhcnRPZlNoaXBVbmRlckF0dGFjayk7XG4gIH0gZWxzZSB7XG4gICAgc3F1YXJlSWQgPSBnYW1lLm1ha2VNb3ZlKCk7XG4gIH1cblxuICBjb25zdCBzcXVhcmVzID0gWy4uLmdyaWRTcXVhcmVzSHVtYW4uY2hpbGRyZW5dO1xuICBsZXQgdGFyZ2V0dGVkU3F1YXJlO1xuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKHNxdWFyZUlkKSkge1xuICAgICAgdGFyZ2V0dGVkU3F1YXJlID0gc3F1YXJlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRhcmdldHRlZFNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRhaW5zLXNoaXAnKSkge1xuICAgIHRhcmdldHRlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzZnVsLXNob3QnKTtcblxuICAgIGlmIChzdW5rU2hpcHNPZlBsYXllck9uZSAhPT0gZ2FtZS5nZXRTdW5rU2hpcHNPZignSHVtYW4nKSkge1xuICAgICAgZ2FtZS51cGRhdGVDb29yZGluYXRlc09mUHJldmlvdXNseUhpdFNoaXAoc3F1YXJlSWQpO1xuICAgICAgZGlzYWJsZUFkamFjZW50U3F1YXJlc1RvU3Vua1NoaXBzKGdhbWUpO1xuXG4gICAgICBpZiAoZ2FtZS5nZXRXaW5uZXIoKSkge1xuICAgICAgICBhbGVydChgR2FtZSBvdmVyISAke2dhbWUuZ2V0V2lubmVyKCl9IGhhcyB3b25gKTtcbiAgICAgICAgcmV2ZWFsU3Vydml2ZWRTaGlwcygpO1xuICAgICAgICB0b2dnbGVIb3ZlckVmZmVjdE9uQm9hcmQoZ3JpZFNxdWFyZXNDb21wdXRlcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGdhbWUuZ2V0Q29vcmRpbmF0ZXNPZlByZXZpb3VzbHlIaXRTaGlwKCkpIHtcbiAgICAgIGdhbWUudXBkYXRlQ29vcmRpbmF0ZXNPZlByZXZpb3VzbHlIaXRTaGlwKHNxdWFyZUlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaHVtYW5TaGlwcyA9IGdhbWUuZ2V0SHVtYW5BbGxTaGlwcygpO1xuICAgICAgaHVtYW5TaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVkU2hpcCA9IHNoaXAuY29vcmRpbmF0ZXM7XG5cbiAgICAgICAgLy8gYWxsU2hpcHMgYXJyYXkgb24gZ2FtZSBib2FyZHMgY29udGFpbnMgMS1zcXVhcmUgc2hpcHMnIHBhaXIgb2YgY29vcmRpbmF0ZXMgaW4gYW4gb3V0ZXIgYXJyYXkgd2hlcmUgdGhlIHBhaXIgaXMgbnVtYmVycy4gV2l0aCBtdWx0aS1zcXVhcmUgc2hpcHMsIGNvb3JkaW5hdGVzIGFyZSBzdGlsbCBzYXZlZCBpbiBhbiBvdXRlciBhcnJheS4gVGhvdWdoIHRoZWlyIHBhaXJzIG9mIGNvb3JkaW5hdGVzIGFyZSBzdG9yZWQgaW4gaW5uZXIgYXJyYXlzLiBMYXN0IGJ1dCBub3QgbGVhc3QsIGl0IGlzIG5vdCBpbXBvcnRhbnQgZm9yIHVzIHRvIGxvb3Agb3ZlciAxLXNxdWFyZSBzaGlwcyBiZWNhdXNlIHRoZXkgd2lsbCBuZXZlciBiZSBtZW1vcml6ZWQgYXMgY29vcmRpbmF0ZXNGb3JDb21wdXRlclRvVGFyZ2V0XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvb3JkaW5hdGVkU2hpcFswXSkpIHtcbiAgICAgICAgICBjb29yZGluYXRlZFNoaXAuZm9yRWFjaCgoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChjb29yZGluYXRlcy5qb2luKCcnKSA9PT0gc3F1YXJlSWQpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RpbGxBY3RpdmVTaGlwU3F1YXJlcyA9IHNoaXAuY29vcmRpbmF0ZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzcXVhcmVJZCAhPT0gc3F1YXJlLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZ2FtZS5zYXZlQ29vcmRpbmF0ZXNPZlByZXZpb3VzbHlIaXRTaGlwKHN0aWxsQWN0aXZlU2hpcFNxdWFyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0dGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1zaG90Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJQcmV2aW91c0JvYXJkc1Zpc3VhbHMoKSB7XG4gIGNvbnN0IGJvYXJkRWxlbWVudHMgPSBbLi4uZ3JpZHMsIC4uLmxldHRlckdyaWRJbmRleGVzLCAuLi5udW1iZXJHcmlkSW5kZXhlc107XG4gIGJvYXJkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gIH0pO1xuICBpbml0aWFsaXplR3JpZHMoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlSG92ZXJFZmZlY3RPbkJvYXJkKGRpdnMpIHtcbiAgY29uc3QgYXJyYXlPZkdyaWREaXZzID0gWy4uLmRpdnMuY2hpbGRyZW5dO1xuICBhcnJheU9mR3JpZERpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmV2ZWFsU3Vydml2ZWRTaGlwcygpIHtcbiAgY29uc3QgYXJyYXkgPSBbLi4uZ3JpZFNxdWFyZXNDb21wdXRlci5jaGlsZHJlbl07XG4gIGFycmF5LmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRhaW5zLXNoaXAtaGlkZGVuJykgJiZcbiAgICAgICFzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWNjZXNzZnVsLXNob3QnKVxuICAgICkge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodC1zdXJ2aXZlZC1zaGlwJyk7XG4gICAgfVxuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi8uLi9VSS9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGluaXRpYWxpemVHcmlkcyB9IGZyb20gJy4vdmlzdWFsUGFydC5qcyc7XG5cbmluaXRpYWxpemVHcmlkcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9