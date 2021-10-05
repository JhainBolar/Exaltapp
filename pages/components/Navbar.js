import React from 'react'
import styles from '../components/styles/navbar.module.css' 
import image1 from '../../public/exalt.png'
import Link from 'next/link'

const items = [
    {
        id: 1,
        value: "About Us",
        link: "/#about",
    },
    {
        id: 2,
        value: "Service",
        link: "/#services",
    },
    {
        id: 3,
        value: "Businesses",
        link: "/#businesses",
    },
    {
        id: 4,
        value: "Contact Us",
        link: "/#contact",
    },
    {
        id: 5,
        value: "Track Order",
        link: "/orders",
    },
];

export default function Navbar(){
    return(
       

        <><div maxWidth="lg" className={styles.navb}>
            <div style={{ cursor: "pointer" }} className={styles.log}>
                <Link href="/">
                    <img src={image1} alt="image" />
                </Link>
            </div>
            <div className={styles.litex}>
                {/* HEADER PAGES WITHOUT DROPDOWN */}
                <div>
                    {items.map((item) => (
                        <p
                            className={styles.headerPagesLink} 
                            key={items.id}
                        >
                            <Link href={`${item.link}`}>
                                {item.value}
                            </Link>
                        </p>
                    ))}
                </div>
                <div className={styles.button}>
                <button className={styles.button1}> Sign Up</button>
                <button className={styles.button2}>Log In</button>
            </div>
            </div>
          
        </div>
           </>
    )}
