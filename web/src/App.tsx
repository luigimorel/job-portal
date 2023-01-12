import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Error404 } from "./components/error404";
import { PostJob } from "./components/postjob";
import About from "./pages/about";
import ExploreJobs from "./pages/explore";
import { JobDetails } from "./pages/job-details";
import { LandingPage } from "./pages/landing-page";

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path={"/"} />
      <Route element={<JobDetails />} path={"/jobs/:id"} />
      <Route element={<PostJob />} path={"/post-job"} />
      <Route element={<About />} path={"/about"} />
      <Route element={<ExploreJobs />} path={"/explore"} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
export default App;
