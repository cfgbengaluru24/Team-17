// src/components/Dashboard.jsx
import React from "react";
import Camps from "../../assets/images/Camps.png";
import Doctors from "../../assets/images/Doctor.png";
import TotalPatients from "../../assets/images/TotalPatients.png";
import CuredPatients from "../../assets/images/CuredPatients.png";
import AdminNavbar from "./AdminNavbar";

const Dashboard = () => {
  // Sample data
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
      title: "Total beneficiaries",
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
                    style={{ height: "30px", width: "" }}
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
            {/* Place for the first graph */}
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">[Graph 1]</p>
            </div>
          </div>
          <div
            style={{ height: "fit-content" }}
            className="p-4 bg-white rounded-lg shadow"
          >
            <div className="text-blue-900 mb-4">
              <h3 className="text-lg font-bold">
                Number of camps held by month
              </h3>
              <p className="text-sm text-gray-500">Number of camps</p>
            </div>
            {/* Place for the first graph */}
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">[Graph 1]</p>
            </div>
          </div>
          {/* <div
            style={{ height: "fit-content" }}
            className="p-4 bg-white rounded-lg shadow"
          >
            <div className="text-green-900 mb-4">
              <h3 className="text-lg font-bold"></h3>
              <p className="text-sm text-gray-500">
                (+15%) increase in today sales
              </p>
            </div>
            {/* Place for the second graph */}
          {/* <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">[Graph 2]</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">updated 4 min ago</p>
          </div>} */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
