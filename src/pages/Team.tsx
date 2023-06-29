import MobileSocials from "../components/MobileSocials";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import Contact from "../components/contact";
import Scheduling from "../components/Scheduling";
import FooterSocials from "../components/footerSocials";
import Footer from "../components/Footer";
import TeamMembers  from "../components/Team/TeamMembers";
import Banner2 from "../components/Banner2";



const Team = () => {
    return(
        <>
          <Socials/>
          <Navbar/>  
          <MobileSocials/>
          <div className={`bg-[url('./assets/bg3.jpg')] bg-cover bg-no-repeat bg-center`}> 
          <TeamMembers/>
          <Banner2/>
          <Scheduling/>
          <Contact/>
          </div>
          <FooterSocials/>
          <Footer/>
        </>
    );
}
export default Team;