import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Job } from "../components/job";
import { Newsletter } from "../components/newsletter";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Job />
      {/* <Partners /> */}
      <Newsletter />
      <Footer />
    </>
  );
};
