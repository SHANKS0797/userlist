import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center h-24 w-full">
      <span className="flex flex-row items-center gap-2 my-6">
        <img
          src="https://st.depositphotos.com/1724125/1373/v/600/depositphotos_13739151-stock-illustration-cartoon-astronaut.jpg"
          alt="Logo"
          className="h-24 w-28"
        />
        <p className="text-4xl text-primary font-semibold font-montserrat">
          Welcome to Astronomer's Portal
        </p>
      </span>
    </div>
  );
};

export default Navbar;
