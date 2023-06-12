import React from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { GoUnverified, GoVerified } from "react-icons/go";
import { updateCustormeStatus } from "../Services/services";
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 border-2 border-[#404040] rounded-lg h-60 w-48">
      <FaUserAstronaut
        size={80}
        fill={props.isActive === true ? "#2ADC02" : "#FE8322"}
      />
      <Link to={`/user/${props.email}`}>
        <span className="flex flex-row items-center gap-1">
          <p className="text-base font-normal">{`${props.fname} ${props.lname}`}</p>
          <span>
            {props.isVerified === true ? (
              <GoVerified size={20} fill="#03BBF1" stroke="#fff" />
            ) : (
              <GoUnverified size={20} fill="#F10344" />
            )}
          </span>
        </span>
      </Link>
      <span className="text-base text-[#404040]">{props.email}</span>
      <button
        onClick={() => updateCustormeStatus(props.email, !props.isActive)}
        className={`p-2 border-2 rounded-lg ${
          props.isActive === true
            ? "text-primary border-primary"
            : "text-secondary border-secondary"
        }`}
      >
        {props.isActive === true ? "Inactivate" : "Activate"}
      </button>
    </div>
  );
};

export default User;
