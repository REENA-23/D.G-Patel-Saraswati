import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full
        h-[80px] md:h-[100px] xl:h-[130px]
        bg-white shadow-[0_4px_30px_rgba(138,138,138,0.16)]
        z-50
      "
    >
      <div className="w-full h-full flex items-center px-[4%] relative">

        {/*  BLUE BAR — DESKTOP ONLY */}
        <div className="hidden xl:flex absolute top-0 right-0 h-[40px] bg-[#3E56A6] text-white items-center gap-6 px-8 rounded-bl-[40px]">
          <div className="flex items-center gap-2 text-sm">
            <FaPhoneAlt />
            <span>+91 23455 66745</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt />
            <span>Lorem ipsum dolor sit amet, lorem ipsum</span>
          </div>
        </div>

        {/*  LOGO + TEXT */}
        <div className="flex items-center h-full gap-4">
          <img
            src="/image_home/logo.png"
            alt="School Logo"
            className="
              h-[80px] md:h-[100px] xl:h-[130px]
              w-auto object-cover scale-150
            "
          />

          {/* TEXT — DESKTOP ONLY */}
          <div className="hidden md:flex flex-col justify-center leading-tight">
            <h1 className="text-[20px] font-bold text-orange-500">
              Shri D.G. Patel
            </h1>
            <p className="text-[16px] font-semibold text-blue-700">
              Saraswati Prathmik
            </p>
            <p className="text-[16px] font-semibold text-blue-700">
              Girls Vidyamandir
            </p>
          </div>
        </div>

        {/*  NAV LINKS — DESKTOP ONLY */}
        <div className="hidden xl:flex ml-auto mt-[34px] items-center gap-6 text-[14px] font-medium text-gray-600">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/academic">Academic Culture</NavLink>
          <NavLink to="/school">School Culture</NavLink>
          <NavLink to="/co-curricular">Co-Curricular</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/admission">Admission</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        {/* HAMBURGER — MOBILE / TABLET */}
        <button
          className="xl:hidden ml-auto text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="xl:hidden w-full bg-white border-t">
          <nav className="flex flex-col text-center py-4 gap-4 text-gray-700">
            <NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink>
            <NavLink to="/academic" onClick={() => setOpen(false)}>Academic Culture</NavLink>
            <NavLink to="/school" onClick={() => setOpen(false)}>School Culture</NavLink>
            <NavLink to="/co-curricular" onClick={() => setOpen(false)}>Co-Curricular</NavLink>
            <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
            <NavLink to="/admission" onClick={() => setOpen(false)}>Admission</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
