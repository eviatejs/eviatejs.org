import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import { HiMenuAlt4 } from 'react-icons/hi';
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm flex justify-center items-center font-bold leading-relaxed space-x-3 mr-4 py-2 whitespace-nowrap  text-white"
              href="#pablo"
            >
              <Image src={logo} height={50} width={50} />{' '}
              <span className="text-3xl text-purple-500 "> Eviate </span>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <HiMenuAlt4 height={500} width={25} />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm  font-bold leading-snug text-white hover:opacity-75"
                  href="https://docs-eviate.vercel.app"
                >
                  Documentation
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm  font-bold leading-snug text-white hover:opacity-75"
                  href="https://github.com/eviatejs/eviate"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
