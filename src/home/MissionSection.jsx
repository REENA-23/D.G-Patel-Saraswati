const MissionSection = () => {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full  px-[6%] pt-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">

          {/* LEFT : IMAGE CARD */}
          <div className="relative flex justify-center overflow-hidden">

            {/* ORANGE ROTATED BACK CARD */}
            <div
              className="
                absolute
                w-full max-w-[456px] h-[492px]
                bg-[#F0942A]
                rounded-[12px]
                rotate-[10.68deg]
              "
            ></div>

            {/* IMAGE + BORDERS */}
            <div
              className="
                relative
                w-full max-w-[456px] h-[492px]
                bg-white
                rounded-[12px]
                p-[12px]
                shadow-sm
              "
            >
              {/* INNER BORDER */}
              <div
                className="
                  w-full h-full
                  rounded-[12px]
                  border border-[#D9D9D9]
                  overflow-hidden
                "
              >
                <img
                  src="/image_home/our_mission.png"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* DOT INDICATORS */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F0942A]"></span>
                <span className="w-2 h-2 rounded-full bg-[#D9D9D9]"></span>
                <span className="w-2 h-2 rounded-full bg-[#D9D9D9]"></span>
              </div>
            </div>
          </div>

          {/* RIGHT : TEXT CONTENT */}
          <div>
            <h2 className="text-[40px] font-semibold text-[#F0942A] mb-4 font-poppins">
              Our Mission
            </h2>

            <p className="text-[26px] text-[#515151] mb-8 font-akaya leading-[36px]">
              Empowering Every Girl to Shine with Knowledge,
              Values & Confidence.
            </p>

            <ul className="space-y-4 text-[18px] text-[#8D8D8D] font-medium font-poppins">
              <li className="flex gap-3">
                <span>•</span>
                <span>
                  Install confidence, curiosity, and compassion through learning.
                </span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>
                  Faster cultural pride and moral values rooted in Indian tradition.
                </span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>
                  Equip every girl with the skills to thrive in academics, life,
                  and society.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;
