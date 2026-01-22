import AcademicCulture from "../academic/AcademicCulture";
import Header from "../home/Header";
import Footer from "../home/Footer";
import InquirySection from "../home/INquirySection";
import GallerySection from "../home/GallerySection";
import OurTeamSection from "../about/OurTeamSection";
import AcademicAchievementSection from "../academic/AcademicAchievementSection";

function Academic() {
  return (
    <>
    <Header/>
    <AcademicCulture/>
    <AcademicAchievementSection/>
    <OurTeamSection/>
    <GallerySection/>
    <InquirySection/>
    <Footer/>

    
      
    </>
  );
}

export default Academic;