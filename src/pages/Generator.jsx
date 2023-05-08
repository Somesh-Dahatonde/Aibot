import React, { useState } from "react";
import Footer from "../Components/Footer";
import axios from "axios";

function Generator() {
  const [inputText, setInputText] = useState("");
  const chatBody = document.querySelector("#chat-body");

  const handleInput = async () => {
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
      botRes.classList.add("text-lg");
      botRes.classList.add("chat-start");
      bot_res.classList.add("chat-bubble");
      const botText = document.createTextNode(res);
      bot_res.appendChild(botText);
      botRes.appendChild(bot_res);
      chatBody.appendChild(botRes);
    };

    try {
      const response = await axios.request(options);
      const responseData = response.data.choices[0].message.content;
      render(responseData);
      console.log("btn clicked" + responseData);
    } catch (error) {
      console.error(error);
    }

    document.getElementById("text-input").value = "";
    // setInputText("");
  };

  window.addEventListener("scroll", function () {
    // Check if the user has reached the bottom of the page
    if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight) {
      // Scroll to the bottom of the page
      window.scrollTo(0, document.body.scrollHeight);
    }
  });

  return (
    <>
      <main className="flex-1 ">
        <div className="container mx-auto px-4 py-8">
          <div id="chat-body" className="chat-body "></div>
        </div>
      </main>

      <footer className="">
        <div className="container mx-auto px-4 py-8">
          <div className="flex">
            <input
              type="text"
              id="text-input"
              placeholder="Enter code Description"
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
    </>
  );
}

export default Generator;
