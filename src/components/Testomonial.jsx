import testimonyimg from '../assets/im1.png'
export const Testimonial = (props) => {
  return (
    <div className="w-10/12 flex mt-[53px]">
      <div className="w-10/12 flex justify-between ">
        <div className="w-4/12 flex pt-[24px]">
          <div className="">
            <img
              className=" w-20 h-20 object-contai -mt-2"
              src={testimonyimg}
            />
          </div>
          <div className="text-white flex  flex-col">
            <h1 className="font-general font-semibold text-[23px]">
              {props.name}
            </h1>
            <p className="font-satoshi font-normal text-[18px]">Pet Owner</p>
          </div>
        </div>
        <div className="w-10/12">
          <p className=" text-white font-satoshi leading-[34.5px]">
            “Leaving my pet in the care of Pet Clique was the best decision I
            made. Their team's dedication and love for animals are unparalleled.
            My furry friend returned home happy and well-cared for, and I had
            peace of mind throughout my trip. Thank you, Pet Clique, for your
            exceptional service!”
          </p>
          {props.line ? <hr className="mt-5" /> : null}
        </div>
      </div>
    </div>
  )
}
