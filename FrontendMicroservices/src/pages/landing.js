import './allPages.css'
import { useNavigate } from 'react-router-dom'

export const Landing = ()=>{

    let navigate = useNavigate();

    const handleExploreFashionClick=()=>{
        document.getElementById('image1').className='landing_container_two_changeAnimation1'
        document.getElementById('image2').className='landing_container_two_changeAnimation2'
        document.getElementById('image3').className='landing_container_two_changeAnimation3'
        document.getElementById('image4').className='landing_container_two_changeAnimation4'
        document.getElementById('image5').className='landing_container_two_changeAnimation5'
        document.getElementById('image6').className='landing_container_two_changeAnimation6'
        document.getElementById('landing_container_three').className='landing_container_three_changeAnimation'
        document.getElementById('center_div').className='landing_container_centerdiv_changedAnimation'

        setTimeout(()=>{
            navigate('/home')
        }, 1400)
        
    }

    const handleJoinWithUsClick=()=>{
        alert('Need to be done')
    }
    return(
        <div className="landing_container_one">
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <img className="landing_container_two_image1" id='image1' src={require("../images/landing_dress1.png")} style={{height:"500px"}} alt="imae1"/>
                <img className="landing_container_two_image2" id='image2' src={require("../images/landing_dress2.png")} style={{height:"750px"}} alt="imae2"/> 
                <img className="landing_container_two_image3" id='image3' src={require("../images/landing_dress3.png")} style={{height:"500px"}} alt="imae3"/>
                <img className="landing_container_two_image4" id='image4' src={require("../images/landing_dress4.png")} style={{height:"750px"}} alt="imae4"/> 
                <img className="landing_container_two_image5" id='image5' src={require("../images/landing_dress5.png")} style={{height:"500px"}} alt="imae5"/>
                <img className="landing_container_two_image6" id='image6' src={require("../images/landing_dress6.png")} style={{height:"750px"}} alt="imae6"/> 
            </div>
            <div className="landing_container_three" id='landing_container_three'>
                <span className="landing_container_three_head">LoomCraft</span>
                <span style={{fontStyle:"italic"}}>-Welcome to our website<span style={{fontStyle:"normal"}}>😊</span></span>
            </div>
            <center id='center_div'>
                <button className="landingpage_button" onClick={handleExploreFashionClick}>Explore Fashion 🤓</button>
                <button className="landingpage_button" onClick={handleJoinWithUsClick}>Join With Us 🤝</button>
            </center>
        </div>
    )
}