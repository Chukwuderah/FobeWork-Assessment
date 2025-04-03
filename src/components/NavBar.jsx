import ThemeToggle from "./ThemeToggle";
import { Bell, Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 px-6 py-4 flex flex-col md:flex-row justify-between items-center border-b border-gray-200 dark:border-gray-700 shadow">
      {/* Left: Greeting */}
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">Hi Sylvanus,</p>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome Back
        </h1>
      </div>

      {/* Right: Actions */}
      <div className="flex flex-col md:flex-row items-center space-x-4">
        <ThemeToggle />

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 w-4 h-4" />
          <input
            type="text"
            placeholder="Search everything"
            className="pl-10 pr-4 py-2 rounded-full 
             bg-white dark:bg-gray-800 
             text-gray-900 dark:text-white 
             placeholder:text-gray-500 dark:placeholder:text-gray-400 
             focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Notification */}
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-400"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="Avatar.png"
            alt="Sylvanus"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm text-left">
            <p className="text-gray-800 dark:text-white font-medium">
              Sylvanus Etim
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">Admin</p>
          </div>
          <ChevronDown />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
