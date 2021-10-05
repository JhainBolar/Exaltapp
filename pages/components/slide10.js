import React  from "react";
import styles from '../components/styles/slide10.module.css'
import lastimage from '../../public/exaltgrey.png'
import appstore3 from '../../public/appstore3.png'
import appstore4 from '../../public/appstore4.png'

export default function Slide10(){
    return(
        <div className={styles.container}>
            <div className={styles.img}>
            <img src={lastimage} />
            </div>
            <div className={styles.text}>
            <p>Copyright @ 2020 Exalt logistics Limitd. All Rights reserved</p>
            </div>
            <div className={styles.button}>
            <div  className={styles.button1}>
            <img src={appstore3} height='40px' width='100px' />
            </div>
            <div  className={styles.button1}>
            <img src={appstore4} height='40px' width='100px' />
            </div>
            </div>

        </div>


    )
}