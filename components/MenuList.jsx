import React,{useState} from 'react';
import Menu from './Menu';
import Link from 'next/link';
import items from '../redux/data';
import { food } from '../redux/data';
import styles from '../styles/Menu.module.css'

const unique = ['all',...new Set(food.map((item) => item.category))]

const MenuList = () => {
    const [menus,setMenus] = useState(food)
    const [categories,setCategories] = useState(unique)
    const [active,setActive] = useState(false)
    
    const filterMenu = (category) => {
        if (category === 'all') {
          setMenus(food)
          return;
        }
        
        const newMenu = food.filter((item) => item.category === category)
        setMenus(newMenu)
        setActive(true)
          }
    return (
        <div className={styles.menu__content}>
            <div className={styles.menu__header}>
           <h1>Our Regular Menu Pack</h1>
           
           <button>See Menu</button>
           </div>
           <div className={styles.menu__listContent}>
         <ul className={styles.menu__list}>

            {categories.map((category,index)=> {
                return  (
                <>
                    <li key={index} 
                    className={active ? styles.menu__btn : styles.active}
                    onClick={() => filterMenu(category)}
                    >
                        {category}
                    </li>
                    </>
                    
                                  
                    )
            })}
            
            
            </ul>
            
            </div>
            
        
            <div className={styles.food__wrapper}>
            {menus.slice(0,8).map((item) => {
          return (
            <div key={item.id} className={styles.food__details}>
                <Link href={`/food/${item.id}`}>
                <Menu item={item}/>
                </Link>
                </div>
            )
        })}
            
                </div>   
        </div>
    )
}

export default MenuList
