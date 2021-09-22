import React  from "react";
import lastimage from '../../public/last.jpg'
import styles from '../components/styles/slide10.module.css'

export default function Slide10(){
    return(
        <div className={styles.image}>
        <img src={lastimage} />
        </div>


    )
}