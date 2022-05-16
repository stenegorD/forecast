import React from 'react'
import {BsUmbrellaFill} from 'react-icons/bs';
import styles from './Footer.module.scss';

function Footer() {

let today = new Date(); 
let year = today.getFullYear(); 

  return (
    <div className={styles.footer}>
      <BsUmbrellaFill size={"3rem"}/>
      <p>{year}</p>
      <p> ® All rights reserved</p>
      </div>
  )
}

export default React.memo(Footer);