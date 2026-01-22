import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* TOP FOOTER */}
      <div className="w-full  mx-auto px-4 sm:px-6 xl:px-[6%] pt-[100px]">
        <div className="flex flex-col xl:flex-row gap-[40px] justify-between">

          {/* LOGO */}
          <div className="flex items-center h-full gap-4">
            <img
              src="/image_home/logo.png"
              alt="School Logo"
              className="h-[80px] md:h-[100px] xl:h-[130px] w-auto object-cover scale-150"
            />
            <div>
              <p className="text-[18px] font-semibold font-poppins text-[#F0942A]">
                Shri D. G. Patel
              </p>
              <p className="text-[16px] font-medium font-poppins text-[#3A53A4]">
                Saraswati Prathmik
              </p>
              <p className="text-[16px] font-medium font-poppins text-[#3A53A4]">
                Girls Vidya Mandir
              </p>
            </div>
          </div>

          {/* DIVIDER — ONLY DESKTOP */}
          <div className="hidden xl:block w-[2px] h-[344px] bg-[#E9E9E9]" />

          {/* LINKS */}
          <div className="flex flex-col md:flex-row gap-[40px] w-full xl:w-auto">

            {/* QUICK LINKS */}
            <div className="md:w-[200px]">
              <h4 className="text-[18px] font-semibold font-poppins text-[#3A53A4] mb-[14px]">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-[10px] text-[15px] font-medium font-poppins text-[#515151]">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/academic">Academic Culture</NavLink></li>
                <li><NavLink to="/school">School Culture</NavLink></li>
                <li><NavLink to="/co-curricular">Co-Curricular</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/admission">Admission</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
              </ul>
            </div>

            {/* ABOUT US */}
            <div className="md:w-[200px]">
              <h4 className="text-[18px] font-semibold font-poppins text-[#3A53A4] mb-[14px]">
                About Us
              </h4>
              <ul className="flex flex-col gap-[10px] text-[15px] font-medium font-poppins text-[#515151]">
                <li><NavLink to="/about/history">History</NavLink></li>
                <li><NavLink to="/about/trustees">Our Trustees</NavLink></li>
                <li><NavLink to="/about/pillar">Our Pillar</NavLink></li>
                <li><NavLink to="/about/team">Our Team</NavLink></li>
                <li><NavLink to="/about/management">Managed By</NavLink></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="md:w-[300px]">
              <h4 className="text-[18px] font-semibold font-poppins text-[#3A53A4] mb-[14px]">
                Contact Us
              </h4>
              <div className="flex flex-col gap-[12px] text-[15px] font-medium font-poppins text-[#515151]">
                <p>
                  <span className="text-[#F0942A] font-semibold">Address:</span><br />
                  Lorem ipsum dolor sit amet, ipsum sit amet.
                </p>
                <p>
                  <span className="text-[#F0942A] font-semibold">Email:</span><br />
                  info@example.com
                </p>
                <p>
                  <span className="text-[#F0942A] font-semibold">Phone:</span><br />
                  +91 97844 56725
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full bg-[#3A53A4]">
        <div className="w-full max-w-[1512px] mx-auto px-4 sm:px-6 xl:px-[6%] py-[12px] flex flex-col xl:flex-row gap-[8px] justify-between items-center text-white text-[13px] font-medium font-poppins text-center xl:text-left">
          <p>© 2025 Reserved SHREE D.G. PATEL SARASWATI PRATHMIK GIRLS VIDYA MANDIR</p>
          <p>Design and Develop by PRUTHATEK</p>
          <p>
            <NavLink to="/privacy">Privacy Policy</NavLink> |{" "}
            <NavLink to="/copyright">Copyright</NavLink> |{" "}
            <NavLink to="/terms">Terms of Use</NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
