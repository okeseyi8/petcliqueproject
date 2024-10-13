import { FaArrowRight } from 'react-icons/fa'
export const Navbar = () => {
  return (
    <div className="w-screen">
      <div className="w-full time-offer flex justify-center items-center h-16 bg-[#120A15]">
        <h1 className="font-satoshi font-normal text-[18px] text-white">
          {' '}
          Limited-Time Welcome Offer: $30 Off:{' '}
          <span className="font-satoshi font-normal text-[18px] text-[#FFD700]">
            {' '}
            2:33:24
          </span>{' '}
        </h1>
      </div>
      <div className="main-header w-full flex justify-around px items-center main-header h-[119px] bg-[#75408C] ">
        <div className="w-1/12  font-bold font-general text-[23px] text-white">
          PetClique
        </div>
        <div className="w-7/12">
          <ul className="flex justify-around items-center">
            <li className="font-medium font-satoshi text-[#E0DFE1] text-[18px]">
              About Us
            </li>
            <li className="font-medium font-satoshi text-[#E0DFE1] text-[18px] ">
              Testimonials
            </li>
            <li className="font-medium font-satoshi text-[#E0DFE1] text-[18px] ">
              Services
            </li>
            <li className="font-medium font-satoshi text-[#E0DFE1] text-[18px] ">
              Blogs
            </li>
            <li className="font-medium font-satoshi text-[#E0DFE1] text-[18px] ">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <button className="flex  font-satoshi font-medium text-[18px] justify-center gap-2 items-center bg-[#FFD700] w-[169px] h-[55px] rounded-[9px]">
            Get Started
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}
