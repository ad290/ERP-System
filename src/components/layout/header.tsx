
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { UserRound } from "lucide-react";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const currentUser = localStorage.getItem("currentUser") 
    ? JSON.parse(localStorage.getItem("currentUser") || '{}') 
    : null;

  return (
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <h2 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300 hover:from-amber-600 hover:via-yellow-500 hover:to-amber-400 transition-all duration-300 cursor-pointer" 
              style={{
                textShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                filter: "drop-shadow(0 0 2px rgba(255, 215, 0, 0.3))"
              }}
              onClick={() => navigate("/")}
            >
              ERP SYSTEM
            </h2>
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <UserRound className="mr-2 h-4 w-4" />
                  Profile
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[250px] p-4">
                    {currentUser && (
                      <div className="space-y-2">
                        <h3 className="font-medium text-lg">{currentUser.name}</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>Email: {currentUser.email}</p>
                          {currentUser.department && (
                            <p>Department: {currentUser.department}</p>
                          )}
                          {currentUser.rollNo && (
                            <p>Roll No: {currentUser.rollNo}</p>
                          )}
                          <p>Role: {currentUser.role}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-academic-blue/50 to-academic-purple/50 p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Academic Time Tracker
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Comprehensive academic scheduling system for educational institutions
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")} href="#">
                          <div className="text-sm font-medium leading-none">Course Management</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Add and manage courses across departments</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")} href="#">
                          <div className="text-sm font-medium leading-none">Schedule Classes</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Interactive calendar for class scheduling</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")} href="#">
                          <div className="text-sm font-medium leading-none">User Management</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Manage professors, guest lecturers and students</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
