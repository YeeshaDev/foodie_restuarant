import React from 'react'
import { food } from '../../redux/data'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FaAngleDoubleLeft,FaHome } from 'react-icons/fa'
import styles from '../../styles/foodDetails.module.css'
import Menu from '../../components/Menu'
import MenuList from '../../components/MenuList'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

const foodDetails = () => {
    const router = useRouter();
    const {id} = router.query
    const dispatch = useDispatch();


    const Details = food.find((item) => item.id == id)
    //console.log(details?.price)
     
    const recommendedFoods = food.filter((item) => item.category === Details?.category)
    
  const addCart = () => {
    dispatch(addToCart({
      id: Details.id,
      foodName: Details.foodName,
      price: Details.price,
      image: Details.image,
      
    })

    )
    // console.log(items.id)
    //toast.success('Added Succesfully')

  }
    return (
        <div>
            <div className={styles.blog__bg}>
            <figure className={styles.bg__overlay}>
                <img src='/img/bg.jpg'
                  className={styles.bg__img}
                alt=''
                />
            </figure>
            <div className={styles.overlay__text}>
                <h1>Food Details</h1>
                <p> Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. </p>
</div>
            </div>
            <main className={styles.details__section}>
            <div className={styles.details__header}>
                <Link href='/'><span title='home'><FaHome/></span></Link>
                <Link href='/menu'><span title='blog'><FaAngleDoubleLeft/></span></Link>
                <span>{Details?.foodName}</span>
                
            </div>
            <div className={styles.meal__heading}>
            <h3 className={styles.meal__details}>Meal Details</h3>
            </div>
            <section className={styles.details__content}>
            <div className={styles.upper__details}>
            
            <div className={styles.food__img}>
                <img src={Details?.image}
                alt=''/>
            </div>
            <div className={styles.food__details}>
                
           <h2>{Details?.foodName}</h2>
           <hr/>
           <p>{Details?.Desc}</p>
           <h3>Price: ${Details?.price}</h3>
           <button onClick={addCart}>Add to cart</button>
           </div>
           </div>
           </section>
            </main>
           
           <div>
            
           </div>
           
           <div className={styles.recommended}>
            <h1>Foods you might also like</h1>
            <div className={styles.food__wrapper}>
            {recommendedFoods.map((item) => {
                return (
                    <div key={item.id} className={styles.food__content}>
                        <Link href={`/food/${item.id}`}>
                    <figure className={styles.menuImg__container}>
        <img src={item.image} 
        alt='food'
        
        className={styles.menu__img}
        />
        </figure>
        <h2 >{item.foodName}</h2>
        <p>{item.subName}</p>
        <div className={styles.cart__btn}>
        <h3 style={{fontSize:'1.5rem', fontWeight:'900'}}>${item.price}</h3>
        <button onClick={addCart}>Add to Cart</button>
        </div>
        </Link>
                    </div>
                )
            })}
            </div>
           </div>
        </div>
    )
}

export default foodDetails
