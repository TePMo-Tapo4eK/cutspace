import { useState } from 'react'
import Header from './Header/Header'
import styles from './App.module.scss'
import MainInfo from './MainInfo/MainInfo'
import Comp from './Companies/Comp'
import Space from './SpaceForYou/Space'
import Start from './Start/Start'
import Serve from './Serve/Serve'
import Choice from './Choice/Choice'
import Words from './Words/Words'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {

  return (
    <div className={styles.App}>
      <Header/>
      <MainInfo/>
      <Comp/>
      <Space/>
      <Start/>
      <Serve/>
      <Choice/>
      <Words/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
