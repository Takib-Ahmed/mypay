import { EspaceClient } from "@/app/assets/icons/svgs/linkicon";
import { Logosvg } from "@/configs/constants";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className=" w-full flex justify-between absolute z-50 top-0 left-0 items-center   p-5  sm:pt-8">
      <Logosvg  className=' w-10 sm:w-auto'/>
      <Link href="/" className={` font-inter`}>
        <EspaceClient  className=' w-36 sm:w-auto'/>
      </Link>
    </div>
  );
}
