const pillars = [
  { name: "Ramdas Chauhan", role: "Chairman", image: "/image_about/trustee.png" },
  { name: "Ramdas Chauhan", role: "Director", image: "/image_about/trustee.png" },
  { name: "Ramdas Chauhan", role: "Principle", image: "/image_about/trustee.png" },
  { name: "Ramdas Chauhan", role: "Head", image: "/image_about/trustee.png" },
  { name: "Ramdas Chauhan", role: "Chairman", image: "/image_about/trustee.png" },
  { name: "Ramdas Chauhan", role: "Chairman", image: "/image_about/trustee.png" },
  { name: "Ramdas Chauhan", role: "Chairman", image: "/image_about/trustee.png" },
  { name: "Ramdas Chauhan", role: "Chairman", image: "/image_about/trustee.png" },
];

const OurPillarSection = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full  px-[6%] pt-[120px] ">

        {/* HEADINGS */}
        <div className="text-center mb-[70px]">
          <h2 className="text-[40px] font-semibold font-poppins text-[#F0942A] mb-3">
            Our Pillar
          </h2>
          <p className="text-[28px] font-akaya text-[#515151] mb-2">
            Our Pillars of Strength
          </p>
          <p className="text-[18px] font-medium font-poppins text-[#8D8D8D]">
            The foundation of our school’s philosophy and success.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-x-[28px]
            gap-y-[36px]
            justify-items-center
          "
        >
          {pillars.map((item, index) => (
            <div
              key={index}
              className="
                w-full
                max-w-[323px]
                bg-white
                rounded-[20px]
                shadow-[0_0_14px_rgba(174,174,174,0.25)]
                overflow-hidden
              "
            >
              {/* IMAGE */}
              <div className="p-[10px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[298px] object-cover rounded-[12px]"
                />
              </div>

              {/* TEXT */}
              <div className="text-center pb-[18px]">
                <p className="text-[18px] font-semibold font-poppins text-[#515151]">
                  {item.name}
                </p>
                <p className="text-[14px] font-medium font-poppins text-[#F0942A]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurPillarSection;
