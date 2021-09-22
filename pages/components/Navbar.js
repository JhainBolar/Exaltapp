import React from 'react'
import styles from '../components/styles/navbar.module.css' 
import image1 from '../../public/image1.jpg'

function Navbar(){
    return(
        <div className={styles.navbar}>
        <div className={styles.logo}>
        <img src={image1} alt='image1'/>
        </div>
        <div className={styles.litext}>
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Business</li>
                <li>Contact Us</li>
                <li>Track Order</li>
                <div className={styles.button}> 
                <button className={styles.button1}>Sign Up</button>
                <button className={styles.button2}>Log In</button>
                </div>
            </ul>
        </div>

        </div>
    )
}
export default Navbar;