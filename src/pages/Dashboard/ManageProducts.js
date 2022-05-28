import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProduct from './DeleteProduct';
import MnanageProductRow from './MnanageProductRow';

const ManageProducts = () => {
    const [confirmModal, setConfirmModal] = useState(null);
    const { isLoading, error, data,refetch } = useQuery(['parts'], () =>
        fetch(`https://ancient-citadel-17819.herokuapp.com/parts`)
            .then(res =>res.json())          
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    let fetchError;
    if (error) {
        fetchError = <p className='text-red-500 text-3xl'><small>{error?.message}</small></p>
    }
    return (
        <div>
            <h1 className='w-fit mx-auto font-bold border-primary text-lime-600 text-3xl my-5 underline'>Manage Products</h1>
            {fetchError}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='mark'>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Minimum <br /> quantity</th>
                            <th>Available <br /> quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((product,index) => <MnanageProductRow
                            key={product._id}
                            index={index}
                            product={product}
                            setConfirmModal={setConfirmModal}
                            refetch={refetch}
                            ></MnanageProductRow>)
                        }


                    </tbody>
                </table>
            </div>
            {confirmModal && <DeleteProduct 
            product={confirmModal}
            refetch={refetch}
            setConfirmModal={setConfirmModal}
            ></DeleteProduct>}
        </div>
    );
};

export default ManageProducts;