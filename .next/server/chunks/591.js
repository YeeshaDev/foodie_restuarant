"use strict";
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 5591:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4354);
/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4291);
/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Menu__WEBPACK_IMPORTED_MODULE_2__]);
_Menu__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const unique = [
    "all",
    ...new Set(_redux_data__WEBPACK_IMPORTED_MODULE_4__/* .food.map */ .w.map((item)=>item.category))
];
const MenuList = ()=>{
    const [menus, setMenus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_redux_data__WEBPACK_IMPORTED_MODULE_4__/* .food */ .w);
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(unique);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const filterMenu = (category)=>{
        if (category === "all") {
            setMenus(_redux_data__WEBPACK_IMPORTED_MODULE_4__/* .food */ .w);
            return;
        }
        const newMenu = _redux_data__WEBPACK_IMPORTED_MODULE_4__/* .food.filter */ .w.filter((item)=>item.category === category);
        setMenus(newMenu);
        setActive(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().menu__content),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().menu__header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Our Regular Menu Pack"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        children: "See Menu"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().menu__listContent),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().menu__list),
                    children: categories.map((category, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: active ? (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().menu__btn) : (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().active),
                                onClick: ()=>filterMenu(category),
                                children: category
                            }, index)
                        });
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().food__wrapper),
                children: menus.slice(0, 8).map((item)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().food__details),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `/food/${item.id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                item: item
                            })
                        })
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;