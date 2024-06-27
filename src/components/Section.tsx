import Image from "next/image";
import React from "react";
import MarkerPin from "@/assets/marker-pin-01.svg";
import CoinStack from "@/assets/coins-stacked-03.svg";
import Point from "@/assets/Ellipse 11.svg";
import FigmaLogo from "@/assets/figmalogo.svg";
import AdobeIll from "@/assets/adobeilllogo.svg";
import AdobeXD from "@/assets/xdlogo.svg";
import Atlassian from "@/assets/atlassian.svg";
import Markdown from "react-markdown";
import Applicants from "@/assets/person.svg";
import Person from "@/assets/persontick.svg";
import Message from "@/assets/message-square-01.svg";
import Views from "@/assets/eye.svg";
import Delete from "@/assets/trash-03.svg";
import { Edit } from "@/assets/";

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

const JobDetails = [
  { detail: "Preferred Language", preference: "English" },
  { detail: "Type", preference: "Full time" },
  { detail: "Year of Experience", preference: "3+ Years of Experience" },
];
const JobDetail = ({
  Detail,
  preference,
}: {
  Detail: string;
  preference: string;
}) => {
  return (
    <div>
      <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
        {Detail}
      </div>
      <div className="overflow-hidden text-[#3D3D3D] text-ellipsis whitespace-nowrap text-[16px] font-semibold leading-normal">
        {preference}
      </div>
    </div>
  );
};
const companyDetails = [
  {
    title: "Company Size",
    value: "1K - 2K Employee",
  },
  {
    title: "Sector",
    value: "Information Technology, Infrastructure",
  },
  {
    title: "Founded In",
    value: "2019",
  },
  {
    title: "Type",
    value: "Private",
  },
  {
    title: "Funding",
    value: "Bootstrapped",
  },
  {
    title: "Founded By",
    value: "Scott Farquhar, Mike Cannon-Brookes",
  },
];

const markdown = `
1. Handle the UI/UX research design
2. Work on researching on latest web applications designs & trends
3. Work on conceptualizing and visualizing
4. Work on creating graphics content and other graphic related works
`;
const ApplicantDetails = [
  {
    image: Applicants,
    detail: "Applicants",
    number: 400,
  },
  {
    image: Person,
    detail: "Matches",
    number: 100,
  },
  {
    image: Message,
    detail: "Messages",
    number: 147,
  },
  {
    image: Views,
    detail: "Views",
    number: 20,
  },
];

const Section = () => {
  return (
    <div className="flex">
      <div className="w-3/4">
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

          {JobDetails.map((jobDetail) => (
            <JobDetail
              key={jobDetail.detail}
              Detail={jobDetail.detail}
              preference={jobDetail.preference}
            />
          ))}
        </div>
        <div className="flex flex-col mx-[100px] my-8">
          <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
            About the Job
          </div>
          <Markdown>{markdown}</Markdown>
        </div>
        <div className="py-8 px-[100px] flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <Image src={Atlassian} alt="Atlassian" />
            <div>Atlassian</div>
          </div>
          <div className="flex gap-12">
            <div className="grid grid-cols-2 gap-6">
              {companyDetails.map((companyDetail) => (
                <div key={companyDetail.title}>
                  <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
                    {companyDetail.title}
                  </div>
                  <div className="overflow-hidden text-[#3D3D3D] text-ellipsis whitespace-nowrap text-[16px] font-medium leading-normal">
                    {companyDetail.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-1/4 pt-9 px-6">
        <div className="flex gap-4">
          <div className="flex gap-2 px-6 py-3 rounded-md border border-[0.8px] border-orange-300 bg-orange-50">
            <Image src={Delete} alt="delete" />
            <div>Delete Job</div>
          </div>
          <div className="flex gap-2 px-6 py-3 rounded-md border-2 border-[#FED3CA] bg-[#DC4A2D]">
            <Image src={Edit} alt="edit" />
            <div>Edit job</div>
          </div>
        </div>
        <div>
          {ApplicantDetails.map((applicantDetail) => (
            <div
              key={applicantDetail.detail}
              className="flex gap-3 items-center"
            >
              <div className="flex gap-1 items-center">
                <Image
                  src={applicantDetail.image}
                  alt={applicantDetail.image}
                />
                <div className="text-[#6E6D6D] text-[14px] font-medium leading-normal">
                  {applicantDetail.detail}
                </div>
              </div>

              <div>{applicantDetail.number}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
