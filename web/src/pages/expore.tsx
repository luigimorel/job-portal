import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { Job } from "../components/job";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";
import { getAllJobs } from "../services/jobservice";

const ExploreJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getAllJobs().then(jobs => {
      setJobs(jobs);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Jumbotron header="Find a perfect role that suits you" leadingParagraph="Power up your career!" />
      <Job jobs={jobs} />

      <Footer />
    </>
  );
};

export default ExploreJobs;
