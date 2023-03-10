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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/data */ \"./redux/data.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/foodDetails.module.css */ \"./styles/foodDetails.module.css\");\n/* harmony import */ var _styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Menu */ \"./components/Menu.jsx\");\n/* harmony import */ var _components_MenuList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/MenuList */ \"./components/MenuList.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_cartSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/cartSlice */ \"./redux/cartSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst foodDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { id  } = router.query;\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const details = _redux_data__WEBPACK_IMPORTED_MODULE_2__.food.find((item)=>item.id == id);\n    console.log(details === null || details === void 0 ? void 0 : details.price);\n    const categories = _redux_data__WEBPACK_IMPORTED_MODULE_2__.food.filter((item)=>{\n        return item.category === (details === null || details === void 0 ? void 0 : details.category);\n    });\n    const addCart = ()=>{\n        dispatch((0,_redux_cartSlice__WEBPACK_IMPORTED_MODULE_8__.addToCart)({\n            id: details.id,\n            foodName: details.foodName,\n            price: details.price,\n            image: details.image\n        }));\n    // console.log(items.id)\n    //toast.success('Added Succesfully')\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().blog__bg),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                        className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().bg__overlay),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/img/bg.jpg\",\n                            className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().bg__img),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().overlay__text),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Food Details\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \" Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().details__section),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().details__header),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/home\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    title: \"home\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__.FaHome, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 55\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 36\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/menu\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    title: \"blog\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__.FaAngleDoubleLeft, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 55\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 36\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: details === null || details === void 0 ? void 0 : details.foodName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().meal__heading),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().meal__details),\n                            children: \"Meal Details\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().details__content),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().upper__details),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().food__img),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: details === null || details === void 0 ? void 0 : details.image,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_foodDetails_module_css__WEBPACK_IMPORTED_MODULE_9___default().food__details),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: details === null || details === void 0 ? void 0 : details.foodName\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 12\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 12\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: details === null || details === void 0 ? void 0 : details.Desc\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 12\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: [\n                                                \"$\",\n                                                details === null || details === void 0 ? void 0 : details.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 12\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: addCart,\n                                            children: \"Add to cart\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 12\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                lineNumber: 81,\n                columnNumber: 12\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Also like\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, undefined),\n                    categories.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.category\n                        }, item.id, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n                lineNumber: 84,\n                columnNumber: 12\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\foodie\\\\pages\\\\food\\\\[id].jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(foodDetails, \"zXnflAqd4rnyBpogtdAc6I4Vk2A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (foodDetails);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q29DOzRDQUFPQyxTQUFTakM7c0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU0xQiw4REFBQ0c7Ozs7OzBCQUdELDhEQUFDQTs7a0NBQ0EsOERBQUNVO2tDQUFHOzs7Ozs7b0JBQ0hoQixXQUFXcUMsR0FBRyxDQUFDLENBQUN6QyxPQUFTO3dCQUN0QixxQkFDSSw4REFBQ1U7c0NBQ0FWLEtBQUtNLFFBQVE7MkJBREpOLEtBQUtMLEVBQUU7Ozs7O29CQUl6QjtrQ0FDQSw4REFBQ0wsNERBQVFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtHQXJGTUc7O1FBQ2FULGtEQUFTQTtRQUVQTyxvREFBV0E7OztBQW9GaEMsK0RBQWVFLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9vZC9baWRdLmpzeD8yNGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZm9vZCB9IGZyb20gJy4uLy4uL3JlZHV4L2RhdGEnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZhQW5nbGVEb3VibGVMZWZ0LEZhSG9tZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9mb29kRGV0YWlscy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lbnUnXHJcbmltcG9ydCBNZW51TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lbnVMaXN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tICcuLi8uLi9yZWR1eC9jYXJ0U2xpY2UnXHJcblxyXG5jb25zdCBmb29kRGV0YWlscyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICBjb25zdCBkZXRhaWxzID0gZm9vZC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09IGlkKVxyXG4gICAgY29uc29sZS5sb2coZGV0YWlscz8ucHJpY2UpXHJcbiAgICAgXHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGZvb2QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5ID09PSBkZXRhaWxzPy5jYXRlZ29yeSlcclxuICAgIFxyXG4gIGNvbnN0IGFkZENhcnQgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhZGRUb0NhcnQoe1xyXG4gICAgICBpZDogZGV0YWlscy5pZCxcclxuICAgICAgZm9vZE5hbWU6IGRldGFpbHMuZm9vZE5hbWUsXHJcbiAgICAgIHByaWNlOiBkZXRhaWxzLnByaWNlLFxyXG4gICAgICBpbWFnZTogZGV0YWlscy5pbWFnZSxcclxuICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIClcclxuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1zLmlkKVxyXG4gICAgLy90b2FzdC5zdWNjZXNzKCdBZGRlZCBTdWNjZXNmdWxseScpXHJcblxyXG4gIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9nX19iZ30+XHJcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtzdHlsZXMuYmdfX292ZXJsYXl9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvYmcuanBnJ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5iZ19faW1nfVxyXG4gICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5X190ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxoMT5Gb29kIERldGFpbHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+IE1vbGxpcyB2YXJpdXMgbnVsbGFtIGVsZW1lbnR1bSBhbGlxdWV0IGxpZ3VsYSBtdXMgdGFjaXRpIG1vcmJpIHRpbmNpZHVudCwgdXQgbmFtIGVsaXQuIDwvcD5cclxuPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19zZWN0aW9ufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2hvbWUnPjxzcGFuIHRpdGxlPSdob21lJz48RmFIb21lLz48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL21lbnUnPjxzcGFuIHRpdGxlPSdibG9nJz48RmFBbmdsZURvdWJsZUxlZnQvPjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57ZGV0YWlscz8uZm9vZE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lYWxfX2hlYWRpbmd9PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMubWVhbF9fZGV0YWlsc30+TWVhbCBEZXRhaWxzPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwcGVyX19kZXRhaWxzfT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vZF9faW1nfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkZXRhaWxzPy5pbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD0nJy8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb2RfX2RldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPGgyPntkZXRhaWxzPy5mb29kTmFtZX08L2gyPlxyXG4gICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgPHA+e2RldGFpbHM/LkRlc2N9PC9wPlxyXG4gICAgICAgICAgIDxoMz4ke2RldGFpbHM/LnByaWNlfTwvaDM+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRDYXJ0fT5BZGQgdG8gY2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5BbHNvIGxpa2U8L2gxPlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPE1lbnVMaXN0Lz5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vZERldGFpbHNcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9vZCIsInVzZVJvdXRlciIsIkxpbmsiLCJGYUFuZ2xlRG91YmxlTGVmdCIsIkZhSG9tZSIsInN0eWxlcyIsIk1lbnUiLCJNZW51TGlzdCIsInVzZURpc3BhdGNoIiwiYWRkVG9DYXJ0IiwiZm9vZERldGFpbHMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGlzcGF0Y2giLCJkZXRhaWxzIiwiZmluZCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwicHJpY2UiLCJjYXRlZ29yaWVzIiwiZmlsdGVyIiwiY2F0ZWdvcnkiLCJhZGRDYXJ0IiwiZm9vZE5hbWUiLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImJsb2dfX2JnIiwiZmlndXJlIiwiYmdfX292ZXJsYXkiLCJpbWciLCJzcmMiLCJiZ19faW1nIiwiYWx0Iiwib3ZlcmxheV9fdGV4dCIsImgxIiwicCIsIm1haW4iLCJkZXRhaWxzX19zZWN0aW9uIiwiZGV0YWlsc19faGVhZGVyIiwiaHJlZiIsInNwYW4iLCJ0aXRsZSIsIm1lYWxfX2hlYWRpbmciLCJoMyIsIm1lYWxfX2RldGFpbHMiLCJzZWN0aW9uIiwiZGV0YWlsc19fY29udGVudCIsInVwcGVyX19kZXRhaWxzIiwiZm9vZF9faW1nIiwiZm9vZF9fZGV0YWlscyIsImgyIiwiaHIiLCJEZXNjIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/food/[id].jsx\n"));

/***/ })

});