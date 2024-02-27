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
      }

      // Immediately terminate the game here if there is a board with "gameOver" set to true
      if (this.#findBoardWithGameOver()) {
        return false;
      } else {
        this.#passTurns();
        return true;
      }
    }

    if (this.attacksNow.name === 'Computer') {
      const computerMove = this.playerTwo.attackOpponent();

      this.#passTurns();
      return computerMove.join('');
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

    let x;
    let y;
    let attemptedAttack;

    do {
      const randomIndex = Math.floor(Math.random() * this.possibleMoves.length);
      x = Number(this.possibleMoves[randomIndex][0]);
      y = Number(this.possibleMoves[randomIndex][1]);

      attemptedAttack = this.enemyBoard.receiveAttack(x, y);
      this.possibleMoves = this.possibleMoves.filter((move) => {
        return move !== `${x}${y}`;
      });
    } while (!attemptedAttack);

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

// Make sure that clicks are not registered by the player on its own board while playing against the computer (before starting a game, it is important to select a game mode — 2 players or player vs AI)
grids.forEach((div) => {
  div.addEventListener('click', registerClicksOnBoards);
});
function registerClicksOnBoards(event) {
  if (!game) {
    console.log('Board is not active. Start game to active');
    return;
  }

  console.log(`${game.getWhoseTurnItIs()} attacks now`);
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
    console.log('Attack was registered');

    // Confirm if attack hit a ship or is a missed shot
    if (isInsideSquare.classList.contains('contains-ship')) {
      isInsideSquare.classList.add('successful-shot');
      console.log('Hit a ship!!');

      if (sunkShipsOfPlayerTwo !== game.getPlayerTwoSunkShips().length) {
        console.log('Sink the ship!');
        disableAdjacentSquaresToSunkShips(game);
      }
    } else {
      isInsideSquare.classList.add('missed-shot');
      console.log('Missed shot!!');
    }

    hightlightComputerMoves();

    // Game over
    // if (game.getWinner()) {
    //   console.log('GAME OVER!!!');
    // }
    // Allow the move that is a pre move to destroying all ships!!
  }
}

function hightlightComputerMoves() {
  console.log(`${game.getWhoseTurnItIs()} attacks now`);

  const sunkShipsOfPlayerOne = game.getPlayerOneSunkShips().length;
  const squareId = game.makeMove();
  const squares = [...gridSquaresHuman.children];
  let targettedSquare;

  squares.forEach((square) => {
    if (square.classList.contains(squareId)) {
      targettedSquare = square;
      console.log('Attack was registered...');
    }
  });

  if (targettedSquare.classList.contains('contains-ship')) {
    targettedSquare.classList.add('successful-shot');
    console.log('Hit a ship!');

    if (sunkShipsOfPlayerOne !== game.getPlayerOneSunkShips().length) {
      console.log('Sink the ship!');
      disableAdjacentSquaresToSunkShips(game);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SDhCO0FBQ1Q7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQztBQUNB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LE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMvT0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDbUI7O0FBRS9DLDREQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSS9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1VJL3N0eWxlcy5jc3M/OTQ4YyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3Zpc3VhbFBhcnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XG5cbiAgcGFkZGluZzogMjVweCA1MHB4O1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNjb250YWluZXIgLnRvcC1wYXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnN0YXJ0LWdhbWUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2NvbnRhaW5lciAubWFpbi1wYXJ0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDUwcHg7XG59XG5cbi5sZWZ0LXBhcnQsXG4ucmlnaHQtcGFydCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAzODBweDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sZWZ0LXBhcnQgPiBwLFxuLnJpZ2h0LXBhcnQgPiBwIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcbn1cblxuLm51bWJlci1ib2FyZC1pbmRleGVzLFxuLmxldHRlci1ib2FyZC1pbmRleGVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAycHg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICBmb250LXNpemU6IDEuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm51bWJlci1ib2FyZC1pbmRleGVzIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xuICBncmlkLWF1dG8tY29sdW1uczogMzBweDtcblxuICB0b3A6IDkwcHg7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbi5sZXR0ZXItYm9hcmQtaW5kZXhlcyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XG5cbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiA1MHB4O1xufVxuXG4uYm9hcmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xuICBnYXA6IDJweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLnNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc3F1YXJlLmNvbnRhaW5zLXNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnNxdWFyZS5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5zcXVhcmUuYWN0aXZlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5zcXVhcmUubWlzc2VkLXNob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uc3F1YXJlLnN1Y2Nlc3NmdWwtc2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNxdWFyZS5hZGphY2VudC10by1zdW5rLXNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvVUkvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7O0VBRTdCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4Qjs7RUFFOUIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHFCQUFxQjs7RUFFckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1Qjs7RUFFdkIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxvQkFBb0I7O0VBRXBCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxRQUFROztFQUVSLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcblxcbiAgcGFkZGluZzogMjVweCA1MHB4O1xcbiAgd2lkdGg6IDEwMDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI2NvbnRhaW5lciAudG9wLXBhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5zdGFydC1nYW1lLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2NvbnRhaW5lciAubWFpbi1wYXJ0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5sZWZ0LXBhcnQsXFxuLnJpZ2h0LXBhcnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAzODBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxlZnQtcGFydCA+IHAsXFxuLnJpZ2h0LXBhcnQgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5udW1iZXItYm9hcmQtaW5kZXhlcyxcXG4ubGV0dGVyLWJvYXJkLWluZGV4ZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMnB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5udW1iZXItYm9hcmQtaW5kZXhlcyB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxuICBncmlkLWF1dG8tY29sdW1uczogMzBweDtcXG5cXG4gIHRvcDogOTBweDtcXG4gIGxlZnQ6IDIwcHg7XFxufVxcblxcbi5sZXR0ZXItYm9hcmQtaW5kZXhlcyB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICBncmlkLWF1dG8tcm93czogMzBweDtcXG5cXG4gIHRvcDogNjBweDtcXG4gIGxlZnQ6IDUwcHg7XFxufVxcblxcbi5ib2FyZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxuICBnYXA6IDJweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zcXVhcmUuY29udGFpbnMtc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNxdWFyZS5kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uc3F1YXJlLmFjdGl2ZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5zcXVhcmUubWlzc2VkLXNob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnNxdWFyZS5zdWNjZXNzZnVsLXNob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uc3F1YXJlLmFkamFjZW50LXRvLXN1bmstc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuZXhwb3J0IHsgR2FtZUxvb3AgfTtcblxuY2xhc3MgR2FtZUxvb3Age1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmh1bWFuQm9hcmQgPSB0aGlzLiNwb3B1bGF0ZUJvYXJkV2l0aFNoaXBzKCdIdW1hbicpO1xuICAgIHRoaXMuY29tcHV0ZXJCb2FyZCA9IHRoaXMuI3BvcHVsYXRlQm9hcmRXaXRoU2hpcHMoJ0NvbXB1dGVyJyk7XG4gICAgdGhpcy5wbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdIdW1hbicsIHRoaXMuaHVtYW5Cb2FyZCwgdGhpcy5jb21wdXRlckJvYXJkKTtcbiAgICB0aGlzLnBsYXllclR3byA9IG5ldyBDb21wdXRlcihcbiAgICAgICdDb21wdXRlcicsXG4gICAgICB0aGlzLmNvbXB1dGVyQm9hcmQsXG4gICAgICB0aGlzLmh1bWFuQm9hcmRcbiAgICApO1xuICAgIHRoaXMuYXR0YWNrc05vdyA9IHRoaXMucGxheWVyT25lO1xuICAgIHRoaXMudGhlcmVJc0FXaW5uZXIgPSBudWxsO1xuICB9XG5cbiAgLy8gUGxhY2UgMTAgc2hpcHMgYXQgcHJldGVkZXJtaW5lZCBjb29kaW5hdGVzIGZvciBub3dcbiAgI3BvcHVsYXRlQm9hcmRXaXRoU2hpcHMocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbiAgICBpZiAocGxheWVyID09PSAnSHVtYW4nKSB7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoMSwgMCwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoMiwgOSwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoNSwgOSwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoOSwgOSwgMSk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoNywgMCwgMiwgJ2hvcicpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDQsIDQsIDIsICd2ZXInKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCg2LCA0LCAyLCAndmVyJyk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoMywgMCwgMywgJ2hvcicpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDksIDIsIDMsICd2ZXInKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCgwLCAzLCA0LCAndmVyJyk7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdDb21wdXRlcicpIHtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCgwLCAwLCAxKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCg5LCA5LCAxKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCgwLCA5LCAxKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCg5LCAwLCAxKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCgyLCAyLCAyLCAndmVyJyk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoNCwgMiwgMiwgJ3ZlcicpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDYsIDIsIDIsICdob3InKTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCgwLCA1LCAzLCAnaG9yJyk7XG4gICAgICBib2FyZC5wbGFjZVNoaXAoNCwgNSwgMywgJ2hvcicpO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKDgsIDQsIDQsICd2ZXInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICAjcGFzc1R1cm5zKCkge1xuICAgIHRoaXMuYXR0YWNrc05vdy5uYW1lID09PSAnSHVtYW4nXG4gICAgICA/ICh0aGlzLmF0dGFja3NOb3cgPSB0aGlzLnBsYXllclR3bylcbiAgICAgIDogKHRoaXMuYXR0YWNrc05vdyA9IHRoaXMucGxheWVyT25lKTtcbiAgfVxuXG4gICNmaW5kQm9hcmRXaXRoR2FtZU92ZXIoKSB7XG4gICAgaWYgKHRoaXMuaHVtYW5Cb2FyZC5nYW1lT3Zlcikge1xuICAgICAgdGhpcy50aGVyZUlzQVdpbm5lciA9IHRoaXMucGxheWVyVHdvLm5hbWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcHV0ZXJCb2FyZC5nYW1lT3Zlcikge1xuICAgICAgdGhpcy50aGVyZUlzQVdpbm5lciA9IHRoaXMucGxheWVyT25lLm5hbWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VNb3ZlKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMudGhlcmVJc0FXaW5uZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdHRhY2tzTm93Lm5hbWUgPT09ICdIdW1hbicpIHtcbiAgICAgIGNvbnN0IG1vdmUgPSBjb29yZGluYXRlc1swXTtcbiAgICAgIGNvbnN0IHggPSBOdW1iZXIobW92ZVswXSk7XG4gICAgICBjb25zdCB5ID0gTnVtYmVyKG1vdmVbMV0pO1xuICAgICAgLy8gQ2hlY2sgaWYgbW92ZSB3YXMgc3VjY2Vzc2Z1bC4gSWYgbm90IHJlcGVhdCBpdCBhZ2Fpbj8/XG4gICAgICBpZiAoIXRoaXMucGxheWVyT25lLmF0dGFja09wcG9uZW50KHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gSW1tZWRpYXRlbHkgdGVybWluYXRlIHRoZSBnYW1lIGhlcmUgaWYgdGhlcmUgaXMgYSBib2FyZCB3aXRoIFwiZ2FtZU92ZXJcIiBzZXQgdG8gdHJ1ZVxuICAgICAgaWYgKHRoaXMuI2ZpbmRCb2FyZFdpdGhHYW1lT3ZlcigpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI3Bhc3NUdXJucygpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdHRhY2tzTm93Lm5hbWUgPT09ICdDb21wdXRlcicpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVyTW92ZSA9IHRoaXMucGxheWVyVHdvLmF0dGFja09wcG9uZW50KCk7XG5cbiAgICAgIHRoaXMuI3Bhc3NUdXJucygpO1xuICAgICAgcmV0dXJuIGNvbXB1dGVyTW92ZS5qb2luKCcnKTtcbiAgICB9XG4gIH1cblxuICBnZXRXaG9zZVR1cm5JdElzKCkge1xuICAgIHJldHVybiB0aGlzLmF0dGFja3NOb3cubmFtZTtcbiAgfVxuXG4gIGdldFdpbm5lcigpIHtcbiAgICByZXR1cm4gdGhpcy50aGVyZUlzQVdpbm5lcjtcbiAgfVxuXG4gIGdldEh1bWFuQm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHVtYW5Cb2FyZC5ib2FyZDtcbiAgfVxuXG4gIGdldENvbXB1dGVyQm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcHV0ZXJCb2FyZC5ib2FyZDtcbiAgfVxuXG4gIGdldFBsYXllck9uZVN1bmtTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJPbmUub3duQm9hcmQuZ2V0U3Vua1NoaXBzUHJvcGVydHkoKTtcbiAgfVxuXG4gIGdldFBsYXllclR3b1N1bmtTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXJUd28ub3duQm9hcmQuZ2V0U3Vua1NoaXBzUHJvcGVydHkoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuI2NyZWF0ZUdhbWVib2FyZCgpO1xuICAgIHRoaXMuYWxsU2hpcHMgPSBbXTtcbiAgICB0aGlzLnN1bmtTaGlwcyA9IFtdO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgfVxuXG4gICNjcmVhdGVHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgLy8gSW4gZWFjaCBzcXVhcmUgb2YgdGhlIGJvYXJkLCB0aGVyZSBpcyBhbiBvYmplY3Qgd2l0aCBhIGZldyBwcm9wZXJ0aWVzIHRvIGNvbnRyb2wgdGhlIGdhbWUncyBsb2dpY1xuICAgICAgICBib2FyZFtpXS5wdXNoKFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250YWluc1NoaXA6IGZhbHNlLFxuICAgICAgICAgICAgaXNBZGphY2VudFRvU29tZVNoaXA6IGZhbHNlLFxuICAgICAgICAgICAgaXNBZGphY2VudFRvU29tZVN1bmtTaGlwOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc0JlZW5UYXJnZXR0ZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICAvLyBIZWxwZXJzIGZvciBwbGFjZVNoaXAoKVxuICAjZml0SW5Cb2FyZExpbWl0cyguLi5jb29yZGluYXRlcykge1xuICAgIGNvbnN0IGFycmF5V2l0aENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgY29uc3QgeCA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IHkgPSBhcnJheVdpdGhDb29yZGluYXRlc1sxXTtcblxuICAgIC8vIEFyZ3VtZW50cyBvZiB0aGlzIG1ldGhvZCBjb21lIGluIHR3byBkaWZmZXJlbnQgZmxhdm9ycyDigJQgdGhleSBjYW4gYmUgZWl0aGVyIGluZGl2aWR1YWwgWCBhbmQgWSB2YWx1ZXMgKGNhc2Ugd2l0aCBhIDEtc3F1YXJlIHNoaXApLCBvciBhcnJheXMgd2l0aCBjb21iaW5hdGlvbnMgb2YgWCBhbmQgWSB2YWx1ZXMgKGNhc2Ugd2l0aCBtdWx0aXBsZS1zcXVhcmUgc2hpcHMpXG4gICAgLy8gSXQgaXMgbmVjZXNzYXJ5IHRvIGNoZWNrIG9ubHkgaWYgdGhleSBhcmUgZ3JlYXRlciB0aGFuIDkgaW4gdGhlIGNvbnRleHQgb2YgYXJyYXlzLCBiZWNhdXNlIHNoaXBzIGFyZSBleHBhbmRlZCB0byB0aGUgcmlnaHQvZG93biBieSBkZWZhdWx0IOKAlCBhIHR3by1zcXVhcmUgc2hpcCBwbGFjZWQgaG9yaXpvbnRhbGx5IGF0IFswLDBdIHBvcHVsYXRlcyB0byBbMCwwXSwgWzEsMF0gYW5kIG5ldmVyIHRvIFswLDBdLCBbLTEsIDBdXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeCkgJiYgQXJyYXkuaXNBcnJheSh5KSkge1xuICAgICAgY29uc3QgdmFsdWVzWEFuZFkgPSBbLi4ueCwgLi4ueV07XG4gICAgICBjb25zdCB4T3JZSXNPdXRzaWRlQm9hcmQgPSB2YWx1ZXNYQW5kWS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSA+IDkpO1xuICAgICAgaWYgKHhPcllJc091dHNpZGVCb2FyZC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggPiA5IHx8IHkgPiA5IHx8IHggPCAwIHx8IHkgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gICNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgYXJyYXlXaXRoQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICBjb25zdCBjb29yZGluYXRlWCA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVZID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMV07XG4gICAgY29uc3QgcHJvcGVydHkgPSBhcnJheVdpdGhDb29yZGluYXRlc1syXTtcblxuICAgIC8vIFVzZSB0d28gYXJyYXlzIGZpbGxlZCB3aXRoIGFsbCBwb3NzaWJsZSBvcHRpb25zIGZvciBhZGphY2VudCBzcXVhcmVzXG4gICAgLy8gQSBzcXVhcmUgY2FuIGhhdmUgOCBhZGphY2VudCBzcXVhcmVzIGF0IG1vc3RcbiAgICBjb25zdCBhZGphY2VudENvb3JkaW5hdGVzT2ZYID0gWy0xLCAwLCAxLCAxLCAxLCAwLCAtMSwgLTFdO1xuICAgIGNvbnN0IGFkamFjZW50Q29vcmRpbmF0ZXNPZlkgPSBbLTEsIC0xLCAtMSwgMCwgMSwgMSwgMSwgMF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgY29uc3QgeCA9IGNvb3JkaW5hdGVYICsgYWRqYWNlbnRDb29yZGluYXRlc09mWFtpXTtcbiAgICAgIGNvbnN0IHkgPSBjb29yZGluYXRlWSArIGFkamFjZW50Q29vcmRpbmF0ZXNPZllbaV07XG5cbiAgICAgIGlmICh4ID4gOSB8fCB5ID4gOSB8fCB4IDwgMCB8fCB5IDwgMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmNvbnRhaW5zU2hpcCkge1xuICAgICAgICAvLyBTcXVhcmVzIHRoYXQgYXJlIGEgcGFydCBvZiB0aGUgc2hpcCBtdXN0IG5vdCBiZSByZXNlcnZlZCBiZWNhdXNlIHRoZXkgYXJlIG5vdCBhZGphY2VudCBpbiBhbnkgY2FzZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BlcnR5ID09PSAnaXNBZGphY2VudFRvU29tZVNoaXAnKSB7XG4gICAgICAgIHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5pc0FkamFjZW50VG9Tb21lU2hpcCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSAnaXNBZGphY2VudFRvU29tZVN1bmtTaGlwJykge1xuICAgICAgICB0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuaXNBZGphY2VudFRvU29tZVN1bmtTaGlwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjY29uZmlybUNvb3JkaW5hdGVzQXJlTm90QXZhaWxhYmxlKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgcmVzdWx0T2ZIZWxwZXIgPSB0aGlzLiNhY2Nlc3NQcm9wZXJ0eU9uU2hpcE9iamVjdChcbiAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgJ2NvbnRhaW5zU2hpcCdcbiAgICApO1xuICAgIHJldHVybiByZXN1bHRPZkhlbHBlcjtcbiAgfVxuXG4gICNzdGFuZEluQW5vdGhlclNoaXBBZGphY2VudFNxdWFyZXMoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCByZXN1bHRPZkhlbHBlciA9IHRoaXMuI2FjY2Vzc1Byb3BlcnR5T25TaGlwT2JqZWN0KFxuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAnaXNBZGphY2VudFRvU29tZVNoaXAnXG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0T2ZIZWxwZXI7XG4gIH1cblxuICAvLyBVc2UgdGhlIHJlc3Qgb3BlcmF0b3IgdG8gcGxhY2UgYWxsIGFyZ3VtZW50cyBpbnRvIG9uZSBhcnJheSBhbmQgdGhlbiBleHRyYWN0IHNwZWNpZmljIHBhcnRzIG9mIGl0XG4gICNhY2Nlc3NQcm9wZXJ0eU9uU2hpcE9iamVjdCguLi5jb29yZGluYXRlc0FuZFByb3BlcnR5KSB7XG4gICAgY29uc3QgYXJyYXlXaXRoQXJndW1lbnRzID0gY29vcmRpbmF0ZXNBbmRQcm9wZXJ0eTtcbiAgICBjb25zdCB4ID0gYXJyYXlXaXRoQXJndW1lbnRzWzBdWzBdO1xuICAgIGNvbnN0IHkgPSBhcnJheVdpdGhBcmd1bWVudHNbMF1bMV07XG4gICAgY29uc3QgcHJvcGVydHkgPSBhcnJheVdpdGhBcmd1bWVudHNbMV07XG5cbiAgICBsZXQgd2lsbENhbmNlbFNoaXBDcmVhdGlvbjtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSAmJiBBcnJheS5pc0FycmF5KHkpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gQWNjZXNzIGEgcHJvcGVydHkgb24gdGhlIHNoaXAgd2l0aCB3aGljaCB0aGUgbWV0aG9kIHdhcyBjYWxsZWQgaW4gYSBsZXNzIGhhcmQtY29kZWQgbWFubmVyIHdpdGggYSBkb3Qgbm90YXRpb25cbiAgICAgICAgd2lsbENhbmNlbFNoaXBDcmVhdGlvbiA9IHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4W2ldLCB5W2ldKVtcbiAgICAgICAgICBwcm9wZXJ0eVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmICh3aWxsQ2FuY2VsU2hpcENyZWF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2lsbENhbmNlbFNoaXBDcmVhdGlvbiA9IHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KVtwcm9wZXJ0eV07XG5cbiAgICAgIGlmICh3aWxsQ2FuY2VsU2hpcENyZWF0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNjb21wYXJlQWdhaW5zdExpbWl0Q29uZGl0aW9ucyh4LCB5KSB7XG4gICAgaWYgKCF0aGlzLiNmaXRJbkJvYXJkTGltaXRzKHgsIHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLiNjb25maXJtQ29vcmRpbmF0ZXNBcmVOb3RBdmFpbGFibGUoeCwgeSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuI3N0YW5kSW5Bbm90aGVyU2hpcEFkamFjZW50U3F1YXJlcyh4LCB5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwbGFjZVNoaXAoeCwgeSwgc2hpcFNpemUsIGRpcmVjdGlvbiA9ICdob3InKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNoaXBTaXplKTtcblxuICAgIGlmIChzaGlwLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIENyZWF0ZSB0d28gYXJyYXlzIHRvIHBsYWNlIHNoaXBzIG92ZXIgbXVsdGlwbGUgc3F1YXJlcywgZG9pbmcgaXQgaW4gYm90aCBkaXJlY3Rpb25zXG4gICAgICBjb25zdCBhbGxWYWx1ZXNPZlggPSBbXTtcbiAgICAgIGNvbnN0IGFsbFZhbHVlc09mWSA9IFtdO1xuXG4gICAgICAvLyBJZiBwbGFjZWQgaG9yaXpvbnRhbGx5LCB0aGUgc2hpcCdzIGZpcnN0IHNxdWFyZSB3aWxsIGdlbmVyYXRlIHRoZSByZXN0IG9mIHNxdWFyZXMgdG8gdGhlIHJpZ2h0LCB3aXRob3V0IGNoYW5naW5nIHRoZSByb3dcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3InKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFsbFZhbHVlc09mWC5wdXNoKHgpO1xuICAgICAgICAgIGFsbFZhbHVlc09mWS5wdXNoKHkpO1xuICAgICAgICAgIHggKz0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBwbGFjZWQgdmVydGljYWxseSwgdGhlIHNoaXAncyBmaXJzdCBzcXVhcmUgd2lsbCBnZW5lcmF0ZSB0aGUgcmVzdCBvZiBzcXVhcmVzIGRvd24sIHdpdGhvdXQgY2hhbmdpbmcgdGhlIGNvbHVtblxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXInKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFsbFZhbHVlc09mWC5wdXNoKHgpO1xuICAgICAgICAgIGFsbFZhbHVlc09mWS5wdXNoKHkpO1xuICAgICAgICAgIHkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiBhbnkgb2YgdGhlIHJlc3RyaWN0aW9ucyBpcyB2aW9sYXRlZCBiZWZvcmUgcGxhY2luZyBhIHNoaXAuIElmIHllcywgdGhlIHNoaXAgaXMgbm90IHBsYWNlZCBvbiB0aGUgYm9hcmRcbiAgICAgIGlmICghdGhpcy4jY29tcGFyZUFnYWluc3RMaW1pdENvbmRpdGlvbnMoYWxsVmFsdWVzT2ZYLCBhbGxWYWx1ZXNPZlkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyhcbiAgICAgICAgICBhbGxWYWx1ZXNPZlhbaV0sXG4gICAgICAgICAgYWxsVmFsdWVzT2ZZW2ldXG4gICAgICAgICkuY29udGFpbnNTaGlwID0gc2hpcDtcblxuICAgICAgICAvLyBTdG9yZSBzaGlwcyBpbnNpZGUgdGhlIGFsbFNoaXBzIGFycmF5IHdpdGggdGhlaXIgY29vcmRpbmF0ZXMgdG8gYmUgYWJsZSB0byBlYXNpZXIgYW5zd2VyIGlmIHRoZSBhdHRhY2tlZCBjb29yZGluYXRlcyBiZWxvbmcgdG8gYW55IHNoaXBcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmFsbFNoaXBzLnB1c2goe1xuICAgICAgICAgICAgc2hpcEluc3RhbmNlOiBzaGlwLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtbYWxsVmFsdWVzT2ZYW2ldLCBhbGxWYWx1ZXNPZllbaV1dXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFsbFNoaXBzXG4gICAgICAgICAgICAuYXQoLTEpXG4gICAgICAgICAgICAuY29vcmRpbmF0ZXMucHVzaChbYWxsVmFsdWVzT2ZYW2ldLCBhbGxWYWx1ZXNPZllbaV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBLZWVwIHJlc2VydmVBZGphY2VudFNxdWFyZXMoKSBpbiBhIHNlcGFyYXRlIGxvb3AgYmVjYXVzZSBpdCBpcyBpbXBvcnRhbnQgYWxsIHNoaXBzIHRvIGJlIHByaW9ybHkgY3JlYXRlZCB0byByZXNlcnZlIG9ubHkgdHJ1bHkgYWRqYWNlbnQgc3F1YXJlcy4gVGhlIG90aGVyIDIgc3F1YXJlcyBvZiBhIHNoaXAgd2l0aCB0aGUgbGVuZ3RoIG9mIDMgYXJlIG5vdCBhZGphY2VudDsgVGhleSBhcmUgYSBwYXJ0IG9mIHRoZSBzaGlwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy4jcmVzZXJ2ZUFkamFjZW50U3F1YXJlcyhcbiAgICAgICAgICBhbGxWYWx1ZXNPZlhbaV0sXG4gICAgICAgICAgYWxsVmFsdWVzT2ZZW2ldLFxuICAgICAgICAgICdpc0FkamFjZW50VG9Tb21lU2hpcCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXAubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAoIXRoaXMuI2NvbXBhcmVBZ2FpbnN0TGltaXRDb25kaXRpb25zKHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmNvbnRhaW5zU2hpcCA9IHNoaXA7XG4gICAgICB0aGlzLiNyZXNlcnZlQWRqYWNlbnRTcXVhcmVzKHgsIHksICdpc0FkamFjZW50VG9Tb21lU2hpcCcpO1xuICAgICAgdGhpcy5hbGxTaGlwcy5wdXNoKHsgc2hpcEluc3RhbmNlOiBzaGlwLCBjb29yZGluYXRlczogW3gsIHldIH0pO1xuICAgIH1cbiAgICAvLyBUbyBjb25maXJtIHRoYXQgdGhlIHNoaXAgaGFzIGJlZW4gcGxhY2VkIHN1Y2Nlc3NmdWxseVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gSGVscGVycyBmb3IgcmVjZWl2ZUF0dGFjaygpXG4gICN0YXJnZXRDb29yZGluYXRlc091dHNpZGVCb2FyZChhcnJheVdpdGhDb29yZGluYXRlcykge1xuICAgIGNvbnN0IGF0dGFja0lzT3V0c2lkZUJvYXJkID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXMuZmlsdGVyKChjb29yZGluYXRlKSA9PiB7XG4gICAgICByZXR1cm4gY29vcmRpbmF0ZSA+IDkgfHwgY29vcmRpbmF0ZSA8IDA7XG4gICAgfSk7XG5cbiAgICBpZiAoYXR0YWNrSXNPdXRzaWRlQm9hcmQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gICNjb25maXJtU3F1YXJlc0FyZU5vdEF2YWlsYWJsZShhcnJheVdpdGhDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHggPSBhcnJheVdpdGhDb29yZGluYXRlc1swXTtcbiAgICBjb25zdCB5ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMV07XG5cbiAgICBpZiAodGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmhhc0JlZW5UYXJnZXR0ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5nZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpLmlzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjZmluZFRhcmdldHRlZFNoaXAoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCB4ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzFdO1xuXG4gICAgaWYgKHRoaXMuZ2V0SW5mb0F0Qm9hcmRDb29yZGluYXRlcyh4LCB5KS5jb250YWluc1NoaXApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgI2NoZWNrSWZBbGxTaGlwc0hhdmVCZWVuRGVzdHJveWVkKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuYWxsU2hpcHMubGVuZ3RoID09PSB0aGlzLnN1bmtTaGlwcy5sZW5ndGggJiZcbiAgICAgIHRoaXMuYWxsU2hpcHMubGVuZ3RoICYmXG4gICAgICB0aGlzLnN1bmtTaGlwcy5sZW5ndGhcbiAgICApIHtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gICNjaGVja0dhbWVTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5nYW1lT3Zlcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAjY2hlY2tJZkF0dGFja0lzQWxsb3dlZChhcnJheVdpdGhDb29yZGluYXRlcykge1xuICAgIGlmICh0aGlzLiNjaGVja0dhbWVTdGF0ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLiN0YXJnZXRDb29yZGluYXRlc091dHNpZGVCb2FyZChhcnJheVdpdGhDb29yZGluYXRlcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuI2NvbmZpcm1TcXVhcmVzQXJlTm90QXZhaWxhYmxlKGFycmF5V2l0aENvb3JkaW5hdGVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKC4uLnBhaXJPZkNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgYXJyYXlXaXRoQ29vcmRpbmF0ZXMgPSBwYWlyT2ZDb29yZGluYXRlcztcbiAgICBjb25zdCB4ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeSA9IGFycmF5V2l0aENvb3JkaW5hdGVzWzFdO1xuXG4gICAgaWYgKCF0aGlzLiNjaGVja0lmQXR0YWNrSXNBbGxvd2VkKGFycmF5V2l0aENvb3JkaW5hdGVzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGhhc0JlZW5UYXJnZXR0ZWQgcHJvcGVydHkgY2FuIGVpdGhlciBtZWFuIGEgc3VjY2Vzc2Z1bCBhdHRhY2sgKGhpdCBhIHNoaXApIG9yIGEgZmFpbGVkIG9uZSAoYSBtaXNzZWQgc2hvdClcbiAgICB0aGlzLmdldEluZm9BdEJvYXJkQ29vcmRpbmF0ZXMoeCwgeSkuaGFzQmVlblRhcmdldHRlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuI2ZpbmRUYXJnZXR0ZWRTaGlwKGFycmF5V2l0aENvb3JkaW5hdGVzKSkge1xuICAgICAgY29uc3QgdGFyZ2V0dGVkU2hpcCA9IHRoaXMuZ2V0U3BlY2lmaWNTaGlwKHgsIHkpO1xuICAgICAgdGFyZ2V0dGVkU2hpcC5oaXQoKTtcblxuICAgICAgaWYgKHRhcmdldHRlZFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgdGhpcy5zdW5rU2hpcHMucHVzaCh0YXJnZXR0ZWRTaGlwKTtcbiAgICAgICAgY29uc3Qgc2hpcFNxdWFyZXMgPSB0aGlzLmdldFNwZWNpZmljU2hpcCh4LCB5LCAnY29vcmRpbmF0ZXMnKTtcblxuICAgICAgICAvLyBTcXVhcmVzIGFyb3VuZCBhIHN1bmsgc2hpcCBhcmUgbm90IHBvc3NpYmxlIGZvciBhdHRhY2tzIGJlY2F1c2UgdGhleSBjYW5ub3QgY29udGFpbiBhbm90aGVyIHNoaXAgYmFzZWQgb24gdGhlIHJ1bGVzIG9mIHNoaXBzJyBwbGFjaW5nIOKAlCB0aGVyZSBtdXN0IGJlIGEgb25lLXNxdWFyZSBnYXAgYmV0d2VlbiB0d28gZGlmZmVyZW50IHNoaXBzXG4gICAgICAgIGlmICh0YXJnZXR0ZWRTaGlwLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuI3Jlc2VydmVBZGphY2VudFNxdWFyZXMoXG4gICAgICAgICAgICBzaGlwU3F1YXJlc1swXSxcbiAgICAgICAgICAgIHNoaXBTcXVhcmVzWzFdLFxuICAgICAgICAgICAgJ2lzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCdcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuI3Jlc2VydmVBZGphY2VudFNxdWFyZXMoXG4gICAgICAgICAgICAgIHNoaXBTcXVhcmVzW2ldWzBdLFxuICAgICAgICAgICAgICBzaGlwU3F1YXJlc1tpXVsxXSxcbiAgICAgICAgICAgICAgJ2lzQWRqYWNlbnRUb1NvbWVTdW5rU2hpcCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdhbWVib2FyZCBzaG91bGQga2VlcCB0cmFjayBvZiBpdHMgdGVybWluYXRpb24gc3RhdGUgYmVjYXVzZSBHYW1lTG9vcCB3aWxsIHJlbHkgb24gaXQgbGF0ZXJcbiAgICAgICAgdGhpcy4jY2hlY2tJZkFsbFNoaXBzSGF2ZUJlZW5EZXN0cm95ZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRJbmZvQXRCb2FyZENvb3JkaW5hdGVzKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5hdCh4KS5hdCh5KS5hdCgwKTtcbiAgfVxuXG4gIGdldEFsbFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLmFsbFNoaXBzO1xuICB9XG5cbiAgZ2V0U3Vua1NoaXBzUHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vua1NoaXBzO1xuICB9XG5cbiAgZ2V0U3BlY2lmaWNTaGlwKHgsIHksIHByb3BlcnR5ID0gJ3NoaXBJbnN0YW5jZScpIHtcbiAgICAvLyBBcnJheSBhbGxTaGlwcyBpcyBhbiBhcnJheSBmZWF0dXJpbmcgb2JqZWN0cyB3aXRoIHRoZSAnc2hpcEluc3RhbmNlJyBhbmQgJ2Nvb3JkaW5hdGVzJyBwcm9wZXJ0aWVzXG4gICAgLy8gSWYgaW5zaWRlICdzaGlwSW5zdGFuY2UnIHRoZXJlIGlzIGEgc2hpcCB3aXRoIHRoZSBsZW5ndGggb2YgMSwgdGhlbiBpdHMgY29vcmRpbmF0ZXMgYXJlIHN0b3JlZCBpbnNpZGUgYSBzaW5nbGUgYXJyYXkg4oCUIFsuLi5dXG4gICAgLy8gSG93ZXZlciwgaWYgaXQncyBhIGxvbmdlciBzaGlwLCB0aGVuIGEgZmV3IGRpZmZlcmVudCBjb29yZGluYXRlcyBhcmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzaGlwIGFuZCBhdHRhY2tpbmcgYW55IG9mIHRoZW0gc2hvdWxkIGhpdCB0aGF0IHNoaXAuIEluIHRoYXQgY2FzZSwgc3RvcmUgaW5kaXZpZHVhbCBjb29yZGluYXRlcyBpbnNpZGUgYW5vdGhlciBhcnJheSDigJQgW1suLi5dLCBbLi4uXV1cbiAgICBjb25zdCBzaGlwID0gdGhpcy5nZXRBbGxTaGlwcygpLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uY29vcmRpbmF0ZXNbMF0pKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmNvb3JkaW5hdGVzWzBdID09PSB4ICYmIGl0ZW0uY29vcmRpbmF0ZXNbMV0gPT09IHlcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uY29vcmRpbmF0ZXNbaV1bMF0gPT09IHggJiYgaXRlbS5jb29yZGluYXRlc1tpXVsxXSA9PT0geSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwWzBdW3Byb3BlcnR5XTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgUGxheWVyLCBDb21wdXRlciB9O1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBib2FyZE9uZSwgYm9hcmRUd28pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub3duQm9hcmQgPSBib2FyZE9uZTtcbiAgICB0aGlzLmVuZW15Qm9hcmQgPSBib2FyZFR3bztcbiAgfVxuXG4gIGF0dGFja09wcG9uZW50KHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5lbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH1cbn1cblxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBib2FyZE9uZSwgYm9hcmRUd28pIHtcbiAgICBzdXBlcihuYW1lLCBib2FyZE9uZSwgYm9hcmRUd28pO1xuICAgIHRoaXMucG9zc2libGVNb3ZlcyA9IHRoaXMuI2NyZWF0ZUFsbFBvc3NpYmxlTW92ZXMoKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBhbGwgcG9zc2libGUgbW92ZXMuIEFmdGVyIGVhY2ggbW92ZSwgdGhhdCBtb3ZlIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgZnJvbSBwb3NzaWJsZU1vdmVzIHNvIHRoYXQgbW92ZXMgYXJlIG5ldmVyIHJlcGVhdGVkXG4gICNjcmVhdGVBbGxQb3NzaWJsZU1vdmVzKCkge1xuICAgIGNvbnN0IG1vdmVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBtb3Zlcy5wdXNoKGAke2l9JHtqfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb3ZlcztcbiAgfVxuXG4gIGF0dGFja09wcG9uZW50KCkge1xuICAgIGlmICghdGhpcy5wb3NzaWJsZU1vdmVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGxldCBhdHRlbXB0ZWRBdHRhY2s7XG5cbiAgICBkbyB7XG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9zc2libGVNb3Zlcy5sZW5ndGgpO1xuICAgICAgeCA9IE51bWJlcih0aGlzLnBvc3NpYmxlTW92ZXNbcmFuZG9tSW5kZXhdWzBdKTtcbiAgICAgIHkgPSBOdW1iZXIodGhpcy5wb3NzaWJsZU1vdmVzW3JhbmRvbUluZGV4XVsxXSk7XG5cbiAgICAgIGF0dGVtcHRlZEF0dGFjayA9IHRoaXMuZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgdGhpcy5wb3NzaWJsZU1vdmVzID0gdGhpcy5wb3NzaWJsZU1vdmVzLmZpbHRlcigobW92ZSkgPT4ge1xuICAgICAgICByZXR1cm4gbW92ZSAhPT0gYCR7eH0ke3l9YDtcbiAgICAgIH0pO1xuICAgIH0gd2hpbGUgKCFhdHRlbXB0ZWRBdHRhY2spO1xuXG4gICAgcmV0dXJuIFt4LCB5XTsgLy8gUmV0dXJuIGFuIGFycmF5IG9mIGNvb3JkaW5hdGVzIHRvIHBhc3MgYSB0ZXN0IHRoYXQgZW5zdXJlcyBDb21wdXRlciBkb2VzIGhpdCB0aGUgUGxheWVyJ3MgYm9hcmQgYXQgdGhlIGNvb3JkaW5hdGVzXG4gIH1cblxuICBnZXRMZW5ndGhPZlBvc3NpYmxlTW92ZXNBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NzaWJsZU1vdmVzLmxlbmd0aDtcbiAgfVxufVxuIiwiZXhwb3J0IHsgU2hpcCB9O1xuY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmlzU3VuaygpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZXNIaXQgKz0gMTtcbiAgICB9XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLnRpbWVzSGl0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldFRpbWVzSGl0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZXNIaXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVMb29wIH0gZnJvbSAnLi9nYW1lTG9vcCc7XG5leHBvcnQgeyBnZW5lcmF0ZUdyaWQgfTtcblxuLy8gU2VsZWN0IERPTSBlbGVtZW50c1xuY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUtYnV0dG9uJyk7XG5jb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1ncmlkJyk7XG5jb25zdCBudW1iZXJHcmlkSW5kZXhlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5udW1iZXItYm9hcmQtaW5kZXhlcycpO1xuY29uc3QgbGV0dGVyR3JpZEluZGV4ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGV0dGVyLWJvYXJkLWluZGV4ZXMnKTtcbmNvbnN0IGdyaWRTcXVhcmVzSHVtYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtZ3JpZC5odW1hbicpO1xuY29uc3QgZ3JpZFNxdWFyZXNDb21wdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1ncmlkLmNvbXB1dGVyJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEFwcGVuZEVsZW1lbnQoZWxlbWVudFR5cGUsIGFwcGVuZFRvLCAuLi5jbGFzc0FyZykge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gIGFwcGVuZFRvLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gIGlmIChjbGFzc0FyZy5sZW5ndGgpIHtcbiAgICBjbGFzc0FyZy5mb3JFYWNoKChjbGFzc1ZhbHVlKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NWYWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGluIGluZGV4LmpzXG5mdW5jdGlvbiBnZW5lcmF0ZUdyaWQoKSB7XG4gIGdyaWRzLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVBbmRBcHBlbmRFbGVtZW50KCdkaXYnLCBkaXYsICdzcXVhcmUnLCAnZGlzYWJsZWQnKTtcblxuICAgICAgLy8gQWRkIGlkcyBmb3Igc3F1YXJlcyB0byB0aWUgYXJyYXkgYm9hcmRzIHdpdGggZ3JpZC4gUmV2ZXJzZSB0aGVtIGJlY2F1c2UgZmlyc3QgY29vcmRpbmF0ZSBpcyBYLCBzbyBpdCBjaGFuZ2VzIG1vcmUgZnJlcXVlbnRseVxuICAgICAgaWYgKGkgPCAxMCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoaSArICcwJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXZlcnNlZElkID0gU3RyaW5nKGkpLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChyZXZlcnNlZElkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIG51bWJlckdyaWRJbmRleGVzLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQW5kQXBwZW5kRWxlbWVudCgnZGl2JywgcG9zaXRpb24sICdib2FyZC1wb3NpdGlvbicpO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGk7XG4gICAgfVxuICB9KTtcblxuICBsZXR0ZXJHcmlkSW5kZXhlcy5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSic7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQW5kQXBwZW5kRWxlbWVudCgnZGl2JywgcG9zaXRpb24sICdib2FyZC1wb3NpdGlvbicpO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNoYXJhY3RlcnNbaV07XG4gICAgfVxuICB9KTtcbn1cblxuLy8gVmFyaWJsZSBob2xkaW5nIGdhbWVMb29wIG9iamVjdCwgdXBkYXRpbmcgaXRzIGlubmVyIHN0YXRlIHdpdGggXCJTdGFydCBnYW1lXCJcbmxldCBnYW1lID0gZmFsc2U7XG5cbi8vIE1ha2Ugc3VyZSB0aGF0IGNsaWNrcyBhcmUgbm90IHJlZ2lzdGVyZWQgYnkgdGhlIHBsYXllciBvbiBpdHMgb3duIGJvYXJkIHdoaWxlIHBsYXlpbmcgYWdhaW5zdCB0aGUgY29tcHV0ZXIgKGJlZm9yZSBzdGFydGluZyBhIGdhbWUsIGl0IGlzIGltcG9ydGFudCB0byBzZWxlY3QgYSBnYW1lIG1vZGUg4oCUIDIgcGxheWVycyBvciBwbGF5ZXIgdnMgQUkpXG5ncmlkcy5mb3JFYWNoKChkaXYpID0+IHtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVnaXN0ZXJDbGlja3NPbkJvYXJkcyk7XG59KTtcbmZ1bmN0aW9uIHJlZ2lzdGVyQ2xpY2tzT25Cb2FyZHMoZXZlbnQpIHtcbiAgaWYgKCFnYW1lKSB7XG4gICAgY29uc29sZS5sb2coJ0JvYXJkIGlzIG5vdCBhY3RpdmUuIFN0YXJ0IGdhbWUgdG8gYWN0aXZlJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc29sZS5sb2coYCR7Z2FtZS5nZXRXaG9zZVR1cm5JdElzKCl9IGF0dGFja3Mgbm93YCk7XG4gIC8vIEFwcGx5IGV2ZW50IGRlbGVnYXRpb25zIHRvIGJvYXJkIGdyaWRzXG4gIGNvbnN0IGlzSW5zaWRlU3F1YXJlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5zcXVhcmUnKTtcbiAgaWYgKCFpc0luc2lkZVNxdWFyZSkgcmV0dXJuO1xuXG4gIGNvbnN0IGdldFNxdWFyZUlkID0gWy4uLmlzSW5zaWRlU3F1YXJlLmNsYXNzTGlzdF0uZmlsdGVyKChjbGFzc1ZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIGNsYXNzVmFsdWUubGVuZ3RoID09PSAyID8gdHJ1ZSA6IGZhbHNlO1xuICB9KTtcblxuICAvLyBCZWZvcmUgdGhlIGF0dGFjayBsb29rIGF0IHRoZSBzdW5rU2hpcHMgcHJvcGVydHkgYW5kIGNvbXBhcmUgaXQgd2l0aCB0aGUgc3RhdGUgb2YgdGhlIGJvYXJkIGFmdGVyIHRoZSBhdHRhY2tcbiAgY29uc3Qgc3Vua1NoaXBzT2ZQbGF5ZXJUd28gPSBnYW1lLmdldFBsYXllclR3b1N1bmtTaGlwcygpLmxlbmd0aDtcblxuICBjb25zdCBwbGF5ZXJBdHRhY2sgPSBnYW1lLm1ha2VNb3ZlKGdldFNxdWFyZUlkWzBdKTtcbiAgaWYgKCFwbGF5ZXJBdHRhY2spIHtcbiAgICBjb25zb2xlLmxvZygnQXR0YWNrIGNhbm5vdCBiZSByZWdpc3RlcmVkLiBSZXBlYXQgYWdhaW4nKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0F0dGFjayB3YXMgcmVnaXN0ZXJlZCcpO1xuXG4gICAgLy8gQ29uZmlybSBpZiBhdHRhY2sgaGl0IGEgc2hpcCBvciBpcyBhIG1pc3NlZCBzaG90XG4gICAgaWYgKGlzSW5zaWRlU3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygnY29udGFpbnMtc2hpcCcpKSB7XG4gICAgICBpc0luc2lkZVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzZnVsLXNob3QnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdIaXQgYSBzaGlwISEnKTtcblxuICAgICAgaWYgKHN1bmtTaGlwc09mUGxheWVyVHdvICE9PSBnYW1lLmdldFBsYXllclR3b1N1bmtTaGlwcygpLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU2luayB0aGUgc2hpcCEnKTtcbiAgICAgICAgZGlzYWJsZUFkamFjZW50U3F1YXJlc1RvU3Vua1NoaXBzKGdhbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpc0luc2lkZVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtc2hvdCcpO1xuICAgICAgY29uc29sZS5sb2coJ01pc3NlZCBzaG90ISEnKTtcbiAgICB9XG5cbiAgICBoaWdodGxpZ2h0Q29tcHV0ZXJNb3ZlcygpO1xuXG4gICAgLy8gR2FtZSBvdmVyXG4gICAgLy8gaWYgKGdhbWUuZ2V0V2lubmVyKCkpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdHQU1FIE9WRVIhISEnKTtcbiAgICAvLyB9XG4gICAgLy8gQWxsb3cgdGhlIG1vdmUgdGhhdCBpcyBhIHByZSBtb3ZlIHRvIGRlc3Ryb3lpbmcgYWxsIHNoaXBzISFcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWdodGxpZ2h0Q29tcHV0ZXJNb3ZlcygpIHtcbiAgY29uc29sZS5sb2coYCR7Z2FtZS5nZXRXaG9zZVR1cm5JdElzKCl9IGF0dGFja3Mgbm93YCk7XG5cbiAgY29uc3Qgc3Vua1NoaXBzT2ZQbGF5ZXJPbmUgPSBnYW1lLmdldFBsYXllck9uZVN1bmtTaGlwcygpLmxlbmd0aDtcbiAgY29uc3Qgc3F1YXJlSWQgPSBnYW1lLm1ha2VNb3ZlKCk7XG4gIGNvbnN0IHNxdWFyZXMgPSBbLi4uZ3JpZFNxdWFyZXNIdW1hbi5jaGlsZHJlbl07XG4gIGxldCB0YXJnZXR0ZWRTcXVhcmU7XG5cbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhzcXVhcmVJZCkpIHtcbiAgICAgIHRhcmdldHRlZFNxdWFyZSA9IHNxdWFyZTtcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRhY2sgd2FzIHJlZ2lzdGVyZWQuLi4nKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0YXJnZXR0ZWRTcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250YWlucy1zaGlwJykpIHtcbiAgICB0YXJnZXR0ZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3VjY2Vzc2Z1bC1zaG90Jyk7XG4gICAgY29uc29sZS5sb2coJ0hpdCBhIHNoaXAhJyk7XG5cbiAgICBpZiAoc3Vua1NoaXBzT2ZQbGF5ZXJPbmUgIT09IGdhbWUuZ2V0UGxheWVyT25lU3Vua1NoaXBzKCkubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2luayB0aGUgc2hpcCEnKTtcbiAgICAgIGRpc2FibGVBZGphY2VudFNxdWFyZXNUb1N1bmtTaGlwcyhnYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0dGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC1zaG90Jyk7XG4gICAgY29uc29sZS5sb2coJ01pc3NlZCBzaG90IScpO1xuICB9XG59XG5cbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbnN0IHN0YXR1c09mQnV0dG9uID0gc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdDtcblxuICBpZiAoc3RhdHVzT2ZCdXR0b24uY29udGFpbnMoJ25vdC1zdGFydGVkJykpIHtcbiAgICBzdGFydEdhbWVCdXR0b24uY2xhc3NMaXN0LnJlcGxhY2UoJ25vdC1zdGFydGVkJywgJ3N0YXJ0ZWQnKTtcbiAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgZ2FtZS4uLicpO1xuICAgIGdhbWUgPSBuZXcgR2FtZUxvb3AoKTtcbiAgICBhZGRIb3ZlckVmZmVjdFRvR3JpZFNxdWFyZXMoZ3JpZHMpO1xuICAgIGRpc3BsYXlTaGlwc09uQm9hcmRzKCk7XG4gIH0gZWxzZSBpZiAoc3RhdHVzT2ZCdXR0b24uY29udGFpbnMoJ3N0YXJ0ZWQnKSkge1xuICAgIGNvbnN0IGNvbmZpcm1NZXNzYWdlID0gY29uZmlybSgnRG8geW91IHJlYWxseSB3YW50IHRvIHN0YXJ0IGEgbmV3IGdhbWU/Jyk7XG4gICAgaWYgKGNvbmZpcm1NZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgbmV3IGdhbWUuLi4nKTtcbiAgICAgIGdhbWUgPSBuZXcgR2FtZUxvb3AoKTtcbiAgICAgIGNsZWFyUHJldmlvdXNCb2FyZHNWaXN1YWxzKGdyaWRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0tlZXBpbmcgdGhlIHJlbGV2YW50IGdhbWUhJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJldmlvdXNCb2FyZHNWaXN1YWxzKGJvYXJkcykge1xuICBib2FyZHMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgY29uc3QgZGl2c09mQm9hcmQgPSBbLi4uZGl2LmNoaWxkcmVuXTtcblxuICAgIGRpdnNPZkJvYXJkLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NWYWx1ZXMgPSBzcXVhcmUuY2xhc3NMaXN0O1xuXG4gICAgICBpZiAoY2xhc3NWYWx1ZXMuY29udGFpbnMoJ21pc3NlZC1zaG90JykpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3NlZC1zaG90Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc1ZhbHVlcy5jb250YWlucygnc3VjY2Vzc2Z1bC1zaG90JykpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3NmdWwtc2hvdCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NWYWx1ZXMuY29udGFpbnMoJ2FkamFjZW50LXRvLXN1bmstc2hpcCcpKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdhZGphY2VudC10by1zdW5rLXNoaXAnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEhvdmVyRWZmZWN0VG9HcmlkU3F1YXJlcyhkaXZzKSB7XG4gIGRpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgY29uc3QgZGl2c09mT25lQm9hcmQgPSBbLi4uZGl2LmNoaWxkcmVuXTtcbiAgICBkaXZzT2ZPbmVCb2FyZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVwbGFjZSgnZGlzYWJsZWQnLCAnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb29wT3ZlckFsbERpdnNBbmRBcnJheVNxdWFyZXMoY3VycmVudEdhbWUsIHByb3BlcnR5KSB7XG4gIGNvbnN0IGh1bWFuR3JpZERpdnMgPSBbLi4uZ3JpZFNxdWFyZXNIdW1hbi5jaGlsZHJlbl07XG4gIGNvbnN0IGNvbXB1dGVyR3JpZERpdnMgPSBbLi4uZ3JpZFNxdWFyZXNDb21wdXRlci5jaGlsZHJlbl07XG4gIGNvbnN0IGh1bWFuQm9hcmQgPSBjdXJyZW50R2FtZS5nZXRIdW1hbkJvYXJkKCk7XG4gIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSBjdXJyZW50R2FtZS5nZXRDb21wdXRlckJvYXJkKCk7XG5cbiAgbGV0IGNvdW50ZXJGb3JBcnJheVdpdGhEaXZzID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBjb21wdXRlclNxdWFyZSA9IGJvYXJkQ29tcHV0ZXJbal1baV1bMF07XG4gICAgICBjb25zdCBodW1hblNxdWFyZSA9IGh1bWFuQm9hcmRbal1baV1bMF07XG5cbiAgICAgIGlmIChjb21wdXRlclNxdWFyZVtwcm9wZXJ0eV0pIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnY29udGFpbnNTaGlwJykge1xuICAgICAgICAgIGNvbXB1dGVyR3JpZERpdnNbY291bnRlckZvckFycmF5V2l0aERpdnNdLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAnY29udGFpbnMtc2hpcCdcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSAnaXNBZGphY2VudFRvU29tZVN1bmtTaGlwJykge1xuICAgICAgICAgIGNvbXB1dGVyR3JpZERpdnNbY291bnRlckZvckFycmF5V2l0aERpdnNdLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAnYWRqYWNlbnQtdG8tc3Vuay1zaGlwJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGh1bWFuU3F1YXJlW3Byb3BlcnR5XSkge1xuICAgICAgICBpZiAocHJvcGVydHkgPT09ICdjb250YWluc1NoaXAnKSB7XG4gICAgICAgICAgaHVtYW5HcmlkRGl2c1tjb3VudGVyRm9yQXJyYXlXaXRoRGl2c10uY2xhc3NMaXN0LmFkZCgnY29udGFpbnMtc2hpcCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSAnaXNBZGphY2VudFRvU29tZVN1bmtTaGlwJykge1xuICAgICAgICAgIGh1bWFuR3JpZERpdnNbY291bnRlckZvckFycmF5V2l0aERpdnNdLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAnYWRqYWNlbnQtdG8tc3Vuay1zaGlwJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY291bnRlckZvckFycmF5V2l0aERpdnMrKztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVNoaXBzT25Cb2FyZHMoKSB7XG4gIGxvb3BPdmVyQWxsRGl2c0FuZEFycmF5U3F1YXJlcyhnYW1lLCAnY29udGFpbnNTaGlwJyk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVBZGphY2VudFNxdWFyZXNUb1N1bmtTaGlwcygpIHtcbiAgbG9vcE92ZXJBbGxEaXZzQW5kQXJyYXlTcXVhcmVzKGdhbWUsICdpc0FkamFjZW50VG9Tb21lU3Vua1NoaXAnKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi8uLi9VSS9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGdlbmVyYXRlR3JpZCB9IGZyb20gJy4vdmlzdWFsUGFydC5qcyc7XG5cbmdlbmVyYXRlR3JpZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9