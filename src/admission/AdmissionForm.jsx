import { FiUpload } from "react-icons/fi";

const Input = ({ label, width }) => (
  <div className={`flex flex-col gap-2 w-full ${width}`}>
    <label className="text-[16px] font-medium font-poppins text-[#555555]">
      {label}
    </label>
    <input
      className="
        h-[50px]
        rounded-[10px]
        bg-[#F8F8F8]
        px-4
        outline-none
        w-full
      "
    />
  </div>
);

const AdmissionForm = () => {
  return (
    <section className="w-full flex justify-center bg-white overflow-hidden">
      <div className="w-full  px-4 sm:px-[6%] py-[120px]">

        {/* HEADINGS */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[32px] sm:text-[40px] font-semibold font-poppins text-[#F0942A]">
            Admission Form
          </h2>

          <p className="text-[22px] sm:text-[28px] font-akaya text-[#515151] mt-2">
            Apply for Your Child’s Future
          </p>

          <p className="text-[16px] sm:text-[18px] font-medium font-poppins text-[#8D8D8D] max-w-[1040px] mx-auto mt-3">
            To enroll your daughter at Shri D.G. Patel Saraswati Prathmik Kanya Vidya Mandir,
            please fill out the admission form with accurate details.
          </p>
        </div>

        {/* FORM */}
        <div className="flex flex-col gap-[32px]">

          {/* ROW 1 */}
          <div className="flex flex-wrap gap-[24px]">
            <Input label="Student Full Name" width="lg:w-[575px]" />
            <Input label="Date of Birth" width="lg:w-[273px]" />
            <Input label="Gender" width="lg:w-[273px]" />
          </div>

          {/* ROW 2 */}
          <div className="flex flex-wrap gap-[24px]">
            <Input label="Parent/Guardian Full Name" width="lg:w-[575px]" />
            <Input label="Class Applying For" width="lg:w-[273px]" />
            <Input label="Academic Year" width="lg:w-[273px]" />
          </div>

          {/* ROW 3 */}
          <div className="flex flex-wrap gap-[24px]">
            <Input label="Relationship to Student" width="lg:w-[273px]" />
            <Input label="Phone Number" width="lg:w-[430px]" />
            <Input label="Email Address" width="lg:w-[430px]" />
          </div>

          {/* ROW 4 */}
          <div className="flex flex-wrap gap-[24px]">
            <Input label="Address" width="lg:w-[575px]" />
            <Input label="City" width="lg:w-[273px]" />
            <Input label="State" width="lg:w-[273px]" />
          </div>

          {/* MEDICAL */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[16px] font-medium font-poppins text-[#555555]">
              Does the child have any medical condition?
            </label>

            <textarea
              className="
                w-full
                h-[202px]
                rounded-[12px]
                bg-[#F8F8F8]
                p-4
                resize-none
                outline-none
              "
            />
          </div>

          {/* UPLOAD SECTION */}
          <div className="flex flex-wrap gap-[24px]">

            {/* UPLOAD BOX */}
            <div className="
              w-full sm:w-[256px]
              h-[224px]
              rounded-[12px]
              bg-[#E9EDF7]
              flex flex-col
              items-center
              justify-center
              cursor-pointer
            ">
              <div className="
                w-12 h-12
                bg-[#3A53A4]
                text-white
                rounded-full
                flex items-center justify-center
              ">
                <FiUpload size={22} />
              </div>

              <p className="text-[#3A53A4] text-[14px] mt-3 font-medium">
                Upload
              </p>
            </div>

            {/* FILE LIST */}
            <div className="flex flex-col gap-3 w-full lg:w-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="
                    w-full
                    lg:w-[866px]
                    h-[50px]
                    rounded-[10px]
                    bg-[#F8F8F8]
                    px-4
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="text-[#555555] text-[14px]">
                    Birth Certificate
                  </span>

                  <div className="flex gap-4">
                    <span className="text-[#3A53A4] cursor-pointer">View</span>
                    <span className="text-red-500 cursor-pointer">🗑</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUBMIT */}
          <div className="flex justify-center mt-[30px]">
            <button className="w-full sm:w-[295px] h-[50px] bg-[#3A53A4] text-white rounded-[10px]">
              Submit Form
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
