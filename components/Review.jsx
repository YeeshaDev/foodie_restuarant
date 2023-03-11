import React,{useState} from 'react'
import Image from 'next/image';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/Review.module.css';
import {FaArrowLeft,FaArrowRight,FaApple,FaGooglePlay} from 'react-icons/fa'

const Review = () => {
  const [sliderRef, setSliderRef] = useState(null)
    const review =[
        {
          id:1,
          name:'John Doe',
          image:'/img/drink1.jpg',
          review:'This place is great!Atmosphere is chillm and cool.The staffs are also really friendly.They serve great ffoods and drinks and you can tell that keeping the customers happy is their main priority',
        chefImg:'/img/chefImg.png',
        chefName:'Marvin Flores'
        },
        {
          id:2,
          name:'John Doe',
          image:'/img/drink1.jpg',
          review:'This place is great!Atmosphere is chillm and cool.The staffs are also really friendly.They serve great ffoods and drinks and you can tell that keeping the customers happy is their main priority',
          chefImg:'/img/chefImg.png',
         chefName:'Marvin Flores'
        },
        {
          id:3,
          name:'John Doe',
          image:'/img/drink1.jpg',
          review:'This place is great!Atmosphere is chillm and cool.The staffs are also really friendly.They serve great ffoods and drinks and you can tell that keeping the customers happy is their main priority',
          chefImg:'/img/chefImg.png',
          chefName:'Marvin Flores'
        },
        {
          id:4,
          name:'John Doe',
          image:'/img/drink1.jpg',
          review:'This place is great!Atmosphere is chillm and cool.The staffs are also really friendly.They serve great ffoods and drinks and you can tell that keeping the customers happy is their main priority',
          chefImg:'/img/chefImg.png',
          chefName:'Marvin Flores'
        },
        {
          id:5,
          name:'John Doe',
          image:'/img/drink1.jpg',
          review:'This place is great!Atmosphere is chillm and cool.The staffs are also really friendly.They serve great ffoods and drinks and you can tell that keeping the customers happy is their main priority',
          chefImg:'/img/chefImg.png',
          chefName:'Marvin Flores'
        },
      ]

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
        <div>
            <div className={styles.chef__heading}>
              <h1>What our customers say</h1>
              <div className={styles.arrow}>
                <span onClick={sliderRef?.slickPrev}> <FaArrowLeft /></span>
             <span onClick={sliderRef?.slickNext}><FaArrowRight/></span>
              
              </div>
            </div>
            <div className={styles.review__content}>
              <Slider ref={setSliderRef} {...settings}>
              {review.map((item) => {
                return (
                  <div key={item.id} className={styles.review__details}>
                    <p>&quot;{item.review}.&quot;</p>
                    <Image src={item.image} alt=''
                    width={50}
                    height={50} 
                    className={styles.review__img}
                    />
                    <h3>{item.name}</h3>
                  </div>
              )
              })}
              </Slider>
            </div>

            <div className={styles.chefs}>
              <div className={styles.chef__heading}>
              <h1>Meet our Chefs</h1>
              <div className={styles.arrow}>
                <span onClick={sliderRef?.slickPrev}> <FaArrowLeft /></span>
            <span onClick={sliderRef?.slickNext}><FaArrowRight/></span>
              
              </div>
              </div>
              <div className={styles.chef__content}>
              <Slider ref={setSliderRef} {...settings}>
               {review.map((item) => {
                return (
                  <div key={item.id} className={styles.chef__details}>
                    <figure className={styles.chefImg__wrapper}>
                    <Image src={item.chefImg} alt=''
                    width={200}
                    height={200} 
                    className={styles.chefImg}
                    />
                    </figure>
                    <h3>{item.chefName}</h3>
                  </div>
              )
              })} 
              </Slider >
              </div>
              
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottom__text}>
              <h1>Never feel hungry! <br/> Download our mobile app<br/> 
                Enjoy Delicious Food
              </h1>
              <p>Make online reservations,read reviews from diners and earn
                points towards free meals.
              </p>
            <div className={styles.bottom__btns}>
              <button className={styles.apple__btn}>
                <FaApple className={styles.apple}/>
                <div className={styles.btn__text}>
                Download on the<br/>
              <span>App Store</span>
              </div>
              </button>
              <button className={styles.googleplay__btn}>
                <Image 
                src='/img/googlePlay.png'
                width={30}
                height={30}
                className={styles.googlePlay}
                alt=''
                />
                <div className={styles.btn__text}>
                Get it from<br/>
                <span>App Store</span>
              </div>
              </button>
              </div>
            </div>
              <figure>
              <Image src='/img/mobile.png' alt=''
                    width={150}
                    height={300} 
                    className={styles.mobile}
                    />
              </figure>
            </div>
            
        </div>
    )
}

export default Review
