import About from "../components/About";
import MobileSocials from "../components/MobileSocials";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import SocialMedia from "../components/SocialMedia";
import Offering from "../components/offering";
import TaskBased from "../components/TaskBased";
import Contact from "../components/contact";
import Scheduling from "../components/Scheduling";
import Banner2 from "../components/Banner2";
import FooterSocials from "../components/footerSocials";
import Footer from "../components/Footer";


const Home = () => {
    return(
        <>
          <Socials/>
          <Navbar/>  
          <MobileSocials/> 
          <div className='relative z-0 bg-primary'>
          <div className={`bg-[url('./assets/bg3.jpg')] w-[1024] h-auto bg-cover bg-no-repeat bg-center `}>
          <About/>
          {/* <Services/> */}
          <Offering/>
          </div>
          <div className={`bg-[url('./assets/bg3.jpg')] w-[1024] h-auto bg-cover bg-no-repeat bg-center `}>
          <SocialMedia/>
          <TaskBased/>
          </div>
          {/* <HireMarketingManager/> */}
          <Banner2/>
          
          <div className={`bg-[url('./assets/bg3.jpg')] w-[1024] h-auto bg-cover bg-no-repeat bg-center `}>
          <Scheduling/>
          <Contact/>
          </div>
          <FooterSocials/>
          <Footer/>
          </div>
        </>
    );
}
export default Home;