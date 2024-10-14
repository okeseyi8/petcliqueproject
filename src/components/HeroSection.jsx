import { FaArrowRight } from 'react-icons/fa'
import { FaBookOpen } from 'react-icons/fa'
import heroimg from '../assets/heroimg.svg'
import paw from '../assets/paw.svg'
import paws from '../assets/paws.png'
export const HeroSecton = () => {
  return (
    <div className="">
      <div className="bg-[#75408C]  w-full flex flex-col justify-center items-center">
        <p className="md:w-[382px] h-12 rounded-[32px] px-8 py-3 bg-[#F1ECF4] text-[14px] font-satoshi font-medium ">
          Pet Clique: A Paws-itive Difference in Pet Care 💯{' '}
        </p>
        <h1 className="md:w-[748px] font-general font-bold text-white  text-center text-[69px] my-3">
          Exceptional <span className="text-[#FFD700]">Pet Care</span> Tailored
          for You
        </h1>
        <p className="md:w-[748px] text-[#E0DFE1] font-normal font-satoshi text-center">
          At Pet Clique, we go beyond pet care. From pet nannies to veterinary
          services, your pet's happiness is our priority. Travel worry-free
          knowing your furry friend is in trusted hands. Join us today for a
          paw-sitively extraordinary experience!
        </p>
        <div className="flex gap-5 my-5">
          <button className="flex  font-satoshi font-medium text-[18px] justify-center gap-2 items-center bg-[#FFD700] w-[169px] h-[55px] rounded-[9px]">
            Get Started
            <FaArrowRight />
          </button>
          <button className="flex  font-satoshi font-medium text-[18px] justify-center gap-2 items-center border-[#C4C2C5] border-[0.8px] w-[169px] h-[55px] rounded-[9px] text-white">
            Learn More
            <FaBookOpen className="text-white" />
          </button>
        </div>
        <div className="relative w-full  flex justify-center   overflow-hidden">
          <img className="object-cover " src={heroimg} />
          <img src={paws} className="absolute  md:right-[320px]" />
          <img
            src={paws}
            className="absolute  md:left-[300px] md:bottom-[70px]"
          />
        </div>
      </div>
    </div>
  )
}
