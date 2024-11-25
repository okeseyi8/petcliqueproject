import { GoPlus } from 'react-icons/go'
import { AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'
export const Faq = (props) => {
  const [content, showContent] = useState(false)
  const displayContent = () => {
    showContent(!content)
  }
  const showStyle = content ? 'fadeUp' : 'hidden'
  return (
    <div className="faq flex justify-start w-10/12 mb-6">
      <div className="relative w-full border flex flex-col  gap-3 border-[#7F7B81] px-8 py-6 rounded-[13px] ">
        <h1 className="font-general font-semibold text-[23px] leading-8">
          {/* {props.title} */}
          How do I book pet care services at Pet Clique?
        </h1>
        <p
          className={`${showStyle} font-satoshi text-[#21231F] leading-[27px] font-normal text-[18px] anim`}
        >
          {/* {props.desc} */}
          A: To book our services, simply visit our website and navigate to the
          'Book Now' section. Choose the service you require, select the dates,
          and follow the easy steps to confirm your booking.process, which
          typically involves providing your personal information, contact
          details, and agreeing to our terms and conditions.
        </p>
        <button className="italic font-satoshi w-full flex justify-start underline underline-offset-4">
          Learn More
        </button>
        <div
          onClick={displayContent}
          className="absolute right-10 top-[30px]  "
        >
          {content ? (
            <AiOutlineMinus size={20} color="#7F7B81" />
          ) : (
            <GoPlus size={20} color="#7F7B81" />
          )}
        </div>
      </div>
    </div>
  )
}
