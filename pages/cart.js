import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { clearCart, deleteFromCart } from '../redux/cartSlice'
import {useSelector,useDispatch} from 'react-redux'
import { FaTrash } from 'react-icons/fa'
import { useState } from 'react'
const Cart = () => {
    const dispatch = useDispatch()
    const {carts,totalQuantity,totalAmount} = useSelector((state) => state.cart)
    
    
    const totalPrice = carts.reduce((acc, a) => {
      return acc + (a.price * a.quantity)
    }, 0);
    console.log(totalPrice)
    return (
        <>
        {carts.length === 0 ? ( 
        <h2>No Items Added yet</h2> 
        )  
        : (
      <div className={styles.cart__container}>
       
  <div className={styles.left}>
  <table className={styles.table}>
    <tr className={styles.thead}>
      <th>Product</th>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
      
      <th>Remove</th>
        
    </tr>
    <tbody className={styles.tbody}>
     {carts.map((item) => {
      
            return (
              <tr  key={item.id} className={styles.tr}>
            <td> 
              <div className={styles.imgContainer}>
                <img
                  src={item.image}
                  alt=""
                  width={100}
                  height={100}
                  
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>{item.foodName}</span>
            </td>
            
            <td>
              <span className={styles.price}>${item.price}</span>
            </td>
            <td>
              <span className={styles.quantity}>{item.quantity}</span>
            </td>
           
            <td>
              <span className={styles.trash} onClick={() => dispatch(deleteFromCart(item.id))}> <FaTrash/> </span>
            </td>
          </tr>
            )
          })
        
        }
    
    </tbody>
  </table>
</div>
<div className={styles.right}>
        <div className={styles.checkout__wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${totalAmount}.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total items:</b>{totalQuantity}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${totalAmount}.00
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    
 {/*<button onClick={() => dispatch(clearCart())}>Clear cart</button>*/}
        </div>
        )}
  
        </>
    )
}

export default Cart
