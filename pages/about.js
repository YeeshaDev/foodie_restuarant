//import React from 'react'
import Image from "next/image"
import AboutUs from "../components/AboutUs"
import styles from '../styles/About.module.css'

const about = () => {
    return (
        <div className={styles.about}>
            <h1>About Us</h1> 
            <p className={styles.about__sub}>We are more than multiple services.
              Food is one of the basic necessities of life. 
                We are more than multiple services which serve the best foods and drinks.
                We provide the best and healthiest foods with great taste.</p>
                  <div className={styles.about__cards}>
                
                    <h1>Our Story</h1>
                    <div className={styles.story__cardsDetails}>
                    
                <div className={styles.story__img}>

                <img src='/img/about3.jpg'
                className={styles.aboutStoryImg}
                 />
                 </div>

                 <div className={styles.story__cards}>
                    <p>Justo. Nunc. Montes ligula est nunc molestie feugiat rutrum risus ultricies eros, penatibus elit senectus montes.
Sagittis enim quam.Penatibus posuere faucibus praesent cras laoreet nascetur sem neque. Faucibus. Sollicitudin interdum eros, per tempor 
donec donec, primis arcu penatibus nascetur. </p>
                 </div>
                 </div>
                 </div>
                 
                 <div className={styles.about__cards}>
                
                    <h1>Our Mission</h1>
                    <div className={styles.story__cardsDetails2}>
                <div className={styles.story__img}>

                <img src='/img/about4.jpg'
                className={styles.aboutStoryImg}
                 /> 
                 </div>

                 <div className={styles.story__cards}>
                    <p>Justo. Nunc. Montes ligula est nunc molestie feugiat rutrum risus ultricies eros, penatibus elit senectus montes.
Sagittis enim quam.Penatibus posuere faucibus praesent cras laoreet nascetur sem neque. Faucibus. Sollicitudin interdum eros, per tempor 
donec donec, primis arcu penatibus nascetur. </p>
                 </div>
                 </div>
                 </div>
                 <div>
                <h1>Why Choose Us</h1>
                    <AboutUs/>
                 </div>

        </div>
    )
}

export default about

/* Penatibus posuere faucibus praesent cras laoreet nascetur sem neque. Faucibus. Sollicitudin interdum eros, per tempor 
donec donec, primis arcu penatibus nascetur. Inceptos tempor vitae risus ultrices ad penatibus tristique. Velit bibendum inceptos. Blandit ultricies ipsum porta convallis euismod nunc amet
Ultrices dui, mollis. Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim. */