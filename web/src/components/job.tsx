import { Link } from "react-router-dom";

import image from "../assets/images/logo.jpg";

// const { id } = useParams();

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    logo: image,
    company: "XYZ Company",
    continent: "Africa",
    type: "Permanent",
    duration: "Contract",
    industry: "Finance",
    location_of_work_place: "Remote",
    date_posted: "19 h ago",
  },
  {
    id: 2,
    title: "Software Engineer",
    logo: image,
    company: "XYZ Company",
    continent: "Africa",
    type: "Permanent",
    duration: "Contract",
    industry: "Finance",
    location_of_work_place: "Remote",
    date_posted: "19 h ago",
  },
];

export const Job = () => {
  return (
    <div className="xl:flex xl:justify-end py-8 ">
      <div className="container sm:mx-auto">
        {jobs.map((x) => (
          <div className="flex flex-row items-center border px-4 py-2  rounded-md xl:flex mb-4 justify-between xl:items-center lg:items-center md:flex">
            <div className=" flex flex-row items-center ">
              <img
                src={image}
                alt=""
                className=" sm:h-24 h-16 w-auto rounded-full"
              />

              <div className=" flex flex-col ml-4">
                <h5 className=" sm:text-xl text-sm ">{x.title}</h5>
                <h5 className=" sm:text-xl text-sm ">{x.company}</h5>
                <h5 className=" text-sm ">Africa</h5>

                <div className=" flex flex-row">
                  <div className=" flex flex-row items-center">
                    <p className=" mr-2 text-sm">{x.type}</p>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 488 488"
                    >
                      <g transform="translate(0 -540.36)">
                        <g>
                          <g>
                            <path
                              d="M351.1,846.96l-97.1-67.9v-116.7c0-5.5-4.5-10-10-10s-10,4.5-10,10v122c0,3.3,1.6,6.3,4.3,8.2l101.4,70.9
								   c1.7,1.2,3.7,1.8,5.7,1.8v0c3.1,0,6.2-1.5,8.2-4.4C356.7,856.36,355.6,850.16,351.1,846.96z"
                            />
                            <path
                              d="M416.4,611.96L416.4,611.96c-46.2-46.2-107.4-71.6-172.4-71.6s-126.2,25.4-172.4,71.6C25.4,658.16,0,719.36,0,784.36
								   s25.4,126.2,71.6,172.4c46.2,46.2,107.4,71.6,172.4,71.6s126.2-25.4,172.4-71.6s71.6-107.4,71.6-172.4S462.6,658.16,416.4,611.96
								   z M254,1008.16L254,1008.16v-40.8c0-5.5-4.5-10-10-10s-10,4.5-10,10v40.8c-115.6-5.1-208.7-98.2-213.8-213.8H61
								   c5.5,0,10-4.5,10-10s-4.5-10-10-10H20.2c5.1-115.6,98.2-208.7,213.8-213.8v40.8c0,5.5,4.5,10,10,10s10-4.5,10-10v-40.8
								   c115.6,5.1,208.7,98.2,213.8,213.8H427c-5.5,0-10,4.5-10,10s4.5,10,10,10h40.8C462.7,909.96,369.6,1003.06,254,1008.16z"
                            />
                          </g>
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>{" "}
                  </div>
                  <p className=" mr-2 text-sm">{x.duration}</p>
                  <p className=" text-sm">{x.industry}</p>
                </div>
              </div>
            </div>

            <div className=" sm:flex hidden">
              <p>{x.location_of_work_place}</p>
            </div>

            <div className=" flex ">
              <p className=" text-sm">{x.date_posted}</p>
            </div>

            <div className=" sm:flex hidden">
              <Link to={`/job/:${x.id}`}>
                <button className=" text-white px-5 py-2.5 rounded-md bg-red-400">
                  Apply
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
