import { React, useState, useEffect } from "react";
import { getUserList } from "../Services/services";
import User from "../Components/User";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [list, setList] = useState([]);
  const setuserList = async () => {
    const res = await getUserList();
    setList(res);
  };
  useEffect(() => {
    setuserList();
  });
  return (
    <span className="grid grid-cols-5 gap-3 mt-3 mx-12 container">
      {list.map((values, index) => (
        <User
          key={index}
          id={values.id}
          fname={values.firstName}
          lname={values.lastName}
          email={values.emailId}
          contact={values.phoneNumber}
          isVerified={values.isVerified}
          isActive={values.isActive}
        />
      ))}
    </span>
  );
};

export default Userlist;
