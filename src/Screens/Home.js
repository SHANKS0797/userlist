import React, { useEffect, useState } from "react";
import Userlist from "./Userlist";
import Changepassword from "./Changepassword";
import LogoutModal from "../Components/LogoutModal";
import Alternate from "./Alternate";
import HomePage from "./HomePage";

const Home = () => {
  const [option, setOption] = useState(1);
  const [userName, setUserName] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleClose = () => setToggle(false);
  const handleOpen = () => setToggle(true);
  useEffect(() => {
    setUserName(localStorage.getItem("username"));
  }, []);

  if (!userName || userName === null) {
    return <Alternate />;
  } else {
    return (
      <div className="h-full w-full overflow-x-hidden mb-28">
        <span className="flex justify-center text-lg text-secondary text-center">
          Welcome, {userName}
        </span>
        {/* ****************** MENU LIST ****************** */}
        <span className="flex justify-center">
          <ul className="list-none flex flex-row gap-12">
            <li className="text-lg font-montserrat font-medium">
              <button onClick={() => setOption(1)}>Home page</button>
            </li>
            <li className="text-lg font-montserrat font-medium">
              <button onClick={() => setOption(2)}>Astronomer's list</button>
            </li>
            <li className="text-lg font-montserrat font-medium">
              <button onClick={() => setOption(3)}>Change password</button>
            </li>
            <li className="text-lg font-montserrat font-medium">
              <button onClick={handleOpen}>Logout</button>
            </li>
          </ul>
        </span>
        {/* ****************** SCREEN RENDERING ****************** */}
        {option === 1 ? (
          <HomePage />
        ) : option === 2 ? (
          <Userlist />
        ) : option === 3 ? (
          <Changepassword />
        ) : (
          ""
        )}
        {toggle === true && <LogoutModal handleClose={handleClose} />}
      </div>
    );
  }
};

export default Home;
