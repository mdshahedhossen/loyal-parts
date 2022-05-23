// import './App.css';

import { Route, Routes } from "react-router-dom";
import BusinessSummary from "./pages/Home/BusinessSummary";
import Home from "./pages/Home/Home";
import Parts from "./pages/Home/Parts";
import Reviews from "./pages/Home/Reviews";
import Navbar from "./pages/Shared/Navbar";

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
      </Routes>
    </div>
  );
}

export default App;
