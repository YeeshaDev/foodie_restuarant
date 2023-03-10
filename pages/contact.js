import React from 'react'
import { FaEnvelopeOpenText, FaPhoneVolume } from 'react-icons/fa'
import styles from '../styles/Contact.module.css'

const contact = () => {
    return (
        <div className={styles.contact}>
            <h1>Get in touch today!</h1>
            <div className={styles.contact__info}>
                <div className={styles.email__info}>
                    <div className={styles.mail}>
                    <span><FaEnvelopeOpenText/></span>
                    <h4>Mail Us</h4>
                    </div>
                    <p>test@gmail.com</p>
                    
                </div>
                <div className={styles.phone__info}>
                    <div className={styles.mail}>
                    <span><FaPhoneVolume/></span>
                    <h4>Contact Us</h4>
                    </div>
                    <p>+234 000 567 812</p>
                    
                </div>
            </div>
            <form className={styles.form}>
                <h1>Please Fill In Your Details.</h1>
                <div className={styles.form__details}>
                    <label htmlFor='Full Name'>Full Name
                    <input type='text'/>
                    </label>
                    <label htmlFor='Email'>Email
                    <input type='email'/>
                    </label>
                    
                    <label htmlFor='Address'>Address
                    <input type='text'/>
                    </label>
                    <label htmlFor='Subject'>Subject
                    <input type='text'/>
                    
                    </label>
                
                </div>
                <label htmlFor='Full Name'>Message
                    <input type='text'
                    className={styles.message__input}
                    />
                    </label>
                    <button>Send Message</button>
            </form>
        </div>
    )
}

export default contact
