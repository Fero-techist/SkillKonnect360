// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

const Footer = () => {
  // const navigate = useNavigate();
  return (
    <div className=" md:mx-10">
      <div className=" flex items-center flex-col sm:grid lg:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <div className=" flex  mb-4 items-center">
            <p className=" text-2xl flex items-center">
              Skill <span className=" text-black font-extrabold">Konnect</span>
              <span className="text-yellow-400">360</span>
            </p>
          </div>
          <p className=" w-full md:w-2/3 text-gray-900 leading-6">
            SkillConnect360 is a community-driven platform designed to connect
            learners, tutors, freelancers, and skilled professionals across
            Ogbomoso and the LAUTECH community. We’re building a future where
            skills create opportunities and collaboration fuels growth.
          </p>
        </div>

        {/* center section */}
        <div>
          <p className=" text-xl  font-medium mb-5">COMPANY</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* 
              right section */}
        <div>
          <p className=" text-xl  font-medium mb-5">GET IN TOUCH</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>+234 7017183539</li>
            <li>ferotech@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
