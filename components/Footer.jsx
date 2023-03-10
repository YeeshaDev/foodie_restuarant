import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css'
import { FaArrowAltCircleRight, FaArrowRight, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
         <div className={styles.logo__content}>
            <figure  className={styles.img__container}>
         <Image src='/img/logo.png' 
              alt='logo'
              className={styles.logo}
              width={100} height={100}/>
              </figure>
              <h1>Foodie</h1>
         </div>
         <hr/>
         <div className={styles.footer__content}>
         <div className={styles.subscribe}>
                <h1>Subscribe to our newletter</h1>
                <input type='email' placeholder='Enter your Email'/>
                <FaArrowRight className={styles.arrow}/>
                <div className={styles.socials}>
                <a href='#'><FaFacebook /></a>
                <a href='#'><FaTwitter /></a>
                <a href='#'><FaInstagram /></a>
                <a href='#'><FaPinterest /></a>
            </div>
            </div>
         <div className={styles.footer__text}>
            
            <div className={styles.footer__heading}>
                <h3>Service</h3>
                <div>
                <p>Online Order</p>
                <p>Pre-Reservation</p>
                <p>24/7 services</p>
                <p>Foodie Place</p>
                <p>SuperChef</p>
                </div>
                
            </div>
            <div className={styles.footer__heading}>
                <h3>Service</h3>
                <div>
                <p>Online Order</p>
                <p>Pre-Reservation</p>
                <p>24/7 services</p>
                <p>Foodie Place</p>
                <p>SuperChef</p>
                </div>
                
            </div>
            <div className={styles.footer__heading}>
                <h3>Service</h3>
                <div>
                <p>Online Order</p>
                <p>Pre-Reservation</p>
                <p>24/7 services</p>
                <p>Foodie Place</p>
                <p>SuperChef</p>
                </div>
                
            </div>
            
         </div>
         </div>
        </footer>
    )
}

export default Footer
