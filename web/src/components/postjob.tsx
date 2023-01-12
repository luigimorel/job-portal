import { useEffect, useState } from "react";

import Jumbotron from "../components/jumbotron";
import { postAJob } from "../services/jobservice";
import { Form } from "./form";
import Layout from "./Layout";

export const PostJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    postAJob().then(jobs => {
      setJobs(jobs);
    });
  }, []);

  return (
    <Layout>
      <Jumbotron header="Let job seekers know you're hiring..." leadingParagraph="Post your company's role." />
      <Form />
    </Layout>
  );
};
