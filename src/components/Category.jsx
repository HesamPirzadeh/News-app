import { Link } from "react-router"
import { category } from "../constant/header"
import styles from "../css/Category.module.css"

function Category() {
  return (
    <div className={styles.category}>
      <div className={styles.list}>     
      <span>Category</span>
      {
        category.map(i=>(
        <div key={i.id} >
          <Link>{i.listText}</Link>
        </div>
      ))
      }
       </div>
    </div>
  )
}

export default Category
