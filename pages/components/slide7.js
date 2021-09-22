import React from "react";
import styles from '../components/styles/slide7.module.css'
import image10 from '../../public/phone.jpg'
import image11 from '../../public/appstore1.png'
import image12 from '../../public/appstore2.png'

export default function  Slide7(){
    return(
        <div className={styles.container}>
        <div className={styles.row}>
        <div className={styles.Img}>
                <div className={styles.imgbox}>
                <img src={image10}/> 
                   
                </div>

            </div>
            <div className={styles.text}>
               <h1>Every logistics truck driver<br /> dream app. Make deliveries<br /> in a stres free manner</h1>
                  <div className={styles.image}>
                  <div className={styles.image1}>
                   <img src={image11} height='50px' alt='image11' />
                   </div>
                   <div className={styles.image2}>
                   <img src={image12} height='50px' alt='image12' />
                   </div>
                  </div>
                   </div>
            </div>
           
        </div>

    )
}