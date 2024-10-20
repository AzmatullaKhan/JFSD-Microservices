import axios from 'axios'
import './css/home.css'
import { Navbar } from './nav'
import { useNavigate } from 'react-router-dom'

export const Home=()=>{

    let isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'))

    const navigate = useNavigate()
    let main_data=[]

    axios.get('http://localhost:9001/images/all').then(res=>{main_data=res.data}).catch(err=>{console.log(err)})

    setTimeout(()=>{
        photoFunction()
        console.log(main_data)
    },2000)
    const photoFunction = () =>{
        for(let i = 1; i <= main_data.length; i=i+1){

            let main_images_data = main_data[i-1].images
            let main_name_data = main_data[i-1].name
            let main_cost_data = main_data[i-1].cost

            let main_div = document.getElementById('main_container_two')

            let mini_div = document.createElement('div')
            mini_div.className = 'main_container_two_dress'

            let img_ele = document.createElement('img')
            img_ele.className = 'main_container_two_dress_image'
            img_ele.alt = 'image_'+i;
            img_ele.src = main_images_data[0]

            let p1 = document.createElement('p1')
            p1.textContent = main_name_data

            let p2 = document.createElement('p2')
            p2.textContent = main_cost_data

            mini_div.appendChild(img_ele)
            mini_div.appendChild(p1)
            mini_div.appendChild(p2)
            
            main_div.appendChild(mini_div)

            mini_div.addEventListener('click', (e)=>{
                handleClickOnDress(e)
                document.getElementById('main_container_three_image1').src = main_images_data[1]
                document.getElementById('main_container_three_image2').src =main_images_data[2]
                document.getElementById('main_container_three_image3').src = main_images_data[3]
                document.getElementById('main_container_three_image4').src =main_images_data[4]
                document.getElementById('main_container_three_main_image').src = main_images_data[0]

                document.getElementById('main_container_three_dressName').textContent = main_name_data
                document.getElementById('main_container_three_dressCost').textContent = main_cost_data
            })
        }
        
    }
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
                
            </div>
            <div className='main_container_three_hidden' id='main_container_three'>
                <span style={{position:"absolute",margin:"0px 0px 0px 760px", color:"red",fontSize:"28px",cursor:"pointer"}} onClick={handleCloseContainerThree}>X</span> 
                <div style={{height:"500px",width:"700px",padding:"0px 30px",display:"flex"}}>
                    <div style={{height:"500px",width:"200px",margin:"0px 20px",display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column",cursor:"pointer"}}>
                        <div onMouseEnter={handleMouseOver}><img alt='img1' style={{height:"100px",width:"80px", margin:"5px", borderRadius:"12px"}} id='main_container_three_image1'/></div> 
                        <div onMouseEnter={handleMouseOver}><img alt='img2' style={{height:"100px",width:"80px", margin:"5px", borderRadius:"12px"}} id='main_container_three_image2'/></div> 
                        <div onMouseEnter={handleMouseOver}><img alt='img3' style={{height:"100px",width:"80px", margin:"5px", borderRadius:"12px"}} id='main_container_three_image3'/></div> 
                        <div onMouseEnter={handleMouseOver}><img alt='img4' style={{height:"100px",width:"80px", margin:"5px", borderRadius:"12px"}} id='main_container_three_image4'/></div> 
                    </div>    
                    <div style={{height:"500px",width:"400px",borderRadius:"12px",margin:"0px 20px",padding:"3px 10px"}}>
                        <img alt='img1' style={{height:"490px",width:"350px",borderRadius:"12px",boxShadow:" 0 0 10px 1px rgb(0, 0, 0)"}} id='main_container_three_main_image'/>
                    </div>    
                </div> 
                <div style={{height:"250px", width:"700px",display:"flex"}}>
                    <div style={{color:"#000",width:"450px", height:"250px",display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                        <p style={{fontFamily:"monospace",fontSize:"20px",margin:"15px 0px 0px 0px",fontWeight:"bolder"}}id='main_container_three_dressName'>Velvet embroidered, indigo kalamkari cotton summer dress</p>
                        <p style={{fontFamily:"monospace",fontSize:"16px",margin:"5px",fontWeight:"bolder"}} id='main_container_three_dressCost'>Rs 7,800.00</p>
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