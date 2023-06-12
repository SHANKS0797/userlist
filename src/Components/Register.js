import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, newUserLogin } from "../Services/services";
import {
  validateEmail,
  validateInput,
  validatePassword,
} from "../Services/validators";

const Register = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [cred, setCred] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    password: "",
    confPassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      validateEmail(cred.email) === false ||
      validateInput(cred.password.toString()) === false ||
      validateInput(cred.fname.toString()) === false ||
      validateInput(cred.lname.toString()) === false ||
      validateInput(cred.contact.toString()) === false ||
      validatePassword(cred.password) === false ||
      cred.contact.length !== 10 ||
      cred.password !== cred.confPassword
    ) {
      setError(true);
    } else {
      const response = await createUser(cred);
      if (response.success === true) {
        const result = await newUserLogin(cred.email, cred.password);
        if (result.success === true) {
          navigate("/home");
        }
      }
    }
  };
  return (
    <div className={`${props.formtype === true ? "hidden" : ""}`}>
      {/* ******************** HEADER TEXT ******************** */}
      <span className="flex flex-row items-center justify-center">
        <p className="font-montserrat text-2xl font-medium text-secondary">
          Register as an Astronomer
        </p>
      </span>
      {/* ******************** SIGN UPFORM ******************** */}
      <form onSubmit={handleSubmit} className="flex flex-col px-5 py-3 gap-2">
        {/* ******************** FIRSTNAME INPUT ******************** */}
        <span className="flex flex-col gap-1 text-lg font-montserrat font-medium">
          <label htmlFor="email">First name</label>
          <input
            type="text"
            value={cred.fname}
            placeholder="eg: John"
            onChange={(e) => setCred({ ...cred, fname: e.target.value })}
            className="w-full text-base outline-none focus:outline-none active:outline-none border-2 border-[#4040404] p-2 rounded-full"
          />
          <p
            className={`${
              error === true
                ? "text-sm text-red-500 h-6 -mb-6 flex justify-end"
                : "text-sm text-white h-6 -mb-6 flex justify-end"
            }`}
          >
            {validateInput(cred.fname) === false
              ? "First name is required"
              : ""}
          </p>
        </span>
        {/* ******************** LASTNAME INPUT ******************** */}
        <span className="flex flex-col gap-1 text-lg font-montserrat font-medium">
          <label htmlFor="email">Last name</label>
          <input
            type="text"
            value={cred.lname}
            placeholder="eg: Doe"
            onChange={(e) => setCred({ ...cred, lname: e.target.value })}
            className="w-full text-base outline-none focus:outline-none active:outline-none border-2 border-[#4040404] p-2 rounded-full"
          />
          <p
            className={`${
              error === true
                ? "text-sm text-red-500 h-6 -mb-6 flex justify-end"
                : "text-sm text-white h-6 -mb-6 flex justify-end"
            }`}
          >
            {validateInput(cred.lname) === false ? "Last name is required" : ""}
          </p>
        </span>
        {/* ******************** EMAIL INPUT ******************** */}
        <span className="flex flex-col gap-1 text-lg font-montserrat font-medium">
          <label htmlFor="email">Email Id</label>
          <input
            type="text"
            value={cred.email}
            placeholder="eg: johndoe@gmail.com"
            onChange={(e) => setCred({ ...cred, email: e.target.value })}
            className="w-full text-base outline-none focus:outline-none active:outline-none border-2 border-[#4040404] p-2 rounded-full"
          />
          <p
            className={`${
              error === true
                ? "text-sm text-red-500 h-6 -mb-6 flex justify-end"
                : "text-sm text-white h-6 -mb-6 flex justify-end"
            }`}
          >
            {validateInput(cred.email) === false
              ? "Email is required"
              : validateEmail(cred.email) === false
              ? "Please enter a valid email"
              : ""}
          </p>
        </span>
        {/* ******************** CONTACT NUMBER INPUT ******************** */}
        <span className="flex flex-col gap-1 text-lg font-montserrat font-medium">
          <label htmlFor="email">Contact number</label>
          <input
            type="text"
            value={cred.contact}
            placeholder="eg: johndoe@gmail.com"
            onChange={(e) => setCred({ ...cred, contact: e.target.value })}
            className="w-full text-base outline-none focus:outline-none active:outline-none border-2 border-[#4040404] p-2 rounded-full"
          />
          <p
            className={`${
              error === true
                ? "text-sm text-red-500 h-6 -mb-6 flex justify-end"
                : "text-sm text-white h-6 -mb-6 flex justify-end"
            }`}
          >
            {validateInput(cred.contact) === false
              ? "Contact number is required"
              : cred.contact.length !== 10
              ? "Please enter valid contact number"
              : ""}
          </p>
        </span>
        <span className="grid grid-cols-2 gap-3 mt-3">
          {/* ******************** PASSWORD INPUT ******************** */}
          <span className="flex flex-col gap-1 text-lg font-montserrat font-medium">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              value={cred.password}
              placeholder="Enter password"
              onChange={(e) => setCred({ ...cred, password: e.target.value })}
              className="w-full text-base outline-none focus:outline-none active:outline-none border-2 border-[#4040404] p-2 rounded-full"
            />
            <p
              className={`${
                error === true
                  ? "text-sm text-red-500 h-6 -mb-6 flex justify-end"
                  : "text-sm text-white h-6 -mb-6 flex justify-end"
              }`}
            >
              {validateInput(cred.password) === false ||
              validatePassword(cred.password) === false
                ? "Password is required"
                : cred.password !== cred.confPassword
                ? "Password doen't match"
                : ""}
            </p>
          </span>
          {/* ******************** CONFIRM PASSWORD INPUT ******************** */}
          <span className="flex flex-col gap-1 text-lg font-montserrat font-medium">
            <label htmlFor="email">Confirm password</label>
            <input
              value={cred.confPassword}
              type="password"
              placeholder="Enter password"
              onChange={(e) =>
                setCred({ ...cred, confPassword: e.target.value })
              }
              className="w-full text-base outline-none focus:outline-none active:outline-none border-2 border-[#4040404] p-2 rounded-full"
            />
            <p
              className={`${
                error === true
                  ? "text-sm text-red-500 h-6 -mb-6 flex justify-end"
                  : "text-sm text-white h-6 -mb-6 flex justify-end"
              }`}
            >
              {validateInput(cred.confPassword) === false
                ? "Password is required"
                : cred.password !== cred.confPassword
                ? "Password doesn't match"
                : ""}
            </p>
          </span>
        </span>
        <button
          type="submit"
          className="w-full p-2 mt-4 bg-primary rounded-full text-white"
        >
          Create an account
        </button>
      </form>
    </div>
  );
};

export default Register;
