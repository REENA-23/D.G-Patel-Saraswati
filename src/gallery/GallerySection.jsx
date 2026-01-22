const galleryItems = [
  { title: "Classroom", image: "/image_home/gallery1.png" },
  { title: "Classroom", image: "/image_home/gallery2.png" },
  { title: "Classroom", image: "/image_home/our_mission.png" },
  { title: "Classroom", image: "/image_home/gallery4.png" },
  { title: "Classroom", image: "/image_home/gallery1.png" },
  { title: "Classroom", image: "/image_home/gallery2.png" },
  { title: "Classroom", image: "/image_home/our_mission.png" },
  { title: "Classroom", image: "/image_home/gallery4.png" },
  { title: "Classroom", image: "/image_home/gallery1.png" },
  { title: "Classroom", image: "/image_home/gallery2.png" },
  { title: "Classroom", image: "/image_home/our_mission.png" },
  { title: "Classroom", image: "/image_home/gallery4.png" },
];

const GallerySection = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full px-[6%] pt-[150px]">
        {/* HEADINGS */}
        <div className="text-center mb-[70px]">
          <h2 className="text-[40px] font-semibold font-poppins text-[#F0942A] mb-3">
            Gallery
          </h2>

          <p className="text-[28px] font-akaya text-[#515151] mb-2">
            Glimpses of School Life
          </p>

          <p className="text-[18px] font-medium font-poppins text-[#8D8D8D] max-w-[900px] mx-auto">
            "Explore vibrant school life through photos of activities, events,
            celebrations, creativity, and joyful learning moments."
          </p>
        </div>

        <div
          className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3      /* iPad Pro + Nest Hub */
    xl:grid-cols-4      /* Desktop */
    gap-x-[28px]
    gap-y-[36px]
    justify-items-center
  "
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="
                w-full
                max-w-[323px]
                bg-white
                rounded-[12px]
                shadow-[0_0_14px_rgba(174,174,174,0.25)]
                p-[8px]
              "
            >
              {/* IMAGE */}
              <div className="w-full h-[298px] rounded-[12px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <p
                className="
                  mt-3
                  text-center
                  text-[22px]
                  font-semibold
                  font-poppins
                  text-[#515151]
                  transition-colors
                  duration-300
                  hover:text-[#F0942A]
                "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
