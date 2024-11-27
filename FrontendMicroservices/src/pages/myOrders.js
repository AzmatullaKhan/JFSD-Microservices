import axios from 'axios'
import './css/myOrders.css'
// import { Navbar } from './nav'
// import { useNavigate } from 'react-router-dom'

export const MyOrders = () =>{

    let order_data=[]
    axios.get('http://localhost:9001/employeeOrder/all').then(res=>{order_data=res.data}).catch(err=>{console.log(err)})

    let book_data =[]
    axios.get('http://localhost:9001/order/all').then((res)=>{book_data=res.data}).catch((err)=>{console.log(err)})
    setTimeout(()=>{
        console.log(order_data, book_data)
    },2000)
    return(
        <div>
            Hi
        </div>
    )
}