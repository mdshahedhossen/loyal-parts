import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../images/background img/spare-parts-car.jpg'

const Banner = () => {
  const navigate=useNavigate('')
  const handleProducts=()=>{
    navigate('/parts')
  }
    return (
      <div className="hero min-h-screen rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
        <div>
          <h1 className="text-5xl font-bold">Our Business<br/> our Commitment!!</h1>
          <p className="py-6">We are provide the 100% orginal product..We think customer commitment is very importent for our business. Our busness polisy our client. Our happy client our compannis happyness</p>
          <button onClick={handleProducts} className="btn btn-primary">Our Products</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;