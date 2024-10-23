import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { FaBookOpen } from 'react-icons/fa'

import './App.css'
import { Navbar } from './components/Navbar'
import { HeroSecton } from './components/HeroSection'
import { Testimonial } from './components/testomonial'
import {Faq} from "./components/Faq"
import dog from './assets/dog.png'
import bigdog from './assets/bigdog.png'
import dots  from './assets/dots.png'

import dogtwo from './assets/dog2.png'
import dogthree from './assets/dog3.png'
import cardimg from './assets/cardimg1.png'
import cardimg2 from './assets/cardimg2.png'
import cardimg3 from './assets/cardimg3.png'
import cardimg4 from './assets/cardimg4.png'
import rightcircle from './assets/rightcircle.png'
import leftcircle from './assets/leftcircle.png'
import patternone from './assets/pattern1.png'
import patterntwo from './assets/pattern2.png'
function App() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSecton />
      <div className="w-full px-5 bg-[#FAF9FB] relative">
        <img src={rightcircle} className="absolute right-0 top-12 z-0 " />
        <img src={leftcircle} className="absolute left-0 -bottom-32 z-10 " />
        <div className="w-full flex flex-col lg:flex-row justify-center gap-3 py-16 z-20">
          <div className="lg:w-5/12 w-full z-20">
            <h4 className="col-span-2 font-general font-semibold text-[35px]">
              About Us
            </h4>
            <p className="font-normal font-satoshi text-[#49424b] break-words leading-7">
              For over a decade, Pet Clique has been dedicated to redefining the
              landscape of pet care, creating a haven where pets experience
              unwavering love, and pet owners find peace of mind.
              <br />
              <br />
              Our vision at Pet Clique is to cultivate a world where every pet
              flourishes in a nurturing, safe, and loving environment. From our
              pet care services to the expert veterinary attention endorsed by
              professionals, our goal is to ensure the happiness, health, and
              comfort of every furry friend entrusted to us.
              <br />
              <br />
              We aim to engage our community, advocating for pet wellness,
              education, and support. Pet Clique stands as a beacon of our
              passion for pets—a sanctuary where exceptional care meets
              unwavering dedication, creating a joyful and secure haven for our
              beloved furry friends.
            </p>
            <button className="flex my-4 font-satoshi font-medium text-[18px] justify-center gap-2 items-center bg-[#120A15] w-[169px] h-[55px] rounded-[9px] text-[#C4C2C5]">
              Learn More
              <FaArrowRight />
            </button>
          </div>
          <div className="lg:w-5/12 w-full z-20">
            <img src={dog} className="w-full" />
            <div className="flex flex-row ">
              <img src={dogtwo} className="w-6/12 pr-2 pt-4" />
              <img src={dogthree} className="w-6/12 pl-2 pt-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-5 bg-[#FAF9FB] relative">
        <div className="w-full flex flex-col lg:flex-row justify-around items-center px-16 pb-16">
          <div className=" lg:w-3/12  ">
            <h4 className="font-satoshi font-medium text-[18px]">
              HAPPY PETS SERVED
            </h4>
            <h2 className="font-general font-bold text-[55px]">10,000</h2>
            <p className="font-satoshi font-normal text-[18px]">
              At Pet Clique, we take immense pride in our legacy of serving over
              10,000 happy pets. Each tail wag, each purr, and every chirp
              represents a testament to our unwavering commitment to providing
              exceptional care.
            </p>
          </div>
          <div className=" lg:w-3/12  ">
            <h4 className="font-satoshi font-medium text-[18px]">
              CUSTOMER SATISFACTION
            </h4>
            <h2 className="font-general font-bold text-[55px]">95%</h2>
            <p className="font-satoshi font-normal text-[18px]">
              At Pet Clique, our commitment to excellence is reflected in our
              proud achievement of a 95% customer satisfaction rate. We take
              pride in going above and beyond to ensure every pet receives the
              utmost care.
            </p>
          </div>
          <div className=" lg:w-3/12 ">
            <h4 className="font-satoshi font-medium text-[18px]">
              SKILLED PET NANNIES AND VET DOCTORS
            </h4>
            <h2 className="font-general font-bold text-[55px]">100+</h2>
            <p className="font-satoshi font-normal text-[18px] ">
              Our team comprises over 100 skilled pet nannies, each dedicated to
              providing unparalleled care for your cherished companions. Paired
              with a network of qualified professional vet doctors.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-5 py-16 bg-white">
        <div className="w-full flex flex-col lg:flex-row justify-center px-16 lg:px-0">
          <h4 className="lg:w-5/12 font-general font-semibold text-[35px]">
            Our Tailored Services
          </h4>
          <p className="lg:w-5/12 font-satoshi font-normal text-[18px]">
            Discover unparalleled care with Pet Clique's tailored services. From
            attentive pet nannies to expert veterinary care, we cater to your
            pet's unique needs. Your pet's comfort and well-being are our top
            priorities.
          </p>
        </div>
        <div className="w-full relative flex flex-col lg:flex-row justify-center px-16 lg:px-0 mt-14 gap-3">
          <div className="relative w-full lg:w-7/12 h-[383px] bg-[#D421A4] bg-cover bg-center rounded-md p-4">
            <img
              src={cardimg}
              className="absolute hidden lg:flex z-10 bottom-0 right-0  rounded-md"
            />
            <img
              src={patternone}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute flex flex-col justify-between inset-0  top-0 bg-opacity-60 p-4">
              <div className="relative ">
                <h5 className="font-semibold text-[28px] font-general text-white ">
                  Pet Care Services
                </h5>

                <p className="font-satoshi w-full  lg:w-9/12 font-normal text-[18px] text-white pt-4">
                  Indulge your pet in luxury with our comprehensive pet care
                  services. From grooming to playtime, we prioritize your pet's
                  well-being, ensuring they feel loved and pampered.
                </p>
              </div>
              <button className="flex my-4 font-satoshi font-medium text-[18px] justify-center gap-2 items-center bg-[#120A15] w-[169px] h-[55px] rounded-[9px] text-[#C4C2C5]">
                Get Started
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="relative w-full lg:w-4/12 h-[383px] bg-[#9B20CF] bg-cover bg-center rounded-md p-4">
            <img
              src={cardimg3}
              className="absolute hidden lg:flex z-10 bottom-0 right-0"
            />
            <img
              src={patterntwo}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute flex flex-col justify-between inset-0  top-0 bg-opacity-60 p-4">
              <div className="relative ">
                <h5 className=" w-6/12 font-semibold text-[28px] font-general text-white z-40">
                  Pet Nanny Assistance
                </h5>

                <p className="font-satoshi w-full  lg:w-6/12 font-normal text-[18px] text-white pt-4">
                  Indulge your pet in luxury with our comprehensive pet care
                  services. From grooming to playtime, we prioritize your pet's
                  well-being, ensuring they feel loved and pampered.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative flex flex-col lg:flex-row justify-center px-16 lg:px-0 mt-4  gap-3 ">
          <div className="relative w-full lg:w-4/12 h-[383px] bg-[#CB4E20] bg-cover bg-center rounded-md p-4 ">
            <img
              src={cardimg2}
              className="absolute hidden lg:flex z-10 bottom-0 right-0"
            />
            <img
              src={patterntwo}
              className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="absolute flex flex-col justify-between inset-0  top-0 bg-opacity-60 p-4 z-50">
              <div className="relative ">
                <h5 className=" w-8/12 font-semibold text-[28px] font-general text-white z-40">
                  Veterinary Care
                </h5>

                <p className="font-satoshi w-full  lg:w-6/12 font-normal text-[18px] text-white pt-4 z-50">
                  Health is wealth, even for our four-legged friends. Our expert
                  veterinary care ensures your pet receives top-notch medical
                  attention, and healthy life for your beloved companion.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-7/12 h-[383px] bg-[#214CCF] bg-cover bg-center rounded-md p-4">
            <img
              src={cardimg4}
              className="absolute hidden lg:flex z-10 bottom-0 right-0"
            />
            <img
              src={patternone}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute flex flex-col justify-between inset-0  top-0 bg-opacity-60 p-4">
              <div className="relative z-50">
                <h5 className="font-semibold text-[28px] font-general text-white z-50 ">
                  Pet Care Services
                </h5>

                <p className="font-satoshi w-full  lg:w-9/12 font-normal text-[18px] text-white pt-4">
                  Indulge your pet in luxury with our comprehensive pet care
                  services. From grooming to playtime, we prioritize your pet's
                  well-being, ensuring they feel loved and pampered.
                </p>
              </div>
              <button className="flex  font-satoshi font-medium text-[18px] justify-center gap-2 items-center border-[#C4C2C5] border-[0.8px] w-[169px] h-[55px] rounded-[9px] text-white">
                Learn More
                <FaBookOpen className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="relative w-full flex  flex-col items-center pt-20 pb-[150px] bg-[#75408C]  ">
        <div className="w-10/12 flex flex-col items-center justify-center ">
          <div className="w-full flex flex-col justify-center">
            <h4 className="font-general font-semibold text-[53px] text-center text-white">
              What our clients say
            </h4>
            <p className="font-satoshi w-full   font-normal text-[18px] text-white pt-4 z-50 text-center">
              Discover the heartwarming tales of pet owners who entrusted their
              beloved companions to Pet Clique. Read their stories and
              experiences, and find out why they trust us to provide exceptional
              care for their furry friends.
            </p>
          </div>
        </div>
        <Testimonial name="Sarah Tilly" line={true} />
        <Testimonial name="Mark Thomas" line={true} />
        <Testimonial name="Emily Rachael" line={true} />
        <img className="absolute right-0 top-[270px]" src={bigdog} />
        <button className="absolute  bottom-8 right-[170px] flex  font-satoshi font-medium text-[18px] justify-center gap-2 items-center  w-[66px] h-[46px] rounded-[9px] border border-[#C4C2C5]">
            
            <FaArrowLeft className='text-[#ECEBEC]' />
          </button>
        <button className="absolute  bottom-8 right-20 flex  font-satoshi font-medium text-[18px] justify-center gap-2 items-center bg-[#FFD700] w-[66px] h-[46px] rounded-[9px]">
            
            <FaArrowRight />
          </button>
          <img className='absolute bottom-24 left-[345px]' src={dots}/>
      </section>
      <section className='relative w-full flex  flex-col items-center pt-20 pb-[150px]  '>
        <div className="w-10/12 flex flex-col items-center justify-center mb-10">
          <div className='lg:w-9/12'>
          <h4 className='font-general font-semibold leading-[53px] text-[35px] text-center '>Frequently Asked Questions</h4>
          <p className="font-satoshi w-full   font-normal text-[18px]  pt-4 z-50 text-center">
          Got questions about our services or pet care in general? From booking processes to pet health, discover everything you need to know to ensure a seamless and worry-free experience for you and your beloved pet.
            </p>
          </div>
        </div>
        <Faq />

      </section>
    
    </div>
  )
}

export default App
