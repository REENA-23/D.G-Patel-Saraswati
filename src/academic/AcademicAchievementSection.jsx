const achievements = [
  {
    text: "Winners of National Science Olympiad.",
    active: true,
  },
  {
    text: "Excellence Through Effort",
  },
  {
    text: "Learning. Growing. Succeeding.",
  },
  {
    text: "Driven by Knowledge.",
  },
  {
    text: "Aim High, Achieve More.",
  },
];

const AcademicAchievementSection = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full  px-[6%] pt-[100px]">

        {/*  HEADINGS  */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[40px] font-semibold font-poppins text-[#F0942A] mb-3">
            Academic Achievement
          </h2>

          <p className="text-[28px] font-akaya text-[#515151] mb-3">
            Excellence Rooted in Discipline, Dedication & Consistency
          </p>

          <p className="text-[18px] font-medium font-poppins text-[#8D8D8D] max-w-[1040px] mx-auto leading-[32px]">
            At Shri D.G. Patel Saraswati Prathmik Kanya Vidya Mandir, our students
            consistently excel in academics and competitions, making us proud every year.
          </p>
        </div>

        {/*  CONTENT  */}
        <div className="flex flex-col lg:flex-row items-center gap-[60px]">

          {/* LEFT LIST */}
          <div className="w-full lg:w-[52%] space-y-[14px]">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`
                  w-full
                  min-h-[70px]
                  rounded-[20px]
                  px-[24px]
                  flex items-center
                  text-[20px]
                  font-semibold
                  font-poppins
                  text-[#555555]
                  ${
                    item.active
                      ? "bg-[#F0942A]/10"
                      : "bg-[#F8F8F8]"
                  }
                `}
              >
                {item.active && (
                  <span className="mr-2 text-[#F0942A] text-[18px]">✦</span>
                )}
                “{item.text}”
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[48%]">
            <div className="w-full h-[360px] sm:h-[420px] rounded-[20px] overflow-hidden">
              <img
                src="/image_home/gallery4.png"
                alt="Academic Achievement"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AcademicAchievementSection;
