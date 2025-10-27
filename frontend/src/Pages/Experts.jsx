import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Experts = () => {
  const navigate = useNavigate();

  const { category } = useParams();
  console.log(category);

  const [filterDoc, setFilterDoc] = useState([]);
  const { experts } = useContext(AppContext);

  const applyFilter = () => {
    if (category) {
      setFilterDoc(experts.filter((doc) => doc.category === category));
    } else {
      setFilterDoc(experts);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [experts, category]);

  return (
    <div>
      <p className=" text-gray-600">
        {/* Browse through the service provider specialist */}
      </p>
      <div className=" flex justify-between flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              category === " Tech Skills"
                ? navigate("/experts")
                : navigate("/experts/Tech Skills")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              category === "Tutors & Intellectuals"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Tech Skill
          </p>
          <p
            onClick={() =>
              category === "Tutors & Intellectuals"
                ? navigate("/experts")
                : navigate("/experts/Tutors & Intellectuals")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              category === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Tutors & Intellectuals
          </p>
          <p
            onClick={() =>
              category === "Vocational & Hand Skills"
                ? navigate("/experts")
                : navigate("/experts/Vocational & Hand Skills")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              category === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Vocational & Hand Skills
          </p>
          <p
            onClick={() =>
              category === "Business & Entrepreneurship"
                ? navigate("/experts")
                : navigate("/experts/Business & Entrepreneurship")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              category === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Business & Entrepreneurship
          </p>
          <p
            onClick={() =>
              category === " Creative & Design Skills"
                ? navigate("/experts")
                : navigate("/experts/Creative & Design Skills")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              category === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Creative & Design Skills
          </p>
          <p
            onClick={() =>
              category === " Soft Skills & Personal Growth"
                ? navigate("/experts")
                : navigate("/experts/Soft Skills & Personal Growth")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              category === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Soft Skills & Personal Growth
          </p>
        </div>
        <div className=" w-full grid lg:grid-cols-4 gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img
                className=" bg-blue-50"
                src={item.image}
                alt=""
              />
              <div className=" p-4">
                <div className=" flex items-center gap-2 text-sm text-center text-green-500">
                  <p className=" w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className=" text-gray-900 text-lg font-medium ">
                  {item.name}
                </p>
                <p className=" text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;
