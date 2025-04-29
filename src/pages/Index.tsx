
import { LoginForm } from "@/components/login-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      const userData = JSON.parse(user);
      switch (userData.role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "professor":
          navigate("/professor/dashboard");
          break;
        case "guestProfessor":
          navigate("/guest-professor/dashboard");
          break;
        case "student":
          navigate("/student/dashboard");
          break;
        default:
          break;
      }
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-gray-100 dark:from-background dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto pt-8 pb-16">
        <div className="flex items-center justify-between mb-12">
          <div 
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300 hover:from-amber-600 hover:via-yellow-500 hover:to-amber-400 transition-all duration-300" 
            style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.2)",
              filter: "drop-shadow(0 0 2px rgba(255, 215, 0, 0.3))"
            }}
            onClick={() => navigate("/")}
          >
            ERP SYSTEM
          </div>
          <ThemeToggle />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
