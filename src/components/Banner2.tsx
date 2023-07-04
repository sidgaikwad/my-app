import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner2 = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="mx-auto text-center mb-8 lg:mb-12 py-6 bg-orange-600 ">
      <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-black ">Digital Loop Marketing</h2>
      <p className='mb-4 text-4xl tracking-tight font-extrabold text-white '>
        Work on Your Terms
      </p>
    </div>
  );
}
export default Banner2;