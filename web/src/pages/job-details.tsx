import { useParams } from "react-router-dom";

import { Footer } from "../components/footer";
import { JobRequirements } from "../components/job-requirements";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";

export const JobDetails = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <Navbar />
      <Jumbotron
        header="Technical Support Engineer"
        leadingParagraph="Apac, Apac, Uganda"
      />
      <JobRequirements />
      <Footer />
    </>
  );
};
