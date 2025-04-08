import Ceo from "@/app/assets/icons/svgs/Ceo";
import Commas from "@/app/assets/icons/svgs/Commas";
import { Logosvg } from "@/configs/constants";
import React from "react";

export default function Client() {
  return (
   <div className=" flex justify-center  p-5 py-10 sm:p-10">

<div className="grid gap-5   w-4xl   bg-[#171823] shadow-xl rounded-3xl   px-10  p-8 backdrop-blur-[10px]">
      <div className="logo flex justify-center items-center">
        <Logosvg />
      </div>
      <div className=" flex justify-between ">
        <span>
          <Commas className=' w-1/2 sm:w-[70%]  md:w-[80%]  lg:w-full' />
        </span>
        <span className=" rotate-180">
          <Commas  className=' w-1/2 sm:w-[70%]  md:w-[80%]  lg:w-full'/>
        </span>
      </div>
      <div className="  text-xl  text-center   lg:px-10        leading-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <div  className=" commenter flex justify-center w-full gap-3">
<div className="profile">
    <Ceo className='  '/>
</div>
<div className=" grid gap-0.5">
    <h1>
    Herman Jensen
    </h1>
    <p className=" text-xs text-gray-500">CEO MyPay</p>
</div>


      </div>
    </div>
   </div>
  );
}
