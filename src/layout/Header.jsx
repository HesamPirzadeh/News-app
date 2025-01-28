
import { headerList } from "../constant/header"
import styles from "../css/Header.module.css"
import {  NavLink } from "react-router"

import image1 from '../img/mag1.png'

function Header() {  
  return (
    <div className={styles.header}>
      <div>
        <span>News</span>
      </div>
       {
         headerList.map((i) => (
         <div className={styles.list} key={i.id}>  
            <NavLink to={i.path} >

           <div>

          <img  src={i.icon} alt=""  />
            
         </div>
          <div>
         {i.text}
          </div>
          </NavLink>
       </div>
      )) 
      }
      
      <div className={styles.search_input}>
        <input type="text" placeholder="Enter search term" />
        <button><img src={image1} alt="" /></button>
      </div>
    </div>
  )
}

export default Header
