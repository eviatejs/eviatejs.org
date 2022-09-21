import Image from "next/image"
import Logo from "../public/logo.png"
function Navbar() {
    return (
        <div className="pl-24 pr-24 pt-12 flex flex-row justify-between ">
            <div className="flex flex-row">
              <Image src={Logo} height={75} width={75} />
            </div>
            <div className="flex flex-row">
                <button className="text-black fomt-extrabold rounded-md px-3  font-bold font-2xl bg-gradient-to-br  from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500" >Coming Soon</button>
            </div>
        </div>
    )
}

export default Navbar