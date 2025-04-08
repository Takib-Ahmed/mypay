import Herocharacter from "@/app/assets/icons/svgs/Herocharacter";
import Commencer from "@/app/assets/icons/svgs/linkicon";
import Robohand from "@/app/assets/icons/svgs/Robohand";
import Visaicn from "@/app/assets/icons/svgs/Visa";
import Paypalicn from "@/app/assets/icons/svgs/Paypal";
import MasterCardicn from "@/app/assets/icons/svgs/MasterCard";
import ApplePayicn from "@/app/assets/icons/svgs/ApplePayicn";
import Gpayicn  from "@/app/assets/icons/svgs/Gpay";
import React from "react";

export default function Hero() {
  return (
    <div className="  bg-hero-graident flex flex-col   gap-16 md:gap-24  lg:gap-32 justify-center  items-center w-full px-5  pt-20 lg:pt-28  relative">
     
      <div className="flex  z-50  flex-wrap  min-[520px]:gap-14 sm:gap-20  lg:gap-0  ">
        <div className="herotext lg:w-[53.5%] grid gap-5  mt-10 sm:mt-20 lg:mt-24  px-3 sm:px-0 ">
          <h1 className="title   text-4xl sm:text-6xl  leading-12  sm:leading-[60.5px]  md:leading-[70.5px]  ">
            <span className="   font-bold bg-text-gradient text-transparent bg-clip-text">
              MyPay
            </span>{" "}
            Plateforme de gestion de paiements en ligne pour business High-Risk.
          </h1>
          <p className=" w-full lg:w-[70.5%] text-sm text-[#E1E1E1]">
            Business High-Risk pris en charge : Servitia Financia et
            Investitiones , Mercator es titulorum Pecuniae mutuatae ad diem
            Mercatores cryptae valutarum. Servitia Financia et Investitiones ,
            Mercator es titulorum Pecuniae mutuatae ad diem Mercatores cryptae
            valutarum.
          </p>
          <div className="button">
            <Commencer  className='w-1/3 sm:w-1/3 md:w-auto' />
          </div>
        </div>
        <div className="heroright        sm:justify-end sm:items-end lg:w-[40%]     flex flex-col  ">
        
<div className=" relative  -translate-y-10 flex items-center justify-center w-full  lg:items-start    sm:mb-24 lg:mb-0  sm:ms-80 lg:ms-0">
  
  
  <Herocharacter   className=' w-[80%] sm:w-full ' /></div>  
          <div className= " sm:absolute    relative       sm:mt-0  min-[420px]:mb-20 sm:mb-0  w-screen sm:w-auto   right-0  sm:bottom-[20rem]   ">
          <Robohand   className='absolute  sm:relative  max-[420px]:-translate-y-72 -translate-y-60 sm:-translate-y-0    sm:translate-x-0   sm:translate-y-0  w-full  sm:w-auto'/>
       
          </div>
       
        </div>
      </div>

      <div>
        
      </div>
      <div className=" flex-col  z-50">
  
<center className=" z-80  text-4xl px-3 sm:px-3.5 md:px-4 lg:px-5 ">
      Nos supports de paiement
      </center>
      <div className="flex h-full px-5 gap-5 md:gap-12 md:gap-0 w-screen items-center py-10  sm:py-16 pb-0 md:pb-0  lg:py-20 justify-around z-50">



        <div> 
<Visaicn  className='w-full'/>
         
        </div>
        <div>

         <MasterCardicn  className='w-full'/> 
        </div>
        <div>
          <Paypalicn  className='w-full'/>
        </div>
        <div>
          <ApplePayicn className='w-full'/>
        </div>
        <div>
          <Gpayicn className='w-full'/>
        </div>
      </div>
      
</div>
    </div>
  );
}
