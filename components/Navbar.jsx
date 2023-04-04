import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import {FaShoppingBasket,FaEquals, FaTimes} from 'react-icons/fa'


const Navbar = () => {

  const { totalQuantity } = useSelector((state)=>state.cart)

  const [active, setActive] = useState(false);

  const router = useRouter();
    
    

  const showMenu = () => {
    setActive(!active);
  };
    return (
        <div className={styles.nav__content}>
          <nav className={styles.nav}>
          <Link href="/">
            <div className={styles.logo__content}>
              <figure className={styles.img__container}>
              <Image src='/img/logo.png' 
              alt='logo'
              className={styles.logo}
              width={100} height={100}/>
              </figure>
              <h1>Foodie</h1>
            </div>
            </Link>
            <div className={styles.nav}>
              <Link href='/cart'>
            <span className={styles.mobile__cart}>
                <FaShoppingBasket className={styles.mobile__basket}/>
                <p className={styles.quantity}>{totalQuantity}</p>
              </span>
              </Link>
            <div onClick={showMenu} className={styles.menu}>
              {active ? (
             <span className={styles.close}><FaTimes/></span>
              ) : (
                <span><FaEquals/></span>
              )
              }
                </div> 
            <div className={active ? styles.mobile__menu : styles.nav__items}>
              
            <ul>
              
                <li className={router.asPath == "/about" ? styles.active__menu : ''}>
                <Link href="/about">
          About us
        </Link>
                </li>
                <li className={router.asPath == "/menu" ? styles.active__menu : ''}>
                <Link href="/menu">
          Menu
           </Link>
                </li>
                <li className={router.asPath == "/blog" ? styles.active__menu : ''}>
                  <Link href="/blog">
          Blog
        </Link></li>
                <li className={router.asPath == "/contact" ? styles.active__menu : ''}>
                <Link href="/contact">
          Contacts
        </Link>
                </li>
                <div  className={styles.reserve}>
              <span className={styles.shopping__cart}>
                <FaShoppingBasket className={styles.desktop__basket}/>
                <p className={styles.quantity}>{totalQuantity}</p>
              </span>
              <Link href='/reservation'>
              <button>Reservation</button>
              </Link>
            </div>
            </ul>
            
            </div>
            </div>
            </nav> 
        </div>
    )
}

export default Navbar
