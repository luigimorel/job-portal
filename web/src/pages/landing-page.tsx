import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Job } from "../components/job";
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
    <>
      <Hero />
      <Job jobs={jobs} />
      <div className=" flex flex-col py-20">
        <h3 className=" text-center text-2xl font-bold md:mb-8 mb-4 "> Trusted By</h3>
        <Partners />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};
