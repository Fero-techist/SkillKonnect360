import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      className=" flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >
      <h1 className=" text-3xl font-medium">Explore Skill Categories</h1>
      <p className=" sm:w-1/3 text-center text-sm">
        Discover verified professionals, tutors, and creators across various
        fields — and connect with the right people to learn, collaborate, or
        grow.
      </p>

      <div className=" flex sm:justify-center gap-8 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className=" flex lg:flex-col md:flex-col flex-col items-center flex-shrink-0 hover:translate-y-[10px] transition-all duration-500 text-xs cursor-pointer"
            key={index}
            to={`/experts/${item.category}`}
          >
            <img
              className=" lg:w-20 md:w-full w-20 rounded-full mb-2"
              src={item.image}
              alt=""
            />
            <p>{item.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
