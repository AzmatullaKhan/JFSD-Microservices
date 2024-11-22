import axios from 'axios'
import './css/home.css'
import { Navbar } from './nav'
import { useNavigate } from 'react-router-dom'

export const Home=()=>{

    let dressId=[];

    let isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'))

    const navigate = useNavigate()
    let main_data=[]

    axios.get('http://localhost:9001/images/all').then(res=>{main_data=res.data}).catch(err=>{console.log(err)})

    setTimeout(()=>{
        photoFunction()
        // console.log(main_data)
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
            const formattedValue = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
            }).format(main_cost_data)
            p2.textContent = formattedValue

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
                document.getElementById('main_container_three_dressCost').textContent = formattedValue
            })
        }
        
    }
    const handleClickOnDress = (e) => {
        document.getElementById('main_container_three').className='main_container_three_visible'
        document.getElementById('main_container_three').style.animation = 'main_container_three_visible-animation 1s ease 0s'

        let array = Array(e.target)
        dressId.push(array[0].childNodes[0].src)
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
        // console.log(img_ele)
    }
    const handleLoginClick = ()=>{
        navigate('/login')
    }
    const handleClickOnDressSize=(e)=>{
        let element = document.getElementById(e.target.id)

        let p1 = document.getElementById('S')
        p1.style.background = 'transparent'
        p1.style.color = '#000'

        let p2 = document.getElementById('XS')
        p2.style.background = 'transparent'
        p2.style.color = '#000'

        let p3 = document.getElementById('M')
        p3.style.background = 'transparent'
        p3.style.color = '#000'

        let p4 = document.getElementById('L')
        p4.style.background = 'transparent'
        p4.style.color = '#000'

        let p5 = document.getElementById('XL')
        p5.style.background = 'transparent'
        p5.style.color = '#000'

        let p6 = document.getElementById('XXL')
        p6.style.background = 'transparent'
        p6.style.color = '#000'

        element.style.background="#000"
        element.style.color="#fff"

        
    }

    const handleBuyClick=()=>{
        let size;
        let p1 = document.getElementById('S')        
        let p2 = document.getElementById('XS')        
        let p3 = document.getElementById('M')        
        let p4 = document.getElementById('L')        
        let p5 = document.getElementById('XL')        
        let p6 = document.getElementById('XXL')  
                
        if(p1.style.color==='rgb(255, 255, 255)')
            size = (p1.innerHTML)
        else if(p2.style.color==='rgb(255, 255, 255)')
            size = (p2.textContent)
        else if(p3.style.color==='rgb(255, 255, 255)')
            size = (p3.textContent)
        else if(p4.style.color==='rgb(255, 255, 255)')
            size = (p4.textContent)
        else if(p5.style.color==='rgb(255, 255, 255)')
            size = (p5.textContent)
        else if(p6.style.color==='rgb(255, 255, 255)')
            size = (p6.textContent)

        if(!size)
            alert('Select Size to proceed')
        else{
            setTimeout(()=>{
                localStorage.setItem('size', size)
                localStorage.removeItem('dressId')
                localStorage.setItem('dressId', JSON.stringify(dressId))
            },100)
            navigate('/buyDress')
        }
    }

    const handleAddToCart = async () => {
        const formData = new FormData();

        for(let i=0;i<main_data.length;i=i+1){
            let main_images_data = main_data[i].images
            if(dressId[0] === main_images_data[0]){

                formData.append('data1', dressId[0]);
                formData.append('name', main_data[i].name);
                console.log(typeof(main_data[i].name))
                formData.append('cost', main_data[i].cost);
                formData.append('materialused', main_data[i].materialUsed);
                formData.append('description', main_data[i].description);
                formData.append('publisher', main_data[i].publisher)
                formData.append('customerid', localStorage.getItem('username'))


            }
        }
    
        try {
            const response = await axios.post('http://localhost:9001/customercart/upload', formData);
            handleCloseContainerThree()
            alert('Added to Cart')
            console.log(response)
        } catch (error) {
            alert('Error Submitting Order')
        }

        // console.log(dressId)
    };

    return(
        <div className="main_container_one">
            <Navbar />
            <div style={{position:"absolute",top:'0', zIndex:'1'}} className='main_container_animation'>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/><br></br>
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
                        <p style={{fontFamily:"monospace",fontSize:"20px",margin:"15px 0px 0px 0px",fontWeight:"bolder"}}id='main_container_three_dressName'></p>
                        <p style={{fontFamily:"monospace",fontSize:"16px",margin:"5px",fontWeight:"bolder"}} id='main_container_three_dressCost'></p>
                        <p style={{margin:"0",alignSelf:"start", marginLeft:"50px"}}>Avaible In</p>
                        <div style={{width:"400px", height:"50px",display:"flex",justifyContent:"space-evenly",alignItems:"center",fontSize:"22px"}}>
                            <p style={{border:"1px solid", padding:"4px 10px", cursor:"pointer"}} onClick={handleClickOnDressSize} id='S'>S</p>
                            <p style={{border:"1px solid", padding:"4px 10px", cursor:"pointer"}} onClick={handleClickOnDressSize} id='XS'>XS</p>
                            <p style={{border:"1px solid", padding:"4px 10px", cursor:"pointer"}} onClick={handleClickOnDressSize} id='M'>M</p>
                            <p style={{border:"1px solid", padding:"4px 10px", cursor:"pointer"}} onClick={handleClickOnDressSize} id='L'>L</p>
                            <p style={{border:"1px solid", padding:"4px 10px", cursor:"pointer"}} onClick={handleClickOnDressSize} id='XL'>XL</p>
                            <p style={{border:"1px solid", padding:"4px 10px", cursor:"pointer"}} onClick={handleClickOnDressSize} id='XXL'>XXL</p>
                        </div>
                    </div>
                    <div style={{width:"250px", height:"250px",display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                        {
                            isLoggedIn?
                            (<button className='main_container_three_button' onClick={handleBuyClick}>Buy</button>):
                            (<button className='main_container_three_button' onClick={handleLoginClick}>Login To Buy</button>)
                        }
                        {
                            isLoggedIn?
                            (<button className='main_container_three_button' onClick={handleAddToCart}>Add to cart</button>):
                            (<button className='main_container_three_button' onClick={handleLoginClick}>Login to create cart</button>)
                        }
                    </div>
                </div>  
            </div>
        </div>
    )
}