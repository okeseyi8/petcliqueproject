import { FaArrowRight } from 'react-icons/fa'
import './App.css'
import { Navbar } from './components/Navbar'
import { HeroSecton } from './components/HeroSection'
import dog from './assets/dog.png'
import dogtwo from './assets/dog2.png'
import dogthree from './assets/dog3.png'
import rightcircle from "./assets/rightcircle.png"
import leftcircle from "./assets/leftcircle.png"

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSecton />
      <div className="w-full px-5 bg-[#FAF9FB] relative"> 
        <img src={rightcircle} className='absolute right-0 top-12 z-0 '/>
        <img src={leftcircle} className='absolute left-0 -bottom-32 z-10 '/>
        <div className="w-full flex flex-col lg:flex-row justify-center gap-3 py-16 z-20" >
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
            <img src={dog} className='w-full' />
            <div className="flex flex-row ">
              <img src={dogtwo} className='w-6/12 pr-2 pt-4' />
              <img src={dogthree} className='w-6/12 pl-2 pt-4' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full px-5 bg-[#FAF9FB] relative' >
      
        <div className='w-full flex flex-col lg:flex-row justify-around items-center px-16 pb-16'>
          <div className=' lg:w-3/12  '>
            <h4 className='font-satoshi font-medium text-[18px]'>HAPPY PETS SERVED</h4>
            <h2 className='font-general font-bold text-[55px]'>

              10,000
            </h2>
            <p className='font-satoshi font-normal text-[18px]'>
            At Pet Clique, we take immense pride in our legacy of serving over 10,000 happy pets. Each tail wag, each purr, and every chirp represents a testament to our unwavering commitment to providing exceptional care.
            </p>
          </div>
          <div className=' lg:w-3/12  '>
            <h4 className='font-satoshi font-medium text-[18px]'>CUSTOMER SATISFACTION</h4>
            <h2 className='font-general font-bold text-[55px]'>

            95%
            </h2>
            <p className='font-satoshi font-normal text-[18px]'>
            At Pet Clique, our commitment to excellence is reflected in our proud achievement of a 95% customer satisfaction rate. We take pride in going above and beyond to ensure every pet receives the utmost care.</p>
          </div>
          <div className=' lg:w-3/12 '>
            <h4 className='font-satoshi font-medium text-[18px]'>SKILLED PET NANNIES AND VET DOCTORS</h4>
            <h2 className='font-general font-bold text-[55px]'>

            100+
            </h2>
            <p className='font-satoshi font-normal text-[18px] '>
            Our team comprises over 100 skilled pet nannies, each dedicated to providing unparalleled care for your cherished companions. Paired with a network of qualified professional vet doctors.</p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center px-5 py-16 bg-white'>
        <div className='w-full flex flex-col lg:flex-row justify-center px-16 lg:px-0'>
          <h4 className='lg:w-5/12 font-general font-semibold text-[35px]'>Our Tailored Services</h4>
          <p className='lg:w-5/12 font-satoshi font-normal text-[18px]'>
          Discover unparalleled care with Pet Clique's tailored services. From attentive pet nannies to expert veterinary care, we cater to your pet's unique needs. Your pet's comfort and well-being are our top priorities.
          </p>
        </div>
        <div className='w-full flex flex-col lg:flex-row justify-center px-16 lg:px-0'>
          <div className='w-7/12 bg-[url("https://github.com/okeseyi8/petcliqueproject/blob/main/src/assets/pattern1.png")] bg-cover bg-center'>
          <h5 className='font-semibold text-28px font-general text-white'> Pet Care Services</h5>
          <p className='font-satoshi font-medium text-[18px]'>
          Indulge your pet in luxury with our comprehensive pet care services. From grooming to playtime, we prioritize your pet's well-being, ensuring they feel loved and pampered.
          </p>
          </div>
          <div className='w-3/12'></div>
        </div>
      </div>
    </div>
  )
}

export default App
