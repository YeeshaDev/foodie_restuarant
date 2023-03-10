import React,{useState} from 'react'
import Menu from '../components/Menu'
import styles from '../styles/Menu.module.css'
import { food } from '../redux/data'

const unique = ['all',...new Set(food.map((item) => item.category))]
const menu = () => {
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
        <div>
            <div className={styles.menu__listContent}>
         <ul className={styles.menu__list}>

            {categories.map((category,index)=> {
                return  (
                   
                    <li key={index} 
                    className={active ? styles.menu__btn : styles.active}
                    onClick={() => filterMenu(category)}
                    >
                        {category}
                    </li>
                    
                                  
                    )
            })}
            
            
            </ul>
            
            </div>
          <div className={styles.food__wrapper}>
            {menus.map((item) => {
          return (
            <div key={item.id} className={styles.food__details}>
                <Menu item={item}
                />
                </div>
            )
        })}
            
                </div>     
        </div>
    )
}

export default menu
