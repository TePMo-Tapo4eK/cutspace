import React from "react";
import styles from './Contact.module.scss'
import girl from '../../imgs/girlus.svg'

const Contact : any = () => {
    return(
        <div className={styles.Contact}>
            <div className={styles.Contact_text}>
                <h1>Get experience <br/>from the expert</h1>
                <p>Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex</p>
                <button>Contact Us</button>
            </div>
            <img src={girl}/>
        </div>
    )
}
export default Contact