import {
  FaHandsHelping,
  FaUsers,
  FaSeedling,
  FaRegSmileBeam,
  FaBrain,
  FaDove,
  FaPaintBrush,
  FaBookOpen,
  FaUserCheck,
} from "react-icons/fa";

const cultureData = [
  {
    title: "Respect",
    desc: "Honoring teachers, elders, peers, and the school environment.",
    icon: FaHandsHelping,
  },
  {
    title: "Togetherness",
    desc: "Learning the strength of teamwork and helping one another.",
    icon: FaUsers,
  },
  {
    title: "Growth",
    desc: "Academic and personal growth through daily habits.",
    icon: FaSeedling,
  },
  {
    title: "Celebration",
    desc: "Honouring festivals, achievements, and milestones.",
    icon: FaRegSmileBeam,
  },
  {
    title: "Curiosity",
    desc: "Encouraging questions and the joy of discovery in daily learning.",
    icon: FaBrain,
  },
  {
    title: "Peace",
    desc: "Promoting calm, conflict-free classrooms through empathy.",
    icon: FaDove,
  },
  {
    title: "Creativity",
    desc: "Expressing ideas through art, drama, music, and crafts.",
    icon: FaPaintBrush,
  },
  {
    title: "Excellence",
    desc: "Striving for continuous improvement and high standards.",
    icon: FaBookOpen,
  },
  {
    title: "Self-Awareness",
    desc: "Building focus, confidence, and emotional awareness.",
    icon: FaUserCheck,
  },
];

const SchoolCultureSection = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full  px-[6%] pt-[150px]">

        {/* HEADINGS */}
        <div className="text-center mb-[70px]">
          <h2 className="text-[40px] font-semibold font-poppins text-[#F0942A] mb-3">
            School Culture
          </h2>

          <p className="text-[28px] font-akaya text-[#515151] mb-3">
            Discipline, Tradition, and Togetherness – Our Way of Life
          </p>

          <p className="text-[18px] font-medium font-poppins text-[#8D8D8D] max-w-[1040px] mx-auto leading-[32px]">
            At Shri D.G. Patel Saraswati Prathmik Kanya Vidya Mandir, our vision is
            to empower every girl child with knowledge, confidence, culture, and compassion.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-[28px]
            gap-y-[28px]
          "
        >
          {cultureData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  w-full
                  bg-[#F8F8F8]
                  rounded-[12px]
                  px-[24px]
                  py-[22px]
                  flex
                  gap-[16px]
                  shadow-[0_0_4px_rgba(172,172,172,0.25)]
                  transition
                "
              >
                {/* ICON */}
                <div className="w-[36px] h-[36px] flex items-center justify-center bg-white rounded-full">
                  <Icon size={18} className="text-[#F0942A]" />
                </div>

                {/* TEXT */}
                <div>
                  <h3
                    className="
                      text-[20px]
                      font-semibold
                      font-poppins
                      text-[#555555]
                      mb-1
                      transition-colors
                      duration-300
                      group-hover:text-[#3A53A4]
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-[16px] font-regular font-poppins text-[#8D8D8D] leading-[26px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SchoolCultureSection;
