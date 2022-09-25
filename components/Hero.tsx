export default function Hero() {
    return (
        <div className="flex flex-col pl-4 pr-4 pt-24 pb-24 md:p-24">
          <div className="py-2 px-2 text-sm md:text-md ring w-fit ring-purple-700 text-purple-200 rounded-md hover:bg-purple-900 hover:ring-purple-500 ">Discover more over at github</div>
          <div className="w-full text-5xl md:text-7xl text-white font-bold md:w-2/3 pt-8 ">The next gen backend web <span className="text-purple-500">framework.</span> </div>
          <div className="w-full text-xl md:w-2/3 pt-8  text-gray-400">
          Eviate is the next-gen backend framework which is less than <span className="text-purple-400">5 KB</span>, it's based on web standards like Response and Response, has inbuilt  
          <span className="text-purple-400"> config system</span>,
          <span className="text-purple-400"> file based routing</span>,
          <span className="text-purple-400"> response handling</span> and
          <span className="text-purple-400"> much more..</span>
          </div>
          <div className="pt-8 flex flex-row space-x-12">
             <div className="bg-purple-500 text-md hover:bg-purple-900 text-white py-2 px-2 md:py-3 md:px-3 font-bold rounded-md md:text-xl ">Getting Started</div>
             <div className=" text-gray-300 text-md ring ring-gray-700 hover:text-gray-100 md:py-3 md:px-3 py-2 px-2 rounded-md font-bold md:text-xl ">Checkout github</div>
          </div>
        </div>
    )
}