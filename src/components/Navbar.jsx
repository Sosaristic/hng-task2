import Tv from "../assets/svg/tv.svg";
import Menu from "../assets/svg/Menu.svg";
import { MdSearch } from "react-icons/md";
export default function Navbar() {
  return (
    <nav className=" text-white relative h-[5rem] w-full items-center justify-between flex">
      <div className="flex items-center gap-2 lg:gap-[24px]">
        <img src={Tv} alt="" />
        <p className=" lg:text-[1.5rem] hidden md:block font-[700]">MovieBox</p>
      </div>
      <div className=" hidden md:flex bg-transparent border-2 items-center w-[40%] px-[10px] py-[6px] rounded-[6px]">
        <input
          type="text"
          className="bg-transparent w-[80%] outline-none"
          placeholder="What do you want to watch?"
        />
        <span className="ml-auto text-xl">
          <MdSearch />
        </span>
      </div>
      <span className="ml-auto text-2xl md:hidden">
        <MdSearch />
      </span>
      <div className="flex  gap-2 lg:gap-[1.688rem]">
        <button>Sign in</button>
        <img src={Menu} alt="" />
      </div>
    </nav>
  );
}
