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
      const x = Number(move[0]);
      const y = Number(move[1]);
      // Check if move was successful. If not repeat it again??
      if (!this.playerOne.attackOpponent(x, y)) {
        return false;
      } else {
        return true;
      }
    } else if (this.attacksNow.name === 'Computer') {
      this.playerTwo.attackOpponent();
    }

    // Immediately terminate the game here if there is a board with "gameOver" set to true

    // if (this.#findBoardWithGameOver()) {
    //   return false;
    // } else {
    //   this.#passTurns();
    //   return true;
    // }
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
    const arrayWithCoordinates = pairOfCoordinates;
    const x = arrayWithCoordinates[0];
    const y = arrayWithCoordinates[1];

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

  attackOpponent() {
    if (!this.possibleMoves.length) {
      return false;
    }

    const randomIndex = Math.floor(Math.random() * this.possibleMoves.length);
    const x = Number(this.possibleMoves[randomIndex][0]);
    const y = Number(this.possibleMoves[randomIndex][1]);

    this.enemyBoard.receiveAttack(x, y);
    this.possibleMoves = this.possibleMoves.filter((move) => {
      return move !== `${x}${y}`;
    });

    return [x, y]; // Return an array of coordinates to pass a test that ensures Computer does hit the Player's board at the coordinates
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

grids.forEach((div) => {
  div.addEventListener('click', registerClicksOnBoards);
});
function registerClicksOnBoards(event) {
  if (!game) {
    console.log('Board is not active. Start game to active');
  } else {
    // Apply event delegations to board grids
    const isInsideSquare = event.target.closest('div.square');
    if (!isInsideSquare) return;

    const getSquareId = [...isInsideSquare.classList].filter((classValue) => {
      return classValue.length === 2 ? true : false;
    });

    // Before the attack look at the sunkShips property and compare it with the state of the board after the attack
    const sunkShipsArray = game.getPlayerTwoSunkShips().length;

    const currentAttack = game.makeMove(getSquareId[0]);
    if (!currentAttack) {
      console.log('Attack cannot be registered. Repeat again');
      return;
    } else {
      console.log('Attack was registered');
    }

    // Confirm if attack hit a ship or is a missed shot
    if (isInsideSquare.classList.contains('contains-ship')) {
      isInsideSquare.classList.add('successful-shot');
      console.log('Hit a ship!!');

      if (sunkShipsArray !== game.getPlayerTwoSunkShips().length) {
        console.log('Sink the ship!');
        disableAdjacentSquaresToSunkShips(game);
      }
    } else {
      isInsideSquare.classList.add('missed-shot');
      console.log('Missed shot!!');
    }
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

      /*       if (humanSquare[property]) {
        if (property === 'containShip') {
          humanGridDivs[counterForArrayWithDivs].classList.add(
            'contains-ship'
          );
        } else if (property === 'isAdjacentToSomeSunkShip') {
          humanGridDivs[counterForArrayWithDivs].classList.add(
            'adjacent-to-sunk-ship'
          );
        }
      } */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkg4QjtBQUNUOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEM7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QixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O1VDek1BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ21COztBQUUvQyw0REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUkvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSS9zdHlsZXMuY3NzPzk0OGMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy92aXN1YWxQYXJ0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xuXG4gIHBhZGRpbmc6IDI1cHggNTBweDtcbiAgd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jY29udGFpbmVyIC50b3AtcGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5zdGFydC1nYW1lLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNjb250YWluZXIgLm1haW4tcGFydCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiA1MHB4O1xufVxuXG4ubGVmdC1wYXJ0LFxuLnJpZ2h0LXBhcnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMzgwcHg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGVmdC1wYXJ0ID4gcCxcbi5yaWdodC1wYXJ0ID4gcCB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG59XG5cbi5udW1iZXItYm9hcmQtaW5kZXhlcyxcbi5sZXR0ZXItYm9hcmQtaW5kZXhlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMnB4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogb3JhbmdlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5udW1iZXItYm9hcmQtaW5kZXhlcyB7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDMwcHg7XG5cbiAgdG9wOiA5MHB4O1xuICBsZWZ0OiAyMHB4O1xufVxuXG4ubGV0dGVyLWJvYXJkLWluZGV4ZXMge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdyaWQtYXV0by1yb3dzOiAzMHB4O1xuXG4gIHRvcDogNjBweDtcbiAgbGVmdDogNTBweDtcbn1cblxuLmJvYXJkLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ2FwOiAycHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5zcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNxdWFyZS5jb250YWlucy1zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5zcXVhcmUuZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uc3F1YXJlLmFjdGl2ZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uc3F1YXJlLm1pc3NlZC1zaG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLnNxdWFyZS5zdWNjZXNzZnVsLXNob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zcXVhcmUuYWRqYWNlbnQtdG8tc3Vuay1zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1VJL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCOztFQUU3QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7O0VBRTlCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFFBQVE7RUFDUixxQkFBcUI7O0VBRXJCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7O0VBRXZCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsb0JBQW9COztFQUVwQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsUUFBUTs7RUFFUix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG5cXG4gIHBhZGRpbmc6IDI1cHggNTBweDtcXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbiNjb250YWluZXIgLnRvcC1wYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZS1idXR0b24ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjb250YWluZXIgLm1haW4tcGFydCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubGVmdC1wYXJ0LFxcbi5yaWdodC1wYXJ0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMzgwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sZWZ0LXBhcnQgPiBwLFxcbi5yaWdodC1wYXJ0ID4gcCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubnVtYmVyLWJvYXJkLWluZGV4ZXMsXFxuLmxldHRlci1ib2FyZC1pbmRleGVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDJweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubnVtYmVyLWJvYXJkLWluZGV4ZXMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDMwcHg7XFxuXFxuICB0b3A6IDkwcHg7XFxuICBsZWZ0OiAyMHB4O1xcbn1cXG5cXG4ubGV0dGVyLWJvYXJkLWluZGV4ZXMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XFxuXFxuICB0b3A6IDYwcHg7XFxuICBsZWZ0OiA1MHB4O1xcbn1cXG5cXG4uYm9hcmQtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ2FwOiAycHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3F1YXJlLmNvbnRhaW5zLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zcXVhcmUuZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnNxdWFyZS5hY3RpdmU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uc3F1YXJlLm1pc3NlZC1zaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5zcXVhcmUuc3VjY2Vzc2Z1bC1zaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNxdWFyZS5hZGphY2VudC10by1zdW5rLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgUGxheWVyLCBDb21wdXRlciB9IGZyb20gJy4vcGxheWVyJztcbmV4cG9ydCB7IEdhbWVMb29wIH07XG5cbmNsYXNzIEdhbWVMb29wIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5odW1hbkJvYXJkID0gdGhpcy4jcG9wdWxhdGVCb2FyZFdpdGhTaGlwcygnSHVtYW4nKTtcbiAgICB0aGlzLmNvbXB1dGVyQm9hcmQgPSB0aGlzLiNwb3B1bGF0ZUJvYXJkV2l0aFNoaXBzKCdDb21wdXRlcicpO1xuICAgIHRoaXMucGxheWVyT25lID0gbmV3IFBsYXllcignSHVtYW4nLCB0aGlzLmh1bWFuQm9hcmQsIHRoaXMuY29tcHV0ZXJCb2FyZCk7XG4gICAgdGhpcy5wbGF5ZXJUd28gPSBuZXcgQ29tcHV0ZXIoXG4gICAgICAnQ29tcHV0ZXInLFxuICAgICAgdGhpcy5jb21wdXRlckJvYXJkLFxuICAgICAgdGhpcy5odW1hbkJvYXJkXG4gICAgKTtcbiAgICB0aGlzLmF0dGFja3NOb3cgPSB0aGlzLnBsYXllck9uZTtcbiAgICB0aGlzLnRoZXJlSXNBV2lubmVyID0gbnVsbDtcbiAgfVxuXG4gIC8vIFBsYWNlIDEwIHNoaXBzIGF0IHByZXRlZGVybWluZWQgY29vZGluYXRlcyBmb3Igbm93XG4gICNwb3B1bGF0ZUJvYXJkV2l0aFNoaXBzKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gICAgaWYgKHBsYXllciA9PT0gJ0h1bWFuJykge1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDEsIDAsIDEpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDIsIDksIDEpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDUsIDksIDEpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDksIDksIDEpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDcsIDAsIDIsICdob3InKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCg0LCA0LCAyLCAndmVyJyk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoNiwgNCwgMiwgJ3ZlcicpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDMsIDAsIDMsICdob3InKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCg5LCAyLCAzLCAndmVyJyk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoMCwgMywgNCwgJ3ZlcicpO1xuICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnQ29tcHV0ZXInKSB7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoMCwgMCwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoOSwgOSwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoMCwgOSwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoOSwgMCwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoMiwgMiwgMiwgJ3ZlcicpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDQsIDIsIDIsICd2ZXInKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCg2LCAyLCAyLCAnaG9yJyk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoMCwgNSwgMywgJ2hvcicpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDQsIDUsIDMsICdob3InKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCg4LCA0LCA0LCAndmVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG5cbiAgI3Bhc3NUdXJucygpIHtcbiAgICB0aGlzLmF0dGFja3NOb3cubmFtZSA9PT0gJ0h1bWFuJ1xuICAgICAgPyAodGhpcy5hdHRhY2tzTm93ID0gdGhpcy5wbGF5ZXJUd28pXG4gICAgICA6ICh0aGlzLmF0dGFja3NOb3cgPSB0aGlzLnBsYXllck9uZSk7XG4gIH1cblxuICAjZmluZEJvYXJkV2l0aEdhbWVPdmVyKCkge1xuICAgIGlmICh0aGlzLmh1bWFuQm9hcmQuZ2FtZU92ZXIpIHtcbiAgICAgIHRoaXMudGhlcmVJc0FXaW5uZXIgPSB0aGlzLnBsYXllclR3by5uYW1lO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXB1dGVyQm9hcmQuZ2FtZU92ZXIpIHtcbiAgICAgIHRoaXMudGhlcmVJc0FXaW5uZXIgPSB0aGlzLnBsYXllck9uZS5uYW1lO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBtYWtlTW92ZSguLi5jb29yZGluYXRlcykge1xuICAgIGlmICh0aGlzLnRoZXJlSXNBV2lubmVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXR0YWNrc05vdy5uYW1lID09PSAnSHVtYW4nKSB7XG4gICAgICBjb25zdCBtb3ZlID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICBjb25zdCB4ID0gTnVtYmVyKG1vdmVbMF0pO1xuICAgICAgY29uc3QgeSA9IE51bWJlcihtb3ZlWzFdKTtcbiAgICAgIC8vIENoZWNrIGlmIG1vdmUgd2FzIHN1Y2Nlc3NmdWwuIElmIG5vdCByZXBlYXQgaXQgYWdhaW4/P1xuICAgICAgaWYgKCF0aGlzLnBsYXllck9uZS5hdHRhY2tPcHBvbmVudCh4LCB5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNrc05vdy5uYW1lID09PSAnQ29tcHV0ZXInKSB7XG4gICAgICB0aGlzLnBsYXllclR3by5hdHRhY2tPcHBvbmVudCgpO1xuICAgIH1cblxuICAgIC8vIEltbWVkaWF0ZWx5IHRlcm1pbmF0ZSB0aGUgZ2FtZSBoZXJlIGlmIHRoZXJlIGlzIGEgYm9hcmQgd2l0aCBcImdhbWVPdmVyXCIgc2V0IHRvIHRydWVcblxuICAgIC8vIGlmICh0aGlzLiNmaW5kQm9hcmRXaXRoR2FtZU92ZXIoKSkge1xuICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLiNwYXNzVHVybnMoKTtcbiAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgIC8vIH1cbiAgfVxuXG4gIGdldFdob3NlVHVybkl0SXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0YWNrc05vdy5uYW1lO1xuICB9XG5cbiAgZ2V0V2lubmVyKCkge1xuICAgIHJldHVybiB0aGlzLnRoZXJlSXNBV2lubmVyO1xuICB9XG5cbiAgZ2V0SHVtYW5Cb2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5odW1hbkJvYXJkLmJvYXJkO1xuICB9XG5cbiAgZ2V0Q29tcHV0ZXJCb2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wdXRlckJvYXJkLmJvYXJkO1xuICB9XG5cbiAgZ2V0UGxheWVyT25lU3Vua1NoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllck9uZS5vd25Cb2FyZC5nZXRTdW5rU2hpcHNQcm9wZXJ0eSgpO1xuICB9XG5cbiAgZ2V0UGxheWVyVHdvU3Vua1NoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllclR3by5vd25Cb2FyZC5nZXRTdW5rU2hpcHNQcm9wZXJ0eSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy4jY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xuICAgIHRoaXMuc3Vua1NoaXBzID0gW107XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgI2NyZWF0ZUdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAvLyBJbiBlYWNoIHNxdWFyZSBvZiB0aGUgYm9hcmQsIHRoZXJlIGlzIGFuIG9iamVjdCB3aXRoIGEgZmV3IHByb3BlcnRpZXMgdG8gY29udHJvbCB0aGUgZ2FtZSdzIGxvZ2ljXG4gICAgICAgIGJvYXJkW2ldLnB1c2goW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRhaW5zU2hpcDogZmFsc2UsXG4gICAgICAgICAgICBpc0FkamFjZW50VG9Tb21lU2hpcDogZmFsc2UsXG4gICAgICAgICAgICBpc0FkamFjZW50VG9Tb21lU3Vua1NoaXA6IGZhbHNlLFxuICAgICAgICAgICAgaGFzQmVlblRhcmdldHRlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIC8vIEhlbHBlcnMgZm9yIHBsYWNlU2hpcCgpXG4gICNmaXRJbkJvYXJkTGltaXRzKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgYXJyYXlXaXRoQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICBjb25zdCB4ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzFdO1xuXG4gICAgLy8gQXJndW1lbnRzIG9mIHRoaXMgbWV0aG9kIGNvbWUgaW4gdHdvIGRpZmZlcmVudCBmbGF2b3JzIOKAlCB0aGV5IGNhbiBiZSBlaXRoZXIgaW5kaXZpZHVhbCBYIGFuZCBZIHZhbHVlcyAoY2FzZSB3aXRoIGEgMS1zcXVhcmUgc2hpcCksIG9yIGFycmF5cyB3aXRoIGNvbWJpbmF0aW9ucyBvZiBYIGFuZCBZIHZhbHVlcyAoY2FzZSB3aXRoIG11bHRpcGxlLXNxdWFyZSBzaGlwcylcbiAgICAvLyBJdCBpcyBuZWNlc3NhcnkgdG8gY2hlY2sgb25seSBpZiB0aGV5IGFyZSBncmVhdGVyIHRoYW4gOSBpbiB0aGUgY29udGV4dCBvZiBhcnJheXMsIGJlY2F1c2Ugc2hpcHMgYXJlIGV4cGFuZGVkIHRvIHRoZSByaWdodC9kb3duIGJ5IGRlZmF1bHQg4oCUIGEgdHdvLXNxdWFyZSBzaGlwIHBsYWNlZCBob3Jpem9udGFsbHkgYXQgWzAsMF0gcG9wdWxhdGVzIHRvIFswLDBdLCBbMSwwXSBhbmQgbmV2ZXIgdG8gWzAsMF0sIFstMSwgMF1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSAmJiBBcnJheS5pc0FycmF5KHkpKSB7XG4gICAgICBjb25zdCB2YWx1ZXNYQW5kWSA9IFsuLi54LCAuLi55XTtcbiAgICAgIGNvbnN0IHhPcllJc091dHNpZGVCb2FyZCA9IHZhbHVlc1hBbmRZLmZpbHRlcigodmFsdWUpID0+IHZhbHVlID4gOSk7XG4gICAgICBpZiAoeE9yWUlzT3V0c2lkZUJvYXJkLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCA+IDkgfHwgeSA+IDkgfHwgeCA8IDAgfHwgeSA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgI3Jlc2VydmVBZGphY2VudFNxdWFyZXMoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBhcnJheVdpdGhDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVYID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgY29vcmRpbmF0ZVkgPSBhcnJheVdpdGhDb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzJdO1xuXG4gICAgLy8gVXNlIHR3byBhcnJheXMgZmlsbGVkIHdpdGggYWxsIHBvc3NpYmxlIG9wdGlvbnMgZm9yIGFkamFjZW50IHNxdWFyZXNcbiAgICAvLyBBIHNxdWFyZSBjYW4gaGF2ZSA4IGFkamFjZW50IHNxdWFyZXMgYXQgbW9zdFxuICAgIGNvbnN0IGFkamFjZW50Q29vcmRpbmF0ZXNPZlggPSBbLTEsIDAsIDEsIDEsIDEsIDAsIC0xLCAtMV07XG4gICAgY29uc3QgYWRqYWNlbnRDb29yZGluYXRlc09mWSA9IFstMSwgLTEsIC0xLCAwLCAxLCAxLCAxLCAwXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gY29vcmRpbmF0ZVggKyBhZGphY2VudENvb3JkaW5hdGVzT2ZYW2ldO1xuICAgICAgY29uc3QgeSA9IGNvb3JkaW5hdGVZICsgYWRqYWNlbnRDb29yZGluYXRlc09mWVtpXTtcblxuICAgICAgaWYgKHggPiA5IHx8IHkgPiA5IHx8IHggPCAwIHx8IHkgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuY29udGFpbnNTaGlwKSB7XG4gICAgICAgIC8vIFNxdWFyZXMgdGhhdCBhcmUgYSBwYXJ0IG9mIHRoZSBzaGlwIG11c3Qgbm90IGJlIHJlc2VydmVkIGJlY2F1c2UgdGhleSBhcmUgbm90IGFkamFjZW50IGluIGFueSBjYXNlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcGVydHkgPT09ICdpc0FkamFjZW50VG9Tb21lU2hpcCcpIHtcbiAgICAgICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmlzQWRqYWNlbnRUb1NvbWVTaGlwID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkgPT09ICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnKSB7XG4gICAgICAgIHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5pc0FkamFjZW50VG9Tb21lU3Vua1NoaXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNjb25maXJtQ29vcmRpbmF0ZXNBcmVOb3RBdmFpbGFibGUoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCByZXN1bHRPZkhlbHBlciA9IHRoaXMuI2FjY2Vzc1Byb3BlcnR5T25TaGlwT2JqZWN0KFxuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAnY29udGFpbnNTaGlwJ1xuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdE9mSGVscGVyO1xuICB9XG5cbiAgI3N0YW5kSW5Bbm90aGVyU2hpcEFkamFjZW50U3F1YXJlcyguLi5jb29yZGluYXRlcykge1xuICAgIGNvbnN0IHJlc3VsdE9mSGVscGVyID0gdGhpcy4jYWNjZXNzUHJvcGVydHlPblNoaXBPYmplY3QoXG4gICAgICBjb29yZGluYXRlcyxcbiAgICAgICdpc0FkamFjZW50VG9Tb21lU2hpcCdcbiAgICApO1xuICAgIHJldHVybiByZXN1bHRPZkhlbHBlcjtcbiAgfVxuXG4gIC8vIFVzZSB0aGUgcmVzdCBvcGVyYXRvciB0byBwbGFjZSBhbGwgYXJndW1lbnRzIGludG8gb25lIGFycmF5IGFuZCB0aGVuIGV4dHJhY3Qgc3BlY2lmaWMgcGFydHMgb2YgaXRcbiAgI2FjY2Vzc1Byb3BlcnR5T25TaGlwT2JqZWN0KC4uLmNvb3JkaW5hdGVzQW5kUHJvcGVydHkpIHtcbiAgICBjb25zdCBhcnJheVdpdGhBcmd1bWVudHMgPSBjb29yZGluYXRlc0FuZFByb3BlcnR5O1xuICAgIGNvbnN0IHggPSBhcnJheVdpdGhBcmd1bWVudHNbMF1bMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aEFyZ3VtZW50c1swXVsxXTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFycmF5V2l0aEFyZ3VtZW50c1sxXTtcblxuICAgIGxldCB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHgpICYmIEFycmF5LmlzQXJyYXkoeSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBBY2Nlc3MgYSBwcm9wZXJ0eSBvbiB0aGUgc2hpcCB3aXRoIHdoaWNoIHRoZSBtZXRob2Qgd2FzIGNhbGxlZCBpbiBhIGxlc3MgaGFyZC1jb2RlZCBtYW5uZXIgd2l0aCBhIGRvdCBub3RhdGlvblxuICAgICAgICB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uID0gdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHhbaV0sIHlbaV0pW1xuICAgICAgICAgIHByb3BlcnR5XG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKHdpbGxDYW5jZWxTaGlwQ3JlYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWxsQ2FuY2VsU2hpcENyZWF0aW9uID0gdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpW3Byb3BlcnR5XTtcblxuICAgICAgaWYgKHdpbGxDYW5jZWxTaGlwQ3JlYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2NvbXBhcmVBZ2FpbnN0TGltaXRDb25kaXRpb25zKHgsIHkpIHtcbiAgICBpZiAoIXRoaXMuI2ZpdEluQm9hcmRMaW1pdHMoeCwgeSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuI2NvbmZpcm1Db29yZGluYXRlc0FyZU5vdEF2YWlsYWJsZSh4LCB5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy4jc3RhbmRJbkFub3RoZXJTaGlwQWRqYWNlbnRTcXVhcmVzKHgsIHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcCh4LCB5LCBzaGlwU2l6ZSwgZGlyZWN0aW9uID0gJ2hvcicpIHtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcFNpemUpO1xuXG4gICAgaWYgKHNoaXAubGVuZ3RoID4gMSkge1xuICAgICAgLy8gQ3JlYXRlIHR3byBhcnJheXMgdG8gcGxhY2Ugc2hpcHMgb3ZlciBtdWx0aXBsZSBzcXVhcmVzLCBkb2luZyBpdCBpbiBib3RoIGRpcmVjdGlvbnNcbiAgICAgIGNvbnN0IGFsbFZhbHVlc09mWCA9IFtdO1xuICAgICAgY29uc3QgYWxsVmFsdWVzT2ZZID0gW107XG5cbiAgICAgIC8vIElmIHBsYWNlZCBob3Jpem9udGFsbHksIHRoZSBzaGlwJ3MgZmlyc3Qgc3F1YXJlIHdpbGwgZ2VuZXJhdGUgdGhlIHJlc3Qgb2Ygc3F1YXJlcyB0byB0aGUgcmlnaHQsIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHJvd1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcicpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZYLnB1c2goeCk7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZZLnB1c2goeSk7XG4gICAgICAgICAgeCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHBsYWNlZCB2ZXJ0aWNhbGx5LCB0aGUgc2hpcCdzIGZpcnN0IHNxdWFyZSB3aWxsIGdlbmVyYXRlIHRoZSByZXN0IG9mIHNxdWFyZXMgZG93biwgd2l0aG91dCBjaGFuZ2luZyB0aGUgY29sdW1uXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcicpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZYLnB1c2goeCk7XG4gICAgICAgICAgYWxsVmFsdWVzT2ZZLnB1c2goeSk7XG4gICAgICAgICAgeSArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIGFueSBvZiB0aGUgcmVzdHJpY3Rpb25zIGlzIHZpb2xhdGVkIGJlZm9yZSBwbGFjaW5nIGEgc2hpcC4gSWYgeWVzLCB0aGUgc2hpcCBpcyBub3QgcGxhY2VkIG9uIHRoZSBib2FyZFxuICAgICAgaWYgKCF0aGlzLiNjb21wYXJlQWdhaW5zdExpbWl0Q29uZGl0aW9ucyhhbGxWYWx1ZXNPZlgsIGFsbFZhbHVlc09mWSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKFxuICAgICAgICAgIGFsbFZhbHVlc09mWFtpXSxcbiAgICAgICAgICBhbGxWYWx1ZXNPZllbaV1cbiAgICAgICAgKS5jb250YWluc1NoaXAgPSBzaGlwO1xuXG4gICAgICAgIC8vIFN0b3JlIHNoaXBzIGluc2lkZSB0aGUgYWxsU2hpcHMgYXJyYXkgd2l0aCB0aGVpciBjb29yZGluYXRlcyB0byBiZSBhYmxlIHRvIGVhc2llciBhbnN3ZXIgaWYgdGhlIGF0dGFja2VkIGNvb3JkaW5hdGVzIGJlbG9uZyB0byBhbnkgc2hpcFxuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaCh7XG4gICAgICAgICAgICBzaGlwSW5zdGFuY2U6IHNoaXAsXG4gICAgICAgICAgICBjb29yZGluYXRlczogW1thbGxWYWx1ZXNPZlhbaV0sIGFsbFZhbHVlc09mWVtpXV1dLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWxsU2hpcHNcbiAgICAgICAgICAgIC5hdCgtMSlcbiAgICAgICAgICAgIC5jb29yZGluYXRlcy5wdXNoKFthbGxWYWx1ZXNPZlhbaV0sIGFsbFZhbHVlc09mWVtpXV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEtlZXAgcmVzZXJ2ZUFkamFjZW50U3F1YXJlcygpIGluIGEgc2VwYXJhdGUgbG9vcCBiZWNhdXNlIGl0IGlzIGltcG9ydGFudCBhbGwgc2hpcHMgdG8gYmUgcHJpb3JseSBjcmVhdGVkIHRvIHJlc2VydmUgb25seSB0cnVseSBhZGphY2VudCBzcXVhcmVzLiBUaGUgb3RoZXIgMiBzcXVhcmVzIG9mIGEgc2hpcCB3aXRoIHRoZSBsZW5ndGggb2YgMyBhcmUgbm90IGFkamFjZW50OyBUaGV5IGFyZSBhIHBhcnQgb2YgdGhlIHNoaXBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKFxuICAgICAgICAgIGFsbFZhbHVlc09mWFtpXSxcbiAgICAgICAgICBhbGxWYWx1ZXNPZllbaV0sXG4gICAgICAgICAgJ2lzQWRqYWNlbnRUb1NvbWVTaGlwJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmICghdGhpcy4jY29tcGFyZUFnYWluc3RMaW1pdENvbmRpdGlvbnMoeCwgeSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuY29udGFpbnNTaGlwID0gc2hpcDtcbiAgICAgIHRoaXMuI3Jlc2VydmVBZGphY2VudFNxdWFyZXMoeCwgeSwgJ2lzQWRqYWNlbnRUb1NvbWVTaGlwJyk7XG4gICAgICB0aGlzLmFsbFNoaXBzLnB1c2goeyBzaGlwSW5zdGFuY2U6IHNoaXAsIGNvb3JkaW5hdGVzOiBbeCwgeV0gfSk7XG4gICAgfVxuICAgIC8vIFRvIGNvbmZpcm0gdGhhdCB0aGUgc2hpcCBoYXMgYmVlbiBwbGFjZWQgc3VjY2Vzc2Z1bGx5XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBIZWxwZXJzIGZvciByZWNlaXZlQXR0YWNrKClcbiAgI3RhcmdldENvb3JkaW5hdGVzT3V0c2lkZUJvYXJkKGFycmF5V2l0aENvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgYXR0YWNrSXNPdXRzaWRlQm9hcmQgPSBhcnJheVdpdGhDb29yZGluYXRlcy5maWx0ZXIoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIHJldHVybiBjb29yZGluYXRlID4gOSB8fCBjb29yZGluYXRlIDwgMDtcbiAgICB9KTtcblxuICAgIGlmIChhdHRhY2tJc091dHNpZGVCb2FyZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgI2NvbmZpcm1TcXVhcmVzQXJlTm90QXZhaWxhYmxlKGFycmF5V2l0aENvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeCA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IHkgPSBhcnJheVdpdGhDb29yZGluYXRlc1sxXTtcblxuICAgIGlmICh0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuaGFzQmVlblRhcmdldHRlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuaXNBZGphY2VudFRvU29tZVN1bmtTaGlwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gICNmaW5kVGFyZ2V0dGVkU2hpcChhcnJheVdpdGhDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHggPSBhcnJheVdpdGhDb29yZGluYXRlc1swXTtcbiAgICBjb25zdCB5ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMV07XG5cbiAgICBpZiAodGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmNvbnRhaW5zU2hpcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjY2hlY2tJZkFsbFNoaXBzSGF2ZUJlZW5EZXN0cm95ZWQoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5hbGxTaGlwcy5sZW5ndGggPT09IHRoaXMuc3Vua1NoaXBzLmxlbmd0aCAmJlxuICAgICAgdGhpcy5hbGxTaGlwcy5sZW5ndGggJiZcbiAgICAgIHRoaXMuc3Vua1NoaXBzLmxlbmd0aFxuICAgICkge1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgI2NoZWNrR2FtZVN0YXRlKCkge1xuICAgIGlmICh0aGlzLmdhbWVPdmVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gICNjaGVja0lmQXR0YWNrSXNBbGxvd2VkKGFycmF5V2l0aENvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMuI2NoZWNrR2FtZVN0YXRlKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuI3RhcmdldENvb3JkaW5hdGVzT3V0c2lkZUJvYXJkKGFycmF5V2l0aENvb3JkaW5hdGVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy4jY29uZmlybVNxdWFyZXNBcmVOb3RBdmFpbGFibGUoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soLi4ucGFpck9mQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBhcnJheVdpdGhDb29yZGluYXRlcyA9IHBhaXJPZkNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IHggPSBhcnJheVdpdGhDb29yZGluYXRlc1swXTtcbiAgICBjb25zdCB5ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMV07XG5cbiAgICBpZiAoIXRoaXMuI2NoZWNrSWZBdHRhY2tJc0FsbG93ZWQoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaGFzQmVlblRhcmdldHRlZCBwcm9wZXJ0eSBjYW4gZWl0aGVyIG1lYW4gYSBzdWNjZXNzZnVsIGF0dGFjayAoaGl0IGEgc2hpcCkgb3IgYSBmYWlsZWQgb25lIChhIG1pc3NlZCBzaG90KVxuICAgIHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5oYXNCZWVuVGFyZ2V0dGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy4jZmluZFRhcmdldHRlZFNoaXAoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpKSB7XG4gICAgICBjb25zdCB0YXJnZXR0ZWRTaGlwID0gdGhpcy5nZXRTcGVjaWZpY1NoaXAoeCwgeSk7XG4gICAgICB0YXJnZXR0ZWRTaGlwLmhpdCgpO1xuXG4gICAgICBpZiAodGFyZ2V0dGVkU2hpcC5pc1N1bmsoKSkge1xuICAgICAgICB0aGlzLnN1bmtTaGlwcy5wdXNoKHRhcmdldHRlZFNoaXApO1xuICAgICAgICBjb25zdCBzaGlwU3F1YXJlcyA9IHRoaXMuZ2V0U3BlY2lmaWNTaGlwKHgsIHksICdjb29yZGluYXRlcycpO1xuXG4gICAgICAgIC8vIFNxdWFyZXMgYXJvdW5kIGEgc3VuayBzaGlwIGFyZSBub3QgcG9zc2libGUgZm9yIGF0dGFja3MgYmVjYXVzZSB0aGV5IGNhbm5vdCBjb250YWluIGFub3RoZXIgc2hpcCBiYXNlZCBvbiB0aGUgcnVsZXMgb2Ygc2hpcHMnIHBsYWNpbmcg4oCUIHRoZXJlIG11c3QgYmUgYSBvbmUtc3F1YXJlIGdhcCBiZXR3ZWVuIHR3byBkaWZmZXJlbnQgc2hpcHNcbiAgICAgICAgaWYgKHRhcmdldHRlZFNoaXAubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy4jcmVzZXJ2ZUFkamFjZW50U3F1YXJlcyhcbiAgICAgICAgICAgIHNoaXBTcXVhcmVzWzBdLFxuICAgICAgICAgICAgc2hpcFNxdWFyZXNbMV0sXG4gICAgICAgICAgICAnaXNBZGphY2VudFRvU29tZVN1bmtTaGlwJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU3F1YXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy4jcmVzZXJ2ZUFkamFjZW50U3F1YXJlcyhcbiAgICAgICAgICAgICAgc2hpcFNxdWFyZXNbaV1bMF0sXG4gICAgICAgICAgICAgIHNoaXBTcXVhcmVzW2ldWzFdLFxuICAgICAgICAgICAgICAnaXNBZGphY2VudFRvU29tZVN1bmtTaGlwJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2FtZWJvYXJkIHNob3VsZCBrZWVwIHRyYWNrIG9mIGl0cyB0ZXJtaW5hdGlvbiBzdGF0ZSBiZWNhdXNlIEdhbWVMb29wIHdpbGwgcmVseSBvbiBpdCBsYXRlclxuICAgICAgICB0aGlzLiNjaGVja0lmQWxsU2hpcHNIYXZlQmVlbkRlc3Ryb3llZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkLmF0KHgpLmF0KHkpLmF0KDApO1xuICB9XG5cbiAgZ2V0QWxsU2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsU2hpcHM7XG4gIH1cblxuICBnZXRTdW5rU2hpcHNQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdW5rU2hpcHM7XG4gIH1cblxuICBnZXRTcGVjaWZpY1NoaXAoeCwgeSwgcHJvcGVydHkgPSAnc2hpcEluc3RhbmNlJykge1xuICAgIC8vIEFycmF5IGFsbFNoaXBzIGlzIGFuIGFycmF5IGZlYXR1cmluZyBvYmplY3RzIHdpdGggdGhlICdzaGlwSW5zdGFuY2UnIGFuZCAnY29vcmRpbmF0ZXMnIHByb3BlcnRpZXNcbiAgICAvLyBJZiBpbnNpZGUgJ3NoaXBJbnN0YW5jZScgdGhlcmUgaXMgYSBzaGlwIHdpdGggdGhlIGxlbmd0aCBvZiAxLCB0aGVuIGl0cyBjb29yZGluYXRlcyBhcmUgc3RvcmVkIGluc2lkZSBhIHNpbmdsZSBhcnJheSDigJQgWy4uLl1cbiAgICAvLyBIb3dldmVyLCBpZiBpdCdzIGEgbG9uZ2VyIHNoaXAsIHRoZW4gYSBmZXcgZGlmZmVyZW50IGNvb3JkaW5hdGVzIGFyZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNoaXAgYW5kIGF0dGFja2luZyBhbnkgb2YgdGhlbSBzaG91bGQgaGl0IHRoYXQgc2hpcC4gSW4gdGhhdCBjYXNlLCBzdG9yZSBpbmRpdmlkdWFsIGNvb3JkaW5hdGVzIGluc2lkZSBhbm90aGVyIGFycmF5IOKAlCBbWy4uLl0sIFsuLi5dXVxuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdldEFsbFNoaXBzKCkuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5jb29yZGluYXRlc1swXSkpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uY29vcmRpbmF0ZXNbMF0gPT09IHggJiYgaXRlbS5jb29yZGluYXRlc1sxXSA9PT0geVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0uY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoaXRlbS5jb29yZGluYXRlc1tpXVswXSA9PT0geCAmJiBpdGVtLmNvb3JkaW5hdGVzW2ldWzFdID09PSB5KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBbMF1bcHJvcGVydHldO1xuICB9XG59XG4iLCJleHBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH07XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkT25lLCBib2FyZFR3bykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vd25Cb2FyZCA9IGJvYXJkT25lO1xuICAgIHRoaXMuZW5lbXlCb2FyZCA9IGJvYXJkVHdvO1xuICB9XG5cbiAgYXR0YWNrT3Bwb25lbnQoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxufVxuXG5jbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkT25lLCBib2FyZFR3bykge1xuICAgIHN1cGVyKG5hbWUsIGJvYXJkT25lLCBib2FyZFR3byk7XG4gICAgdGhpcy5wb3NzaWJsZU1vdmVzID0gdGhpcy4jY3JlYXRlQWxsUG9zc2libGVNb3ZlcygpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGFsbCBwb3NzaWJsZSBtb3Zlcy4gQWZ0ZXIgZWFjaCBtb3ZlLCB0aGF0IG1vdmUgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBmcm9tIHBvc3NpYmxlTW92ZXMgc28gdGhhdCBtb3ZlcyBhcmUgbmV2ZXIgcmVwZWF0ZWRcbiAgI2NyZWF0ZUFsbFBvc3NpYmxlTW92ZXMoKSB7XG4gICAgY29uc3QgbW92ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIG1vdmVzLnB1c2goYCR7aX0ke2p9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmVzO1xuICB9XG5cbiAgYXR0YWNrT3Bwb25lbnQoKSB7XG4gICAgaWYgKCF0aGlzLnBvc3NpYmxlTW92ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBvc3NpYmxlTW92ZXMubGVuZ3RoKTtcbiAgICBjb25zdCB4ID0gTnVtYmVyKHRoaXMucG9zc2libGVNb3Zlc1tyYW5kb21JbmRleF1bMF0pO1xuICAgIGNvbnN0IHkgPSBOdW1iZXIodGhpcy5wb3NzaWJsZU1vdmVzW3JhbmRvbUluZGV4XVsxXSk7XG5cbiAgICB0aGlzLmVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB0aGlzLnBvc3NpYmxlTW92ZXMgPSB0aGlzLnBvc3NpYmxlTW92ZXMuZmlsdGVyKChtb3ZlKSA9PiB7XG4gICAgICByZXR1cm4gbW92ZSAhPT0gYCR7eH0ke3l9YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBbeCwgeV07IC8vIFJldHVybiBhbiBhcnJheSBvZiBjb29yZGluYXRlcyB0byBwYXNzIGEgdGVzdCB0aGF0IGVuc3VyZXMgQ29tcHV0ZXIgZG9lcyBoaXQgdGhlIFBsYXllcidzIGJvYXJkIGF0IHRoZSBjb29yZGluYXRlc1xuICB9XG5cbiAgZ2V0TGVuZ3RoT2ZQb3NzaWJsZU1vdmVzQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zc2libGVNb3Zlcy5sZW5ndGg7XG4gIH1cbn1cbiIsImV4cG9ydCB7IFNoaXAgfTtcbmNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5pc1N1bmsoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy50aW1lc0hpdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXRUaW1lc0hpdFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnRpbWVzSGl0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lTG9vcCB9IGZyb20gJy4vZ2FtZUxvb3AnO1xuZXhwb3J0IHsgZ2VuZXJhdGVHcmlkIH07XG5cbi8vIFNlbGVjdCBET00gZWxlbWVudHNcbmNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lLWJ1dHRvbicpO1xuY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtZ3JpZCcpO1xuY29uc3QgbnVtYmVyR3JpZEluZGV4ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubnVtYmVyLWJvYXJkLWluZGV4ZXMnKTtcbmNvbnN0IGxldHRlckdyaWRJbmRleGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxldHRlci1ib2FyZC1pbmRleGVzJyk7XG5jb25zdCBncmlkU3F1YXJlc0h1bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLWdyaWQuaHVtYW4nKTtcbmNvbnN0IGdyaWRTcXVhcmVzQ29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtZ3JpZC5jb21wdXRlcicpO1xuXG5mdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRFbGVtZW50KGVsZW1lbnRUeXBlLCBhcHBlbmRUbywgLi4uY2xhc3NBcmcpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICBhcHBlbmRUby5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICBpZiAoY2xhc3NBcmcubGVuZ3RoKSB7XG4gICAgY2xhc3NBcmcuZm9yRWFjaCgoY2xhc3NWYWx1ZSkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzVmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBpbiBpbmRleC5qc1xuZnVuY3Rpb24gZ2VuZXJhdGVHcmlkKCkge1xuICBncmlkcy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQW5kQXBwZW5kRWxlbWVudCgnZGl2JywgZGl2LCAnc3F1YXJlJywgJ2Rpc2FibGVkJyk7XG5cbiAgICAgIC8vIEFkZCBpZHMgZm9yIHNxdWFyZXMgdG8gdGllIGFycmF5IGJvYXJkcyB3aXRoIGdyaWQuIFJldmVyc2UgdGhlbSBiZWNhdXNlIGZpcnN0IGNvb3JkaW5hdGUgaXMgWCwgc28gaXQgY2hhbmdlcyBtb3JlIGZyZXF1ZW50bHlcbiAgICAgIGlmIChpIDwgMTApIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGkgKyAnMCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmV2ZXJzZWRJZCA9IFN0cmluZyhpKS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQocmV2ZXJzZWRJZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBudW1iZXJHcmlkSW5kZXhlcy5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUFuZEFwcGVuZEVsZW1lbnQoJ2RpdicsIHBvc2l0aW9uLCAnYm9hcmQtcG9zaXRpb24nKTtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0dGVyR3JpZEluZGV4ZXMuZm9yRWFjaCgocG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUonO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUFuZEFwcGVuZEVsZW1lbnQoJ2RpdicsIHBvc2l0aW9uLCAnYm9hcmQtcG9zaXRpb24nKTtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjaGFyYWN0ZXJzW2ldO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIFZhcmlibGUgaG9sZGluZyBnYW1lTG9vcCBvYmplY3QsIHVwZGF0aW5nIGl0cyBpbm5lciBzdGF0ZSB3aXRoIFwiU3RhcnQgZ2FtZVwiXG5sZXQgZ2FtZSA9IGZhbHNlO1xuXG5ncmlkcy5mb3JFYWNoKChkaXYpID0+IHtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVnaXN0ZXJDbGlja3NPbkJvYXJkcyk7XG59KTtcbmZ1bmN0aW9uIHJlZ2lzdGVyQ2xpY2tzT25Cb2FyZHMoZXZlbnQpIHtcbiAgaWYgKCFnYW1lKSB7XG4gICAgY29uc29sZS5sb2coJ0JvYXJkIGlzIG5vdCBhY3RpdmUuIFN0YXJ0IGdhbWUgdG8gYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXBwbHkgZXZlbnQgZGVsZWdhdGlvbnMgdG8gYm9hcmQgZ3JpZHNcbiAgICBjb25zdCBpc0luc2lkZVNxdWFyZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYuc3F1YXJlJyk7XG4gICAgaWYgKCFpc0luc2lkZVNxdWFyZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZ2V0U3F1YXJlSWQgPSBbLi4uaXNJbnNpZGVTcXVhcmUuY2xhc3NMaXN0XS5maWx0ZXIoKGNsYXNzVmFsdWUpID0+IHtcbiAgICAgIHJldHVybiBjbGFzc1ZhbHVlLmxlbmd0aCA9PT0gMiA/IHRydWUgOiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIEJlZm9yZSB0aGUgYXR0YWNrIGxvb2sgYXQgdGhlIHN1bmtTaGlwcyBwcm9wZXJ0eSBhbmQgY29tcGFyZSBpdCB3aXRoIHRoZSBzdGF0ZSBvZiB0aGUgYm9hcmQgYWZ0ZXIgdGhlIGF0dGFja1xuICAgIGNvbnN0IHN1bmtTaGlwc0FycmF5ID0gZ2FtZS5nZXRQbGF5ZXJUd29TdW5rU2hpcHMoKS5sZW5ndGg7XG5cbiAgICBjb25zdCBjdXJyZW50QXR0YWNrID0gZ2FtZS5tYWtlTW92ZShnZXRTcXVhcmVJZFswXSk7XG4gICAgaWYgKCFjdXJyZW50QXR0YWNrKSB7XG4gICAgICBjb25zb2xlLmxvZygnQXR0YWNrIGNhbm5vdCBiZSByZWdpc3RlcmVkLiBSZXBlYXQgYWdhaW4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0F0dGFjayB3YXMgcmVnaXN0ZXJlZCcpO1xuICAgIH1cblxuICAgIC8vIENvbmZpcm0gaWYgYXR0YWNrIGhpdCBhIHNoaXAgb3IgaXMgYSBtaXNzZWQgc2hvdFxuICAgIGlmIChpc0luc2lkZVNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRhaW5zLXNoaXAnKSkge1xuICAgICAgaXNJbnNpZGVTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VjY2Vzc2Z1bC1zaG90Jyk7XG4gICAgICBjb25zb2xlLmxvZygnSGl0IGEgc2hpcCEhJyk7XG5cbiAgICAgIGlmIChzdW5rU2hpcHNBcnJheSAhPT0gZ2FtZS5nZXRQbGF5ZXJUd29TdW5rU2hpcHMoKS5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NpbmsgdGhlIHNoaXAhJyk7XG4gICAgICAgIGRpc2FibGVBZGphY2VudFNxdWFyZXNUb1N1bmtTaGlwcyhnYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXNJbnNpZGVTcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLXNob3QnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdNaXNzZWQgc2hvdCEhJyk7XG4gICAgfVxuICB9XG59XG5cbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbnN0IHN0YXR1c09mQnV0dG9uID0gc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdDtcblxuICBpZiAoc3RhdHVzT2ZCdXR0b24uY29udGFpbnMoJ25vdC1zdGFydGVkJykpIHtcbiAgICBzdGFydEdhbWVCdXR0b24uY2xhc3NMaXN0LnJlcGxhY2UoJ25vdC1zdGFydGVkJywgJ3N0YXJ0ZWQnKTtcbiAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgZ2FtZS4uLicpO1xuICAgIGdhbWUgPSBuZXcgR2FtZUxvb3AoKTtcbiAgICBhZGRIb3ZlckVmZmVjdFRvR3JpZFNxdWFyZXMoZ3JpZHMpO1xuICAgIGRpc3BsYXlTaGlwc09uQm9hcmRzKCk7XG4gIH0gZWxzZSBpZiAoc3RhdHVzT2ZCdXR0b24uY29udGFpbnMoJ3N0YXJ0ZWQnKSkge1xuICAgIGNvbnN0IGNvbmZpcm1NZXNzYWdlID0gY29uZmlybSgnRG8geW91IHJlYWxseSB3YW50IHRvIHN0YXJ0IGEgbmV3IGdhbWU/Jyk7XG4gICAgaWYgKGNvbmZpcm1NZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgbmV3IGdhbWUuLi4nKTtcbiAgICAgIGdhbWUgPSBuZXcgR2FtZUxvb3AoKTtcbiAgICAgIGNsZWFyUHJldmlvdXNCb2FyZHNWaXN1YWxzKGdyaWRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0tlZXBpbmcgdGhlIHJlbGV2YW50IGdhbWUhJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJldmlvdXNCb2FyZHNWaXN1YWxzKGJvYXJkcykge1xuICBib2FyZHMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgY29uc3QgZGl2c09mQm9hcmQgPSBbLi4uZGl2LmNoaWxkcmVuXTtcblxuICAgIGRpdnNPZkJvYXJkLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NWYWx1ZXMgPSBzcXVhcmUuY2xhc3NMaXN0O1xuXG4gICAgICBpZiAoY2xhc3NWYWx1ZXMuY29udGFpbnMoJ21pc3NlZC1zaG90JykpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3NlZC1zaG90Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc1ZhbHVlcy5jb250YWlucygnc3VjY2Vzc2Z1bC1zaG90JykpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3NmdWwtc2hvdCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NWYWx1ZXMuY29udGFpbnMoJ2FkamFjZW50LXRvLXN1bmstc2hpcCcpKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdhZGphY2VudC10by1zdW5rLXNoaXAnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEhvdmVyRWZmZWN0VG9HcmlkU3F1YXJlcyhkaXZzKSB7XG4gIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgY29uc3QgZGl2c09mT25lQm9hcmQgPSBbLi4uZGl2LmNoaWxkcmVuXTtcbiAgICBkaXZzT2ZPbmVCb2FyZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVwbGFjZSgnZGlzYWJsZWQnLCAnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb29wT3ZlckFsbERpdnNBbmRBcnJheVNxdWFyZXMoY3VycmVudEdhbWUsIHByb3BlcnR5KSB7XG4gIGNvbnN0IGh1bWFuR3JpZERpdnMgPSBbLi4uZ3JpZFNxdWFyZXNIdW1hbi5jaGlsZHJlbl07XG4gIGNvbnN0IGNvbXB1dGVyR3JpZERpdnMgPSBbLi4uZ3JpZFNxdWFyZXNDb21wdXRlci5jaGlsZHJlbl07XG4gIGNvbnN0IGh1bWFuQm9hcmQgPSBjdXJyZW50R2FtZS5nZXRIdW1hbkJvYXJkKCk7XG4gIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSBjdXJyZW50R2FtZS5nZXRDb21wdXRlckJvYXJkKCk7XG5cbiAgbGV0IGNvdW50ZXJGb3JBcnJheVdpdGhEaXZzID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBjb21wdXRlclNxdWFyZSA9IGJvYXJkQ29tcHV0ZXJbal1baV1bMF07XG4gICAgICBjb25zdCBodW1hblNxdWFyZSA9IGh1bWFuQm9hcmRbal1baV1bMF07XG5cbiAgICAgIGlmIChjb21wdXRlclNxdWFyZVtwcm9wZXJ0eV0pIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnY29udGFpbnNTaGlwJykge1xuICAgICAgICAgIGNvbXB1dGVyR3JpZERpdnNbY291bnRlckZvckFycmF5V2l0aERpdnNdLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAnY29udGFpbnMtc2hpcCdcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSAnaXNBZGphY2VudFRvU29tZVN1bmtTaGlwJykge1xuICAgICAgICAgIGNvbXB1dGVyR3JpZERpdnNbY291bnRlckZvckFycmF5V2l0aERpdnNdLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAnYWRqYWNlbnQtdG8tc3Vuay1zaGlwJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogICAgICAgaWYgKGh1bWFuU3F1YXJlW3Byb3BlcnR5XSkge1xuICAgICAgICBpZiAocHJvcGVydHkgPT09ICdjb250YWluU2hpcCcpIHtcbiAgICAgICAgICBodW1hbkdyaWREaXZzW2NvdW50ZXJGb3JBcnJheVdpdGhEaXZzXS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgJ2NvbnRhaW5zLXNoaXAnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ2lzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCcpIHtcbiAgICAgICAgICBodW1hbkdyaWREaXZzW2NvdW50ZXJGb3JBcnJheVdpdGhEaXZzXS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgJ2FkamFjZW50LXRvLXN1bmstc2hpcCdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9ICovXG5cbiAgICAgIGNvdW50ZXJGb3JBcnJheVdpdGhEaXZzKys7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTaGlwc09uQm9hcmRzKCkge1xuICBsb29wT3ZlckFsbERpdnNBbmRBcnJheVNxdWFyZXMoZ2FtZSwgJ2NvbnRhaW5zU2hpcCcpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQWRqYWNlbnRTcXVhcmVzVG9TdW5rU2hpcHMoKSB7XG4gIGxvb3BPdmVyQWxsRGl2c0FuZEFycmF5U3F1YXJlcyhnYW1lLCAnaXNBZGphY2VudFRvU29tZVN1bmtTaGlwJyk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vLi4vVUkvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZUdyaWQgfSBmcm9tICcuL3Zpc3VhbFBhcnQuanMnO1xuXG5nZW5lcmF0ZUdyaWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==