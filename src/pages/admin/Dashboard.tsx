
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScheduleCalendar } from "@/components/schedule-calendar";
import { useData } from "@/contexts/DataContext";
import { toast } from "@/components/ui/sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminDashboard = () => {
  const { addCourse, departments } = useData();
  const [newCourseName, setNewCourseName] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleAddCourse = () => {
    if (!newCourseName || !selectedDepartment) {
      toast.error("Please fill all fields");
      return;
    }
    
    addCourse(newCourseName, selectedDepartment);
    toast.success(`Added ${newCourseName} to ${selectedDepartment}`);
    setNewCourseName("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        
        <Tabs defaultValue="courses">
          <TabsList className="mb-6">
            <TabsTrigger value="courses">Course Management</TabsTrigger>
            <TabsTrigger value="schedule">Schedule Management</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Course</CardTitle>
                  <CardDescription>Create a new course and assign it to a department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="course-name">Course Name</Label>
                      <Input 
                        id="course-name" 
                        value={newCourseName}
                        onChange={(e) => setNewCourseName(e.target.value)}
                        placeholder="e.g. Advanced Algorithms" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map(dept => (
                            <SelectItem key={dept.name} value={dept.name}>
                              {dept.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={handleAddCourse} className="w-full">Add Course</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Current Courses</CardTitle>
                  <CardDescription>View all departments and their courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {departments.map(dept => (
                      <div key={dept.name} className="space-y-2">
                        <h3 className="font-medium">{dept.name}</h3>
                        <ul className="space-y-1 pl-4">
                          {dept.courses.map(course => (
                            <li key={course} className="text-muted-foreground">{course}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="schedule">
            <ScheduleCalendar editable />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
