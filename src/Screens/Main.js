import React, { useEffect, useState } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Home from "./Home";

const Main = () => {
  const [formtype, setFormtype] = useState(true);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName(localStorage.getItem("username"));
  }, []);
  if (!userName || userName === null) {
    return (
      <div className="flex flex-col justify-center items-center">
        {/* ******************** HERO IMAGE AND FORM ******************** */}
        <span className="grid grid-cols-2 gap-8 my-8">
          <img
            src="https://media.tenor.com/MA0oeK9m3HEAAAAC/gofourward-webdesign.gif"
            alt="Landing"
            className="h-[35rem] w-[40rem] bg-primary"
          />
          <div
            className={`flex flex-col ${
              formtype === true ? "h-96" : "h-auto"
            } w-[40rem] border-2 border-[#404040] rounded-lg py-3`}
          >
            {formtype === true ? (
              <Login formtype={formtype} />
            ) : (
              <Register formtype={formtype} />
            )}
            {formtype === true ? (
              <span
                className={`${
                  formtype === false ? "hidden" : ""
                } flex justify-center text-primary underline cursor-pointer`}
                onClick={() => setFormtype(false)}
              >
                Don't have an account? Sign up
              </span>
            ) : (
              <span
                className={`${
                  formtype === true ? "hidden" : ""
                } flex justify-center text-primary underline cursor-pointer`}
                onClick={() => setFormtype(true)}
              >
                Already have an account? Sign in
              </span>
            )}
          </div>
        </span>
      </div>
    );
  } else {
    return <Home />;
  }
};

export default Main;
