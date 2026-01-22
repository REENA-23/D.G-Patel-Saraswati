const AcademicCalendarSection = () => {
  return (
    <section className="w-full bg-[#FAFAFA] flex justify-center">
      <div className="w-full  px-[5%] pt-[100px] sm:py-[100px]">

        {/* TOP TEXT */}
        <div className="text-center mb-[50px] sm:mb-[70px]">
          <h2 className="text-[30px] sm:text-[36px] xl:text-[40px] leading-[37px] font-semibold font-poppins text-[#F0942A] mb-4">
            Academic Calendar
          </h2>

          <p className="text-[18px] sm:text-[20px] xl:text-[22px] leading-[32px] sm:leading-[37px] font-medium font-akaya text-[#515151] mb-3">
            your child’s academic year with clarity and confidence.
          </p>

          <p className="max-w-[900px] mx-auto text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] tracking-[0.02em] font-medium font-poppins text-[#8D8D8D]">
            "Download the full academic calendar with detailed month-wise
            activities, events, holidays, and exam schedule." –
            <span className="text-[#3A53A4] underline cursor-pointer ml-1">
              Download Pdf
            </span>
          </p>
        </div>

        {/* CALENDAR + EVENTS */}
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-[40px]">

          {/* CALENDAR CARD */}
          <div
            className="
              w-full
              max-w-[666px]
              bg-white
              rounded-[12px]
              shadow-[0_0_14px_rgba(174,174,174,0.25)]
              px-[24px] sm:px-[40px]
              pt-[28px] pb-[32px]
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between mb-[24px]">
              <div className="flex items-center gap-3 text-[#515151] font-medium">
                ◀ <span>2025</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[20px] sm:text-[22px] font-semibold font-poppins text-[#3A53A4]">
                  July
                </span>
                ▼
              </div>
            </div>

            {/* DAYS */}
            <div className="grid grid-cols-7 text-center text-[13px] sm:text-[14px] font-medium font-poppins text-[#515151] mb-[16px]">
              {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day => (
                <div key={day}>{day}</div>
              ))}
            </div>

            {/* DATES */}
            <div className="grid grid-cols-7 gap-y-[16px] text-center text-[16px] sm:text-[18px] font-medium font-poppins text-[#8D8D8D]">
              {[
                "29","30","1","2","3","4","5",
                "6","7","8","9","10","11","12",
                "13","14","15","16","17","18","19",
                "20","21","22","23","24","25","26",
                "27","28","29","30","31","1","2"
              ].map((date, index) => (
                <div
                  key={`${date}-${index}`}
                  className={`flex justify-center items-center ${
                    date === "25"
                      ? "bg-[#F0942A] text-white rounded-[6px] w-[36px] h-[32px] mx-auto"
                      : ""
                  }`}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>

          {/* EVENTS CARD */}
          <div
            className="
              w-full
              max-w-[466px]
              bg-[#F9F9F9]
              rounded-[12px]
              px-[24px] sm:px-[40px]
              pt-[28px] pb-[32px]
            "
          >
            <div className="flex flex-col gap-[24px]">
              <EventItem />
              <EventItem />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademicCalendarSection;

/* EVENT ITEM */
const EventItem = () => {
  return (
    <div>
      <p className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] font-semibold font-poppins text-[#515151]">
        • Guru Purnima Celebration
      </p>
      <p className="text-[14px] sm:text-[15px] leading-[24px] sm:leading-[28px] font-normal font-poppins text-[#8D8D8D] pl-4">
        At 9 AM, 25 July 2025
      </p>
    </div>
  );
};
