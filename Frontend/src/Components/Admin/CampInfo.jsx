import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import refugeeCamp from "../../assets/images/refugee-camp.png";
import people from "../../assets/images/people.png";
import calendar from "../../assets/images/calendar.png";
import project from "../../assets/images/project.png";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/rohini_logo2.png";



const CampInfoBox = ({ logo, title, data }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center">
      <img src={logo} className="w-12 h-12 mr-4" alt={title} />
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{data}</p>
      </div>
    </div>
  );
};

const CampInfo = () => {
  const navigate = useNavigate();
  const campData = {
    name: "Dental Health Camp 2024",
    totalPeople: 120,
    date: "2024-08-15",
    status: "Live",
  };

  const dentalDiseasesData = [
    { name: "Cavities", value: 400 },
    { name: "Gum Disease", value: 300 },
    { name: "Tooth Decay", value: 300 },
    { name: "Oral Cancer", value: 200 },
  ];

  const anemiaLevelsData = [
    { name: "Low", value: 450 },
    { name: "Medium", value: 300 },
    { name: "Severe", value: 250 },
  ];

  const treatmentData = [
    { month: "July", cured: 80, notCured: 20 },
    { month: "August", cured: 90, notCured: 30 },
    { month: "September", cured: 85, notCured: 25 },
    { month: "October", cured: 95, notCured: 15 },
    { month: "November", cured: 100, notCured: 10 },
    { month: "December", cured: 110, notCured: 5 },
    { month: "January", cured: 120, notCured: 10 },
    { month: "February", cured: 130, notCured: 15 },
  ];

  const childrenData = [
    { name: "Level 1", children: 30 },
    { name: "Level 2", children: 50 },
    { name: "Level 3", children: 20 },
    { name: "Level 4", children: 40 },
    { name: "Level 5", children: 60 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      <div className="dash-top">
        <img onClick={() => navigate("/")} src={logo} alt="" />
        <button
          className="btn mt-0"
          onClick={() => {
            navigate("/camps");
          }}
        >
          Back
        </button>
      </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-4">Dental Diseases</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dentalDiseasesData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dentalDiseasesData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-4">Anemia Levels</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={anemiaLevelsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#82ca9d"
                  dataKey="value"
                >
                  {anemiaLevelsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-4">Treatment Results</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={treatmentData}>
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
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-4">Children's Levels</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={childrenData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="children" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampInfo;
