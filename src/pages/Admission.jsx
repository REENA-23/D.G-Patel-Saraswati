import Header from "../home/Header";
import AdmissionProcess from "../admission/AdmissionProcess";
import Footer from "../home/Footer";
import RequiredDocumentSection from "../admission/RequiredDocumentSection";
import AdmissionForm from "../admission/AdmissionForm";

function Admission() {
  return (
    <>
    <Header/>
    <AdmissionProcess/>
    <RequiredDocumentSection/>
    <AdmissionForm/>
    <Footer/>
    
      
    </>
  );
}

export default Admission;