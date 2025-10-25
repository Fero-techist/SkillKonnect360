import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className=" text-gray-700 font-semibold">US</span>{" "}
        </p>
      </div>

      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className=" w-full max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className=" flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-lg text-gray-600">OUR LOCATION</p>
          <p className=" text-gray-500">
            SkillKonnect360 HQ <br /> Ogbomoso, Oyo State, Nigeria
          </p>
          <p className=" text-gray-500">Tel: 07017183539 </p>
          <p className=" font-semibold text-lg text-gray-600">
            Skills at SkillKonnect360
          </p>
          <p className=" text-gray-500">
            Discover trusted experts, learn valuable skills, and connect with
            verified service providers — all in one platform.
          </p>

          <NavLink to="/experts">
            <button className=" border border-black hover:bg-black px-8 py-4 hover:text-white transition-all duration-500  text-sm  ">
              Explore SkillKonnect360
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Contact;
