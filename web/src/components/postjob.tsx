import { useState } from "react";

import Jumbotron from "../components/jumbotron";
import { Form } from "./form";
import Layout from "./Layout";

export const PostJob = () => {
  const [jobs, setJobs] = useState([]);

  return (
    <Layout>
      <Jumbotron header="Let job seekers know you're hiring..." leadingParagraph="Post your company's role." />
      <Form />
    </Layout>
  );
};
