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
    return(
        <div className="homeEmployee_main_container_one">
            <div className="homeEmployee_main_container_two">
                <h1 style={{fontFamily:"cursive", margin:"4px"}}>Welcome, <span id="employee_username">Username</span></h1>
                <p style={{fontFamily:"cursive", margin:"4px"}}>Check the revenue generated💰</p>
            </div>
            <div className="homeEmployee_main_container_three">
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/revenue.png')} alt='revenue' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Revenue</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/report.png')} alt='report' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Report</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/order.png')} alt='order' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Orders</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/mails.png')} alt='mail' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Mails</p>
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
        </div>
    )
}