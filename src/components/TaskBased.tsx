import { styles } from "./styles";
import taskBased from "../images/services/Task-based.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { IoDiamondSharp } from 'react-icons/io5';




const TaskBased = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
       <div className={` ${styles.paddingY} ${styles.paddingX} mx-auto h-auto w-full   `}>
            <div className="flex flex-wrap items-center justify-center ">
                <div
                    className={` py-4 w-[500px] h-auto  m-auto `}
                >
                    <img src={taskBased} alt='socialmedia' className="shadow-xl shadow-black" />
                </div>

                <div
                    data-aos="fade-up"
                    className={`${styles.paddingY} `}>
                    <h1 className="lg:text-6xl text-2xl text-orange-500 font-bold">TASK-BASED SERVICES​</h1>
                    <h2 className="lg:text-4xl text-xl text-orange-400 font-bold">Boost Your Online Presence and Drive Engagement</h2>
                    <p className="lg:text-2xl text-lg font-semibold">
                        Hiring by-the-task basis can help small businesses save costs, <br /> improve their marketing efforts, achieve better  outcomes, <br /> and stay competitive in their respective markets. <br /> provides flexibility to businesses, <br />as they can engage with a professional marketer only <br />when they need specific tasks completed.
                    </p>
                </div>
            </div>
            <div>

                {/* pricing */}


                <section
                    data-aos="zoom-in-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className=" rounded-xl">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div className="underline decoration-orange-600 max-w-screen-md text-start mb-8 lg:mb-12">
                                <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-orange-500 ">Our Tasks offering</h2>
                            </div>
                            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                            <div
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                    className="flex flex-col mx-auto max-w-lg text-center text-orange-500  rounded-lg  shadow "
                                >
                                    <div className="group h-96 w-full [perspective:1000px]">
                                        <div className="relative h-full w-full rounded-xl transition-all bg-white duration-500 shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                            <div className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 flex flex-col items-center justify-center px-5">
                                                <div className="text-blue-500 my-5 "><IoDiamondSharp className="h-16 w-16"/></div>
                                                <h1 className="lg:text-4xl text-3xl font-bold text-orange-500 mb-5 ">SOCIAL MEDIA MANAGEMENT</h1>
                                            </div>
                                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] select-none">
                                                <div className="flex min-h-full flex-col items-center justify-center">
                                                    <h1 className="lg:text-2xl text-lg font-bold"> post | reels | stories | community management | social media consultation</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                    className="flex flex-col mx-auto max-w-lg text-center text-orange-500  rounded-lg  shadow "
                                >
                                    <div className="group h-96 w-full [perspective:1000px]">
                                        <div className="relative h-full w-full rounded-xl transition-all bg-white duration-500 shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                            <div className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 flex flex-col items-center justify-center px-5">
                                            <div className="text-gray-400 my-5 ">< IoDiamondSharp className="h-16 w-16"/></div>
                                                <h1 className="lg:text-4xl text-3xl font-bold text-orange-500 mb-5 ">SOCIAL MEDIA MARKETING </h1>
                                            </div>
                                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] select-none">
                                                <div className="flex min-h-full flex-col items-center justify-center ">
                                                    <h1 className="lg:text-2xl text-lg font-bold">Facebook ads | Instagram ads | google ads | LinkedIn ads</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                    className="flex flex-col mx-auto max-w-lg text-center text-orange-500  rounded-lg  shadow "
                                >
                                    <div className="group h-96 w-full [perspective:1000px]">
                                        <div className="relative h-full w-full rounded-xl transition-all bg-white duration-500 shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                            <div className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 flex flex-col items-center justify-center px-10">
                                            <div className="text-yellow-500 my-5 ">< IoDiamondSharp className="h-16 w-16"/></div>
                                                <h1 className="lg:text-4xl text-3xl font-bold text-orange-500 mb-5 ">BUSINESS CONSULTATION</h1>
                                            </div>
                                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] select-none">
                                                <div className="flex min-h-full flex-col items-center justify-center">
                                                    <h1 className="lg:text-2xl text-lg font-bold">Daily 1 hour consultation | industry expert consultation | 24/7 Text access with industry experts </h1>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    );
}
export default TaskBased;