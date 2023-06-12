import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerDetails } from "../Services/services";
import { FaUserAstronaut } from "react-icons/fa";
import { GoUnverified, GoVerified } from "react-icons/go";

const UserDetails = () => {
  const { email } = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const getUserDetails = async () => {
    const response = await getCustomerDetails(email);
    setUserInfo(response.data);
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div className="flex flex-col">
      {userInfo.map((values, index) => (
        <div className="flex flex-col gap-3 mx-3 font-montserrat">
          <span className="flex flex-col gap-3 justify-center items-center">
            <FaUserAstronaut
              size={80}
              fill={values.isActive === true ? "#2ADC02" : "#FE8322"}
            />
            <span className="font-semibold text-lg">{values.emailId}</span>
          </span>
          <span className="flex flex-row items-center">
            <p className="text-base font-semibold">Name:&nbsp;</p>
            <p className="text-base font-medium">{values.firstName}</p>
            <p className="text-base font-medium">{values.lastName}&nbsp;</p>
            <span>
              {values.isVerified === true ? (
                <GoVerified size={20} fill="#03BBF1" stroke="#fff" />
              ) : (
                <GoUnverified size={20} fill="#F10344" />
              )}
            </span>
          </span>
          <span className="flex flex-row items-center">
            <p className="text-base font-semibold">Contact number:&nbsp;</p>
            <p className="text-base font-medium">{values.phoneNumber}</p>
          </span>
          <span className="flex flex-col">
            <p className="text-base font-semibold">About</p>
            <p className="text-base font-medium w-4/6">
              An astronomer is a special scientist who studies the fascinating
              things that exist in space. They explore planets, stars, galaxies,
              and all the amazing wonders of the universe. Astronomers use
              telescopes and other tools to observe and learn about the things
              that are far away in space. Astronomers are like space detectives.
              They collect clues by looking at pictures and data that they
              gather from their telescopes. They try to understand how
              everything in space works. Astronomers also discover new things in
              space. They may find a new planet or a new star. Sometimes, they
              even find something that nobody has seen before! They share their
              discoveries with other scientists and teach us all about the
              wonders of the universe. They spend a lot of time looking at the
              sky and thinking about the mysteries of space. Astronomers are
              curious and brave explorers of the universe. They help us
              understand the amazing things that are out there beyond our
              planet. So, next time you look up at the stars, remember that
              there are astronomers studying them and uncovering the secrets of
              the cosmos. Who knows, maybe one day you will become an astronomer
              too!
            </p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
