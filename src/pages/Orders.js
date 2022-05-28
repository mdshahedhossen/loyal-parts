import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import {toast } from 'react-toastify';

const Orders = () => {
    const {id}=useParams();
    const [user]=useAuthState(auth)
    const [partsDetails, setPartsDetails] = useState({});
    const [orderQuantity,setOrderQuantity]=useState(null)
    const [totalPrice,setTotalPrice]=useState(null)
    const [error,setError]=useState('')

    const {_id,img,name,description,minimumOrder,quantity,price,supplier}=partsDetails
    useEffect(()=>{
        const url=`https://ancient-citadel-17819.herokuapp.com/parts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPartsDetails(data))
    },[id])

    const handleminOrder = e=>{
      // console.log(price)
      const minQuantity = e.target.value;
      if(minQuantity>=minimumOrder && minQuantity<=quantity){
          setOrderQuantity(minQuantity);
          const totalAmount = minQuantity*price;
          setTotalPrice(totalAmount)
          setError('')
      }else{
          setError('Please add minimum or available quantity')
      }
  }
    const handleOrder=e=>{
        e.preventDefault()
        const address = e.target.address.value;
        const phone = e.target.phone.value;

        const order = {
            email: user.email,
            productName: name,
            orderQuantity: orderQuantity,
            totalAmount: totalPrice,
            supplier:supplier,
            address,
            phone,
            img: img
        }
        // console.log(order)
        fetch('https://ancient-citadel-17819.herokuapp.com/order',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order)

        })
        .then(res=>res.json())
        .then(data =>{
          if(data.success){
            toast('Order Pleaced')
               e.target.reset()
               setTotalPrice(null)
          }
          else{
            toast.error('something has worng plase try again')
          }

        });


    }

    return (
        <section>
            <h2 className='text-center text-primary font-bold text-3xl mb-12 mt-12 underline'>Your Order</h2>
            <div className="flex flex-col w-full lg:flex-row mb-14">
           
  <div className="grid flex-grow card rounded-box place-items-center">
  <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure><img className='h-56 w-full'src={img} alt="parts" /></figure>
  <div className="card-body">
    <h2 className="card-title text-yellow-600">{name}</h2>
    <p>{description}</p>
    <div className='bg-slate-300 p-3 rounded-xl'>
    <h3>Supplier: <span className='font-bold'>{supplier}</span></h3>
    <h3>Minimum Order: <span className='font-bold'>{minimumOrder}</span></h3>
    <h3>Quantity: <span className='font-bold'>{quantity}</span></h3>
    <h3>Price: <span className='font-bold'>{price}</span>৳/- per unit</h3>
    </div>
    
  </div>
</div>
  </div> 
  <div className="divider lg:divider-horizontal">OR</div> 
  <div className="grid flex-grow card rounded-box place-items-center">
      
      <form onSubmit={handleOrder} className='flex flex-col'>
      <h2 className='text-center font-bold text-2xl mb-12'>Purchase Now</h2>
      <input type="text"  name='name' placeholder="Name" className="mb-4  input input-bordered w-full max-w-xs" value={user?.displayName ||''} readOnly/>
        <input type="email"  name='emial' placeholder="Email" className="mb-4  input input-bordered w-full max-w-xs" value={user?.email ||''} readOnly />
        <input type="text"  name='address' placeholder="Your Address" className=" mb-4 input input-bordered w-full max-w-xs" required />
        <input type="number"  name='phone' placeholder="Phone" className=" mb-4 input input-bordered w-full max-w-xs" required/>
        <label className='text-[12px] font-bold mb-2'>Minimum Order</label>
        <label className="label">
        {error && <span className="label-text-alt text-red-500">{error}</span>}
        </label>
        <input onChange={handleminOrder} placeholder={minimumOrder} type="number"  name='order' className=" mb-4 input input-bordered w-full max-w-xs" required />
        <label className='text-[12px] font-bold mb-2'>Total Amount</label>
        <input disabled  type="number"  name='amount' className=" mb-4 input input-bordered w-full max-w-xs" value={totalPrice} required />
        <button disabled={error} className='btn btn-outline btn-success mt-4' >Order Now</button>
      </form>
  </div> 
</div>
        </section>
    );
};

export default Orders;