import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { logout } from "../Services/services";
import { useNavigate } from "react-router-dom";

const LogoutModal = (props) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur shadow-lg bg-[rgb(0,0,0,0.6)]">
      <div className="h-40 w-[28rem] flex flex-col bg-white rounded-3xl p-5">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg font-montserrat font-medium">Logout</span>
          <span onClick={() => props.handleClose()} className="cursor-pointer">
            <IoIosCloseCircleOutline fill="#FF1943" stroke="#fff" size={30} />
          </span>
        </div>
        <span className="mt-3 text-base font-montserrat font-normal text-[#404040]">
          Are you sure you want to logout
        </span>
        <div className="flex flex-row mt-3 gap-3 justify-end">
          <button
            onClick={() => {
              logout();
              props.handleClose();
              navigate("/");
            }}
            className="text-base p-1.5 bg-primary text-white rounded-md"
          >
            Logout
          </button>
          <button onClick={() => props.handleClose()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
