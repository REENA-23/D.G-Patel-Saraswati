const VisionSection = () => {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full  px-[6%] pt-[100px]">

        {/* TOP TEXT */}
        <div className="text-center mb-[80px]">
          <h2
            className="
              text-[40px]
              leading-[37px]
              font-semibold
              font-poppins
              text-[#F0942A]
              mb-6
            "
          >
            Our Vision
          </h2>

          <p
            className="
              text-[28px]
              leading-[46px]
              font-normal
              font-akaya
              text-[#515151]
              mb-6
            "
          >
            Shaping Tomorrow’s Women Through Today’s Girls
          </p>

          <p
            className="
              max-w-[1040px]
              mx-auto
              text-[18px]
              leading-[32px]
              tracking-[0.02em]
              font-medium
              font-poppins
              text-[#8D8D8D]
            "
          >
            At Shri D.G. Patel Saraswati Prathmik Kanya Vidya Mandir, our vision
            is to empower every girl child with knowledge, confidence, culture,
            and compassion—so she grows into a strong, wise, and responsible
            woman of tomorrow.
          </p>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] items-center">

          {/* LEFT CARDS */}
          <div className="flex flex-col gap-[40px]">
            <VisionCard
              title="Empowering Every Girl"
              desc="We envision a world where every girl has the confidence, skills, and opportunity to shape her future."
            />
            <VisionCard
              title="Building a Value-Driven Future"
              desc="We aim to develop responsible citizens who lead with integrity and compassion."
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src="/image_home/our_mission.png"
              alt="Our Vision"
              className="
                w-[340px] h-[500px]
                object-cover
                rounded-[12px]
                border border-[#D9D9D9]
              "
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-[40px]">
            <VisionCard
              title="Innovation in Learning"
              desc="We inspire students to think critically and adapt to an ever-evolving world."
            />
            <VisionCard
              title="Inclusive and Holistic Growth"
              desc="Our inclusive environment supports diverse talents and promotes all-round development."
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionSection;

const VisionCard = ({ title, desc }) => {
  return (
    <div
      className="
        group
        relative
        w-full max-w-[486px]
        h-[230px]
        bg-[#F9F9F9]
        rounded-[12px]
        px-[32px] py-[28px]
        overflow-hidden
        transition-all duration-300
      "
    >
      {/* DEFAULT STATE */}
      <div className="transition-opacity duration-300 group-hover:opacity-0">
        <h3
          className="
            text-[27px]
            leading-[40px]
            font-normal
            font-akaya
            text-[#515151]
            mb-3
          "
        >
          {title}
        </h3>

        <p
          className="
            text-[18px]
            leading-[28px]
            tracking-[0.02em]
            font-medium
            font-poppins
            text-[#8D8D8D]
          "
        >
          {desc}
        </p>
      </div>

      {/* HOVER STATE */}
      <div
        className="
          absolute inset-0
          px-[32px] py-[28px]
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      >
        <h3
          className="
            text-[27px]
            leading-[40px]
            font-normal
            font-akaya
            text-[#F0942A]
            mb-3
          "
        >
          Learning for Life, Not Just Exams
        </h3>

        <p
          className="
            text-[18px]
            leading-[28px]
            tracking-[0.02em]
            font-medium
            font-poppins
            text-[#8D8D8D]
          "
        >
          we believe true education builds character and skills for life. Our
          approach encourages hands-on learning, critical thinking etc…
        </p>
      </div>
    </div>
  );
};
