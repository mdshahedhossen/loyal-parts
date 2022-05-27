import React from 'react';
const MnanageProductRow = ({ product, index, setConfirmModal, refetch }) => {
    const { name, quantity, minimumOrder, price,_id } = product;
    const shipping = () => {
    
    }
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{minimumOrder}</td>
            <td>{quantity}</td>


            <td>
                <button onClick={shipping} className='btn btn-sm btn-naturel'>Edit</button>
            </td>

            <td>
                <label onClick={() => setConfirmModal(product)} htmlFor="delete-confirm-modal" className="btn btn-sm modal-button btn-warning ">Delete</label >

            </td>
        </tr>
    );
};

export default MnanageProductRow;