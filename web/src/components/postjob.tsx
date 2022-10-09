import { useParams } from "react-router-dom";

import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";

export const PostJob = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <Navbar />
      <Jumbotron
        header="Let job seekers know you're hiring..."
        leadingParagraph="Post your company's role."
      />
    </>
  );
};
