"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Test; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Steps */ \"./components/Steps.js\");\n/* harmony import */ var _new_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new_data.json */ \"./new_data.json\");\n/* harmony import */ var _components_CommonColors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CommonColors */ \"./components/CommonColors.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Test() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"0\"), 2), value = ref[0], setValue = ref[1];\n    var questions = _new_data_json__WEBPACK_IMPORTED_MODULE_3__.questions;\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(question.love), 2), questionTopic = ref1[0], setQuestionTopic = ref1[1];\n    var answers = _new_data_json__WEBPACK_IMPORTED_MODULE_3__.answers;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var passData = router.query;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        if (passData.topic === \"T\\xecnh y\\xeau\") setQuestionTopic(questions.love);\n        if (passData.topic === \"Gia đ\\xecnh\") setQuestionTopic(questions.family);\n        if (passData.topic === \"Bản th\\xe2n\") setQuestionTopic(questions.self);\n        if (passData.topic === \"C\\xf4ng việc\") setQuestionTopic(questions.work);\n        if (passData.topic === \"Học tập\") setQuestionTopic(questions.study);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            w: \"full\",\n            bgColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useColorModeValue)(_components_CommonColors__WEBPACK_IMPORTED_MODULE_4__.CommonColors.bg, _components_CommonColors__WEBPACK_IMPORTED_MODULE_4__.CommonColors.bg_dark),\n            py: \"5rem\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Steps__WEBPACK_IMPORTED_MODULE_2__.StepsInput, {\n                topic: passData,\n                questions: questionTopic,\n                answers: answers\n            }, void 0, false, {\n                fileName: \"/Users/thanhhoann/coding/BetterDay/pages/test.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/thanhhoann/coding/BetterDay/pages/test.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Test, \"lxsm2wwJXaqs9ybGw3ilAmT9LcU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useColorModeValue\n    ];\n});\n_c = Test;\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVUwQjtBQUNBO0FBQ3VCO0FBQ2I7QUFDc0I7QUFDbEI7O0FBRXpCLFNBQVNjLElBQUksR0FBRzs7SUFDN0IsSUFBMEJMLEdBQW1CLG9GQUFuQkEscURBQWMsQ0FBQyxHQUFHLENBQUMsTUFBdENPLEtBQUssR0FBY1AsR0FBbUIsR0FBakMsRUFBRVEsUUFBUSxHQUFJUixHQUFtQixHQUF2QjtJQUN0QixJQUFNUyxTQUFTLEdBQUdQLHFEQUFjO0lBQ2hDLElBQTBDRixJQUE2QixvRkFBN0JBLHFEQUFjLENBQUNVLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLE1BQWhFQyxhQUFhLEdBQXNCWixJQUE2QixHQUFuRCxFQUFFYSxnQkFBZ0IsR0FBSWIsSUFBNkIsR0FBakM7SUFDdEMsSUFBTWMsT0FBTyxHQUFHWixtREFBWTtJQUM1QixJQUFNYSxNQUFNLEdBQUdYLHNEQUFTLEVBQUU7SUFDMUIsSUFBTVksUUFBUSxHQUFHRCxNQUFNLENBQUNFLEtBQUs7SUFFN0JqQixzREFBZSxDQUFDLFdBQU07UUFDcEIsSUFBSWdCLFFBQVEsQ0FBQ0csS0FBSyxLQUFLLGdCQUFVLEVBQUVOLGdCQUFnQixDQUFDSixTQUFTLENBQUNFLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUlLLFFBQVEsQ0FBQ0csS0FBSyxLQUFLLGFBQVUsRUFBRU4sZ0JBQWdCLENBQUNKLFNBQVMsQ0FBQ1csTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSUosUUFBUSxDQUFDRyxLQUFLLEtBQUssYUFBVSxFQUFFTixnQkFBZ0IsQ0FBQ0osU0FBUyxDQUFDWSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJTCxRQUFRLENBQUNHLEtBQUssS0FBSyxjQUFXLEVBQUVOLGdCQUFnQixDQUFDSixTQUFTLENBQUNhLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUlOLFFBQVEsQ0FBQ0csS0FBSyxLQUFLLFNBQVMsRUFBRU4sZ0JBQWdCLENBQUNKLFNBQVMsQ0FBQ2MsS0FBSyxDQUFDLENBQUM7S0FDckUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFO2tCQUNFLDRFQUFDL0IsaURBQUc7WUFDRmdDLENBQUMsRUFBQyxNQUFNO1lBQ1JDLE9BQU8sRUFBRTNCLG1FQUFpQixDQUFDSyxxRUFBZSxFQUFFQSwwRUFBb0IsQ0FBQztZQUNqRXlCLEVBQUUsRUFBQyxNQUFNO3NCQUVULDRFQUFDM0IseURBQVU7Z0JBQ1RrQixLQUFLLEVBQUVILFFBQVE7Z0JBQ2ZQLFNBQVMsRUFBRUcsYUFBYTtnQkFDeEJFLE9BQU8sRUFBRUEsT0FBTzs7Ozs7b0JBQ2hCOzs7OztnQkFDRTtxQkE4QkwsQ0FDSDtDQUNIO0dBNUR1QlQsSUFBSTs7UUFLWEQsa0RBQVM7UUFlVE4sK0RBQWlCOzs7QUFwQlZPLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcz9kMDk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZsZXgsXG4gIEJveCxcbiAgQ2VudGVyLFxuICBSYWRpbyxcbiAgUmFkaW9Hcm91cCxcbiAgU3RhY2ssXG4gIFRleHQsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICB1c2VEaXNjbG9zdXJlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3RlcHNJbnB1dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N0ZXBzXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vbmV3X2RhdGEuanNvblwiO1xuaW1wb3J0IHsgQ29tbW9uQ29sb3JzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uQ29sb3JzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdCgpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIjBcIik7XG4gIGNvbnN0IHF1ZXN0aW9ucyA9IGRhdGEucXVlc3Rpb25zO1xuICBjb25zdCBbcXVlc3Rpb25Ub3BpYywgc2V0UXVlc3Rpb25Ub3BpY10gPSBSZWFjdC51c2VTdGF0ZShxdWVzdGlvbi5sb3ZlKTtcbiAgY29uc3QgYW5zd2VycyA9IGRhdGEuYW5zd2VycztcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHBhc3NEYXRhID0gcm91dGVyLnF1ZXJ5O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBhc3NEYXRhLnRvcGljID09PSBcIlTDrG5oIHnDqnVcIikgc2V0UXVlc3Rpb25Ub3BpYyhxdWVzdGlvbnMubG92ZSk7XG4gICAgaWYgKHBhc3NEYXRhLnRvcGljID09PSBcIkdpYSDEkcOsbmhcIikgc2V0UXVlc3Rpb25Ub3BpYyhxdWVzdGlvbnMuZmFtaWx5KTtcbiAgICBpZiAocGFzc0RhdGEudG9waWMgPT09IFwiQuG6o24gdGjDom5cIikgc2V0UXVlc3Rpb25Ub3BpYyhxdWVzdGlvbnMuc2VsZik7XG4gICAgaWYgKHBhc3NEYXRhLnRvcGljID09PSBcIkPDtG5nIHZp4buHY1wiKSBzZXRRdWVzdGlvblRvcGljKHF1ZXN0aW9ucy53b3JrKTtcbiAgICBpZiAocGFzc0RhdGEudG9waWMgPT09IFwiSOG7jWMgdOG6rXBcIikgc2V0UXVlc3Rpb25Ub3BpYyhxdWVzdGlvbnMuc3R1ZHkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICB3PVwiZnVsbFwiXG4gICAgICAgIGJnQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKENvbW1vbkNvbG9ycy5iZywgQ29tbW9uQ29sb3JzLmJnX2RhcmspfVxuICAgICAgICBweT1cIjVyZW1cIlxuICAgICAgPlxuICAgICAgICA8U3RlcHNJbnB1dFxuICAgICAgICAgIHRvcGljPXtwYXNzRGF0YX1cbiAgICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uVG9waWN9XG4gICAgICAgICAgYW5zd2Vycz17YW5zd2Vyc31cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgICAgey8qIDxDZW50ZXIgbXg9XCIxcmVtXCI+XG4gICAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIj5cbiAgICAgICAgICB7cXVlc3Rpb25zLmxvdmUubWFwKChxdWVzdGlvbiwgcXVlc3Rpb25faW5kZXgpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbl9pbmRleH1cbiAgICAgICAgICAgICAgbWI9XCIxcmVtXCJcbiAgICAgICAgICAgICAgYm94U2hhZG93PVwiMnhsXCJcbiAgICAgICAgICAgICAgcm91bmRlZD1cIjEuNXJlbVwiXG4gICAgICAgICAgICAgIHA9XCIxcmVtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRleHQgbWI9XCIxcmVtXCIgZm9udFNpemU9XCIxLjFyZW1cIiBmb250V2VpZ2h0PVwiNTAwXCI+XG4gICAgICAgICAgICAgICAge3F1ZXN0aW9uLmluZm99XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgb25DaGFuZ2U9e3NldFZhbHVlfSB2YWx1ZT17dmFsdWV9PlxuICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIHthbnN3ZXJzW3F1ZXN0aW9uLnR5cGUgLSAxXS5tYXAoKGFuc3dlciwgYW5zd2VyX2luZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb1xuICAgICAgICAgICAgICAgICAgICAgIGtleT17YW5zd2VyX2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtTdHJpbmcocXVlc3Rpb25faW5kZXggKyBhbnN3ZXJfaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2Fuc3dlcn1cbiAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0NlbnRlcj4gKi99XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRmxleCIsIkJveCIsIkNlbnRlciIsIlJhZGlvIiwiUmFkaW9Hcm91cCIsIlN0YWNrIiwiVGV4dCIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlRGlzY2xvc3VyZSIsIlJlYWN0IiwiU3RlcHNJbnB1dCIsImRhdGEiLCJDb21tb25Db2xvcnMiLCJ1c2VSb3V0ZXIiLCJUZXN0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJsb3ZlIiwicXVlc3Rpb25Ub3BpYyIsInNldFF1ZXN0aW9uVG9waWMiLCJhbnN3ZXJzIiwicm91dGVyIiwicGFzc0RhdGEiLCJxdWVyeSIsInVzZUVmZmVjdCIsInRvcGljIiwiZmFtaWx5Iiwic2VsZiIsIndvcmsiLCJzdHVkeSIsInciLCJiZ0NvbG9yIiwiYmciLCJiZ19kYXJrIiwicHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/test.js\n"));

/***/ })

});