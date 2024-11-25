
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
export const Footer = () => {
  return (
    <div className="w-full h-full relative flex flex-col items-center z-40">
      <div className="w-11/12 flex flex-col items-center">
        <h1 className=" w-full font-general font-bold text-[249px] text-center break-words">
          PetClique
        </h1>
      </div>
      <button className="lg:w-10/12 border border-[#2C252F] py-[14px] font-satoshi font-medium text-[32px] rounded-[13px]">
        Get Started
      </button>
      <div className="w-7/12 mt-[80px]">
        <ul className="flex justify-around items-center">
          <li className="font-semibold font-general  text-[23px]">About Us</li>
          <li className="font-semibold font-general  text-[23px] ">
            Testimonials
          </li>
          <li className="font-semibold font-general  text-[23px] ">Services</li>
          <li className="font-semibold font-general  text-[23px] ">Blog</li>
          
        </ul>
      </div>
      <div className="w-2/12  absolute bottom-0">
        <ul className="flex  justify-around">
            <li><FaFacebookF/></li>
            <li><IoLogoInstagram/></li>
            <li><FaXTwitter /></li>
            <li><FaTelegramPlane /></li>
        </ul>
      </div>

      <div className="w-full  absolute -bottom-20">
        <ul className="flex  justify-around font-satoshi font-medium text-[18px] leading-7 pt-6  border-t-2">
            <li>2023 All rights reserved</li>
            <li>helloservices@petclique.org</li>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
           
        </ul>
        <div className="flex  justify-around font-satoshi font-medium text-[18px] leading-7 pt-5  -mb-10">Developed by: Coded_Kvng</div>
      </div>
      
    </div>
  )
}
