"use strict";
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 9235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EI": () => (/* binding */ deleteFromCart),
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clearCart */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
react_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/*const fetchLocalStorage = () => {
  let cart;
  if (typeof window !== 'undefined') {
 cart = localStorage.getItem('cart');
  }
  if(cart){
    return JSON.parse(localStorage.getItem('cart'))
  }else {
    return [];
  }

}

const StoreInLocalStorage= (data)  => {
  localStorage.setItem('cart',JSON.stringify(data))
}*/ /*const carts = 
       typeof window !== "undefined" &&
 localStorage.getItem("cartList") !== null 
            ? JSON.parse(localStorage.getItem("cartList"))
            : [];
      const totalAmount =
     typeof window !== "undefined" && localStorage.getItem("cartTotal") !== null
            ? JSON.parse(localStorage.getItem("cartTotal"))
            : 0;
      const totalQuantity =
  typeof window !== "undefined" && localStorage.getItem("cartQuantity") !== null
            ? JSON.parse(localStorage.getItem("cartQuantity"))
            : 0;
    
   // adding this function to prevent repear code 
    const setCartListFunc = (carts, totalAmount, totalQuantity) => {
        localStorage.setItem("cartList", JSON.stringify(carts));
        localStorage.setItem("cartTotal", JSON.stringify(totalAmount));
        localStorage.setItem("cartQuantity", JSON.stringify(totalQuantity));
    };*/ const initialState = {
    carts: [],
    totalAmount: 0,
    totalQuantity: 0
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        //Add items to cart and updates the quantity of items added to the cart 
        //and also the total price of items in the cart
        addToCart: (state, action)=>{
            const newItem = action.payload;
            const existingItem = state.carts.find((item)=>item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.carts.push({
                    id: newItem.id,
                    foodName: newItem.foodName,
                    image: newItem.image,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            //StoreInLocalStorage(newItem)
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            //StoreInLocalStorage(state.carts)
            }
            state.totalAmount = state.carts.reduce((total, item)=>total + Number(item.price) * Number(item.quantity), 0);
            //StoreInLocalStorage(state.newItem)
            /*setCartListFunc(
          state.carts.map(item => item),
          state.totalAmount,
          state.totalQuantity
      );*/ console.log(newItem);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Item Added Sucessfully");
        },
        //This removes an item from the cart and 
        //updates the quantity of items in the cart
        deleteFromCart: (state, action)=>{
            const id = action.payload;
            const cartItem = state.carts.find((item)=>item.id === id);
            if (cartItem) {
                state.carts = state.carts.filter((item)=>item.id !== id);
                state.totalQuantity = state.totalQuantity - cartItem.quantity;
            }
            state.totalAmount = state.carts.reduce((total, item)=>total + Number(item.price) * Number(item.quantity), 0);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Item Removed Sucessfully");
        },
        //This clears the entire cart
        clearCart: (state, action)=>{
            state.carts = [];
        }
    }
});
const { addToCart , deleteFromCart , clearCart  } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;