import Header from "../home/Header";
import Slider from "../home/Slider";
import MissionSection from "../home/MissionSection";
import CommitmentSection from "../home/CommitmentSection";
import VisionSection from "../home/VisionSection";
import AcademicCalendarSection from "../home/AcademicCalendarSection";
import GallerySection from "../home/GallerySection";
import InquirySection from "../home/INquirySection";
import Footer from "../home/Footer";



function Home() {
  return (
    <>
      <Header />
      <Slider/>
      <MissionSection/>
      <CommitmentSection/>
      <VisionSection/>
      <AcademicCalendarSection/>
      <GallerySection/>
      <InquirySection/>
      <Footer/>
    </>
  );
}

export default Home;