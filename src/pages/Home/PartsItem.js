import React from 'react';

const PartsItem = ({partsItems}) => {
    const {img,name,description,minimumOrder,quantity,price}=partsItems
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure><img src={img} alt="parts" /></figure>
  <div className="card-body">
    <h2 className="card-title text-yellow-600">{name}</h2>
    <p>{description}</p>
    <div className='bg-slate-300 p-3 rounded-xl'>
    <h3>Minimum Order: <span className='font-bold'>{minimumOrder}</span></h3>
    <h3>Quantity: <span className='font-bold'>{quantity}</span></h3>
    <h3>Price: <span className='font-bold'>{price}</span>/= per unit</h3>
    </div>
    <div className="card-actions justify-end mt-5 " >
      <button className="btn btn-outline btn-success">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default PartsItem;