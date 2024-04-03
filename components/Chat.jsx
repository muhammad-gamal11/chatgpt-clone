"use client";

import { IoIosArrowDropupCircle } from "react-icons/io";
import { useState } from "react";

function Chat() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        <h2 className="text-5xl">messages</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12 relative">
        <div className="join w-full relative">
          <input
            type="text"
            placeholder="Have a little chat with ChatGPT"
            className="input   join-item w-full pr-12"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-outline border-0 join-item absolute right-[-4px] "
            type="submit"
          >
            <IoIosArrowDropupCircle className="text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
