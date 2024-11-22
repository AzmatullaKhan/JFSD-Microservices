import './css/buyDress.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const BuyDress=()=>{
    const navigate = useNavigate()

    let items_count=Number(0)
    let items_cost =Number(0)

    const delivery_charge = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format("10")

    const platform_fee =new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format("10")


    let main_data=[]
    axios.get('http://localhost:9001/images/all').then(res=>{main_data=res.data}).catch(err=>{console.log(err)})

    let size,dressId;
    setTimeout(()=>{
        size = localStorage.getItem('size')
        dressId = JSON.parse(localStorage.getItem('dressId'))
    }, 100)
    setTimeout(()=>{
        renderFunction()
        console.log(main_data)
    },2000)

    const renderFunction=()=>{
        for(let j = 0;j<dressId.length;j=j+1){
            for(let i=0;i<main_data.length;i=i+1){
                let main_data_images = main_data[i].images;
                if(dressId[j] === main_data_images[0]){
    
                    let main_name_data = main_data[i].name
                    let main_cost_data = Number(main_data[i].cost)
    
                    let main_div = document.createElement('div')
                    main_div.className='buyDress_dress_holder'
                    
    
                    let img_ele = document.createElement('img')
                    img_ele.className = 'buyDress_dress_holder_image'
                    img_ele.alt = 'image_'+i;
                    img_ele.src = main_data_images[0]
    
                    let mini_div = document.createElement('div')
                    mini_div.className='buydress_dress_holder_desc'
    
                    let p1 = document.createElement('p')
                    p1.textContent = main_name_data
                    
                    let p2 = document.createElement('p')
                    p2.textContent = "Size: "+size
                    p2.style.fontSize="12px"
                    p2.style.marginTop="-20px"
    
    
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
                    
                    items_count=items_count+1;
                    items_cost=items_cost+main_cost_data
    
                    document.getElementById('buydress_container_three_id').appendChild(main_div)
    
                    
                }
            }
        }
    }
    const calculate = () =>{
        document.getElementById('buydress_container_four_itemsCount').textContent = "Items:     "+items_count
        document.getElementById('buydress_container_four_itemsCost').textContent= new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(items_cost)
        document.getElementById('buydress_container_four_deliveryCharge').textContent = delivery_charge
        document.getElementById('buydress_container_four_platformFee').textContent = platform_fee
        document.getElementById('buydress_container_four_totalAmount').textContent = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(items_cost+20)
    }
    setTimeout(()=>{
        calculate()
    }, 2100)

    const handlePlaceOrderClick = (e) =>{
        e.preventDefault()
        alert('Order Placed')
    }
    const handleBackClick=()=>{
        navigate('/home')
    }
    return(
        <div className='buyDress_container_one'>
            <div style={{position:"absolute",top:'0', zIndex:'1'}} className='buyDress_container_animation'>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/><br></br>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
            </div>
            <div className='buyDress_container_two'>
                <div className='buydress_container_three' id='buydress_container_three_id'>
                    
                </div>
                <div className='buydress_container_four' style={{position:"sticky", top:"0"}}>
                    <p style={{fontSize:"22px", weight:"bolder"}}>Order Details</p>
                    <hr style={{width:"100%", margin:"-20px 0px 0px 0px"}}></hr><br></br>

                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <p style={{fontSize:"18px", weight:"bolder"}}>Price (<span id='buydress_container_four_itemsCount'></span>):</p>
                        <p style={{fontSize:"18px", weight:"bolder"}} id='buydress_container_four_itemsCost'>Amount</p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <p style={{fontSize:"18px", weight:"bolder"}}>Delivery Charges:</p>
                        <p style={{fontSize:"18px", weight:"bolder"}} id='buydress_container_four_deliveryCharge'>Amount</p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <p style={{fontSize:"18px", weight:"bolder"}}>Platform Fee:</p>
                        <p style={{fontSize:"18px", weight:"bolder"}} id = 'buydress_container_four_platformFee'>Amount</p>
                    </div>

                    <hr style={{width:"100%"}}></hr><br></br>
                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <strong style={{fontSize:"22px", weight:"bolder"}}>Total Amount:</strong>
                        <strong style={{fontSize:"22px", weight:"bolder"}} id='buydress_container_four_totalAmount'>Amount</strong>
                    </div>

                    <form className='buydress_container_five' onSubmit={handlePlaceOrderClick}>
                            <p style={{fontSize:"22px", weight:"bolder"}}>Address Here</p>
                            <input type='text' placeholder="Name" className='buydress_container_five_input' required/>
                            <input type='text' placeholder="Mobile Number" className='buydress_container_five_input' required/>
                            <input type='text' placeholder="Pincode" className='buydress_container_five_input' required/>
                            <input type='text' placeholder="Locallity" className='buydress_container_five_input' required/>
                            <textarea style={{height:"80px", width:"380px",marginBottom:"20px",outline:"none"}} placeholder="Enter your address" required></textarea>
                            <input type='text' placeholder="City" className='buydress_container_five_input' required/>
                            <input type='text' placeholder="District" className='buydress_container_five_input' required/>
                            <input type='text' placeholder="LandMark (Optional)" className='buydress_container_five_input'/>
                            <input type='text' placeholder="Alternate Mobile Number" className='buydress_container_five_input' required/>
                            <button type='submit' className='buyDress_container_one_button'>Place Order on Cash On Delivery</button>
                    </form>
                </div>
            </div>
            <button className='buyDress_container_one_button' onClick={handleBackClick} style={{margin:"10px", width:"120px"}}>Back</button>
        </div>
    )
}
        // <div className='buyDress_dress_holder'>
        //                     <img src={require('../images/about.png')} className='buyDress_dress_holder_image' alt='test'/>
        //                     <div className='buydress_dress_holder_desc'>
        //                         <p>Name</p>
        //                         <p>Size</p>
        //                         <p>Seller</p><br></br>
        //                         <p>Cost</p>
        //                     </div>
        //                     <p style={{alignSelf:"start", paddingTop:"10px"}}>Delivered by</p>
        //                 </div>