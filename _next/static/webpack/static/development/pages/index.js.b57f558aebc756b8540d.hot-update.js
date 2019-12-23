webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DraggableList.js":
/*!*************************************!*\
  !*** ./components/DraggableList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_move__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-move */ "./node_modules/lodash-move/lib/index.js");
/* harmony import */ var lodash_move__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_move__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "/Users/jackkwan/Projects/vowels/components/DraggableList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






var draggableListStyle = __jsx("style", {
  jsx: "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "\n  .background-wrapper {\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n    align-items: center;\n    height: 80vh;\n  }\n\n  .draggable-list {\n    height: 80vh;\n    position: absolute;\n    top: 0;\n  }\n\n  .background {\n    position: absolute;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .content {\n    padding: 5px;\n    width: 500px;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  \n  .tile {\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    overflow: visible;\n    pointer-events: auto;\n    border-radius: 5px;\n    color: white;\n    font-size: 30px;\n    background: lightblue;\n    text-transform: uppercase;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    font-weight: bold;\n  }  \n  \n  .tile {\n    background: gold;\n    color: black;\n  }\n\n  .consonant {\n    background: grey;\n    color: white;\n  }\n\n"); // Returns fitting styles for dragged/idle items


var BLOCK_SIZE = 40;
var PADDING = 3;
var BLOCK_SIZE_WITH_PADDING = BLOCK_SIZE + PADDING;

function Background(props) {
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: "background"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3440477674" + " " + "background-letter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3440477674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "A")), __jsx("div", {
    className: "jsx-3440477674" + " " + "background-letter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3440477674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "E")), __jsx("div", {
    className: "jsx-3440477674" + " " + "background-letter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3440477674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "_")), __jsx("div", {
    className: "jsx-3440477674" + " " + "background-letter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3440477674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "I")), __jsx("div", {
    className: "jsx-3440477674" + " " + "background-letter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3440477674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "O")), __jsx("div", {
    className: "jsx-3440477674" + " " + "background-letter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3440477674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "U")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3440477674",
    __self: this
  }, ".background-letter.jsx-3440477674{height:40px;width:40px;border:black 3px solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:5px;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px;top:35px;font-size:30px;position:relative;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNra3dhbi9Qcm9qZWN0cy92b3dlbHMvY29tcG9uZW50cy9EcmFnZ2FibGVMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGaUIsQUFHcUIsWUFDRCxXQUNZLHVCQUNWLDBFQUNLLGtCQUNBLGtCQUNLLG1HQUNKLDZGQUNBLG1CQUNWLFNBQ00sZUFDRyxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2phY2trd2FuL1Byb2plY3RzL3Zvd2Vscy9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlZCwgdXNlU3ByaW5ncywgdXNlU3ByaW5nIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcbmltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC11c2UtZ2VzdHVyZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbW92ZSBmcm9tICdsb2Rhc2gtbW92ZSc7XG5cbmxldCBkcmFnZ2FibGVMaXN0U3R5bGUgPSA8c3R5bGUganN4PVwidHJ1ZVwiPntgXG4gIC5iYWNrZ3JvdW5kLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gIH1cblxuICAuZHJhZ2dhYmxlLWxpc3Qge1xuICAgIGhlaWdodDogODB2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICBcbiAgLnRpbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfSAgXG4gIFxuICAudGlsZSB7XG4gICAgYmFja2dyb3VuZDogZ29sZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuY29uc29uYW50IHtcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG5gfTwvc3R5bGU+O1xuXG4vLyBSZXR1cm5zIGZpdHRpbmcgc3R5bGVzIGZvciBkcmFnZ2VkL2lkbGUgaXRlbXNcblxuY29uc3QgQkxPQ0tfU0laRSA9IDQwO1xuY29uc3QgUEFERElORyA9IDM7XG5jb25zdCBCTE9DS19TSVpFX1dJVEhfUEFERElORyA9IEJMT0NLX1NJWkUgKyBQQURESU5HO1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKHByb3BzKSB7XG4gIHJldHVybiA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIiB7Li4ucHJvcHN9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1sZXR0ZXJcIj48ZGl2PkE8L2Rpdj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtbGV0dGVyXCI+PGRpdj5FPC9kaXY+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWxldHRlclwiPjxkaXY+XzwvZGl2PjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1sZXR0ZXJcIj48ZGl2Pkk8L2Rpdj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtbGV0dGVyXCI+PGRpdj5PPC9kaXY+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWxldHRlclwiPjxkaXY+VTwvZGl2PjwvZGl2PlxuICAgIDxzdHlsZSBqc3ggPntgXG4gICAgICAuYmFja2dyb3VuZC1sZXR0ZXIge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBib3JkZXI6IGJsYWNrIDNweCBzb2xpZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYW5pbWF0ZWQuZGl2PlxufVxuXG5jb25zdCB0aWxlU3ByaW5nU2V0dGVyID0gKG9yZGVyLCBkb3duLCBvcmlnaW5hbEluZGV4LCBjdXJJbmRleCwgeCwgeSkgPT4ge1xuICByZXR1cm4gaW5kZXggPT4ge1xuICAgIGxldCB4TXVsdGlwbGllciA9IG9yZGVyLmluZGV4T2YoaW5kZXgpO1xuICAgIGlmICh4TXVsdGlwbGllciA9PT0gLTEpIHsgeE11bHRpcGxpZXIgPSAtMTAwOyB9XG4gICAgcmV0dXJuIChkb3duICYmIGluZGV4ID09PSBvcmlnaW5hbEluZGV4KVxuICAgID8geyB5OiB5LCB4OiBjdXJJbmRleCAqIEJMT0NLX1NJWkVfV0lUSF9QQURESU5HICsgeCwgb3BhY2l0eTogMSwgc2NhbGU6IDEuMSwgekluZGV4OiAnMycsIGJveFNoYWRvdzogJzBweCAyMHB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC40KScsIGltbWVkaWF0ZTogbiA9PiBuID09PSAneCcgfHwgbiA9PT0gJ3pJbmRleCcgfVxuICAgIDogeyB5OiAwLCB4OiB4TXVsdGlwbGllciAqIEJMT0NLX1NJWkVfV0lUSF9QQURESU5HLCBvcGFjaXR5OiAxLCBzY2FsZTogMSwgekluZGV4OiAnMicsIGJveFNoYWRvdzogJzBweCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuNCknLCBpbW1lZGlhdGU6IGZhbHNlIH07XG4gIH1cbn1cblxuY29uc3QgcmVzZXRUaWxlU2V0dGVyID0gKG9yZGVyLCBkb3duLCBvcmlnaW5hbEluZGV4LCBjdXJJbmRleCwgeCwgeSkgPT4ge1xuICByZXR1cm4gaW5kZXggPT4gKHsgeTogMCwgeDogLTUwMDAsIHNjYWxlOiAxLCBvcGFjaXR5OiAwLCB6SW5kZXg6ICcyJywgc2hhZG93OiAxLCBpbW1lZGlhdGU6IGZhbHNlIH0pO1xufVxuXG5jb25zdCBiYWNrZ3JvbmRTcHJpbmdTZXR0ZXIgPSAob3JkZXIsIGRvd24sIG9yaWdpbmFsSW5kZXgsIGN1ckluZGV4LCB4LCB5KSA9PiB7XG4gIHJldHVybiBpbmRleCA9PiB7XG4gICAgbGV0IHhNdWx0aXBsaWVyID0gb3JkZXIuaW5kZXhPZihpbmRleCk7XG4gICAgaWYgKHhNdWx0aXBsaWVyID09PSAtMSkgeyB4TXVsdGlwbGllciA9IC0xMDA7IH1cbiAgICByZXR1cm4gKGRvd24gJiYgaW5kZXggPT09IG9yaWdpbmFsSW5kZXgpXG4gICAgPyB7IHk6IDAsIHg6IGN1ckluZGV4ICogQkxPQ0tfU0laRV9XSVRIX1BBRERJTkcgKyB4LCBzY2FsZTogMSwgekluZGV4OiAnMScsIHNoYWRvdzogMTUsIG9wYWNpdHk6IDAuNSwgaW1tZWRpYXRlOiBuID0+IG4gPT09ICd4JyB8fCBuID09PSAnekluZGV4JyB9XG4gICAgOiB7IHk6IDAsIHg6IHhNdWx0aXBsaWVyICogQkxPQ0tfU0laRV9XSVRIX1BBRERJTkcsIHNjYWxlOiAxLCB6SW5kZXg6ICcxJywgc2hhZG93OiAxLCBvcGFjaXR5OjAsIGltbWVkaWF0ZTogZmFsc2UgfTtcbiAgfVxufVxuXG5jb25zdCBQT09MX1NJWkUgPSAxMDtcblxuZnVuY3Rpb24gRHJhZ2dhYmxlTGlzdChwcm9wcykge1xuICBsZXQgaXRlbXMgPSBwcm9wcy5pdGVtcztcbiAgbGV0IHsgb3JkZXI9W10sIHNldE9yZGVyLCBhbnN3ZXIsIG9uQ29ycmVjdCwgYW5zd2VycyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtzcHJpbmdzLCBzZXRTcHJpbmdzXSA9IHVzZVNwcmluZ3MoUE9PTF9TSVpFLCB0aWxlU3ByaW5nU2V0dGVyKG9yZGVyLm1hcChvID0+IG8ub3JpZ0lkeCkpKSAvLyBDcmVhdGUgc3ByaW5ncywgZWFjaCBjb3JyZXNwb25kcyB0byBhbiBpdGVtLCBjb250cm9sbGluZyBpdHMgdHJhbnNmb3JtLCBzY2FsZSwgZXRjLlxuICBjb25zdCBbYmFja2dyb3VuZFNwcmluZ3MsIHNldEJhY2tncm91bmRTcHJpbmdzXSA9IHVzZVNwcmluZ3MoUE9PTF9TSVpFLCB0aWxlU3ByaW5nU2V0dGVyKG9yZGVyLm1hcChvID0+IG8ub3JpZ0lkeCkpKSAvLyBDcmVhdGUgc3ByaW5ncywgZWFjaCBjb3JyZXNwb25kcyB0byBhbiBpdGVtLCBjb250cm9sbGluZyBpdHMgdHJhbnNmb3JtLCBzY2FsZSwgZXRjLlxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG5ld09yZGVyID0gb3JkZXI7XG4gICAgc2V0U3ByaW5ncyhyZXNldFRpbGVTZXR0ZXIobmV3T3JkZXIubWFwKG8gPT4gby5vcmlnSWR4KSkpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTcHJpbmdzKHRpbGVTcHJpbmdTZXR0ZXIobmV3T3JkZXIubWFwKG8gPT4gby5vcmlnSWR4KSkpO1xuICAgICAgc2V0QmFja2dyb3VuZFNwcmluZ3MoYmFja2dyb25kU3ByaW5nU2V0dGVyKG5ld09yZGVyLm1hcChvID0+IG8ub3JpZ0lkeCkpKTtcbiAgICB9LCA1MDApO1xuXG4gICAgY29uc29sZS5sb2coYW5zd2Vycyk7XG4gIH0sIFtwcm9wcy5pdGVtc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnNob3dBbnN3ZXIpIHtcbiAgICAgIHNldFNwcmluZ3ModGlsZVNwcmluZ1NldHRlcihvcmRlci5tYXAobyA9PiBvLm9yaWdJZHgpKSk7XG4gICAgICBzZXRCYWNrZ3JvdW5kU3ByaW5ncyhiYWNrZ3JvbmRTcHJpbmdTZXR0ZXIob3JkZXIubWFwKG8gPT4gby5vcmlnSWR4KSkpO1xuICAgICAgY2hlY2tDb3JyZWN0KG9yZGVyKTtcbiAgICB9XG4gIH0sIFtvcmRlcl0pO1xuXG5cbiAgY29uc3QgWyBiYWNrZ3JvdW5kSW5mbywgc2V0QmFja2dyb3VuZEluZm8gXSA9IHVzZVN0YXRlKHsgb246IGZhbHNlLCBpZHg6IDAgfSk7XG4gIGxldCBzZXRMZXR0ZXIgPSAob3JkZXJJZHgsIGxldHRlcikgPT4ge1xuICAgIGxldCByZXN1bHQgPSBbLi4ub3JkZXJdO1xuICAgIHJlc3VsdFtvcmRlcklkeF0ubGV0dGVyID0gbGV0dGVyO1xuICAgIHNldE9yZGVyKHJlc3VsdCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0TGV0dGVySWZNb3ZlZCA9IChjdXJJbmRleCwgeSkgPT4ge1xuICAgIGlmICh5ID4gLTMqQkxPQ0tfU0laRSAmJiB5IDw9ICAtMipCTE9DS19TSVpFKSB7XG4gICAgICBzZXRMZXR0ZXIoY3VySW5kZXgsICdBJyk7XG4gICAgfSBlbHNlIGlmICh5ID4gLTIqQkxPQ0tfU0laRSAmJiB5IDwgLTEqQkxPQ0tfU0laRSkge1xuICAgICAgc2V0TGV0dGVyKGN1ckluZGV4LCAnRScpO1xuICAgIH0gZWxzZSBpZiAoeSA+PSAxKkJMT0NLX1NJWkUgJiYgeSA8PSAyKkJMT0NLX1NJWkUpIHtcbiAgICAgIHNldExldHRlcihjdXJJbmRleCwgJ0knKTtcbiAgICB9IGVsc2UgaWYgKHkgPiAyKkJMT0NLX1NJWkUgJiYgeSA8PSAzKkJMT0NLX1NJWkUpIHtcbiAgICAgIHNldExldHRlcihjdXJJbmRleCwgJ08nKTtcbiAgICB9IGVsc2UgaWYgKHkgPiAzKkJMT0NLX1NJWkUgJiYgeSA8PSA0KkJMT0NLX1NJWkUpIHtcbiAgICAgIHNldExldHRlcihjdXJJbmRleCwgJ1UnKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGVja0NvcnJlY3QgPSAobmV3T3JkZXIpID0+IHtcbiAgICBsZXQgY3VycmVudCA9IG5ld09yZGVyLm1hcChvID0+IG8ubGV0dGVyKS5qb2luKCcnKTtcbiAgICBpZiAoYW5zd2Vycy5pbmNsdWRlcyhjdXJyZW50LnRvVXBwZXJDYXNlKCkpKSB7XG4gICAgICBpZiAocHJvcHMuc2hvd0Fuc3dlcikge1xuICAgICAgICBwcm9wcy5zZXRCYWNrZ3JvdW5kQ29sb3IoJ0NIRUFUJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5zZXRCYWNrZ3JvdW5kQ29sb3IoJ0FOU1dFUkVEJyk7XG4gICAgICAgIHByb3BzLmhpZGVHaXZldXBCdXR0b24oKTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTcHJpbmdzKHJlc2V0VGlsZVNldHRlcihuZXdPcmRlci5tYXAobyA9PiBvLm9yaWdJZHgpKSk7XG4gICAgICB9LCAyMDAwKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9uQ29ycmVjdCgpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgYmluZCA9IHVzZURyYWcoKHsgYXJnczogW29yaWdpbmFsSW5kZXhdLCBkb3duLCBtb3ZlbWVudDogW3gsIHldIH0pID0+IHtcbiAgICBjb25zdCBjdXJJbmRleCA9IG9yZGVyLmZpbmRJbmRleChvID0+IG8ub3JpZ0lkeCA9PT0gb3JpZ2luYWxJbmRleCk7XG4gICAgY29uc3QgY3VyQ29sID0gY2xhbXAoTWF0aC5yb3VuZCgoY3VySW5kZXggKiBCTE9DS19TSVpFICsgeCkgLyBCTE9DS19TSVpFKSwgMCwgaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgY29uc3QgbmV3T3JkZXIgPSBtb3ZlKG9yZGVyLCBjdXJJbmRleCwgY3VyQ29sKTtcblxuICAgIGNvbnN0IGxldHRlciA9IG9yZGVyW2N1ckluZGV4XS5sZXR0ZXI7XG4gICAgaWYgKCEnQUVJT1VfJy5pbmNsdWRlcyhsZXR0ZXIpKSB7IHJldHVybiA7IH1cbiAgICBzZXRCYWNrZ3JvdW5kSW5mbyh7IG9uOiB0cnVlLCBpZHg6IGN1ckNvbH0pO1xuICAgIHNldExldHRlcklmTW92ZWQoY3VySW5kZXgsIHkpO1xuICAgIHNldFNwcmluZ3ModGlsZVNwcmluZ1NldHRlcihuZXdPcmRlci5tYXAobyA9PiBvLm9yaWdJZHgpLCBkb3duLCBvcmlnaW5hbEluZGV4LCBjdXJJbmRleCwgeCwgeSkpIC8vIEZlZWQgc3ByaW5ncyBuZXcgc3R5bGUgZGF0YSwgdGhleSdsbCBhbmltYXRlIHRoZSB2aWV3IHdpdGhvdXQgY2F1c2luZyBhIHNpbmdsZSByZW5kZXJcbiAgICBzZXRCYWNrZ3JvdW5kU3ByaW5ncyhiYWNrZ3JvbmRTcHJpbmdTZXR0ZXIobmV3T3JkZXIubWFwKG8gPT4gby5vcmlnSWR4KSwgZG93biwgb3JpZ2luYWxJbmRleCwgY3VySW5kZXgsIHgsIHkpKSAvLyBGZWVkIHNwcmluZ3MgbmV3IHN0eWxlIGRhdGEsIHRoZXknbGwgYW5pbWF0ZSB0aGUgdmlldyB3aXRob3V0IGNhdXNpbmcgYSBzaW5nbGUgcmVuZGVyXG5cblxuICAgIGlmICghZG93bikge1xuICAgICAgc2V0T3JkZXIobmV3T3JkZXIpO1xuICAgICAgc2V0QmFja2dyb3VuZEluZm8oeyBvbjogZmFsc2UsIGlkeDogY3VyQ29sIH0pO1xuICAgICAgY2hlY2tDb3JyZWN0KG5ld09yZGVyKTtcbiAgICB9IFxuXG4gICAgaWYgKGFuc3dlcnMuaW5jbHVkZXMob3JkZXIubWFwKG8gPT4gby5sZXR0ZXIpLmpvaW4oJycpKSkgeyByZXR1cm47IH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRyYWdnYWJsZS1saXN0XCIgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMubG9hZGluZyA/IG51bGwgOiBudWxsIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLXdyYXBwZXJcIiBzdHlsZT17eyB3aWR0aDogQkxPQ0tfU0laRV9XSVRIX1BBRERJTkcgKiBpdGVtcy5sZW5ndGggfX0+XG4gICAgICAgIHsgYmFja2dyb3VuZFNwcmluZ3MubWFwKCh7IHpJbmRleCwgc2hhZG93LCB4LCB5LCBzY2FsZSwgb3BhY2l0eT0wfSwgaSkgPT4ge1xuICAgICAgICAgIGlmIChpID49IGl0ZW1zLmxlbmd0aCkgeyByZXR1cm4gPGFuaW1hdGVkLmRpdiBrZXk9e2l9IHN0eWxlPXt7ZGlzcGxheTonbm9uZScsIG9wYWNpdHk6IDB9fT5ub3RoaW5nPC9hbmltYXRlZC5kaXY+OyB9XG4gICAgICAgICAgcmV0dXJuICg8QmFja2dyb3VuZCBrZXk9e2l9IHN0eWxlPXt7IHpJbmRleCwgeCwgb3BhY2l0eSwgeSwgc2NhbGUgfX0gLz4pO1xuICAgICAgICB9KSB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlPXt7IHdpZHRoOiBCTE9DS19TSVpFX1dJVEhfUEFERElORyAqIGl0ZW1zLmxlbmd0aCB9fT5cbiAgICAgICAge3NwcmluZ3MubWFwKCh7IHpJbmRleCwgYm94U2hhZG93LCB4LCB5LCBzY2FsZSwgb3BhY2l0eSB9LCBpKSA9PiB7XG4gICAgICAgICAgbGV0IGN1ckJsb2NrID0gb3JkZXIuZmluZChvID0+IG8ub3JpZ0lkeCA9PT0gaSkgfHwgeyBsZXR0ZXI6ICdfJyB9O1xuICAgICAgICAgIGxldCBjdXJMZXR0ZXIgPSBjdXJCbG9jay5sZXR0ZXI7XG4gICAgICAgICAgbGV0IGNsYXNzTmFtZXMgPSBbXCJ0aWxlXCJdO1xuICAgICAgICAgIGlmICghJ0FFSU9VXycuaW5jbHVkZXMoY3VyTGV0dGVyKSkgeyBjbGFzc05hbWVzLnB1c2goJ2NvbnNvbmFudCcpOyB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX1cbiAgICAgICAgICAgICAgey4uLmJpbmQoaSl9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4LCBvcGFjaXR5LFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogYm94U2hhZG93LFxuICAgICAgICAgICAgICAgIHgsIHksIHNjYWxlIH19PlxuICAgICAgICAgICAgICA8ZGl2PntjdXJMZXR0ZXJ9IDwvZGl2PlxuICAgICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9ICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkcmFnZ2FibGVMaXN0U3R5bGV9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZ2dhYmxlTGlzdDsiXX0= */\n/*@ sourceURL=/Users/jackkwan/Projects/vowels/components/DraggableList.js */"));
}

var tileSpringSetter = function tileSpringSetter(order, down, originalIndex, curIndex, x, y) {
  return function (index) {
    var xMultiplier = order.indexOf(index);

    if (xMultiplier === -1) {
      xMultiplier = -100;
    }

    return down && index === originalIndex ? {
      y: y,
      x: curIndex * BLOCK_SIZE_WITH_PADDING + x,
      opacity: 1,
      scale: 1.1,
      zIndex: '3',
      boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.4)',
      immediate: function immediate(n) {
        return n === 'x' || n === 'zIndex';
      }
    } : {
      y: 0,
      x: xMultiplier * BLOCK_SIZE_WITH_PADDING,
      opacity: 1,
      scale: 1,
      zIndex: '2',
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.4)',
      immediate: false
    };
  };
};

var resetTileSetter = function resetTileSetter(order, down, originalIndex, curIndex, x, y) {
  return function (index) {
    return {
      y: 0,
      x: -5000,
      scale: 1,
      opacity: 0,
      zIndex: '2',
      shadow: 1,
      immediate: false
    };
  };
};

var backgrondSpringSetter = function backgrondSpringSetter(order, down, originalIndex, curIndex, x, y) {
  return function (index) {
    var xMultiplier = order.indexOf(index);

    if (xMultiplier === -1) {
      xMultiplier = -100;
    }

    return down && index === originalIndex ? {
      y: 0,
      x: curIndex * BLOCK_SIZE_WITH_PADDING + x,
      scale: 1,
      zIndex: '1',
      shadow: 15,
      opacity: 0.5,
      immediate: function immediate(n) {
        return n === 'x' || n === 'zIndex';
      }
    } : {
      y: 0,
      x: xMultiplier * BLOCK_SIZE_WITH_PADDING,
      scale: 1,
      zIndex: '1',
      shadow: 1,
      opacity: 0,
      immediate: false
    };
  };
};

var POOL_SIZE = 10;

function DraggableList(props) {
  var items = props.items;
  var _props$order = props.order,
      order = _props$order === void 0 ? [] : _props$order,
      setOrder = props.setOrder,
      answer = props.answer,
      onCorrect = props.onCorrect,
      answers = props.answers;

  var _useSprings = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSprings"])(POOL_SIZE, tileSpringSetter(order.map(function (o) {
    return o.origIdx;
  }))),
      _useSprings2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSprings, 2),
      springs = _useSprings2[0],
      setSprings = _useSprings2[1]; // Create springs, each corresponds to an item, controlling its transform, scale, etc.


  var _useSprings3 = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSprings"])(POOL_SIZE, tileSpringSetter(order.map(function (o) {
    return o.origIdx;
  }))),
      _useSprings4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSprings3, 2),
      backgroundSprings = _useSprings4[0],
      setBackgroundSprings = _useSprings4[1]; // Create springs, each corresponds to an item, controlling its transform, scale, etc.


  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var newOrder = order;
    setSprings(resetTileSetter(newOrder.map(function (o) {
      return o.origIdx;
    })));
    setTimeout(function () {
      setSprings(tileSpringSetter(newOrder.map(function (o) {
        return o.origIdx;
      })));
      setBackgroundSprings(backgrondSpringSetter(newOrder.map(function (o) {
        return o.origIdx;
      })));
    }, 500);
    console.log(answers);
  }, [props.items]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (props.showAnswer) {
      setSprings(tileSpringSetter(order.map(function (o) {
        return o.origIdx;
      })));
      setBackgroundSprings(backgrondSpringSetter(order.map(function (o) {
        return o.origIdx;
      })));
      checkCorrect(order);
    }
  }, [order]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    on: false,
    idx: 0
  }),
      backgroundInfo = _useState[0],
      setBackgroundInfo = _useState[1];

  var setLetter = function setLetter(orderIdx, letter) {
    var result = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(order);

    result[orderIdx].letter = letter;
    setOrder(result);
  };

  var setLetterIfMoved = function setLetterIfMoved(curIndex, y) {
    if (y > -3 * BLOCK_SIZE && y <= -2 * BLOCK_SIZE) {
      setLetter(curIndex, 'A');
    } else if (y > -2 * BLOCK_SIZE && y < -1 * BLOCK_SIZE) {
      setLetter(curIndex, 'E');
    } else if (y >= 1 * BLOCK_SIZE && y <= 2 * BLOCK_SIZE) {
      setLetter(curIndex, 'I');
    } else if (y > 2 * BLOCK_SIZE && y <= 3 * BLOCK_SIZE) {
      setLetter(curIndex, 'O');
    } else if (y > 3 * BLOCK_SIZE && y <= 4 * BLOCK_SIZE) {
      setLetter(curIndex, 'U');
    }
  };

  var checkCorrect = function checkCorrect(newOrder) {
    var current = newOrder.map(function (o) {
      return o.letter;
    }).join('');

    if (answers.includes(current.toUpperCase())) {
      if (props.showAnswer) {
        props.setBackgroundColor('CHEAT');
      } else {
        props.setBackgroundColor('ANSWERED');
        props.hideGiveupButton();
      }

      setTimeout(function () {
        setSprings(resetTileSetter(newOrder.map(function (o) {
          return o.origIdx;
        })));
      }, 2000);
      setTimeout(function () {
        onCorrect();
      }, 3000);
    }
  };

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_6__["useDrag"])(function (_ref) {
    var _ref$args = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref.args, 1),
        originalIndex = _ref$args[0],
        down = _ref.down,
        _ref$movement = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref.movement, 2),
        x = _ref$movement[0],
        y = _ref$movement[1];

    var curIndex = order.findIndex(function (o) {
      return o.origIdx === originalIndex;
    });
    var curCol = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["clamp"])(Math.round((curIndex * BLOCK_SIZE + x) / BLOCK_SIZE), 0, items.length - 1);
    var newOrder = lodash_move__WEBPACK_IMPORTED_MODULE_8___default()(order, curIndex, curCol);
    var letter = order[curIndex].letter;

    if (!'AEIOU_'.includes(letter)) {
      return;
    }

    setBackgroundInfo({
      on: true,
      idx: curCol
    });
    setLetterIfMoved(curIndex, y);
    setSprings(tileSpringSetter(newOrder.map(function (o) {
      return o.origIdx;
    }), down, originalIndex, curIndex, x, y)); // Feed springs new style data, they'll animate the view without causing a single render

    setBackgroundSprings(backgrondSpringSetter(newOrder.map(function (o) {
      return o.origIdx;
    }), down, originalIndex, curIndex, x, y)); // Feed springs new style data, they'll animate the view without causing a single render

    if (!down) {
      setOrder(newOrder);
      setBackgroundInfo({
        on: false,
        idx: curCol
      });
      checkCorrect(newOrder);
    }

    if (answers.includes(order.map(function (o) {
      return o.letter;
    }).join(''))) {
      return;
    }
  });
  return __jsx("div", {
    className: "draggable-list",
    style: {
      display: props.loading ? null : null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("div", {
    className: "background-wrapper",
    style: {
      width: BLOCK_SIZE_WITH_PADDING * items.length
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, backgroundSprings.map(function (_ref2, i) {
    var zIndex = _ref2.zIndex,
        shadow = _ref2.shadow,
        x = _ref2.x,
        y = _ref2.y,
        scale = _ref2.scale,
        _ref2$opacity = _ref2.opacity,
        opacity = _ref2$opacity === void 0 ? 0 : _ref2$opacity;

    if (i >= items.length) {
      return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
        key: i,
        style: {
          display: 'none',
          opacity: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "nothing");
    }

    return __jsx(Background, {
      key: i,
      style: {
        zIndex: zIndex,
        x: x,
        opacity: opacity,
        y: y,
        scale: scale
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    });
  })), __jsx("div", {
    className: "content",
    style: {
      width: BLOCK_SIZE_WITH_PADDING * items.length
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, springs.map(function (_ref3, i) {
    var zIndex = _ref3.zIndex,
        boxShadow = _ref3.boxShadow,
        x = _ref3.x,
        y = _ref3.y,
        scale = _ref3.scale,
        opacity = _ref3.opacity;
    var curBlock = order.find(function (o) {
      return o.origIdx === i;
    }) || {
      letter: '_'
    };
    var curLetter = curBlock.letter;
    var classNames = ["tile"];

    if (!'AEIOU_'.includes(curLetter)) {
      classNames.push('consonant');
    }

    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: classNames.join(' ')
    }, bind(i), {
      key: i,
      style: {
        zIndex: zIndex,
        opacity: opacity,
        boxShadow: boxShadow,
        x: x,
        y: y,
        scale: scale
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, curLetter, " "));
  })), draggableListStyle);
}

/* harmony default export */ __webpack_exports__["default"] = (DraggableList);

/***/ })

})
//# sourceMappingURL=index.js.b57f558aebc756b8540d.hot-update.js.map