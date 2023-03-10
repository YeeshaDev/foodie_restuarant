"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/food/[id]",{

/***/ "./pages/food/[id].jsx":
/*!*****************************!*\
  !*** ./pages/food/[id].jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/data */ \"./redux/data.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/foodDetails.module.css */ \"./styles/foodDetails.module.css\");\n/* harmony import */ var _styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Menu */ \"./components/Menu.jsx\");\n/* harmony import */ var _components_MenuList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/MenuList */ \"./components/MenuList.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_cartSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/cartSlice */ \"./redux/cartSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst foodDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { id  } = router.query;\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const details = _redux_data__WEBPACK_IMPORTED_MODULE_2__.food.find((item)=>item.id === id);\n    console.log(details === null || details === void 0 ? void 0 : details.price);\n    let category = details === null || details === void 0 ? void 0 : details.category;\n    const categories = _redux_data__WEBPACK_IMPORTED_MODULE_2__.food.filter((item)=>item.category === category);\n    console.log(categories);\n    const addCart = ()=>{\n        dispatch((0,_redux_cartSlice__WEBPACK_IMPORTED_MODULE_8__.addToCart)({\n            id: details.id,\n            foodName: details.foodName,\n            price: details.price,\n            image: details.image\n        }));\n    // console.log(items.id)\n    //toast.success('Added Succesfully')\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().blog__bg),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                        className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().bg__overlay),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/img/bg.jpg\",\n                            className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().bg__img),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().overlay__text),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Food Details\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \" Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().details__section),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().details__header),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/home\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    title: \"home\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__.FaHome, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 55\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 36\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/menu\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    title: \"blog\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__.FaAngleDoubleLeft, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 55\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 36\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: details === null || details === void 0 ? void 0 : details.foodName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().meal__heading),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().meal__details),\n                            children: \"Meal Details\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().details__content),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().upper__details),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().food__img),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: details === null || details === void 0 ? void 0 : details.image,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().food__details),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: details === null || details === void 0 ? void 0 : details.foodName\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 12\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 12\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: details === null || details === void 0 ? void 0 : details.Desc\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 12\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: [\n                                                \"$\",\n                                                details === null || details === void 0 ? void 0 : details.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 12\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: addCart,\n                                            children: \"Add to cart\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 12\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                lineNumber: 84,\n                columnNumber: 12\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Also like\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, undefined),\n                    categoris.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: item.category\n                        }, void 0, false);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                lineNumber: 87,\n                columnNumber: 12\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_s(foodDetails, \"zXnflAqd4rnyBpogtdAc6I4Vk2A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (foodDetails);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBU0ssS0FBSzs7Ozs7OztzREFDcEIsOERBQUNvQzs0Q0FBT0MsU0FBU2pDO3NEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNMUIsOERBQUNHOzs7OzswQkFHRCw4REFBQ0E7O2tDQUNBLDhEQUFDVTtrQ0FBRzs7Ozs7O29CQUNIcUIsVUFBVUMsR0FBRyxDQUFDLENBQUMxQyxPQUFTO3dCQUNyQixxQkFDSTtzQ0FDQ0EsS0FBS0ksUUFBUTs7b0JBR3RCO2tDQUNBLDhEQUFDZCw0REFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJCO0dBeEZNRzs7UUFDYVQsa0RBQVNBO1FBRVBPLG9EQUFXQTs7O0FBdUZoQywrREFBZUUsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb29kL1tpZF0uanN4PzI0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBmb29kIH0gZnJvbSAnLi4vLi4vcmVkdXgvZGF0YSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgRmFBbmdsZURvdWJsZUxlZnQsRmFIb21lIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2Zvb2REZXRhaWxzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBNZW51IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVudSdcclxuaW1wb3J0IE1lbnVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVudUxpc3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gJy4uLy4uL3JlZHV4L2NhcnRTbGljZSdcclxuXHJcbmNvbnN0IGZvb2REZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGRldGFpbHMgPSBmb29kLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKVxyXG4gICAgY29uc29sZS5sb2coZGV0YWlscz8ucHJpY2UpXHJcbiAgICAgbGV0IGNhdGVnb3J5ID1kZXRhaWxzPy5jYXRlZ29yeVxyXG5cclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBmb29kLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpXHJcbiAgICBjb25zb2xlLmxvZyAoY2F0ZWdvcmllcylcclxuXHJcbiAgICBcclxuXHJcbiAgY29uc3QgYWRkQ2FydCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGFkZFRvQ2FydCh7XHJcbiAgICAgIGlkOiBkZXRhaWxzLmlkLFxyXG4gICAgICBmb29kTmFtZTogZGV0YWlscy5mb29kTmFtZSxcclxuICAgICAgcHJpY2U6IGRldGFpbHMucHJpY2UsXHJcbiAgICAgIGltYWdlOiBkZXRhaWxzLmltYWdlLFxyXG4gICAgICBcclxuICAgIH0pXHJcblxyXG4gICAgKVxyXG4gICAgLy8gY29uc29sZS5sb2coaXRlbXMuaWQpXHJcbiAgICAvL3RvYXN0LnN1Y2Nlc3MoJ0FkZGVkIFN1Y2Nlc2Z1bGx5JylcclxuXHJcbiAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dfX2JnfT5cclxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e3N0eWxlcy5iZ19fb3ZlcmxheX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9iZy5qcGcnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJnX19pbWd9XHJcbiAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXlfX3RleHR9PlxyXG4gICAgICAgICAgICAgICAgPGgxPkZvb2QgRGV0YWlsczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD4gTW9sbGlzIHZhcml1cyBudWxsYW0gZWxlbWVudHVtIGFsaXF1ZXQgbGlndWxhIG11cyB0YWNpdGkgbW9yYmkgdGluY2lkdW50LCB1dCBuYW0gZWxpdC4gPC9wPlxyXG48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX3NlY3Rpb259PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvaG9tZSc+PHNwYW4gdGl0bGU9J2hvbWUnPjxGYUhvbWUvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvbWVudSc+PHNwYW4gdGl0bGU9J2Jsb2cnPjxGYUFuZ2xlRG91YmxlTGVmdC8+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntkZXRhaWxzPy5mb29kTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVhbF9faGVhZGluZ30+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tZWFsX19kZXRhaWxzfT5NZWFsIERldGFpbHM8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19fY29udGVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBwZXJfX2RldGFpbHN9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb29kX19pbWd9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RldGFpbHM/LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PScnLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vZF9fZGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8aDI+e2RldGFpbHM/LmZvb2ROYW1lfTwvaDI+XHJcbiAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICA8cD57ZGV0YWlscz8uRGVzY308L3A+XHJcbiAgICAgICAgICAgPGgzPiR7ZGV0YWlscz8ucHJpY2V9PC9oMz5cclxuICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZENhcnR9PkFkZCB0byBjYXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkFsc28gbGlrZTwvaDE+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8TWVudUxpc3QvPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb29kRGV0YWlsc1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJmb29kIiwidXNlUm91dGVyIiwiTGluayIsIkZhQW5nbGVEb3VibGVMZWZ0IiwiRmFIb21lIiwic3R5bGVzIiwiTWVudSIsIk1lbnVMaXN0IiwidXNlRGlzcGF0Y2giLCJhZGRUb0NhcnQiLCJmb29kRGV0YWlscyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkaXNwYXRjaCIsImRldGFpbHMiLCJmaW5kIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJwcmljZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImZpbHRlciIsImFkZENhcnQiLCJmb29kTmFtZSIsImltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmxvZ19fYmciLCJmaWd1cmUiLCJiZ19fb3ZlcmxheSIsImltZyIsInNyYyIsImJnX19pbWciLCJhbHQiLCJvdmVybGF5X190ZXh0IiwiaDEiLCJwIiwibWFpbiIsImRldGFpbHNfX3NlY3Rpb24iLCJkZXRhaWxzX19oZWFkZXIiLCJocmVmIiwic3BhbiIsInRpdGxlIiwibWVhbF9faGVhZGluZyIsImgzIiwibWVhbF9fZGV0YWlscyIsInNlY3Rpb24iLCJkZXRhaWxzX19jb250ZW50IiwidXBwZXJfX2RldGFpbHMiLCJmb29kX19pbWciLCJmb29kX19kZXRhaWxzIiwiaDIiLCJociIsIkRlc2MiLCJidXR0b24iLCJvbkNsaWNrIiwiY2F0ZWdvcmlzIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/food/[id].jsx\n"));

/***/ })

});