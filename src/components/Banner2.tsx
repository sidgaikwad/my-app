import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner2 = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <section   className="bg-pink-50">
                <div className="mx-auto text-center mb-8 lg:mb-12 py-6 bg-orange-600 ">
          <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-black ">Digital Loop Marketing</h2>
          <p className='mb-4 text-4xl tracking-tight font-extrabold text-white '>
            Work on Your Terms
          </p>
      </div>
  {/* <div 
  data-aos="zoom-in-up"
  data-aos-offset="100"
  data-aos-easing="ease-in-sine"
  className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      
      <div
      className="space-y-8 lg:grid lg:grid-cols-3  xl:gap-10 lg:space-y-0">
          <div 
          data-aos="fade-right"
          data-aos-offset="200"
         data-aos-easing="ease-in-sine"
          className="flex flex-col mx-auto py-8 px-8  max-w-lg text-center text-orange-500 bg-white rounded-lg border border-orange-600 shadow   ">
            <div  className='mx-10 flex justify-center items-center'>
            <img src={box} alt="" className='h-24 w-24 mb-10' />
            </div>
              <h3 className="mb-4 text-4xl font-bold">Packages</h3>
              
          </div>
          <div 
          data-aos="fade-right"
          data-aos-offset="200"
         data-aos-easing="ease-in-sine"
          className="flex flex-col mx-auto py-8 px-8  max-w-lg text-center text-orange-500 bg-white rounded-lg border border-orange-600 shadow   ">
            <div  className='mx-10 flex justify-center items-center'>
            <img src={box} alt="" className='h-24 w-24 mb-10' />
            </div>
              <h3 className="mb-4 text-4xl font-bold">Packages</h3>
              
          </div>
          
          <div 
          data-aos="fade-right"
          data-aos-offset="200"
         data-aos-easing="ease-in-sine"
          className="flex flex-col mx-auto py-8 px-8  max-w-lg text-center text-orange-500 bg-white rounded-lg border border-orange-600 shadow   ">
            <div  className='mx-10 flex justify-center items-center'>
            <img src={box} alt="" className='h-24 w-24 mb-10' />
            </div>
              <h3 className="mb-4 text-4xl font-bold">Packages</h3>
              
          </div>
      </div>
  </div> */}
</section>
    );
}
export default Banner2;