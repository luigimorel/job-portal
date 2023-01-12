import { useEffect, useState } from "react";
import { Hero } from "../components/hero";
import { Job } from "../components/job";
import Layout from "../components/Layout";
import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { getHomeJobs } from "../services/jobservice";

export const LandingPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getHomeJobs().then(jobs => {
      setJobs(jobs);
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <Job jobs={jobs} />
      <div className=" bg-white flex justify-center items-center">
        <a href="/explore">
          <button className=" w-auto bg-primary py-4 px-5 rounded text-white">See More Jobs</button>
        </a>
      </div>

      <div className=" flex flex-col md:py-40 py-20 bg-white">
        <h3 className=" text-center text-2xl font-bold text-gray-600 md:mb-8 mb-10 "> Trusted By</h3>
        <Partners />
      </div>
      <Newsletter />
    </Layout>
  );
};
