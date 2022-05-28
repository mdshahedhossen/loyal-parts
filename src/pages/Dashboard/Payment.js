import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4GGwFj0EwbmQDlNkuCdlXUZ1YW0ervTX1VLQ0FxsfcRSc4Q7z6fJ8vd4Ks8usAG74vLhsMSKayUPCBuKLtACY3007T5T9Nbv');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: orderInfo, isLoading } = useQuery(['payment', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const { userName, productName, orderQuantity, totalAmount} = orderInfo;
    return (
        <div className='bg-base-200 h-screen flex justify-center items-center'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Hello! {userName}</h2>
                    <p>You are paying fro <strong className='text-neutral'>{productName}</strong></p>
                    <p>Product quantiity: <strong className='text-red-700'> {orderQuantity}</strong>  </p>
                    <p>Total Amount: <strong className='text-red-500'>${totalAmount}</strong></p>
                    <br />
                    <br />
                    <br />
                    <Elements stripe={stripePromise}>
                        <CheckoutForm bokingData={orderInfo}/>
                    </Elements>

                </div>

            </div>

        </div>
    );
};

export default Payment;