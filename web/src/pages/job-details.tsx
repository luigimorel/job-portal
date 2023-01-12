import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Location from "../assets/icons/location.svg";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/Layout";
import JobProps from "../interfaces/job-interface";
import { getJobById } from "../services/jobservice";

export const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState<JobProps>();

  useEffect(() => {
    if (id) {
      getJobById(id).then(data => setJob(data));
    }
  }, [id]);

  return (
    <Layout>
      {job && (
        <>
          <Jumbotron header={job?.title} leadingParagraph={job?.company} />
          <div className="  flex flex-row justify-center md:pt-10 pt-5 bg-white text-gray-800">
            <div className=" flex items-center flex-col md:w-1/2 w-full px-4">
              <h1 className=" mb-4 md:text-xl text-lg ">Minimum Qualifications</h1>
              <div className=" flex mb-8 flex-row justify-center items-center">
                <img src={Location} alt="" />
                <p className=" ml-4 ">{job?.location_of_work_place}</p>
              </div>

              <div>{job?.jobdescription}</div>
            </div>
          </div>{" "}
        </>
      )}
    </Layout>
  );
};
