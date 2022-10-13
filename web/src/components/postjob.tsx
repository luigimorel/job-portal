import { useEffect, useState } from "react";

import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";
import { getAllJobs } from "../services/jobservice";
import { Form } from "./form";

export const PostJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getAllJobs().then((jobs) => {
      setJobs(jobs);
    });
  }, []);

  return (

    <>
      <Navbar />
      <Jumbotron
        header="Let job seekers know you're hiring..."
        leadingParagraph="Post your company's role."
      />
      <Form />
    </>
  );
};
