import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import AdminNavbar from "./AdminNavbar";
import Camps from "../../assets/images/Camps.png";
import Doctors from "../../assets/images/Doctor.png";
import TotalPatients from "../../assets/images/TotalPatients.png";
import CuredPatients from "../../assets/images/CuredPatients.png";

const Dashboard = () => {
  // Defined dataset for statistics
  const data = [
    {
      title: "Camps",
      icon: Camps,
      value: 45,
      change: "+55% than last year",
      changeColor: "text-green-500",
      bgColor: "bg-gray-200",
    },
    {
      title: "Active Doctors",
      icon: Doctors,
      value: 28,
      change: "+2% than last month",
      changeColor: "text-green-500",
      bgColor: "bg-blue-200",
    },
    {
      title: "Total Beneficiaries",
      icon: TotalPatients,
      value: 4500,
      change: "+8% than last month",
      changeColor: "text-green-500",
      bgColor: "bg-green-200",
    },
    {
      title: "Patients Cured",
      icon: CuredPatients,
      value: 3281,
      change: "Just updated",
      changeColor: "text-gray-500",
      bgColor: "bg-pink-200",
    },
  ];

  // Sample data for graphs
  const curedPatientData = [
    { month: "July", cured: 80, notCured: 20 },
    { month: "August", cured: 90, notCured: 30 },
    { month: "September", cured: 85, notCured: 25 },
    { month: "October", cured: 95, notCured: 15 },
    { month: "November", cured: 100, notCured: 10 },
    { month: "December", cured: 110, notCured: 5 },
    { month: "January", cured: 120, notCured: 10 },
    { month: "February", cured: 130, notCured: 15 },
  ];

  const campMonthData = [
    { month: "July", camps: 5 },
    { month: "August", camps: 6 },
    { month: "September", camps: 7 },
    { month: "October", camps: 4 },
    { month: "November", camps: 8 },
    { month: "December", camps: 9 },
    { month: "January", camps: 6 },
    { month: "February", camps: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <main className="max-w-7xl mx-auto p-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {data.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${item.bgColor}`}>
                  <img
                    style={{ height: "30px", width: "30px" }}
                    src={item.icon}
                    alt={item.title}
                  />
                </div>
                <div className="ml-4">
                  <p
                    style={{ fontSize: "20px" }}
                    className="text-sm text-gray-500"
                  >
                    {item.title}
                  </p>
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className={`text-sm ${item.changeColor}`}>{item.change}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid for Graphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow lg:col-span-2">
            <div className="text-blue-900 mb-4">
              <h3 className="text-lg font-bold">Cured Patient Statistics</h3>
              <p className="text-sm text-gray-500">
                Cured and not-cured patients
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={curedPatientData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cured" fill="#8884d8" />
                <Bar dataKey="notCured" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div
            style={{ height: "fit-content" }}
            className="p-4 bg-white rounded-lg shadow"
          >
            <div className="text-blue-900 mb-4">
              <h3 className="text-lg font-bold">
                Number of Camps Held by Month
              </h3>
              <p className="text-sm text-gray-500">Number of camps</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={campMonthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="camps" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
