import { styles } from "../styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

const Header = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <section className="bg-white">
            <main className={`${styles.paddingX} mx-auto ${styles.paddingY}flex flex-col justify-center items-center h-auto w-full`}>
            <div 
                data-aos="fade-down"
                className={`${styles.paddingY}`}>
            <h1 className="lg:text-6xl text-2xl text-orange-500 font-bold text-center mb-12">Have your hastle-free marketing experience</h1>
                    <h2 className="lg:text-5xl text-2xl text-orange-500 font-bold text-center py-4">With Us</h2>
                    <p className="lg:text-3xl text-lg font-semibold py-4 ">
                    We'll help you harness the power of social media platforms to connect with your audience, build brand loyalty, and drive meaningful interactions. Our social media experts will develop and execute  a customized strategy that aligns with your business objectives.
                    </p>
                    <p className="lg:text-3xl text-lg font-semibold py-4 ">
                    Our team of experts leverages the power of digital channels to create impactful campaigns that increase brand visibility, attract qualified leads, and drive conversions. From search engine optimization (SEO) to social media marketing, we have you covered.
                    </p>
                    <p className="lg:text-3xl text-lg font-semibold py-4 ">
                    we believe that successful marketing is a blend of art and science. 
                    We combine creativity and data-driven insights to develop tailored 
                    strategies that align with your business goals and resonate with your 
                    target audience. Whether you're a startup looking to establish 
                    your brand or an established company aiming to reach new heights, we've got you covered.
                    </p>
                    <p className="lg:text-3xl text-lg font-semibold py-4 ">
                    Engaging and valuable content is the backbone of any successful marketing strategy. Our team of skilled writers and content strategists will create captivating content that tells your brand story, educates your audience, and drives engagement.
                    </p>
                    <h2 className="lg:text-4xl text-2xl text-orange-500 font-bold text-left  py-4">Our Business Consultation Services:</h2>
                    <div className="flex flex-col justify-center items-center lg:mx-24 mx-7">
                    <ol className="lg:text-2xl text-lg font-semibold py-4 list-decimal ">
                        <li className="py-4">
                        Marketing Strategy Development: We'll help you define a clear and compelling marketing strategy that sets the direction for your business. Our consultants will conduct thorough market research, identify your unique selling propositions, and develop a comprehensive plan to reach your target audience effectively.
                        </li>
                        <li className="py-4" >
                        Customized Solutions: We don't believe in one-size-fits-all approaches. We take the time to understand your business, industry, and target audience to develop customized marketing solutions that align with your unique goals and challenges.
                        </li>
                        <li className="py-4" >
                        Market Analysis and Competitor Research: Understanding your market and competition is crucial for success. Our team will conduct in-depth market analysis and competitor research to identify opportunities, assess market trends, and gain a competitive edge. We'll provide actionable insights to help you make informed decisions and stay ahead of the competition.
                        </li>
                        <li className="py-4" >
                        Branding and Positioning: Building a strong and differentiated brand is key to standing out in a crowded marketplace. Our consultants will work with you to develop a compelling brand identity, positioning your business uniquely in the minds of your customers. We'll assist you in crafting a consistent brand message that communicates your values, builds trust, and fosters long-term customer loyalty.
                        </li>
                        <li className="py-4" >
                        Marketing Plan Development: A well-defined marketing plan is essential for executing your strategies effectively. Our consultants will help you create a detailed marketing plan that outlines specific goals, target audience reach, key messages, and channels to be utilized. We'll provide a clear roadmap for implementing your marketing initiatives and monitor progress along the way.
                        </li>
                        <li className="py-4" >
                        Marketing Training and Workshops: We offer training sessions and workshops tailored to your specific needs. Our consultants can provide hands-on guidance on various marketing topics, empowering your team with the knowledge and skills necessary to implement effective marketing strategies independently.
                        </li>
                    </ol>
                    </div>
                    
                    <h2 className="lg:text-5xl text-2xl text-orange-500 font-bold text-left underline py-4">Why Choose Us?</h2>
                    <div className="flex flex-col justify-center items-center lg:mx-24 mx-7">
                    <ol className="lg:text-2xl text-lg font-semibold py-4 list-disc ">
                        <li className="py-4" >
                        Extensive Industry Experience: Our business consultants bring years of industry experience across diverse sectors. We've worked with businesses of all sizes, from startups to multinational corporations, delivering exceptional results and driving business growth.
                        </li>
                        <li className="py-4" >
                        Tailored Solutions: We understand that every business is unique. Our solutions are customized to address your specific challenges and capitalize on your opportunities. We'll develop strategies that are aligned with your business objectives, budget, and timeline.
                        </li>
                        <li className="py-4" >
                        Results-Driven Approach: Our focus is on delivering tangible results. We measure success by the impact we make on your business, whether it's increased brand awareness, higher customer engagement, or improved sales and revenue.
                        </li>
                        <li className="py-4" >
                        Collaborative Partnership: We believe in building long-term partnerships based on trust, transparency, and open communication. Our consultants will work closely with you, becoming an extension of your team, and providing ongoing support and guidance as your business evolves.
                        </li>
                    </ol>
                    </div>
                    </div>
            </main>
        </section>
    );
}
export default Header;
