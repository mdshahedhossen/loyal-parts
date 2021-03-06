import React from 'react';
import { toast } from 'react-toastify';

const DeleteProduct = ({ product, refetch, setConfirmModal }) => {
    const { name,quantity, price, _id } = product;
    const deleteProduct = () => {
        fetch(`https://ancient-citadel-17819.herokuapp.com/deleteparts/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to delete product');
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    setConfirmModal(null)
                    refetch();
                    toast.success(`Product Delete Successfully`);
                }

            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete this product!</h3>
                    <p className="py-2">Product Name: <span className='text-neutral'>   {name}</span></p>
                    <p className="py-2">Perice: <span className=''> {price}</span></p>
                    <p className="py-2">Available Quantity:<span className='text-orange-500'> {quantity}</span> </p>
                    <div className="modal-action">
                        <label htmlFor="delete-confirm-modal" className="btn">NO</label>
                        <label onClick={deleteProduct} className="btn btn-warning">YES</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;