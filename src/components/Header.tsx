"use client";

import Image from "next/image";
import React from "react";

import Notification from "@/assets/bell-02.svg";
import Logo from "@/assets/logo.svg";
import SelectArrow from "@/assets/chevron-down.svg";
import SegmentControl from "./SegmentControl";

const Header = () => {
  return (
    <div className="py-4 px-10 bg-[#FCFCFC] sticky top-0 w-full z-20">
      <div className="flex items-center justify-between">
        <div className="px-6 py-4 text-primary bg-[#E7E7E7]">Logo</div>
        <div className="flex gap-16 rounded-[36px] border-[0.5px] border-neutral-400 bg-white p-2">
          <SegmentControl />
        </div>
        <div className="flex gap-4 p-2">
          <div className="relative">
            <Image src={Notification} alt="Notification" />
            <div className="absolute h-2 w-2 rounded-full bg-primary right-0 top-0"></div>
          </div>
          <div className="flex gap-2">
            <Image src={Logo} alt="logo" />
            <Image src={SelectArrow} alt="SelectArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
