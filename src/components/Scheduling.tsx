import { styles } from "./styles";
import socialmedia from '../images/socialmedia.jpg'
import { Link } from "react-router-dom";

const Scheduling = () => {
    return (
        <div className={`${styles.paddingX} ${styles.paddingY} h-auto w-full container mx-auto`}>
            <div className="flex flex-wrap items-center justify-center">

                <div
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    className={`${styles.paddingY}  `}>
                    <h1 className="text-3xl sm:text-4xl text-orange-600 font-extrabold ">
                        Complimentary 30 minutes 1 on 1 Digital <br /> Marketing Strategy with Stephanie Perrault.
                    </h1>
                    <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                        AssistaNova can help you grow and scale your
                        business during times of economic<br /> uncertainty.
                    </p>

                    <div className="flex items-center mt-8 text-black">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-14 h-14 text-orange-600 fill-orange-500 ">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div className=" ml-4 text-4xl tracking-wide font-semibold w-40">
                            Address
                        </div>
                    </div>
                    <div className="flex  ml-16 text-lg  font-semibold w-56"> Hiranandani Medows, thane , mumbai - 400610
                    </div>

                    <div className="flex items-center mt-4 text-black">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-14 h-14 text-orange-600 fill-orange-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div className="ml-4 text-4xl tracking-wide font-semibold w-40">
                            Phone
                        </div>
                    </div>
                    <div className="flex  ml-16 text-lg  font-semibold w-40">+91 8291318921
                    </div>

                    <div className="flex items-center mt-2 text-black">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-14 h-14 text-orange-600 fill-orange-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div className="ml-4 text-4xl tracking-wide font-semibold w-40">
                            Gmail
                        </div>
                    </div>
                    <div className="flex  ml-16 text-lg  font-semibold w-40"> digitalloopmrkagency@gmail.com
                    </div>
                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <Link to="https://calendly.com/digitalloopmrkagency/consultation"
                    rel="noreferrer noopener" 
                    target="_blank"
                    className="mt-4 text-white bg-orange-600 hover:bg-orange-300 focus:ring-4 focus:ring-orange-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center shadow-xl shadow-black  ">SCHEDULE MY 30 MINUTES FREE CONSULTATION</Link>
                    </div>
                </div>

                <div
                    className={` py-4 w-[400px] h-auto  m-auto `}
                >
                    <img
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        src={socialmedia} alt='socialmedia' />
                </div>
                
                
            </div>
        </div>
    );
}
export default Scheduling;