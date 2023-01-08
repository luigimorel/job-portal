export const Newsletter = () => {
  return (
    <div className="xl:flex xl:justify-end pt-16">
      <div className="container sm:mx-auto">
        <div className="block xl:flex justify-between xl:items-center lg:items-center md:flex">
          <div className="w-11/12 xl:w-4/12 mx-auto xl:mx-0 md:w-5/12">
            <h1 className="text-gray-800 dark:text-gray-50  text-3xl font-extrabold mb-3 mt-12 xl:mt-0">
              Sign Up for Email Updates
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
              Sign Up for our job digest newsletter to get the latest jobs updates and amazing offers delivered directly
              in your inbox.
            </p>

            <div className="flex w-full flex-wrap">
              <div className="w-full">
                <div className="flex flex-col mb-3">
                  <label className="text-base font-bold text-gray-800 dark:text-gray-100  mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="johnstark97@gmail.com"
                    className="focus:outline-none   dark:placeholder-gray-400 dark:border-gray-700  focus:border-primary border-gray-300 border rounded-sm py-3 outline-none pl-2 pr-2"
                  />
                </div>
                <button
                  type="submit"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary  bg-primary hover:bg-primary text-white text-base w-full py-3 px-6 rounded">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>

          <div className="w-11/12 xl:w-5/12 mx-auto xl:mx-0 mt-8 xl:mt-0 flex justify-end md:w-5/12 bg-indigo-100  relative py-20">
            <div className="h-4/5 w-4/5">
              <img
                src="https://cdn.tuk.dev/assets/photo-1496430689199-7d6a8ebd3a2f.jfif"
                alt="A man jumping infront of a graffiti"
                className="h-full w-full overflow-hidden object-cover relative z-10 xl:-ml-56 lg:-ml-32 sm:-ml-20 -ml-12 md:-ml-20 rounded"
              />
            </div>
            <div className="absolute bottom-0 right-0 pb-2 pr-2 z-0">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/input_field_with_image-svg1.svg" alt="pattern" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
