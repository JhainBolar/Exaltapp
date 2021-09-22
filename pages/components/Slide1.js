import React from 'react'
import styles from '../components/styles/slide1.module.css'
import image1 from '../../public/img3.jpg'

export default function Slide1(){
     return(
     
     <div className={styles.container}>
         <div className={styles.row}>
             <div className={styles.text}>
                <h1>The No. 1 logistics Solution <br /> service in Africa</h1>
                <p>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five</p>
                    <button>Get Started</button>
                
             </div>
             <div className={styles.Img}>
                 <div className={styles.imgbox}>
                     <img src={image1} alt='image2'/>
                    
                 </div>

             </div>




         </div>

     </div>

     )
}