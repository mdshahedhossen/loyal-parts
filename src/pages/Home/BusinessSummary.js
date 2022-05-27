import React from 'react';
import customer from '../../images/summary/family.png';
import revenue from '../../images/summary/groth.png';
import reviews from '../../images/summary/comment.png';
import tools from '../../images/summary/tool.png';
const BusinessSummary = () => {
    return (
      <div className='mt-14'>
      <div className='p-6'>
      <h2 className='text-3xl font-bold text-center text-primary'>MILLION BUSINESS TRUST US</h2>
        <p className='text-2xl font-bold text-center text-ellipsis'>ALAWAYS THERE FOR GIVE USERS THE BEST</p>
      </div>
      
       <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 px-10 '>
           
        
           <div className="card w-56 bg-base-100 shadow-xl">
       <figure className="px-10 pt-10">
         <img src={customer} className="rounded-xl" alt=''/>
       </figure>
       <div className="card-body items-center text-center">
       
         <h2 className='text-3xl font-bold'> 500+</h2>
         <p className='font-bold'>Customers Served</p>
         <div className="card-actions">
           
         </div>
       </div>
     </div>
     <div className="card w-56 bg-base-100 shadow-xl">
       <figure className="px-10 pt-10">
         <img src={revenue} className="rounded-xl" alt='' />
       </figure>
       <div className="card-body items-center text-center">
       <h2 className='text-3xl font-bold'> 120M+</h2>
         <p className='font-bold'>Annual Revenue</p>
         <div className="card-actions">
           
         </div>
       </div>
     </div> <div className="card w-56 bg-base-100 shadow-xl">
       <figure className="px-10 pt-10">
         <img src={reviews} className="rounded-xl" alt=''/>
       </figure>
       <div className="card-body items-center text-center">
       <h2 className='text-3xl font-bold'> 35K+</h2>
         <p className='font-bold'>Reviews</p>
         <div className="card-actions">
           
         </div>
         </div>
     </div> <div className="card w-56 bg-base-100 shadow-xl">
       <figure className="px-10 pt-10">
         <img src={tools } className="rounded-xl" alt=''/>
       </figure>
       <div className="card-body items-center text-center">
       <h2 className='text-3xl font-bold'> 50+</h2>
         <p className='font-bold'>Tools</p>
         <div className="card-actions">
           <div>
         </div>
       </div>
     </div>
       </div>
       </div>
      </div>
    );
};

export default BusinessSummary;