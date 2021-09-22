import React from "react";
import styles from '../components/styles/slide4.module.css' 
import image7 from '../../public/lome.jpg' 


export default function Slide4(){
    return(
        <div className={styles.container}>
     <div className={styles.row}>
     <div className={styles.Img}>
             <div className={styles.imgbox}>
                 <img src={image7} />
                
             </div>

         </div>
         <div className={styles.text}>  
            <p> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                </p>
                <button>Register Today</button>
            
         </div>
        




     </div>

 </div>
    )
}