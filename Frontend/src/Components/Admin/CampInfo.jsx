// src/components/Dashboard.jsx
import React from "react";
import refugeeCamp from "../../assets/images/refugee-camp.png";
import people from "../../assets/images/people.png";
import calendar from "../../assets/images/calendar.png";
import project from "../../assets/images/project.png";

const CampInfoBox = ({ logo, title, data }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center">
      <img src={logo} className="w-12 h-12 mr-4"></img>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{data}</p>
      </div>
    </div>
  );
};

const CampInfo = () => {
  const campData = {
    name: "Dental Health Camp 2024",
    totalPeople: 120,
    date: "2024-08-15",
    status: "Live",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1
        style={{ display: "flex", justifyContent: "center" }}
        className="text-3xl font-bold mb-6"
      >
        Camp Info Dashboard
      </h1>

      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <CampInfoBox
          logo={refugeeCamp}
          title="Camp Name"
          data={campData.name}
        />
        <CampInfoBox
          logo={people}
          title="Total People"
          data={campData.totalPeople}
        />
        <CampInfoBox
          logo={calendar}
          title="Date of Camp"
          data={campData.date}
        />
        <CampInfoBox logo={project} title="Status" data={campData.status} />
      </div>

      {/* Second Row - Grid for Graphs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-bold mb-4">Graph 1</h3>
          <div className="h-48 bg-gray-200">Graph Content Here</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-bold mb-4">Graph 2</h3>
          <div className="h-48 bg-gray-200">Graph Content Here</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-bold mb-4">Graph 3</h3>
          <div className="h-48 bg-gray-200">Graph Content Here</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-bold mb-4">Graph 4</h3>
          <div className="h-48 bg-gray-200">Graph Content Here</div>
        </div>
      </div>
    </div>
  );
};

export default CampInfo;
