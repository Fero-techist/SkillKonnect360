import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div>
        <p className=" text-center text-2xl pt-10 text-gray-500 ">
          ABOUT <span className=" text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className=" my-10 flex flex-col md:flex-row gap-12">
        <img
          className=" w-full max-w-[360px]"
          src={assets.about_image}
          alt=""
        />

        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            SkillKonnect360 is an application built to empower the people of
            Ogbomoso by connecting learners, service providers, and skilled
            professionals on one trusted platform. We bridge the gap between
            opportunity and talent — making it easier to learn, hire, and
            collaborate locally.
          </p>
          <p>
            Whether you are a student, entrepreneur, artisan, or freelancer,
            SkillSpace helps you showcase your expertise, discover verified
            tutors, or access services from trusted professionals. Our platform
            ensures transparency, quality, and growth for everyone.
          </p>
          <b> Our vision</b>
          <p>
            To become Ogbomoso’s leading digital marketplace — where innovation
            meets opportunity, and every skill finds its place. We envision a
            community where individuals learn, connect, and thrive through
            collaboration, trust, and technology.
          </p>
        </div>
      </div>

      <div className=" text-xl my-4">
        <p>
          WHY <span className=" text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className=" flex flex-col md:flex-row mb-20">
        <div className=" border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#1E40AF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Wider Audience Reach</b>
          <p>
            We connect you to wider audience reach within Ogbomosho to get more
            customers
          </p>
        </div>
        <div className=" border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#1E40AF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Transparency</b>
          <p>The Platform is transparent. Making trust one of our main goal</p>
        </div>

        <div className=" border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#1E40AF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Community Empowerment</b>
          <p>
            SkillConnect360 empowers the Ogbomoso and LAUTECH community by
            promoting digital inclusion, skill growth, and economic
            collaboration for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
