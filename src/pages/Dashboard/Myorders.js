import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myorders = () => {
    const[myOrder,setMyOrder]=useState([])
    const [user]=useAuthState(auth)
    console.log(user)
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/order?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>setMyOrder(data))
        }
    },[user])
    return (
        <div>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product Name</th>
        <th>Order</th>
        <th>Total Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            myOrder.map((mo,index)=>
                <tr>
        <th>{index+1}</th>
        <td>
        <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={user?.photoURL} alt=""/>
              </div>
            </div>
            <div>
              <div class="font-bold">{user?.displayName}</div>
            </div>
          </div>
        </td>
        <td>{mo.productName}</td>
        <td>{mo.orderQuantity}</td>
        <td>{mo.totalAmount}</td>
      </tr>

            )
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myorders;