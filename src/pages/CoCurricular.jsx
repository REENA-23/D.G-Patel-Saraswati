import Header from "../home/Header";
import Footer from "../home/Footer";
import AcademicAchievementSection from "../academic/AcademicAchievementSection";
import GallerySection from "../home/GallerySection";
import CoCurricularSection from "../cocurricular/CoCurricularSection";
import InquirySection from "../home/INquirySection";

function CoCurricular() {
  return (
    <>
      <Header />
      <CoCurricularSection />
      <AcademicAchievementSection />
      <GallerySection />
      <InquirySection />
      <Footer />
    </>
  );
}

export default CoCurricular;
