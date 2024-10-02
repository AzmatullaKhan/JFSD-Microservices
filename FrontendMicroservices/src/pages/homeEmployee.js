import './css/homeEmployee.css'
import { useNavigate } from 'react-router-dom'

export const HomeEmployee=()=>{
    
    let navigate= useNavigate();

    setTimeout(()=>{
        document.getElementById('employee_username').textContent=localStorage.getItem('username_employee')
    },10)
    const handleLogoutClick=()=>{
        localStorage.removeItem('username_employee')
        localStorage.removeItem('password_employee')
        localStorage.removeItem('mobileNumber_employee')
        localStorage.removeItem('dateOfBirth_employee')
        localStorage.removeItem('gender_employee')
        localStorage.setItem('isLoggedIn_employee', false)
        localStorage.removeItem('error_employee')
        navigate('/')
    }
    const handlePostOrderClick=()=>{
        document.getElementById('homeEmployee_main_container_three_postOrder').className='homeEmployee_main_container_three_postOrder_visible'
        document.getElementById('homeEmployee_main_container_three_postOrder').style.animation='homeEmployee_main_container_three_postOrder_visible-animation 1s ease 0s'

    }
    const validateName=(e)=>{
        let name= document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_name')
        let char=e.target.value;
        char=char[char.length-1]
        if(!((char>='a' && char<='z') ||(char>='A' && char<='Z'))){
            name.value=name.value.slice(0, name.value.length-1);
            document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_name_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_name_label').style.animation=''
            },1000)
        }
    }
    const validateCost=(e)=>{
        let name= document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_cost')
        let char=e.target.value;
        char=char[char.length-1]
        if(!(char>='0' && char<='9')){
            name.value=name.value.slice(0, name.value.length-1);
            document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_cost_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_cost_label').style.animation=''
            },1000)
        }
    }
    const validateMaterialUsed=(e)=>{
        let name= document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_materials')
        let char=e.target.value;
        char=char[char.length-1]
        if(!((char>='a' && char<='z') ||(char>='A' && char<='Z') || char===',')){
            name.value=name.value.slice(0, name.value.length-1);
            document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_materials_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_materials_label').style.animation=''
            },1000)
        }
    }
    const validateNoOfPhotos=(e)=>{
        let name= document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos')
        let char=e.target.value;
        char=char[char.length-1]
        if(!(char>='5' && char<='7')){
            name.value=name.value.slice(0, name.value.length-1);
            document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            let main_div = document.getElementById('image_container_postorder');
            while(main_div.firstChild){
                main_div.removeChild(main_div.firstChild)
            }
            setTimeout(()=>{
                document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos_label').style.animation=''
            },1000)
        }else{
            let main_div = document.getElementById('image_container_postorder');
            while(main_div.firstChild){
                main_div.removeChild(main_div.firstChild)
            }
            for(let i=1;i<=Number(char);i=i+1){
                let photo = document.createElement('input')
                photo.type='file'
                photo.id='photo_'+i;
                photo.accept='image/*'
                photo.className='photo_input_holder'
                
                main_div.appendChild(photo)
            }
            let button = document.createElement('button')
            button.className='homeEmployee_main_container_three_postOrder_button'
            button.innerHTML="Submit"

            main_div.appendChild(button)
        }
    }
    const handleClosePostOrderClick = () =>{
        document.getElementById('homeEmployee_main_container_three_postOrder').style.animation='homeEmployee_main_container_three_postOrder_hidden-animation 1s ease 0s'
        setTimeout(()=>{
            document.getElementById('homeEmployee_main_container_three_postOrder').className='homeEmployee_main_container_three_postOrder_hidden'
        },900)
        let main_div = document.getElementById('image_container_postorder');
        while(main_div.firstChild){
            main_div.removeChild(main_div.firstChild)
        }
        document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos').value=""
        document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_cost').value=""
        document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_materials').value=""
        document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_name').value=""
    }
    const handleMailClick=()=>{
        document.getElementById('homeEmployee_main_container_three_mail').className='homeEmployee_main_container_three_mail_visible'
        document.getElementById('homeEmployee_main_container_three_mail').style.animation='homeEmployee_main_container_three_mail_visible-animation 1s ease 0s'
    }
    const handleCloseMailClick = () =>{
        document.getElementById('homeEmployee_main_container_three_mail').style.animation='homeEmployee_main_container_three_mail_hidden-animation 1s ease 0s'
        setTimeout(()=>{
            document.getElementById('homeEmployee_main_container_three_mail').className='homeEmployee_main_container_three_mail_hidden'
        },900)
    }
    const handleOrderClick=()=>{
        document.getElementById('homeEmployee_main_container_three_orders').className='homeEmployee_main_container_three_orders_visible'
        document.getElementById('homeEmployee_main_container_three_orders').style.animation='homeEmployee_main_container_three_orders_visible-animation 1s ease 0s'
    }
    const handleCloseOrdersClick = () =>{
        document.getElementById('homeEmployee_main_container_three_orders').style.animation='homeEmployee_main_container_three_orders_hidden-animation 1s ease 0s'
        setTimeout(()=>{
            document.getElementById('homeEmployee_main_container_three_orders').className='homeEmployee_main_container_three_orders_hidden'
        },900)
    }
    const handleReportClick=()=>{
        document.getElementById('homeEmployee_main_container_three_report').className='homeEmployee_main_container_three_report_visible'
        document.getElementById('homeEmployee_main_container_three_report').style.animation='homeEmployee_main_container_three_report_visible-animation 1s ease 0s'
    }
    const handleCloseReportClick = () =>{
        document.getElementById('homeEmployee_main_container_three_report').style.animation='homeEmployee_main_container_three_report_hidden-animation 1s ease 0s'
        setTimeout(()=>{
            document.getElementById('homeEmployee_main_container_three_report').className='homeEmployee_main_container_three_report_hidden'
        },900)
    }
    const handleRevenueClick=()=>{
        document.getElementById('homeEmployee_main_container_three_revenue').className='homeEmployee_main_container_three_revenue_visible'
        document.getElementById('homeEmployee_main_container_three_revenue').style.animation='homeEmployee_main_container_three_revenue_visible-animation 1s ease 0s'
    }
    const handleCloseRevenueClick = () =>{
        document.getElementById('homeEmployee_main_container_three_revenue').style.animation='homeEmployee_main_container_three_revenue_hidden-animation 1s ease 0s'
        setTimeout(()=>{
            document.getElementById('homeEmployee_main_container_three_revenue').className='homeEmployee_main_container_three_revenue_hidden'
        },900)
    }
    return(
        <div className="homeEmployee_main_container_one">
            <div className="homeEmployee_main_container_two">
                <h1 style={{fontFamily:"cursive", margin:"4px"}}>Welcome,<span id="employee_username">Username</span></h1>
                <p style={{fontFamily:"cursive", margin:"4px"}}>Check the revenue generated💰</p>
            </div>
            <div className="homeEmployee_main_container_three">
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handleRevenueClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/revenue.png')} alt='revenue' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Revenue</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handleReportClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/report.png')} alt='report' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Report</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handleOrderClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/order.png')} alt='order' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Orders</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handleMailClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/mails.png')} alt='mail' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Mail</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handlePostOrderClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/createOrder.png')} alt='createOrder' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Post Order</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handleLogoutClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/logout.png')} alt='logout' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Logout</p>
                </div>
            </div>
            <hr></hr>
            <p style={{textAlign:"center"}}>The List of Items You Published🤝</p>
            <div className="homeEmployee_main_container_four">
                
            </div>
            <div className='homeEmployee_main_container_three_postOrder_hidden' id='homeEmployee_main_container_three_postOrder'>
                <span style={{position:"absolute",margin:"0px 0px 0px 760px", color:"red",fontSize:"28px",cursor:"pointer"}} onClick={handleClosePostOrderClick}>X</span>
                <div className='homeEmployee_main_container_three_postOrder_constraints_visible' id='homeEmployee_main_container_three_postOrder_constraints'>
                    <strong style={{color:"#fff"}}>Make sure to remember</strong>
                    <p style={{margin:"0"}}>1. Once the order is created, you cannot revert it.</p>
                    <p style={{margin:"0"}}>2. Becareful with the data being entered.</p>
                    <p style={{margin:"0"}}>3. If you want to remove the item,a mail need to be sent to company.</p>
                </div>
                <hr></hr>
                <div className='homeEmployee_main_container_three_postOrder_containerOne'>
                    <div style={{height:"400px"}}>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                            <div>
                                <label className='homeEmployee_main_container_three_postOrder_containerOne_label' id='homeEmployee_main_container_three_postOrder_containerOne_name_label'>Name</label>
                                <span className='signup_container_two_label_errormessage'>  *Use only Alphabets(A-Z, a-z)</span>
                            </div>
                            <input type="text" className='homeEmployee_main_container_three_postOrder_containerOne_input' id='homeEmployee_main_container_three_postOrder_containerOne_name' placeholder='***** Enter name of the dress *****' required onChange={validateName}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                            <div>
                                <label className='homeEmployee_main_container_three_postOrder_containerOne_label' id='homeEmployee_main_container_three_postOrder_containerOne_cost_label'>Cost</label>
                                <span className='signup_container_two_label_errormessage'>  *Use only Numbers(0-9)</span>
                            </div>
                            <input type="text" className='homeEmployee_main_container_three_postOrder_containerOne_input' id='homeEmployee_main_container_three_postOrder_containerOne_cost' placeholder='***** Enter cost of the dress *****' required onChange={validateCost}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                            <div>
                                <label className='homeEmployee_main_container_three_postOrder_containerOne_label' id='homeEmployee_main_container_three_postOrder_containerOne_materials_label'>Material Used</label>
                                <span className='signup_container_two_label_errormessage'>  *Use only Alphabets(A-Z, a-z)</span>
                            </div>
                            <input type="text" className='homeEmployee_main_container_three_postOrder_containerOne_input' id='homeEmployee_main_container_three_postOrder_containerOne_materials' placeholder='***** Enter material used(seperated by ,) *****' required onChange={validateMaterialUsed}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                            <div>
                                <label className='homeEmployee_main_container_three_postOrder_containerOne_label' id='homeEmployee_main_container_three_postOrder_containerOne_desc_label'>Description</label>
                                <span className='signup_container_two_label_errormessage'>  *Use Anything</span>
                            </div>
                            <input type="text" className='homeEmployee_main_container_three_postOrder_containerOne_input' id='homeEmployee_main_container_three_postOrder_containerOne_desc' placeholder='***** Enter description *****' required/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                            <div>
                                <label className='homeEmployee_main_container_three_postOrder_containerOne_label' id='homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos_label'>No.of photos</label>
                                <span className='signup_container_two_label_errormessage'>  *Use only Numbers(5-7)</span>
                            </div>
                            <input type="text" className='homeEmployee_main_container_three_postOrder_containerOne_input' id='homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos' placeholder='***** Enter no.of photos minimum 5, maximum 7*****' required onChange={validateNoOfPhotos} minLength={1} maxLength={1}/>
                        </div>
                    </div>
                    <div style={{height:"400px", width:"300px",padding:"20px"}} id='image_container_postorder'>
                         
                    </div>
                </div>
            </div>
            <div className='homeEmployee_main_container_three_mail_hidden' id='homeEmployee_main_container_three_mail'>
                <span style={{position:"absolute",margin:"0px 0px 0px 760px", color:"red",fontSize:"28px",cursor:"pointer"}} onClick={handleCloseMailClick}>X</span>
                <div className='homeEmployee_main_container_three_mail_constraints_visible' id='homeEmployee_main_container_three_mail_constraints'>
                    <strong style={{color:"#fff"}}>Make sure to remember</strong>
                    <p style={{margin:"0"}}>1. Once the mail is sent, it won't be visible to you.</p>
                    <p style={{margin:"0"}}>2. You can only view your email, when you hear back from us.</p>
                    <p style={{margin:"0"}}>3. If you are satisfied then proceed with email .</p>
                </div>
                <hr></hr>
                <div style={{display:'flex', flexDirection:'column',justifyContent:"center", margin:"10px 0px", height:"70px"}}>
                        <label className='homeEmployee_main_container_three_mail_containerOne_label' id='homeEmployee_main_container_three_mail_containerOne_name_label'>Name</label>
                        <input type="text" className='homeEmployee_main_container_three_mail_containerOne_input' id='homeEmployee_main_container_three_mail_containerOne_name' readOnly value={"Username"}/>
                </div>
                <div style={{display:'flex', flexDirection:'column',justifyContent:"center", margin:"10px 0px", height:"70px"}}>
                        <label className='homeEmployee_main_container_three_mail_containerOne_label' id='homeEmployee_main_container_three_mail_containerOne_email_label'>Email</label>
                        <input type="email" className='homeEmployee_main_container_three_mail_containerOne_input' id='homeEmployee_main_container_three_mail_containerOne_email' placeholder='***** Enter email for which you receive reply *****' required/>
                </div>
                <div style={{display:'flex', flexDirection:'column',justifyContent:"center", margin:"10px 0px", height:"70px"}}>
                        <label className='homeEmployee_main_container_three_mail_containerOne_label' id='homeEmployee_main_container_three_mail_containerOne_subject_label'>Subject</label>
                        <input type="text" className='homeEmployee_main_container_three_mail_containerOne_input' id='homeEmployee_main_container_three_mail_containerOne_subject' placeholder='***** Enter subject *****' required/>
                </div><br></br>
                <div style={{display:'flex', flexDirection:'column',justifyContent:"center", margin:"10px 0px", height:"70px"}}>
                        <label className='homeEmployee_main_container_three_mail_containerOne_label' id='homeEmployee_main_container_three_mail_containerOne_desc_label'>Description</label>
                        <textarea type="text" rows={60} cols={50} style={{minHeight:"90px", outline:"none"}} id='homeEmployee_main_container_three_mail_containerOne_desc' placeholder='***** Enter Description, be clear about your issue. If you want to remove an item, please provide it unique id. *****' required></textarea>
                </div>
                <button className='homeEmployee_main_container_three_mail_button'>Send</button>
            </div>
            <div className='homeEmployee_main_container_three_orders_hidden' id='homeEmployee_main_container_three_orders'>
                <span style={{position:"absolute",margin:"0px 0px 0px 450px", color:"red",fontSize:"28px",cursor:"pointer"}} onClick={handleCloseOrdersClick}>X</span>
            </div>
            <div className='homeEmployee_main_container_three_report_hidden' id='homeEmployee_main_container_three_report'>
                <span style={{position:"absolute",margin:"0px 0px 0px 450px", color:"red",fontSize:"28px",cursor:"pointer"}} onClick={handleCloseReportClick}>X</span>
            </div>
            <div className='homeEmployee_main_container_three_revenue_hidden' id='homeEmployee_main_container_three_revenue'>
                <span style={{position:"absolute",margin:"0px 0px 0px 450px", color:"red",fontSize:"28px",cursor:"pointer"}} onClick={handleCloseRevenueClick}>X</span>
            </div>
        </div>
    )
}

