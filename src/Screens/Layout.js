import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import Navbar from "../Components/Navbar";
import UserDetails from "./UserDetails";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="user/:email" element={<UserDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
