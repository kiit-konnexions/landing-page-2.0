const Statistics = () => {
  return (
    <>
  <div className="flex lg:justify-between justify-center items-center w-full lg:px-40 px-4 lg:pt-[90px] pt-[10px] lg:flex-row flex-col">
    <div className="text-black lg:text-[40px] text-[15px] my-16 text-wrap h-full flex flex-col justify-center font-bold uppercase lg:normal-case">
        Konnexions fuels the next wave of tech <br />innovators. Our IT and Web Development <br />
        <span className="text-[#9A9B9F]">society equips students with cutting-edge <br /> skills.</span>      
    </div>
    <div className="flex justify-around gap-10 h-full">
      <div className="flex flex-col justify-end">
        <span className="flex text-black lg:text-[36px] text-[15px] font-bold mb-6">
          60%
        </span>
        <div className="lg:h-[345px] lg:w-[175px] h-[132px] w-[67px] bg-[#D9D9D9] border-t-[7px] border-black">
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <span className="flex text-black lg:text-[36px] text-[15px] font-bold mb-6">
          40%
        </span>
        <div className="lg:h-[225px] lg:w-[175px] h-[86px] w-[67px]  bg-[#D9D9D9] border-t-[7px] border-black">
        </div>
      </div>
    </div>
  </div>
  <div className="flex w-full justify-center items-center flex-col lg:px-40 px-4">
    <hr className="bg-[#D9D9D9] h-[2px] w-full"/>
    <div className="flex w-full lg:justify-between justify-around py-10 flex-wrap lg:px-0 px-16">
      <span className="lg:text-[56px] text-[27px] text-black font-bold flex flex-col items-center lg:items-start">500+ <span className="lg:text-[20px] text-[10px]">Projects completed</span></span>
      <span className="lg:text-[56px] text-[27px] text-black font-bold flex flex-col items-center lg:items-start">150+ <span className="lg:text-[20px] text-[10px]">Members</span></span>
      <span className="lg:text-[56px] text-[27px] text-black font-bold flex flex-col items-center lg:items-start">20+ <span className="lg:text-[20px] text-[10px]">Events Conducted</span></span>
      <span className="lg:text-[56px] text-[27px] text-black font-bold flex flex-col items-center lg:items-start">15+ <span className="lg:text-[20px] text-[10px]">Sponsors</span></span> 
    </div>

  </div>
  </>
  )
}

export default Statistics
