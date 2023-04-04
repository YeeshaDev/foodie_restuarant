import React from 'react'
import styles from '../styles/Contact.module.css'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const ReserveTable = () => {
const router = useRouter()
    const reserve = () => {
        toast.success('Reservation successful.Thank you')
        router.push('/')

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
                <h1>Reserve A Table</h1>
                <p> Reserve a table with us today and 
                    become one of our most cherished customers.
                    We give the best service so make sure you reseerve a table today</p>
</div>
</div>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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
                    <label htmlFor='date'>Date
                    <input type='date'/>
                    
                    </label>
                
                </div>
                <label htmlFor='Full Name'>Message
                    <input type='text'
                    className={styles.message__input}
                    />
                    </label>
                    <button onClick={reserve}>Reserve Table</button>
            </form>
        </div>
    )
}

export default ReserveTable
