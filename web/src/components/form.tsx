import { FormEvent, useState } from "react";

export const Form = () => {
  const [state, setState] = useState({ username: "", age: null });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const age = state.age;

    if (!Number(age)) {
      alert("Your age must be a number");
      return;
    }

    console.log("submitting", state);
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  return (
    <div className=" flex flex-col w-full    mx-auto items-center">
      <form action="" className=" w-6/12">
        <div className=" flex mb-4  flex-col">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            className=" rounded"
            name="jobTitle"
            id="jobTitle"
          />
        </div>

        <div className=" flex mb-4  flex-col">
          <label htmlFor="jobTitle">Company</label>
          <input
            type="text"
            className=" rounded"
            name="jobTitle"
            id="jobTitle"
          />
        </div>

        <div className=" flex mb-4  flex-col">
          <label htmlFor="logo">Logo</label>
          <input type="text" className=" rounded" name="logo" id="logo" />
        </div>

        <div className=" flex mb-4  flex-row">
          <div className=" flex mb-4  flex-col mr-5">
            <label htmlFor="keywords">Role</label>
            <input
              type="text"
              name="keywords"
              className=" rounded"
              multiple
              id="keywords"
            />
          </div>

          <div className=" flex mb-4  flex-col">
            <label htmlFor="keywords">Employment type</label>
            <input
              type="text"
              name="keywords"
              className=" rounded"
              multiple
              id="keywords"
            />
          </div>
        </div>

        <div className=" flex mb-4  flex-col mr-5">
          <label htmlFor="continent">Continent</label>
          <input
            type="text"
            name="continent"
            className=" rounded"
            id="continent"
          />
        </div>

        <div className=" flex mb-4  flex-col mr-5">
          <label htmlFor="country">Country</label>
          <input type="text" name="country" className=" rounded" id="country" />
        </div>

        <div className=" flex mb-4  flex-col">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            className=" rounded"
            multiple
            id="city"
          />
        </div>

        <div className=" flex mb-4  flex-col">
          <label htmlFor="industry">Industry</label>
          <input
            type="text"
            name="industry"
            className=" rounded"
            id="industry"
          />
        </div>

        <div className=" flex mb-4  flex-col">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            name="duration"
            className=" rounded"
            id="duration"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
