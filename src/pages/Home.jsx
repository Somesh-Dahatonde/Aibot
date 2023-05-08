import React from "react";
import Generator from "../pages/Generator";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [inputText, setInputText] = React.useState("");
  const [sendData, setSendData] = React.useState("");
  const [newResponse, setNewResponse] = React.useState([]);

  const handleInput = () => {
    setNewResponse([...newResponse, inputText]);
    console.log(newResponse);
  };

  return (
    <>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                tabIndex={0}
                htmlFor="my-drawer-3"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">CodeWhiz</div>
            <div className="flex-none  hidden lg:block">
              <ul className="menu menu-horizontal">
                <div className="navbar-end flex flex-row">
                  <button className="btn btn-ghost btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                  <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                      <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                  </button>
                </div>
              </ul>
            </div>
          </div>

          {/* <!-- Content --> */}
          <main className="flex-1">
            <div className="container mx-auto px-4 py-8">
              <Generator prop={newResponse} />
            </div>
          </main>
          <footer className="">
            <div className="container mx-auto px-4 py-8">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter code Description"
                  className="w-full p-4 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                  onChange={(e) => setInputText(e.target.value)}
                  // value={inputText}
                />
                <button
                  className="px-8 rounded-r-lg bg-gray-800 text-white font-bold p-4 uppercase border-gray-800 border-t border-b border-r"
                  onClick={handleInput}
                >
                  Generate
                </button>
              </div>
            </div>
            <Footer />
          </footer>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 relative">
            <div className="avatar m-20 ">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  alt=""
                  src="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=612x612&w=is&k=20&c=BodYmsmVrbpzrsNyI_ExhvDxkIWgP8XZPMzsv8zUIRA="
                />
              </div>
            </div>
            {/* <!-- Sidebar content here --> */}
            <li>
              <a href="#!">Sidebar Item 1</a>
            </li>
            <li>
              <a href="#!">Sidebar Item 2</a>
            </li>
            <li className="m-20">
              <Link to="/Signup" className="btn btn-primary">
                SignUp
              </Link>
            </li>
            <li className="absolute bottom-0 right-0 p-4">
              <footer className="footer footer-center p-4 bg-base-300 text-base-content ">
                <div>
                  <p>
                    CodeWhiz is a platform for developers to practice their
                    coding skills.
                  </p>
                </div>
              </footer>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
