const GallerySection = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full  px-[6%] pt-[100px]">

        {/* TOP TEXT */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[32px] sm:text-[36px] xl:text-[40px] leading-[37px] font-semibold font-poppins text-[#F0942A] mb-4">
            Gallery
          </h2>

          <p className="text-[22px] sm:text-[26px] xl:text-[28px] leading-[46px] font-normal font-akaya text-[#515151] mb-4">
            Glimpses of School Life
          </p>

          <p className="max-w-[889px] mx-auto text-[16px] sm:text-[18px] leading-[32px] tracking-[0.02em] font-medium font-poppins text-[#8D8D8D]">
            "Explore vibrant school life through photos of activities, events,
            celebrations, creativity, and joyful learning moments."
          </p>
        </div>

        {/* IMAGE GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-[28px]
            mb-[60px]
            justify-items-center
          "
        >
          <GalleryImage src="/image_home/gallery1.png" />
          <GalleryImage src="/image_home/gallery2.png" />
          <GalleryImage src="/image_home/our_mission.png" />
          <GalleryImage src="/image_home/gallery4.png" />
        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <button
            className="
              w-[220px] sm:w-[250px]
              h-[48px]
              rounded-[60px]
              bg-[#F0942A]
              text-white
              text-[16px] sm:text-[18px]
              font-semibold
              font-poppins
              hover:opacity-90
              transition
            "
          >
            View Full Gallery
          </button>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;

/* IMAGE CARD */
const GalleryImage = ({ src }) => {
  return (
    <div
      className="
        w-full
        max-w-[323px]
        aspect-[323/315]
        rounded-[12px]
        overflow-hidden
        shadow-[0_0_14px_rgba(174,174,174,0.25)]
      "
    >
      <img
        src={src}
        alt="Gallery"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
