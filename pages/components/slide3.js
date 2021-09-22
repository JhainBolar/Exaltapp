import React from "react";
import styles from '../components/styles/slide3.module.css'
import image5 from '../../public/white.png'

export default function Slide3(){
    return(
        <div className={styles.container}>
            <div className={styles.hr}>
                <hr /> 
            </div>
         <div className={styles.row}>
             <div className={styles.text}>
                <h1>Top of the line logistics<br /> services  </h1>
                <p> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    </p>
                
             </div>
             <div className={styles.Img}>
                 <div className={styles.imgbox}>
                     <img src={image5} alt='image5' /> 
                    
                 </div>

             </div>




         </div>

     </div>
    )
}