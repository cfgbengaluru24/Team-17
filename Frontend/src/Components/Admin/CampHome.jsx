import React from "react";
import CampCards from "./CampCards";
import AdminNavbar from './AdminNavbar'

const UpcomingCards = () => (
  <div >
    <h2
      style={{ borderRadius: "5px", backgroundColor: "white" }}
      className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-blue-500 bg-blue-50 text-blue-500"
    >
      Upcoming
    </h2>
    <div className="grid grid-cols-1 gap-4">
      <CampCards />
      <CampCards />
      <CampCards />
    </div>
  </div>
);

const LiveCards = () => (
  <div>
    <h2
      style={{ borderRadius: "4px", backgroundColor: "white" }}
      className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-green-500 bg-blue-50 text-green-500"
    >
      Live
    </h2>
    <div className="grid grid-cols-1 gap-4">
      <CampCards />
      <CampCards />
      <CampCards />
    </div>
  </div>
);

const CompletedCards = () => (
  <div>
    <h2
      style={{ borderRadius: "4px", backgroundColor: "white" }}
      className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-red-500 bg-blue-50 text-red-500"
    >
      Completed
    </h2>
    <div className="grid grid-cols-1 gap-4">
      <CampCards />
      <CampCards />
      <CampCards />
    </div>
  </div>
);

const CampHome = () => (
  <div
    style={{ backgroundColor: "white" }}
    className="min-h-screen bg-gray-100 dark:bg-gray-900"
  >
    <AdminNavbar />
    <main className="p-4">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          <div className="border-r border-gray-400  pr-4">
            <UpcomingCards />
          </div>
          <div className="border-r border-gray-400 px-4">
            <LiveCards />
          </div>
          <div className="px-4">
            <CompletedCards />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default CampHome;
