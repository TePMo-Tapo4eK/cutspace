import React from "react";
import styles from "./Comp.module.scss"
import one from '../../imgs/1.svg'
import two from '../../imgs/2.svg'
import three from '../../imgs/3.svg'
import four from '../../imgs/4.svg'

const Comp: any = () => {
    return(
        <div className={styles.Comp}>
            <img alt="img" src={one}/>
            <img alt="img" src={two}/>
            <img alt="img" src={three}/>
            <img alt="img" src={four}/>
        </div>
    )
}
export default Comp