import React from 'react';
import Image from 'next/image';
import Review from './Review';
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import styles from '../styles/Reservation.module.css'

const Reservation = () => {

 
    return (
        <div className={styles.reservations}>
          <div>
           <h1>Do you have any dinner plan today? 
            Reserve your table</h1> 
          
          <p>Make online reservations with great restuarant reviews from diners and earn
            points towards free ,meals.
          </p>
          <button>Make Reservation</button>
          </div>
          <div className='wrapper'>
          <div className='circle__container'>
            <div className='circle circle1'></div>
            <div className='circle circle2'></div> 
            <div className='circle circle3'></div> 
            <div className='circle circle4'></div> 
            <div className='circle circle5'></div> 
            <div className='circle circle6'></div> 
            <Image src='/img/foodmain.png'
            alt='' 
            width={320}
            height={320}
            className='food__circle'
            /> 
            
          </div>
          </div>
        </div>
    )
}

export default Reservation
