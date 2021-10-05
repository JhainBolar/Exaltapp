import React from "react";
import styles from '../components/styles/slide8.module.css'
import image12 from '../../public/lofe.png'

export default function  Slide8(){
    return(
        <div className={styles.container}>
       
            <div className={styles.text}>
               <h1>The most intuitive  platform for managing all your enterprise logistics</h1>
               <p>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                   standard dummy text ever since the 1500s, when an unknown printer 
                   took a galley of type and scrambled it to make a type specimen book. It has survived not only five</p>
                   <button>Register Today</button>
               
            </div>
            <div className={styles.Img}>
                <div className={styles.imgbox}>
                    <img src={image12} width='500px' alt='image12' /> 
                   
                </div>

            </div>




    

    </div>
    )
}