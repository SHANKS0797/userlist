import React from "react";
import { Link } from "react-router-dom";

const Alternate = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="flex flex-col gap-3 p-40 my-6 shadow-2xl rounded-2xl">
        <span className="flex flex-row items-center justify-center">
          <p className="text-2xl font-semibold font-montserrat">
            You must be logged in to view user list
          </p>
          <span className="text-xl">&#x1F914; </span>
        </span>
        <span className="flex flex-row items-center gap-1 justify-center">
          <p className="text-base text-[#404040]">Continue to UserList?</p>
          <Link to="/" className="text-primary underline">
            Login
          </Link>
        </span>
      </span>
    </div>
  );
};

export default Alternate;
