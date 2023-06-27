import { styles } from "./styles";
import taskBased from "../images/services/Task-based.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const TaskBased = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={`${styles.paddingX} ${styles.paddingY} h-auto w-full container mx-auto`}>
            <div className="flex flex-wrap items-center justify-center">
                <div
                    data-aos="fade-right"
                    className={` py-4 w-[400px] h-auto mx-5 m-auto `}
                >
                    <img src={taskBased} alt='socialmedia' />
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
                                <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-orange-500 ">#Our Tasks offering</h2>
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
                                                <h1 className="lg:text-5xl text-4xl font-bold text-orange-500 mb-5 ">SEO</h1>
                                                <p className="lg:text-4xl text-3xl font-bold text-orange-500 ">
                                                    Search Engine Optimization
                                                </p>
                                            </div>
                                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                <div className="flex min-h-full flex-col items-center justify-center">
                                                    <h1 className="lg:text-2xl text-lg font-bold">Article Placement l Guest appearance on podcast l Crisis management l TV appearance placement l Media Kit l Press Releasable l Pitch Deck l Event Management l Influencer Marketing l Community Relations.</h1>
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
                                                <h1 className="lg:text-5xl text-4xl font-bold text-orange-500 mb-5 ">Public Relation Management</h1>
                                            </div>
                                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                <div className="flex min-h-full flex-col items-center justify-center">
                                                    <h1 className="lg:text-2xl text-lg font-bold">Article Placement l Guest appearance on podcast l Crisis management l TV appearance placement l Media Kit l Press Releasable l Pitch Deck l Event Management l Influencer Marketing l Community Relations.</h1>
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
                                                <h1 className="lg:text-5xl text-4xl font-bold text-orange-500 mb-5 ">Social Media Management</h1>
                                            </div>
                                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                <div className="flex min-h-full flex-col items-center justify-center">
                                                    <h1 className="lg:text-2xl text-lg font-bold">Posts l Reels l Stories l Community Management l Social Media Consultation. </h1>

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