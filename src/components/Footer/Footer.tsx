import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../imgs/logo.svg";
import facebook from '../../imgs/web/Facebook.svg'
import twitter from '../../imgs/web/Twitter.svg'
import youtube from '../../imgs/web/Youtube.svg'
import linkedin from '../../imgs/web/Linkedin.svg'


const Footer: any = () => {
  return (
    <div className={styles.Footer}>
      <ul>
        <img src={logo} />
        <li>Quae fuerit causa, nollem me ab <br/>illo inventore veritatis et.</li>
        <ul>
          <li>
            <img src={facebook}/>
          </li>
          <li>
            <img src={twitter}/>
          </li>
          <li>
            <img src={youtube}/>
          </li>
          <li>
            <img src={linkedin}/>
          </li>
        </ul>
      </ul>
      <div className={styles.Footer_right}>
      <ul>
        <h1>Privacy</h1>
        <li>Si sine causa</li>
        <li>Quae fuerit causa</li>
        <li>Certe, inquam</li>
        <li>Torquatos nostros? </li>
      </ul>
      <ul>
        <h1>Legal</h1>
        <li>Ut placet, inquam </li>
        <li>Certe, inquam</li>
        <li>Et quidem rerum</li>
        <li>At vero eos et</li>
      </ul>
      <ul>
        <h1>Contact</h1>
        <li>Primum igitur</li>
        <li>Certe, inquam</li>
        <li>Quae fuerit causa</li>
      </ul>
      </div>
    </div>
  );
};
export default Footer;
