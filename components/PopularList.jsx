import React,{useState} from 'react';
import styles from '../styles/Popular.module.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import items from '../redux/data';
import Popular from './Popular';
const PopularList = () => {
    const [sliderRef, setSliderRef] = useState(null)

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        //slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        initialSlide: 0,
          arrows: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
               slidesToShow: 3,
              }
              },
            {
              breakpoint: 768,
              settings: {
               slidesToShow: 2,
              }
              },
              {
                breakpoint: 500,
                settings: {
                 slidesToShow: 1,
                }
             }
            
          ]
      };
    return (
        <div className={styles.popular__dishes}>
            <div className={styles.popular__heading}>
        <h1>Popular Dishes</h1>
        <div className={styles.arrows}> 
        <span onClick={sliderRef?.slickPrev}><FaArrowLeft/></span>
        <span onClick={sliderRef?.slickNext}><FaArrowRight/></span>
        </div>
        </div>
        <div className={styles.food__wrapper}>
         
        <Slider ref={setSliderRef} {...settings}>

        {items.map((item) => {
          return (
            <div  key={item.id} className={styles.food__details}>
            <Popular item={item}/>
            </div>
          )
        })}
        </Slider>
          </div>
        </div>
    )
}

export default PopularList
