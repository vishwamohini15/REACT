import { Children } from "react";

const employees = [
     {
       "id": 1,
       "email": "employee1@example.com",
       "password": "123",
       "tasks": [
         {
           "taskTitle": "Fix Bug #123",
           "taskDescription": "Resolve login authentication issue.",
           "taskDate": "2025-01-10",
           "category": "Bug Fixing",
           "active": true,
           "newTask": true,
           "completed": false,
           "failed": false
         },
         {
           "taskTitle": "Update Documentation",
           "taskDescription": "Revise project API documentation.",
           "taskDate": "2025-01-08",
           "category": "Documentation",
           "active": false,
           "newTask": false,
           "completed": true,
           "failed": false
         },
         {
           "taskTitle": "Create Unit Tests",
           "taskDescription": "Write unit tests for the user module.",
           "taskDate": "2025-01-15",
           "category": "Testing",
           "active": true,
           "newTask": false,
           "completed": false,
           "failed": false
         }
       ]
     },
     {
       "id": 2,
       "email": "employee2@example.com",
       "password": "123",
       "tasks": [
         {
           "taskTitle": "Design Landing Page",
           "taskDescription": "Create a responsive design for the landing page.",
           "taskDate": "2025-01-12",
           "category": "Design",
           "active": true,
           "newTask": true,
           "completed": false,
           "failed": false
         },
         {
           "taskTitle": "Optimize Database",
           "taskDescription": "Improve database query performance.",
           "taskDate": "2025-01-09",
           "category": "Optimization",
           "active": false,
           "newTask": false,
           "completed": true,
           "failed": false
         }
       ]
     },
     {
       "id": 3,
       "email": "employee3@example.com",
       "password": "123",
       "tasks": [
         {
           "taskTitle": "Create Report Generator",
           "taskDescription": "Develop a script to generate monthly reports.",
           "taskDate": "2025-01-14",
           "category": "Development",
           "active": true,
           "newTask": true,
           "completed": false,
           "failed": false
         }
       ]
     },
     {
       "id": 4,
       "email": "employee4@example.com",
       "password": "123",
       "tasks": [
         {
           "taskTitle": "Audit Security Logs",
           "taskDescription": "Review security logs for anomalies.",
           "taskDate": "2025-01-07",
           "category": "Security",
           "active": false,
           "newTask": false,
           "completed": true,
           "failed": false
         },
         {
           "taskTitle": "Implement OAuth2",
           "taskDescription": "Integrate OAuth2 for user authentication.",
           "taskDate": "2025-01-11",
           "category": "Development",
           "active": true,
           "newTask": true,
           "completed": false,
           "failed": false
         }
       ]
     },
     {
       "id": 5,
       "email": "employee5@example.com",
       "password": "123",
       "tasks": [
         {
           "taskTitle": "Conduct Code Review",
           "taskDescription": "Review the latest merge requests.",
           "taskDate": "2025-01-13",
           "category": "Review",
           "active": true,
           "newTask": false,
           "completed": false,
           "failed": false
         },
         {
           "taskTitle": "Deploy App",
           "taskDescription": "Deploy the application to production.",
           "taskDate": "2025-01-10",
           "category": "Deployment",
           "active": false,
           "newTask": false,
           "completed": false,
           "failed": true
         }
       ]
     }
   ];
   
   const admin = [
     {
       "id": 1,
       "email": "admin@example.com",
       "password": "123"
     }
   ];


export const setLocalStorage=localStorage.setItem('employees', JSON.stringify(employees));
export const setAdminLocalStorage=localStorage.setItem('admin', JSON.stringify(admin));


export const getlocalstorege=JSON.parse( localStorage.getItem("employees"))
export const getAdminlocalstorege=JSON.parse( localStorage.getItem("admin"))

console.log(getlocalstorege);


return {employees, admin}