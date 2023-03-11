exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 4291:
/***/ ((module) => {

// Exports
module.exports = {
	"menu__content": "Menu_menu__content__1vB5x",
	"menu__header": "Menu_menu__header__Bmhcm",
	"menu__list": "Menu_menu__list__TPmih",
	"food__wrapper": "Menu_food__wrapper__L4P6I",
	"food__details": "Menu_food__details__2bbaN",
	"menuImg__container": "Menu_menuImg__container__IAlC8",
	"menu__img": "Menu_menu__img__vlrFq",
	"cart__btn": "Menu_cart__btn__8XgM6"
};


/***/ }),

/***/ 7675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4291);
/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4354);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_cartSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9235);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_cartSlice__WEBPACK_IMPORTED_MODULE_4__]);
_redux_cartSlice__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Menu = ({ item  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const addCart = ()=>{
        dispatch((0,_redux_cartSlice__WEBPACK_IMPORTED_MODULE_4__/* .addToCart */ .Xq)({
            id: item.id,
            foodName: item.foodName,
            price: item.price,
            image: item.image
        }));
    // console.log(items.id)
    //toast.success('Added Succesfully')
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().food__details),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                    className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().menuImg__container),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: item.image,
                        alt: "food",
                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().menu__img)
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    style: {
                        fontSize: "2rem"
                    },
                    children: item.foodName
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: item.subName
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().cart__btn),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                            style: {
                                fontSize: "1.5rem",
                                fontWeight: "900"
                            },
                            children: [
                                "$",
                                item.price
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: addCart,
                            children: "Add to Cart"
                        })
                    ]
                })
            ]
        }, item.id)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "w": () => (/* binding */ food)
/* harmony export */ });
const items = [
    {
        id: 1,
        image: "/img/tacos2.png",
        foodName: "Cauliflower Tacos",
        subName: "This is a meal that has the best ingredients.",
        price: 20,
        category: "Italian"
    },
    {
        id: 2,
        image: "/img/drink1.png",
        foodName: "alcohol matte",
        subName: "This is a meal that has the best ingredients.",
        price: 20,
        category: "Drinks"
    },
    {
        id: 3,
        image: "/img/whiteRice.png",
        foodName: "Salad Pasta",
        subName: "This is a meal that has the best ingredients.",
        price: 20,
        category: "Italian"
    },
    {
        id: 4,
        image: "/img/elote.png",
        foodName: "Elote",
        subName: "This is a meal that has the best ingredients.",
        price: 20,
        category: "Mexican"
    },
    {
        id: 5,
        image: "/img/macarons.png",
        foodName: "Macarons",
        subName: "This is a meal that has the best ingredients.",
        price: 20,
        category: "Nigerian"
    },
    {
        id: 6,
        image: "/img/echiladas.png",
        foodName: "Egusi",
        subName: "This is a meal that has the best ingredients.",
        price: 20,
        category: "French"
    },
    {
        id: 7,
        image: "/img/crepes2.png",
        foodName: "Crepes",
        subName: "This is a meal that has the best ingredients.",
        price: 20,
        category: "French"
    },
    {
        id: 8,
        image: "/img/bouillabaisse.png",
        foodName: "bouillabaisse",
        subName: "This is a meal that has the best ingredients.",
        price: 20,
        category: "Italian"
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (items);
const food = [
    {
        id: "52977",
        foodName: "Corba",
        image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
        category: "Soup",
        area: "Turkish",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
    tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
    tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
    tellus vehicula aptent dignissim.`,
        subName: "This is a meal that has the best ingredients.",
        price: "15.00"
    },
    {
        id: 53026,
        foodName: "Tamiya",
        category: "Vegetarian",
        image: "https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg",
        area: "Egyptian",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.`,
        subName: "This is a meal that has the best ingredients.",
        price: "15.00"
    },
    {
        id: "52844",
        foodName: "Lasagne",
        category: "Pasta",
        area: "Italian",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
   tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
   tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
   tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg"
    },
    {
        id: 53013,
        foodName: "Big Mac",
        category: "Beef",
        image: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
        area: "American",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
    tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
    tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
    tellus vehicula aptent dignissim.`,
        subName: "This is a meal that has the best ingredients.",
        price: "15.00"
    },
    {
        id: 53027,
        foodName: "Koshari",
        category: "Vegetarian",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg"
    },
    {
        id: 52769,
        foodName: "Kapsalon",
        category: "Lamb",
        image: "https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg",
        tag: "Snack",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.`,
        price: "15.00"
    },
    {
        id: 52854,
        foodNamel: "Pancakes",
        category: "Dessert",
        image: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
        tag: "Breakfast",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.`,
        price: "$15.00"
    },
    {
        id: 52906,
        foodName: "Flamiche",
        category: "Vegetarian",
        image: "https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg",
        tag: "Tart",
        area: "French",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.`,
        price: "15.00"
    },
    {
        id: "52980",
        foodName: "Stamppot",
        category: "Pork",
        area: "Dutch",
        image: "https://www.themealdb.com/images/media/meals/hyarod1565090529.jpg",
        tag: "Savory,Breakfast",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00"
    },
    {
        id: "53006",
        foodName: "Moussaka",
        category: "Beef",
        area: "Greek",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg"
    },
    {
        id: "53028",
        foodName: "Shawarma",
        category: "Chicken",
        area: "Egyptian",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
 tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
 tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
 tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg"
    },
    {
        id: "52811",
        foodName: "Ribollita",
        category: "Vegetarian",
        area: "Italian",
        image: "https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg",
        tag: "Vegetarian",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.`,
        price: "15.00"
    },
    {
        id: "52871",
        foodName: "Yaki Udon",
        category: "Vegetarian",
        area: "Japanese",
        image: "https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg",
        tag: "LowCalorie",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.`,
        price: "15.00"
    },
    {
        id: "52931",
        foodName: "Sugar Pie",
        category: "Dessert",
        area: "Canadian",
        image: "https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg",
        tag: "Pie,Desert",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00"
    },
    {
        id: "52963",
        foodName: "Shakshuka",
        category: "Vegetarian",
        area: "Egyptian",
        image: "https://www.themealdb.com/images/media/meals/g373701551450225.jpg",
        tags: "Egg,Brunch,Breakfast",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00"
    },
    {
        id: "52774",
        foodName: "Pad See Ew",
        category: "Chicken",
        area: "Thai",
        image: "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg",
        tag: "Pasta",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00"
    },
    {
        id: "52832",
        foodName: "Coq au vin",
        category: "Chicken",
        area: "French",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg"
    },
    {
        id: "52901",
        foodName: "Rock Cakes",
        category: "Dessert",
        area: "British",
        image: "https://www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg",
        tags: "Baking,Cake",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        subName: "This is a meal that has the best ingredients.",
        price: "15.00"
    },
    {
        id: "52933",
        foodName: "Rappie Pie",
        category: "Chicken",
        area: "Canadian",
        image: "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",
        tag: "Pie",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        subName: "This is a meal that has the best ingredients.",
        price: "15.00"
    },
    {
        id: "52947",
        foodName: "Ma Po Tofu",
        category: "Beef",
        area: "Chinese",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/1525874812.jpg"
    },
    {
        id: "53029",
        foodName: "Mulukhiyah",
        category: "Beef",
        area: "Egyptian",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/x372ug1598733932.jpg"
    },
    {
        id: "53049",
        foodName: "Apam balik",
        category: "Dessert",
        area: "Malaysian",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        subName: "This is a meal that has the best ingredients.",
        image: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg"
    },
    {
        id: "53051",
        foodName: "Nasi lemak",
        category: "Seafood",
        area: "Malaysian",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg"
    },
    {
        id: 52991,
        foodName: "Mince Pies",
        category: "Dessert",
        area: "British",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        subName: "This is a meal that has the best ingredients.",
        image: "https://www.themealdb.com/images/media/meals/qe8pf51576795532.jpg"
    },
    {
        id: 52897,
        foodName: "Carrot Cake",
        category: "Dessert",
        area: "British",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg",
        tag: "Cake"
    },
    {
        id: "52899",
        foodName: "Dundee cake",
        category: "Dessert",
        area: "British",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/wxyvqq1511723401.jpg"
    },
    {
        id: "52907",
        foodName: "Duck Confit",
        category: "French",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
  tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg"
    },
    {
        id: "52840",
        foodName: "Clam chowder",
        category: "Starter",
        area: "American",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "	https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg"
    },
    {
        id: "52888",
        foodName: "Eccles Cakes",
        category: "Dessert",
        area: "British",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/wtqrqw1511639627.jpg"
    },
    {
        id: "52900",
        foodName: "Madeira Cake",
        category: "Dessert",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/urtqut1511723591.jpg"
    },
    {
        id: "52930",
        foodName: "Pate Chinois",
        category: "Beef",
        area: "Canadian",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg"
    },
    {
        id: "52795",
        foodName: "Chicken Handi",
        category: "Chicken",
        area: "Indian",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
    },
    {
        id: "53038",
        foodName: "Mustard champ",
        category: "Side",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "https://www.themealdb.com/images/media/meals/o7p9581608589317.jpg"
    },
    {
        id: "52847",
        foodName: "Pork Cassoulet",
        category: "Pork",
        area: "French",
        subName: "This is a meal that has the best ingredients.",
        Desc: `Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
      tellus vehicula aptent dignissim.`,
        price: "15.00",
        image: "	https://www.themealdb.com/images/media/meals/wxuvuv1511299147.jpg"
    }
];


/***/ })

};
;