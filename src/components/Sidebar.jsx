import { useState } from "react";
import {
  LayoutGrid,
  User,
  Wallet,
  RefreshCcw,
  ArrowUpRight,
  Briefcase,
  Download,
  FileText,
  Code,
  Settings,
  File,
  Wrench,
  LifeBuoy,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const [developerOpen, setDeveloperOpen] = useState(false);
  const [transactionsOpen, setTransactionsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  // Main Menu Items
  const menuItems = [
    // { name: "Dashboard", icon: <LayoutGrid /> },
    { name: "Wallet", icon: <Wallet /> },
    { name: "Deposit", icon: <Briefcase /> },
    { name: "Withdraw", icon: <Download /> },
    { name: "Invoice", icon: <FileText /> },
    { name: "Fund Transfer", icon: <ArrowUpRight /> },
  ];

  // Transactions Dropdown Items
  const transactions = [
    { name: "History", icon: <RefreshCcw /> },
    { name: "New Transfer", icon: <ArrowUpRight /> },
  ];

  // Account Dropdown Items
  const accounts = [
    { name: "All Accounts", icon: <User /> },
    { name: "Add Account", icon: <User /> },
  ];

  // Developer Dropdown Items
  const developers = [
    { name: "Settings", icon: <Settings /> },
    { name: "API Doc", icon: <File /> },
    { name: "API Setting", icon: <Wrench /> },
  ];

  return (
    <aside className=" w-64 min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 border-r border-[#7AC231] p-8 transition-colors flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Dashboard Header */}
        <div className="mb-12">
          <img
            src="/logo-light.png"
            alt="Payyble Logo"
            className="h-6 w-auto block dark:hidden"
          />
          <img
            src="/logo-dark.png"
            alt="Payyble Logo"
            className="h-6 w-auto hidden dark:block"
          />
        </div>

        <div className="flex items-center justify-between p-3 border border-[#7AC231] rounded-[20px] text-[#7AC231] dark:border-[#7AC231]">
          <div className="flex items-center space-x-2">
            <LayoutGrid className="w-5 h-5" />
            <span>Dashboard</span>
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-6">
          <ul className="space-y-2">
            {/* Standard Menu Items */}
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition"
              >
                {item.icon}
                <span>{item.name}</span>
              </li>
            ))}

            {/* Account Section */}
            <li
              className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition"
              onClick={() => setAccountOpen(!accountOpen)}
            >
              <div className="flex items-center space-x-3">
                <User />
                <span>My Account</span>
              </div>
              {accountOpen ? <ChevronDown /> : <ChevronRight />}
            </li>
            {accountOpen && (
              <ul className="pl-6 space-y-2">
                {accounts.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Transactions Section */}
            <li
              className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition"
              onClick={() => setTransactionsOpen(!transactionsOpen)}
            >
              <div className="flex items-center space-x-3">
                <RefreshCcw />
                <span>Transactions</span>
              </div>
              {transactionsOpen ? <ChevronDown /> : <ChevronRight />}
            </li>
            {transactionsOpen && (
              <ul className="pl-6 space-y-2">
                {transactions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Developer Section */}
            <li
              className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition"
              onClick={() => setDeveloperOpen(!developerOpen)}
            >
              <div className="flex items-center space-x-3">
                <Code />
                <span>Developer</span>
              </div>
              {developerOpen ? <ChevronDown /> : <ChevronRight />}
            </li>
            {developerOpen && (
              <ul className="pl-6 space-y-2">
                {developers.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Support Section */}
        <div className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition">
          <LifeBuoy />
          <span>Support</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
