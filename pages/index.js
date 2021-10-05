import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Slide1 from './components/Slide1'
import Slide10 from './components/slide10'
import Slide2 from './components/Slide2'
import Slide3 from './components/slide3'
import Slide4 from './components/slide4'
import Slide5 from './components/Slide5'
import Slide6 from './components/slide6'
import Slide7 from './components/slide7'
import Slide8 from './components/slide8'
import Slide9 from './components/slide9'

export default function Home() {
    return(
    <div>
        <meta name="description" content="width=device-width" />
        <Navbar />  
         <Slide1 /> 
        <Slide2 />
        <Slide3 />
        <Slide4 />
      <Slide5 />
      <Slide6 />
       <Slide7 />
       <Slide8 />
        <Slide9 />
      <Slide10 />  
    </div>
     
    )
 
}
