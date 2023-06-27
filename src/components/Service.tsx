import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import styles from "../styles";

const Services = () => {
    return (
        <>
            <div className={`${styles.xPaddings}  flex flex-row gap-1 items-center justify-center `}>
                <div className={` flex items-center justify-center gap-6  w-full flex-wrap `} >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link to="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-orange-600 dark:border-gray-700 dark:hover:bg-orange-400">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Social Media Strategy Development:</h5>
                            <p className="font-normal text-gray-700 dark:text-white">Our expert team will work closely with you to develop a tailored social media strategy that aligns with your business goals and target audience. We'll identify the most effective platforms, content themes, and posting schedules to drive engagement and achieve your objectives.</p>
                        </Link>

                    </motion.button >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link to="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-orange-600 dark:border-gray-700 dark:hover:bg-orange-400">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Account Setup and Optimization:</h5>
                            <p className="font-normal text-gray-700 dark:text-white">We'll create or optimize your social media accounts across various platforms,ensuring they are fully optimized with compelling visuals, engaging descriptions, and relevant keywords. This will help attract your target audience and establish a cohesive brand presence.</p>
                        </Link>
                    </motion.button >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link to="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-orange-600 dark:border-gray-700 dark:hover:bg-orange-400">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Content Creation and Curation:</h5>
                            <p className="font-normal text-gray-700 dark:text-white">Our team of skilled content creators will develop high-quality, engaging content that resonates with your audience. From eye-catching graphics to informative videos and captivating copy, we'll craft a variety of content types to keep your social media profiles active and vibrant.</p>
                        </Link>
                    </motion.button >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link to="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-orange-600 dark:border-gray-700 dark:hover:bg-orange-400">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Social Media Management:</h5>
                            <p className="font-normal text-gray-700 dark:text-white">We'll handle the day-to-day management of your social media accounts, including content scheduling, community engagement, and reputation management. Our dedicated team will monitor comments, messages, and reviews, ensuring timely responses and maintaining a positive online presence.</p>
                        </Link>
                    </motion.button >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link to="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-orange-600 dark:border-gray-700 dark:hover:bg-orange-400">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Performance Tracking and Analytics:</h5>
                            <p className="font-normal text-gray-700 dark:text-white">We'll provide detailed reports on the performance of your social media campaigns, including key metrics such as reach, engagement, website traffic, and conversions. These insights will help us refine our strategies and continuously optimize your social media presence for maximum impact.</p>
                        </Link>
                    </motion.button >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link to="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-orange-600 dark:border-gray-700 dark:hover:bg-orange-400">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Ad Campaign Management:</h5>
                            <p className="font-normal text-gray-700 dark:text-white">As part of our package, we'll create and manage targeted social media ad campaigns to reach a wider audience, generate leads, and drive conversions. We'll conduct thorough audience research, develop compelling ad creatives, and optimize campaigns to maximize your return on investment.</p>
                        </Link>
                    </motion.button >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link to="#" className="block max-w-sm lg:p-6 p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-orange-600 dark:border-gray-700 dark:hover:bg-orange-400">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Buisness and Brand Consultation:</h5>
                            <p className="font-normal text-gray-700 dark:text-white hidden lg:block hover:block">Our team is committed to your success. We'll provide ongoing support, guidance, and consultation to keep you informed about industry trends, recommend strategies for growth, and ensure your social media presence stays ahead of the curve.</p>
                        </Link>
                    </motion.button >
                </div>
                <div className='flex flex-col justify-center items-center '>
                <div className='w-1 sm:h-[1000px] h-[2700px] bg-gradient-to-t from-orange-500' />
                    <div className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-orange-600"></span>
            </div>
                    
                </div>
            </div>
        </>
    );
}

export default Services;