import MobileSocials from "../components/MobileSocials";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import Contact from "../components/contact";
import Scheduling from "../components/Scheduling";
import FooterSocials from "../components/footerSocials";
import Footer from "../components/Footer";
import Header from "../components/CaseStudy/Header";



const CaseStudy = () => {
    return(
        <>
          <Socials/>
          <Navbar/>  
          <MobileSocials/> 
          <div className='relative z-0 bg-primary'>
          <div className={`bg-[url('./assets/bg3.jpg')] bg-cover bg-no-repeat bg-center`}>
          <Header/>
          <Scheduling/>
          <Contact/>
          </div>
          <FooterSocials/>
          <Footer/>
          </div>
        </>
    );
}
export default CaseStudy;