import React, { useState } from "react";

import CampCards from "./CampCards";

const UpcomingCards = () => {
  // render upcoming cards
  return (
    <div>
      <h2>Upcoming Camps</h2>
      <div class="grid grid-cols-1">
        <CampCards />
        <CampCards />
        <CampCards />
      </div>
    </div>
  );
};

const LiveCards = () => {
  // render live cards
  return (
    <div>
      <h2>Live Camps</h2>
      <div class="grid grid-cols-1">
        <CampCards />
        <CampCards />
        <CampCards />
      </div>
    </div>
  );
};

const CompletedCards = () => {
  // render completed cards
  return (
    <div>
      <h2>Completed Camps</h2>
      <div class="grid grid-cols-1">
        <CampCards />
        <CampCards />
        <CampCards />
      </div>
    </div>
  );
};

const CampHome = () => {
  const [currentTab, setCurrentTab] = useState("upcoming");

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="items-center justify-between w-full md:flex md:w-auto">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  currentTab === "upcoming" ? "bg-gray-100" : ""
                }`}
                onClick={() => handleTabChange("upcoming")}
              >
                Upcoming
              </button>
            </li>
            <li>
              <button
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  currentTab === "live" ? "bg-gray-100" : ""
                }`}
                onClick={() => handleTabChange("live")}
              >
                Live
              </button>
            </li>
            <li>
              <button
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  currentTab === "completed" ? "bg-gray-100" : ""
                }`}
                onClick={() => handleTabChange("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
        </div>
      </div>
      {currentTab === "upcoming" && <UpcomingCards />}
      {currentTab === "live" && <LiveCards />}
      {currentTab === "completed" && <CompletedCards />}
    </nav>
  );
};

export default CampHome;
