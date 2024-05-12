import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="navbar bg-base-100 font-lexend text-customViolet">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">Calorie Kitchen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="hidden md:block lg:block">
        <label className="input input-bordered flex items-center  gap-4 rounded-full ">
          <CiSearch />
          <input type="text" className="grow " placeholder="Search" />
        </label>
        </div>
        <div className="text-2xl bg-customGreen rounded-full p-2">
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Header;
