import styles from '../styles/Menu.module.css';
import Image from 'next/image'
import items from '../redux/data';
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from '../redux/cartSlice'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
const Menu = ({item}) => {

  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(addToCart({
      id: item.id,
      foodName: item.foodName,
      price: item.price,
      image: item.image,
      
    })

    )
    // console.log(items.id)
    //toast.success('Added Succesfully')

  }


    return (
        <div>
        
        <div key={item.id} className={styles.food__details}>
          <figure className={styles.menuImg__container}>
        <img src={item.image} 
        alt='food'
        
        className={styles.menu__img}
        />
        </figure>
        <h2 style={{fontSize:'2rem'}}>{item.foodName}</h2>
        <p>{item.subName}</p>
        <div className={styles.cart__btn}>
        <h3 style={{fontSize:'1.5rem', fontWeight:'900'}}>${item.price}</h3>
        <button onClick={addCart}>Add to Cart</button>
        </div>
    
        </div>
        </div>
           
    )
}

export default Menu   