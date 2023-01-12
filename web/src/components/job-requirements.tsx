import Location from "../assets/icons/location.svg";

export const JobRequirements = ({ job }: any) => {
  return (
    <div className="  flex flex-row justify-center text-white">
      {job.map((x: any) => {
        <div className=" flex items-center flex-col w-1/2">
          <h1 className=" mb-4 text-xl">Minimum Qualifications</h1>
          <div className=" flex mb-8 flex-row justify-center items-center">
            <img src={Location} alt="" />
            {/* <p className=" ml-4 ">Apac, Apac, Uganda</p> */}
            <p className=" ml-4 ">{x.title}</p>
          </div>

          <div>
            <p className=" mb-2.5">
              GitHub users work 24/7, so you’ll be expected to work some holidays. And though we support flexibility to
              let you take care of the important things in your life, you’re expected to work during the normal working
              hours of your timezone. When GitHub users have questions, they contact Support and we help them as quickly
              and awesomely as possible. Technical support handles a wide variety of inquiries including questions about
              Git and GitHub workflows, GitHub Pages, our API, and our desktop applications. Support also works closely
              with the engineering team to track down bugs and improve our documentation.
            </p>
            <p className=" mb-5">
              The most important characteristic of our support team is that we love helping developers. GitHub is a
              place for people to work better, together. Our job is to help. Support treats users the way we’d want
              someone to treat our friends. Our support teammates have excellent writing chops: stellar grammar,
              charming written personality, and the ability to explain complicated things simply. We measure our success
              in swiftness, accuracy, and clarity.
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
              <h3 className="  mb-4">About Github</h3>
              <p className=" mb-2.5">
                GitHub is the developer company. We make it easier for developers to be developers: to work together, to
                solve challenging problems, and to create the world’s most important technologies. We foster a
                collaborative community that can come together—as individuals and in teams—to create the future of
                software and make a difference in the world.
              </p>
              <p className=" mb-4">
                Please note that benefits vary by country. If you have any questions, please don’t hesitate to ask your
                Talent Partner.
              </p>
            </div>

            <div className=" mb-6">
              <h4 className=" px-5 mb-5 bg-gray-50 text-black py-1 rounded">Company Details</h4>
              <p className=" mb-4">Kampala, Uganda</p>
            </div>

            <div className=" flex mt-4 flex-col">
              <button className=" bg-purple-500 rounded py-3 font-bold mb-5">Apply Now</button>
              <button className=" bg-purple-50 text-black rounded py-3 font-bold mb-5">Visit Website</button>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};
