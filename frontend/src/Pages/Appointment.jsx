import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets, experts } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { experts, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const time = e.target.time.value;
    const notes = e.target.notes.value;

    const message = `Hello! 👋 I’d like to confirm an appointment.\n\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nNotes: ${notes}`;
    // const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "2347017183539"; // replace with your WhatsApp number (no "+" or spaces)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  const fetchDocInfo = async () => {
    const docInfo = experts.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting and time of date
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.setHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add slots to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        //increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [experts, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        {/* doctor details */}
        <div className=" flex w-full flex-col sm:flex-row gap-4">
          <div>
            <img
              className=" bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div>
            <div className=" flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[80px] sm:mt-0 ">
              <p className=" flex items-center gap-2 text-2xl font-medium text-gray-900">
                {docInfo.name}{" "}
                <img
                  src={assets.verified_icon}
                  alt=""
                />
              </p>
              <div className=" flex items-center text-sm mt-1 text-gray-600 gap-2">
                <p>
                  {" "}
                  {docInfo.degree} - {docInfo.speciality}{" "}
                </p>
                <button className=" border py-0.5 text-sm border-[#4B5563] rounded-full px-2">
                  {" "}
                  {docInfo.experience}{" "}
                </button>
              </div>

              <div>
                <p className=" flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 ">
                  About{" "}
                  <img
                    src={assets.info_icon}
                    alt=""
                  />
                </p>
                <p className=" text-sm text-gray-500 max-w-[700px] mt-1">
                  {" "}
                  {docInfo.about}{" "}
                </p>
              </div>
              <p className=" text-gray-500 font-medium mt-4">
                Appointment Fee :{" "}
                <span className=" text-gray-500">
                  {" "}
                  {currencySymbol} {docInfo.fees}{" "}
                </span>{" "}
              </p>
            </div>
          </div>

          {/* <div className="flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-98">
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
                  required
                />
                <input
                  type="date"
                  name="date"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
                  required
                />
                <input
                  type="time"
                  name="time"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
                  required
                />
                <textarea
                  name="notes"
                  placeholder="Additional Notes"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
                  rows="3"
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary text-white rounded-md py-2"
                >
                  Confirm Appointment
                </button>
              </form>
            </div>
          </div> */}

          <div className="flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:w-98 md:w-full w-full">
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
                  required
                />
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
                  required
                />
                <input
                  type="time"
                  name="time"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
                  required
                />
                <textarea
                  name="notes"
                  placeholder="Additional Notes"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-deepBlue"
                  rows="3"
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary text-white rounded-md py-2"
                >
                  Confirm Appointment
                </button>
                {/* <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white rounded-md py-2 text-center"
                >
                  Confirm Appointment via WhatsApp
                </a> */}
              </form>
            </div>
          </div>
        </div>

        {/* <RelatedDoctors
          docId={docId}
          category={docInfo.category}
        /> */}
      </div>
    )
  );
};

export default Appointment;
