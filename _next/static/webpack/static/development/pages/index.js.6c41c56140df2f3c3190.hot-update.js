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
}, "\n  .background-wrapper {\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n    align-items: center;\n    height: 80vh;\n  }\n\n  .draggable-list {\n    height: 80vh;\n    position: absolute;\n    top: 0;\n  }\n\n  .background {\n    position: absolute;\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .content {\n    padding: 5px;\n    width: 500px;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  \n  .tile {\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    overflow: visible;\n    pointer-events: auto;\n    border-radius: 5px;\n    color: white;\n    font-size: 30px;\n    background: lightblue;\n    text-transform: uppercase;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    font-weight: bold;\n  }  \n  \n  .tile {\n    background: gold;\n    color: black;\n  }\n\n  .consonant {\n    background: grey;\n    color: white;\n  }\n\n");

var BLOCK_SIZE = 40;
var PADDING = 3;
var BLOCK_SIZE_WITH_PADDING = BLOCK_SIZE + PADDING;

function Background(props) {
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: "background"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3440477674" + " " + "background-letter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3440477674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "A")), __jsx("div", {
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
  }, "E")), __jsx("div", {
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
  }, "_")), __jsx("div", {
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
  }, "I")), __jsx("div", {
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
  }, "O")), __jsx("div", {
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
  }, "U")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3440477674",
    __self: this
  }, ".background-letter.jsx-3440477674{height:40px;width:40px;border:black 3px solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:5px;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px;top:35px;font-size:30px;position:relative;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNra3dhbi9Qcm9qZWN0cy92b3dlbHMvY29tcG9uZW50cy9EcmFnZ2FibGVMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGaUIsQUFHcUIsWUFDRCxXQUNZLHVCQUNWLDBFQUNLLGtCQUNBLGtCQUNLLG1HQUNKLDZGQUNBLG1CQUNWLFNBQ00sZUFDRyxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2phY2trd2FuL1Byb2plY3RzL3Zvd2Vscy9jb21wb25lbnRzL0RyYWdnYWJsZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlZCwgdXNlU3ByaW5ncywgdXNlU3ByaW5nIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcbmltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC11c2UtZ2VzdHVyZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbW92ZSBmcm9tICdsb2Rhc2gtbW92ZSc7XG5cbmxldCBkcmFnZ2FibGVMaXN0U3R5bGUgPSA8c3R5bGUganN4PVwidHJ1ZVwiPntgXG4gIC5iYWNrZ3JvdW5kLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gIH1cblxuICAuZHJhZ2dhYmxlLWxpc3Qge1xuICAgIGhlaWdodDogODB2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICBcbiAgLnRpbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfSAgXG4gIFxuICAudGlsZSB7XG4gICAgYmFja2dyb3VuZDogZ29sZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuY29uc29uYW50IHtcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG5gfTwvc3R5bGU+O1xuXG5cbmNvbnN0IEJMT0NLX1NJWkUgPSA0MDtcbmNvbnN0IFBBRERJTkcgPSAzO1xuY29uc3QgQkxPQ0tfU0laRV9XSVRIX1BBRERJTkcgPSBCTE9DS19TSVpFICsgUEFERElORztcblxuZnVuY3Rpb24gQmFja2dyb3VuZChwcm9wcykge1xuICByZXR1cm4gPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCIgey4uLnByb3BzfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtbGV0dGVyXCI+PGRpdj5BPC9kaXY+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWxldHRlclwiPjxkaXY+RTwvZGl2PjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1sZXR0ZXJcIj48ZGl2Pl88L2Rpdj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtbGV0dGVyXCI+PGRpdj5JPC9kaXY+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWxldHRlclwiPjxkaXY+TzwvZGl2PjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1sZXR0ZXJcIj48ZGl2PlU8L2Rpdj48L2Rpdj5cbiAgICA8c3R5bGUganN4ID57YFxuICAgICAgLmJhY2tncm91bmQtbGV0dGVyIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYm9yZGVyOiBibGFjayAzcHggc29saWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgdG9wOiAzNXB4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2FuaW1hdGVkLmRpdj5cbn1cblxuY29uc3QgdGlsZVNwcmluZ1NldHRlciA9IChvcmRlciwgZG93biwgb3JpZ2luYWxJbmRleCwgY3VySW5kZXgsIHgsIHkpID0+IHtcbiAgcmV0dXJuIGluZGV4ID0+IHtcbiAgICBsZXQgeE11bHRpcGxpZXIgPSBvcmRlci5pbmRleE9mKGluZGV4KTtcbiAgICBpZiAoeE11bHRpcGxpZXIgPT09IC0xKSB7IHhNdWx0aXBsaWVyID0gLTEwMDsgfVxuICAgIHJldHVybiAoZG93biAmJiBpbmRleCA9PT0gb3JpZ2luYWxJbmRleClcbiAgICA/IHsgeTogeSwgeDogY3VySW5kZXggKiBCTE9DS19TSVpFX1dJVEhfUEFERElORyArIHgsIG9wYWNpdHk6IDEsIHNjYWxlOiAxLjEsIHpJbmRleDogJzMnLCBib3hTaGFkb3c6ICcwcHggMjBweCAyMHB4IDBweCByZ2JhKDAsMCwwLDAuNCknLCBpbW1lZGlhdGU6IG4gPT4gbiA9PT0gJ3gnIHx8IG4gPT09ICd6SW5kZXgnIH1cbiAgICA6IHsgeTogMCwgeDogeE11bHRpcGxpZXIgKiBCTE9DS19TSVpFX1dJVEhfUEFERElORywgb3BhY2l0eTogMSwgc2NhbGU6IDEsIHpJbmRleDogJzInLCBib3hTaGFkb3c6ICcwcHggMHB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjQpJywgaW1tZWRpYXRlOiBmYWxzZSB9O1xuICB9XG59XG5cbmNvbnN0IHJlc2V0VGlsZVNldHRlciA9IChvcmRlciwgZG93biwgb3JpZ2luYWxJbmRleCwgY3VySW5kZXgsIHgsIHkpID0+IHtcbiAgcmV0dXJuIGluZGV4ID0+ICh7IHk6IDAsIHg6IC01MDAwLCBzY2FsZTogMSwgb3BhY2l0eTogMCwgekluZGV4OiAnMicsIHNoYWRvdzogMSwgaW1tZWRpYXRlOiBmYWxzZSB9KTtcbn1cblxuY29uc3QgYmFja2dyb25kU3ByaW5nU2V0dGVyID0gKG9yZGVyLCBkb3duLCBvcmlnaW5hbEluZGV4LCBjdXJJbmRleCwgeCwgeSkgPT4ge1xuICByZXR1cm4gaW5kZXggPT4ge1xuICAgIGxldCB4TXVsdGlwbGllciA9IG9yZGVyLmluZGV4T2YoaW5kZXgpO1xuICAgIGlmICh4TXVsdGlwbGllciA9PT0gLTEpIHsgeE11bHRpcGxpZXIgPSAtMTAwOyB9XG4gICAgcmV0dXJuIChkb3duICYmIGluZGV4ID09PSBvcmlnaW5hbEluZGV4KVxuICAgID8geyB5OiAwLCB4OiBjdXJJbmRleCAqIEJMT0NLX1NJWkVfV0lUSF9QQURESU5HICsgeCwgc2NhbGU6IDEsIHpJbmRleDogJzEnLCBzaGFkb3c6IDE1LCBvcGFjaXR5OiAwLjUsIGltbWVkaWF0ZTogbiA9PiBuID09PSAneCcgfHwgbiA9PT0gJ3pJbmRleCcgfVxuICAgIDogeyB5OiAwLCB4OiB4TXVsdGlwbGllciAqIEJMT0NLX1NJWkVfV0lUSF9QQURESU5HLCBzY2FsZTogMSwgekluZGV4OiAnMScsIHNoYWRvdzogMSwgb3BhY2l0eTowLCBpbW1lZGlhdGU6IGZhbHNlIH07XG4gIH1cbn1cblxuY29uc3QgUE9PTF9TSVpFID0gMTA7XG5cbmZ1bmN0aW9uIERyYWdnYWJsZUxpc3QocHJvcHMpIHtcbiAgbGV0IGl0ZW1zID0gcHJvcHMuaXRlbXM7XG4gIGxldCB7IG9yZGVyPVtdLCBzZXRPcmRlciwgYW5zd2VyLCBvbkNvcnJlY3QsIGFuc3dlcnMgfSA9IHByb3BzO1xuICBjb25zdCBbc3ByaW5ncywgc2V0U3ByaW5nc10gPSB1c2VTcHJpbmdzKFBPT0xfU0laRSwgdGlsZVNwcmluZ1NldHRlcihvcmRlci5tYXAobyA9PiBvLm9yaWdJZHgpKSkgLy8gQ3JlYXRlIHNwcmluZ3MsIGVhY2ggY29ycmVzcG9uZHMgdG8gYW4gaXRlbSwgY29udHJvbGxpbmcgaXRzIHRyYW5zZm9ybSwgc2NhbGUsIGV0Yy5cbiAgY29uc3QgW2JhY2tncm91bmRTcHJpbmdzLCBzZXRCYWNrZ3JvdW5kU3ByaW5nc10gPSB1c2VTcHJpbmdzKFBPT0xfU0laRSwgdGlsZVNwcmluZ1NldHRlcihvcmRlci5tYXAobyA9PiBvLm9yaWdJZHgpKSkgLy8gQ3JlYXRlIHNwcmluZ3MsIGVhY2ggY29ycmVzcG9uZHMgdG8gYW4gaXRlbSwgY29udHJvbGxpbmcgaXRzIHRyYW5zZm9ybSwgc2NhbGUsIGV0Yy5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBuZXdPcmRlciA9IG9yZGVyO1xuICAgIHNldFNwcmluZ3MocmVzZXRUaWxlU2V0dGVyKG5ld09yZGVyLm1hcChvID0+IG8ub3JpZ0lkeCkpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U3ByaW5ncyh0aWxlU3ByaW5nU2V0dGVyKG5ld09yZGVyLm1hcChvID0+IG8ub3JpZ0lkeCkpKTtcbiAgICAgIHNldEJhY2tncm91bmRTcHJpbmdzKGJhY2tncm9uZFNwcmluZ1NldHRlcihuZXdPcmRlci5tYXAobyA9PiBvLm9yaWdJZHgpKSk7XG4gICAgfSwgNTAwKTtcblxuICB9LCBbcHJvcHMuaXRlbXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5zaG93QW5zd2VyKSB7XG4gICAgICBzZXRTcHJpbmdzKHRpbGVTcHJpbmdTZXR0ZXIob3JkZXIubWFwKG8gPT4gby5vcmlnSWR4KSkpO1xuICAgICAgc2V0QmFja2dyb3VuZFNwcmluZ3MoYmFja2dyb25kU3ByaW5nU2V0dGVyKG9yZGVyLm1hcChvID0+IG8ub3JpZ0lkeCkpKTtcbiAgICAgIGNoZWNrQ29ycmVjdChvcmRlcik7XG4gICAgfVxuICB9LCBbb3JkZXJdKTtcblxuXG4gIGNvbnN0IFsgYmFja2dyb3VuZEluZm8sIHNldEJhY2tncm91bmRJbmZvIF0gPSB1c2VTdGF0ZSh7IG9uOiBmYWxzZSwgaWR4OiAwIH0pO1xuICBsZXQgc2V0TGV0dGVyID0gKG9yZGVySWR4LCBsZXR0ZXIpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gWy4uLm9yZGVyXTtcbiAgICByZXN1bHRbb3JkZXJJZHhdLmxldHRlciA9IGxldHRlcjtcbiAgICBzZXRPcmRlcihyZXN1bHQpO1xuICB9O1xuXG4gIGNvbnN0IHNldExldHRlcklmTW92ZWQgPSAoY3VySW5kZXgsIHkpID0+IHtcbiAgICBpZiAoeSA+IC0zKkJMT0NLX1NJWkUgJiYgeSA8PSAgLTIqQkxPQ0tfU0laRSkge1xuICAgICAgc2V0TGV0dGVyKGN1ckluZGV4LCAnQScpO1xuICAgIH0gZWxzZSBpZiAoeSA+IC0yKkJMT0NLX1NJWkUgJiYgeSA8IC0xKkJMT0NLX1NJWkUpIHtcbiAgICAgIHNldExldHRlcihjdXJJbmRleCwgJ0UnKTtcbiAgICB9IGVsc2UgaWYgKHkgPj0gMSpCTE9DS19TSVpFICYmIHkgPD0gMipCTE9DS19TSVpFKSB7XG4gICAgICBzZXRMZXR0ZXIoY3VySW5kZXgsICdJJyk7XG4gICAgfSBlbHNlIGlmICh5ID4gMipCTE9DS19TSVpFICYmIHkgPD0gMypCTE9DS19TSVpFKSB7XG4gICAgICBzZXRMZXR0ZXIoY3VySW5kZXgsICdPJyk7XG4gICAgfSBlbHNlIGlmICh5ID4gMypCTE9DS19TSVpFICYmIHkgPD0gNCpCTE9DS19TSVpFKSB7XG4gICAgICBzZXRMZXR0ZXIoY3VySW5kZXgsICdVJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tDb3JyZWN0ID0gKG5ld09yZGVyKSA9PiB7XG4gICAgbGV0IGN1cnJlbnQgPSBuZXdPcmRlci5tYXAobyA9PiBvLmxldHRlcikuam9pbignJyk7XG4gICAgaWYgKGFuc3dlcnMuaW5jbHVkZXMoY3VycmVudC50b1VwcGVyQ2FzZSgpKSkge1xuICAgICAgaWYgKHByb3BzLnNob3dBbnN3ZXIpIHtcbiAgICAgICAgcHJvcHMuc2V0QmFja2dyb3VuZENvbG9yKCdDSEVBVCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMuc2V0QmFja2dyb3VuZENvbG9yKCdBTlNXRVJFRCcpO1xuICAgICAgICBwcm9wcy5oaWRlR2l2ZXVwQnV0dG9uKCk7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U3ByaW5ncyhyZXNldFRpbGVTZXR0ZXIobmV3T3JkZXIubWFwKG8gPT4gby5vcmlnSWR4KSkpO1xuICAgICAgfSwgMjAwMCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvbkNvcnJlY3QoKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGJpbmQgPSB1c2VEcmFnKCh7IGFyZ3M6IFtvcmlnaW5hbEluZGV4XSwgZG93biwgbW92ZW1lbnQ6IFt4LCB5XSB9KSA9PiB7XG4gICAgY29uc3QgY3VySW5kZXggPSBvcmRlci5maW5kSW5kZXgobyA9PiBvLm9yaWdJZHggPT09IG9yaWdpbmFsSW5kZXgpO1xuICAgIGNvbnN0IGN1ckNvbCA9IGNsYW1wKE1hdGgucm91bmQoKGN1ckluZGV4ICogQkxPQ0tfU0laRSArIHgpIC8gQkxPQ0tfU0laRSksIDAsIGl0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IG5ld09yZGVyID0gbW92ZShvcmRlciwgY3VySW5kZXgsIGN1ckNvbCk7XG5cbiAgICBjb25zdCBsZXR0ZXIgPSBvcmRlcltjdXJJbmRleF0ubGV0dGVyO1xuICAgIGlmICghJ0FFSU9VXycuaW5jbHVkZXMobGV0dGVyKSkgeyByZXR1cm4gOyB9XG4gICAgc2V0QmFja2dyb3VuZEluZm8oeyBvbjogdHJ1ZSwgaWR4OiBjdXJDb2x9KTtcbiAgICBzZXRMZXR0ZXJJZk1vdmVkKGN1ckluZGV4LCB5KTtcbiAgICBzZXRTcHJpbmdzKHRpbGVTcHJpbmdTZXR0ZXIobmV3T3JkZXIubWFwKG8gPT4gby5vcmlnSWR4KSwgZG93biwgb3JpZ2luYWxJbmRleCwgY3VySW5kZXgsIHgsIHkpKSAvLyBGZWVkIHNwcmluZ3MgbmV3IHN0eWxlIGRhdGEsIHRoZXknbGwgYW5pbWF0ZSB0aGUgdmlldyB3aXRob3V0IGNhdXNpbmcgYSBzaW5nbGUgcmVuZGVyXG4gICAgc2V0QmFja2dyb3VuZFNwcmluZ3MoYmFja2dyb25kU3ByaW5nU2V0dGVyKG5ld09yZGVyLm1hcChvID0+IG8ub3JpZ0lkeCksIGRvd24sIG9yaWdpbmFsSW5kZXgsIGN1ckluZGV4LCB4LCB5KSkgLy8gRmVlZCBzcHJpbmdzIG5ldyBzdHlsZSBkYXRhLCB0aGV5J2xsIGFuaW1hdGUgdGhlIHZpZXcgd2l0aG91dCBjYXVzaW5nIGEgc2luZ2xlIHJlbmRlclxuXG5cbiAgICBpZiAoIWRvd24pIHtcbiAgICAgIHNldE9yZGVyKG5ld09yZGVyKTtcbiAgICAgIHNldEJhY2tncm91bmRJbmZvKHsgb246IGZhbHNlLCBpZHg6IGN1ckNvbCB9KTtcbiAgICAgIGNoZWNrQ29ycmVjdChuZXdPcmRlcik7XG4gICAgfSBcblxuICAgIGlmIChhbnN3ZXJzLmluY2x1ZGVzKG9yZGVyLm1hcChvID0+IG8ubGV0dGVyKS5qb2luKCcnKSkpIHsgcmV0dXJuOyB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcmFnZ2FibGUtbGlzdFwiIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLmxvYWRpbmcgPyBudWxsIDogbnVsbCB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC13cmFwcGVyXCIgc3R5bGU9e3sgd2lkdGg6IEJMT0NLX1NJWkVfV0lUSF9QQURESU5HICogaXRlbXMubGVuZ3RoIH19PlxuICAgICAgICB7IGJhY2tncm91bmRTcHJpbmdzLm1hcCgoeyB6SW5kZXgsIHNoYWRvdywgeCwgeSwgc2NhbGUsIG9wYWNpdHk9MH0sIGkpID0+IHtcbiAgICAgICAgICBpZiAoaSA+PSBpdGVtcy5sZW5ndGgpIHsgcmV0dXJuIDxhbmltYXRlZC5kaXYga2V5PXtpfSBzdHlsZT17e2Rpc3BsYXk6J25vbmUnLCBvcGFjaXR5OiAwfX0+bm90aGluZzwvYW5pbWF0ZWQuZGl2PjsgfVxuICAgICAgICAgIHJldHVybiAoPEJhY2tncm91bmQga2V5PXtpfSBzdHlsZT17eyB6SW5kZXgsIHgsIG9wYWNpdHksIHksIHNjYWxlIH19IC8+KTtcbiAgICAgICAgfSkgfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogQkxPQ0tfU0laRV9XSVRIX1BBRERJTkcgKiBpdGVtcy5sZW5ndGggfX0+XG4gICAgICAgIHtzcHJpbmdzLm1hcCgoeyB6SW5kZXgsIGJveFNoYWRvdywgeCwgeSwgc2NhbGUsIG9wYWNpdHkgfSwgaSkgPT4ge1xuICAgICAgICAgIGxldCBjdXJCbG9jayA9IG9yZGVyLmZpbmQobyA9PiBvLm9yaWdJZHggPT09IGkpIHx8IHsgbGV0dGVyOiAnXycgfTtcbiAgICAgICAgICBsZXQgY3VyTGV0dGVyID0gY3VyQmxvY2subGV0dGVyO1xuICAgICAgICAgIGxldCBjbGFzc05hbWVzID0gW1widGlsZVwiXTtcbiAgICAgICAgICBpZiAoISdBRUlPVV8nLmluY2x1ZGVzKGN1ckxldHRlcikpIHsgY2xhc3NOYW1lcy5wdXNoKCdjb25zb25hbnQnKTsgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9XG4gICAgICAgICAgICAgIHsuLi5iaW5kKGkpfVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleCwgb3BhY2l0eSxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGJveFNoYWRvdyxcbiAgICAgICAgICAgICAgICB4LCB5LCBzY2FsZSB9fT5cbiAgICAgICAgICAgICAgPGRpdj57Y3VyTGV0dGVyfSA8L2Rpdj5cbiAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSApfVxuICAgICAgPC9kaXY+XG4gICAgICB7ZHJhZ2dhYmxlTGlzdFN0eWxlfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZUxpc3Q7Il19 */\n/*@ sourceURL=/Users/jackkwan/Projects/vowels/components/DraggableList.js */"));
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
      lineNumber: 217
    },
    __self: this
  }, __jsx("div", {
    className: "background-wrapper",
    style: {
      width: BLOCK_SIZE_WITH_PADDING * items.length
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
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
          lineNumber: 220
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
        lineNumber: 221
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
      lineNumber: 224
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
        lineNumber: 231
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, curLetter, " "));
  })), draggableListStyle);
}

/* harmony default export */ __webpack_exports__["default"] = (DraggableList);

/***/ })

})
//# sourceMappingURL=index.js.6c41c56140df2f3c3190.hot-update.js.map