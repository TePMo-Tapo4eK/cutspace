import React from "react";
import styles from './Start.module.scss'
import play from '../../imgs/play.svg'

const Start:any = () =>{
    return(
        <div className={styles.Start}>
            <div className={styles.Start__text}>
                <h1>Start using our product</h1>
                <p>Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex</p>
                <div className={styles.Start__text_btns}>
                    <button>Contact Us</button>
                    <button><img alt='ing' src={play}/>Watch now</button>
                </div>
            </div>
        </div>
    )
}
export default Start