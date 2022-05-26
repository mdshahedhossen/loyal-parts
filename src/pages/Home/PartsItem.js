import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsItem = ({partsItems}) => {
    const {_id,img,name,description,minimumOrder,quantity,supplier,price}=partsItems
    const navigate=useNavigate()

    const navigatetoBuy=(id)=>{
      navigate(`/parts/${id}`)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure><img className='h-56 w-full' src={img} alt="parts" /></figure>
  <div className="card-body">
    <h2 className="card-title text-yellow-600">{name}</h2>
    <p>{description}</p>
    <div className='bg-slate-300 p-3 rounded-xl'>
    <h3>Supplier: <span className='font-bold'>{supplier}</span></h3>
    <h3>Minimum Order: <span className='font-bold'>{minimumOrder}</span></h3>
    <h3>Quantity: <span className='font-bold'>{quantity}</span></h3>
    <h3>Price: <span className='font-bold'>{price}</span>৳/- per unit</h3>
    </div>
    <div className="card-actions justify-end mt-5 " >
     <button onClick={()=>navigatetoBuy(_id)} className="btn btn-outline btn-success">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default PartsItem;