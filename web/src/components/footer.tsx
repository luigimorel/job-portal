export const Footer = () => {
  return (
    <div className="pt-16">
      <div className="w-full border-gray-300 border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto">
        <div className="container mx-auto py-12">
          <div className="xl:flex lg:flex justify-between md:flex pt-6">
            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
              <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                <div aria-label="Home. logo" role="img">
                  <a href="/">
                    <img
                      className=" md:w-auto"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/centre_aligned_simple-Svg1.svg"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 dark:text-gray-50 font-bold text-xl mb-6">
                  Community
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Facebook</a>
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Twitter</a>
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Linkedin</a>
                </li>
              </ul>
            </div>

            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 dark:text-gray-50 font-bold text-xl mb-6">
                  Popular Locations
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">About Us</a>
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Guidelines and how to</a>
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Quote from the best</a>
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">How to start a blog</a>
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Quote from the best</a>
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Guidelines and how to</a>
                </li>
              </ul>
            </div>

            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 dark:text-gray-50 font-bold text-xl mb-6">
                  Popular Roles
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Accessibility</a>
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Usability</a>
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Marketplace</a>
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Design &amp; Dev</a>
                </li>
                <li className="text-base text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 hover:text-gray-700 mb-5">
                  <a href="https://g">Marketplace</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="xl:flex flex-wrap justify-center xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0">
            <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
              <p className="text-gray-800 dark:text-gray-100 ">
                &copy; {new Date().getFullYear()} Startup Jobs Africa. All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
