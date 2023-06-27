import {useEffect} from 'react'
import { Link } from "react-router-dom";
import banner from '../images/banner.jpg'
import { styles } from "./styles";
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';
import SOcialMediaDevelopment from '../images/services/SocialMediaDevelopment.jpg'
import SOcialMediaAccount from '../images/services/SocialMediaAccount .jpg'
import ContentCreation from '../images/services/ContentCreation.jpg'
import SocialMediaManagement from '../images/services/SocialMediaManagement.jpg'
import CampaignManagement from '../images/services/CampaignManagement.jpeg'
import BrandConsultancy from '../images/services/BrandConsultancy.jpg'
import PerformanceManagementSystem from '../images/services/PerformanceManagementSystem.jpg'

const Offering = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
            <div 
            data-aos="zoom-in-down"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine"
            className={`${styles.paddingX} h-auto w-full    `}>
                    <section className="bg-transparent rounded-xl ">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                            <div className=" max-w-screen-md text-left underline decoration-orange-600 mb-8 lg:mb-12">
                                <h2 className="mb-1 text-6xl tracking-tight font-extrabold text-orange-500 ">Services</h2>
                                <div className='mb-4 w-56 p-1 h-1 bg-gradient-to-b from-slate-500'></div>
                            </div>
                            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">


                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex flex-col  mx-auto  max-w-sm text-center text-orange-500 bg-orange-100 rounded-lg border border-orange-600 shadow-2xl  shadow-black  ">
                                    <Link to="/Booking">
                                        <img className="rounded-t-lg w-[1024px] lg:h-[225px] h-[175px]" src={SOcialMediaDevelopment} alt="" />
                                    </Link>
                                    <div>
                                        <Link to="/Booking" className="block max-w-sm p-6  rounded-b-lg shadow bg-orange-500 border-orange-700 ">
                                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white underline">Social Media Strategy Development</h5>
                                            <p className="font-normal text-gray-700 dark:text-white ">Our expert team will work closely with you to develop a tailored social media strategy that aligns with your business goals and target audience. We'll identify the most effective platforms, content themes, and posting schedules to drive engagement and achieve your objectives.</p>
                                        </Link>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex flex-col  mx-auto max-w-sm text-center text-orange-500 bg-orange-100 rounded-lg border border-orange-600 shadow-2xl  shadow-black   ">
                                    <Link to="/Booking">
                                        <img className="rounded-t-lg w-[1024px] lg:h-[225px] h-[175px]" src={SOcialMediaAccount} alt="" />
                                    </Link>
                                    <div>
                                        <Link to="#" className="block max-w-sm p-6  rounded-b-lg shadow bg-orange-500 border-orange-700 ">
                                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 underline dark:text-white">Account Setup and Optimization:</h5>
                                            <p className="font-normal text-gray-700 dark:text-white">We'll create or optimize your social media accounts across various platforms,ensuring they are fully optimized with compelling visuals, engaging descriptions, and relevant keywords. This will help attract your target audience and establish a cohesive brand presence.</p>
                                        </Link>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex flex-col  mx-auto max-w-sm text-center text-orange-500 bg-orange-100 rounded-lg border border-orange-600 shadow-2xl  shadow-black  ">
                                    <Link to="#">
                                        <img className="rounded-t-lg w-[1024px] lg:h-[225px] h-[175px]" src={ContentCreation} alt="" />
                                    </Link>
                                    <div>
                                        <Link to="#" className="block max-w-sm p-6  rounded-b-lg shadow bg-orange-500 border-orange-700 ">
                                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 underline dark:text-white">Content Creation and Curation:</h5>
                                            <p className="font-normal text-gray-700 dark:text-white">Our team of skilled content creators will develop high-quality, engaging content that resonates with your audience. From eye-catching graphics to informative videos and captivating copy, we'll craft a variety of content types to keep your social media profiles active and vibrant.</p>
                                        </Link>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex flex-col  mx-auto max-w-sm text-center text-orange-500 bg-orange-100 rounded-lg border border-orange-600 shadow-2xl  shadow-black ">
                                    <Link to="#">
                                        <img className="rounded-t-lg  w-[1024px] lg:h-[225px] h-[175px]" src={SocialMediaManagement} alt="" />
                                    </Link>
                                    <div>
                                        <Link to="#" className="block max-w-sm p-6  rounded-b-lg shadow bg-orange-500 border-orange-700 ">
                                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 underline dark:text-white">Social Media Management:</h5>
                                            <p className="font-normal text-gray-700 dark:text-white">We'll handle the day-to-day management of your social media accounts, including content scheduling, community engagement, and reputation management. Our dedicated team will monitor comments, messages, and reviews, ensuring timely responses and maintaining a positive online presence.</p>
                                        </Link>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex flex-col  mx-auto max-w-sm text-center text-orange-500 bg-orange-100 rounded-lg border border-orange-600 shadow-2xl  shadow-black  ">
                                    <Link to="#">
                                        <img className="rounded-t-lg  w-[1024px] lg:h-[225px] h-[175px]" src={PerformanceManagementSystem} alt="" />
                                    </Link>
                                    <div>
                                        <Link to="#" className="block max-w-sm p-6  rounded-b-lg shadow bg-orange-500 border-orange-700 ">
                                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 underline
                                        dark:text-white">Performance Tracking and Analytics:</h5>
                                            <p className="font-normal text-gray-700 dark:text-white">We'll provide detailed reports on the performance of your social media campaigns, including key metrics such as reach, engagement, website traffic, and conversions. These insights will help us refine our strategies and continuously optimize your social media presence for maximum impact.</p>
                                        </Link>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex flex-col  mx-auto max-w-sm text-center text-orange-500 bg-orange-100 rounded-lg border border-orange-600 shadow-2xl  shadow-black  ">
                                    <Link to="#">
                                        <img className="rounded-t-lg  w-[1024px] lg:h-[225px] h-[175px]" src={CampaignManagement} alt="" />
                                    </Link>
                                    <div>
                                        <Link to="#" className="block max-w-sm p-6  rounded-b-lg shadow bg-orange-500 border-orange-700 ">
                                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 underline dark:text-white">Ad Campaign Management:</h5>
                                            <p className="font-normal text-gray-700 dark:text-white">As part of our package, we'll create and manage targeted social media ad campaigns to reach a wider audience, generate leads, and drive conversions. We'll conduct thorough audience research, develop compelling ad creatives, and optimize campaigns to maximize your return on investment.</p>
                                        </Link>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex flex-col  mx-auto max-w-sm text-center text-orange-500 bg-orange-100 rounded-lg border border-orange-600 shadow-2xl  shadow-black  ">
                                    <Link to="#">
                                        <img className="rounded-t-lg  w-[1024px] lg:h-[225px] h-[175px]" src={BrandConsultancy} alt="" />
                                    </Link>
                                    <div>
                                        <Link to="#" className="block max-w-sm p-6  rounded-b-lg shadow bg-orange-500 border-orange-700 ">
                                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white underline">Buisness and Brand Consultation:</h5>
                                            <p className="font-normal text-gray-700 dark:text-white">Our team is committed to your success. We'll provide ongoing support, guidance, and consultation to keep you informed about industry trends, recommend strategies for growth, and ensure your social media presence stays ahead of the curve.</p>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                    </section>
                </div>
    );
}
export default Offering;