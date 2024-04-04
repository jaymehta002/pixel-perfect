import React, { useState } from "react";
import Ios from "./Ios";

const Temp = () => {
  // useState hook for managing the user-entered URL
  const [url, setUrl] = useState("");

  // Function to update the URL with user input
  const updateInput = (event) => {
    setUrl(event.target.value);
  };

  // Function to submit the form
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Return the HTML with the <iframe> and the form for user input
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center my-20 items-center"
      >
        <div className="flex items-center mb-4">
          <input
            type="text"
            id="myInput"
            placeholder="Enter website URL"
            value={url}
            onChange={updateInput}
            className="border border-gray-300 rounded-md p-2 mr-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Load
          </button>
        </div>
      </form>

        <Ios url={url} />
    </div>
  );
};

export default Temp;
