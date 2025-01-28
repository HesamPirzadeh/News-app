import React from 'react'
import Profile from '../components/Profile'
import Category from '../components/Category'
import Main from '../components/Main'

import styles from '../css/Home.module.css'
import FirstSideNews from '../components/FirstSideNews'
import SecSideNews from '../components/SecSideNews'

function Home() {
  return (<>
  <div className={styles.sp}>
  <span>Todays </span>
  <span>HeadLines</span>
  </div>
   <div className={styles.home}>
      
      <div className={styles.pc}>                      
      <Profile/>
      <Category/>
      </div>
      <Main/>
      <div>
        <FirstSideNews/>
        <SecSideNews/>
      </div>
    </div>
  </>
   
  )
}

export default Home
