import { useRouter } from 'next/router'
import axios from 'axios'
import styles from '../../styles/BlogDetails.module.css'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { FaAngleDoubleLeft,FaHome } from 'react-icons/fa'

const BlogDetails = () => {
    const router =useRouter()
    const {id} = router.query
    const [loading ,setLoading] = useState(false)
    const[food,setFood] = useState([])
    const fetchFoodDetails = async() => {
        try {
            setLoading(true)
         const response = await axios.get
    (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.data;
            setFood(data?.meals[0]);
            setLoading(false)
         console.log(data?.meals);
        }
        catch(error){
            console.log(error)
              }
            }

            useEffect(() => {
                fetchFoodDetails()
            },[id]);

            //const foodDetails = foodBlog.find(item => item.id === id)
    return (
        <div className={styles.blog__details}>
            <div className={styles.blog__bg}>
            <figure className={styles.bg__overlay}>
                <img src='/img/bg.jpg'
                  className={styles.bg__img}
                alt=''
                />
            </figure>
            <div className={styles.overlay__text}>
                <h1>News and Articles</h1>
                <p> Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.</p>
</div>
            </div>
            <main className={styles.details__section}>
            <div className={styles.details__header}>
                <Link href='/'><span title='home'><FaHome/></span></Link>
                <Link href='/blog'><span title='blog'><FaAngleDoubleLeft/></span></Link>
                <span>{food.strMeal}</span>
                
            </div>
            <div className={styles.meal__heading}>
            <h3 className={styles.meal__details}>Meal Details</h3>
            </div>
            <section className={styles.details__content}>
            <div className={styles.upper__details}>
            
            <div className={styles.food__img}>
                <img src={food.strMealThumb} 
                alt=''/>
            </div>
            <div className={styles.food__details}>
                <div className={styles.food__content}>
           <h2>{food.strMeal}</h2>
           <hr/>
           <h3>Category:<span>{food.strCategory}</span></h3>
           <h3>Source:<span className={styles.source}>{food.strSource}</span></h3>
           <h3>Tags:<span className={styles.tags}>{food.strTags}</span></h3>
           </div>
           <div className={styles.food__ingredients}>
            <h4>Ingredients</h4>
            <ul className={styles.ingredient__content}>
              <li>{food.strIngredient1}</li>
              <li>{food.strIngredient2}</li>
              <li>{food.strIngredient3}</li>
              <li>{food.strIngredient4}</li>
              <li>{food.strIngredient5}</li>
              <li>{food.strIngredient6}</li>
              <li>{food.strIngredient7}</li>
              <li>{food.strIngredient8}</li>
              <li>{food.strIngredient9}</li>
              
             
            </ul>
            </div>
           </div>
           </div>
           <div className={styles.food__measurements}>
            <h3>Measurements:</h3>
            <ul>
            <li>{food.strMeasure1}</li>
              <li>{food.strMeasure2}</li>
              <li>{food.strMeasure3}</li>
              <li>{food.strMeasure4}</li>
              <li>{food.strMeasure5}</li>
              <li>{food.strMeasure6}</li>
              <li>{food.strMeasure7}</li>
              <li>{food.strMeasure8}</li>
              <li>{food.strMeasure9}</li>
              <li>{food.strMeasure10}</li>
            </ul>
            <div className={styles.food__instructions}>
                <h3>Instructions:</h3>
                <p>{food.strInstructions}</p>
            
           </div>
           </div>
           </section>
           </main>
  
  
        </div>
    )
}

export default BlogDetails
