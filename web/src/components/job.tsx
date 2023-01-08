import { Link } from "react-router-dom";

import IndustryIcon from "../assets/icons/industry.svg";
import PersonIcon from "../assets/icons/person.svg";

// const { id } = useParams();

export const Job = ({ jobs }: any) => {
  return (
    <div className="xl:flex xl:justify-end py-8 ">
      <div className="container sm:mx-auto">
        {jobs.map((x: any) => (
          <div className="flex flex-row items-center border px-4 py-2  rounded-md xl:flex mb-4 justify-between xl:items-center lg:items-center md:flex">
            <div className=" flex flex-row items-center ">
              <img src={x.logo} alt="" className=" sm:h-16 h-12 w-auto rounded-full" />

              <div className=" flex flex-col ml-4 mb-2">
                <h5 className=" sm:text-xl text-sm capitalize">{x.title}</h5>
                <h5 className=" sm:text-xl text-sm mb-4 capitalize ">{x.company}</h5>

                <div className=" flex flex-row">
                  <div className=" flex flex-row mr-3">
                    <img src={PersonIcon} className="h-5 w-auto mr-1.5" alt="" />
                    <p className=" text-sm capitalize">{x.duration}</p>
                  </div>

                  <div className=" flex flex-row">
                    <img src={IndustryIcon} className="h-5 w-auto mr-1.5" alt="" />
                    <p className=" text-sm capitalize">{x.industry}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" sm:flex hidden capitalize">
              <p>{x.location_of_work_place}</p>
            </div>

            <div className=" flex ">
              <p className=" text-sm">19 hrs ago</p>
            </div>

            <div className=" sm:flex hidden">
              <Link to={`/job/${x.id}`}>
                <button className=" text-white px-5 py-2.5 rounded-md bg-primary">Apply</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
