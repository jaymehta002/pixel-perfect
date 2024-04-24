'use client'
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Ios from "@/components/Screens/Ios";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [screen, setScreen] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the entered URL
    console.log("Submitted URL:", url);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleScreenSelection = (selectedScreen: string) => {
    setScreen(selectedScreen);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <>
      <NavBar /> 
      <div className="h-40 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex gap-4 items-center justify-center h-full"
        >
          <input
            type="text"
            value={url}
            onChange={handleChange}
            placeholder="Enter URL"
            className="w-1/2 p-2 border-2  text-black rounded-lg"
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white rounded-lg p-2 px-4"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-start md:mx-40 mt-4">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            <span>Dropdown</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM7 12a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <button onClick={() => handleScreenSelection('IOS')} className="block px-4 py-2 w-full text-gray-800 hover:bg-gray-200">
                Ios
              </button>
              <button onClick={() => handleScreenSelection('ANDROID')} className="block px-4 py-2 w-full text-gray-800 hover:bg-gray-200">
                Android
              </button>
              <button onClick={() => handleScreenSelection('DESKTOP')} className="block px-4 py-2 w-full text-gray-800 hover:bg-gray-200">
                Desktop
              </button>
            </div>
          )} 
        </div>
      </div>
        <div className="mt-8">
        <Ios url={url} />
        </div>
    </>
  );
}
