import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

const Contact = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <section
        data-aos="fade-up"
        className=" bg-transparent">
        <div className="lg:mx-80 h-1 w-80 font-bold bg-gradient-to-l from-orange-500 rounded"></div>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center  text-orange-500">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-medium text-center text-black text-2xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="#" className="space-y-8">
                <div>
                    <label typeof="email" className="block mb-2 text-md font-medium  text-black">Your email</label>
                    <input type="email" id="email" className="  border  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white border-gray-600 placeholder-black  focus:ring-secondary-500  shadow-sm-light shadow-lg shadow-black" placeholder="name@gmail.com" required/>
                </div>
                <div>
                    <label typeof="subject" className="block mb-2 text-md font-medium text-black">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full border  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  bg-white border-gray-600 placeholder-black  focus:ring-secondary-500  shadow-lg shadow-black" placeholder="Let us know how we can help you " required />
                </div>
                <div className="sm:col-span-2">
                    <label typeof="message" className="block mb-2 text-sm font-medium text-black">Your message</label>
                    <textarea id="message"  className="block p-2.5 w-full text-sm  border  text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500  bg-white border-gray-600 placeholder-black  focus:ring-secondary-500  shadow-lg shadow-black" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black  bg-orange-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-xl shadow-black">Send message</button>
            </form>
        </div>
        <div className="my-3 relative left-0 top-0 lg:ml-[950px]   h-1 w-80 font-bold bg-gradient-to-r from-orange-500 rounded"></div>
      </section>
    );
    }
    export default Contact;