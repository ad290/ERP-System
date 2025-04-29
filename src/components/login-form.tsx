
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { LogIn, Key, User, UserPlus } from "lucide-react";

// Mock user data - in a real app, this would come from a database
const users = {
  admin: {
    name: "Admin",
    email: "erpadmin@gmail.com",
    password: "password123",
    role: "admin"
  },
  professors: [
    {
      name: "Prof. Amit",
      department: "Computer Science",
      email: "amiterp@gmail.com",
      password: "password123",
      role: "professor"
    },
    {
      name: "Prof. Rohit",
      department: "AIML",
      email: "rohiterp@gmail.com",
      password: "password123",
      role: "professor"
    },
    {
      name: "Prof. Virat",
      department: "Data Science",
      email: "amiterp@gmail.com",
      password: "password123",
      role: "professor"
    }
  ],
  guestProfessors: [
    {
      name: "Guest Prof Suresh",
      department: "Computer Science",
      email: "erpguestsuresh@gmail.com",
      password: "password123",
      role: "guestProfessor"
    },
    {
      name: "Guest Prof Gourav",
      department: "AIML",
      email: "erpguestgourav@gmail.com",
      password: "password123",
      role: "guestProfessor"
    },
    {
      name: "Guest Prof Narayan",
      department: "Data Science",
      email: "erpguest@gmail.com",
      password: "password123",
      role: "guestProfessor"
    }
  ],
  students: [
    {
      name: "Aditya Pawar",
      rollNo: "01",
      email: "adityaerp@gmail.com",
      password: "password123",
      role: "student"
    },
    {
      name: "Kiran Sharma",
      rollNo: "02",
      email: "kiranaerp@gmail.com",
      password: "password123",
      role: "student"
    },
    {
      name: "Rahul Rajput",
      rollNo: "03",
      email: "rahulerp@gmail.com",
      password: "password123",
      role: "student"
    },
    {
      name: "Vivek Tiwari",
      rollNo: "04",
      email: "vivekerp@gmail.com",
      password: "password123",
      role: "student"
    },
    {
      name: "Dhruv Dixit",
      rollNo: "05",
      email: "dhruverp@gmail.com",
      password: "password123",
      role: "student"
    }
  ]
};

export function LoginForm() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("admin");
  
  // Admin form state
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  
  // Professor form state
  const [professorName, setProfessorName] = useState("");
  const [professorDepartment, setProfessorDepartment] = useState("Computer Science");
  const [professorEmail, setProfessorEmail] = useState("");
  const [professorPassword, setProfessorPassword] = useState("");
  
  // Guest Professor form state
  const [guestProfName, setGuestProfName] = useState("");
  const [guestProfRole, setGuestProfRole] = useState("Guest Professor");
  const [guestProfDepartment, setGuestProfDepartment] = useState("Computer Science");
  const [guestProfEmail, setGuestProfEmail] = useState("");
  const [guestProfPassword, setGuestProfPassword] = useState("");
  
  // Student form state
  const [studentName, setStudentName] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminEmail === users.admin.email && adminPassword === users.admin.password) {
      localStorage.setItem("currentUser", JSON.stringify(users.admin));
      toast.success("Login successful!");
      navigate("/admin/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };
  
  const handleProfessorLogin = (e) => {
    e.preventDefault();
    const professor = users.professors.find(
      (prof) => prof.email === professorEmail && prof.password === professorPassword
    );
    if (professor) {
      localStorage.setItem("currentUser", JSON.stringify(professor));
      toast.success("Login successful!");
      navigate("/professor/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };
  
  const handleGuestProfessorLogin = (e) => {
    e.preventDefault();
    const guestProf = users.guestProfessors.find(
      (prof) => prof.email === guestProfEmail && prof.password === guestProfPassword
    );
    if (guestProf) {
      localStorage.setItem("currentUser", JSON.stringify(guestProf));
      toast.success("Login successful!");
      navigate("/guest-professor/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };
  
  const handleStudentLogin = (e) => {
    e.preventDefault();
    const student = users.students.find(
      (stud) => stud.email === studentEmail && stud.password === studentPassword
    );
    if (student) {
      localStorage.setItem("currentUser", JSON.stringify(student));
      toast.success("Login successful!");
      navigate("/student/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  // Demo credentials handlers
  const fillAdminDemoCredentials = () => {
    setAdminEmail("erpadmin@gmail.com");
    setAdminPassword("password123");
    toast.info("Demo credentials filled!");
  };

  const fillProfessorDemoCredentials = () => {
    setProfessorName("Prof. Amit");
    setProfessorDepartment("Computer Science");
    setProfessorEmail("amiterp@gmail.com");
    setProfessorPassword("password123");
    toast.info("Demo credentials filled!");
  };

  const fillGuestProfDemoCredentials = () => {
    setGuestProfName("Guest Prof Suresh");
    setGuestProfRole("Guest Professor");
    setGuestProfDepartment("Computer Science");
    setGuestProfEmail("erpguestsuresh@gmail.com");
    setGuestProfPassword("password123");
    toast.info("Demo credentials filled!");
  };

  const fillStudentDemoCredentials = () => {
    setStudentName("Aditya Pawar");
    setStudentRollNo("01");
    setStudentEmail("adityaerp@gmail.com");
    setStudentPassword("password123");
    toast.info("Demo credentials filled!");
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[400px] shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in bg-card">
        <CardHeader className="bg-gradient-to-r from-academic-blue to-academic-purple text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Academic Time Tracker</CardTitle>
          <CardDescription className="text-gray-100">Login to access your dashboard</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger 
                value="admin" 
                className="data-[state=active]:bg-academic-purple data-[state=active]:text-white transition-all duration-300"
              >
                Admin
              </TabsTrigger>
              <TabsTrigger 
                value="professor"
                className="data-[state=active]:bg-academic-purple data-[state=active]:text-white transition-all duration-300"
              >
                Professor
              </TabsTrigger>
              <TabsTrigger 
                value="guestProf"
                className="data-[state=active]:bg-academic-purple data-[state=active]:text-white transition-all duration-300"
              >
                Guest
              </TabsTrigger>
              <TabsTrigger 
                value="student"
                className="data-[state=active]:bg-academic-purple data-[state=active]:text-white transition-all duration-300"
              >
                Student
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="admin" className="animate-fade-in">
              <form onSubmit={handleAdminLogin}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="admin-email" className="flex items-center gap-2">
                      <User size={16} /> Email
                    </Label>
                    <Input 
                      id="admin-email" 
                      type="email" 
                      value={adminEmail} 
                      onChange={(e) => setAdminEmail(e.target.value)}
                      placeholder="erpadmin@gmail.com"
                      required 
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="admin-password" className="flex items-center gap-2">
                      <Key size={16} /> Password
                    </Label>
                    <Input 
                      id="admin-password" 
                      type="password" 
                      value={adminPassword} 
                      onChange={(e) => setAdminPassword(e.target.value)}
                      required 
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-academic-purple hover:bg-academic-blue transition-all duration-300 flex items-center gap-2"
                  >
                    <LogIn size={16} /> Login as Admin
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full hover:bg-academic-purple/10 transition-all duration-300"
                    onClick={fillAdminDemoCredentials}
                  >
                    Get Demo Credentials
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="professor" className="animate-fade-in">
              <form onSubmit={handleProfessorLogin}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="professor-name" className="flex items-center gap-2">
                      <User size={16} /> Name
                    </Label>
                    <Input 
                      id="professor-name" 
                      value={professorName} 
                      onChange={(e) => setProfessorName(e.target.value)}
                      placeholder="Prof. Amit"
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="professor-department" className="flex items-center gap-2">
                      <UserPlus size={16} /> Department
                    </Label>
                    <select 
                      id="professor-department" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-all duration-300 focus:ring-2 focus:ring-academic-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={professorDepartment} 
                      onChange={(e) => setProfessorDepartment(e.target.value)}
                    >
                      <option>Computer Science</option>
                      <option>AIML</option>
                      <option>Data Science</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="professor-email" className="flex items-center gap-2">
                      <User size={16} /> Email
                    </Label>
                    <Input 
                      id="professor-email" 
                      type="email" 
                      value={professorEmail} 
                      onChange={(e) => setProfessorEmail(e.target.value)}
                      placeholder="amiterp@gmail.com"
                      required 
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="professor-password" className="flex items-center gap-2">
                      <Key size={16} /> Password
                    </Label>
                    <Input 
                      id="professor-password" 
                      type="password" 
                      value={professorPassword} 
                      onChange={(e) => setProfessorPassword(e.target.value)}
                      required 
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-academic-purple hover:bg-academic-blue transition-all duration-300 flex items-center gap-2"
                  >
                    <LogIn size={16} /> Login as Professor
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full hover:bg-academic-purple/10 transition-all duration-300"
                    onClick={fillProfessorDemoCredentials}
                  >
                    Get Demo Credentials
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="guestProf" className="animate-fade-in">
              <form onSubmit={handleGuestProfessorLogin}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="guest-prof-name" className="flex items-center gap-2">
                      <User size={16} /> Name
                    </Label>
                    <Input 
                      id="guest-prof-name" 
                      value={guestProfName} 
                      onChange={(e) => setGuestProfName(e.target.value)}
                      placeholder="Guest Prof Suresh"
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="guest-prof-role" className="flex items-center gap-2">
                      <UserPlus size={16} /> Role
                    </Label>
                    <Input 
                      id="guest-prof-role" 
                      value={guestProfRole} 
                      onChange={(e) => setGuestProfRole(e.target.value)}
                      disabled
                      className="bg-muted"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="guest-prof-department" className="flex items-center gap-2">
                      <UserPlus size={16} /> Department
                    </Label>
                    <select 
                      id="guest-prof-department" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-all duration-300 focus:ring-2 focus:ring-academic-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={guestProfDepartment} 
                      onChange={(e) => setGuestProfDepartment(e.target.value)}
                    >
                      <option>Computer Science</option>
                      <option>AIML</option>
                      <option>Data Science</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="guest-prof-email" className="flex items-center gap-2">
                      <User size={16} /> Email
                    </Label>
                    <Input 
                      id="guest-prof-email" 
                      type="email" 
                      value={guestProfEmail} 
                      onChange={(e) => setGuestProfEmail(e.target.value)}
                      placeholder="erpguestsuresh@gmail.com"
                      required 
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="guest-prof-password" className="flex items-center gap-2">
                      <Key size={16} /> Password
                    </Label>
                    <Input 
                      id="guest-prof-password" 
                      type="password" 
                      value={guestProfPassword} 
                      onChange={(e) => setGuestProfPassword(e.target.value)}
                      required 
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-academic-purple hover:bg-academic-blue transition-all duration-300 flex items-center gap-2"
                  >
                    <LogIn size={16} /> Login as Guest Professor
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full hover:bg-academic-purple/10 transition-all duration-300"
                    onClick={fillGuestProfDemoCredentials}
                  >
                    Get Demo Credentials
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="student" className="animate-fade-in">
              <form onSubmit={handleStudentLogin}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="student-name" className="flex items-center gap-2">
                      <User size={16} /> Name
                    </Label>
                    <Input 
                      id="student-name" 
                      value={studentName} 
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Aditya Pawar"
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="student-roll-no" className="flex items-center gap-2">
                      <UserPlus size={16} /> Roll No
                    </Label>
                    <Input 
                      id="student-roll-no" 
                      value={studentRollNo} 
                      onChange={(e) => setStudentRollNo(e.target.value)}
                      placeholder="01"
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="student-email" className="flex items-center gap-2">
                      <User size={16} /> Email
                    </Label>
                    <Input 
                      id="student-email" 
                      type="email" 
                      value={studentEmail} 
                      onChange={(e) => setStudentEmail(e.target.value)}
                      placeholder="adityaerp@gmail.com"
                      required 
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="student-password" className="flex items-center gap-2">
                      <Key size={16} /> Password
                    </Label>
                    <Input 
                      id="student-password" 
                      type="password" 
                      value={studentPassword} 
                      onChange={(e) => setStudentPassword(e.target.value)}
                      required 
                      className="transition-all duration-300 focus:ring-2 focus:ring-academic-purple"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-academic-purple hover:bg-academic-blue transition-all duration-300 flex items-center gap-2"
                  >
                    <LogIn size={16} /> Login as Student
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full hover:bg-academic-purple/10 transition-all duration-300"
                    onClick={fillStudentDemoCredentials}
                  >
                    Get Demo Credentials
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <p className="text-sm text-muted-foreground">
            Academic Time Tracker © 2023
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
