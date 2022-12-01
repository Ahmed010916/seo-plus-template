import React from "react";
import imgsrc1 from "./../assets/images/image1.webp";
function Technology() {
  let image1 = "bg-[linear-gradient(180deg,#000000bf,#00000070),url('https://4.bp.blogspot.com/-U1Ici8AM__Q/XD6TWqTcVCI/AAAAAAAAAGA/Kv1UK6JWfisb6nDCcNWg7WfLiYYmY8jIgCLcBGAs/s706-rw-e360/merlin_148355052_6b940b42-fb52-4140-9f45-1b00fbeca604-jumbo.webp');]";
  let image2 = "bg-[linear-gradient(180deg,#000000bf,#00000070),url('https://4.bp.blogspot.com/-U1Ici8AM__Q/XD6TWqTcVCI/AAAAAAAAAGA/Kv1UK6JWfisb6nDCcNWg7WfLiYYmY8jIgCLcBGAs/s706-rw-e360/merlin_148355052_6b940b42-fb52-4140-9f45-1b00fbeca604-jumbo.webp');]";
  return (
    <div className="container py-3">
      <div className="px-5 py-3 bg-secondary lg:rounded-md">
        <div>
          <div className="flex justify-between py-3">
            <p className="font-medium text-lg">Technology</p>
            <button className="bg-accent py-1 px-4 w-fit rounded-md cursor-pointer">
              view more
            </button>
          </div>
          <hr className="border-accent py-3" />
          <div className="flex flex-col md:flex-row gap-1">
            <div
              className={`  flex flex-col justify-between items-start rounded-md md:w-4/6  h-96 bg-cover bg-no-repeat ${image1} gap-1 `}>
              <button className="bg-[#0c2461] ml-3 mt-3 py-1 px-2 rounded-md cursor-pointer">
                technology
              </button>
              <div className="py-3 px-4 text-white flex flex-col gap-3">
                <p className="text-sm ">January 15, 2019</p>
                <p className="text-2xl font-bold">Apple’s Biggest Problem? My Mom</p>
                <p className="text-sm ">
                  Many bloggers struggle with publishing blog posts on a
                  consistent basis. I get it. I’ve had weeks ...
                </p>
              </div>
            </div>
            <div className="flex md:flex-col  md:w-4/12 gap-1 justify-center">
              <div className={` flex flex-col justify-between items-start rounded-md  ${image1}  h-48 bg-cover bg-no-repeat`}>
              <button className="bg-[#0c2461] ml-3 mt-3 py-1 px-2 rounded-md cursor-pointer">
                technology
              </button>
                <div className="py-3 px-4 text-white flex flex-col gap-3">
                <p className="text-sm ">January 15, 2019</p>
                <p className="text-lg font-bold">Apple’s Biggest Problem? My Mom</p>
              </div>
              </div>
              <div className={` flex flex-col justify-between items-start rounded-md  ${image1}  h-48 bg-cover bg-no-repeat`}>
              <button className="bg-[#0c2461] ml-3 mt-3 py-1 px-2 rounded-md cursor-pointer">
                technology
              </button>
                <div className="py-3 px-4 text-white flex flex-col gap-3">
                <p className="text-sm ">January 15, 2019</p>
                <p className="text-lg font-bold">Apple’s Biggest Problem? My Mom</p>

              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
