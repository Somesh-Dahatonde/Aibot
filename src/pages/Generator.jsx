import React, { useState } from "react";

function Generator(prop) {
  const [conversation, setConversation] = useState([]);
  console.log(prop.prop);

  const userRes = prop.prop;

  const handleNewResponse = (newResponse) => {
    setConversation([...conversation, newResponse]);
  };
  // console.log(conversation);
  return (
    <>
      <div className="chat chat-start">
        {conversation.map((message, index) => (
          <div key={index} className="chat chat-start">
            {message}
          </div>
        ))}
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble" id="chat-bubble">
          {userRes.map((message, index) => (
            <div key={index} className="chat chat-end ">
              {message}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Generator;
