import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/NavBar";
import DashboardOverview from "./components/Dashboard/DashboardOverview";

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full max-w-full flex justify-between gap-">
      <div className="w-[20%] hidden sm:flex">
        <Sidebar />
      </div>
      <div className="w-full md:w-[80%] md:m-w-[80%] md:mx-auto px-6 md:px-8 mb-10">
        <Navbar />
        <DashboardOverview />
      </div>
    </div>
  );
}

export default App;
