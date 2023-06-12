import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col gap-1 fixed bottom-0 mt-32 justify-center items-center bg-[#292828] w-full h-20 text-white">
      <header className="font-montserrat font-semibold text-lg">
        Astronomer's Portal &#169; 2023
      </header>
      <span className="flex flex-row items-center">
        <p className="text-sm font-medium">Made with&nbsp;</p>
        <p className="text-sm font-medium">
          <AiFillHeart fill="#FF1943" size={20} />
        </p>
        <p className="text-sm font-medium">&nbsp;in Pune</p>
      </span>
    </div>
  );
};

export default Footer;
