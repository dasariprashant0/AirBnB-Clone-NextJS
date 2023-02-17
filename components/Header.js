import Image from "next/image";
import { Bars3Icon,GlobeAltIcon,UserCircleIcon,UsersIcon,MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input type="text" placeholder="Start Your Search ..." className="flex-grow pl-5 bg-transparent outline-none text-gray-500"/>
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center space-x-3 border-2 p-2 rounded-full">
            <Bars3Icon className="h-6" />
            <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
