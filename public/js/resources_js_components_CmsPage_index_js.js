(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CmsPage_index_js"],{

/***/ "./resources/js/api/index.js":
/*!***********************************!*\
  !*** ./resources/js/api/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCmsPage": () => (/* binding */ getCmsPage)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //api in own file for reusability

var getCmsPage = function getCmsPage(uri) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/cmspage/".concat(uri ? uri : 'index'));
};

/***/ }),

/***/ "./resources/js/components/Button/Button.component.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Button/Button.component.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Button = function Button(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
      children: ["Button", label]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./resources/js/components/Button/index.js":
/*!*************************************************!*\
  !*** ./resources/js/components/Button/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Button_component_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Button_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.component.js */ "./resources/js/components/Button/Button.component.js");


/***/ }),

/***/ "./resources/js/components/CmsPage/CmsPage.component.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/CmsPage/CmsPage.component.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Sections_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sections/Text */ "./resources/js/components/Sections/Text/index.js");
/* harmony import */ var _Sections_Sections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sections/Sections */ "./resources/js/components/Sections/Sections/index.js");
/* harmony import */ var _Sections_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sections/Carousel */ "./resources/js/components/Sections/Carousel/index.js");
/* harmony import */ var _Sections_Newsletter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sections/Newsletter */ "./resources/js/components/Sections/Newsletter/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var CmsPage = function CmsPage(_ref) {
  var _typeMap;

  var cmsPage = _ref.cmsPage;
  var TYPE = {
    TEXT: "text",
    NEWSLETTER: "newsletter",
    CAROUSEL: "carousel",
    SECTIONS: "sections"
  };
  var typeMap = (_typeMap = {}, _defineProperty(_typeMap, TYPE.TEXT, _Sections_Text__WEBPACK_IMPORTED_MODULE_1__.default), _defineProperty(_typeMap, TYPE.NEWSLETTER, _Sections_Newsletter__WEBPACK_IMPORTED_MODULE_4__.default), _defineProperty(_typeMap, TYPE.SECTIONS, _Sections_Sections__WEBPACK_IMPORTED_MODULE_2__.default), _defineProperty(_typeMap, TYPE.CAROUSEL, _Sections_Carousel__WEBPACK_IMPORTED_MODULE_3__.default), _typeMap);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "flex flex-col",
    children: cmsPage.map(function (pageSection, i) {
      var type = pageSection.type;
      var SectionComponent = typeMap[type];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SectionComponent, {
        pageSection: pageSection,
        index: i
      }, pageSection.name);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmsPage);

/***/ }),

/***/ "./resources/js/components/CmsPage/CmsPage.container.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/CmsPage/CmsPage.container.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CmsPage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CmsPage.component */ "./resources/js/components/CmsPage/CmsPage.component.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_cms_cms_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/cms/cms.actions */ "./resources/js/store/cms/cms.actions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var mapStateToProps = function mapStateToProps(_state) {
  return {
    cmsPage: _state.cmsReducer.cmsPage,
    isLoading: _state.cmsReducer.loading
  };
};

var mapDispatchToProps = function mapDispatchToProps(_dispatch) {
  return {
    getCmsPage: function getCmsPage(uri) {
      return _dispatch((0,_store_cms_cms_actions__WEBPACK_IMPORTED_MODULE_3__.getCmsPage)(uri));
    }
  };
};

var CmsPageContainer = function CmsPageContainer(props) {
  var getCmsPage = props.getCmsPage,
      location = props.location,
      isLoading = props.isLoading;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getCmsPage(location.pathname);
  }, [location.pathname, getCmsPage]);
  return isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
    children: "Loading..."
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CmsPage_component__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread({}, props));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(CmsPageContainer));

/***/ }),

/***/ "./resources/js/components/CmsPage/index.js":
/*!**************************************************!*\
  !*** ./resources/js/components/CmsPage/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CmsPage_container__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _CmsPage_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CmsPage.container */ "./resources/js/components/CmsPage/CmsPage.container.js");


/***/ }),

/***/ "./resources/js/components/Image/Image.component.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Image/Image.component.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Image = function Image(_ref) {
  var overlaySrc = _ref.overlaySrc,
      src = _ref.src,
      classNames = _ref.classNames;

  //progressive loading image component. Inline base64 image is loaded instantly
  //and dispalyed while the fullsize image is fetched. Only when image is loaded
  //do the images swap out with a nice smooth transition
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      imageHasLoaded = _useState2[0],
      setImageHasLoaded = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "relative",
    children: [overlaySrc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: overlaySrc,
      className: " ".concat(classNames, " inset-0 filter blur-sm transition-opacity duration-250 ").concat(imageHasLoaded ? "opacity-0" : "opacity-100"),
      alt: "overlay",
      loading: "lazy" // style="height:100px; width:100px;"

    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: src,
      onLoad: function onLoad() {
        return setImageHasLoaded(true);
      },
      className: "".concat(classNames, " inset-0 filter transition-opacity duration-250 ").concat(imageHasLoaded ? "opacity-100" : "opacity-0"),
      alt: "overlay",
      loading: "lazy" // style="height:100px; width:100px;"

    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./resources/js/components/Image/index.js":
/*!************************************************!*\
  !*** ./resources/js/components/Image/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Image_component__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.component */ "./resources/js/components/Image/Image.component.js");


/***/ }),

/***/ "./resources/js/components/Sections/Carousel/Carousel.component.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Sections/Carousel/Carousel.component.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Text = function Text(_ref) {
  var pageSection = _ref.pageSection,
      index = _ref.index;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      children: "Caousel"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ "./resources/js/components/Sections/Carousel/index.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Sections/Carousel/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Carousel_component__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.component */ "./resources/js/components/Sections/Carousel/Carousel.component.js");


/***/ }),

/***/ "./resources/js/components/Sections/ContentSection/ContentSection.component.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Sections/ContentSection/ContentSection.component.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Button */ "./resources/js/components/Button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Image */ "./resources/js/components/Image/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var ContentSection = function ContentSection(_ref) {
  var section = _ref.section;
  var title = section.title,
      content = section.content,
      overlaySrc = section.overlaySrc,
      img = section.img;
  console.log(img);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "grid grid-cols-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_2__.default, {
      src: img,
      overlaySrc: overlaySrc,
      className: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: content
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentSection);

/***/ }),

/***/ "./resources/js/components/Sections/ContentSection/index.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Sections/ContentSection/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ContentSection_component__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _ContentSection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentSection.component */ "./resources/js/components/Sections/ContentSection/ContentSection.component.js");


/***/ }),

/***/ "./resources/js/components/Sections/Newsletter/Newsletter.component.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Sections/Newsletter/Newsletter.component.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Text = function Text(_ref) {
  var pageSection = _ref.pageSection,
      index = _ref.index;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      children: "ewsletter"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ "./resources/js/components/Sections/Newsletter/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Sections/Newsletter/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Newsletter_component__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Newsletter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Newsletter.component */ "./resources/js/components/Sections/Newsletter/Newsletter.component.js");


/***/ }),

/***/ "./resources/js/components/Sections/Sections/Sections.component.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Sections/Sections/Sections.component.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ContentSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContentSection */ "./resources/js/components/Sections/ContentSection/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Text = function Text(_ref) {
  var pageSection = _ref.pageSection,
      index = _ref.index;
  var sections = pageSection.sections,
      title = pageSection.title,
      text = pageSection.text;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: text
    }), sections.map(function (section) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ContentSection__WEBPACK_IMPORTED_MODULE_1__.default, {
        section: section
      }, section.title);
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ "./resources/js/components/Sections/Sections/index.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Sections/Sections/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Sections_component__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Sections_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sections.component */ "./resources/js/components/Sections/Sections/Sections.component.js");


/***/ }),

/***/ "./resources/js/components/Sections/Text/Text.component.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Sections/Text/Text.component.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Image */ "./resources/js/components/Image/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Text = function Text(_ref) {
  var pageSection = _ref.pageSection;
  var title = pageSection.title,
      overlaySrc = pageSection.overlaySrc,
      background = pageSection.background; // console.log(overlaySrc);

  var backgroundIsImage = !/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(background);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "min-h-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_1__.default, {
      overlaySrc: overlaySrc,
      src: background,
      classNames: "absolute w-full"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ "./resources/js/components/Sections/Text/index.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Sections/Text/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Text_component__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Text_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.component */ "./resources/js/components/Sections/Text/Text.component.js");


/***/ }),

/***/ "./resources/js/store/cms/cms.actions.js":
/*!***********************************************!*\
  !*** ./resources/js/store/cms/cms.actions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCmsPage": () => (/* binding */ getCmsPage)
/* harmony export */ });
/* harmony import */ var _cms_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cms.types */ "./resources/js/store/cms/cms.types.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./resources/js/api/index.js");


var getCmsPage = function getCmsPage() {
  return function (dispatch) {
    dispatch({
      type: _cms_types__WEBPACK_IMPORTED_MODULE_0__.LOADING
    });
    _api__WEBPACK_IMPORTED_MODULE_1__.getCmsPage().then(function (res) {
      dispatch({
        type: _cms_types__WEBPACK_IMPORTED_MODULE_0__.SUCCESS,
        payload: res.data
      });
    })["catch"](function (err) {
      return dispatch({
        type: _cms_types__WEBPACK_IMPORTED_MODULE_0__.FAILURE,
        payload: err
      });
    });
  };
};

/***/ })

}]);