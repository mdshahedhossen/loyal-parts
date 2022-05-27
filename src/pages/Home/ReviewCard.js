import React from 'react';

const ReviewCard = ({feedback}) => {
    const { name, img, review } = feedback;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="avatar mt-2 justify-center ">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  ">
                    <img src={img ? img : "https://i.ibb.co/589bQJW/img5.jpg"} alt='' />
                </div>
            </div>
            <div className="rating flex justify-center mt-5">
                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" readOnly/>
                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" readOnly />
                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" readOnly/>
                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" readOnly/>
                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" readOnly/>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl fnt-i">{name}</h2>
                <p className='text-sm'>{review}</p>

            </div>
        </div>
    );
};

export default ReviewCard;