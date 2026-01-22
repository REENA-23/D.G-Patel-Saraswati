const documents = [
  "Birth Certificate",
  "Passport-size Photo",
  "Previous School Report Card / TC",
  "Address Proof",
  "Caste Certificate",
  "Medical Certificate (if applicable)",
  "Aadhar Card (Child & Parent)",
];

const RequiredDocumentSection = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full  px-[6%] pt-[100px]">

        {/*  HEADINGS  */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[40px] font-semibold font-poppins text-[#F0942A] mb-3">
            Required Document
          </h2>

          <p className="text-[28px] font-akaya text-[#515151]">
            Documents to Attach with Admission Form
          </p>
        </div>

        {/*  DOCUMENT LIST  */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-[80px]
            gap-y-[28px]
            max-w-[1100px]
            mx-auto
          "
        >
          {documents.map((doc, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              {/* BULLET CIRCLE */}
              <span
                className="
                  mt-[6px]
                  w-[18px]
                  h-[18px]
                  rounded-full
                  border-2
                  border-[#3A53A4]
                  flex-shrink-0
                "
              ></span>

              {/* TEXT */}
              <p className="text-[18px] font-medium font-poppins text-[#8D8D8D]">
                {doc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RequiredDocumentSection;
