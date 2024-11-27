import axios from 'axios'
import './css/myOrders.css'
import { Navbar } from './nav'
// import { useNavigate } from 'react-router-dom'

export const MyOrders = () =>{

    let username;

    setTimeout(()=>{
        username= localStorage.getItem('username')
    },100)
    let order_data=[]
    axios.get('http://localhost:9001/employeeOrder/all').then(res=>{order_data=res.data}).catch(err=>{console.log(err)})

    let book_data =[]
    axios.get('http://localhost:9001/order/all').then((res)=>{book_data=res.data}).catch((err)=>{console.log(err)})
    

    const renderFunction=()=>{
        for(let i=0;i<order_data.length;i=i+1){
            let main_data_images = order_data[i].data1;
            if(order_data[i].buyername === username){

                let main_name_data = order_data[i].dressname
                let main_cost_data = Number(order_data[i].dresscost)

                let main_div = document.createElement('div')
                main_div.className='myorder_dress_holder'
                

                let img_ele = document.createElement('img')
                img_ele.className = 'myorder_dress_holder_image'
                img_ele.alt = 'image_'+i;
                img_ele.src = main_data_images

                let mini_div = document.createElement('div')
                mini_div.className='myorder_dress_holder_desc'

                let p1 = document.createElement('p')
                p1.textContent = main_name_data
                p1.style.width="400px"
                
                let p2 = document.createElement('p')
                p2.textContent = "Size: "+order_data[i].buyersize


                let p3 = document.createElement('p')
                p3.textContent = "Seller: "+order_data[i].dresspublisher
                p3.style.fontWeight='100'
                p3.style.opacity='0.7'

                const formattedValue = new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                }).format(main_cost_data)
                let p4 = document.createElement('p')
                p4.textContent =formattedValue

                let p6 = document.createElement('p6')
                p6.textContent = "OrderId: "+order_data[i].id

                mini_div.appendChild(p1)
                mini_div.appendChild(p2)
                mini_div.appendChild(p3)
                mini_div.appendChild(p4)
                mini_div.appendChild(p6)
                
                let p5 = document.createElement('p')
                p5.textContent = 'Delivered By Seven Days from the day you bought.'
                p5.style.alignSelf='start'
                p5.style.paddingTop="10px"
                p5.style.fontSize="12px"
                p5.style.minWidth="180px"

                let p7 = document.createElement('p')
                p7.textContent = 'PaymentStatus: '+book_data[i].orderStatus
                p7.style.alignSelf='end'
                p7.style.paddingTop="10px"
                p7.style.fontSize="12px"
                p7.style.color="red"


                main_div.appendChild(img_ele)
                main_div.appendChild(mini_div)
                main_div.appendChild(p5)
                main_div.appendChild(document.createElement('br'))
                main_div.appendChild(p7)

                document.getElementById('myorder_container_two_id').appendChild(main_div)

                
            }
        }

    }
    setTimeout(()=>{
        console.log(order_data)
        console.log(book_data)
        renderFunction()
    },2000)
    return(
        <div id='myorder_container_one' className='myorder_container_one'>
            <Navbar />
            <div style={{position:"absolute",top:'0', zIndex:'1'}} className='myorder_container_animation'>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/><br></br>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
            </div>
            <div className='myorder_container_four' style={{position:"sticky", top:"60px"}}>
                <p style={{fontSize:"22px", weight:"bolder"}}>Support</p>
                <hr style={{width:"100%", margin:"-20px 0px 0px 0px"}}></hr><br></br>

                <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                    <p style={{fontSize:"18px", weight:"bolder"}}>Query1 </p>
                </div>

                <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                    <p style={{fontSize:"18px", weight:"bolder"}}>Query2</p>
                </div>

                <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                    <p style={{fontSize:"18px", weight:"bolder"}}>Query3</p>
                </div>

            </div>
            <div className='myorder_container_two'>
                <div className='myorder_container_three' id='myorder_container_two_id'>

                </div>
            </div>
        </div>
    )
}