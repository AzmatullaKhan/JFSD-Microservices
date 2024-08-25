import './allPages.css'
import { useNavigate } from 'react-router-dom'

export const Landing = ()=>{

    let navigate = useNavigate();

    const handleExploreFashionClick=()=>{
        navigate('/home')
    }

    const handleJoinWithUsClick=()=>{
        alert('Need to be done')
    }
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
                <span style={{backgroundColor:"#fff", fontStyle:"italic"}}>-Welcome to our website😊</span>
            </div>
            <center>
                <button className="landingpage_button" onClick={handleExploreFashionClick}>Explore Fashion 🤓</button>
                <button className="landingpage_button" onClick={handleJoinWithUsClick}>Join With Us 🤝</button>
            </center>
        </div>
    )
}