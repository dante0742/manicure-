import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Grid, UserCog, Settings, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  userName?: string;
  userRole?: string;
  userAvatar?: string;
}

const Sidebar = ({
  userName = "Jane Doe",
  userRole = "Admin",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
}: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Customers", path: "/customers", icon: <Users size={20} /> },
    { name: "Categories", path: "/categories", icon: <Grid size={20} /> },
    { name: "Staff", path: "/staff", icon: <UserCog size={20} /> },
    { name: "Account", path: "/account", icon: <Settings size={20} /> },
    { name: "Payment Entry", path: "/payment-entry", icon: <Grid size={20} /> },
    { name: "Reporting Tools", path: "/reporting-tools", icon: <Grid size={20} /> },
    { name: "Balance Tracker", path: "/balance-tracker", icon: <Grid size={20} /> },
  ];

  return (
    <div className="flex flex-col h-full w-[250px] bg-white border-r border-gray-200 p-4">
      <div className="flex items-center justify-center mb-8 mt-4">
        <h1 className="text-2xl font-bold text-pink-600">ManiPay</h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-md transition-colors ${currentPath === item.path ? "bg-pink-50 text-pink-600" : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"}`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-200">
        <div className="flex items-center px-4 py-3">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">{userName}</p>
            <p className="text-xs text-gray-500">{userRole}</p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-pink-600"
                >
                  <LogOut size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Logout</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
