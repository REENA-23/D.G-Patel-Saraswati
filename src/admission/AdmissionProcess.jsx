const steps = [
  { step: "1", title: "INQUIRY", desc: "Fill out initial interest form or contact info at school office." },
  { step: "2", title: "CAMPUS VISIT", desc: "Fill out initial interest form or contact info at school office." },
  { step: "3", title: "DOCUMENTS", desc: "Fill out initial interest form or contact info at school office." },
  { step: "4", title: "CONFIRMATION", desc: "Fill out initial interest form or contact info at school office." },
  { step: "5", title: "ENROLLMENT", desc: "Fill out initial interest form or contact info at school office." },
];

const AdmissionProcess = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full  px-[6%] pt-[150px]">

        {/*  HEADINGS  */}
        <div className="text-center mb-[70px]">
          <h2 className="text-[40px] font-poppins font-semibold text-[#F0942A] mb-3">
            Admission Process
          </h2>

          <p className="text-[28px] font-akaya text-[#515151] mb-3">
            Fostering Bright Minds with Values, Confidence, and Curiosity
          </p>

          <p className="text-[18px] font-poppins font-medium text-[#8D8D8D] max-w-[900px] mx-auto">
            We empower girls through strong values and quality education. Start your daughter’s learning journey with confidence, care, and purpose today.
          </p>
        </div>

        {/*  STEPS GRID  */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            gap-x-[28px]
            gap-y-[40px]
            justify-items-center
          "
        >
          {steps.map((item, index) => (
            <div
              key={index}
              className="
                relative
                w-full
                max-w-[249px]
                h-[234px]
                bg-[#F8F8F8]
                rounded-[12px]
                px-5
                pt-10
                text-center
              "
            >
              {/* NUMBER CIRCLE */}
              <div
                className="
                  absolute
                  -top-[27px]
                  left-1/2
                  -translate-x-1/2
                  w-[54px]
                  h-[54px]
                  rounded-full
                  border
                  border-[#3A53A4]
                  flex
                  items-center
                  justify-center
                  bg-white
                "
              >
                <span className="text-[30px] font-poppins font-semibold text-[#3A53A4]">
                  {item.step}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-[24px] font-poppins font-semibold text-[#3A53A4] uppercase">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-[18px] font-poppins font-medium text-[#8D8D8D] leading-[30px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdmissionProcess;
