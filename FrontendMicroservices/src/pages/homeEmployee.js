import './css/homeEmployee.css'

export const HomeEmployee=()=>{
    return(
        <div className="homeEmployee_main_container_one">
            <div className="homeEmployee_main_container_two">
                <h1 style={{fontFamily:"cursive", margin:"4px"}}>Welcome, Username</h1>
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
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/logout.png')} alt='logout' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Logout</p>
                </div>
            </div>
        </div>
    )
}