const ContactInfoBar = () => {
  return (
    <section className="w-full bg-[#FAFAFA] flex justify-center">
      <div className="w-full  px-[6%] pt-[100px]">

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-[24px]
          "
        >
          {/* PHONE NUMBER */}
          <div
            className="
              bg-white
              rounded-[14px]
              border
              border-[#EAEAEA]
              px-[32px]
              py-[24px]
            "
          >
            <p className="text-[18px] font-medium font-poppins text-[#8D8D8D] mb-2">
              Phone Number
            </p>

            <p className="text-[20px] font-medium font-poppins text-[#555555] leading-[30px]">
              +91 9987584534
            </p>
            <p className="text-[20px] font-medium font-poppins text-[#555555] leading-[30px]">
              +91 9987584534
            </p>
          </div>

          {/* EMAIL */}
          <div
            className="
              bg-white
              rounded-[14px]
              border
              border-[#EAEAEA]
              px-[32px]
              py-[24px]
              flex
              flex-col
              justify-center
            "
          >
            <p className="text-[18px] font-medium font-poppins text-[#8D8D8D] mb-2">
              Email ID
            </p>

            <p className="text-[20px] font-medium font-poppins text-[#555555] break-all">
              school@gmail.com
            </p>
          </div>

          {/* OFFICE HOURS */}
          <div
            className="
              bg-white
              rounded-[14px]
              border
              border-[#EAEAEA]
              px-[32px]
              py-[24px]
            "
          >
            <p className="text-[18px] font-medium font-poppins text-[#8D8D8D] mb-2">
              Office Hours:
            </p>

            <p className="text-[18px] font-medium font-poppins text-[#555555] leading-[30px]">
              Monday to Saturday – 9:00 AM to 4:00 PM <br />
              (Sunday Closed)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfoBar;
