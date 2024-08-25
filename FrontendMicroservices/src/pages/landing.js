import {useEffect} from 'react';
import './allPages.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

export const Landing = ()=>{

    useEffect(()=>{
        AOS.init({duration:1000})
      }, [])

    return(
        <div className="landing_container_one">
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <img className="landing_container_two_image1" src={require("../images/landing_dress1.png")} style={{height:"500px"}} alt="image1"/>
                <img className="landing_container_two_image2" src={require("../images/landing_dress2.png")} style={{height:"750px"}} alt="image2"/> 
                <img className="landing_container_two_image3" src={require("../images/landing_dress3.png")} style={{height:"500px"}} alt="image3"/>
                <img className="landing_container_two_image4" src={require("../images/landing_dress4.png")} style={{height:"750px"}} alt="image4"/> 
                <img className="landing_container_two_image5" src={require("../images/landing_dress5.png")} style={{height:"500px"}} alt="image5"/>
                <img className="landing_container_two_image6" src={require("../images/landing_dress6.png")} style={{height:"750px"}} alt="image6"/> 
            </div>
            <div className="landing_container_three">
                <h className="landing_container_three_head">LoomCraft</h>
                <span style={{backgroundColor:"#fff", fontStyle:"italic"}}>-Scroll down to get started👇</span>
            </div>
            <section data-aos="fade-right" data-aos-offset="200">
                <div className="landing_container_four">

                </div>
            </section>
            <section data-aos="fade-left" data-aos-offset="200">
                <div  className="landing_container_five">

                </div>
            </section>
        </div>
    )
}