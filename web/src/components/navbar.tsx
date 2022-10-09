import { useState } from "react";

// import { HashLink } from "react-router-hash-link";
import Ham from "../assets/icon-hamburger.svg";
import Close from "../assets/icons/icon-close.svg";

const menuList = [
  {
    id: 1,
    text: "About",
    route: "/#home",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed z-50  px-3 sm:px-20 lg:px-40 top-0 w-full">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-5 lg:my-6">
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

          <div className="hidden lg:block text-sm">
            {menuList.map((x) => (
              <a
                className="mx-3 py-5 text-base text-gray-800 dark:text-white "
                href={x.route}
              >
                {x.text}
              </a>
            ))}
          </div>

          <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 dark:focus:ring-indigo-100 dark focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 dark:border-indigo-100 text-indigo-700 dark:text-indigo-100 dark:hover:bg-indigo-800 px-4 sm:px-8 py-1 sm:py-2 text-sm">
            <a
              href=""
              target={"_blank"}
              className=" text-base"
              rel="noreferrer"
            >
              Post a job
            </a>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <img className={`${isOpen && "hidden"}`} src={Ham} alt="" />
            <img className={isOpen ? "block" : "hidden"} src={Close} alt="" />
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-gray-800
      bg-opacity-50 ${isOpen ? "block" : "hidden"}`}
      >
        <div className="bg-white text-gray-800 dark:text-gray-50 flex flex-col text-center my-20 py-4 rounded">
          {menuList.map((x) => (
            <a key={x.id} className="py-2" href={x.route}>
              <p className=" mb-2.5"> {x.text}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
function clsx(navClassName: string, arg1: string): string | undefined {
  throw new Error("Function not implemented.");
}
