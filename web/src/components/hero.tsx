export const Hero = () => {
  // Toggle header menu in mobile view.
  function toggleMenu(flag: any) {
    let value = document.getElementById("menu");
    if (flag) {
      value?.classList.remove("hidden");
    } else {
      value?.classList.add("hidden");
    }
  }

  return (
    <div className="mt-16 bg-white">
      <div className="container  mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800  font-black leading-7 md:leading-10">
            The Freedom to Work {"  "}
            <span className="text-primary">Anywhere {"  "}</span>
            You Want
          </h1>
          <p className="mt-5 sm:mt-10 text-white lg:w-10/12  font-normal text-center text-sm sm:text-lg">
            Find a remote job in a startup based in Africa
          </p>
        </div>
        <div className="md:flex hidden w-5/12 bg-purple-200 justify-center items-center  py-5 px-4">
          <form action="" className=" flex flex-row w-full">
            <div className="relative w-full text-gray-600 focus-within:text-gray-400 mr-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="search"
                required
                className="py-5 w-full text-base text-white border dark rounded pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Job title"
              />
            </div>

            <button className=" bg-primary border text-white rounded py-5 px-5">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};
