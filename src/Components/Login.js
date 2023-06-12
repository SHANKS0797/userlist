import React, { useState } from "react";
import { login } from "../Services/services";
import { useNavigate } from "react-router-dom";
import { validateEmail, validateInput } from "../Services/validators";

const Login = (props) => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ EmailId: "", Password: "" });
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      validateEmail(cred.EmailId) === false ||
      validateInput(cred.Password) === false
    ) {
      setError(true);
    } else {
      const response = await login(cred);
      if (response.success === true) {
        navigate("/home");
      } else {
        alert("Something went wrong...");
      }
    }
  };
  return (
    <div className={`${props.formtype === false ? "hidden" : ""}`}>
      {/* ******************** HEADER TEXT ******************** */}
      <span className="flex flex-row items-center justify-center">
        <p className="font-montserrat text-2xl font-medium text-secondary">
          Login to view all Astronomer's
        </p>
      </span>
      {/* ******************** LOGIN FORM ******************** */}
      <form onSubmit={handleSubmit} className="flex flex-col px-5 py-3 gap-3">
        {/* ******************** EMAIL INPUT ******************** */}
        <span className="flex flex-col text-base font-montserrat font-normal">
          <label className="flex flex-row items-center" htmlFor="email">
            <p>Email Id</p>
            <p className="text-red-500">*</p>
          </label>
          <input
            type="text"
            value={cred.EmailId}
            placeholder="eg: johndoe@gmail.com"
            onChange={(e) => setCred({ ...cred, EmailId: e.target.value })}
            className="w-full text-base outline-none focus:outline-none active:outline-none border-2 border-[#4040404] p-2 rounded-full"
          />
          <p
            className={`${
              error === true
                ? "text-sm text-red-500 h-6 -mb-6 flex justify-end"
                : "text-sm text-white h-6 -mb-6 flex justify-end"
            }`}
          >
            {validateInput(cred.EmailId) === false
              ? "Email is required"
              : validateEmail(cred.EmailId) === false
              ? "Please enter a valid email"
              : ""}
          </p>
        </span>
        {/* ******************** PASSWORD INPUT ******************** */}
        <span className="flex flex-col gap-1 text-base font-montserrat font-normal">
          <label className="flex flex-row items-center" htmlFor="password">
            <p>Password</p>
            <p className="text-red-500">*</p>
          </label>
          <input
            type="password"
            value={cred.Password}
            placeholder="Enter password"
            onChange={(e) => setCred({ ...cred, Password: e.target.value })}
            className="w-full text-base outline-none focus:outline-none active:outline-none border-2 border-[#4040404] p-2 rounded-full"
          />
          <p
            className={`${
              error === true
                ? "text-sm text-red-500 h-6 -mb-6 flex justify-end"
                : "text-sm text-white h-6 -mb-6 flex justify-end"
            }`}
          >
            {validateInput(cred.Password) === false
              ? "Password is required"
              : ""}
          </p>
        </span>
        <button
          type="submit"
          className="w-full p-2 mt-3 bg-primary rounded-full text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
