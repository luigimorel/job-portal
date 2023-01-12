import { Link } from "react-router-dom";

import IndustryIcon from "../assets/icons/industry.svg";
import PersonIcon from "../assets/icons/person.svg";

export const Job = ({ jobs }: any) => {
  return (
    <div className="xl:flex bg-white text-gray-800 xl:justify-end py-8 ">
      <div className="container max-w-6xl px-4 sm:mx-auto">
        {jobs.map((x: any) => (
          <Link to={`/jobs/${x.id}`}>
            <div className="flex  flex-row hover:text-gray-600 items-center border border-gray-400 md:px-4 px-2.5 md:py-4 py-2 cursor-pointer  rounded-md xl:flex mb-5 justify-between xl:items-center lg:items-center md:flex">
              <div className=" flex flex-row items-center ">
                <img src={x.logo} alt="" className=" sm:h-16 h-12 w-auto rounded-full" />

                <div className=" flex flex-col mb-2">
                  <h5 className=" text-sm md:text-xl capitalize">{x.title}</h5>
                  <h5 className=" text-sm md:text-base mb-4 capitalize ">{x.company}</h5>

                  <div className=" flex flex-row">
                    <div className=" flex flex-row mr-3">
                      <img src={PersonIcon} className="h-5 w-auto mr-1.5" alt="" />
                      <p className=" md:text-sm text-[10px] capitalize">{x.duration}</p>
                    </div>

                    <div className=" flex flex-row">
                      <img src={IndustryIcon} className="h-5 w-auto mr-1.5" alt="" />
                      <p className=" md:text-sm text-[10px]  capitalize">{x.industry}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" sm:flex hidden capitalize">
                <p>{x.location_of_work_place}</p>
              </div>

              <div className=" flex ">
                <p className=" md:text-sm text-[12px]">19 hrs ago</p>
              </div>

              <div className=" sm:flex hidden">
                <Link to={`/jobs/${x.id}`}>
                  <button className=" text-white px-5 py-2.5 rounded-md bg-primary">Apply</button>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
