import './css/home.css'
import { Navbar } from './nav'

export const Home=()=>{
    return(
        <div className="main_container_one">
            <Navbar />
            <div style={{position:"absolute",top:'0', zIndex:'1'}} className='main_container_animation'>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
            </div>
            <div className='main_container_two'>
                <div className='main_container_two_dress'>
                    <center>
                        <img src={require('../images/dresses/dress1.png')} className='main_container_two_dress_image' alt='imag1'/>
                        <p style={{fontFamily:"monospace",fontSize:"20px",margin:"15px 0px 0px 0px"}}>Velvet embroidered, indigo kalamkari cotton summer dress</p>
                        <p style={{fontFamily:"monospace",fontSize:"16px",margin:"5px", fontWeight:"10"}}>Rs 7,800.00</p>
                    </center>
                </div>
                <div className='main_container_two_dress'>
                    <center>
                        <img src={require('../images/dresses/dress2.png')} className='main_container_two_dress_image' alt='imag1'/>
                        <p style={{fontFamily:"monospace",fontSize:"20px",margin:"15px 0px 0px 0px"}}>Maroon khadi kurta with stylized sleeves</p>
                        <p style={{fontFamily:"monospace",fontSize:"16px",margin:"5px", fontWeight:"10"}}>Rs 4,800.00</p>
                    </center>
                </div>
                <div className='main_container_two_dress'>
                    <center>
                        <img src={require('../images/dresses/dress3.png')} className='main_container_two_dress_image' alt='imag1'/>
                        <p style={{fontFamily:"monospace",fontSize:"20px",margin:"15px 0px 0px 0px"}}>Sage green velvet embellished kalamkari cotton T-shirt dress</p>
                        <p style={{fontFamily:"monospace",fontSize:"16px",margin:"5px", fontWeight:"10"}}>Rs 4,500.00</p>
                    </center>
                </div>
            </div>
        </div>
    )
}