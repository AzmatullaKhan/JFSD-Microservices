import axios from 'axios'
import './css/customerCart.css'
export const CustomerCart=()=>{
    let main_data = []
    axios.get('http://localhost:9001/customercart/all').then(res=>{main_data=res.data}).catch(err=>{console.log(err)})

    let username;

    setTimeout(()=>{
        username = localStorage.getItem('username')
    },100)

    const renderFunction=()=>{
        for(let i=0;i<main_data.length;i=i+1){
            let main_data_images = main_data[i].images;
            console.log(main_data[i])
            if(main_data[i].customerId === username){

                let main_name_data = main_data[i].name
                let main_cost_data = Number(main_data[i].cost)

                let main_div = document.createElement('div')
                main_div.className='customercart_dress_holder'
                

                let img_ele = document.createElement('img')
                img_ele.className = 'customercart_dress_holder_image'
                img_ele.alt = 'image_'+i;
                img_ele.src = main_data_images[0]

                let mini_div = document.createElement('div')
                mini_div.className='customercart_dress_holder_desc'

                let p1 = document.createElement('p')
                p1.textContent = main_name_data
                
                let p2 = document.createElement('p')
                p2.textContent = "Size: "


                let p3 = document.createElement('p')
                p3.textContent = "Seller: "+main_data[i].publisher
                p3.style.fontWeight='100'
                p3.style.opacity='0.7'

                const formattedValue = new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                }).format(main_cost_data)
                let p4 = document.createElement('p')
                p4.textContent =formattedValue

                let p6 = document.createElement('p')
                p6.textContent ="Material Used: "+main_data[i].materialUsed
                p6.style.fontSize='14px'
                p6.style.opacity='0.7'

                mini_div.appendChild(p1)
                mini_div.appendChild(p2)
                mini_div.appendChild(p3)
                mini_div.appendChild(p4)
                mini_div.appendChild(p6)
                
                let p5 = document.createElement('p')
                p5.textContent = 'Delivered By Seven Days from now.'
                p5.style.alignSelf='start'
                p5.style.paddingTop="10px"
                p5.style.fontSize="12px"

                main_div.appendChild(img_ele)
                main_div.appendChild(mini_div)
                main_div.appendChild(p5)
                

                document.getElementById('customercart_container_three_id').appendChild(main_div)

                
            }
        }
    }

    setTimeout(() => {
        renderFunction()
    }, 2000);
    return(
        <div id='customercart_container_one' className='customercart_container_one'>
            <div style={{position:"absolute",top:'0', zIndex:'1'}} className='customercart_container_animation'>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/><br></br>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
            </div>
            <div className='customercart_container_two'>
                <div className='customercart_container_three' id='customercart_container_three_id'>
                    
                </div>
            </div>
        </div>
    )
}