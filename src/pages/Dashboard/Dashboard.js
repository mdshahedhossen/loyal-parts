import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user]=useAuthState(auth)
  const [admin]=useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content mt-12">
    {/* <!-- Page content here --> */}
    <h2 className='text-3xl font-bold text-purple-500 text-center mb-11'> Welcome Your Dashboard</h2>
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content rounded-xl mr-8">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Order</Link></li>
      <li><Link to='/dashboard/addreview'>Add Review</Link></li>
      <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
      {admin && <li><Link to='/dashboard/users'>Make Admin</Link></li>}
      {admin && <li><Link to='/dashboard/manageorder'>Manage Order</Link></li>}
      {admin && <li><Link to='/dashboard/manageproduct'>Manage Product</Link></li>}
    </ul>
  
  </div>

</div>
    );
};

export default Dashboard;