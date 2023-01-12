import { useEffect, useState } from "react";
import { Job } from "../components/job";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/Layout";
import { getAllJobs } from "../services/jobservice";

const ExploreJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getAllJobs().then(jobs => {
      setJobs(jobs);
    });
  }, []);

  return (
    <Layout>
      <Jumbotron header="Find a perfect role that suits you" leadingParagraph="Power up your career!" />
      <Job jobs={jobs} />
    </Layout>
  );
};

export default ExploreJobs;
