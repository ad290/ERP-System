
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-gray-100 dark:from-background dark:to-gray-900 transition-colors duration-500">
      {/* Navigation */}
      <header className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300 hover:from-amber-600 hover:via-yellow-500 hover:to-amber-400 transition-all duration-300"
            style={{ 
              textShadow: "0px 2px 4px rgba(0,0,0,0.2)",
              filter: "drop-shadow(0 0 2px rgba(255, 215, 0, 0.3))"
            }}>
            ERP SYSTEM
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="nav-link text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="nav-link text-foreground hover:text-primary transition-colors">About</a>
              <a href="#features" className="nav-link text-foreground hover:text-primary transition-colors">Features</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto pt-20 pb-32 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-fade-in">
          Welcome to ERP
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl text-muted-foreground animate-fade-in" style={{animationDelay: "0.2s"}}>
          A comprehensive academic scheduling system designed for educational institutions to manage courses, professors, and schedules effectively
        </p>
        <Button 
          size="lg" 
          className="group hover:scale-105 transition-all duration-300"
          onClick={() => navigate("/login")}
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Our System</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Our Educational Resource Planning (ERP) system is designed to streamline administrative processes for educational institutions.
              </p>
              <p className="text-lg">
                With intuitive interfaces for administrators, professors, and students, we make academic management simple and efficient.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Our ERP?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-2 text-primary">✓</span>
                  <span>Simplified class scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-2 text-primary">✓</span>
                  <span>Department and course management</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-2 text-primary">✓</span>
                  <span>Role-based access for all users</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-2 text-primary">✓</span>
                  <span>Real-time schedule updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 hover:bg-card transition-colors duration-300 p-6 rounded-lg shadow hover:shadow-lg">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Course Management</h3>
              <p className="text-muted-foreground">Create and manage courses across different departments with ease.</p>
            </div>

            <div className="bg-card/50 hover:bg-card transition-colors duration-300 p-6 rounded-lg shadow hover:shadow-lg">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Planning</h3>
              <p className="text-muted-foreground">Intuitive calendar interface for planning and managing class schedules.</p>
            </div>

            <div className="bg-card/50 hover:bg-card transition-colors duration-300 p-6 rounded-lg shadow hover:shadow-lg">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">User Management</h3>
              <p className="text-muted-foreground">Role-based access for administrators, professors, and students.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 ERP System. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
