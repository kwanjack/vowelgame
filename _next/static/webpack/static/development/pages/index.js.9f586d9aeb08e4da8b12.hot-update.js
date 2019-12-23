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
}, "\n  .background-wrapper {\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n    align-items: center;\n    height: 80vh;\n  }\n\n  .draggable-list {\n    height: 80vh;\n    position: absolute;\n    top: 0;\n  }\n\n  .background {\n    position: absolute;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .content {\n    padding: 5px;\n    width: 500px;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  \n  .pane {\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    overflow: visible;\n    pointer-events: auto;\n    border-radius: 5px;\n    color: white;\n    font-size: 30px;\n    background: lightblue;\n    text-transform: uppercase;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    font-weight: bold;\n  }  \n  \n  .pane {\n    background: gold;\n    color: black;\n  }\n\n  .consonant {\n    background: grey;\n    color: white;\n  }\n\n"); // Returns fitting styles for dragged/idle items


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
  }, ".background-letter.jsx-3440477674{height:40px;width:40px;border:black 3px solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:5px;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px;top:35px;font-size:30px;position:relative;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNra3dhbi9Qcm9qZWN0cy92b3dlbHMvY29tcG9uZW50cy9EcmFnZ2FibGVMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGaUIsQUFHcUIsWUFDRCxXQUNZLHVCQUNWLDBFQUNLLGtCQUNBLGtCQUNLLG1HQUNKLDZGQUNBLG1CQUNWLFNBQ00sZUFDRyxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2phY2trd2FuL1Byb2plY3RzL3Zvd2Vscy9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlZCwgdXNlU3ByaW5ncywgdXNlU3ByaW5nIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcbmltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC11c2UtZ2VzdHVyZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbW92ZSBmcm9tICdsb2Rhc2gtbW92ZSc7XG5cbmxldCBkcmFnZ2FibGVMaXN0U3R5bGUgPSA8c3R5bGUganN4PVwidHJ1ZVwiPntgXG4gIC5iYWNrZ3JvdW5kLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gIH1cblxuICAuZHJhZ2dhYmxlLWxpc3Qge1xuICAgIGhlaWdodDogODB2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICBcbiAgLnBhbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfSAgXG4gIFxuICAucGFuZSB7XG4gICAgYmFja2dyb3VuZDogZ29sZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuY29uc29uYW50IHtcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG5gfTwvc3R5bGU+O1xuXG4vLyBSZXR1cm5zIGZpdHRpbmcgc3R5bGVzIGZvciBkcmFnZ2VkL2lkbGUgaXRlbXNcblxuY29uc3QgQkxPQ0tfU0laRSA9IDQwO1xuY29uc3QgUEFERElORyA9IDM7XG5jb25zdCBCTE9DS19TSVpFX1dJVEhfUEFERElORyA9IEJMT0NLX1NJWkUgKyBQQURESU5HO1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKHByb3BzKSB7XG4gIHJldHVybiA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIiB7Li4ucHJvcHN9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1sZXR0ZXJcIj48ZGl2PkE8L2Rpdj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtbGV0dGVyXCI+PGRpdj5FPC9kaXY+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWxldHRlclwiPjxkaXY+XzwvZGl2PjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1sZXR0ZXJcIj48ZGl2Pkk8L2Rpdj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtbGV0dGVyXCI+PGRpdj5PPC9kaXY+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWxldHRlclwiPjxkaXY+VTwvZGl2PjwvZGl2PlxuICAgIDxzdHlsZSBqc3ggPntgXG4gICAgICAuYmFja2dyb3VuZC1sZXR0ZXIge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBib3JkZXI6IGJsYWNrIDNweCBzb2xpZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYW5pbWF0ZWQuZGl2PlxufVxuXG5jb25zdCBmbiA9IChvcmRlciwgZG93biwgb3JpZ2luYWxJbmRleCwgY3VySW5kZXgsIHgsIHkpID0+IHtcbiAgcmV0dXJuIGluZGV4ID0+IHtcbiAgICBsZXQgeE11bHRpcGxpZXIgPSBvcmRlci5pbmRleE9mKGluZGV4KTtcbiAgICBpZiAoeE11bHRpcGxpZXIgPT09IC0xKSB7IHhNdWx0aXBsaWVyID0gLTEwMDsgfVxuICAgIHJldHVybiAoZG93biAmJiBpbmRleCA9PT0gb3JpZ2luYWxJbmRleClcbiAgICA/IHsgeTogeSwgeDogY3VySW5kZXggKiBCTE9DS19TSVpFX1dJVEhfUEFERElORyArIHgsIG9wYWNpdHk6IDEsIHNjYWxlOiAxLjEsIHpJbmRleDogJzMnLCBib3hTaGFkb3c6ICcwcHggMjBweCAyMHB4IDBweCByZ2JhKDAsMCwwLDAuNCknLCBpbW1lZGlhdGU6IG4gPT4gbiA9PT0gJ3gnIHx8IG4gPT09ICd6SW5kZXgnIH1cbiAgICA6IHsgeTogMCwgeDogeE11bHRpcGxpZXIgKiBCTE9DS19TSVpFX1dJVEhfUEFERElORywgb3BhY2l0eTogMSwgc2NhbGU6IDEsIHpJbmRleDogJzInLCBib3hTaGFkb3c6ICcwcHggMHB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjQpJywgaW1tZWRpYXRlOiBmYWxzZSB9O1xuICB9XG59XG5cbmNvbnN0IHJlc2V0Rm4gPSAob3JkZXIsIGRvd24sIG9yaWdpbmFsSW5kZXgsIGN1ckluZGV4LCB4LCB5KSA9PiB7XG4gIHJldHVybiBpbmRleCA9PiAoeyB5OiAwLCB4OiAtNTAwMCwgc2NhbGU6IDEsIG9wYWNpdHk6IDAsIHpJbmRleDogJzInLCBzaGFkb3c6IDEsIGltbWVkaWF0ZTogZmFsc2UgfSk7XG59XG5cbmNvbnN0IGJhY2tncm91bmRGbiA9IChvcmRlciwgZG93biwgb3JpZ2luYWxJbmRleCwgY3VySW5kZXgsIHgsIHkpID0+IHtcbiAgcmV0dXJuIGluZGV4ID0+IHtcbiAgICBsZXQgeE11bHRpcGxpZXIgPSBvcmRlci5pbmRleE9mKGluZGV4KTtcbiAgICBpZiAoeE11bHRpcGxpZXIgPT09IC0xKSB7IHhNdWx0aXBsaWVyID0gLTEwMDsgfVxuICAgIHJldHVybiAoZG93biAmJiBpbmRleCA9PT0gb3JpZ2luYWxJbmRleClcbiAgICA/IHsgeTogMCwgeDogY3VySW5kZXggKiBCTE9DS19TSVpFX1dJVEhfUEFERElORyArIHgsIHNjYWxlOiAxLCB6SW5kZXg6ICcxJywgc2hhZG93OiAxNSwgb3BhY2l0eTogMC41LCBpbW1lZGlhdGU6IG4gPT4gbiA9PT0gJ3gnIHx8IG4gPT09ICd6SW5kZXgnIH1cbiAgICA6IHsgeTogMCwgeDogeE11bHRpcGxpZXIgKiBCTE9DS19TSVpFX1dJVEhfUEFERElORywgc2NhbGU6IDEsIHpJbmRleDogJzEnLCBzaGFkb3c6IDEsIG9wYWNpdHk6MCwgaW1tZWRpYXRlOiBmYWxzZSB9O1xuICB9XG59XG5cbmNvbnN0IFBPT0xfU0laRSA9IDEwO1xuXG5mdW5jdGlvbiBEcmFnZ2FibGVMaXN0KHByb3BzKSB7XG4gIGxldCBpdGVtcyA9IHByb3BzLml0ZW1zO1xuICBsZXQgeyBvcmRlcj1bXSwgc2V0T3JkZXIsIGFuc3dlciwgb25Db3JyZWN0LCBhbnN3ZXJzIH0gPSBwcm9wcztcbiAgY29uc3QgW3NwcmluZ3MsIHNldFNwcmluZ3NdID0gdXNlU3ByaW5ncyhQT09MX1NJWkUsIGZuKG9yZGVyLm1hcChvID0+IG8ub3JpZ0lkeCkpKSAvLyBDcmVhdGUgc3ByaW5ncywgZWFjaCBjb3JyZXNwb25kcyB0byBhbiBpdGVtLCBjb250cm9sbGluZyBpdHMgdHJhbnNmb3JtLCBzY2FsZSwgZXRjLlxuICBjb25zdCBbYmFja2dyb3VuZFNwcmluZ3MsIHNldEJhY2tncm91bmRTcHJpbmdzXSA9IHVzZVNwcmluZ3MoUE9PTF9TSVpFLCBmbihvcmRlci5tYXAobyA9PiBvLm9yaWdJZHgpKSkgLy8gQ3JlYXRlIHNwcmluZ3MsIGVhY2ggY29ycmVzcG9uZHMgdG8gYW4gaXRlbSwgY29udHJvbGxpbmcgaXRzIHRyYW5zZm9ybSwgc2NhbGUsIGV0Yy5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBuZXdPcmRlciA9IG9yZGVyO1xuICAgIHNldFNwcmluZ3MocmVzZXRGbihuZXdPcmRlci5tYXAobyA9PiBvLm9yaWdJZHgpKSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNwcmluZ3MoZm4obmV3T3JkZXIubWFwKG8gPT4gby5vcmlnSWR4KSkpO1xuICAgICAgc2V0QmFja2dyb3VuZFNwcmluZ3MoYmFja2dyb3VuZEZuKG5ld09yZGVyLm1hcChvID0+IG8ub3JpZ0lkeCkpKTtcbiAgICB9LCA1MDApO1xuXG4gICAgY29uc29sZS5sb2coYW5zd2Vycyk7XG4gIH0sIFtwcm9wcy5pdGVtc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnNob3dBbnN3ZXIpIHtcbiAgICAgIHNldFNwcmluZ3MoZm4ob3JkZXIubWFwKG8gPT4gby5vcmlnSWR4KSkpO1xuICAgICAgc2V0QmFja2dyb3VuZFNwcmluZ3MoYmFja2dyb3VuZEZuKG9yZGVyLm1hcChvID0+IG8ub3JpZ0lkeCkpKTtcbiAgICAgIGNoZWNrQ29ycmVjdChvcmRlcik7XG4gICAgfVxuICB9LCBbb3JkZXJdKTtcblxuXG4gIGNvbnN0IFsgYmFja2dyb3VuZEluZm8sIHNldEJhY2tncm91bmRJbmZvIF0gPSB1c2VTdGF0ZSh7IG9uOiBmYWxzZSwgaWR4OiAwIH0pO1xuICBsZXQgc2V0TGV0dGVyID0gKG9yZGVySWR4LCBsZXR0ZXIpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gWy4uLm9yZGVyXTtcbiAgICByZXN1bHRbb3JkZXJJZHhdLmxldHRlciA9IGxldHRlcjtcbiAgICBzZXRPcmRlcihyZXN1bHQpO1xuICB9O1xuXG4gIGNvbnN0IHNldExldHRlcklmTW92ZWQgPSAoY3VySW5kZXgsIHkpID0+IHtcbiAgICBpZiAoeSA+IC0zKkJMT0NLX1NJWkUgJiYgeSA8PSAgLTIqQkxPQ0tfU0laRSkge1xuICAgICAgc2V0TGV0dGVyKGN1ckluZGV4LCAnQScpO1xuICAgIH0gZWxzZSBpZiAoeSA+IC0yKkJMT0NLX1NJWkUgJiYgeSA8IC0xKkJMT0NLX1NJWkUpIHtcbiAgICAgIHNldExldHRlcihjdXJJbmRleCwgJ0UnKTtcbiAgICB9IGVsc2UgaWYgKHkgPj0gMSpCTE9DS19TSVpFICYmIHkgPD0gMipCTE9DS19TSVpFKSB7XG4gICAgICBzZXRMZXR0ZXIoY3VySW5kZXgsICdJJyk7XG4gICAgfSBlbHNlIGlmICh5ID4gMipCTE9DS19TSVpFICYmIHkgPD0gMypCTE9DS19TSVpFKSB7XG4gICAgICBzZXRMZXR0ZXIoY3VySW5kZXgsICdPJyk7XG4gICAgfSBlbHNlIGlmICh5ID4gMypCTE9DS19TSVpFICYmIHkgPD0gNCpCTE9DS19TSVpFKSB7XG4gICAgICBzZXRMZXR0ZXIoY3VySW5kZXgsICdVJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tDb3JyZWN0ID0gKG5ld09yZGVyKSA9PiB7XG4gICAgbGV0IGN1cnJlbnQgPSBuZXdPcmRlci5tYXAobyA9PiBvLmxldHRlcikuam9pbignJyk7XG4gICAgaWYgKGFuc3dlcnMuaW5jbHVkZXMoY3VycmVudC50b1VwcGVyQ2FzZSgpKSkge1xuICAgICAgaWYgKHByb3BzLnNob3dBbnN3ZXIpIHtcbiAgICAgICAgcHJvcHMuc2V0QmFja2dyb3VuZENvbG9yKCdDSEVBVCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMuc2V0QmFja2dyb3VuZENvbG9yKCdBTlNXRVJFRCcpO1xuICAgICAgICBwcm9wcy5oaWRlR2l2ZXVwQnV0dG9uKCk7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U3ByaW5ncyhyZXNldEZuKG5ld09yZGVyLm1hcChvID0+IG8ub3JpZ0lkeCkpKTtcbiAgICAgIH0sIDIwMDApO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb25Db3JyZWN0KCk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCBiaW5kID0gdXNlRHJhZygoeyBhcmdzOiBbb3JpZ2luYWxJbmRleF0sIGRvd24sIG1vdmVtZW50OiBbeCwgeV0gfSkgPT4ge1xuICAgIGNvbnN0IGN1ckluZGV4ID0gb3JkZXIuZmluZEluZGV4KG8gPT4gby5vcmlnSWR4ID09PSBvcmlnaW5hbEluZGV4KTtcbiAgICBjb25zdCBjdXJDb2wgPSBjbGFtcChNYXRoLnJvdW5kKChjdXJJbmRleCAqIEJMT0NLX1NJWkUgKyB4KSAvIEJMT0NLX1NJWkUpLCAwLCBpdGVtcy5sZW5ndGggLSAxKTtcbiAgICBjb25zdCBuZXdPcmRlciA9IG1vdmUob3JkZXIsIGN1ckluZGV4LCBjdXJDb2wpO1xuXG4gICAgY29uc3QgbGV0dGVyID0gb3JkZXJbY3VySW5kZXhdLmxldHRlcjtcbiAgICBpZiAoISdBRUlPVV8nLmluY2x1ZGVzKGxldHRlcikpIHsgcmV0dXJuIDsgfVxuICAgIHNldEJhY2tncm91bmRJbmZvKHsgb246IHRydWUsIGlkeDogY3VyQ29sfSk7XG4gICAgc2V0TGV0dGVySWZNb3ZlZChjdXJJbmRleCwgeSk7XG4gICAgc2V0U3ByaW5ncyhmbihuZXdPcmRlci5tYXAobyA9PiBvLm9yaWdJZHgpLCBkb3duLCBvcmlnaW5hbEluZGV4LCBjdXJJbmRleCwgeCwgeSkpIC8vIEZlZWQgc3ByaW5ncyBuZXcgc3R5bGUgZGF0YSwgdGhleSdsbCBhbmltYXRlIHRoZSB2aWV3IHdpdGhvdXQgY2F1c2luZyBhIHNpbmdsZSByZW5kZXJcbiAgICBzZXRCYWNrZ3JvdW5kU3ByaW5ncyhiYWNrZ3JvdW5kRm4obmV3T3JkZXIubWFwKG8gPT4gby5vcmlnSWR4KSwgZG93biwgb3JpZ2luYWxJbmRleCwgY3VySW5kZXgsIHgsIHkpKSAvLyBGZWVkIHNwcmluZ3MgbmV3IHN0eWxlIGRhdGEsIHRoZXknbGwgYW5pbWF0ZSB0aGUgdmlldyB3aXRob3V0IGNhdXNpbmcgYSBzaW5nbGUgcmVuZGVyXG5cblxuICAgIGlmICghZG93bikge1xuICAgICAgc2V0T3JkZXIobmV3T3JkZXIpO1xuICAgICAgc2V0QmFja2dyb3VuZEluZm8oeyBvbjogZmFsc2UsIGlkeDogY3VyQ29sIH0pO1xuICAgICAgY2hlY2tDb3JyZWN0KG5ld09yZGVyKTtcbiAgICB9IFxuXG4gICAgaWYgKGFuc3dlcnMuaW5jbHVkZXMob3JkZXIubWFwKG8gPT4gby5sZXR0ZXIpLmpvaW4oJycpKSkgeyByZXR1cm47IH1cblxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhZ2dhYmxlLWxpc3RcIiBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5sb2FkaW5nID8gbnVsbCA6IG51bGwgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtd3JhcHBlclwiIHN0eWxlPXt7IHdpZHRoOiBCTE9DS19TSVpFX1dJVEhfUEFERElORyAqIGl0ZW1zLmxlbmd0aCB9fT5cbiAgICAgICAgeyBiYWNrZ3JvdW5kU3ByaW5ncy5tYXAoKHsgekluZGV4LCBzaGFkb3csIHgsIHksIHNjYWxlLCBvcGFjaXR5PTB9LCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPj0gaXRlbXMubGVuZ3RoKSB7IHJldHVybiA8YW5pbWF0ZWQuZGl2IGtleT17aX0gc3R5bGU9e3tkaXNwbGF5Oidub25lJywgb3BhY2l0eTogMH19Pm5vdGhpbmc8L2FuaW1hdGVkLmRpdj47IH1cbiAgICAgICAgICByZXR1cm4gKDxCYWNrZ3JvdW5kIGtleT17aX0gc3R5bGU9e3sgekluZGV4LCB4LCBvcGFjaXR5LCB5LCBzY2FsZSB9fSAvPik7XG4gICAgICAgIH0pIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgc3R5bGU9e3sgd2lkdGg6IEJMT0NLX1NJWkVfV0lUSF9QQURESU5HICogaXRlbXMubGVuZ3RoIH19PlxuICAgICAgICB7c3ByaW5ncy5tYXAoKHsgekluZGV4LCBib3hTaGFkb3csIHgsIHksIHNjYWxlLCBvcGFjaXR5IH0sIGkpID0+IHtcbiAgICAgICAgICAvLyBpZiAoaSA+PSBpdGVtcy5sZW5ndGgpIHsgcmV0dXJuIDxkaXYga2V5PXtpfSBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0+bm90aGluZzwvZGl2PjsgfVxuXG4gICAgICAgICAgbGV0IGN1ckJsb2NrID0gb3JkZXIuZmluZChvID0+IG8ub3JpZ0lkeCA9PT0gaSkgfHwgeyBsZXR0ZXI6ICdfJ307XG4gICAgICAgICAgbGV0IGN1ckxldHRlciA9IGN1ckJsb2NrLmxldHRlcjtcblxuICAgICAgICAgIGxldCBjbGFzc05hbWVzID0gW1wicGFuZVwiXTtcbiAgICAgICAgICBpZiAoISdBRUlPVV8nLmluY2x1ZGVzKGN1ckxldHRlcikpIHsgY2xhc3NOYW1lcy5wdXNoKCdjb25zb25hbnQnKTsgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9XG4gICAgICAgICAgICAgIHsuLi5iaW5kKGkpfVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleCwgb3BhY2l0eSxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGJveFNoYWRvdyxcbiAgICAgICAgICAgICAgICB4LCB5LCBzY2FsZSB9fT5cbiAgICAgICAgICAgICAgPGRpdj57Y3VyTGV0dGVyfSA8L2Rpdj5cbiAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSApfVxuICAgICAgPC9kaXY+XG4gICAgICB7ZHJhZ2dhYmxlTGlzdFN0eWxlfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZUxpc3Q7Il19 */\n/*@ sourceURL=/Users/jackkwan/Projects/vowels/components/DraggableList.js */"));
}

var fn = function fn(order, down, originalIndex, curIndex, x, y) {
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

var resetFn = function resetFn(order, down, originalIndex, curIndex, x, y) {
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

var backgroundFn = function backgroundFn(order, down, originalIndex, curIndex, x, y) {
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

  var _useSprings = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSprings"])(POOL_SIZE, fn(order.map(function (o) {
    return o.origIdx;
  }))),
      _useSprings2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSprings, 2),
      springs = _useSprings2[0],
      setSprings = _useSprings2[1]; // Create springs, each corresponds to an item, controlling its transform, scale, etc.


  var _useSprings3 = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSprings"])(POOL_SIZE, fn(order.map(function (o) {
    return o.origIdx;
  }))),
      _useSprings4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSprings3, 2),
      backgroundSprings = _useSprings4[0],
      setBackgroundSprings = _useSprings4[1]; // Create springs, each corresponds to an item, controlling its transform, scale, etc.


  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var newOrder = order;
    setSprings(resetFn(newOrder.map(function (o) {
      return o.origIdx;
    })));
    setTimeout(function () {
      setSprings(fn(newOrder.map(function (o) {
        return o.origIdx;
      })));
      setBackgroundSprings(backgroundFn(newOrder.map(function (o) {
        return o.origIdx;
      })));
    }, 500);
    console.log(answers);
  }, [props.items]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (props.showAnswer) {
      setSprings(fn(order.map(function (o) {
        return o.origIdx;
      })));
      setBackgroundSprings(backgroundFn(order.map(function (o) {
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
        setSprings(resetFn(newOrder.map(function (o) {
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
    setSprings(fn(newOrder.map(function (o) {
      return o.origIdx;
    }), down, originalIndex, curIndex, x, y)); // Feed springs new style data, they'll animate the view without causing a single render

    setBackgroundSprings(backgroundFn(newOrder.map(function (o) {
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
      lineNumber: 220
    },
    __self: this
  }, __jsx("div", {
    className: "background-wrapper",
    style: {
      width: BLOCK_SIZE_WITH_PADDING * items.length
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
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
          lineNumber: 223
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
        lineNumber: 224
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
      lineNumber: 227
    },
    __self: this
  }, springs.map(function (_ref3, i) {
    var zIndex = _ref3.zIndex,
        boxShadow = _ref3.boxShadow,
        x = _ref3.x,
        y = _ref3.y,
        scale = _ref3.scale,
        opacity = _ref3.opacity;
    // if (i >= items.length) { return <div key={i} style={{display:'none'}}>nothing</div>; }
    var curBlock = order.find(function (o) {
      return o.origIdx === i;
    }) || {
      letter: '_'
    };
    var curLetter = curBlock.letter;
    var classNames = ["pane"];

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
        lineNumber: 237
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, curLetter, " "));
  })), draggableListStyle);
}

/* harmony default export */ __webpack_exports__["default"] = (DraggableList);

/***/ })

})
//# sourceMappingURL=index.js.9f586d9aeb08e4da8b12.hot-update.js.map