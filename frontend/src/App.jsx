import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Experts from "./Pages/Experts";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MyProfile from "./Pages/MyProfile";
import MyAppointment from "./Pages/MyAppointment";
import Footer from "./components/Footer";
import Appointment from "./Pages/Appointment";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" mx-4 sm:mx-[10%]">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/experts"
          element={<Experts />}
        />
        <Route
          path="/experts/:category"
          element={<Experts />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/my-profile"
          element={<MyProfile />}
        />
        <Route
          path="/my-appointments"
          element={<MyAppointment />}
        />
        <Route
          path="/appointment/:docId"
          element={<Appointment />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
