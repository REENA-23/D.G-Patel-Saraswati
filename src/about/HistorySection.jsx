const HistorySection = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full  pl-[50px] pt-[160px]">

        {/*  DESKTOP & NEST HUB MAX  */}

        <div className="hidden xl:flex items-center gap-[10%]">

          {/* LEFT IMAGE GROUP */}
          <div className="relative w-[42%] min-w-[480px]">

            <div className="w-[311px] h-[430px] rounded-[12px] border-[12px] border-white shadow-lg overflow-hidden">
              <img
                src="/image_home/our_mission.png"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-[230px] left-[180px] w-[311px] h-[318px] rounded-[12px] border-[12px] border-white shadow-lg overflow-hidden bg-white">
              <img
                src="/image_home/gallery1.png"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-[40px] left-[315px] w-[200px]">
              <img
                src="/image_about/badge.png"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-[40%]">
            <TextBlock />
          </div>
        </div>


        {/*  TABLET  */}
        <div className="hidden md:flex xl:hidden flex-col items-center gap-14">

          {/* IMAGE ROW */}
          <div className="w-full flex items-center justify-center gap-[6%]">

            {/* LEFT IMAGE */}
            <div className="w-[240px] h-[330px] rounded-[12px] border-[10px] border-white shadow-lg overflow-hidden">
              <img
                src="/image_home/our_mission.png"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BADGE */}
            <div className="w-[160px] flex justify-center">
              <img
                src="/image_about/badge.png"
                className="w-full h-auto"
              />
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-[240px] h-[300px] rounded-[12px] border-[10px] border-white shadow-lg overflow-hidden">
              <img
                src="/image_home/gallery1.png"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT BELOW */}
          <div className="max-w-[760px] text-center">
            <TextBlock center />
          </div>
        </div>


        {/*  MOBILE */}
        <div className="md:hidden flex flex-col items-center gap-12 px-4">

          <div className="w-[160px]">
            <img
              src="/image_about/badge.png"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="w-[280px] h-[380px] rounded-[12px] border-[10px] border-white shadow-lg overflow-hidden">
              <img
                src="/image_home/our_mission.png"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[280px] h-[300px] rounded-[12px] border-[10px] border-white shadow-lg overflow-hidden">
              <img
                src="/image_home/gallery1.png"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-[680px] text-center">
            <TextBlock center />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HistorySection;


/*  TEXT BLOCK  */

const TextBlock = ({ center = false }) => {
  return (
    <>
      <h2
        className={`text-[40px] font-semibold font-poppins text-[#F0942A] mb-3 ${
          center ? "text-center" : ""
        }`}
      >
        History
      </h2>

      <p
        className={`text-[18px] font-akaya text-[#515151] mb-6 ${
          center ? "text-center" : ""
        }`}
      >
        Rooted in Tradition, Growing with Vision
      </p>

      <ul
        className={`space-y-4 text-[16px] leading-[28px] text-[#8D8D8D] ${
          center ? "text-left mx-auto max-w-[720px]" : ""
        }`}
      >
        <li>• Established with the mission to educate and uplift young girls through quality learning.</li>
        <li>• Empowering generations with knowledge and values.</li>
        <li>• Proud legacy of academic excellence and cultural values.</li>
        <li>• Tradition meets modern education.</li>
      </ul>
    </>
  );
};
