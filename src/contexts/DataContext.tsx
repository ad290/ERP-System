
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Initial data for departments and courses
const initialDepartments = [
  {
    name: "Computer Science",
    courses: ["Operating Systems", "Computer Networks", "Database Management Systems"],
    professors: ["Prof. Amit", "Guest Prof Suresh"]
  },
  {
    name: "AIML",
    courses: ["Machine Learning Fundamentals", "Deep Learning Techniques", "Natural Language Processing"],
    professors: ["Prof. Rohit", "Guest Prof Gourav"]
  },
  {
    name: "Data Science",
    courses: ["Statistics for Data Science", "Big Data Analytics", "Data Mining and Warehousing"],
    professors: ["Prof. Virat", "Guest Prof Narayan"]
  }
];

// Schedule entry type
export type ScheduleEntry = {
  id: string;
  day: string;
  time: string;
  course: string;
  department: string;
  professor: string;
  roomNo: string;
};

// Data context type
type DataContextType = {
  departments: any[];
  schedule: ScheduleEntry[];
  addCourse: (courseName: string, departmentName: string) => void;
  addScheduleEntry: (entry: Omit<ScheduleEntry, 'id'>) => void;
  updateScheduleEntry: (id: string, entry: Partial<Omit<ScheduleEntry, 'id'>>) => void;
  removeScheduleEntry: (id: string) => void;
  getAllCourses: () => string[];
  getAllProfessors: () => string[];
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [departments, setDepartments] = useState(() => {
    const saved = localStorage.getItem('departments');
    return saved ? JSON.parse(saved) : initialDepartments;
  });

  const [schedule, setSchedule] = useState<ScheduleEntry[]>(() => {
    const saved = localStorage.getItem('schedule');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('departments', JSON.stringify(departments));
  }, [departments]);

  useEffect(() => {
    localStorage.setItem('schedule', JSON.stringify(schedule));
  }, [schedule]);

  // Add a new course to a department
  const addCourse = (courseName: string, departmentName: string) => {
    setDepartments(prevDepartments =>
      prevDepartments.map(dept => {
        if (dept.name === departmentName) {
          return {
            ...dept,
            courses: [...dept.courses, courseName]
          };
        }
        return dept;
      })
    );
  };

  // Add a schedule entry
  const addScheduleEntry = (entry: Omit<ScheduleEntry, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setSchedule(prev => [...prev, { ...entry, id }]);
  };

  // Update a schedule entry
  const updateScheduleEntry = (id: string, entry: Partial<Omit<ScheduleEntry, 'id'>>) => {
    setSchedule(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...entry } : item
      )
    );
  };

  // Remove a schedule entry
  const removeScheduleEntry = (id: string) => {
    setSchedule(prev => prev.filter(item => item.id !== id));
  };

  // Get all courses across departments
  const getAllCourses = () => {
    return departments.flatMap(dept => dept.courses);
  };

  // Get all professors across departments
  const getAllProfessors = () => {
    return departments.flatMap(dept => dept.professors);
  };

  const value = {
    departments,
    schedule,
    addCourse,
    addScheduleEntry,
    updateScheduleEntry,
    removeScheduleEntry,
    getAllCourses,
    getAllProfessors,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
