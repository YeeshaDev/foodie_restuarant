import React,{useEffect, useState} from 'react';
import styles from '../styles/Blog.module.css'
import axios from 'axios';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';

const blog = () => {
    const router = useRouter();
    // {id} = router.query;
    const [loading ,setLoading] = useState(false)
    const[foodBlog,setFoodBlog] = useState([])
    const [search, setSearch] = useState("");
    const[keyword,setKeyword] = useState('b')

const fetchFoodDetails = async() => {
    try {
        setLoading(true)
     const response = await axios.get
(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);
        const data = await response.data;
        setFoodBlog(data?.meals);
        setLoading(false)
     console.log(data?.meals);
    }
    catch(error){
        console.log(error)
          }
   /* try {
        const response = await axios.get(`www.themealdb.com/api/json/v1/1/random.php`)
        const data = await response.data
        setFoodBlog(data)
        console.log(foodBlog)

    }
    catch(error){
  console.log(error)
    }
   

 */
}

useEffect(() => {
    fetchFoodDetails()
},[keyword]);

const getSearch = e => {
    e.preventDefault();
    setKeyword(search);
    setSearch("");
  }
 const findBlog = (id) => { 
foodBlog.find((item) => item.id === id)
console.log(id)
router.push(`/blog/${id}`)


 }

const truncate = (str) => {
    return str.length > 10 ? str.substring(0,100) + '...' : str
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
                <h1>News and Articles</h1>
                <p> Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque 
tellus vehicula aptent dignissim.</p>
<form onSubmit={getSearch} className={styles.form}>
                <input type='search'
                placeholder='search Blog'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <span className={styles.search__btn}><FaSearch/></span>
                </form>
            </div>
            </div>
            <div className={styles.blog__container}>
                {loading ? (<h1 className={styles.loading}>Loading</h1>) : (
                    foodBlog.slice(0,12).map((item) => {
                    return (
                        <div key={item.idMeal} className={styles.blog__content}>
                          <img src={item.strMealThumb} alt=''
               className={styles.blog__foods}
               />
               <h3>{item.strMeal}</h3>
               <p>{truncate(item.strInstructions)} </p>
            <button onClick={() =>findBlog(item.idMeal)}>Read more</button>
                        </div>
                    )
                    
                }))
            }
            </div>
        </div>
    )
}/*<div key={item.id} className={styles.blog__content}>
               <img src={item.img} alt=''
               className={styles.blog__foods}
               />
               <h3>{item.name}</h3>
               <p>{item.sub} </p>
            <button>Read more</button>
            </div> */

export default blog
