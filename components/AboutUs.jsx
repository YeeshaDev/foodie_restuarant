import styles from '../styles/About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {FaCar,FaChef,FaWallet,FaServicestack, FaHeadphonesAlt} from 'react-icons/fa'

const AboutUs = () => {
    return (
        <div className={styles.about__container}>
          <figure>
            <Image src='/img/about1.jpg' 
            alt=''
            width={450}
            height={450}
            className={styles.about__img}
            />
            </figure> 
            <div className={styles.about__details}>
                <h1>We are more than multiple services.</h1>
              <p>Food is one of the basic necessities of life. 
                We are more than multiple services which serve the best foods and drinks.
                We provide the best and healthiest foods with great taste.
                </p>  
              
              <div className={styles.about__icons}>
              <span className={styles.icon__details}>
              <figure className={styles.img__icons}>
                  <Image src='/img/delivery.png'
                  alt=''
                  width={30} 
                  height={30} 
                  
                  />
                  </figure>
                <p>Fast Delivery</p>
                </span>
                <span className={styles.icon__details}>
                <figure className={styles.img__icons}>
                  <Image src='/img/headset.png'
                  width={30} 
                  height={30} 
                  alt=''
                  />
                  </figure>
                <p>Online support</p>
                </span>
                <span className={styles.icon__details}>
                <figure className={styles.img__icons}>
                  <Image src='/img/wallet.png'
                  alt=''
                  width={30} 
                  height={30} 
                  
                  />
                  </figure>
                <p>Cool prices</p>
                </span>
                <span className={styles.img__details}>
                  <figure className={styles.img__icons}>
                  <Image src='/img/kitchen.png'
                  width={30} 
                  height={30} 
                  alt=''
                  
                  />
                  </figure>
                  <p>Clean Kitchen</p>
                </span>
                <span className={styles.img__details}>
                <figure className={styles.img__icons}>
                  <Image src='/img/order.png'
                  width={30} 
                  height={30} 
                  alt=''
                  />
                  </figure>
                  
                  <p>Online Order </p>
                </span>
                <span className={styles.img__details}>
                <figure className={styles.img__icons}>
                  <Image src='/img/chef.png'
                  width={30} 
                  height={30} 
                  alt=''
                  />
                  </figure>
                  <p>Super Chef </p>
                </span>
                
              
                
              </div>
              <Link href='/about'>
              <button>About Us</button>
              </Link>

            </div>
             
        </div>
    )
}

export default AboutUs
