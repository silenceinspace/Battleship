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
}

button {
  appearance: none;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  background-color: purple;
  color: white;
}

button:hover {
  cursor: pointer;
  text-decoration: underline;
}

.start-game-button {
  font-size: 2rem;
  font-weight: bold;
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

.square.contains-ship {
  background-color: green;
}

.square.disabled {
  background-color: grey;
}

.square.active:hover {
  cursor: pointer;
  background-color: orange;
}

.square.missed-shot {
  background-color: grey;
}

.square.successful-shot {
  background-color: red;
}

.square.adjacent-to-sunk-ship {
  background-color: darkred;
}
`, "",{"version":3,"sources":["webpack://./src/UI/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,6BAA6B;;EAE7B,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,8BAA8B;;EAE9B,kBAAkB;AACpB;;AAEA;;EAEE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,QAAQ;EACR,qBAAqB;;EAErB,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,uBAAuB;;EAEvB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uCAAuC;EACvC,oBAAoB;;EAEpB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;;EAER,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: black;\n  min-height: 100vh;\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 100px 1fr;\n\n  padding: 25px 50px;\n  width: 1000px;\n  margin: auto;\n}\n\n#container .top-part {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton {\n  appearance: none;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 15px;\n  background-color: purple;\n  color: white;\n}\n\nbutton:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.start-game-button {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n#container .main-part {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 50px;\n}\n\n.left-part,\n.right-part {\n  display: grid;\n  grid-template-rows: 60px 380px;\n\n  position: relative;\n}\n\n.left-part > p,\n.right-part > p {\n  font-size: 2.5rem;\n  font-weight: bold;\n  color: white;\n  place-self: center;\n}\n\n.number-board-indexes,\n.letter-board-indexes {\n  display: grid;\n  gap: 2px;\n  justify-items: center;\n\n  font-size: 1.7rem;\n  font-weight: bold;\n  color: orange;\n  position: absolute;\n}\n\n.number-board-indexes {\n  grid-template-rows: repeat(10, 30px);\n  grid-auto-columns: 30px;\n\n  top: 90px;\n  left: 20px;\n}\n\n.letter-board-indexes {\n  grid-template-columns: repeat(10, 30px);\n  grid-auto-rows: 30px;\n\n  top: 60px;\n  left: 50px;\n}\n\n.board-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n  gap: 2px;\n\n  background-color: black;\n  place-self: center;\n  border: 2px solid black;\n}\n\n.square {\n  background-color: white;\n}\n\n.square.contains-ship {\n  background-color: green;\n}\n\n.square.disabled {\n  background-color: grey;\n}\n\n.square.active:hover {\n  cursor: pointer;\n  background-color: orange;\n}\n\n.square.missed-shot {\n  background-color: grey;\n}\n\n.square.successful-shot {\n  background-color: red;\n}\n\n.square.adjacent-to-sunk-ship {\n  background-color: darkred;\n}\n"],"sourceRoot":""}]);
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
    this.humanBoard = this.#populateBoardWithShips('Human');
    this.computerBoard = this.#populateBoardWithShips('Computer');
    this.playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('Human', this.humanBoard, this.computerBoard);
    this.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_1__.Computer(
      'Computer',
      this.computerBoard,
      this.humanBoard
    );
    this.attacksNow = this.playerOne;
    this.thereIsAWinner = null;
    this.coordinatesForComputerToTarget = null;
  }

  // Place 10 ships at pretedermined coodinates for now
  #populateBoardWithShips(player) {
    const board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();

    if (player === 'Human') {
      board.placeShip(1, 0, 1);
      board.placeShip(2, 9, 1);
      board.placeShip(5, 9, 1);
      board.placeShip(9, 9, 1);
      board.placeShip(7, 0, 2, 'hor');
      board.placeShip(4, 4, 2, 'ver');
      board.placeShip(6, 4, 2, 'ver');
      board.placeShip(3, 0, 3, 'hor');
      board.placeShip(9, 2, 3, 'ver');
      board.placeShip(0, 3, 4, 'ver');
    } else if (player === 'Computer') {
      board.placeShip(0, 0, 1);
      board.placeShip(9, 9, 1);
      board.placeShip(0, 9, 1);
      board.placeShip(9, 0, 1);
      board.placeShip(2, 2, 2, 'ver');
      board.placeShip(4, 2, 2, 'ver');
      board.placeShip(6, 2, 2, 'hor');
      board.placeShip(0, 5, 3, 'hor');
      board.placeShip(4, 5, 3, 'hor');
      board.placeShip(8, 4, 4, 'ver');
    }

    return board;
  }

  #passTurns() {
    this.attacksNow.name === 'Human'
      ? (this.attacksNow = this.playerTwo)
      : (this.attacksNow = this.playerOne);
  }

  #findBoardWithGameOver() {
    if (this.humanBoard.gameOver) {
      this.thereIsAWinner = this.playerTwo.name;
      return true;
    } else if (this.computerBoard.gameOver) {
      this.thereIsAWinner = this.playerOne.name;
      return true;
    } else {
      return false;
    }
  }

  makeMove(...coordinates) {
    if (this.thereIsAWinner) {
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
    return this.thereIsAWinner;
  }

  getHumanBoard() {
    return this.humanBoard.board;
  }

  getComputerBoard() {
    return this.computerBoard.board;
  }

  getPlayerOneSunkShips() {
    return this.playerOne.ownBoard.getSunkShipsProperty();
  }

  getPlayerTwoSunkShips() {
    return this.playerTwo.ownBoard.getSunkShipsProperty();
  }

  // Helper functions for computer smart moves
  getPlayerOneAllShips() {
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
/* harmony export */   generateGrid: () => (/* binding */ generateGrid)
/* harmony export */ });
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ "./src/modules/gameLoop.js");



// Select DOM elements
const startGameButton = document.querySelector('.start-game-button');
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
function generateGrid() {
  grids.forEach((div) => {
    for (let i = 0; i < 100; i++) {
      const element = createAndAppendElement('div', div, 'square', 'disabled');

      // Add ids for squares to tie array boards with grid. Reverse them because first coordinate is X, so it changes more frequently
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
}

// Varible holding gameLoop object, updating its inner state with "Start game"
let game = false;

// Make sure that clicks are not registered by the player on its own board while playing against the computer (before starting a game, it is important to select a game mode — 2 players or player vs AI)
grids.forEach((div) => {
  div.addEventListener('click', registerClicksOnBoards);
});
function registerClicksOnBoards(event) {
  if (!game) {
    console.log('Board is not active. Start game to active');
    return;
  } else if (game.getWinner()) {
    console.log('Game over! Start new game');
    return;
  }

  // Apply event delegations to board grids
  const isInsideSquare = event.target.closest('div.square');
  if (!isInsideSquare) return;

  const getSquareId = [...isInsideSquare.classList].filter((classValue) => {
    return classValue.length === 2 ? true : false;
  });

  // Before the attack look at the sunkShips property and compare it with the state of the board after the attack
  const sunkShipsOfPlayerTwo = game.getPlayerTwoSunkShips().length;

  const playerAttack = game.makeMove(getSquareId[0]);
  if (!playerAttack) {
    console.log('Attack cannot be registered. Repeat again');
    return;
  } else {
    // Confirm if attack hit a ship or is a missed shot
    if (isInsideSquare.classList.contains('contains-ship')) {
      isInsideSquare.classList.add('successful-shot');
      console.log('Hit a ship!');

      if (sunkShipsOfPlayerTwo !== game.getPlayerTwoSunkShips().length) {
        console.log('Sink the ship!');
        disableAdjacentSquaresToSunkShips(game);
        if (game.getWinner()) {
          console.log(`Game over! ${game.getWinner()} has won`);
          return;
        }
      }
    } else {
      isInsideSquare.classList.add('missed-shot');
      console.log('Missed shot!!');
    }

    hightlightComputerMoves();
  }
}

function hightlightComputerMoves() {
  const sunkShipsOfPlayerOne = game.getPlayerOneSunkShips().length;

  let squareId;
  let isPreviouslyHitShip = game.getCoordinatesOfPreviouslyHitShip();
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
    console.log('Hit a ship!');
    targettedSquare.classList.add('successful-shot');

    if (sunkShipsOfPlayerOne !== game.getPlayerOneSunkShips().length) {
      console.log('Sink the ship!');
      game.updateCoordinatesOfPreviouslyHitShip(squareId);
      disableAdjacentSquaresToSunkShips(game);
      if (game.getWinner()) {
        console.log(`Game over! ${game.getWinner()} has won`);
        return;
      }
    } else if (game.getCoordinatesOfPreviouslyHitShip()) {
      console.log('Hit the saved ship');
      game.updateCoordinatesOfPreviouslyHitShip(squareId);
    } else {
      console.log('Remember ship for next move');
      const humanShips = game.getPlayerOneAllShips();
      humanShips.forEach((ship) => {
        const coordinatedShip = ship.coordinates;

        // allShips array on game boards contains 1-square ships' pair of coordinates in an outer array when the pair is numbers. With multi-square ships, coordinates are still saved in an outer array. Though their pairs of coordinates are stored in inner arrays. Last but not least, it is not important for us to loop over 1-square ships because they will never be memorized as coordinatesForComputerToTarget
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
    console.log('Missed shot!');
  }
}

startGameButton.addEventListener('click', startGame);
function startGame() {
  const statusOfButton = startGameButton.classList;

  if (statusOfButton.contains('not-started')) {
    startGameButton.classList.replace('not-started', 'started');
    console.log('Starting game...');
    game = new _gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop();
    addHoverEffectToGridSquares(grids);
    displayShipsOnBoards();
  } else if (statusOfButton.contains('started')) {
    const confirmMessage = confirm('Do you really want to start a new game?');
    if (confirmMessage) {
      console.log('Starting new game...');
      game = new _gameLoop__WEBPACK_IMPORTED_MODULE_0__.GameLoop();
      clearPreviousBoardsVisuals(grids);
    } else {
      console.log('Keeping the relevant game!');
    }
  }
}

function clearPreviousBoardsVisuals(boards) {
  boards.forEach((div) => {
    const divsOfBoard = [...div.children];

    divsOfBoard.forEach((square) => {
      const classValues = square.classList;

      if (classValues.contains('missed-shot')) {
        square.classList.remove('missed-shot');
      }

      if (classValues.contains('successful-shot')) {
        square.classList.remove('successful-shot');
      }

      if (classValues.contains('adjacent-to-sunk-ship')) {
        square.classList.remove('adjacent-to-sunk-ship');
      }
    });
  });
}

function addHoverEffectToGridSquares(divs) {
  divs.forEach((div) => {
    const divsOfOneBoard = [...div.children];
    divsOfOneBoard.forEach((square) => {
      square.classList.replace('disabled', 'active');
    });
  });
}

function loopOverAllDivsAndArraySquares(currentGame, property) {
  const humanGridDivs = [...gridSquaresHuman.children];
  const computerGridDivs = [...gridSquaresComputer.children];
  const humanBoard = currentGame.getHumanBoard();
  const boardComputer = currentGame.getComputerBoard();

  let counterForArrayWithDivs = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const computerSquare = boardComputer[j][i][0];
      const humanSquare = humanBoard[j][i][0];

      if (computerSquare[property]) {
        if (property === 'containsShip') {
          computerGridDivs[counterForArrayWithDivs].classList.add(
            'contains-ship'
          );
        } else if (property === 'isAdjacentToSomeSunkShip') {
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



(0,_visualPart_js__WEBPACK_IMPORTED_MODULE_1__.generateGrid)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLDZCQUE2QixjQUFjLGVBQWUsMkJBQTJCLEdBQUcsVUFBVSw0QkFBNEIsc0JBQXNCLEdBQUcsZ0JBQWdCLGtCQUFrQixrQ0FBa0MseUJBQXlCLGtCQUFrQixpQkFBaUIsR0FBRywwQkFBMEIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxZQUFZLHFCQUFxQix1QkFBdUIsaUJBQWlCLHdCQUF3Qiw2QkFBNkIsaUJBQWlCLEdBQUcsa0JBQWtCLG9CQUFvQiwrQkFBK0IsR0FBRyx3QkFBd0Isb0JBQW9CLHNCQUFzQixHQUFHLDJCQUEyQixrQkFBa0IsbUNBQW1DLGNBQWMsR0FBRyw4QkFBOEIsa0JBQWtCLG1DQUFtQyx5QkFBeUIsR0FBRyxzQ0FBc0Msc0JBQXNCLHNCQUFzQixpQkFBaUIsdUJBQXVCLEdBQUcsbURBQW1ELGtCQUFrQixhQUFhLDBCQUEwQix3QkFBd0Isc0JBQXNCLGtCQUFrQix1QkFBdUIsR0FBRywyQkFBMkIseUNBQXlDLDRCQUE0QixnQkFBZ0IsZUFBZSxHQUFHLDJCQUEyQiw0Q0FBNEMseUJBQXlCLGdCQUFnQixlQUFlLEdBQUcsaUJBQWlCLGtCQUFrQiw0Q0FBNEMseUNBQXlDLGFBQWEsOEJBQThCLHVCQUF1Qiw0QkFBNEIsR0FBRyxhQUFhLDRCQUE0QixHQUFHLDJCQUEyQiw0QkFBNEIsR0FBRyxzQkFBc0IsMkJBQTJCLEdBQUcsMEJBQTBCLG9CQUFvQiw2QkFBNkIsR0FBRyx5QkFBeUIsMkJBQTJCLEdBQUcsNkJBQTZCLDBCQUEwQixHQUFHLG1DQUFtQyw4QkFBOEIsR0FBRyxxQkFBcUI7QUFDeG1HO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDN0kxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QztBQUNJO0FBQ3hCOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQ0FBTTtBQUMvQix5QkFBeUIsNkNBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFTOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRSxFQUFFLEVBQUU7QUFDeEIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLOEI7QUFDVDs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHVDQUFJOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK05BQStOO0FBQy9OLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHlDQUF5QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDBCQUEwQix3QkFBd0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwVzRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUIsc0JBQXNCLEVBQUUsRUFBRSxFQUFFO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNtQjs7QUFFL0MsNERBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1VJL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvc3R5bGVzLmNzcz85NDhjIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdmlzdWFsUGFydC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcblxuICBwYWRkaW5nOiAyNXB4IDUwcHg7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI2NvbnRhaW5lciAudG9wLXBhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc3RhcnQtZ2FtZS1idXR0b24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jY29udGFpbmVyIC5tYWluLXBhcnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogNTBweDtcbn1cblxuLmxlZnQtcGFydCxcbi5yaWdodC1wYXJ0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDM4MHB4O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxlZnQtcGFydCA+IHAsXG4ucmlnaHQtcGFydCA+IHAge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xufVxuXG4ubnVtYmVyLWJvYXJkLWluZGV4ZXMsXG4ubGV0dGVyLWJvYXJkLWluZGV4ZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDJweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IG9yYW5nZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubnVtYmVyLWJvYXJkLWluZGV4ZXMge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdyaWQtYXV0by1jb2x1bW5zOiAzMHB4O1xuXG4gIHRvcDogOTBweDtcbiAgbGVmdDogMjBweDtcbn1cblxuLmxldHRlci1ib2FyZC1pbmRleGVzIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICBncmlkLWF1dG8tcm93czogMzBweDtcblxuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbi5ib2FyZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdhcDogMnB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4uc3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zcXVhcmUuY29udGFpbnMtc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uc3F1YXJlLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLnNxdWFyZS5hY3RpdmU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLnNxdWFyZS5taXNzZWQtc2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5zcXVhcmUuc3VjY2Vzc2Z1bC1zaG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uc3F1YXJlLmFkamFjZW50LXRvLXN1bmstc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9VSS9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2Qjs7RUFFN0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCOztFQUU5QixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixRQUFRO0VBQ1IscUJBQXFCOztFQUVyQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCOztFQUV2QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLG9CQUFvQjs7RUFFcEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLFFBQVE7O0VBRVIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuXFxuICBwYWRkaW5nOiAyNXB4IDUwcHg7XFxuICB3aWR0aDogMTAwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jY29udGFpbmVyIC50b3AtcGFydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnN0YXJ0LWdhbWUtYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jY29udGFpbmVyIC5tYWluLXBhcnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmxlZnQtcGFydCxcXG4ucmlnaHQtcGFydCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDM4MHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGVmdC1wYXJ0ID4gcCxcXG4ucmlnaHQtcGFydCA+IHAge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm51bWJlci1ib2FyZC1pbmRleGVzLFxcbi5sZXR0ZXItYm9hcmQtaW5kZXhlcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAycHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IG9yYW5nZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLm51bWJlci1ib2FyZC1pbmRleGVzIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAzMHB4O1xcblxcbiAgdG9wOiA5MHB4O1xcbiAgbGVmdDogMjBweDtcXG59XFxuXFxuLmxldHRlci1ib2FyZC1pbmRleGVzIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdyaWQtYXV0by1yb3dzOiAzMHB4O1xcblxcbiAgdG9wOiA2MHB4O1xcbiAgbGVmdDogNTBweDtcXG59XFxuXFxuLmJvYXJkLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdhcDogMnB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNxdWFyZS5jb250YWlucy1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc3F1YXJlLmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5zcXVhcmUuYWN0aXZlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnNxdWFyZS5taXNzZWQtc2hvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uc3F1YXJlLnN1Y2Nlc3NmdWwtc2hvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zcXVhcmUuYWRqYWNlbnQtdG8tc3Vuay1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tICcuL3BsYXllcic7XG5leHBvcnQgeyBHYW1lTG9vcCB9O1xuXG5jbGFzcyBHYW1lTG9vcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaHVtYW5Cb2FyZCA9IHRoaXMuI3BvcHVsYXRlQm9hcmRXaXRoU2hpcHMoJ0h1bWFuJyk7XG4gICAgdGhpcy5jb21wdXRlckJvYXJkID0gdGhpcy4jcG9wdWxhdGVCb2FyZFdpdGhTaGlwcygnQ29tcHV0ZXInKTtcbiAgICB0aGlzLnBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ0h1bWFuJywgdGhpcy5odW1hbkJvYXJkLCB0aGlzLmNvbXB1dGVyQm9hcmQpO1xuICAgIHRoaXMucGxheWVyVHdvID0gbmV3IENvbXB1dGVyKFxuICAgICAgJ0NvbXB1dGVyJyxcbiAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZCxcbiAgICAgIHRoaXMuaHVtYW5Cb2FyZFxuICAgICk7XG4gICAgdGhpcy5hdHRhY2tzTm93ID0gdGhpcy5wbGF5ZXJPbmU7XG4gICAgdGhpcy50aGVyZUlzQVdpbm5lciA9IG51bGw7XG4gICAgdGhpcy5jb29yZGluYXRlc0ZvckNvbXB1dGVyVG9UYXJnZXQgPSBudWxsO1xuICB9XG5cbiAgLy8gUGxhY2UgMTAgc2hpcHMgYXQgcHJldGVkZXJtaW5lZCBjb29kaW5hdGVzIGZvciBub3dcbiAgI3BvcHVsYXRlQm9hcmRXaXRoU2hpcHMocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbiAgICBpZiAocGxheWVyID09PSAnSHVtYW4nKSB7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoMSwgMCwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoMiwgOSwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoNSwgOSwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoOSwgOSwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoNywgMCwgMiwgJ2hvcicpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDQsIDQsIDIsICd2ZXInKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCg2LCA0LCAyLCAndmVyJyk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoMywgMCwgMywgJ2hvcicpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDksIDIsIDMsICd2ZXInKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCgwLCAzLCA0LCAndmVyJyk7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdDb21wdXRlcicpIHtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCgwLCAwLCAxKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCg5LCA5LCAxKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCgwLCA5LCAxKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCg5LCAwLCAxKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCgyLCAyLCAyLCAndmVyJyk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoNCwgMiwgMiwgJ3ZlcicpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDYsIDIsIDIsICdob3InKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCgwLCA1LCAzLCAnaG9yJyk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoNCwgNSwgMywgJ2hvcicpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDgsIDQsIDQsICd2ZXInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICAjcGFzc1R1cm5zKCkge1xuICAgIHRoaXMuYXR0YWNrc05vdy5uYW1lID09PSAnSHVtYW4nXG4gICAgICA/ICh0aGlzLmF0dGFja3NOb3cgPSB0aGlzLnBsYXllclR3bylcbiAgICAgIDogKHRoaXMuYXR0YWNrc05vdyA9IHRoaXMucGxheWVyT25lKTtcbiAgfVxuXG4gICNmaW5kQm9hcmRXaXRoR2FtZU92ZXIoKSB7XG4gICAgaWYgKHRoaXMuaHVtYW5Cb2FyZC5nYW1lT3Zlcikge1xuICAgICAgdGhpcy50aGVyZUlzQVdpbm5lciA9IHRoaXMucGxheWVyVHdvLm5hbWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcHV0ZXJCb2FyZC5nYW1lT3Zlcikge1xuICAgICAgdGhpcy50aGVyZUlzQVdpbm5lciA9IHRoaXMucGxheWVyT25lLm5hbWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VNb3ZlKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMudGhlcmVJc0FXaW5uZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdHRhY2tzTm93Lm5hbWUgPT09ICdIdW1hbicpIHtcbiAgICAgIGNvbnN0IG1vdmUgPSBjb29yZGluYXRlc1swXTtcbiAgICAgIGNvbnN0IHggPSBtb3ZlWzBdO1xuICAgICAgY29uc3QgeSA9IG1vdmVbMV07XG4gICAgICBpZiAoIXRoaXMucGxheWVyT25lLmF0dGFja09wcG9uZW50KHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLiNmaW5kQm9hcmRXaXRoR2FtZU92ZXIoKSkge1xuICAgICAgICB0aGlzLiNwYXNzVHVybnMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF0dGFja3NOb3cubmFtZSA9PT0gJ0NvbXB1dGVyJykge1xuICAgICAgbGV0IGNvbXB1dGVyTW92ZTtcbiAgICAgIC8vIERlc3RydWN0dXJpbmcgYXJyYXkgYXNzaWdubWVudFxuICAgICAgLy8gQnkgZGVmYXVsdCBjb21wdXRlciBtYWtlIHJhbmRvbSBtb3ZlcyBidXQgaWYgaXQgaGl0cyBzb21ldGhpbmcsIHRoZW4gaXQgd2lsbCB0cnkgdG8gc2luayB0aGUgc2hpcCB1bnRpbCBpdCBzdWNjZWVkc1xuICAgICAgaWYgKGNvb3JkaW5hdGVzWzBdKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgICBjb21wdXRlck1vdmUgPSB0aGlzLnBsYXllclR3by5hdHRhY2tPcHBvbmVudCh4LCB5KTtcbiAgICAgICAgaWYgKCFjb21wdXRlck1vdmUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAoIXRoaXMuI2ZpbmRCb2FyZFdpdGhHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgdGhpcy4jcGFzc1R1cm5zKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3h9JHt5fWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wdXRlck1vdmUgPSB0aGlzLnBsYXllclR3by5hdHRhY2tPcHBvbmVudCgpO1xuICAgICAgICBpZiAoIXRoaXMuI2ZpbmRCb2FyZFdpdGhHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgdGhpcy4jcGFzc1R1cm5zKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXB1dGVyTW92ZS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRXaG9zZVR1cm5JdElzKCkge1xuICAgIHJldHVybiB0aGlzLmF0dGFja3NOb3cubmFtZTtcbiAgfVxuXG4gIGdldFdpbm5lcigpIHtcbiAgICByZXR1cm4gdGhpcy50aGVyZUlzQVdpbm5lcjtcbiAgfVxuXG4gIGdldEh1bWFuQm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHVtYW5Cb2FyZC5ib2FyZDtcbiAgfVxuXG4gIGdldENvbXB1dGVyQm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcHV0ZXJCb2FyZC5ib2FyZDtcbiAgfVxuXG4gIGdldFBsYXllck9uZVN1bmtTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJPbmUub3duQm9hcmQuZ2V0U3Vua1NoaXBzUHJvcGVydHkoKTtcbiAgfVxuXG4gIGdldFBsYXllclR3b1N1bmtTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJUd28ub3duQm9hcmQuZ2V0U3Vua1NoaXBzUHJvcGVydHkoKTtcbiAgfVxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIGNvbXB1dGVyIHNtYXJ0IG1vdmVzXG4gIGdldFBsYXllck9uZUFsbFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllck9uZS5vd25Cb2FyZC5nZXRBbGxTaGlwcygpO1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZXNPZlByZXZpb3VzbHlIaXRTaGlwKCkge1xuICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldDtcbiAgfVxuXG4gIHNhdmVDb29yZGluYXRlc09mUHJldmlvdXNseUhpdFNoaXAoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldCA9IGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgdXBkYXRlQ29vcmRpbmF0ZXNPZlByZXZpb3VzbHlIaXRTaGlwKGNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuY29vcmRpbmF0ZXNGb3JDb21wdXRlclRvVGFyZ2V0IHx8XG4gICAgICB0aGlzLmNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldC5sZW5ndGggPT09IDFcbiAgICApIHtcbiAgICAgIHRoaXMuY29vcmRpbmF0ZXNGb3JDb21wdXRlclRvVGFyZ2V0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb29yZGluYXRlc0ZvckNvbXB1dGVyVG9UYXJnZXQgPVxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldC5maWx0ZXIoKHNxdWFyZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb29yZGluYXRlcyAhPT0gc3F1YXJlLmpvaW4oJycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLiNjcmVhdGVHYW1lYm9hcmQoKTtcbiAgICB0aGlzLmFsbFNoaXBzID0gW107XG4gICAgdGhpcy5zdW5rU2hpcHMgPSBbXTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gIH1cblxuICAjY3JlYXRlR2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIC8vIEluIGVhY2ggc3F1YXJlIG9mIHRoZSBib2FyZCwgdGhlcmUgaXMgYW4gb2JqZWN0IHdpdGggYSBmZXcgcHJvcGVydGllcyB0byBjb250cm9sIHRoZSBnYW1lJ3MgbG9naWNcbiAgICAgICAgYm9hcmRbaV0ucHVzaChbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29udGFpbnNTaGlwOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQWRqYWNlbnRUb1NvbWVTaGlwOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcDogZmFsc2UsXG4gICAgICAgICAgICBoYXNCZWVuVGFyZ2V0dGVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG5cbiAgLy8gSGVscGVycyBmb3IgcGxhY2VTaGlwKClcbiAgI2ZpdEluQm9hcmRMaW1pdHMoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBhcnJheVdpdGhDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IHggPSBhcnJheVdpdGhDb29yZGluYXRlc1swXTtcbiAgICBjb25zdCB5ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMV07XG5cbiAgICAvLyBBcmd1bWVudHMgb2YgdGhpcyBtZXRob2QgY29tZSBpbiB0d28gZGlmZmVyZW50IGZsYXZvcnMg4oCUIHRoZXkgY2FuIGJlIGVpdGhlciBpbmRpdmlkdWFsIFggYW5kIFkgdmFsdWVzIChjYXNlIHdpdGggYSAxLXNxdWFyZSBzaGlwKSwgb3IgYXJyYXlzIHdpdGggY29tYmluYXRpb25zIG9mIFggYW5kIFkgdmFsdWVzIChjYXNlIHdpdGggbXVsdGlwbGUtc3F1YXJlIHNoaXBzKVxuICAgIC8vIEl0IGlzIG5lY2Vzc2FyeSB0byBjaGVjayBvbmx5IGlmIHRoZXkgYXJlIGdyZWF0ZXIgdGhhbiA5IGluIHRoZSBjb250ZXh0IG9mIGFycmF5cywgYmVjYXVzZSBzaGlwcyBhcmUgZXhwYW5kZWQgdG8gdGhlIHJpZ2h0L2Rvd24gYnkgZGVmYXVsdCDigJQgYSB0d28tc3F1YXJlIHNoaXAgcGxhY2VkIGhvcml6b250YWxseSBhdCBbMCwwXSBwb3B1bGF0ZXMgdG8gWzAsMF0sIFsxLDBdIGFuZCBuZXZlciB0byBbMCwwXSwgWy0xLCAwXVxuICAgIGlmIChBcnJheS5pc0FycmF5KHgpICYmIEFycmF5LmlzQXJyYXkoeSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlc1hBbmRZID0gWy4uLngsIC4uLnldO1xuICAgICAgY29uc3QgeE9yWUlzT3V0c2lkZUJvYXJkID0gdmFsdWVzWEFuZFkuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgPiA5KTtcbiAgICAgIGlmICh4T3JZSXNPdXRzaWRlQm9hcmQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4ID4gOSB8fCB5ID4gOSB8fCB4IDwgMCB8fCB5IDwgMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAjcmVzZXJ2ZUFkamFjZW50U3F1YXJlcyguLi5jb29yZGluYXRlcykge1xuICAgIGNvbnN0IGFycmF5V2l0aENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgY29uc3QgY29vcmRpbmF0ZVggPSBhcnJheVdpdGhDb29yZGluYXRlc1swXTtcbiAgICBjb25zdCBjb29yZGluYXRlWSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzFdO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMl07XG5cbiAgICAvLyBVc2UgdHdvIGFycmF5cyBmaWxsZWQgd2l0aCBhbGwgcG9zc2libGUgb3B0aW9ucyBmb3IgYWRqYWNlbnQgc3F1YXJlc1xuICAgIC8vIEEgc3F1YXJlIGNhbiBoYXZlIDggYWRqYWNlbnQgc3F1YXJlcyBhdCBtb3N0XG4gICAgY29uc3QgYWRqYWNlbnRDb29yZGluYXRlc09mWCA9IFstMSwgMCwgMSwgMSwgMSwgMCwgLTEsIC0xXTtcbiAgICBjb25zdCBhZGphY2VudENvb3JkaW5hdGVzT2ZZID0gWy0xLCAtMSwgLTEsIDAsIDEsIDEsIDEsIDBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBjb29yZGluYXRlWCArIGFkamFjZW50Q29vcmRpbmF0ZXNPZlhbaV07XG4gICAgICBjb25zdCB5ID0gY29vcmRpbmF0ZVkgKyBhZGphY2VudENvb3JkaW5hdGVzT2ZZW2ldO1xuXG4gICAgICBpZiAoeCA+IDkgfHwgeSA+IDkgfHwgeCA8IDAgfHwgeSA8IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5jb250YWluc1NoaXApIHtcbiAgICAgICAgLy8gU3F1YXJlcyB0aGF0IGFyZSBhIHBhcnQgb2YgdGhlIHNoaXAgbXVzdCBub3QgYmUgcmVzZXJ2ZWQgYmVjYXVzZSB0aGV5IGFyZSBub3QgYWRqYWNlbnQgaW4gYW55IGNhc2VcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2lzQWRqYWNlbnRUb1NvbWVTaGlwJykge1xuICAgICAgICB0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuaXNBZGphY2VudFRvU29tZVNoaXAgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ2lzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCcpIHtcbiAgICAgICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmlzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2NvbmZpcm1Db29yZGluYXRlc0FyZU5vdEF2YWlsYWJsZSguLi5jb29yZGluYXRlcykge1xuICAgIGNvbnN0IHJlc3VsdE9mSGVscGVyID0gdGhpcy4jYWNjZXNzUHJvcGVydHlPblNoaXBPYmplY3QoXG4gICAgICBjb29yZGluYXRlcyxcbiAgICAgICdjb250YWluc1NoaXAnXG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0T2ZIZWxwZXI7XG4gIH1cblxuICAjc3RhbmRJbkFub3RoZXJTaGlwQWRqYWNlbnRTcXVhcmVzKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgcmVzdWx0T2ZIZWxwZXIgPSB0aGlzLiNhY2Nlc3NQcm9wZXJ0eU9uU2hpcE9iamVjdChcbiAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgJ2lzQWRqYWNlbnRUb1NvbWVTaGlwJ1xuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdE9mSGVscGVyO1xuICB9XG5cbiAgLy8gVXNlIHRoZSByZXN0IG9wZXJhdG9yIHRvIHBsYWNlIGFsbCBhcmd1bWVudHMgaW50byBvbmUgYXJyYXkgYW5kIHRoZW4gZXh0cmFjdCBzcGVjaWZpYyBwYXJ0cyBvZiBpdFxuICAjYWNjZXNzUHJvcGVydHlPblNoaXBPYmplY3QoLi4uY29vcmRpbmF0ZXNBbmRQcm9wZXJ0eSkge1xuICAgIGNvbnN0IGFycmF5V2l0aEFyZ3VtZW50cyA9IGNvb3JkaW5hdGVzQW5kUHJvcGVydHk7XG4gICAgY29uc3QgeCA9IGFycmF5V2l0aEFyZ3VtZW50c1swXVswXTtcbiAgICBjb25zdCB5ID0gYXJyYXlXaXRoQXJndW1lbnRzWzBdWzFdO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gYXJyYXlXaXRoQXJndW1lbnRzWzFdO1xuXG4gICAgbGV0IHdpbGxDYW5jZWxTaGlwQ3JlYXRpb247XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeCkgJiYgQXJyYXkuaXNBcnJheSh5KSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEFjY2VzcyBhIHByb3BlcnR5IG9uIHRoZSBzaGlwIHdpdGggd2hpY2ggdGhlIG1ldGhvZCB3YXMgY2FsbGVkIGluIGEgbGVzcyBoYXJkLWNvZGVkIG1hbm5lciB3aXRoIGEgZG90IG5vdGF0aW9uXG4gICAgICAgIHdpbGxDYW5jZWxTaGlwQ3JlYXRpb24gPSB0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeFtpXSwgeVtpXSlbXG4gICAgICAgICAgcHJvcGVydHlcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAod2lsbENhbmNlbFNoaXBDcmVhdGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbGxDYW5jZWxTaGlwQ3JlYXRpb24gPSB0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSlbcHJvcGVydHldO1xuXG4gICAgICBpZiAod2lsbENhbmNlbFNoaXBDcmVhdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjY29tcGFyZUFnYWluc3RMaW1pdENvbmRpdGlvbnMoeCwgeSkge1xuICAgIGlmICghdGhpcy4jZml0SW5Cb2FyZExpbWl0cyh4LCB5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy4jY29uZmlybUNvb3JkaW5hdGVzQXJlTm90QXZhaWxhYmxlKHgsIHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLiNzdGFuZEluQW5vdGhlclNoaXBBZGphY2VudFNxdWFyZXMoeCwgeSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwKHgsIHksIHNoaXBTaXplLCBkaXJlY3Rpb24gPSAnaG9yJykge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChzaGlwU2l6ZSk7XG5cbiAgICBpZiAoc2hpcC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBDcmVhdGUgdHdvIGFycmF5cyB0byBwbGFjZSBzaGlwcyBvdmVyIG11bHRpcGxlIHNxdWFyZXMsIGRvaW5nIGl0IGluIGJvdGggZGlyZWN0aW9uc1xuICAgICAgY29uc3QgYWxsVmFsdWVzT2ZYID0gW107XG4gICAgICBjb25zdCBhbGxWYWx1ZXNPZlkgPSBbXTtcblxuICAgICAgLy8gSWYgcGxhY2VkIGhvcml6b250YWxseSwgdGhlIHNoaXAncyBmaXJzdCBzcXVhcmUgd2lsbCBnZW5lcmF0ZSB0aGUgcmVzdCBvZiBzcXVhcmVzIHRvIHRoZSByaWdodCwgd2l0aG91dCBjaGFuZ2luZyB0aGUgcm93XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhbGxWYWx1ZXNPZlgucHVzaCh4KTtcbiAgICAgICAgICBhbGxWYWx1ZXNPZlkucHVzaCh5KTtcbiAgICAgICAgICB4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgcGxhY2VkIHZlcnRpY2FsbHksIHRoZSBzaGlwJ3MgZmlyc3Qgc3F1YXJlIHdpbGwgZ2VuZXJhdGUgdGhlIHJlc3Qgb2Ygc3F1YXJlcyBkb3duLCB3aXRob3V0IGNoYW5naW5nIHRoZSBjb2x1bW5cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVyJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhbGxWYWx1ZXNPZlgucHVzaCh4KTtcbiAgICAgICAgICBhbGxWYWx1ZXNPZlkucHVzaCh5KTtcbiAgICAgICAgICB5ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgYW55IG9mIHRoZSByZXN0cmljdGlvbnMgaXMgdmlvbGF0ZWQgYmVmb3JlIHBsYWNpbmcgYSBzaGlwLiBJZiB5ZXMsIHRoZSBzaGlwIGlzIG5vdCBwbGFjZWQgb24gdGhlIGJvYXJkXG4gICAgICBpZiAoIXRoaXMuI2NvbXBhcmVBZ2FpbnN0TGltaXRDb25kaXRpb25zKGFsbFZhbHVlc09mWCwgYWxsVmFsdWVzT2ZZKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoXG4gICAgICAgICAgYWxsVmFsdWVzT2ZYW2ldLFxuICAgICAgICAgIGFsbFZhbHVlc09mWVtpXVxuICAgICAgICApLmNvbnRhaW5zU2hpcCA9IHNoaXA7XG5cbiAgICAgICAgLy8gU3RvcmUgc2hpcHMgaW5zaWRlIHRoZSBhbGxTaGlwcyBhcnJheSB3aXRoIHRoZWlyIGNvb3JkaW5hdGVzIHRvIGJlIGFibGUgdG8gZWFzaWVyIGFuc3dlciBpZiB0aGUgYXR0YWNrZWQgY29vcmRpbmF0ZXMgYmVsb25nIHRvIGFueSBzaGlwXG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5hbGxTaGlwcy5wdXNoKHtcbiAgICAgICAgICAgIHNoaXBJbnN0YW5jZTogc2hpcCxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbW2FsbFZhbHVlc09mWFtpXSwgYWxsVmFsdWVzT2ZZW2ldXV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbGxTaGlwc1xuICAgICAgICAgICAgLmF0KC0xKVxuICAgICAgICAgICAgLmNvb3JkaW5hdGVzLnB1c2goW2FsbFZhbHVlc09mWFtpXSwgYWxsVmFsdWVzT2ZZW2ldXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gS2VlcCByZXNlcnZlQWRqYWNlbnRTcXVhcmVzKCkgaW4gYSBzZXBhcmF0ZSBsb29wIGJlY2F1c2UgaXQgaXMgaW1wb3J0YW50IGFsbCBzaGlwcyB0byBiZSBwcmlvcmx5IGNyZWF0ZWQgdG8gcmVzZXJ2ZSBvbmx5IHRydWx5IGFkamFjZW50IHNxdWFyZXMuIFRoZSBvdGhlciAyIHNxdWFyZXMgb2YgYSBzaGlwIHdpdGggdGhlIGxlbmd0aCBvZiAzIGFyZSBub3QgYWRqYWNlbnQ7IFRoZXkgYXJlIGEgcGFydCBvZiB0aGUgc2hpcFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuI3Jlc2VydmVBZGphY2VudFNxdWFyZXMoXG4gICAgICAgICAgYWxsVmFsdWVzT2ZYW2ldLFxuICAgICAgICAgIGFsbFZhbHVlc09mWVtpXSxcbiAgICAgICAgICAnaXNBZGphY2VudFRvU29tZVNoaXAnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKCF0aGlzLiNjb21wYXJlQWdhaW5zdExpbWl0Q29uZGl0aW9ucyh4LCB5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5jb250YWluc1NoaXAgPSBzaGlwO1xuICAgICAgdGhpcy4jcmVzZXJ2ZUFkamFjZW50U3F1YXJlcyh4LCB5LCAnaXNBZGphY2VudFRvU29tZVNoaXAnKTtcbiAgICAgIHRoaXMuYWxsU2hpcHMucHVzaCh7IHNoaXBJbnN0YW5jZTogc2hpcCwgY29vcmRpbmF0ZXM6IFt4LCB5XSB9KTtcbiAgICB9XG4gICAgLy8gVG8gY29uZmlybSB0aGF0IHRoZSBzaGlwIGhhcyBiZWVuIHBsYWNlZCBzdWNjZXNzZnVsbHlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEhlbHBlcnMgZm9yIHJlY2VpdmVBdHRhY2soKVxuICAjdGFyZ2V0Q29vcmRpbmF0ZXNPdXRzaWRlQm9hcmQoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBhdHRhY2tJc091dHNpZGVCb2FyZCA9IGFycmF5V2l0aENvb3JkaW5hdGVzLmZpbHRlcigoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGUgPiA5IHx8IGNvb3JkaW5hdGUgPCAwO1xuICAgIH0pO1xuXG4gICAgaWYgKGF0dGFja0lzT3V0c2lkZUJvYXJkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjY29uZmlybVNxdWFyZXNBcmVOb3RBdmFpbGFibGUoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCB4ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzFdO1xuXG4gICAgaWYgKHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5oYXNCZWVuVGFyZ2V0dGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5pc0FkamFjZW50VG9Tb21lU3Vua1NoaXApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgI2ZpbmRUYXJnZXR0ZWRTaGlwKGFycmF5V2l0aENvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeCA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IHkgPSBhcnJheVdpdGhDb29yZGluYXRlc1sxXTtcblxuICAgIGlmICh0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuY29udGFpbnNTaGlwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gICNjaGVja0lmQWxsU2hpcHNIYXZlQmVlbkRlc3Ryb3llZCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmFsbFNoaXBzLmxlbmd0aCA9PT0gdGhpcy5zdW5rU2hpcHMubGVuZ3RoICYmXG4gICAgICB0aGlzLmFsbFNoaXBzLmxlbmd0aCAmJlxuICAgICAgdGhpcy5zdW5rU2hpcHMubGVuZ3RoXG4gICAgKSB7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAjY2hlY2tHYW1lU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgI2NoZWNrSWZBdHRhY2tJc0FsbG93ZWQoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpIHtcbiAgICBpZiAodGhpcy4jY2hlY2tHYW1lU3RhdGUoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy4jdGFyZ2V0Q29vcmRpbmF0ZXNPdXRzaWRlQm9hcmQoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLiNjb25maXJtU3F1YXJlc0FyZU5vdEF2YWlsYWJsZShhcnJheVdpdGhDb29yZGluYXRlcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayguLi5wYWlyT2ZDb29yZGluYXRlcykge1xuICAgIC8vIENvbnZlcnQgYXJndW1lbnRzIHRvIG51bWJlcnMgYmVjYXVzZSBpbiBnZXRTcGVjaWZpY1NoaXAoKSBJIGhhdmUgc3RyaWN0IGVxdWFsaXR5IHRvIGdldCBhIHNoaXAgdGhhdCBpcyB1bmRlciBhdHRhY2suIEJ1dCBmcm9tIG90aGVyIG1vZHVsZXMgY29vcmRpbmF0ZXMgYXJlIHRyYW5zZmVyZWQgYXMgc3RyaW5ncyB0byBrZWVwIDAncywgZS5nLiAnMDMnLiBJZiBpdCB3YXMgYSBudW1iZXIgaW4gdGhlIGZpcnN0IHBsYWNlLCBKUyB3b3VsZCBlcmFzZSAwIGFuZCBoZW5jZSBhbiBYIGNvb3JkaW5hdGUgd2FzIG1pc3NpbmdcbiAgICBjb25zdCBhcnJheVdpdGhDb29yZGluYXRlcyA9IHBhaXJPZkNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IHggPSBOdW1iZXIoYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF0pO1xuICAgIGNvbnN0IHkgPSBOdW1iZXIoYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMV0pO1xuXG4gICAgaWYgKCF0aGlzLiNjaGVja0lmQXR0YWNrSXNBbGxvd2VkKGFycmF5V2l0aENvb3JkaW5hdGVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGhhc0JlZW5UYXJnZXR0ZWQgcHJvcGVydHkgY2FuIGVpdGhlciBtZWFuIGEgc3VjY2Vzc2Z1bCBhdHRhY2sgKGhpdCBhIHNoaXApIG9yIGEgZmFpbGVkIG9uZSAoYSBtaXNzZWQgc2hvdClcbiAgICB0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuaGFzQmVlblRhcmdldHRlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuI2ZpbmRUYXJnZXR0ZWRTaGlwKGFycmF5V2l0aENvb3JkaW5hdGVzKSkge1xuICAgICAgY29uc3QgdGFyZ2V0dGVkU2hpcCA9IHRoaXMuZ2V0U3BlY2lmaWNTaGlwKHgsIHkpO1xuICAgICAgdGFyZ2V0dGVkU2hpcC5oaXQoKTtcblxuICAgICAgaWYgKHRhcmdldHRlZFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgdGhpcy5zdW5rU2hpcHMucHVzaCh0YXJnZXR0ZWRTaGlwKTtcbiAgICAgICAgY29uc3Qgc2hpcFNxdWFyZXMgPSB0aGlzLmdldFNwZWNpZmljU2hpcCh4LCB5LCAnY29vcmRpbmF0ZXMnKTtcblxuICAgICAgICAvLyBTcXVhcmVzIGFyb3VuZCBhIHN1bmsgc2hpcCBhcmUgbm90IHBvc3NpYmxlIGZvciBhdHRhY2tzIGJlY2F1c2UgdGhleSBjYW5ub3QgY29udGFpbiBhbm90aGVyIHNoaXAgYmFzZWQgb24gdGhlIHJ1bGVzIG9mIHNoaXBzJyBwbGFjaW5nIOKAlCB0aGVyZSBtdXN0IGJlIGEgb25lLXNxdWFyZSBnYXAgYmV0d2VlbiB0d28gZGlmZmVyZW50IHNoaXBzXG4gICAgICAgIGlmICh0YXJnZXR0ZWRTaGlwLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuI3Jlc2VydmVBZGphY2VudFNxdWFyZXMoXG4gICAgICAgICAgICBzaGlwU3F1YXJlc1swXSxcbiAgICAgICAgICAgIHNoaXBTcXVhcmVzWzFdLFxuICAgICAgICAgICAgJ2lzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCdcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuI3Jlc2VydmVBZGphY2VudFNxdWFyZXMoXG4gICAgICAgICAgICAgIHNoaXBTcXVhcmVzW2ldWzBdLFxuICAgICAgICAgICAgICBzaGlwU3F1YXJlc1tpXVsxXSxcbiAgICAgICAgICAgICAgJ2lzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdhbWVib2FyZCBzaG91bGQga2VlcCB0cmFjayBvZiBpdHMgdGVybWluYXRpb24gc3RhdGUgYmVjYXVzZSBHYW1lTG9vcCB3aWxsIHJlbHkgb24gaXQgbGF0ZXJcbiAgICAgICAgdGhpcy4jY2hlY2tJZkFsbFNoaXBzSGF2ZUJlZW5EZXN0cm95ZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5hdCh4KS5hdCh5KS5hdCgwKTtcbiAgfVxuXG4gIGdldEFsbFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLmFsbFNoaXBzO1xuICB9XG5cbiAgZ2V0U3Vua1NoaXBzUHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vua1NoaXBzO1xuICB9XG5cbiAgZ2V0U3BlY2lmaWNTaGlwKHgsIHksIHByb3BlcnR5ID0gJ3NoaXBJbnN0YW5jZScpIHtcbiAgICAvLyBBcnJheSBhbGxTaGlwcyBpcyBhbiBhcnJheSBmZWF0dXJpbmcgb2JqZWN0cyB3aXRoIHRoZSAnc2hpcEluc3RhbmNlJyBhbmQgJ2Nvb3JkaW5hdGVzJyBwcm9wZXJ0aWVzXG4gICAgLy8gSWYgaW5zaWRlICdzaGlwSW5zdGFuY2UnIHRoZXJlIGlzIGEgc2hpcCB3aXRoIHRoZSBsZW5ndGggb2YgMSwgdGhlbiBpdHMgY29vcmRpbmF0ZXMgYXJlIHN0b3JlZCBpbnNpZGUgYSBzaW5nbGUgYXJyYXkg4oCUIFsuLi5dXG4gICAgLy8gSG93ZXZlciwgaWYgaXQncyBhIGxvbmdlciBzaGlwLCB0aGVuIGEgZmV3IGRpZmZlcmVudCBjb29yZGluYXRlcyBhcmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzaGlwIGFuZCBhdHRhY2tpbmcgYW55IG9mIHRoZW0gc2hvdWxkIGhpdCB0aGF0IHNoaXAuIEluIHRoYXQgY2FzZSwgc3RvcmUgaW5kaXZpZHVhbCBjb29yZGluYXRlcyBpbnNpZGUgYW5vdGhlciBhcnJheSDigJQgW1suLi5dLCBbLi4uXV1cbiAgICBjb25zdCBzaGlwID0gdGhpcy5nZXRBbGxTaGlwcygpLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uY29vcmRpbmF0ZXNbMF0pKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmNvb3JkaW5hdGVzWzBdID09PSB4ICYmIGl0ZW0uY29vcmRpbmF0ZXNbMV0gPT09IHlcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uY29vcmRpbmF0ZXNbaV1bMF0gPT09IHggJiYgaXRlbS5jb29yZGluYXRlc1tpXVsxXSA9PT0geSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwWzBdW3Byb3BlcnR5XTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgUGxheWVyLCBDb21wdXRlciB9O1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBib2FyZE9uZSwgYm9hcmRUd28pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub3duQm9hcmQgPSBib2FyZE9uZTtcbiAgICB0aGlzLmVuZW15Qm9hcmQgPSBib2FyZFR3bztcbiAgfVxuXG4gIGF0dGFja09wcG9uZW50KHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5lbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH1cbn1cblxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBib2FyZE9uZSwgYm9hcmRUd28pIHtcbiAgICBzdXBlcihuYW1lLCBib2FyZE9uZSwgYm9hcmRUd28pO1xuICAgIHRoaXMucG9zc2libGVNb3ZlcyA9IHRoaXMuI2NyZWF0ZUFsbFBvc3NpYmxlTW92ZXMoKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBhbGwgcG9zc2libGUgbW92ZXMuIEFmdGVyIGVhY2ggbW92ZSwgdGhhdCBtb3ZlIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgZnJvbSBwb3NzaWJsZU1vdmVzIHNvIHRoYXQgbW92ZXMgYXJlIG5ldmVyIHJlcGVhdGVkXG4gICNjcmVhdGVBbGxQb3NzaWJsZU1vdmVzKCkge1xuICAgIGNvbnN0IG1vdmVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBtb3Zlcy5wdXNoKGAke2l9JHtqfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb3ZlcztcbiAgfVxuXG4gIGF0dGFja09wcG9uZW50KC4uLnNtYXJ0TW92ZSkge1xuICAgIGlmICghdGhpcy5wb3NzaWJsZU1vdmVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFRoaXMgcGFydCBpcyBmb3IgXCJzbWFydCBjb21wdXRlclwiIGJ1dCBpZiB0aGUgY29tcHV0ZXIgZGlkIG5vdCBoaXQgYW55dGhpbmcgdGhhdCBhcmd1bWVudCBpcyBub3QgZ2l2ZW5cbiAgICBpZiAoc21hcnRNb3ZlWzBdKSB7XG4gICAgICBjb25zdCBbeCwgeV0gPSBzbWFydE1vdmU7XG4gICAgICBjb25zdCBhdHRlbXB0ZWRBdHRhY2sgPSB0aGlzLmVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgIHRoaXMucG9zc2libGVNb3ZlcyA9IHRoaXMucG9zc2libGVNb3Zlcy5maWx0ZXIoKG1vdmUpID0+IHtcbiAgICAgICAgcmV0dXJuIG1vdmUgIT09IGAke3h9JHt5fWA7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhdHRlbXB0ZWRBdHRhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB4O1xuICAgICAgbGV0IHk7XG4gICAgICBsZXQgYXR0ZW1wdGVkQXR0YWNrO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICBNYXRoLnJhbmRvbSgpICogdGhpcy5wb3NzaWJsZU1vdmVzLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICB4ID0gdGhpcy5wb3NzaWJsZU1vdmVzW3JhbmRvbUluZGV4XVswXTtcbiAgICAgICAgeSA9IHRoaXMucG9zc2libGVNb3Zlc1tyYW5kb21JbmRleF1bMV07XG5cbiAgICAgICAgYXR0ZW1wdGVkQXR0YWNrID0gdGhpcy5lbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIHRoaXMucG9zc2libGVNb3ZlcyA9IHRoaXMucG9zc2libGVNb3Zlcy5maWx0ZXIoKG1vdmUpID0+IHtcbiAgICAgICAgICByZXR1cm4gbW92ZSAhPT0gYCR7eH0ke3l9YDtcbiAgICAgICAgfSk7XG4gICAgICB9IHdoaWxlICghYXR0ZW1wdGVkQXR0YWNrKTtcblxuICAgICAgcmV0dXJuIFt4LCB5XTsgLy8gUmV0dXJuIGFuIGFycmF5IG9mIGNvb3JkaW5hdGVzIHRvIHBhc3MgYSB0ZXN0IHRoYXQgZW5zdXJlcyBDb21wdXRlciBkb2VzIGhpdCB0aGUgUGxheWVyJ3MgYm9hcmQgYXQgdGhlIGNvb3JkaW5hdGVzXG4gICAgfVxuICB9XG5cbiAgZ2V0TGVuZ3RoT2ZQb3NzaWJsZU1vdmVzQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zc2libGVNb3Zlcy5sZW5ndGg7XG4gIH1cbn1cbiIsImV4cG9ydCB7IFNoaXAgfTtcbmNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5pc1N1bmsoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy50aW1lc0hpdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXRUaW1lc0hpdFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnRpbWVzSGl0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gJy4vZ2FtZUxvb3AnO1xuZXhwb3J0IHsgZ2VuZXJhdGVHcmlkIH07XG5cbi8vIFNlbGVjdCBET00gZWxlbWVudHNcbmNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lLWJ1dHRvbicpO1xuY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtZ3JpZCcpO1xuY29uc3QgbnVtYmVyR3JpZEluZGV4ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubnVtYmVyLWJvYXJkLWluZGV4ZXMnKTtcbmNvbnN0IGxldHRlckdyaWRJbmRleGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxldHRlci1ib2FyZC1pbmRleGVzJyk7XG5jb25zdCBncmlkU3F1YXJlc0h1bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLWdyaWQuaHVtYW4nKTtcbmNvbnN0IGdyaWRTcXVhcmVzQ29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtZ3JpZC5jb21wdXRlcicpO1xuXG5mdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRFbGVtZW50KGVsZW1lbnRUeXBlLCBhcHBlbmRUbywgLi4uY2xhc3NBcmcpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICBhcHBlbmRUby5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICBpZiAoY2xhc3NBcmcubGVuZ3RoKSB7XG4gICAgY2xhc3NBcmcuZm9yRWFjaCgoY2xhc3NWYWx1ZSkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBpbiBpbmRleC5qc1xuZnVuY3Rpb24gZ2VuZXJhdGVHcmlkKCkge1xuICBncmlkcy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQW5kQXBwZW5kRWxlbWVudCgnZGl2JywgZGl2LCAnc3F1YXJlJywgJ2Rpc2FibGVkJyk7XG5cbiAgICAgIC8vIEFkZCBpZHMgZm9yIHNxdWFyZXMgdG8gdGllIGFycmF5IGJvYXJkcyB3aXRoIGdyaWQuIFJldmVyc2UgdGhlbSBiZWNhdXNlIGZpcnN0IGNvb3JkaW5hdGUgaXMgWCwgc28gaXQgY2hhbmdlcyBtb3JlIGZyZXF1ZW50bHlcbiAgICAgIGlmIChpIDwgMTApIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGkgKyAnMCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmV2ZXJzZWRJZCA9IFN0cmluZyhpKS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQocmV2ZXJzZWRJZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBudW1iZXJHcmlkSW5kZXhlcy5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUFuZEFwcGVuZEVsZW1lbnQoJ2RpdicsIHBvc2l0aW9uLCAnYm9hcmQtcG9zaXRpb24nKTtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0dGVyR3JpZEluZGV4ZXMuZm9yRWFjaCgocG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUonO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUFuZEFwcGVuZEVsZW1lbnQoJ2RpdicsIHBvc2l0aW9uLCAnYm9hcmQtcG9zaXRpb24nKTtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjaGFyYWN0ZXJzW2ldO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIFZhcmlibGUgaG9sZGluZyBnYW1lTG9vcCBvYmplY3QsIHVwZGF0aW5nIGl0cyBpbm5lciBzdGF0ZSB3aXRoIFwiU3RhcnQgZ2FtZVwiXG5sZXQgZ2FtZSA9IGZhbHNlO1xuXG4vLyBNYWtlIHN1cmUgdGhhdCBjbGlja3MgYXJlIG5vdCByZWdpc3RlcmVkIGJ5IHRoZSBwbGF5ZXIgb24gaXRzIG93biBib2FyZCB3aGlsZSBwbGF5aW5nIGFnYWluc3QgdGhlIGNvbXB1dGVyIChiZWZvcmUgc3RhcnRpbmcgYSBnYW1lLCBpdCBpcyBpbXBvcnRhbnQgdG8gc2VsZWN0IGEgZ2FtZSBtb2RlIOKAlCAyIHBsYXllcnMgb3IgcGxheWVyIHZzIEFJKVxuZ3JpZHMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZ2lzdGVyQ2xpY2tzT25Cb2FyZHMpO1xufSk7XG5mdW5jdGlvbiByZWdpc3RlckNsaWNrc09uQm9hcmRzKGV2ZW50KSB7XG4gIGlmICghZ2FtZSkge1xuICAgIGNvbnNvbGUubG9nKCdCb2FyZCBpcyBub3QgYWN0aXZlLiBTdGFydCBnYW1lIHRvIGFjdGl2ZScpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChnYW1lLmdldFdpbm5lcigpKSB7XG4gICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlciEgU3RhcnQgbmV3IGdhbWUnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBBcHBseSBldmVudCBkZWxlZ2F0aW9ucyB0byBib2FyZCBncmlkc1xuICBjb25zdCBpc0luc2lkZVNxdWFyZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYuc3F1YXJlJyk7XG4gIGlmICghaXNJbnNpZGVTcXVhcmUpIHJldHVybjtcblxuICBjb25zdCBnZXRTcXVhcmVJZCA9IFsuLi5pc0luc2lkZVNxdWFyZS5jbGFzc0xpc3RdLmZpbHRlcigoY2xhc3NWYWx1ZSkgPT4ge1xuICAgIHJldHVybiBjbGFzc1ZhbHVlLmxlbmd0aCA9PT0gMiA/IHRydWUgOiBmYWxzZTtcbiAgfSk7XG5cbiAgLy8gQmVmb3JlIHRoZSBhdHRhY2sgbG9vayBhdCB0aGUgc3Vua1NoaXBzIHByb3BlcnR5IGFuZCBjb21wYXJlIGl0IHdpdGggdGhlIHN0YXRlIG9mIHRoZSBib2FyZCBhZnRlciB0aGUgYXR0YWNrXG4gIGNvbnN0IHN1bmtTaGlwc09mUGxheWVyVHdvID0gZ2FtZS5nZXRQbGF5ZXJUd29TdW5rU2hpcHMoKS5sZW5ndGg7XG5cbiAgY29uc3QgcGxheWVyQXR0YWNrID0gZ2FtZS5tYWtlTW92ZShnZXRTcXVhcmVJZFswXSk7XG4gIGlmICghcGxheWVyQXR0YWNrKSB7XG4gICAgY29uc29sZS5sb2coJ0F0dGFjayBjYW5ub3QgYmUgcmVnaXN0ZXJlZC4gUmVwZWF0IGFnYWluJyk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIC8vIENvbmZpcm0gaWYgYXR0YWNrIGhpdCBhIHNoaXAgb3IgaXMgYSBtaXNzZWQgc2hvdFxuICAgIGlmIChpc0luc2lkZVNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRhaW5zLXNoaXAnKSkge1xuICAgICAgaXNJbnNpZGVTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VjY2Vzc2Z1bC1zaG90Jyk7XG4gICAgICBjb25zb2xlLmxvZygnSGl0IGEgc2hpcCEnKTtcblxuICAgICAgaWYgKHN1bmtTaGlwc09mUGxheWVyVHdvICE9PSBnYW1lLmdldFBsYXllclR3b1N1bmtTaGlwcygpLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU2luayB0aGUgc2hpcCEnKTtcbiAgICAgICAgZGlzYWJsZUFkamFjZW50U3F1YXJlc1RvU3Vua1NoaXBzKGdhbWUpO1xuICAgICAgICBpZiAoZ2FtZS5nZXRXaW5uZXIoKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBHYW1lIG92ZXIhICR7Z2FtZS5nZXRXaW5uZXIoKX0gaGFzIHdvbmApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpc0luc2lkZVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtc2hvdCcpO1xuICAgICAgY29uc29sZS5sb2coJ01pc3NlZCBzaG90ISEnKTtcbiAgICB9XG5cbiAgICBoaWdodGxpZ2h0Q29tcHV0ZXJNb3ZlcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhpZ2h0bGlnaHRDb21wdXRlck1vdmVzKCkge1xuICBjb25zdCBzdW5rU2hpcHNPZlBsYXllck9uZSA9IGdhbWUuZ2V0UGxheWVyT25lU3Vua1NoaXBzKCkubGVuZ3RoO1xuXG4gIGxldCBzcXVhcmVJZDtcbiAgbGV0IGlzUHJldmlvdXNseUhpdFNoaXAgPSBnYW1lLmdldENvb3JkaW5hdGVzT2ZQcmV2aW91c2x5SGl0U2hpcCgpO1xuICBpZiAoaXNQcmV2aW91c2x5SGl0U2hpcCkge1xuICAgIGNvbnN0IHBhcnRPZlNoaXBVbmRlckF0dGFjayA9IGdhbWVcbiAgICAgIC5nZXRDb29yZGluYXRlc09mUHJldmlvdXNseUhpdFNoaXAoKVswXVxuICAgICAgLmpvaW4oJycpO1xuICAgIHNxdWFyZUlkID0gZ2FtZS5tYWtlTW92ZShwYXJ0T2ZTaGlwVW5kZXJBdHRhY2spO1xuICB9IGVsc2Uge1xuICAgIHNxdWFyZUlkID0gZ2FtZS5tYWtlTW92ZSgpO1xuICB9XG5cbiAgY29uc3Qgc3F1YXJlcyA9IFsuLi5ncmlkU3F1YXJlc0h1bWFuLmNoaWxkcmVuXTtcbiAgbGV0IHRhcmdldHRlZFNxdWFyZTtcbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhzcXVhcmVJZCkpIHtcbiAgICAgIHRhcmdldHRlZFNxdWFyZSA9IHNxdWFyZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0YXJnZXR0ZWRTcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250YWlucy1zaGlwJykpIHtcbiAgICBjb25zb2xlLmxvZygnSGl0IGEgc2hpcCEnKTtcbiAgICB0YXJnZXR0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VjY2Vzc2Z1bC1zaG90Jyk7XG5cbiAgICBpZiAoc3Vua1NoaXBzT2ZQbGF5ZXJPbmUgIT09IGdhbWUuZ2V0UGxheWVyT25lU3Vua1NoaXBzKCkubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2luayB0aGUgc2hpcCEnKTtcbiAgICAgIGdhbWUudXBkYXRlQ29vcmRpbmF0ZXNPZlByZXZpb3VzbHlIaXRTaGlwKHNxdWFyZUlkKTtcbiAgICAgIGRpc2FibGVBZGphY2VudFNxdWFyZXNUb1N1bmtTaGlwcyhnYW1lKTtcbiAgICAgIGlmIChnYW1lLmdldFdpbm5lcigpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBHYW1lIG92ZXIhICR7Z2FtZS5nZXRXaW5uZXIoKX0gaGFzIHdvbmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnYW1lLmdldENvb3JkaW5hdGVzT2ZQcmV2aW91c2x5SGl0U2hpcCgpKSB7XG4gICAgICBjb25zb2xlLmxvZygnSGl0IHRoZSBzYXZlZCBzaGlwJyk7XG4gICAgICBnYW1lLnVwZGF0ZUNvb3JkaW5hdGVzT2ZQcmV2aW91c2x5SGl0U2hpcChzcXVhcmVJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdSZW1lbWJlciBzaGlwIGZvciBuZXh0IG1vdmUnKTtcbiAgICAgIGNvbnN0IGh1bWFuU2hpcHMgPSBnYW1lLmdldFBsYXllck9uZUFsbFNoaXBzKCk7XG4gICAgICBodW1hblNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZWRTaGlwID0gc2hpcC5jb29yZGluYXRlcztcblxuICAgICAgICAvLyBhbGxTaGlwcyBhcnJheSBvbiBnYW1lIGJvYXJkcyBjb250YWlucyAxLXNxdWFyZSBzaGlwcycgcGFpciBvZiBjb29yZGluYXRlcyBpbiBhbiBvdXRlciBhcnJheSB3aGVuIHRoZSBwYWlyIGlzIG51bWJlcnMuIFdpdGggbXVsdGktc3F1YXJlIHNoaXBzLCBjb29yZGluYXRlcyBhcmUgc3RpbGwgc2F2ZWQgaW4gYW4gb3V0ZXIgYXJyYXkuIFRob3VnaCB0aGVpciBwYWlycyBvZiBjb29yZGluYXRlcyBhcmUgc3RvcmVkIGluIGlubmVyIGFycmF5cy4gTGFzdCBidXQgbm90IGxlYXN0LCBpdCBpcyBub3QgaW1wb3J0YW50IGZvciB1cyB0byBsb29wIG92ZXIgMS1zcXVhcmUgc2hpcHMgYmVjYXVzZSB0aGV5IHdpbGwgbmV2ZXIgYmUgbWVtb3JpemVkIGFzIGNvb3JkaW5hdGVzRm9yQ29tcHV0ZXJUb1RhcmdldFxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb29yZGluYXRlZFNoaXBbMF0pKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZWRTaGlwLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMuam9pbignJykgPT09IHNxdWFyZUlkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0aWxsQWN0aXZlU2hpcFNxdWFyZXMgPSBzaGlwLmNvb3JkaW5hdGVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc3F1YXJlSWQgIT09IHNxdWFyZS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGdhbWUuc2F2ZUNvb3JkaW5hdGVzT2ZQcmV2aW91c2x5SGl0U2hpcChzdGlsbEFjdGl2ZVNoaXBTcXVhcmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRhcmdldHRlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtc2hvdCcpO1xuICAgIGNvbnNvbGUubG9nKCdNaXNzZWQgc2hvdCEnKTtcbiAgfVxufVxuXG5zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBjb25zdCBzdGF0dXNPZkJ1dHRvbiA9IHN0YXJ0R2FtZUJ1dHRvbi5jbGFzc0xpc3Q7XG5cbiAgaWYgKHN0YXR1c09mQnV0dG9uLmNvbnRhaW5zKCdub3Qtc3RhcnRlZCcpKSB7XG4gICAgc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdC5yZXBsYWNlKCdub3Qtc3RhcnRlZCcsICdzdGFydGVkJyk7XG4gICAgY29uc29sZS5sb2coJ1N0YXJ0aW5nIGdhbWUuLi4nKTtcbiAgICBnYW1lID0gbmV3IEdhbWVMb29wKCk7XG4gICAgYWRkSG92ZXJFZmZlY3RUb0dyaWRTcXVhcmVzKGdyaWRzKTtcbiAgICBkaXNwbGF5U2hpcHNPbkJvYXJkcygpO1xuICB9IGVsc2UgaWYgKHN0YXR1c09mQnV0dG9uLmNvbnRhaW5zKCdzdGFydGVkJykpIHtcbiAgICBjb25zdCBjb25maXJtTWVzc2FnZSA9IGNvbmZpcm0oJ0RvIHlvdSByZWFsbHkgd2FudCB0byBzdGFydCBhIG5ldyBnYW1lPycpO1xuICAgIGlmIChjb25maXJtTWVzc2FnZSkge1xuICAgICAgY29uc29sZS5sb2coJ1N0YXJ0aW5nIG5ldyBnYW1lLi4uJyk7XG4gICAgICBnYW1lID0gbmV3IEdhbWVMb29wKCk7XG4gICAgICBjbGVhclByZXZpb3VzQm9hcmRzVmlzdWFscyhncmlkcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdLZWVwaW5nIHRoZSByZWxldmFudCBnYW1lIScpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclByZXZpb3VzQm9hcmRzVmlzdWFscyhib2FyZHMpIHtcbiAgYm9hcmRzLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGNvbnN0IGRpdnNPZkJvYXJkID0gWy4uLmRpdi5jaGlsZHJlbl07XG5cbiAgICBkaXZzT2ZCb2FyZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzVmFsdWVzID0gc3F1YXJlLmNsYXNzTGlzdDtcblxuICAgICAgaWYgKGNsYXNzVmFsdWVzLmNvbnRhaW5zKCdtaXNzZWQtc2hvdCcpKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzZWQtc2hvdCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NWYWx1ZXMuY29udGFpbnMoJ3N1Y2Nlc3NmdWwtc2hvdCcpKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzZnVsLXNob3QnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzVmFsdWVzLmNvbnRhaW5zKCdhZGphY2VudC10by1zdW5rLXNoaXAnKSkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnYWRqYWNlbnQtdG8tc3Vuay1zaGlwJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRIb3ZlckVmZmVjdFRvR3JpZFNxdWFyZXMoZGl2cykge1xuICBkaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGNvbnN0IGRpdnNPZk9uZUJvYXJkID0gWy4uLmRpdi5jaGlsZHJlbl07XG4gICAgZGl2c09mT25lQm9hcmQuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlcGxhY2UoJ2Rpc2FibGVkJywgJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9vcE92ZXJBbGxEaXZzQW5kQXJyYXlTcXVhcmVzKGN1cnJlbnRHYW1lLCBwcm9wZXJ0eSkge1xuICBjb25zdCBodW1hbkdyaWREaXZzID0gWy4uLmdyaWRTcXVhcmVzSHVtYW4uY2hpbGRyZW5dO1xuICBjb25zdCBjb21wdXRlckdyaWREaXZzID0gWy4uLmdyaWRTcXVhcmVzQ29tcHV0ZXIuY2hpbGRyZW5dO1xuICBjb25zdCBodW1hbkJvYXJkID0gY3VycmVudEdhbWUuZ2V0SHVtYW5Cb2FyZCgpO1xuICBjb25zdCBib2FyZENvbXB1dGVyID0gY3VycmVudEdhbWUuZ2V0Q29tcHV0ZXJCb2FyZCgpO1xuXG4gIGxldCBjb3VudGVyRm9yQXJyYXlXaXRoRGl2cyA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY29tcHV0ZXJTcXVhcmUgPSBib2FyZENvbXB1dGVyW2pdW2ldWzBdO1xuICAgICAgY29uc3QgaHVtYW5TcXVhcmUgPSBodW1hbkJvYXJkW2pdW2ldWzBdO1xuXG4gICAgICBpZiAoY29tcHV0ZXJTcXVhcmVbcHJvcGVydHldKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2NvbnRhaW5zU2hpcCcpIHtcbiAgICAgICAgICBjb21wdXRlckdyaWREaXZzW2NvdW50ZXJGb3JBcnJheVdpdGhEaXZzXS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgJ2NvbnRhaW5zLXNoaXAnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ2lzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCcpIHtcbiAgICAgICAgICBjb21wdXRlckdyaWREaXZzW2NvdW50ZXJGb3JBcnJheVdpdGhEaXZzXS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgJ2FkamFjZW50LXRvLXN1bmstc2hpcCdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChodW1hblNxdWFyZVtwcm9wZXJ0eV0pIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnY29udGFpbnNTaGlwJykge1xuICAgICAgICAgIGh1bWFuR3JpZERpdnNbY291bnRlckZvckFycmF5V2l0aERpdnNdLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5zLXNoaXAnKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ2lzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCcpIHtcbiAgICAgICAgICBodW1hbkdyaWREaXZzW2NvdW50ZXJGb3JBcnJheVdpdGhEaXZzXS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgJ2FkamFjZW50LXRvLXN1bmstc2hpcCdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvdW50ZXJGb3JBcnJheVdpdGhEaXZzKys7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTaGlwc09uQm9hcmRzKCkge1xuICBsb29wT3ZlckFsbERpdnNBbmRBcnJheVNxdWFyZXMoZ2FtZSwgJ2NvbnRhaW5zU2hpcCcpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQWRqYWNlbnRTcXVhcmVzVG9TdW5rU2hpcHMoKSB7XG4gIGxvb3BPdmVyQWxsRGl2c0FuZEFycmF5U3F1YXJlcyhnYW1lLCAnaXNBZGphY2VudFRvU29tZVN1bmtTaGlwJyk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vLi4vVUkvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZUdyaWQgfSBmcm9tICcuL3Zpc3VhbFBhcnQuanMnO1xuXG5nZW5lcmF0ZUdyaWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==