import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Location from "../assets/icons/location.svg";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/Layout";
import JobProps from "../interfaces/job-interface";
import { getJobById } from "../services/jobservice";

export const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState<JobProps>();

  useEffect(() => {
    if (id) {
      getJobById(id).then(data => setJob(data));
    }
  }, [id]);

  return (
    <Layout>
      {job && (
        <>
          <Jumbotron header={job?.title} leadingParagraph={job?.company} />
          <div className="  flex flex-row justify-center md:pt-10 pt-5 bg-white text-gray-800">
            <div className=" flex items-center flex-col md:w-1/2 w-full px-4">
              <h1 className=" mb-4 md:text-xl text-lg ">Minimum Qualifications</h1>
              <div className=" flex mb-8 flex-row justify-center items-center">
                <img src={Location} alt="" />
                {/* <p className=" ml-4 ">Apac, Apac, Uganda</p> */}
                <p className=" ml-4 ">{job?.location_of_work_place}</p>
              </div>

              <div>
                <p className=" mb-2.5">
                  GitHub users work 24/7, so you’ll be expected to work some holidays. And though we support flexibility
                  to let you take care of the important things in your life, you’re expected to work during the normal
                  working hours of your timezone. When GitHub users have questions, they contact Support and we help
                  them as quickly and awesomely as possible. Technical support handles a wide variety of inquiries
                  including questions about Git and GitHub workflows, GitHub Pages, our API, and our desktop
                  applications. Support also works closely with the engineering team to track down bugs and improve our
                  documentation.
                </p>
                <p className=" mb-5">
                  The most important characteristic of our support team is that we love helping developers. GitHub is a
                  place for people to work better, together. Our job is to help. Support treats users the way we’d want
                  someone to treat our friends. Our support teammates have excellent writing chops: stellar grammar,
                  charming written personality, and the ability to explain complicated things simply. We measure our
                  success in swiftness, accuracy, and clarity.
                </p>
                <div className=" mb-5">
                  <h3 className=" mb-4 text-xl">Minimum Qualifications</h3>

                  <ul className=" list-disc ml-4">
                    <li>Currently residing in Australia, India, Japan, or New Zealand.</li>
                    <li>Current legal working authorisation to work in Australia, India, Japan, or New Zealand.</li>
                    <li>Experience using Git and GitHub Programming experience with a language like Ruby</li>
                    <li>
                      Experience using the command line Experience interacting with APIs and troubleshooting related
                      requests
                    </li>
                    <li>Understanding client and server architecture for websites and web applications</li>
                  </ul>
                </div>

                <div className=" mb-5">
                  <h3 className=" mb-4 text-xl">Preferred Qualifications</h3>

                  <ul className=" list-disc ml-4">
                    <li>Currently residing in Australia, India, Japan, or New Zealand.</li>
                    <li>Current legal working authorisation to work in Australia, India, Japan, or New Zealand.</li>
                    <li>Experience using Git and GitHub Programming experience with a language like Ruby</li>
                    <li>
                      Experience using the command line Experience interacting with APIs and troubleshooting related
                      requests
                    </li>
                    <li>Understanding client and server architecture for websites and web applications</li>
                  </ul>
                </div>

                <div className=" mb-4">
                  <h3 className="  mb-4 capitalize">About {job?.company}</h3>
                  <p className=" mb-2.5">
                    GitHub is the developer company. We make it easier for developers to be developers: to work
                    together, to solve challenging problems, and to create the world’s most important technologies. We
                    foster a collaborative community that can come together—as individuals and in teams—to create the
                    future of software and make a difference in the world.
                  </p>
                  <p className=" mb-4">
                    Please note that benefits vary by country. If you have any questions, please don’t hesitate to ask
                    your Talent Partner.
                  </p>
                </div>

                <div className=" mb-6">
                  <h4 className=" px-5 mb-5 bg-gray-500 text-black py-1 rounded">Company Details</h4>
                  <p className=" mb-4">
                    {job?.location_of_work_place} {","} {job?.country}
                  </p>
                </div>

                <div className=" flex mt-4 justify-between w-full md:flex-row flex-col md:mt-10">
                  <a href={job?.application_link} target="_blank" rel="noreferrer">
                    <button className=" bg-purple-700 rounded hover:text-gray-400 w-full text-white py-3 font-bold px-20 mb-5">
                      Apply Now
                    </button>
                  </a>

                  <a href={job?.company_website} target="_blank" rel="noreferrer">
                    <button className=" bg-purple-700 rounded text-white hover:text-gray-600 w-full py-3 font-bold px-20 mb-5">
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </Layout>
  );
};
