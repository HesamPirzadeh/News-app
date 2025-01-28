
import Footer from './Footer'
import Header from './Header'

import styles from "../css/Layout.module.css"

function Layout({children}) {
  return (
    <div className={styles.layout}>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
