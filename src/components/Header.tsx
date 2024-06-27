"use client";

import Image from "next/image";
import React from "react";

import Notification from "@/assets/bell-02.svg";
import Logo from "@/assets/logo.svg";
import SelectArrow from "@/assets/chevron-down.svg";
import SegmentControl from "./SegmentControl";

const Header = () => {
  return (
    <div className="py-6 px-10">
      <div className="flex items-center justify-between">
        <div className="px-6 py-3 text-primary">Logo</div>
        <div className="flex gap-16 rounded-[36px] border-[0.5px] border-neutral-400 bg-white p-2">
          <SegmentControl />
        </div>
        <div className="flex gap-4 p-2">
          <Image src={Notification} alt="Notification" />
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
