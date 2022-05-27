import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AddLinks } from 'react-link-text';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user]=useAuthState(auth)
    return (
        <div className='mb-5'>
        <Link className='btn btn-sm btn-primary mb-2' to='/editprofile'>Edit Profile</Link>
        <div className='bg-base-200'>
            <h1 className='text-3xl border-b-4 p-3 border-accent'>My Profile <div className="badge bg-green-500">online</div>  
            </h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='lg:max-w-lg '>
                    <img className='h-56 m-5' src={user.photoURL || "https://i.ibb.co/LZfyb4f/empty-300x240.jpg"} alt="" />

                    <div className='p-5'>
                        <h1 className='border-b border-accent'>Skils</h1>
                        <p className='font-bold text-xl'>Probelm Solver</p>
                        <p className='font-bold text-xl'>Web Developer</p>
                        <p className='font-bold text-xl'>AI,ML,IOT</p>
                    </div>

                    <div className='p-5'>
                        <h1 className='border-b border-accent'>Works</h1>
                        <div className='my-3'>
                            <p className='font-bold text-xl'>SBN IT</p>
                            <p>Sukrabad,Dhanmondi,Dhaka</p>
                            <p></p>
                        </div>

                    </div>
                </div>

                <div className='w-full lg:ml-10 p-5'>
                    <div>
                        <h1 className='text-2xl font-bold'>{user.displayName}
                        </h1>
                        <p className='text-neutral py-2'>Full Stack Devloper</p>

                        <div className="rating">
                            <p>Rating: </p>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>

                    <div className='py-5'>
                        <h1 className='border-b border-accent font-bold'>Contact</h1>
                        <p className='py-2'>Phone: <span className='text-neutral'> 97998747976</span> </p>
                        <p className='py-2'>Email: <span className='text-neutral'> {user.email}</span> </p>
                        <p className='py-2'>Addres: <span className=''> Dhanmondi-32 Dhaka</span> </p>
                        <AddLinks>
                        <p className='py-2'>Site: <span className='text-red-500 hover:text-sky-700'>https://web.programming-hero.com/</span> </p>
                        <p className='py-2'>Linkdin: <span className='text-red-500 hover:text-sky-700'>https://www.linkedin.com/in/md-shahed-8bb490196/</span> </p>
                        <p className='py-2'>GitHub: <span className='text-red-500 hover:text-sky-700'>https://github.com/mdshahedhossen</span> </p>
                        </AddLinks>
                    </div>

                    <div className='py-5'>
                        <h1 className='border-b border-accent font-bold'>About</h1>
                        <p className='my-3'>Hi, This is {user.displayName} I am a knowlege seeker.I am hardworker for fullfill my dreams</p>
                        <p className='my-3'>I completed my Bsc in CSE from Daffodil International University</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MyProfile;