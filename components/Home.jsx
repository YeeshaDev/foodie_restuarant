import Image from "next/image"
import { FaSearch } from "react-icons/fa"
import styles from '../styles/Home.module.css'

const Home = () => {
const categories = [
    {
        id:1,
        image:'/img/food1.jpg',
        name:'dishes',
    },
    {
        id:2,
        image:'/img/dessert2.jpg',
        name:'dessert',
    },
    {
        id:3,
        image:'/img/drink2.jpg',
        name:'drinks',
    },
    {
        id:4,
        image:'/img/dessert1.jpg',
        name:'snacks',
    },
]
    return (
        <div className={styles.home__content}>
          <figure className={styles.stone__image}>
            <Image src='/img/stones.png' 
            alt='stones'
            width={100}
            height={100}
             className={styles.stones}
            />
            </figure> 
            <div className={styles.home__details}>
            <div className={styles.home__text}>
             <h1>We serve the food <br/> you love &#128525; </h1>
             <p>This is the type of restuarant which typically serves the best foods and drinks.
               
             </p>
             <form className={styles.search}>
             <button className={styles.explore__btn}>Explore food</button>
               
                <span className={styles.search__icon}><FaSearch/></span>
             <input type='search'
             placeholder="search"
             />
             </form>
                </div> 
                <div className={styles.home__img}> 
                <Image src='/img/SeekPng.png' alt='food'
                        width={100}
                        height={100}
                        className={styles.home__plant}/>
                    <div className={styles.circle}></div>
                    <div className={styles.circle__inner}></div>
                    <figure >
                        <Image src='/img/foodmain.png' alt='food'
                        width={470}
                        height={530}
                        className={styles.home__food}
                        />
                    </figure>
                    <div className={styles.food__category}>
                       {categories.map((item) => {
                        return (
                            <div key={item.id} className={styles.food__names}>
                              <figure>
                                <Image src={item.image} alt=''
                                width={40}
                                height={40}
                                className={styles.category__img}
                                />
                              </figure>
                              <h2>{item.name}</h2>      
                            </div>
                        )
                       })} 
                    </div>
                </div>
                <figure className={styles.stone__image}>
            <Image src='/img/stones.png' 
            alt='stones'
            width={100}
            height={100}
             className={styles.stones__bottom}
            />
            </figure> 
                </div>
        </div>
    )
}

export default Home
