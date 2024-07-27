/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import CampCards from "./CampCards";
import AdminNavbar from "./AdminNavbar";
import getCamps from "../../services/getCamps";

const UpcomingCards = ({ camps }) => {
  const upcomingCamps =
    camps?.filter((camp) => camp.status === "not yet started") || [];

  return (
    <div>
      <h2
        style={{ borderRadius: "5px", backgroundColor: "white" }}
        className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-blue-500 bg-blue-50 text-blue-500"
      >
        Upcoming
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {upcomingCamps.map((camp) => (
          <CampCards key={camp.id} camp={camp} />
        ))}
      </div>
    </div>
  );
};

const LiveCards = ({ camps }) => {
  const liveCamps = camps?.filter((camp) => camp.status === "live") || [];

  return (
    <div>
      <h2
        style={{ borderRadius: "4px", backgroundColor: "white" }}
        className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-green-500 bg-blue-50 text-green-500"
      >
        Live
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {liveCamps.map((camp) => (
          <CampCards key={camp.id} camp={camp} />
        ))}
      </div>
    </div>
  );
};

const CompletedCards = ({ camps }) => {
  const completedCamps =
    camps?.filter((camp) => camp.status === "finished") || [];

  return (
    <div>
      <h2
        style={{ borderRadius: "4px", backgroundColor: "white" }}
        className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-red-500 bg-blue-50 text-red-500"
      >
        Completed
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {completedCamps.map((camp) => (
          <CampCards key={camp.id} camp={camp} />
        ))}
      </div>
    </div>
  );
};

const CampHome = () => (
  <div
    style={{ backgroundColor: "white" }}
    className="min-h-screen bg-gray-100 dark:bg-gray-900"
  >
    <AdminNavbar />

    <main className="p-4">
      <div className="create-top flex items-center justify-between container mx-auto">
        <h1 className=" font-bold text-[25px]">Your Camps</h1>
        <button className="btn">Create</button>
      </div>
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
