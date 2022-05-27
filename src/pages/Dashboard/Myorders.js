import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';

const Myorders = () => {
    // const[myOrder,setMyOrder]=useState([])
    const [cancalOrder,setCancalOrder]=useState(null)
    const [user]=useAuthState(auth)
    const handleCancelOrder=(id)=>{
      setCancalOrder(id)
    }
    const { isLoading, error, data:myOrder,refetch } = useQuery(['manageOrders'], () =>
        fetch(`http://localhost:5000/order?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    Navigate('/login');
                    return;
                }
                return res.json()
            })
            
    );
    if (isLoading) {
      return <Loading></Loading>
  }
  let fetchError;
  if (error) {
      fetchError = <p className='text-red-500 text-5xl'><small>{error?.message}</small></p>
  }
    
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
        <label  onClick={() => handleCancelOrder(mo)} for="delete-confirm-modal" className="btn btn-ghost bg-red-500 hover:bg-red-600 btn-xs text-white">Cancel</label >
        {/* <button onClick={()=>handleCancelOrder(mo)} className="btn btn-ghost bg-red-500 hover:bg-red-600 btn-xs text-white">Cancel</button> */}
        </td>
        {fetchError}
      </tr>

            )
        }
      
    </tbody>
  </table>
  
</div>
{cancalOrder && <DeleteConfirmModal 
            order={cancalOrder}
            refetch={refetch}
            setConfirmModal={setCancalOrder}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default Myorders;