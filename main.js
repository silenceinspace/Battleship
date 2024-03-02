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
  background-color: black;
  min-height: 100vh;
}

#container {
  display: grid;
  grid-template-rows: 100px 1fr;

  padding: 25px 50px;
  width: 1000px;
  margin: auto;
}

#container .top-part {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
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
  pointer-events: none;
}

.square.successful-shot {
  background-color: red;
  pointer-events: none;
}
`, "",{"version":3,"sources":["webpack://./src/UI/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,6BAA6B;;EAE7B,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;EACxB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,8BAA8B;;EAE9B,kBAAkB;AACpB;;AAEA;;EAEE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,QAAQ;EACR,qBAAqB;;EAErB,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,uBAAuB;;EAEvB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uCAAuC;EACvC,oBAAoB;;EAEpB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;;EAER,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA;;EAEE,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;AACtB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: black;\n  min-height: 100vh;\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 100px 1fr;\n\n  padding: 25px 50px;\n  width: 1000px;\n  margin: auto;\n}\n\n#container .top-part {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n}\n\nbutton {\n  appearance: none;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 15px;\n  background-color: purple;\n  color: white;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\nbutton:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.start-game-button.not-started {\n  background-color: green;\n}\n\n.start-game-button.started {\n  background-color: red;\n  pointer-events: none;\n}\n\n#container .main-part {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 50px;\n}\n\n.left-part,\n.right-part {\n  display: grid;\n  grid-template-rows: 60px 380px;\n\n  position: relative;\n}\n\n.left-part > p,\n.right-part > p {\n  font-size: 2.5rem;\n  font-weight: bold;\n  color: white;\n  place-self: center;\n}\n\n.number-board-indexes,\n.letter-board-indexes {\n  display: grid;\n  gap: 2px;\n  justify-items: center;\n\n  font-size: 1.7rem;\n  font-weight: bold;\n  color: orange;\n  position: absolute;\n}\n\n.number-board-indexes {\n  grid-template-rows: repeat(10, 30px);\n  grid-auto-columns: 30px;\n\n  top: 90px;\n  left: 20px;\n}\n\n.letter-board-indexes {\n  grid-template-columns: repeat(10, 30px);\n  grid-auto-rows: 30px;\n\n  top: 60px;\n  left: 50px;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n  gap: 2px;\n\n  background-color: black;\n  place-self: center;\n  border: 2px solid black;\n}\n\n.square {\n  background-color: white;\n}\n\n.square.contains-ship,\n.square.highlight-survived-ship {\n  background-color: green;\n}\n\n.board-grid.computer .square.active:hover {\n  cursor: crosshair;\n  background-color: orange;\n}\n\n.square.missed-shot,\n.square.adjacent-to-sunk-ship {\n  background-color: grey;\n  pointer-events: none;\n}\n\n.square.successful-shot {\n  background-color: red;\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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

  // Place 10 ships at pretedermined coodinates for now
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
      if (!this.playerOne.attackOpponent(x, y)) {
        return false;
      }

      if (!this.#findBoardWithGameOver()) {
        this.#passTurns();
      }
      return true;
    }

    if (this.attacksNow.name === 'Computer') {
      let computerMove;
      // Destructuring array assignment
      // By default computer make random moves but if it hits something, then it will try to sink the ship until it succeeds
      if (coordinates[0]) {
        const [x, y] = coordinates[0];
        computerMove = this.playerTwo.attackOpponent(x, y);
        if (!computerMove) return false;

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
      return this.playerOne.ownBoard.getSunkShipsProperty();
    } else if (name === 'Computer') {
      return this.playerTwo.ownBoard.getSunkShipsProperty();
    }
  }

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
        // In each square of the board, there is an object with a few properties to control the game's logic
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
        // Squares that are a part of the ship must not be reserved because they are not adjacent in any case
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
      // Create two arrays to place ships over multiple squares, doing it in both directions
      const allValuesOfX = [];
      const allValuesOfY = [];

      // If placed horizontally, the ship's first square will generate the rest of squares to the right, without changing the row
      if (direction === 'hor') {
        for (let i = 0; i < ship.length; i++) {
          allValuesOfX.push(x);
          allValuesOfY.push(y);
          x += 1;
        }
        // If placed vertically, the ship's first square will generate the rest of squares down, without changing the column
      } else if (direction === 'ver') {
        for (let i = 0; i < ship.length; i++) {
          allValuesOfX.push(x);
          allValuesOfY.push(y);
          y += 1;
        }
      }

      // Check if any of the restrictions is violated before placing a ship. If yes, the ship is not placed on the board
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
    // To confirm that the ship has been placed successfully
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

    // hasBeenTargetted property can either mean a successful attack (hit a ship) or a failed one (a missed shot)
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
        // Gameboard should keep track of its termination state because GameLoop will rely on it later
        this.#checkIfAllShipsHaveBeenDestroyed();
      }
    }
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

  // Create all possible moves. After each move, that move is going to be removed from possibleMoves so that moves are never repeated
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
    if (!this.possibleMoves.length) {
      return false;
    }

    // This part is for "smart computer" but if the computer did not hit anything that argument is not given
    if (smartMove[0]) {
      const [x, y] = smartMove;
      const attemptedAttack = this.enemyBoard.receiveAttack(x, y);
      this.possibleMoves = this.possibleMoves.filter((move) => {
        return move !== `${x}${y}`;
      });
      return attemptedAttack;
    } else {
      let x;
      let y;
      let attemptedAttack;

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

      return [x, y]; // Return an array of coordinates to pass a test that ensures Computer does hit the Player's board at the coordinates
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



// Select DOM elements
const startGameButton = document.querySelector('.start-game-button');
const randomizeButton = document.querySelector('.randomize-ships-locations');
const newGameButton = document.querySelector('.new-game-button');

const grids = document.querySelectorAll('.board-grid');
const numberGridIndexes = document.querySelectorAll('.number-board-indexes');
const letterGridIndexes = document.querySelectorAll('.letter-board-indexes');
const gridSquaresHuman = document.querySelector('.board-grid.human');
const gridSquaresComputer = document.querySelector('.board-grid.computer');

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

// This method is called in index.js
function initializeGrids() {
  grids.forEach((div) => {
    for (let i = 0; i < 100; i++) {
      const element = createAndAppendElement('div', div, 'square');

      // Add ids for squares to tie array boards with grid. Reverse them because first coordinate is X, so it changes more frequently and make them strings to keep 0's in 01, 02
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

// Varible holding gameLoop object
let game = new _gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop();

// Buttons to control game flow
startGameButton.addEventListener('click', startGame);
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

newGameButton.addEventListener('click', restartGame);
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

randomizeButton.addEventListener('click', randomizeShipLocations);
function randomizeShipLocations() {
  const buttonStatus = startGameButton.classList;
  if (buttonStatus.contains('started')) {
    alert('Cannot randomize ships locations during the game!');
  } else {
    game.changeShipsLocations();
    clearPreviousBoardsVisuals();
  }
}

gridSquaresComputer.addEventListener('click', registerClicksOnBoards);
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
  const sunkShipsOfPlayerTwo = game.getSunkShipsOf('Computer').length;

  const getSquareId = [...isInsideSquare.classList].filter((classValue) => {
    return classValue.length === 2 ? true : false;
  });
  game.makeMove(getSquareId[0]);
  if (isInsideSquare.classList.contains('contains-ship-hidden')) {
    isInsideSquare.classList.add('successful-shot');

    if (sunkShipsOfPlayerTwo !== game.getSunkShipsOf('Computer').length) {
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
  const sunkShipsOfPlayerOne = game.getSunkShipsOf('Human').length;

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

    if (sunkShipsOfPlayerOne !== game.getSunkShipsOf('Human').length) {
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

// When game over, then this effect is removed
function toggleHoverEffectOnBoard(divs) {
  const arrayOfGridDivs = [...divs.children];
  arrayOfGridDivs.forEach((div) => {
    div.classList.toggle('active');
  });
}

function loopOverAllDivsAndArraySquares(currentGame, property) {
  const humanGridDivs = [...gridSquaresHuman.children];
  const computerGridDivs = [...gridSquaresComputer.children];
  const humanBoard = currentGame.getBoardOf('Human');
  const boardComputer = currentGame.getBoardOf('Computer');

  let counterForArrayWithDivs = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const computerSquare = boardComputer[j][i][0];
      const humanSquare = humanBoard[j][i][0];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7VUNyU0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDc0I7O0FBRWxELCtEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSS9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1VJL3N0eWxlcy5jc3M/OTQ4YyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3Zpc3VhbFBhcnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XG5cbiAgcGFkZGluZzogMjVweCA1MHB4O1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNjb250YWluZXIgLnRvcC1wYXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbn1cblxuYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc3RhcnQtZ2FtZS1idXR0b24ubm90LXN0YXJ0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnN0YXJ0LWdhbWUtYnV0dG9uLnN0YXJ0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jY29udGFpbmVyIC5tYWluLXBhcnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogNTBweDtcbn1cblxuLmxlZnQtcGFydCxcbi5yaWdodC1wYXJ0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDM4MHB4O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxlZnQtcGFydCA+IHAsXG4ucmlnaHQtcGFydCA+IHAge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xufVxuXG4ubnVtYmVyLWJvYXJkLWluZGV4ZXMsXG4ubGV0dGVyLWJvYXJkLWluZGV4ZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDJweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IG9yYW5nZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubnVtYmVyLWJvYXJkLWluZGV4ZXMge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdyaWQtYXV0by1jb2x1bW5zOiAzMHB4O1xuXG4gIHRvcDogOTBweDtcbiAgbGVmdDogMjBweDtcbn1cblxuLmxldHRlci1ib2FyZC1pbmRleGVzIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICBncmlkLWF1dG8tcm93czogMzBweDtcblxuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbi5ib2FyZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdhcDogMnB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4uc3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zcXVhcmUuY29udGFpbnMtc2hpcCxcbi5zcXVhcmUuaGlnaGxpZ2h0LXN1cnZpdmVkLXNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmJvYXJkLWdyaWQuY29tcHV0ZXIgLnNxdWFyZS5hY3RpdmU6aG92ZXIge1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uc3F1YXJlLm1pc3NlZC1zaG90LFxuLnNxdWFyZS5hZGphY2VudC10by1zdW5rLXNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNxdWFyZS5zdWNjZXNzZnVsLXNob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvVUkvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7O0VBRTdCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4Qjs7RUFFOUIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHFCQUFxQjs7RUFFckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1Qjs7RUFFdkIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxvQkFBb0I7O0VBRXBCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxRQUFROztFQUVSLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG5cXG4gIHBhZGRpbmc6IDI1cHggNTBweDtcXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbiNjb250YWluZXIgLnRvcC1wYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5zdGFydC1nYW1lLWJ1dHRvbi5ub3Qtc3RhcnRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnN0YXJ0LWdhbWUtYnV0dG9uLnN0YXJ0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNjb250YWluZXIgLm1haW4tcGFydCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubGVmdC1wYXJ0LFxcbi5yaWdodC1wYXJ0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMzgwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sZWZ0LXBhcnQgPiBwLFxcbi5yaWdodC1wYXJ0ID4gcCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubnVtYmVyLWJvYXJkLWluZGV4ZXMsXFxuLmxldHRlci1ib2FyZC1pbmRleGVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDJweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubnVtYmVyLWJvYXJkLWluZGV4ZXMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDMwcHg7XFxuXFxuICB0b3A6IDkwcHg7XFxuICBsZWZ0OiAyMHB4O1xcbn1cXG5cXG4ubGV0dGVyLWJvYXJkLWluZGV4ZXMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XFxuXFxuICB0b3A6IDYwcHg7XFxuICBsZWZ0OiA1MHB4O1xcbn1cXG5cXG4uYm9hcmQtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ2FwOiAycHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3F1YXJlLmNvbnRhaW5zLXNoaXAsXFxuLnNxdWFyZS5oaWdobGlnaHQtc3Vydml2ZWQtc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJvYXJkLWdyaWQuY29tcHV0ZXIgLnNxdWFyZS5hY3RpdmU6aG92ZXIge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5zcXVhcmUubWlzc2VkLXNob3QsXFxuLnNxdWFyZS5hZGphY2VudC10by1zdW5rLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc3F1YXJlLnN1Y2Nlc3NmdWwtc2hvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgUGxheWVyLCBDb21wdXRlciB9IGZyb20gJy4vcGxheWVyJztcbmV4cG9ydCB7IEdhbWVMb29wIH07XG5cbmNsYXNzIEdhbWVMb29wIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5odW1hbkJvYXJkID0gdGhpcy4jcG9wdWxhdGVCb2FyZFdpdGhTaGlwcygpO1xuICAgIHRoaXMuY29tcHV0ZXJCb2FyZCA9IHRoaXMuI3BvcHVsYXRlQm9hcmRXaXRoU2hpcHMoKTtcbiAgICB0aGlzLnBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ0h1bWFuJywgdGhpcy5odW1hbkJvYXJkLCB0aGlzLmNvbXB1dGVyQm9hcmQpO1xuICAgIHRoaXMucGxheWVyVHdvID0gbmV3IENvbXB1dGVyKFxuICAgICAgJ0NvbXB1dGVyJyxcbiAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZCxcbiAgICAgIHRoaXMuaHVtYW5Cb2FyZFxuICAgICk7XG4gICAgdGhpcy5hdHRhY2tzTm93ID0gdGhpcy5wbGF5ZXJPbmU7XG4gICAgdGhpcy53aW5uZXIgPSBudWxsO1xuICAgIHRoaXMuY29vcmRpbmF0ZXNGb3JDb21wdXRlclRvVGFyZ2V0ID0gbnVsbDtcbiAgfVxuXG4gIC8vIFBsYWNlIDEwIHNoaXBzIGF0IHByZXRlZGVybWluZWQgY29vZGluYXRlcyBmb3Igbm93XG4gICNwb3B1bGF0ZUJvYXJkV2l0aFNoaXBzKCkge1xuICAgIGNvbnN0IGJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gICAgbGV0IGxlbmd0aE9uZSA9IDA7XG4gICAgbGV0IGxlbmd0aFR3byA9IDA7XG4gICAgbGV0IGxlbmd0aFRocmVlID0gMDtcbiAgICBsZXQgbGVuZ3RoRm91ciA9IDA7XG5cbiAgICB3aGlsZSAobGVuZ3RoRm91ciA9PT0gMCkge1xuICAgICAgY29uc3QgW3gsIHksIGRpcmVjdGlvbl0gPSB0aGlzLiNnZW5lcmF0ZVZhbHVlc1RvUGxhY2VTaGlwKCk7XG4gICAgICBjb25zdCBpc1BsYWNlZCA9IGJvYXJkLnBsYWNlU2hpcCh4LCB5LCA0LCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKGlzUGxhY2VkKSB7XG4gICAgICAgIGxlbmd0aEZvdXIrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAobGVuZ3RoVGhyZWUgIT09IDIpIHtcbiAgICAgIGNvbnN0IFt4LCB5LCBkaXJlY3Rpb25dID0gdGhpcy4jZ2VuZXJhdGVWYWx1ZXNUb1BsYWNlU2hpcCgpO1xuICAgICAgY29uc3QgaXNQbGFjZWQgPSBib2FyZC5wbGFjZVNoaXAoeCwgeSwgMywgZGlyZWN0aW9uKTtcbiAgICAgIGlmIChpc1BsYWNlZCkge1xuICAgICAgICBsZW5ndGhUaHJlZSsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlIChsZW5ndGhUd28gIT09IDMpIHtcbiAgICAgIGNvbnN0IFt4LCB5LCBkaXJlY3Rpb25dID0gdGhpcy4jZ2VuZXJhdGVWYWx1ZXNUb1BsYWNlU2hpcCgpO1xuICAgICAgY29uc3QgaXNQbGFjZWQgPSBib2FyZC5wbGFjZVNoaXAoeCwgeSwgMiwgZGlyZWN0aW9uKTtcbiAgICAgIGlmIChpc1BsYWNlZCkge1xuICAgICAgICBsZW5ndGhUd28rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAobGVuZ3RoT25lICE9PSA0KSB7XG4gICAgICBjb25zdCBbeCwgeSwgZGlyZWN0aW9uXSA9IHRoaXMuI2dlbmVyYXRlVmFsdWVzVG9QbGFjZVNoaXAoKTtcbiAgICAgIGNvbnN0IGlzUGxhY2VkID0gYm9hcmQucGxhY2VTaGlwKHgsIHksIDEsIGRpcmVjdGlvbik7XG4gICAgICBpZiAoaXNQbGFjZWQpIHtcbiAgICAgICAgbGVuZ3RoT25lKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG5cbiAgI2dlbmVyYXRlVmFsdWVzVG9QbGFjZVNoaXAoKSB7XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFsndmVyJywgJ2hvciddO1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID0gZGlyZWN0aW9uc1tpbmRleF07XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgdmFsdWVzLnB1c2goeCwgeSwgcmFuZG9tRGlyZWN0aW9uKTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgI3Bhc3NUdXJucygpIHtcbiAgICB0aGlzLmF0dGFja3NOb3cubmFtZSA9PT0gJ0h1bWFuJ1xuICAgICAgPyAodGhpcy5hdHRhY2tzTm93ID0gdGhpcy5wbGF5ZXJUd28pXG4gICAgICA6ICh0aGlzLmF0dGFja3NOb3cgPSB0aGlzLnBsYXllck9uZSk7XG4gIH1cblxuICAjZmluZEJvYXJkV2l0aEdhbWVPdmVyKCkge1xuICAgIGlmICh0aGlzLmh1bWFuQm9hcmQuZ2FtZU92ZXIpIHtcbiAgICAgIHRoaXMud2lubmVyID0gdGhpcy5wbGF5ZXJUd28ubmFtZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wdXRlckJvYXJkLmdhbWVPdmVyKSB7XG4gICAgICB0aGlzLndpbm5lciA9IHRoaXMucGxheWVyT25lLm5hbWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VNb3ZlKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMud2lubmVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXR0YWNrc05vdy5uYW1lID09PSAnSHVtYW4nKSB7XG4gICAgICBjb25zdCBtb3ZlID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICBjb25zdCB4ID0gbW92ZVswXTtcbiAgICAgIGNvbnN0IHkgPSBtb3ZlWzFdO1xuICAgICAgaWYgKCF0aGlzLnBsYXllck9uZS5hdHRhY2tPcHBvbmVudCh4LCB5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy4jZmluZEJvYXJkV2l0aEdhbWVPdmVyKCkpIHtcbiAgICAgICAgdGhpcy4jcGFzc1R1cm5zKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdHRhY2tzTm93Lm5hbWUgPT09ICdDb21wdXRlcicpIHtcbiAgICAgIGxldCBjb21wdXRlck1vdmU7XG4gICAgICAvLyBEZXN0cnVjdHVyaW5nIGFycmF5IGFzc2lnbm1lbnRcbiAgICAgIC8vIEJ5IGRlZmF1bHQgY29tcHV0ZXIgbWFrZSByYW5kb20gbW92ZXMgYnV0IGlmIGl0IGhpdHMgc29tZXRoaW5nLCB0aGVuIGl0IHdpbGwgdHJ5IHRvIHNpbmsgdGhlIHNoaXAgdW50aWwgaXQgc3VjY2VlZHNcbiAgICAgIGlmIChjb29yZGluYXRlc1swXSkge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgY29tcHV0ZXJNb3ZlID0gdGhpcy5wbGF5ZXJUd28uYXR0YWNrT3Bwb25lbnQoeCwgeSk7XG4gICAgICAgIGlmICghY29tcHV0ZXJNb3ZlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKCF0aGlzLiNmaW5kQm9hcmRXaXRoR2FtZU92ZXIoKSkge1xuICAgICAgICAgIHRoaXMuI3Bhc3NUdXJucygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt4fSR7eX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcHV0ZXJNb3ZlID0gdGhpcy5wbGF5ZXJUd28uYXR0YWNrT3Bwb25lbnQoKTtcbiAgICAgICAgaWYgKCF0aGlzLiNmaW5kQm9hcmRXaXRoR2FtZU92ZXIoKSkge1xuICAgICAgICAgIHRoaXMuI3Bhc3NUdXJucygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wdXRlck1vdmUuam9pbignJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0V2hvc2VUdXJuSXRJcygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tzTm93Lm5hbWU7XG4gIH1cblxuICBnZXRXaW5uZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lubmVyO1xuICB9XG5cbiAgZ2V0Qm9hcmRPZihuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09ICdIdW1hbicpIHtcbiAgICAgIHJldHVybiB0aGlzLmh1bWFuQm9hcmQuYm9hcmQ7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnQ29tcHV0ZXInKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlckJvYXJkLmJvYXJkO1xuICAgIH1cbiAgfVxuXG4gIGdldFN1bmtTaGlwc09mKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ0h1bWFuJykge1xuICAgICAgcmV0dXJuIHRoaXMucGxheWVyT25lLm93bkJvYXJkLmdldFN1bmtTaGlwc1Byb3BlcnR5KCk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnQ29tcHV0ZXInKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXJUd28ub3duQm9hcmQuZ2V0U3Vua1NoaXBzUHJvcGVydHkoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTaGlwc0xvY2F0aW9ucygpIHtcbiAgICB0aGlzLmh1bWFuQm9hcmQgPSB0aGlzLiNwb3B1bGF0ZUJvYXJkV2l0aFNoaXBzKCk7XG4gICAgdGhpcy5wbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdIdW1hbicsIHRoaXMuaHVtYW5Cb2FyZCwgdGhpcy5jb21wdXRlckJvYXJkKTtcbiAgICB0aGlzLnBsYXllclR3byA9IG5ldyBDb21wdXRlcihcbiAgICAgICdDb21wdXRlcicsXG4gICAgICB0aGlzLmNvbXB1dGVyQm9hcmQsXG4gICAgICB0aGlzLmh1bWFuQm9hcmRcbiAgICApO1xuICB9XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9ucyBmb3IgY29tcHV0ZXIgc21hcnQgbW92ZXNcbiAgZ2V0SHVtYW5BbGxTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJPbmUub3duQm9hcmQuZ2V0QWxsU2hpcHMoKTtcbiAgfVxuXG4gIGdldENvb3JkaW5hdGVzT2ZQcmV2aW91c2x5SGl0U2hpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlc0ZvckNvbXB1dGVyVG9UYXJnZXQ7XG4gIH1cblxuICBzYXZlQ29vcmRpbmF0ZXNPZlByZXZpb3VzbHlIaXRTaGlwKGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5jb29yZGluYXRlc0ZvckNvbXB1dGVyVG9UYXJnZXQgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIHVwZGF0ZUNvb3JkaW5hdGVzT2ZQcmV2aW91c2x5SGl0U2hpcChjb29yZGluYXRlcykge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldCB8fFxuICAgICAgdGhpcy5jb29yZGluYXRlc0ZvckNvbXB1dGVyVG9UYXJnZXQubGVuZ3RoID09PSAxXG4gICAgKSB7XG4gICAgICB0aGlzLmNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29vcmRpbmF0ZXNGb3JDb21wdXRlclRvVGFyZ2V0ID1cbiAgICAgICAgdGhpcy5jb29yZGluYXRlc0ZvckNvbXB1dGVyVG9UYXJnZXQuZmlsdGVyKChzcXVhcmUpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXMgIT09IHNxdWFyZS5qb2luKCcnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy4jY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xuICAgIHRoaXMuc3Vua1NoaXBzID0gW107XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgI2NyZWF0ZUdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAvLyBJbiBlYWNoIHNxdWFyZSBvZiB0aGUgYm9hcmQsIHRoZXJlIGlzIGFuIG9iamVjdCB3aXRoIGEgZmV3IHByb3BlcnRpZXMgdG8gY29udHJvbCB0aGUgZ2FtZSdzIGxvZ2ljXG4gICAgICAgIGJvYXJkW2ldLnB1c2goW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRhaW5zU2hpcDogZmFsc2UsXG4gICAgICAgICAgICBpc0FkamFjZW50VG9Tb21lU2hpcDogZmFsc2UsXG4gICAgICAgICAgICBpc0FkamFjZW50VG9Tb21lU3Vua1NoaXA6IGZhbHNlLFxuICAgICAgICAgICAgaGFzQmVlblRhcmdldHRlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIC8vIEhlbHBlcnMgZm9yIHBsYWNlU2hpcCgpXG4gICNmaXRJbkJvYXJkTGltaXRzKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgYXJyYXlXaXRoQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICBjb25zdCB4ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzFdO1xuXG4gICAgLy8gQXJndW1lbnRzIG9mIHRoaXMgbWV0aG9kIGNvbWUgaW4gdHdvIGRpZmZlcmVudCBmbGF2b3JzIOKAlCB0aGV5IGNhbiBiZSBlaXRoZXIgaW5kaXZpZHVhbCBYIGFuZCBZIHZhbHVlcyAoY2FzZSB3aXRoIGEgMS1zcXVhcmUgc2hpcCksIG9yIGFycmF5cyB3aXRoIGNvbWJpbmF0aW9ucyBvZiBYIGFuZCBZIHZhbHVlcyAoY2FzZSB3aXRoIG11bHRpcGxlLXNxdWFyZSBzaGlwcylcbiAgICAvLyBJdCBpcyBuZWNlc3NhcnkgdG8gY2hlY2sgb25seSBpZiB0aGV5IGFyZSBncmVhdGVyIHRoYW4gOSBpbiB0aGUgY29udGV4dCBvZiBhcnJheXMsIGJlY2F1c2Ugc2hpcHMgYXJlIGV4cGFuZGVkIHRvIHRoZSByaWdodC9kb3duIGJ5IGRlZmF1bHQg4oCUIGEgdHdvLXNxdWFyZSBzaGlwIHBsYWNlZCBob3Jpem9udGFsbHkgYXQgWzAsMF0gcG9wdWxhdGVzIHRvIFswLDBdLCBbMSwwXSBhbmQgbmV2ZXIgdG8gWzAsMF0sIFstMSwgMF1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSAmJiBBcnJheS5pc0FycmF5KHkpKSB7XG4gICAgICBjb25zdCB2YWx1ZXNYQW5kWSA9IFsuLi54LCAuLi55XTtcbiAgICAgIGNvbnN0IHhPcllJc091dHNpZGVCb2FyZCA9IHZhbHVlc1hBbmRZLmZpbHRlcigodmFsdWUpID0+IHZhbHVlID4gOSk7XG4gICAgICBpZiAoeE9yWUlzT3V0c2lkZUJvYXJkLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCA+IDkgfHwgeSA+IDkgfHwgeCA8IDAgfHwgeSA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgI3Jlc2VydmVBZGphY2VudFNxdWFyZXMoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBhcnJheVdpdGhDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVYID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgY29vcmRpbmF0ZVkgPSBhcnJheVdpdGhDb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzJdO1xuXG4gICAgLy8gVXNlIHR3byBhcnJheXMgZmlsbGVkIHdpdGggYWxsIHBvc3NpYmxlIG9wdGlvbnMgZm9yIGFkamFjZW50IHNxdWFyZXNcbiAgICAvLyBBIHNxdWFyZSBjYW4gaGF2ZSA4IGFkamFjZW50IHNxdWFyZXMgYXQgbW9zdFxuICAgIGNvbnN0IGFkamFjZW50Q29vcmRpbmF0ZXNPZlggPSBbLTEsIDAsIDEsIDEsIDEsIDAsIC0xLCAtMV07XG4gICAgY29uc3QgYWRqYWNlbnRDb29yZGluYXRlc09mWSA9IFstMSwgLTEsIC0xLCAwLCAxLCAxLCAxLCAwXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gY29vcmRpbmF0ZVggKyBhZGphY2VudENvb3JkaW5hdGVzT2ZYW2ldO1xuICAgICAgY29uc3QgeSA9IGNvb3JkaW5hdGVZICsgYWRqYWNlbnRDb29yZGluYXRlc09mWVtpXTtcblxuICAgICAgaWYgKHggPiA5IHx8IHkgPiA5IHx8IHggPCAwIHx8IHkgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuY29udGFpbnNTaGlwKSB7XG4gICAgICAgIC8vIFNxdWFyZXMgdGhhdCBhcmUgYSBwYXJ0IG9mIHRoZSBzaGlwIG11c3Qgbm90IGJlIHJlc2VydmVkIGJlY2F1c2UgdGhleSBhcmUgbm90IGFkamFjZW50IGluIGFueSBjYXNlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcGVydHkgPT09ICdpc0FkamFjZW50VG9Tb21lU2hpcCcpIHtcbiAgICAgICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmlzQWRqYWNlbnRUb1NvbWVTaGlwID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkgPT09ICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnKSB7XG4gICAgICAgIHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5pc0FkamFjZW50VG9Tb21lU3Vua1NoaXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNjb25maXJtQ29vcmRpbmF0ZXNBcmVOb3RBdmFpbGFibGUoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCByZXN1bHRPZkhlbHBlciA9IHRoaXMuI2FjY2Vzc1Byb3BlcnR5T25TaGlwT2JqZWN0KFxuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAnY29udGFpbnNTaGlwJ1xuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdE9mSGVscGVyO1xuICB9XG5cbiAgI3N0YW5kSW5Bbm90aGVyU2hpcEFkamFjZW50U3F1YXJlcyguLi5jb29yZGluYXRlcykge1xuICAgIGNvbnN0IHJlc3VsdE9mSGVscGVyID0gdGhpcy4jYWNjZXNzUHJvcGVydHlPblNoaXBPYmplY3QoXG4gICAgICBjb29yZGluYXRlcyxcbiAgICAgICdpc0FkamFjZW50VG9Tb21lU2hpcCdcbiAgICApO1xuICAgIHJldHVybiByZXN1bHRPZkhlbHBlcjtcbiAgfVxuXG4gIC8vIFVzZSB0aGUgcmVzdCBvcGVyYXRvciB0byBwbGFjZSBhbGwgYXJndW1lbnRzIGludG8gb25lIGFycmF5IGFuZCB0aGVuIGV4dHJhY3Qgc3BlY2lmaWMgcGFydHMgb2YgaXRcbiAgI2FjY2Vzc1Byb3BlcnR5T25TaGlwT2JqZWN0KC4uLmNvb3JkaW5hdGVzQW5kUHJvcGVydHkpIHtcbiAgICBjb25zdCBhcnJheVdpdGhBcmd1bWVudHMgPSBjb29yZGluYXRlc0FuZFByb3BlcnR5O1xuICAgIGNvbnN0IHggPSBhcnJheVdpdGhBcmd1bWVudHNbMF1bMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aEFyZ3VtZW50c1swXVsxXTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFycmF5V2l0aEFyZ3VtZW50c1sxXTtcblxuICAgIGxldCB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHgpICYmIEFycmF5LmlzQXJyYXkoeSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBBY2Nlc3MgYSBwcm9wZXJ0eSBvbiB0aGUgc2hpcCB3aXRoIHdoaWNoIHRoZSBtZXRob2Qgd2FzIGNhbGxlZCBpbiBhIGxlc3MgaGFyZC1jb2RlZCBtYW5uZXIgd2l0aCBhIGRvdCBub3RhdGlvblxuICAgICAgICB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uID0gdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHhbaV0sIHlbaV0pW1xuICAgICAgICAgIHByb3BlcnR5XG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKHdpbGxDYW5jZWxTaGlwQ3JlYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uID0gdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpW3Byb3BlcnR5XTtcblxuICAgICAgaWYgKHdpbGxDYW5jZWxTaGlwQ3JlYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2NvbXBhcmVBZ2FpbnN0TGltaXRDb25kaXRpb25zKHgsIHkpIHtcbiAgICBpZiAoIXRoaXMuI2ZpdEluQm9hcmRMaW1pdHMoeCwgeSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuI2NvbmZpcm1Db29yZGluYXRlc0FyZU5vdEF2YWlsYWJsZSh4LCB5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy4jc3RhbmRJbkFub3RoZXJTaGlwQWRqYWNlbnRTcXVhcmVzKHgsIHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcCh4LCB5LCBzaGlwU2l6ZSwgZGlyZWN0aW9uID0gJ2hvcicpIHtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcFNpemUpO1xuXG4gICAgaWYgKHNoaXAubGVuZ3RoID4gMSkge1xuICAgICAgLy8gQ3JlYXRlIHR3byBhcnJheXMgdG8gcGxhY2Ugc2hpcHMgb3ZlciBtdWx0aXBsZSBzcXVhcmVzLCBkb2luZyBpdCBpbiBib3RoIGRpcmVjdGlvbnNcbiAgICAgIGNvbnN0IGFsbFZhbHVlc09mWCA9IFtdO1xuICAgICAgY29uc3QgYWxsVmFsdWVzT2ZZID0gW107XG5cbiAgICAgIC8vIElmIHBsYWNlZCBob3Jpem9udGFsbHksIHRoZSBzaGlwJ3MgZmlyc3Qgc3F1YXJlIHdpbGwgZ2VuZXJhdGUgdGhlIHJlc3Qgb2Ygc3F1YXJlcyB0byB0aGUgcmlnaHQsIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHJvd1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcicpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZYLnB1c2goeCk7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZZLnB1c2goeSk7XG4gICAgICAgICAgeCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHBsYWNlZCB2ZXJ0aWNhbGx5LCB0aGUgc2hpcCdzIGZpcnN0IHNxdWFyZSB3aWxsIGdlbmVyYXRlIHRoZSByZXN0IG9mIHNxdWFyZXMgZG93biwgd2l0aG91dCBjaGFuZ2luZyB0aGUgY29sdW1uXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcicpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZYLnB1c2goeCk7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZZLnB1c2goeSk7XG4gICAgICAgICAgeSArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIGFueSBvZiB0aGUgcmVzdHJpY3Rpb25zIGlzIHZpb2xhdGVkIGJlZm9yZSBwbGFjaW5nIGEgc2hpcC4gSWYgeWVzLCB0aGUgc2hpcCBpcyBub3QgcGxhY2VkIG9uIHRoZSBib2FyZFxuICAgICAgaWYgKCF0aGlzLiNjb21wYXJlQWdhaW5zdExpbWl0Q29uZGl0aW9ucyhhbGxWYWx1ZXNPZlgsIGFsbFZhbHVlc09mWSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKFxuICAgICAgICAgIGFsbFZhbHVlc09mWFtpXSxcbiAgICAgICAgICBhbGxWYWx1ZXNPZllbaV1cbiAgICAgICAgKS5jb250YWluc1NoaXAgPSBzaGlwO1xuXG4gICAgICAgIC8vIFN0b3JlIHNoaXBzIGluc2lkZSB0aGUgYWxsU2hpcHMgYXJyYXkgd2l0aCB0aGVpciBjb29yZGluYXRlcyB0byBiZSBhYmxlIHRvIGVhc2llciBhbnN3ZXIgaWYgdGhlIGF0dGFja2VkIGNvb3JkaW5hdGVzIGJlbG9uZyB0byBhbnkgc2hpcFxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaCh7XG4gICAgICAgICAgICBzaGlwSW5zdGFuY2U6IHNoaXAsXG4gICAgICAgICAgICBjb29yZGluYXRlczogW1thbGxWYWx1ZXNPZlhbaV0sIGFsbFZhbHVlc09mWVtpXV1dLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWxsU2hpcHNcbiAgICAgICAgICAgIC5hdCgtMSlcbiAgICAgICAgICAgIC5jb29yZGluYXRlcy5wdXNoKFthbGxWYWx1ZXNPZlhbaV0sIGFsbFZhbHVlc09mWVtpXV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEtlZXAgcmVzZXJ2ZUFkamFjZW50U3F1YXJlcygpIGluIGEgc2VwYXJhdGUgbG9vcCBiZWNhdXNlIGl0IGlzIGltcG9ydGFudCBhbGwgc2hpcHMgdG8gYmUgcHJpb3JseSBjcmVhdGVkIHRvIHJlc2VydmUgb25seSB0cnVseSBhZGphY2VudCBzcXVhcmVzLiBUaGUgb3RoZXIgMiBzcXVhcmVzIG9mIGEgc2hpcCB3aXRoIHRoZSBsZW5ndGggb2YgMyBhcmUgbm90IGFkamFjZW50OyBUaGV5IGFyZSBhIHBhcnQgb2YgdGhlIHNoaXBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKFxuICAgICAgICAgIGFsbFZhbHVlc09mWFtpXSxcbiAgICAgICAgICBhbGxWYWx1ZXNPZllbaV0sXG4gICAgICAgICAgJ2lzQWRqYWNlbnRUb1NvbWVTaGlwJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmICghdGhpcy4jY29tcGFyZUFnYWluc3RMaW1pdENvbmRpdGlvbnMoeCwgeSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuY29udGFpbnNTaGlwID0gc2hpcDtcbiAgICAgIHRoaXMuI3Jlc2VydmVBZGphY2VudFNxdWFyZXMoeCwgeSwgJ2lzQWRqYWNlbnRUb1NvbWVTaGlwJyk7XG4gICAgICB0aGlzLmFsbFNoaXBzLnB1c2goeyBzaGlwSW5zdGFuY2U6IHNoaXAsIGNvb3JkaW5hdGVzOiBbeCwgeV0gfSk7XG4gICAgfVxuICAgIC8vIFRvIGNvbmZpcm0gdGhhdCB0aGUgc2hpcCBoYXMgYmVlbiBwbGFjZWQgc3VjY2Vzc2Z1bGx5XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBIZWxwZXJzIGZvciByZWNlaXZlQXR0YWNrKClcbiAgI3RhcmdldENvb3JkaW5hdGVzT3V0c2lkZUJvYXJkKGFycmF5V2l0aENvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgYXR0YWNrSXNPdXRzaWRlQm9hcmQgPSBhcnJheVdpdGhDb29yZGluYXRlcy5maWx0ZXIoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIHJldHVybiBjb29yZGluYXRlID4gOSB8fCBjb29yZGluYXRlIDwgMDtcbiAgICB9KTtcblxuICAgIGlmIChhdHRhY2tJc091dHNpZGVCb2FyZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgI2NvbmZpcm1TcXVhcmVzQXJlTm90QXZhaWxhYmxlKGFycmF5V2l0aENvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeCA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IHkgPSBhcnJheVdpdGhDb29yZGluYXRlc1sxXTtcblxuICAgIGlmICh0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuaGFzQmVlblRhcmdldHRlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuaXNBZGphY2VudFRvU29tZVN1bmtTaGlwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gICNmaW5kVGFyZ2V0dGVkU2hpcChhcnJheVdpdGhDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHggPSBhcnJheVdpdGhDb29yZGluYXRlc1swXTtcbiAgICBjb25zdCB5ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMV07XG5cbiAgICBpZiAodGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmNvbnRhaW5zU2hpcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjY2hlY2tJZkFsbFNoaXBzSGF2ZUJlZW5EZXN0cm95ZWQoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5hbGxTaGlwcy5sZW5ndGggPT09IHRoaXMuc3Vua1NoaXBzLmxlbmd0aCAmJlxuICAgICAgdGhpcy5hbGxTaGlwcy5sZW5ndGggJiZcbiAgICAgIHRoaXMuc3Vua1NoaXBzLmxlbmd0aFxuICAgICkge1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgI2NoZWNrR2FtZVN0YXRlKCkge1xuICAgIGlmICh0aGlzLmdhbWVPdmVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gICNjaGVja0lmQXR0YWNrSXNBbGxvd2VkKGFycmF5V2l0aENvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMuI2NoZWNrR2FtZVN0YXRlKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuI3RhcmdldENvb3JkaW5hdGVzT3V0c2lkZUJvYXJkKGFycmF5V2l0aENvb3JkaW5hdGVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy4jY29uZmlybVNxdWFyZXNBcmVOb3RBdmFpbGFibGUoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soLi4ucGFpck9mQ29vcmRpbmF0ZXMpIHtcbiAgICAvLyBDb252ZXJ0IGFyZ3VtZW50cyB0byBudW1iZXJzIGJlY2F1c2UgaW4gZ2V0U3BlY2lmaWNTaGlwKCkgSSBoYXZlIHN0cmljdCBlcXVhbGl0eSB0byBnZXQgYSBzaGlwIHRoYXQgaXMgdW5kZXIgYXR0YWNrLiBCdXQgZnJvbSBvdGhlciBtb2R1bGVzIGNvb3JkaW5hdGVzIGFyZSB0cmFuc2ZlcmVkIGFzIHN0cmluZ3MgdG8ga2VlcCAwJ3MsIGUuZy4gJzAzJy4gSWYgaXQgd2FzIGEgbnVtYmVyIGluIHRoZSBmaXJzdCBwbGFjZSwgSlMgd291bGQgZXJhc2UgMCBhbmQgaGVuY2UgYW4gWCBjb29yZGluYXRlIHdhcyBtaXNzaW5nXG4gICAgY29uc3QgYXJyYXlXaXRoQ29vcmRpbmF0ZXMgPSBwYWlyT2ZDb29yZGluYXRlcztcbiAgICBjb25zdCB4ID0gTnVtYmVyKGFycmF5V2l0aENvb3JkaW5hdGVzWzBdKTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGFycmF5V2l0aENvb3JkaW5hdGVzWzFdKTtcblxuICAgIGlmICghdGhpcy4jY2hlY2tJZkF0dGFja0lzQWxsb3dlZChhcnJheVdpdGhDb29yZGluYXRlcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBoYXNCZWVuVGFyZ2V0dGVkIHByb3BlcnR5IGNhbiBlaXRoZXIgbWVhbiBhIHN1Y2Nlc3NmdWwgYXR0YWNrIChoaXQgYSBzaGlwKSBvciBhIGZhaWxlZCBvbmUgKGEgbWlzc2VkIHNob3QpXG4gICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmhhc0JlZW5UYXJnZXR0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLiNmaW5kVGFyZ2V0dGVkU2hpcChhcnJheVdpdGhDb29yZGluYXRlcykpIHtcbiAgICAgIGNvbnN0IHRhcmdldHRlZFNoaXAgPSB0aGlzLmdldFNwZWNpZmljU2hpcCh4LCB5KTtcbiAgICAgIHRhcmdldHRlZFNoaXAuaGl0KCk7XG5cbiAgICAgIGlmICh0YXJnZXR0ZWRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHRoaXMuc3Vua1NoaXBzLnB1c2godGFyZ2V0dGVkU2hpcCk7XG4gICAgICAgIGNvbnN0IHNoaXBTcXVhcmVzID0gdGhpcy5nZXRTcGVjaWZpY1NoaXAoeCwgeSwgJ2Nvb3JkaW5hdGVzJyk7XG5cbiAgICAgICAgLy8gU3F1YXJlcyBhcm91bmQgYSBzdW5rIHNoaXAgYXJlIG5vdCBwb3NzaWJsZSBmb3IgYXR0YWNrcyBiZWNhdXNlIHRoZXkgY2Fubm90IGNvbnRhaW4gYW5vdGhlciBzaGlwIGJhc2VkIG9uIHRoZSBydWxlcyBvZiBzaGlwcycgcGxhY2luZyDigJQgdGhlcmUgbXVzdCBiZSBhIG9uZS1zcXVhcmUgZ2FwIGJldHdlZW4gdHdvIGRpZmZlcmVudCBzaGlwc1xuICAgICAgICBpZiAodGFyZ2V0dGVkU2hpcC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKFxuICAgICAgICAgICAgc2hpcFNxdWFyZXNbMF0sXG4gICAgICAgICAgICBzaGlwU3F1YXJlc1sxXSxcbiAgICAgICAgICAgICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKFxuICAgICAgICAgICAgICBzaGlwU3F1YXJlc1tpXVswXSxcbiAgICAgICAgICAgICAgc2hpcFNxdWFyZXNbaV1bMV0sXG4gICAgICAgICAgICAgICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBHYW1lYm9hcmQgc2hvdWxkIGtlZXAgdHJhY2sgb2YgaXRzIHRlcm1pbmF0aW9uIHN0YXRlIGJlY2F1c2UgR2FtZUxvb3Agd2lsbCByZWx5IG9uIGl0IGxhdGVyXG4gICAgICAgIHRoaXMuI2NoZWNrSWZBbGxTaGlwc0hhdmVCZWVuRGVzdHJveWVkKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuYXQoeCkuYXQoeSkuYXQoMCk7XG4gIH1cblxuICBnZXRBbGxTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxTaGlwcztcbiAgfVxuXG4gIGdldFN1bmtTaGlwc1Byb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnN1bmtTaGlwcztcbiAgfVxuXG4gIGdldFNwZWNpZmljU2hpcCh4LCB5LCBwcm9wZXJ0eSA9ICdzaGlwSW5zdGFuY2UnKSB7XG4gICAgLy8gQXJyYXkgYWxsU2hpcHMgaXMgYW4gYXJyYXkgZmVhdHVyaW5nIG9iamVjdHMgd2l0aCB0aGUgJ3NoaXBJbnN0YW5jZScgYW5kICdjb29yZGluYXRlcycgcHJvcGVydGllc1xuICAgIC8vIElmIGluc2lkZSAnc2hpcEluc3RhbmNlJyB0aGVyZSBpcyBhIHNoaXAgd2l0aCB0aGUgbGVuZ3RoIG9mIDEsIHRoZW4gaXRzIGNvb3JkaW5hdGVzIGFyZSBzdG9yZWQgaW5zaWRlIGEgc2luZ2xlIGFycmF5IOKAlCBbLi4uXVxuICAgIC8vIEhvd2V2ZXIsIGlmIGl0J3MgYSBsb25nZXIgc2hpcCwgdGhlbiBhIGZldyBkaWZmZXJlbnQgY29vcmRpbmF0ZXMgYXJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2hpcCBhbmQgYXR0YWNraW5nIGFueSBvZiB0aGVtIHNob3VsZCBoaXQgdGhhdCBzaGlwLiBJbiB0aGF0IGNhc2UsIHN0b3JlIGluZGl2aWR1YWwgY29vcmRpbmF0ZXMgaW5zaWRlIGFub3RoZXIgYXJyYXkg4oCUIFtbLi4uXSwgWy4uLl1dXG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuZ2V0QWxsU2hpcHMoKS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmNvb3JkaW5hdGVzWzBdKSkge1xuICAgICAgICByZXR1cm4gaXRlbS5jb29yZGluYXRlc1swXSA9PT0geCAmJiBpdGVtLmNvb3JkaW5hdGVzWzFdID09PSB5XG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChpdGVtLmNvb3JkaW5hdGVzW2ldWzBdID09PSB4ICYmIGl0ZW0uY29vcmRpbmF0ZXNbaV1bMV0gPT09IHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcFswXVtwcm9wZXJ0eV07XG4gIH1cbn1cbiIsImV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfTtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgYm9hcmRPbmUsIGJvYXJkVHdvKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm93bkJvYXJkID0gYm9hcmRPbmU7XG4gICAgdGhpcy5lbmVteUJvYXJkID0gYm9hcmRUd287XG4gIH1cblxuICBhdHRhY2tPcHBvbmVudCh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9XG59XG5cbmNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgYm9hcmRPbmUsIGJvYXJkVHdvKSB7XG4gICAgc3VwZXIobmFtZSwgYm9hcmRPbmUsIGJvYXJkVHdvKTtcbiAgICB0aGlzLnBvc3NpYmxlTW92ZXMgPSB0aGlzLiNjcmVhdGVBbGxQb3NzaWJsZU1vdmVzKCk7XG4gIH1cblxuICAvLyBDcmVhdGUgYWxsIHBvc3NpYmxlIG1vdmVzLiBBZnRlciBlYWNoIG1vdmUsIHRoYXQgbW92ZSBpcyBnb2luZyB0byBiZSByZW1vdmVkIGZyb20gcG9zc2libGVNb3ZlcyBzbyB0aGF0IG1vdmVzIGFyZSBuZXZlciByZXBlYXRlZFxuICAjY3JlYXRlQWxsUG9zc2libGVNb3ZlcygpIHtcbiAgICBjb25zdCBtb3ZlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbW92ZXMucHVzaChgJHtpfSR7an1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW92ZXM7XG4gIH1cblxuICBhdHRhY2tPcHBvbmVudCguLi5zbWFydE1vdmUpIHtcbiAgICBpZiAoIXRoaXMucG9zc2libGVNb3Zlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHBhcnQgaXMgZm9yIFwic21hcnQgY29tcHV0ZXJcIiBidXQgaWYgdGhlIGNvbXB1dGVyIGRpZCBub3QgaGl0IGFueXRoaW5nIHRoYXQgYXJndW1lbnQgaXMgbm90IGdpdmVuXG4gICAgaWYgKHNtYXJ0TW92ZVswXSkge1xuICAgICAgY29uc3QgW3gsIHldID0gc21hcnRNb3ZlO1xuICAgICAgY29uc3QgYXR0ZW1wdGVkQXR0YWNrID0gdGhpcy5lbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICB0aGlzLnBvc3NpYmxlTW92ZXMgPSB0aGlzLnBvc3NpYmxlTW92ZXMuZmlsdGVyKChtb3ZlKSA9PiB7XG4gICAgICAgIHJldHVybiBtb3ZlICE9PSBgJHt4fSR7eX1gO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYXR0ZW1wdGVkQXR0YWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgeDtcbiAgICAgIGxldCB5O1xuICAgICAgbGV0IGF0dGVtcHRlZEF0dGFjaztcblxuICAgICAgZG8ge1xuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqIHRoaXMucG9zc2libGVNb3Zlcy5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgeCA9IHRoaXMucG9zc2libGVNb3Zlc1tyYW5kb21JbmRleF1bMF07XG4gICAgICAgIHkgPSB0aGlzLnBvc3NpYmxlTW92ZXNbcmFuZG9tSW5kZXhdWzFdO1xuXG4gICAgICAgIGF0dGVtcHRlZEF0dGFjayA9IHRoaXMuZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZXMgPSB0aGlzLnBvc3NpYmxlTW92ZXMuZmlsdGVyKChtb3ZlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG1vdmUgIT09IGAke3h9JHt5fWA7XG4gICAgICAgIH0pO1xuICAgICAgfSB3aGlsZSAoIWF0dGVtcHRlZEF0dGFjayk7XG5cbiAgICAgIHJldHVybiBbeCwgeV07IC8vIFJldHVybiBhbiBhcnJheSBvZiBjb29yZGluYXRlcyB0byBwYXNzIGEgdGVzdCB0aGF0IGVuc3VyZXMgQ29tcHV0ZXIgZG9lcyBoaXQgdGhlIFBsYXllcidzIGJvYXJkIGF0IHRoZSBjb29yZGluYXRlc1xuICAgIH1cbiAgfVxuXG4gIGdldExlbmd0aE9mUG9zc2libGVNb3Zlc0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLnBvc3NpYmxlTW92ZXMubGVuZ3RoO1xuICB9XG59XG4iLCJleHBvcnQgeyBTaGlwIH07XG5jbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy50aW1lc0hpdCA9IDA7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNTdW5rKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMudGltZXNIaXQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGltZXNIaXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lc0hpdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZUxvb3AgfSBmcm9tICcuL2dhbWVMb29wJztcbmV4cG9ydCB7IGluaXRpYWxpemVHcmlkcyB9O1xuXG4vLyBTZWxlY3QgRE9NIGVsZW1lbnRzXG5jb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZS1idXR0b24nKTtcbmNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb21pemUtc2hpcHMtbG9jYXRpb25zJyk7XG5jb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1nYW1lLWJ1dHRvbicpO1xuXG5jb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1ncmlkJyk7XG5jb25zdCBudW1iZXJHcmlkSW5kZXhlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5udW1iZXItYm9hcmQtaW5kZXhlcycpO1xuY29uc3QgbGV0dGVyR3JpZEluZGV4ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGV0dGVyLWJvYXJkLWluZGV4ZXMnKTtcbmNvbnN0IGdyaWRTcXVhcmVzSHVtYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtZ3JpZC5odW1hbicpO1xuY29uc3QgZ3JpZFNxdWFyZXNDb21wdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1ncmlkLmNvbXB1dGVyJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEFwcGVuZEVsZW1lbnQoZWxlbWVudFR5cGUsIGFwcGVuZFRvLCAuLi5jbGFzc0FyZykge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gIGFwcGVuZFRvLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gIGlmIChjbGFzc0FyZy5sZW5ndGgpIHtcbiAgICBjbGFzc0FyZy5mb3JFYWNoKChjbGFzc1ZhbHVlKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NWYWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGluIGluZGV4LmpzXG5mdW5jdGlvbiBpbml0aWFsaXplR3JpZHMoKSB7XG4gIGdyaWRzLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVBbmRBcHBlbmRFbGVtZW50KCdkaXYnLCBkaXYsICdzcXVhcmUnKTtcblxuICAgICAgLy8gQWRkIGlkcyBmb3Igc3F1YXJlcyB0byB0aWUgYXJyYXkgYm9hcmRzIHdpdGggZ3JpZC4gUmV2ZXJzZSB0aGVtIGJlY2F1c2UgZmlyc3QgY29vcmRpbmF0ZSBpcyBYLCBzbyBpdCBjaGFuZ2VzIG1vcmUgZnJlcXVlbnRseSBhbmQgbWFrZSB0aGVtIHN0cmluZ3MgdG8ga2VlcCAwJ3MgaW4gMDEsIDAyXG4gICAgICBpZiAoaSA8IDEwKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChpICsgJzAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJldmVyc2VkSWQgPSBTdHJpbmcoaSkuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHJldmVyc2VkSWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbnVtYmVyR3JpZEluZGV4ZXMuZm9yRWFjaCgocG9zaXRpb24pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVBbmRBcHBlbmRFbGVtZW50KCdkaXYnLCBwb3NpdGlvbiwgJ2JvYXJkLXBvc2l0aW9uJyk7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldHRlckdyaWRJbmRleGVzLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVBbmRBcHBlbmRFbGVtZW50KCdkaXYnLCBwb3NpdGlvbiwgJ2JvYXJkLXBvc2l0aW9uJyk7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2hhcmFjdGVyc1tpXTtcbiAgICB9XG4gIH0pO1xuXG4gIGRpc3BsYXlTaGlwc09uQm9hcmRzKCk7XG59XG5cbi8vIFZhcmlibGUgaG9sZGluZyBnYW1lTG9vcCBvYmplY3RcbmxldCBnYW1lID0gbmV3IEdhbWVMb29wKCk7XG5cbi8vIEJ1dHRvbnMgdG8gY29udHJvbCBnYW1lIGZsb3dcbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbnN0IGNvbmZpcm1TdGFydEdhbWUgPSBjb25maXJtKFxuICAgICdBZnRlciBzdGFydGluZyB5b3Ugd2lsbCBub3QgYmUgYWJsZSB0byByYW5kb21pemUgc2hpcHMgbG9jYXRpb25zIGFueW1vcmUhJ1xuICApO1xuXG4gIGlmIChjb25maXJtU3RhcnRHYW1lKSB7XG4gICAgc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdC5yZXBsYWNlKCdub3Qtc3RhcnRlZCcsICdzdGFydGVkJyk7XG4gICAgYWxlcnQoJ0dhbWUgaGFzIGJlZW4gc3RhcnRlZCEnKTtcbiAgICB0b2dnbGVIb3ZlckVmZmVjdE9uQm9hcmQoZ3JpZFNxdWFyZXNDb21wdXRlcik7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ1lvdSBjYW4gc3RpbGwgcmFuZG9taXplIHlvdXIgc2hpcHMgbG9jYXRpb25zIScpO1xuICB9XG59XG5cbm5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcbiAgY29uc3QgYnV0dG9uU3RhdHVzID0gc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdDtcbiAgaWYgKGJ1dHRvblN0YXR1cy5jb250YWlucygnbm90LXN0YXJ0ZWQnKSkge1xuICAgIGFsZXJ0KCdObyBhY3RpdmUgZ2FtZSBoYXMgYmVlbiBmb3VuZC4gWW91IG5lZWQgdG8gc3RhcnQgb25lIScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghZ2FtZS5nZXRXaW5uZXIoKSkge1xuICAgIGNvbnN0IGNvbmZpcm1OZXdHYW1lID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHN0YXJ0IG5ldyBnYW1lPycpO1xuICAgIGlmICghY29uZmlybU5ld0dhbWUpIHtcbiAgICAgIGFsZXJ0KCdZb3VyIGFjdGl2ZSBnYW1lIGlzIHNhdmVkLiBQbGF5IG9uIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGFsZXJ0KCdOZXcgZ2FtZSEnKTtcbiAgYnV0dG9uU3RhdHVzLnJlcGxhY2UoJ3N0YXJ0ZWQnLCAnbm90LXN0YXJ0ZWQnKTtcbiAgZ2FtZSA9IG5ldyBHYW1lTG9vcCgpO1xuICBjbGVhclByZXZpb3VzQm9hcmRzVmlzdWFscygpO1xufVxuXG5yYW5kb21pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByYW5kb21pemVTaGlwTG9jYXRpb25zKTtcbmZ1bmN0aW9uIHJhbmRvbWl6ZVNoaXBMb2NhdGlvbnMoKSB7XG4gIGNvbnN0IGJ1dHRvblN0YXR1cyA9IHN0YXJ0R2FtZUJ1dHRvbi5jbGFzc0xpc3Q7XG4gIGlmIChidXR0b25TdGF0dXMuY29udGFpbnMoJ3N0YXJ0ZWQnKSkge1xuICAgIGFsZXJ0KCdDYW5ub3QgcmFuZG9taXplIHNoaXBzIGxvY2F0aW9ucyBkdXJpbmcgdGhlIGdhbWUhJyk7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZS5jaGFuZ2VTaGlwc0xvY2F0aW9ucygpO1xuICAgIGNsZWFyUHJldmlvdXNCb2FyZHNWaXN1YWxzKCk7XG4gIH1cbn1cblxuZ3JpZFNxdWFyZXNDb21wdXRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZ2lzdGVyQ2xpY2tzT25Cb2FyZHMpO1xuZnVuY3Rpb24gcmVnaXN0ZXJDbGlja3NPbkJvYXJkcyhldmVudCkge1xuICBpZiAoZ2FtZS5nZXRXaW5uZXIoKSkge1xuICAgIGFsZXJ0KCdHYW1lIG92ZXIhIFN0YXJ0IG5ldyBnYW1lIScpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBidXR0b25TdGF0dXMgPSBzdGFydEdhbWVCdXR0b24uY2xhc3NMaXN0O1xuICAgIGlmIChidXR0b25TdGF0dXMuY29udGFpbnMoJ25vdC1zdGFydGVkJykpIHtcbiAgICAgIGFsZXJ0KCdHYW1lIGhhcyBub3QgYmVlbiBzdGFydGVkIHlldCEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICAvLyBBcHBseSBldmVudCBkZWxlZ2F0aW9ucyB0byBib2FyZCBncmlkc1xuICBjb25zdCBpc0luc2lkZVNxdWFyZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYuc3F1YXJlJyk7XG4gIGlmICghaXNJbnNpZGVTcXVhcmUpIHJldHVybjtcblxuICAvLyBCZWZvcmUgdGhlIGF0dGFjayBsb29rIGF0IHRoZSBzdW5rU2hpcHMgcHJvcGVydHkgYW5kIGNvbXBhcmUgaXQgd2l0aCB0aGUgc3RhdGUgb2YgdGhlIGJvYXJkIGFmdGVyIHRoZSBhdHRhY2sgdG8gdW5kZXJzdGFuZCBpZiBhbnkgc2hpcCBoYXMgYmVlbiBzdW5rIGR1cmluZyB0aGUgbW92ZVxuICBjb25zdCBzdW5rU2hpcHNPZlBsYXllclR3byA9IGdhbWUuZ2V0U3Vua1NoaXBzT2YoJ0NvbXB1dGVyJykubGVuZ3RoO1xuXG4gIGNvbnN0IGdldFNxdWFyZUlkID0gWy4uLmlzSW5zaWRlU3F1YXJlLmNsYXNzTGlzdF0uZmlsdGVyKChjbGFzc1ZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIGNsYXNzVmFsdWUubGVuZ3RoID09PSAyID8gdHJ1ZSA6IGZhbHNlO1xuICB9KTtcbiAgZ2FtZS5tYWtlTW92ZShnZXRTcXVhcmVJZFswXSk7XG4gIGlmIChpc0luc2lkZVNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRhaW5zLXNoaXAtaGlkZGVuJykpIHtcbiAgICBpc0luc2lkZVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzZnVsLXNob3QnKTtcblxuICAgIGlmIChzdW5rU2hpcHNPZlBsYXllclR3byAhPT0gZ2FtZS5nZXRTdW5rU2hpcHNPZignQ29tcHV0ZXInKS5sZW5ndGgpIHtcbiAgICAgIGRpc2FibGVBZGphY2VudFNxdWFyZXNUb1N1bmtTaGlwcyhnYW1lKTtcbiAgICAgIGlmIChnYW1lLmdldFdpbm5lcigpKSB7XG4gICAgICAgIGFsZXJ0KGBHYW1lIG92ZXIhICR7Z2FtZS5nZXRXaW5uZXIoKX0gaGFzIHdvbiFgKTtcbiAgICAgICAgdG9nZ2xlSG92ZXJFZmZlY3RPbkJvYXJkKGdyaWRTcXVhcmVzQ29tcHV0ZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlzSW5zaWRlU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1zaG90Jyk7XG4gIH1cblxuICBjb21wdXRlck1ha2VzSW1tZWRpYXRlTW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlck1ha2VzSW1tZWRpYXRlTW92ZSgpIHtcbiAgY29uc3Qgc3Vua1NoaXBzT2ZQbGF5ZXJPbmUgPSBnYW1lLmdldFN1bmtTaGlwc09mKCdIdW1hbicpLmxlbmd0aDtcblxuICBsZXQgc3F1YXJlSWQ7XG4gIGxldCBpc1ByZXZpb3VzbHlIaXRTaGlwID0gZ2FtZS5nZXRDb29yZGluYXRlc09mUHJldmlvdXNseUhpdFNoaXAoKTtcbiAgLy8gV2hlbiBjb21wdXRlciBoaXRzIGEgc2hpcCBidXQgZG9lcyBub3Qgc2luayBpdCBmdWxseSwgaXQgd2lsbCBzdG9yZSB0aGUgd2hvbGUgc2hpcCBvYmplY3QgYW5kIHNpbmsgaXQgaW4gdGhlIHVwY29taW5nIG1vdmVzXG4gIGlmIChpc1ByZXZpb3VzbHlIaXRTaGlwKSB7XG4gICAgY29uc3QgcGFydE9mU2hpcFVuZGVyQXR0YWNrID0gZ2FtZVxuICAgICAgLmdldENvb3JkaW5hdGVzT2ZQcmV2aW91c2x5SGl0U2hpcCgpWzBdXG4gICAgICAuam9pbignJyk7XG4gICAgc3F1YXJlSWQgPSBnYW1lLm1ha2VNb3ZlKHBhcnRPZlNoaXBVbmRlckF0dGFjayk7XG4gIH0gZWxzZSB7XG4gICAgc3F1YXJlSWQgPSBnYW1lLm1ha2VNb3ZlKCk7XG4gIH1cblxuICBjb25zdCBzcXVhcmVzID0gWy4uLmdyaWRTcXVhcmVzSHVtYW4uY2hpbGRyZW5dO1xuICBsZXQgdGFyZ2V0dGVkU3F1YXJlO1xuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKHNxdWFyZUlkKSkge1xuICAgICAgdGFyZ2V0dGVkU3F1YXJlID0gc3F1YXJlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRhcmdldHRlZFNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRhaW5zLXNoaXAnKSkge1xuICAgIHRhcmdldHRlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzZnVsLXNob3QnKTtcblxuICAgIGlmIChzdW5rU2hpcHNPZlBsYXllck9uZSAhPT0gZ2FtZS5nZXRTdW5rU2hpcHNPZignSHVtYW4nKS5sZW5ndGgpIHtcbiAgICAgIGdhbWUudXBkYXRlQ29vcmRpbmF0ZXNPZlByZXZpb3VzbHlIaXRTaGlwKHNxdWFyZUlkKTtcbiAgICAgIGRpc2FibGVBZGphY2VudFNxdWFyZXNUb1N1bmtTaGlwcyhnYW1lKTtcblxuICAgICAgaWYgKGdhbWUuZ2V0V2lubmVyKCkpIHtcbiAgICAgICAgYWxlcnQoYEdhbWUgb3ZlciEgJHtnYW1lLmdldFdpbm5lcigpfSBoYXMgd29uYCk7XG4gICAgICAgIHJldmVhbFN1cnZpdmVkU2hpcHMoKTtcbiAgICAgICAgdG9nZ2xlSG92ZXJFZmZlY3RPbkJvYXJkKGdyaWRTcXVhcmVzQ29tcHV0ZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnYW1lLmdldENvb3JkaW5hdGVzT2ZQcmV2aW91c2x5SGl0U2hpcCgpKSB7XG4gICAgICBnYW1lLnVwZGF0ZUNvb3JkaW5hdGVzT2ZQcmV2aW91c2x5SGl0U2hpcChzcXVhcmVJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGh1bWFuU2hpcHMgPSBnYW1lLmdldEh1bWFuQWxsU2hpcHMoKTtcbiAgICAgIGh1bWFuU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlZFNoaXAgPSBzaGlwLmNvb3JkaW5hdGVzO1xuXG4gICAgICAgIC8vIGFsbFNoaXBzIGFycmF5IG9uIGdhbWUgYm9hcmRzIGNvbnRhaW5zIDEtc3F1YXJlIHNoaXBzJyBwYWlyIG9mIGNvb3JkaW5hdGVzIGluIGFuIG91dGVyIGFycmF5IHdoZXJlIHRoZSBwYWlyIGlzIG51bWJlcnMuIFdpdGggbXVsdGktc3F1YXJlIHNoaXBzLCBjb29yZGluYXRlcyBhcmUgc3RpbGwgc2F2ZWQgaW4gYW4gb3V0ZXIgYXJyYXkuIFRob3VnaCB0aGVpciBwYWlycyBvZiBjb29yZGluYXRlcyBhcmUgc3RvcmVkIGluIGlubmVyIGFycmF5cy4gTGFzdCBidXQgbm90IGxlYXN0LCBpdCBpcyBub3QgaW1wb3J0YW50IGZvciB1cyB0byBsb29wIG92ZXIgMS1zcXVhcmUgc2hpcHMgYmVjYXVzZSB0aGV5IHdpbGwgbmV2ZXIgYmUgbWVtb3JpemVkIGFzIGNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldFxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb29yZGluYXRlZFNoaXBbMF0pKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZWRTaGlwLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMuam9pbignJykgPT09IHNxdWFyZUlkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0aWxsQWN0aXZlU2hpcFNxdWFyZXMgPSBzaGlwLmNvb3JkaW5hdGVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc3F1YXJlSWQgIT09IHNxdWFyZS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGdhbWUuc2F2ZUNvb3JkaW5hdGVzT2ZQcmV2aW91c2x5SGl0U2hpcChzdGlsbEFjdGl2ZVNoaXBTcXVhcmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRhcmdldHRlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtc2hvdCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJldmlvdXNCb2FyZHNWaXN1YWxzKCkge1xuICBjb25zdCBib2FyZEVsZW1lbnRzID0gWy4uLmdyaWRzLCAuLi5sZXR0ZXJHcmlkSW5kZXhlcywgLi4ubnVtYmVyR3JpZEluZGV4ZXNdO1xuICBib2FyZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICB9KTtcbiAgaW5pdGlhbGl6ZUdyaWRzKCk7XG59XG5cbi8vIFdoZW4gZ2FtZSBvdmVyLCB0aGVuIHRoaXMgZWZmZWN0IGlzIHJlbW92ZWRcbmZ1bmN0aW9uIHRvZ2dsZUhvdmVyRWZmZWN0T25Cb2FyZChkaXZzKSB7XG4gIGNvbnN0IGFycmF5T2ZHcmlkRGl2cyA9IFsuLi5kaXZzLmNoaWxkcmVuXTtcbiAgYXJyYXlPZkdyaWREaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvb3BPdmVyQWxsRGl2c0FuZEFycmF5U3F1YXJlcyhjdXJyZW50R2FtZSwgcHJvcGVydHkpIHtcbiAgY29uc3QgaHVtYW5HcmlkRGl2cyA9IFsuLi5ncmlkU3F1YXJlc0h1bWFuLmNoaWxkcmVuXTtcbiAgY29uc3QgY29tcHV0ZXJHcmlkRGl2cyA9IFsuLi5ncmlkU3F1YXJlc0NvbXB1dGVyLmNoaWxkcmVuXTtcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IGN1cnJlbnRHYW1lLmdldEJvYXJkT2YoJ0h1bWFuJyk7XG4gIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSBjdXJyZW50R2FtZS5nZXRCb2FyZE9mKCdDb21wdXRlcicpO1xuXG4gIGxldCBjb3VudGVyRm9yQXJyYXlXaXRoRGl2cyA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY29tcHV0ZXJTcXVhcmUgPSBib2FyZENvbXB1dGVyW2pdW2ldWzBdO1xuICAgICAgY29uc3QgaHVtYW5TcXVhcmUgPSBodW1hbkJvYXJkW2pdW2ldWzBdO1xuXG4gICAgICBpZiAoY29tcHV0ZXJTcXVhcmVbcHJvcGVydHldKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2NvbnRhaW5zU2hpcCcpIHtcbiAgICAgICAgICBjb21wdXRlckdyaWREaXZzW2NvdW50ZXJGb3JBcnJheVdpdGhEaXZzXS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgJ2NvbnRhaW5zLXNoaXAtaGlkZGVuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydHkgPT09ICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnKSB7XG4gICAgICAgICAgY29tcHV0ZXJHcmlkRGl2c1tjb3VudGVyRm9yQXJyYXlXaXRoRGl2c10uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICdhZGphY2VudC10by1zdW5rLXNoaXAnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaHVtYW5TcXVhcmVbcHJvcGVydHldKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2NvbnRhaW5zU2hpcCcpIHtcbiAgICAgICAgICBodW1hbkdyaWREaXZzW2NvdW50ZXJGb3JBcnJheVdpdGhEaXZzXS5jbGFzc0xpc3QuYWRkKCdjb250YWlucy1zaGlwJyk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkgPT09ICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnKSB7XG4gICAgICAgICAgaHVtYW5HcmlkRGl2c1tjb3VudGVyRm9yQXJyYXlXaXRoRGl2c10uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICdhZGphY2VudC10by1zdW5rLXNoaXAnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb3VudGVyRm9yQXJyYXlXaXRoRGl2cysrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2hpcHNPbkJvYXJkcygpIHtcbiAgbG9vcE92ZXJBbGxEaXZzQW5kQXJyYXlTcXVhcmVzKGdhbWUsICdjb250YWluc1NoaXAnKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUFkamFjZW50U3F1YXJlc1RvU3Vua1NoaXBzKCkge1xuICBsb29wT3ZlckFsbERpdnNBbmRBcnJheVNxdWFyZXMoZ2FtZSwgJ2lzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCcpO1xufVxuXG5mdW5jdGlvbiByZXZlYWxTdXJ2aXZlZFNoaXBzKCkge1xuICBjb25zdCBhcnJheSA9IFsuLi5ncmlkU3F1YXJlc0NvbXB1dGVyLmNoaWxkcmVuXTtcbiAgYXJyYXkuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgaWYgKFxuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygnY29udGFpbnMtc2hpcC1oaWRkZW4nKSAmJlxuICAgICAgIXNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Y2Nlc3NmdWwtc2hvdCcpXG4gICAgKSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0LXN1cnZpdmVkLXNoaXAnKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLy4uL1VJL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUdyaWRzIH0gZnJvbSAnLi92aXN1YWxQYXJ0LmpzJztcblxuaW5pdGlhbGl6ZUdyaWRzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=