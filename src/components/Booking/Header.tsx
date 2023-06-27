import { styles } from "../styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

const Header = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <section >
            <main className={`${styles.paddingX} mx-auto ${styles.paddingY}flex flex-col justify-center items-center h-auto w-full`}>
            <div 
                data-aos="fade-down"
                className={`${styles.paddingY}`}>
            <h1 className="lg:text-4xl text-2xl text-orange-500 font-bold  mb-12 text-center underline">Welcome to our consultancy's booking page!</h1>
                    <p className="lg:text-3xl text-lg font-semibold py-4 ">
                    At Digital Loop Marketing, We have designed a seamless and user-friendly platform to make scheduling appointments a breeze. Our intuitive interface allows you to effortlessly browse through our wide range of services and select the one that best suits your needs. With a dynamic availability calendar, you can easily find a convenient date and time for your consultation. We believe in personalization, so you have the flexibility to customize your appointment, specifying the duration, and specific topics you'd like to discuss. Once you've made your selection, you'll receive an instant confirmation with all the details, and automated reminders will ensure you never miss your appointment. Experience a hassle-free booking process and get ready to embark on a journey of professional guidance and expertise.
                    </p>
                    </div>
            </main>
        </section>
    );
}
export default Header;
