
import { useState } from "react";


const coCurricularItems = [
  {
    title: "Art & Craft",
    image: "/images/art.png",
    description: "Creativity through colours & imagination",
    gallery: Array(8).fill("/images/art.png"),
  },
  {
    title: "Music & Dance",
    image: "/images/art.png",
  },
  {
    title: "Sports & Games",
    image: "/images/art.png",
  },
  {
    title: "Elocution & Debate",
    image: "/images/art.png",
  },
];


const CoCurricularSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full  px-[6%] pt-[150px] ">

        {/*  HEADINGS  */}
        <div className="text-center mb-[80px]">
          <h2 className="text-[40px] font-semibold font-poppins text-[#F0942A] mb-3">
            Co-Curricular
          </h2>

          <p className="text-[28px] font-akaya text-[#515151] mb-2">
            Beyond Books, Beyond Boundaries
          </p>

          <p className="text-[18px] font-medium font-poppins text-[#8D8D8D] max-w-[900px] mx-auto">
            Our co-curricular programs help students discover talents, gain confidence,
            and grow as leaders through music, dance, debates, and more.
          </p>
        </div>

        {/*  MAIN GRID  */}
        {!activeItem && (
          <div
  className="
    grid
    grid-cols-1          /* Mobile */
    sm:grid-cols-2       /* Phones landscape + small tablets */
    lg:grid-cols-3       /* iPad Pro, Nest Hub */
    xl:grid-cols-4       /* Desktop */
    gap-x-[32px]
    gap-y-[48px]
    justify-items-center
  "
>
            {coCurricularItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveItem(item)}
                className="text-left"
              >
                <div
                  className="
                    w-[323px]
                    bg-white
                    rounded-[12px]
                    shadow-[0_0_14px_rgba(174,174,174,0.25)]
                    overflow-hidden
                  "
                >
                  {/* IMAGE */}
                  <div className="p-[9px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[305px] h-[298px] object-cover rounded-[12px]"
                    />
                  </div>

                  {/* TITLE */}
                  <p className="pb-[16px] text-center text-[18px] font-semibold font-poppins text-[#515151]">
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/*  DETAIL VIEW  */}
        {activeItem && (
          <div>
            {/* BACK BUTTON */}
            <button
              onClick={() => setActiveItem(null)}
              className="mb-10 text-[#F0942A] font-semibold font-poppins"
            >
              ← Back
            </button>

            <div className="text-center mb-10">
              <h3 className="text-[32px] font-semibold font-poppins text-[#F0942A]">
                {activeItem.title}
              </h3>

              <p className="text-[18px] font-akaya text-[#515151]">
                {activeItem.description}
              </p>
            </div>

            {/* DETAIL GRID */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-4
                gap-x-[32px]
                gap-y-[40px]
                justify-items-center
              "
            >
              {activeItem.gallery.map((img, i) => (
                <div
                  key={i}
                  className="
                    w-[323px]
                    bg-white
                    rounded-[12px]
                    shadow-[0_0_14px_rgba(174,174,174,0.25)]
                    p-[9px]
                  "
                >
                  <img
                    src={img}
                    alt=""
                    className="w-[305px] h-[298px] object-cover rounded-[12px]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CoCurricularSection;
