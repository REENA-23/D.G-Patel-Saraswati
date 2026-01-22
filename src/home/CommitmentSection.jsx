const CommitmentSection = () => {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full  px-[6%] pt-[100px] text-center">

        {/* HEADING */}
        <h2 className="text-[40px] font-semibold text-[#F0942A] font-poppins mb-6">
          Our Commitment
        </h2>

        {/* SUBHEADING */}
        <p className="text-[28px] text-[#515151] font-akaya mb-6 leading-[46px]">
          Dedicated to Nurturing Every Girl&apos;s Potential
        </p>

        {/* DESCRIPTION */}
        <p
          className="
            max-w-[1025px]
            mx-auto
            text-[18px]
            font-medium
            font-poppins
            text-[#8D8D8D]
            leading-[32px]
            tracking-[0.02em]
          "
        >
          At Shri D.G. Patel Saraswati Prathmik Kanya Vidya Mandir, we are
          committed to building not just educated students—but confident,
          responsible, and empowered young girls. Our commitments reflect our
          passion for all-round growth, safety, and academic excellence.
        </p>

      </div>
    </section>
  );
};

export default CommitmentSection;
