import Image from "next/image";
import React from "react";
import BriefCase from "@/assets/briefcase-02.svg";
import Message from "@/assets/message-square-01.svg";
import Payment from "@/assets/coins-hand.svg";
import Notification from "@/assets/bell-02.svg";
import Logo from "@/assets/logo.svg";
import SelectArrow from "@/assets/chevron-down.svg";

const Header = () => {
  return (
    <div className="py-6 px-10">
      <div className="flex items-center justify-between">
        <div className="px-6 py-3 text-primary">Logo</div>
        <div className="flex gap-16 rounded-[36px] border-[0.5px] border-neutral-400 bg-white p-2 h-[74px]">
          <div className=" flex items-center p-2 rounded-[49px] border-2 border-[#FCB4A5] bg-[#DC4A2D] ">
            <div className="flex gap-2 ">
              <Image src={BriefCase} alt="briefcase" />
              <div className="text-white font-general-sans text-[20px] font-medium">
                Jobs
              </div>
            </div>
          </div>
          <div className="flex p-6 gap-2 items-center justify-center">
            <Image src={Message} alt="payment" />
            <div className="text-[20px] font-medium text-[#B0B0B0]">
              Messages
            </div>
          </div>
          <div className="flex p-6 gap-2 items-center justify-center">
            <Image src={Payment} alt="payment" />
            <div className="text-[20px] font-medium text-[#B0B0B0]">
              Payments
            </div>
          </div>
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
