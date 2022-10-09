import React, { useEffect } from "react";

import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Job } from "../components/job";
import { Newsletter } from "../components/newsletter";
import { getAllJobs } from "../services/jobservice";

export const LandingPage = () => {
  const [jobs, setJobs] = React.useState([]);

  useEffect(() => {
    getAllJobs().then((jobs) => {
      setJobs(jobs);
    });
  }, []);

  return (
    <>
      <Hero />
      <Job jobs={jobs} />
      {/* <Partners /> */}
      <Newsletter />
      <Footer />
    </>
  );
};
