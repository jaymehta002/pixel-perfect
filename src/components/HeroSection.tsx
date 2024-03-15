export default function HeroSection() {
    return (
        <div className="relative font-inter h-screen overflow-hidden bg-[url('/background.svg')] bg-top top-0 bg-white bg-no-repeat ">
        <div className="max-w-[85rem]  mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div className="flex justify-center">
            </div>

            <div className="mt-16 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-5xl md:text-5xl lg:text-8xl">
                Every Pixel Matters
            </h1>
            </div>

            <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="md:text-xl text-base text-gray-600">Discover Pixel Perfect, the ultimate open-source companion, empowering you to achieve flawless web design mastery, down to the last pixel.</p>
            </div>
            
            
            <form className="flex mt-8 items-center max-w-sm mx-auto">   
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                        </svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5  " placeholder="Enter your url..." required />
                </div>
                <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 ">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
        </div>
        </div>
    )
}