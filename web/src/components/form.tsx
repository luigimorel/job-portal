import { FormEvent, useState } from "react";

export const Form = () => {
  const [state, setState] = useState({ username: "", age: null });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  // TODO: Handle form changes and state plus post request

  return (
    <>
      <div className=" flex flex-col w-full bg-white md:pt-10 pt-5 mx-auto items-center">
        <form action="" onSubmit={handleSubmit} className=" md:w-6/12 w-full px-4 md:px-0">
          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="jobTitle">
              Job Title
              <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              name="jobTitle"
              id="jobTitle"
              required
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="jobTitle">
              Company <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              name="jobTitle"
              required
              id="jobTitle"
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="contact-email">
              Contact Email Address<span className=" text-red-600">*</span>
            </label>
            <input
              type="email"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              name="contact-email"
              id="contact-email"
              required
              placeholder="Email"
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="logo">
              Logo <span className=" text-red-600">*</span>
            </label>
            <input
              type="url"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              name="logo"
              required
              placeholder="https://company-logo.com/url"
              id="logo"
            />
          </div>

          <div className=" flex mb-4 py-3 md:flex-row flex-col items-center w-full">
            <div className=" flex mb-4 md:w-1/2 w-full  flex-col md:mr-5">
              <label className=" text-gray-900 mb-2" htmlFor="keywords">
                Role <span className=" text-red-600">*</span>
              </label>
              <input
                type="text"
                name="keywords"
                required
                className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
                onChange={handleChange}
                multiple
                id="keywords"
              />
            </div>

            <div className=" flex md:w-1/2 w-full py-3 mb-4  flex-col">
              <label className=" text-gray-900 mb-2" htmlFor="keywords">
                Employment type <span className=" text-red-600">*</span>
              </label>
              <input
                type="text"
                name="keywords"
                required
                className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
                onChange={handleChange}
                multiple
                id="keywords"
              />
            </div>
          </div>

          <div className=" flex mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="continent">
              Continent <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              name="continent"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              required
              id="continent"
            />
          </div>

          <div className=" flex mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="country">
              Country <span className=" text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              name="country"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              id="country"
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="city">
              City <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              name="city"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              multiple
              id="city"
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="industry">
              Industry <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              name="industry"
              required
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              id="industry"
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="duration">
              Duration <span className=" text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              name="duration"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              id="duration"
            />
          </div>

          {/* TODO: Add a rich text editor here instead */}
          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="jobdescription">
              Job Description <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              name="jobdescription"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              id="jobdescription"
              required
            />
          </div>

          <div className=" flex justify-center">
            <button className=" py-3 border px-5 text-gray-800 border-gray-400 rounded" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
