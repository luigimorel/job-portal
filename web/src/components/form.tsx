import { useState } from "react";

import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

import { postAJob } from "../services/jobservice";

export const Form = () => {
  const [formState, setFormState] = useState({
    title: "",
    company: "",
    contact_email: "",
    logo: "",
    role: "",
    job_type: "",
    continent: "",
    country: "",
    city: "",
    industry: "",
    duration: "",
    jobdescription: "",
    application_link: "",
    company_website: "",
    location_of_work_place: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    postAJob(formState);
  };

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <div className=" flex flex-col w-full bg-white md:pt-10 pt-5 mx-auto items-center">
        <form action="" onSubmit={handleSubmit} className=" md:w-6/12 w-full px-4 md:px-0">
          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="title">
              Job Title
              <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              name="title"
              value={formState.title}
              id="title"
              required
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="company">
              Company <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              name="company"
              required
              id="company"
              value={formState.company}
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="contact_email">
              Contact Email Address<span className=" text-red-600">*</span>
            </label>
            <input
              type="email"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              name="contact_email"
              id="contact_email"
              value={formState.contact_email}
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
              value={formState.logo}
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="application_link">
              Application Link <span className=" text-red-600">*</span>
            </label>
            <input
              type="url"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              name="application_link"
              required
              placeholder="https://company-logo.com/url"
              id="application_link"
              value={formState.application_link}
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="company_website">
              Company Website <span className=" text-red-600">*</span>
            </label>
            <input
              type="url"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              name="company_website"
              required
              placeholder="https://company-logo.com/url"
              id="company_website"
              value={formState.company_website}
            />
          </div>

          <div className=" flex md:w-1/2 w-full py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="job_type">
              Employment type <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              name="job_type"
              required
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              multiple
              value={formState.job_type}
              id="job_type"
            />
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
              value={formState.continent}
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
              value={formState.country}
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
              value={formState.city}
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              multiple
              id="city"
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="location_of_work_place">
              Location of Work Place <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              name="location_of_work_place"
              value={formState.location_of_work_place}
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              multiple
              id="location_of_work_place"
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
              value={formState.industry}
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
              value={formState.duration}
              name="duration"
              className=" rounded py-3 text-black placeholder:text-gray-600  bg-white"
              onChange={handleChange}
              id="duration"
            />
          </div>

          <div className=" flex py-3 mb-4  flex-col">
            <label className=" text-gray-900 mb-2" htmlFor="jobdescription">
              Job Description <span className=" text-red-600">*</span>
            </label>
            <ReactQuill
              className=" text-gray-900"
              id="jobdescription"
              value={formState.jobdescription}
              onChange={handleChange}
            />
            ;
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
