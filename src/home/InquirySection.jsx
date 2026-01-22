const InquirySection = () => {
  return (
    <section className="w-full bg-white">
      {/* spacing so it never overlaps header */}
      <div className="w-full px-[4%] pt-[150px]">

        {/* OUTER CONTAINER */}
        <div className="w-full bg-[#FAFAFA] rounded-[20px] relative">

          {/*  MOBILE / TABLET  */}
          <div className="flex flex-col gap-[40px] p-[5%] xl:hidden">

            {/* FORM */}
            <div className="w-full bg-white rounded-[20px] shadow-[0_0_14px_rgba(174,174,174,0.25)] px-[6%] py-[36px]">
              <h3 className="text-[22px] font-semibold text-[#F0942A] mb-[24px]">
                Have an Inquiry ?
              </h3>

              <div className="flex flex-col gap-[16px]">
                <input className="h-[55px] rounded-[10px] bg-[#F5F5F5] px-[18px]" placeholder="Enter Your Name" />
                <input className="h-[55px] rounded-[10px] bg-[#F5F5F5] px-[18px]" placeholder="Enter Your Mobile No." />
                <input className="h-[55px] rounded-[10px] bg-[#F5F5F5] px-[18px]" placeholder="Enter Your Email Id." />
                <textarea className="h-[120px] rounded-[10px] bg-[#F5F5F5] px-[18px] py-[14px] resize-none" placeholder="Write your Query" />
              </div>

              <button className="mt-[24px] h-[55px] w-full rounded-[10px] bg-[#F0942A] text-white text-[18px] font-semibold">
                Submit
              </button>
            </div>

            {/* MAP */}
            <div className="w-full h-[420px] rounded-[20px] overflow-hidden shadow-[0_0_14px_rgba(174,174,174,0.25)]">
              <img
                src="/image_home/map.png"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/*  DESKTOP  */}
          <div className="hidden xl:block relative w-full h-[720px]">

            {/* MAP — RIGHT */}
            <div
              className="
                absolute
                right-0
                top-0
                h-full
                w-[60%]
                rounded-tr-[20px]
                rounded-br-[20px]
                overflow-hidden
                shadow-[0_0_14px_rgba(174,174,174,0.25)]
              "
            >
              <img
                src="/image_home/map.png"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>

            {/* FORM — LEFT (VERTICALLY CENTERED) */}
            <div
              className="
                absolute
                left-[4%]
                top-1/2
                -translate-y-1/2
                w-[46%]
                bg-white
                rounded-[20px]
                shadow-[0_0_14px_rgba(174,174,174,0.25)]
                px-[5%]
                py-[36px]
                z-10
              "
            >
              <h3 className="text-[22px] font-semibold text-[#F0942A] mb-[24px]">
                Have an Inquiry ?
              </h3>

              <div className="flex flex-col gap-[16px]">
                <input className="h-[55px] rounded-[10px] bg-[#F5F5F5] px-[18px]" placeholder="Enter Your Name" />
                <input className="h-[55px] rounded-[10px] bg-[#F5F5F5] px-[18px]" placeholder="Enter Your Mobile No." />
                <input className="h-[55px] rounded-[10px] bg-[#F5F5F5] px-[18px]" placeholder="Enter Your Email Id." />
                <textarea className="h-[120px] rounded-[10px] bg-[#F5F5F5] px-[18px] py-[14px] resize-none" placeholder="Write your Query" />
              </div>

              <button className="mt-[24px] h-[55px] w-full rounded-[10px] bg-[#F0942A] text-white text-[18px] font-semibold">
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
