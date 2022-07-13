import React from "react";
import styles from './Choice.module.scss'
import list from '../../imgs/choice/list.svg'
import like from '../../imgs/choice/like.svg'
import stat from '../../imgs/choice/stat.svg'
import achieve from '../../imgs/choice/achieve.svg'

const Choice : any = () => {
    return(
        <div className={styles.Choice}>
            <h1>Why choose us?</h1>
            <ul>
                <li>
                    <img alt='' src={stat}/>
                    <h3>Performance</h3>
                    <p>Torquem detraxit hosti et quidem se texit, ne ad.</p>
                </li>
                <li>
                    <img alt='' src={achieve}/>
                    <h3>Entrepreneurship</h3>
                    <p>Torquem detraxit hosti et quidem se texit, ne ad.</p>
                </li>
                <li>
                    <img alt='' src={list}/>
                    <h3>Authenticity</h3>
                    <p>Torquem detraxit hosti et quidem se texit, ne ad.</p>
                </li>
                <li>
                    <img alt='' src={like}/>
                    <h3>Kindness</h3>
                    <p>Torquem detraxit hosti et quidem se texit, ne ad.</p>
                </li>
            </ul>
        </div>
    )
}
export default Choice