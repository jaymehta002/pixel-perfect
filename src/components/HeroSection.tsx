import React, { useState } from 'react';
import Ios from './Ios';

export default () => {
    const [url, setUrl] = useState("https://");

    const handleUrlSubmit = (e) => {
        e.preventDefault();
        // Update the URL only when the "Pix it" button is clicked
        setUrl(e.target.elements.url.value);
    };

    return (
        <>
            <header></header>
            <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
                        Optimize your website for
                         <span className="text-purple-600"> Every screen</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        At Pixel Perfect, we redefine precision. From websites to graphics, every pixel matters. Let's transform your vision into pixel-perfect reality.
                    </p>
                    <div>
                        <p className="text-gray-800 py-3">
                            Enter website URL
                        </p>
                        <form onSubmit={handleUrlSubmit} className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
                            <input
                                type="text"
                                name="url"
                                placeholder="Enter website URL"
                                className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
                            />
                            <button type="submit" className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
                                Pix it
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                    {/* <img src="https://i.postimg.cc/kgd4WhyS/container.png" className="w-full mx-auto sm:w-10/12  lg:w-full" alt="Website simulation on different devices" /> */}
                    <img src="/img/home.png" className="w-full mx-auto sm:w-10/12  lg:w-full" alt="Website simulation on different devices" />
                </div>
            </section>

            {/* <section className="mt-16 mx-auto max-w-screen-xl px-4">
                <h2 className="text-gray-800 font-bold text-3xl text-center">
                    Simulate on iPhone
                </h2>
                <Ios url={`https://${url}`} />
            </section> */}
        </>
    );
};
