import React from 'react';
const UserRow = ({user,index}) => {
    
    return (
        <tr>
        <th>{index+1}</th>
        <td>{user.email}</td>
        <td><button className="btn btn-ghost bg-blue-500 hover:bg-blue-600 btn-xs text-white">Make Adimin</button></td>
        <td> <button className="btn btn-ghost bg-red-500 hover:bg-red-600 btn-xs text-white">Remove User</button></td>
      </tr>
    );
};

export default UserRow;