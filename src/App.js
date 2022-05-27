// import './App.css';

import { Route, Routes } from "react-router-dom";
import BusinessSummary from "./pages/Home/BusinessSummary";
import Home from "./pages/Home/Home";
import Parts from "./pages/Home/Parts";
import Reviews from "./pages/Home/Reviews";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Navbar from "./pages/Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Orders from "./pages/Orders";
import OurBrand from "./pages/Home/OurBrand";
import RequireAuth from "./pages/Login/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Myorders from "./pages/Dashboard/Myorders";
import AddReviews from "./pages/Dashboard/AddReviews";
import MyProfile from "./pages/Dashboard/MyProfile";
import Users from "./pages/Dashboard/Users";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/parts" element={<Parts></Parts>}></Route>
        <Route path="/business" element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/brand" element={<OurBrand></OurBrand>}></Route>
        <Route path="/parts/:id" element={<RequireAuth>
          <Orders></Orders>
        </RequireAuth>}></Route>

        <Route path="/dashboard" element={<RequireAuth>
         <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<Myorders></Myorders>}></Route>
          <Route path='addreview' element={<AddReviews></AddReviews>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route> 

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
