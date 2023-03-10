import styles from '../styles/Popular.module.css';
import Image from 'next/image';
import {toast} from 'react-toastify'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/cartSlice';

const Popular = ({item}) => {
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
      <>
      
            <div key={item.id} className={styles.food__details}>
            <Image src={item.image} alt='food'
            height={230}
            width={230}
            className={styles.popular__img}
            />
            <h2 >{item.foodName}</h2>
            <p>{item.subName}</p>
            <div className={styles.cart__btn}>
            <h3 style={{fontSize:'1.5rem', fontWeight:'900'}}>${item.price}.00</h3>
            <button onClick={addCart}>Add to Cart</button>
            </div>
            </div>
         
            </>
          
    
    )
}

export default Popular
