import React, { useEffect, useState } from 'react';
import PartsItem from './PartsItem';

const Parts = () => {
    const[parts,setParts]=useState([])
    useEffect(()=>{
        fetch('parts.json')
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])
    return (
        <div className='mb-16'>
            <h1 className='text-3xl text-center font-bold p-4 mb-12 text-primary underline'>Our Car parts</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                parts.map(partsItems=><PartsItem
                key={partsItems._id}
                partsItems={partsItems}
                ></PartsItem>)
            }
            </div>
        </div>
    );
};

export default Parts;