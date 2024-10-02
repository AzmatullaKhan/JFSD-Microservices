import './css/home.css'
import { Navbar } from './nav'
import { useNavigate } from 'react-router-dom'

export const Home=()=>{

    let isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'))

    const navigate = useNavigate()

    // const photoFunction = () =>{
    //     for(let i = 1; i <= 3; i=i+1){
    //         let main_div = document.getElementById('main_container_two')

    //         let mini_div = document.createElement('div')
    //         mini_div.className = 'main_container_two_dress'

    //         let img_ele = document.createElement('img')
    //         img_ele.className = 'main_container_two_dress_image'
    //         img_ele.alt = 'image_'+i;
    //         img_ele.src = require('../images/dresses/dress'+i+'.png')

    //         let p1 = document.createElement('p1')
    //         p1.textContent = 'Velvet embroidered, indigo kalamkari cotton summer dress'

    //         let p2 = document.createElement('p2')
    //         p2.textContent = 'Rs 7,800.00'

    //         mini_div.appendChild(img_ele)
    //         mini_div.appendChild(p1)
    //         mini_div.appendChild(p2)
            
    //         main_div.appendChild(mini_div)

    //         mini_div.addEventListener('click', (e)=>{
    //             let arr = Array(e.target)[0].children
    //             console.log(arr[0].src)
    //         })
    //     }
        
    // }
    // setTimeout(()=>{
    //     photoFunction()
    // },100)
    const handleClickOnDress = (e) => {
        let arr = Array(e.target)[0].children
        
        let img_ele = arr[0]
        let p1 = arr[1]
        let p2 = arr[2]

        console.log(img_ele, p1, p2)

        document.getElementById('main_container_three').className='main_container_three_visible'
        document.getElementById('main_container_three').style.animation = 'main_container_three_visible-animation 1s ease 0s'
    }

    const handleCloseContainerThree = () => {
        document.getElementById('main_container_three').style.animation = 'main_container_three_hidden-animation 1s ease 0s'
        setTimeout(()=>{
            document.getElementById('main_container_three').className='main_container_three_hidden'
        },900)
    }
    const handleMouseOver = (e)=>{
        let img_ele = e.target.children[0]
        document.getElementById('main_container_three_main_image').src=img_ele.src
        console.log(img_ele)
    }
    const handleLoginClick = ()=>{
        navigate('/login')
    }
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
            <div className='main_container_two' id='main_container_two'>
                <div className='main_container_two_dress' onClick={handleClickOnDress}>
                        <img src={require('../images/dresses/dress1.png')} className='main_container_two_dress_image' alt='imag1'/>
                        <p style={{fontFamily:"monospace",fontSize:"20px",margin:"15px 0px 0px 0px"}}>Velvet embroidered, indigo kalamkari cotton summer dress</p>
                        <p style={{fontFamily:"monospace",fontSize:"16px",margin:"5px", fontWeight:"10"}}>Rs 7,800.00</p>
                </div>
                <div className='main_container_two_dress'>
                        <img src={require('../images/dresses/dress2.png')} className='main_container_two_dress_image' alt='imag1'/>
                        <p style={{fontFamily:"monospace",fontSize:"20px",margin:"15px 0px 0px 0px"}}>Maroon khadi kurta with stylized sleeves</p>
                        <p style={{fontFamily:"monospace",fontSize:"16px",margin:"5px", fontWeight:"10"}}>Rs 4,800.00</p>
                </div>
                <div className='main_container_two_dress'>
                        <img src={require('../images/dresses/dress3.png')} className='main_container_two_dress_image' alt='imag1'/>
                        <p style={{fontFamily:"monospace",fontSize:"20px",margin:"15px 0px 0px 0px"}}>Sage green velvet embellished kalamkari cotton T-shirt dress</p>
                        <p style={{fontFamily:"monospace",fontSize:"16px",margin:"5px", fontWeight:"10"}}>Rs 4,500.00</p>
                </div>
            </div>
            <div className='main_container_three_hidden' id='main_container_three'>
                <span style={{position:"absolute",margin:"0px 0px 0px 760px", color:"red",fontSize:"28px",cursor:"pointer"}} onClick={handleCloseContainerThree}>X</span> 
                <div style={{height:"500px",width:"700px",padding:"0px 30px",display:"flex"}}>
                    <div style={{height:"500px",width:"200px",margin:"0px 20px",display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column",cursor:"pointer"}}>
                        <div onMouseEnter={handleMouseOver}><img src={require('../images/dresses/dress1.png')} alt='img1' style={{height:"100px",width:"80px", margin:"5px", borderRadius:"12px"}}/></div> 
                        <div onMouseEnter={handleMouseOver}><img src={require('../images/dresses/dress1.png')} alt='img2' style={{height:"100px",width:"80px", margin:"5px", borderRadius:"12px"}}/></div> 
                        <div onMouseEnter={handleMouseOver}><img src={require('../images/dresses/dress1.png')} alt='img3' style={{height:"100px",width:"80px", margin:"5px", borderRadius:"12px"}}/></div> 
                        <div onMouseEnter={handleMouseOver}><img src={require('../images/dresses/dress1.png')} alt='img4' style={{height:"100px",width:"80px", margin:"5px", borderRadius:"12px"}}/></div> 
                    </div>    
                    <div style={{height:"500px",width:"400px",borderRadius:"12px",margin:"0px 20px",padding:"3px 10px"}}>
                        <img src={require('../images/dresses/dress1.png')} alt='img1' style={{height:"490px",width:"350px",borderRadius:"12px",boxShadow:" 0 0 10px 1px rgb(0, 0, 0)"}} id='main_container_three_main_image'/>
                    </div>    
                </div> 
                <div style={{height:"250px", width:"700px",display:"flex"}}>
                    <div style={{color:"#000",width:"450px", height:"250px",display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                        <p style={{fontFamily:"monospace",fontSize:"20px",margin:"15px 0px 0px 0px",fontWeight:"bolder"}}>Velvet embroidered, indigo kalamkari cotton summer dress</p>
                        <p style={{fontFamily:"monospace",fontSize:"16px",margin:"5px",fontWeight:"bolder"}}>Rs 7,800.00</p>
                    </div>
                    <div style={{width:"250px", height:"250px",display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                        <button className='main_container_three_button'>Buy</button>
                        {
                            isLoggedIn?
                            (<button className='main_container_three_button'>Add to cart</button>):
                            (<button className='main_container_three_button' onClick={handleLoginClick}>Login to create cart</button>)
                        }
                    </div>
                </div>  
            </div>
        </div>
    )
}