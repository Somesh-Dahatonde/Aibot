import React, { useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [inputText, setInputText] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);
  const chatBody = document.querySelector("#chat-body");

  const themeChanger = () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    console.log(currentTheme);
    if (currentTheme === "dark") {
      htmlElement.setAttribute("data-theme", "light");
    } else {
      htmlElement.setAttribute("data-theme", "dark");
    }
  };

  const handleInput = async () => {
    if (inputText === " ") {
      alert("Please enter a valid input");
      return;
    }
    setIsLoading(true); // Start loading animation
    const options = {
      method: "POST",
      url: "https://chatgpt53.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "06d0b44926msh1d7f9a6687fb263p1147fejsn7142c6589dab",
        "X-RapidAPI-Host": "chatgpt53.p.rapidapi.com",
      },
      data: {
        messages: [
          {
            role: "user",
            content: inputText,
          },
        ],
      },
    };

    const userMessage = () => {
      // Right bubble message
      const message = document.createElement("div");
      const mes_res = document.createElement("div");
      message.classList.add("chat");
      message.classList.add("chat-end");
      mes_res.classList.add("chat-bubble");
      const text = document.createTextNode(inputText);
      mes_res.appendChild(text);
      message.appendChild(mes_res);
      chatBody.appendChild(message);
    };

    userMessage();

    const render = (res) => {
      // Left bubble message
      const botRes = document.createElement("div");
      const bot_res = document.createElement("div");
      botRes.classList.add("chat");
      botRes.classList.add("chat-start");
      bot_res.classList.add("chat-bubble");
      const botText = document.createTextNode(res);
      bot_res.appendChild(botText);
      botRes.appendChild(bot_res);
      chatBody.appendChild(botRes);
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const responseData = response.data.choices[0].message.content;
      render(responseData);
      console.log("btn clicked " + responseData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }

    document.getElementById("text-input").value = "";
    // setInputText("");
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

                {/* theme handler */}
                <label className="swap swap-rotate  ml-3">
                  <input type="checkbox" />
                  <svg
                    className="swap-on fill-current w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onClick={themeChanger}
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  <svg
                    className="swap-off fill-current w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onClick={themeChanger}
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </ul>
            </div>
          </div>

          {/* <!-- Content --> */}

          <main className="flex-1">
            <div className="container mx-auto px-4 py-8">
              <div id="chat-body" className="chat-body">
                {" "}
                {isLoading && (
                  <div className="loading-animation">
                    {/*loading animation here */}
                    <pre data-prefix=">" className="text-warning animate-pulse">
                      <code>Typing...</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </main>

          <footer className="">
            <div className="container mx-auto px-4 py-8">
              <div className="flex">
                <input
                  type="text"
                  id="text-input"
                  placeholder="Ask me anything..."
                  className="w-full p-4 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                  onChange={(e) => setInputText(e.target.value)}
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
            <label className="swap swap-rotate mr-4 absolute right-0 ">
              <input type="checkbox" />
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={themeChanger}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={themeChanger}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
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
