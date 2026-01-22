import { HiOutlineLightBulb } from "react-icons/hi";

const features = [
  {
    title: "Innovative Teaching",
    subtitle: "Learning Beyond Boundaries",
    text:
      "Our teaching methods go beyond textbooks, using real-world examples, technology, and interactive learning to spark curiosity in every student.",
  },
  {
    title: "Student-Centered Study",
    subtitle: "Empowering Every Learner",
    text:
      "We tailor our academic approach to meet individual learning needs, helping each student reach their full potential through support and encouragement.",
  },
  {
    title: "Good Environment",
    subtitle: "Together We Learn Better",
    text:
      "Group projects, peer learning, and open discussions create a community where students grow through shared knowledge and teamwork.",
  },
  {
    title: "Critical Thinking",
    subtitle: "Question. Analyze. Discover.",
    text:
      "We nurture independent thinkers who are encouraged to ask questions, evaluate ideas, and make informed decisions.",
  },
  {
    title: "Constant Improvement",
    subtitle: "Strive to Evolve",
    text:
      "Regular assessments, feedback loops, and teacher development ensure that both students and educators are always improving and adapting.",
  },
  {
    title: "Values and Integrity",
    subtitle: "Learning with Character",
    text:
      "Academic success is balanced with strong ethical values. We instill honesty, responsibility, and respect as core pillars of education.",
  },
];

const AcademicCulture = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full  px-[6%] pt-[150px]">

        {/* HEADINGS */}
        <div className="text-center mb-[40px]">
          <h2 className="text-[40px] font-semibold font-poppins text-[#F0942A] mb-3">
            Academic Culture
          </h2>

          <p className="text-[28px] font-akaya text-[#515151] mb-4">
            Where Learning Meets Purpose and Passion
          </p>

          <p className="text-[18px] font-medium font-poppins text-[#8D8D8D] max-w-[1040px] mx-auto leading-[32px] tracking-[0.02em]">
            We foster a learning environment that values curiosity, critical
            thinking, and academic integrity. Our culture promotes lifelong
            learning, encouraging students to explore, question, and grow with
            confidence.
          </p>
        </div>

        {/* CARDS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-[40px]
            gap-y-[44px]
          "
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#FAFAFA]
                rounded-[16px]
                px-[32px]
                pt-[36px]
                shadow-[0_0_14px_rgba(0,0,0,0.05)]
                h-full
              "
            >
              {/* ICON */}
              <div className="w-[40px] h-[40px] rounded-full bg-[#FFF3E6] flex items-center justify-center mb-4">
                <HiOutlineLightBulb
                  size={22}
                  className="text-[#F0942A]"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[22px] font-semibold font-poppins text-[#555555] mb-1">
                {item.title}
              </h3>

              {/* SUBTITLE */}
              <p className="text-[14px] font-medium font-poppins text-[#8D8D8D] mb-3">
                {item.subtitle}
              </p>

              {/* DESCRIPTION */}
              <p className="text-[14px] leading-[26px] font-medium font-poppins text-[#8D8D8D]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcademicCulture;
