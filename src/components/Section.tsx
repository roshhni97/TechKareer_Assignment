import Image from "next/image";
import React from "react";
import MarkerPin from "@/assets/marker-pin-01.svg";
import CoinStack from "@/assets/coins-stacked-03.svg";
import Point from "@/assets/Ellipse 11.svg";
import FigmaLogo from "@/assets/figmalogo.svg";
import AdobeIll from "@/assets/adobeilllogo.svg";
import AdobeXD from "@/assets/xdlogo.svg";
import Atlassian from "@/assets/atlassian.svg";

const dummyData = {
  jobTitle: "Senior Product Designer",
  posted: "2 days ago",
  location: "Delaware, USA",
  salary: {
    min: 300,
    max: 400,
  },
  skills: ["Figma", "Adobe Illustrator", "Adobe XD"],
};

const Skills = ({ image, skill }: { image: string; skill: string }) => {
  return (
    <div className="flex gap-1 rounded-lg border border-[#D0D5DD] bg-white px-2 py-1 w-fit">
      <Image src={image} alt="FigmaLogo" />
      <div>{skill}</div>
    </div>
  );
};

const SkillSet = [
  {
    skill: "Figma",
    Image: FigmaLogo,
  },
  {
    skill: "Adobe Illustrator",
    Image: AdobeIll,
  },
  {
    skill: "Adobe XD",
    Image: AdobeXD,
  },
];

const Section = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-6 px-[100px] py-9">
          <div className="flex gap-3 items-center">
            <div className="text-[35px] font-semibold text-[#3D3D3D]">
              {dummyData.jobTitle}
            </div>
            <Image src={Point} alt="Point" />
            <div className="text-[14px] font-medium text-[#888]">
              {dummyData.posted}
            </div>
            <div className="flex gap-1">
              <Image src={Point} alt="Point" />
              <div>Open</div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-3 ">
              <Image src={MarkerPin} alt="MarkerPin" />
              <div>{dummyData.location}</div>
            </div>
            <Image src={Point} alt="Point" />
            <div className="flex gap-3">
              <Image src={CoinStack} alt="CoinStack" />
              <div>
                {`$${dummyData.salary.min}k - $${dummyData.salary.max}k`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-[100px] my-8 gap-16">
        <div className="flex flex-col gap-2">
          <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
            Skills Required
          </div>
          <div className="flex flex-col gap-2">
            {SkillSet.map((skill) => (
              <Skills
                key={skill.skill}
                image={skill.Image}
                skill={skill.skill}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
            Preferred Language
          </div>
          <div className="overflow-hidden text-[#3D3D3D] text-ellipsis whitespace-nowrap text-[16px] font-semibold leading-normal">
            English
          </div>
        </div>

        <div>
          <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
            Type
          </div>
          <div className="overflow-hidden text-[#3D3D3D] text-ellipsis whitespace-nowrap text-[16px] font-semibold leading-normal">
            Full time
          </div>
        </div>
        <div>
          <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
            Year of Experience
          </div>
          <div className="overflow-hidden text-[#3D3D3D] text-ellipsis whitespace-nowrap text-[16px] font-semibold leading-normal">
            3+ Years of Experience
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-[100px] my-8">
        <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
          About the Job
        </div>
        <div>
          1. Handle the UI/UX research design 2. Work on researching on latest
          web applications designs & trends 3. Work on conceptualizing and
          visualizing 4. Work on creating graphics content and other graphic
          related works Benefits: Health insurance Provident Fund Schedule: Day
          shift Supplemental pay types: Performance bonus Yearly bonus Work
          Location: In person
        </div>
      </div>
      <div className="pt-8 pl-[100px] flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <Image src={Atlassian} alt="Atlassian" />
          <div>Atlassian</div>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
                Company Size
              </div>
              <div className="overflow-hidden text-[#3D3D3D] text-ellipsis whitespace-nowrap text-[16px] font-medium leading-normal">
                1K - 2K Employee
              </div>
            </div>
            <div>
              <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
                Sector
              </div>
              <div className="overflow-hidden text-[#3D3D3D] text-ellipsis whitespace-nowrap text-[16px] font-medium leading-normal">
                Information Technology, Infrastructure
              </div>
            </div>
            <div>
              <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
                Founded In
              </div>
              <div className="overflow-hidden text-[#3D3D3D] text-ellipsis whitespace-nowrap text-[16px] font-medium leading-normal">
                2019
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
                Type
              </div>
              <div className="overflow-hidden text-[#3D3D3D] text-ellipsis whitespace-nowrap text-[16px] font-medium leading-normal">
                Private
              </div>
            </div>
            <div>
              <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
                Funding
              </div>
              <div className="overflow-hidden text-[#3D3D3D] text-ellipsis whitespace-nowrap text-[16px] font-medium leading-normal">
                Bootstrapped
              </div>
            </div>
            <div>
              <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
                Founded By
              </div>
              <div className="overflow-hidden text-[#3D3D3D] text-ellipsis whitespace-nowrap text-[16px] font-medium leading-normal">
                Scott Farquhar, Mike Cannon-Brookes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
