import React, { useEffect, useState } from "react";
import { updatePassword } from "../Services/services";
import { validateInput } from "../Services/validators";

const Changepassword = () => {
  const [cred, setCred] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    setUserEmail(localStorage.getItem("emailId"));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      validateInput(cred.currentPassword) === false ||
      validateInput(cred.newPassword) === false ||
      cred.currentPassword === cred.newPassword
    ) {
      setError(true);
    } else {
      const response = await updatePassword(cred);
      if (response.success === true) {
        alert("Password updated successfully");
        setError(false);
        setCred({ email: "", currentPassword: "", newPassword: "" });
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className="border-2 border-[#404040] mx-32 p-5">
      <span className="flex flex-row items-center justify-center">
        <p className="font-montserrat text-2xl font-medium text-secondary">
          Reset Password
        </p>
      </span>
      {/* ******************** LOGIN FORM ******************** */}
      <form onSubmit={handleSubmit} className="flex flex-col px-5 py-3 gap-3">
        {/* ******************** EMAIL ******************** */}
        <span className="flex flex-col gap-1 text-lg font-montserrat font-medium">
          <label htmlFor="email">{userEmail}</label>
        </span>
        {/* ******************** CURRENT PASSWORD INPUT ******************** */}
        <span className="flex flex-col gap-1 text-lg font-montserrat font-medium">
          <label htmlFor="email">Current password</label>
          <input
            type="password"
            value={cred.currentPassword}
            placeholder="Enter password"
            onChange={(e) =>
              setCred({ ...cred, currentPassword: e.target.value })
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
            {validateInput(cred.currentPassword) === false
              ? "Please enter yoour current password"
              : ""}
          </p>
        </span>
        {/* ******************** NEW PASSWORD INPUT ******************** */}
        <span className="flex flex-col gap-1 text-lg font-montserrat font-medium">
          <label htmlFor="email">New password</label>
          <input
            type="password"
            value={cred.newPassword}
            placeholder="Enter password"
            onChange={(e) => setCred({ ...cred, newPassword: e.target.value })}
            className="w-full text-base outline-none focus:outline-none active:outline-none border-2 border-[#4040404] p-2 rounded-full"
          />
          <p
            className={`${
              error === true
                ? "text-sm text-red-500 h-6 -mb-6 flex justify-end"
                : "text-sm text-white h-6 -mb-6 flex justify-end"
            }`}
          >
            {validateInput(cred.newPassword) === false
              ? "Please enter a new password"
              : cred.currentPassword === cred.newPassword
              ? "New password cannot be same as the old one"
              : ""}
          </p>
        </span>
        <button
          type="submit"
          className="w-full mt-3 p-2 bg-primary rounded-full text-white"
        >
          Update password
        </button>
      </form>
    </div>
  );
};

export default Changepassword;
