"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Popular.jsx":
/*!********************************!*\
  !*** ./components/Popular.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Popular_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Popular.module.css */ \"./styles/Popular.module.css\");\n/* harmony import */ var _styles_Popular_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Popular_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_cartSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/cartSlice */ \"./redux/cartSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Popular = (param)=>{\n    let { item  } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const addCart = ()=>{\n        dispatch((0,_redux_cartSlice__WEBPACK_IMPORTED_MODULE_6__.addToCart)({\n            id: item.id,\n            foodName: item.foodName,\n            price: item.price,\n            image: item.image\n        }));\n    // console.log(items.id)\n    //toast.success('Added Succesfully')\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Popular_module_css__WEBPACK_IMPORTED_MODULE_7___default().food__details),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: item.image,\n                    alt: \"food\",\n                    height: 230,\n                    width: 230,\n                    className: (_styles_Popular_module_css__WEBPACK_IMPORTED_MODULE_7___default().popular__img)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\components\\\\Popular.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: item.foodName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\components\\\\Popular.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: item.subName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\components\\\\Popular.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Popular_module_css__WEBPACK_IMPORTED_MODULE_7___default().cart__btn),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: {\n                                fontSize: \"1.5rem\",\n                                fontWeight: \"900\"\n                            },\n                            children: [\n                                \"$\",\n                                item.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\components\\\\Popular.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: addCart,\n                            children: \"Add to Cart\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\components\\\\Popular.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\components\\\\Popular.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, item.id, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\components\\\\Popular.jsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Popular, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = Popular;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Popular);\nvar _c;\n$RefreshReg$(_c, \"Popular\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvcHVsYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbkI7QUFDSztBQUNJO0FBQ007QUFDUDtBQUNRO0FBRS9DLE1BQU1LLFVBQVUsU0FBWTtRQUFYLEVBQUNDLEtBQUksRUFBQzs7SUFDckIsTUFBTUMsV0FBV0osd0RBQVdBO0lBRTVCLE1BQU1LLFVBQVUsSUFBTTtRQUNwQkQsU0FBU0gsMkRBQVNBLENBQUM7WUFDakJLLElBQUlILEtBQUtHLEVBQUU7WUFDWEMsVUFBVUosS0FBS0ksUUFBUTtZQUN2QkMsT0FBT0wsS0FBS0ssS0FBSztZQUNqQkMsT0FBT04sS0FBS00sS0FBSztRQUVuQjtJQUdBLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFFdEM7SUFHRSxxQkFDRTtrQkFFTSw0RUFBQ0M7WUFBa0JDLFdBQVdkLGlGQUFvQjs7OEJBQ2xELDhEQUFDQyxtREFBS0E7b0JBQUNlLEtBQUtWLEtBQUtNLEtBQUs7b0JBQUVLLEtBQUk7b0JBQzVCQyxRQUFRO29CQUNSQyxPQUFPO29CQUNQTCxXQUFXZCxnRkFBbUI7Ozs7Ozs4QkFFOUIsOERBQUNxQjs4QkFBS2YsS0FBS0ksUUFBUTs7Ozs7OzhCQUNuQiw4REFBQ1k7OEJBQUdoQixLQUFLaUIsT0FBTzs7Ozs7OzhCQUNoQiw4REFBQ1Y7b0JBQUlDLFdBQVdkLDZFQUFnQjs7c0NBQ2hDLDhEQUFDeUI7NEJBQUdDLE9BQU87Z0NBQUNDLFVBQVM7Z0NBQVVDLFlBQVc7NEJBQUs7O2dDQUFHO2dDQUFFdEIsS0FBS0ssS0FBSzs7Ozs7OztzQ0FDOUQsOERBQUNrQjs0QkFBT0MsU0FBU3RCO3NDQUFTOzs7Ozs7Ozs7Ozs7O1dBVmhCRixLQUFLRyxFQUFFOzs7Ozs7QUFrQjdCO0dBeENNSjs7UUFDYUYsb0RBQVdBOzs7S0FEeEJFO0FBMENOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9wdWxhci5qc3g/NTcyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qb3B1bGFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tICcuLi9yZWR1eC9jYXJ0U2xpY2UnO1xyXG5cclxuY29uc3QgUG9wdWxhciA9ICh7aXRlbX0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGFkZENhcnQgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhZGRUb0NhcnQoe1xyXG4gICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgZm9vZE5hbWU6IGl0ZW0uZm9vZE5hbWUsXHJcbiAgICAgIHByaWNlOiBpdGVtLnByaWNlLFxyXG4gICAgICBpbWFnZTogaXRlbS5pbWFnZSxcclxuICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIClcclxuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1zLmlkKVxyXG4gICAgLy90b2FzdC5zdWNjZXNzKCdBZGRlZCBTdWNjZXNmdWxseScpXHJcblxyXG4gIH1cclxuXHJcbiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuZm9vZF9fZGV0YWlsc30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD0nZm9vZCdcclxuICAgICAgICAgICAgaGVpZ2h0PXsyMzB9XHJcbiAgICAgICAgICAgIHdpZHRoPXsyMzB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBvcHVsYXJfX2ltZ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgyID57aXRlbS5mb29kTmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8cD57aXRlbS5zdWJOYW1lfTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0X19idG59PlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3tmb250U2l6ZTonMS41cmVtJywgZm9udFdlaWdodDonOTAwJ319PiR7aXRlbS5wcmljZX08L2gzPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZENhcnR9PkFkZCB0byBDYXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgXHJcbiAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhclxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJ0b2FzdCIsInVzZURpc3BhdGNoIiwiYWRkVG9DYXJ0IiwiUG9wdWxhciIsIml0ZW0iLCJkaXNwYXRjaCIsImFkZENhcnQiLCJpZCIsImZvb2ROYW1lIiwicHJpY2UiLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImZvb2RfX2RldGFpbHMiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInBvcHVsYXJfX2ltZyIsImgyIiwicCIsInN1Yk5hbWUiLCJjYXJ0X19idG4iLCJoMyIsInN0eWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Popular.jsx\n"));

/***/ })

});