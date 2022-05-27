import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myorders = () => {
    const[myOrder,setMyOrder]=useState([])
    const [user]=useAuthState(auth)
    // console.log(user)
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/order?email=${user.email}`,{
              method:'GET',
              headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then(res=>res.json())
            .then(data=>setMyOrder(data))
        }
    },[user])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
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
                <tr key={index}>
        <th>{index+1}</th>
        <td>
        <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user?.photoURL} alt=""/>
              </div>
            </div>
            <div>
              <div className="font-bold">{user?.displayName}</div>
            </div>
          </div>
        </td>
        <td>{mo.productName}</td>
        <td>{mo.orderQuantity}</td>
        <td>{mo.totalAmount}</td>
        <td >
        <button className="btn btn-ghost bg-blue-500 hover:bg-blue-600 btn-xs text-white m-2">Payment</button>
        <button className="btn btn-ghost bg-red-500 hover:bg-red-600 btn-xs text-white">Cancel</button>
        </td>
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