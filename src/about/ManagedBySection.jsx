const ManagedBySection = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full  px-[6%] pt-[100px]">

        <div
          className="
            w-full
            bg-[#FAFAFA]
            rounded-[20px]
            px-[6%]
            py-[60px]
            flex flex-col
            md:flex-row
            items-center
            gap-[50px]
          "
        >
          {/* LEFT IMAGE */}
          <div className="flex justify-center w-full md:w-[40%]">
            <div
              className="
                w-[267px] h-[267px]
                rounded-full
                overflow-hidden
                shadow-[0_0_14px_rgba(0,0,0,0.12)]
              "
            >
              <img
                src="/image_about/vidhya.png"
                alt="Shree Vidya Prachar Mandal"
                className="
                  w-full h-full
                  object-cover
                  rounded-full
                  scale-[1.18]   
                "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-[60%]">
            <h2 className="text-[40px] font-semibold font-poppins text-[#F0942A] mb-2">
              Managed by
            </h2>

            <p className="text-[30px] font-akaya text-[#555555] mb-4">
              Shree Vidya Prachar Mandal
            </p>

            <div className="space-y-4 text-[18px] leading-[32px] font-medium font-poppins text-[#8D8D8D]">
              <p>
                Shree Vidya Prachar Mandal has been the guiding force behind our
                institution, dedicated to spreading the light of education since
                its inception.
              </p>

              <p>
                With a strong belief in value-based learning, the trust emphasizes
                academic excellence blended with character development.
              </p>

              <p>
                Under its visionary leadership, the school continues to grow in
                stature and standards.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManagedBySection;
