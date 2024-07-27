import React from "react";
import CampCards from "./CampCards";

const UpcomingCards = () => (
  <div>
    <h2
      style={{ borderRadius: "4px", backgroundColor: "white" }}
      className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-blue-500 bg-blue-50 text-blue-900"
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
      className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-blue-500 bg-blue-50 text-blue-900"
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
      className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-blue-500 bg-blue-50 text-blue-900"
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
    <main className="p-4">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          <div className="border-r border-black pr-4">
            <UpcomingCards />
          </div>
          <div className="border-r border-black px-4">
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
