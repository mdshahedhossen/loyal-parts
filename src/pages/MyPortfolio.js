import React from 'react';
import shahed from  '../images/shahed-pic (1).jpg'

const MyPortfolio = () => {
    return (
<div className="hero min-h-screen bg-base-200 mb-4 rounded-xl">
  <div className="hero-content flex-col lg:flex-row">
  <img src={shahed} alt="" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Md. Shahed Hossen</h1>
      <p className="py-6">shaheddiu23@gmial.com</p>
      <h1 className="text-3xl font-bold">Education</h1>
      <p>BSc in Computer Science and Engineering</p>
      <div>
      <h1 className="text-2xl font-bold text-slate-900 underline text-center mt-4">Skills</h1>
      <label htmlFor="Programming">Programming</label>
      <input type="range" min="0" max="100" value="70" className="range range-primary range-xs bg-red-500" /> 
      <label htmlFor="Programming">Web Development</label>
      <input type="range" min="0" max="100" value="80" className="range range-primary  range-xs bg-red-500" /> 
      <label htmlFor="Programming">Machine Learning/Data Science</label>
      <input type="range" min="0" max="100" value="50" className="range range-primary range-xs bg-red-500" /> 
      </div>
      <div>
      <h1 className="text-2xl font-bold text-slate-900 underline text-center mt-4 p-5">My Work</h1>
      <label>SBN PhotoGraphy: <button className='text-green-500 hover:text-red-500'>https://sbnphotography.netlify.app</button></label>
      <br />
      <label>Customer Car Review: <button className='text-green-500 hover:text-red-500'>https://customercarreviews.netlify.app</button></label>
      <br />
      <label>Car Bazar: <button className='text-green-500 hover:text-red-500'>https://carbazar.netlify.app</button></label>
      </div>
    </div>
    
  </div>
</div>
    );
};

export default MyPortfolio;