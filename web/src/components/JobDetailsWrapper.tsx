import { useParams } from "react-router-dom";
import { JobDetails } from "../pages/job-details";
export const ProductWrapper = () => {
  const { id } = useParams();
  return <JobDetails id={id} />;
};
