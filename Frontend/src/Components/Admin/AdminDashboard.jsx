import React from "react";
import LineChart from "../../assets/images/LineChart.png";
import BarChart from "../../assets/images/BarChart.png";
import Camps from "../../assets/images/Camps.png";
import Doctors from "../../assets/images/Doctor.png";
import TotalPatients from "../../assets/images/TotalPatients.png";
import CuredPatients from "../../assets/images/CuredPatients.png";
import AdminNavbar from "./AdminNavbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    <AdminNavbar/>
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 bg-gray-200 rounded-full">
                <img style={{ height: "30px", width: "" }} src={Camps} />
              </div>
              <div className="ml-4">
                <p
                  style={{ fontSize: "20px" }}
                  className="text-sm text-gray-500"
                >
                  Camps
                </p>
                <p className="text-2xl font-bold">45</p>
                <p className="text-sm text-green-500">+55% than last year</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 bg-blue-200 rounded-full">
                <img style={{ height: "30px", width: "" }} src={Doctors} />
              </div>
              <div className="ml-4">
                <p
                  style={{ fontSize: "20px" }}
                  className="text-sm text-gray-500"
                >
                  Active Doctors
                </p>
                <p className="text-2xl font-bold">28</p>
                <p className="text-sm text-green-500">+2% than last month</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 bg-green-200 rounded-full">
                <img
                  style={{ height: "30px", width: "" }}
                  src={TotalPatients}
                />
              </div>
              <div className="ml-4">
                <p
                  style={{ fontSize: "20px" }}
                  className="text-sm text-gray-500"
                >
                  Total beneficiaries
                </p>
                <p className="text-2xl font-bold">4500</p>
                <p className="text-sm text-green-500">+8% than last month</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 bg-pink-200 rounded-full">
                <img
                  style={{ height: "30px", width: "" }}
                  src={CuredPatients}
                />
              </div>
              <div className="ml-4">
                <p
                  style={{ fontSize: "20px" }}
                  className="text-sm text-gray-500"
                >
                  Patients Cured
                </p>
                <p className="text-2xl font-bold">3281</p>
                <p className="text-sm text-gray-500">Just updated</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow lg:col-span-2">
            <div className="text-blue-900 mb-4">
              <h3 className="text-lg font-bold">Campaigns Status</h3>
              <p className="text-sm text-gray-500">Campaign Performances</p>
            </div>
            <img src={BarChart} alt="Graph 1" className="rounded-lg mb-4" />
          </div>
          <div
            style={{ height: "fit-content" }}
            className="p-4 bg-white rounded-lg shadow"
          >
            <div className="text-green-900 mb-4">
              <h3 className="text-lg font-bold">Daily Sales</h3>
              <p className="text-sm text-gray-500">
                (+15%) increase in today sales
              </p>
            </div>
            <img src={LineChart} alt="Graph 2" className="rounded-lg mb-4" />
            <p className="text-sm text-gray-500">updated 4 min ago</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
