const teamMembers = [
  {
    name: "Sanjay Varma",
    role: "Teacher",
    image: "/image_about/team1.png",
  },
  {
    name: "Sanjay Varma",
    role: "Teacher",
    image: "/image_about/team2.png",
  },
  {
    name: "Sanjay Varma",
    role: "Teacher",
    image: "/image_about/team3.png",
  },
  {
    name: "Sanjay Varma",
    role: "Teacher",
    image: "/image_about/team4.png",
  },
  {
    name: "Sanjay Varma",
    role: "Teacher",
    image: "/image_about/team5.png",
  },
  {
    name: "Sanjay Varma",
    role: "Teacher",
    image: "/image_about/team1.png",
  },
  {
    name: "Sanjay Varma",
    role: "Teacher",
    image: "/image_about/team2.png",
  },
  {
    name: "Sanjay Varma",
    role: "Teacher",
    image: "/image_about/team3.png",
  },
  {
    name: "Sanjay Varma",
    role: "Teacher",
    image: "/image_about/team4.png",
  },
  {
    name: "Sanjay Varma",
    role: "Teacher",
    image: "/image_about/team5.png",
  },
];

const OurTeamSection = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full  px-4 sm:px-6 xl:px-[6%] pt-[120px]">

        {/*  HEADINGS  */}
        <div className="text-center mb-[60px] sm:mb-[80px]">
          <h2 className="text-[32px] sm:text-[40px] font-semibold font-poppins text-[#F0942A] mb-3">
            Our Team
          </h2>

          <p className="text-[22px] sm:text-[28px] font-akaya text-[#515151] mb-2">
            Meet the Heart of Our School
          </p>

          <p className="text-[16px] sm:text-[18px] font-medium font-poppins text-[#8D8D8D] max-w-[900px] mx-auto">
            Dedicated educators shaping young minds with love, discipline, and lifelong values.
          </p>
        </div>

        {/*  GRID  */}
        <div
          className="
            grid
            grid-cols-1
            xs:grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-x-[20px]
            sm:gap-x-[30px]
            gap-y-[36px]
            sm:gap-y-[56px]
            justify-items-center
          "
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* IMAGE */}
              <div
                className="
                  w-[140px] h-[140px]
                  sm:w-[170px] sm:h-[170px]
                  md:w-[190px] md:h-[190px]
                  xl:w-[208px] xl:h-[208px]
                  rounded-full
                  border-[4px] md:border-[5px]
                  border-[#3A53A4]
                  overflow-hidden
                  shadow-[0_0_4px_rgba(172,172,172,0.25)]
                "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* NAME */}
              <p className="mt-3 sm:mt-4 text-[15px] sm:text-[16px] font-semibold font-poppins text-[#515151]">
                {member.name}
              </p>

              {/* ROLE */}
              <p className="text-[13px] sm:text-[14px] font-medium font-poppins text-[#3A53A4]">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeamSection;
