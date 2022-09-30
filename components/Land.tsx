import code from "../public/code2.svg"
import Image from "next/image"
import Button from "./Button"
export default function Landing() {
    return (
        <div className="">
        <div className="min-h-screen min-w-full flex flex-row items-center justify-center   text-white font-roboto">
            <div className="flex flex-col">
             <div className="font-extrabold text-transparent text-[10rem] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700">Eviatejs</div>
             <div className="text-4xl text-white">The next-gen backend web framework</div>
             <div className="w-[50rem] text-gray-500 pt-3">Eviate is the next-gen backend framework which is less than 5 KB, it's based on web standards like Response and Request, has inbuilt config system, file based routing, response handling and much more..</div>
             <div className="flex flex-row space-x-12 pt-8">
               { Button("Check-out the docs") }
              { Button("npx create-eviate-app")}
             </div>
            </div>
            <Image className="code" src={code}/>
        </div>
        </div>
    )
}