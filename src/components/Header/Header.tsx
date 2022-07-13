import React from "react";
import styles from './Header.module.scss'
import logo from '../../imgs/logo.svg'

const Header:any = () => {
    return(
        <div className={styles.Header}>
            <img src={logo}/>
            <ul className={styles.menu}>
                <li className={styles.menu__pointactive}>Home</li>
                <li className={styles.menu__point}>About us</li>
                <li className={styles.menu__point}>Find space</li>
                <li className={styles.menu__point}>Share space</li>
                <li className={styles.menu__point}>Promote space</li>
            </ul>
        </div>
    )
}

export default Header