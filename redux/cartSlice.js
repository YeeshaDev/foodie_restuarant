import { createSlice } from '@reduxjs/toolkit'
import {toast} from 'react-toastify'

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
}*/

 /*const carts = 
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
    };*/

const initialState = {
   carts:[],
   totalAmount:0,
totalQuantity:0,
   
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //Add items to cart and updates the quantity of items added to the cart 
    //and also the total price of items in the cart
  addToCart:(state,action) => {
    const newItem = action.payload; 
    const existingItem = state.carts.find((item) => item.id === newItem.id)
        state.totalQuantity++;
        if(!existingItem){
          state.carts.push({
            id:newItem.id,
            foodName:newItem.foodName,
            image:newItem.image,
            price:newItem.price,
            quantity:1,
            totalPrice:newItem.price,
            
          })
          //StoreInLocalStorage(newItem)
        }
        else{
            existingItem.quantity++;
            existingItem.totalPrice= Number(existingItem.totalPrice) + Number(newItem.price);
          //StoreInLocalStorage(state.carts)
        }
        state.totalAmount = state.carts.reduce((total,item) => total + (Number(item.price)  * Number(item.quantity)),0)
        //StoreInLocalStorage(state.newItem)
        /*setCartListFunc(
          state.carts.map(item => item),
          state.totalAmount,
          state.totalQuantity
      );*/
        console.log(newItem)
        toast.success('Item Added Sucessfully')
      },

  //This removes an item from the cart and 
  //updates the quantity of items in the cart

  deleteFromCart:(state,action) => {

    const id = action.payload;
    const cartItem = state.carts.find((item) => item.id === id)
    if(cartItem){
      state.carts = state.carts.filter((item) => item.id !== id);
      state.totalQuantity = state.totalQuantity  - cartItem.quantity
    }
    state.totalAmount = state.carts.reduce((total,item) => total + (Number(item.price)  * Number(item.quantity)), 0)
    toast.success('Item Removed Sucessfully')
  },

  //This clears the entire cart

  clearCart:(state,action) => {
    state.carts=[];
  },

},
});

export const {addToCart,deleteFromCart,clearCart} = cartSlice.actions

export default cartSlice.reducer