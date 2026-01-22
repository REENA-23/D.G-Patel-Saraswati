const cultureCards = [
  {
    title: "An environment built on strong values",
    desc: "Daily prayers, moral stories, and respectful greetings like Namaste nurture kindness and humility.",
    image: "/image_school/culture1.png",
  },
  {
    title: "Balanced Focus on Academics & Character",
    desc: "We teach both “how to succeed” and “how to be good humans.”",
    image: "/image_school/culture2.png",
  },
  {
    title: "Cleanliness, Etiquette, and Daily Duties",
    desc: "Students take pride in maintaining a clean classroom and helping one another.",
    image: "/image_school/culture3.png",
  },
  {
    title: "Highly Strong Teacher–Student Bond",
    desc: "Teachers are seen as guides, mentors, and family — not just instructors.",
    image: "/image_school/culture4.png",
  },
];

const OurUniqueCultureSection = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full px-[6%] pt-[100px]">

        {/* HEADINGS */}
        <div className="text-center mb-[80px]">
          <h2 className="text-[40px] font-semibold font-poppins text-[#F0942A] mb-3">
            Our Unique Culture
          </h2>

          <p className="text-[28px] font-akaya text-[#515151] mb-4">
            Blending Tradition, Values, and Joyful Learning
          </p>

          <p className="text-[18px] font-medium font-poppins text-[#8D8D8D] max-w-[1040px] mx-auto leading-[32px]">
            At Shri D.G. Patel Saraswati Prathmik Kanya Vidya Mandir, our culture
            is more than routine — it’s a way of life rooted in respect, care,
            and holistic growth.
          </p>
        </div>

        {/*  GRID  */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            ld:grid-cols-3
            xl:grid-cols-4


        

            gap-[32px]
            justify-items-center
          "
        >
          {cultureCards.map((item, index) => (
            <div
              key={index}
              className="
                group
                w-[323px]
                h-[380px]
                bg-[#F8F8F8]
                rounded-[20px]
                p-[18px]
                transition
              "
            >
              {/* IMAGE */}
              <div className="w-full h-[160px] rounded-[12px] overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-[18px]
                  font-semibold
                  font-poppins
                  text-[#555555]
                  leading-[30px]
                  mb-2
                  transition-colors
                  duration-300
                  group-hover:text-[#3A53A4]
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[16px] font-poppins text-[#8D8D8D] leading-[28px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurUniqueCultureSection;
