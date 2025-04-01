
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar";
import { Home, Calendar, Award, TrendingUp } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navigationItems = [
    { title: "Dashboard", path: "/", icon: Home },
    { title: "Workout History", path: "/workout-history", icon: Calendar },
    { title: "Personal Records", path: "/personal-records", icon: Award },
    { title: "Progress", path: "/progress", icon: TrendingUp },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar className="border-r">
          <SidebarContent>
            <div className="px-3 py-4">
              <h1 className="text-xl font-bold text-fitness-primary">Peak Fitness</h1>
            </div>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton asChild>
                        <Link 
                          to={item.path}
                          className={`flex items-center gap-3 text-sm ${location.pathname === item.path ? 'text-fitness-primary font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 overflow-auto">
          <div className="p-4 md:p-6">
            <div className="container mx-auto max-w-7xl">
              <div className="flex items-center mb-4 md:hidden">
                <SidebarTrigger className="mr-2" />
                <h1 className="text-xl font-bold text-fitness-primary">Peak Fitness</h1>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
