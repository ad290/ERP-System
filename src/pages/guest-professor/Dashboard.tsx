
import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScheduleCalendar } from "@/components/schedule-calendar";
import { useNavigate } from "react-router-dom";

const GuestProfessorDashboard = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user || JSON.parse(user).role !== "guestProfessor") {
      navigate("/");
      return;
    }
    setCurrentUser(JSON.parse(user));
  }, [navigate]);

  if (!currentUser) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-6">
        <h1 className="text-2xl font-bold mb-6">Guest Professor Dashboard</h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Welcome, {currentUser.name}</CardTitle>
            <CardDescription>
              Department: {currentUser.department}
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Schedule</CardTitle>
            <CardDescription>
              You can view and modify your class schedule here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScheduleCalendar editable professorFilter={currentUser.name} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default GuestProfessorDashboard;
