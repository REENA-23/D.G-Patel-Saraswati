const trustees = Array.from({ length: 8 }, () => ({
  name: "Ramdas Chauhan",
  image: "/image_about/trustee.png",
  description:
    "Lorem ipsum dolor sit amet, was consectetur adipiscing elit. that consectetur adipiscing, Lorem ipsum dolor sit amet sit amet, was consectetur adipiscing elit. that sit amet. Lorem ipsum dolor sit amet, was consectetur adipiscing elit. that consectetur adipiscing.",
}));

const OurTrusteesSection = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full px-[6%] pt-[200px]">

        {/*  HEADINGS */}
        <div className="text-center mb-[70px]">
          <h2 className="text-[40px] font-semibold font-poppins text-[#F0942A] mb-3">
            Our Trustees
          </h2>

          <p className="text-[28px] font-akaya text-[#515151] mb-2">
            Our Guiding : Meet the Trustees
          </p>

          <p className="text-[18px] font-medium font-poppins text-[#8D8D8D] tracking-[0.02em]">
            Visionaries behind the mission of empowering girl education.
          </p>
        </div>

        {/*  GRID  */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-x-[28px]
            gap-y-[36px]
            justify-items-center
          "
        >
          {trustees.map((trustee, index) => (
            <div
              key={index}
              className="
                group
                w-full
                max-w-[323px]
                rounded-[12px]
                bg-white
                shadow-[0_0_14px_rgba(174,174,174,0.25)]
                overflow-hidden
                transition
                duration-300
              "
            >
              {/* IMAGE / HOVER AREA */}
              <div className="relative w-full h-[298px] bg-white">

                {/* IMAGE */}
                <img
                  src={trustee.image}
                  alt={trustee.name}
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    transition-opacity
                    duration-300
                    group-hover:opacity-0
                  "
                />

                {/* HOVER CONTENT */}
                <div
                  className="
                    absolute inset-0
                    flex flex-col
                    items-center
                    justify-center
                    px-6
                    text-center
                    bg-white
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                >
                  <h3 className="text-[22px] font-semibold font-poppins text-[#3A53A4] mb-3">
                    {trustee.name}
                  </h3>

                  <p className="text-[14px] leading-[22px] font-medium font-poppins text-[#8D8D8D]">
                    {trustee.description}
                  </p>
                </div>
              </div>

              {/* NAME  */}
              <div
                className="
                  py-[14px]
                  text-center
                  transition-opacity
                  duration-300
                  group-hover:opacity-0
                "
              >
                <p className="text-[22px] font-semibold font-poppins text-[#515151]">
                  {trustee.name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTrusteesSection;
