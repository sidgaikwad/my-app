import MobileSocials from "../components/MobileSocials";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import SocialMedia from "../components/SocialMedia";
import Offering from "../components/offering";
import Contact from "../components/contact";
import Scheduling from "../components/Scheduling";
import FooterSocials from "../components/footerSocials";
import Footer from "../components/Footer";
import Header from "../components/Services/Header";



const Services = () => {
    return(
        <>
          <Socials/>
          <Navbar/>  
          <MobileSocials/> 
          <div className={`bg-[url('./assets/bg3.jpg')] bg-cover bg-no-repeat bg-center`}>
          <Header/>
          <Offering/>
          </div>
          <SocialMedia/>
          <div className={`bg-[url('./assets/bg3.jpg')] bg-cover bg-no-repeat bg-center`}>
          <Scheduling/>
          <Contact/>
          </div>
          <FooterSocials/>
          <Footer/>
        </>
    );
}
export default Services;