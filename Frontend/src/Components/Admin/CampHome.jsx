/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import CampCards from "./CampCards";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const UpcomingCards = ({ camps }) => {
  const upcomingCamps =
    camps?.filter((camp) => camp.status === "not yet started") || [];
  // console.log(upcomingCamps, "up");

  return (
    <div>
      <h2
        style={{ borderRadius: "5px", backgroundColor: "white" }}
        className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-blue-500 bg-blue-50 text-blue-500"
      >
        Upcoming
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {upcomingCamps.map((camp, index) => (
          <CampCards key={index} camp={camp} />
        ))}
      </div>
    </div>
  );
};

const LiveCards = ({ camps }) => {
    const liveCamps =
      camps?.filter((camp) => camp.status === "live") || [];
    // console.log(liveCamps, "liveCamps");

  return (
    <div>
      <h2
        style={{ borderRadius: "4px", backgroundColor: "white" }}
        className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-green-500 bg-blue-50 text-green-500"
      >
        Live
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {liveCamps.map((camp, index) => (
          <CampCards key={index} camp={camp} />
        ))}
      </div>
    </div>
  );
};

const CompletedCards = ({ camps }) => {
    const completedCamps = camps?.filter((camp) => camp.status === "finished") || [];
    // console.log(completedCamps, "completedCamps");

  return (
    <div>
      <h2
        style={{ borderRadius: "4px", backgroundColor: "white" }}
        className="text-2xl font-bold mb-4 py-2 px-4 border-l-4 border-red-500 bg-blue-50 text-red-500"
      >
        Completed
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {completedCamps.map((camp, index) => (
          <CampCards key={index} camp={camp} />
        ))}
      </div>
    </div>
  );
};

const CampHome = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    getCamps()
  }, [])
  
  const getCamps = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/camp",
      );
      setCamps(response.data.camps)
      // console.log(response);
      toast.success(response.data.message);
      // setCamps([])
    } catch (error) {
      console.error("Error fetching camps", error);
      toast.error(error.message);
    }

  }

  const navigate = useNavigate();


  return (
    <div
      style={{ backgroundColor: "white" }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900"
    >
      <AdminNavbar />

      <main className="p-4">
        <div className="create-top flex items-center justify-between container mx-auto">
          <h1 className=" font-bold text-[25px]">Your Camps</h1>
          <button className="btn" onClick={()=>{navigate('/addCamps')}}>Create</button>
        </div>
        <div className="container mx-auto flex justify-center">
          <div className="grid grid-cols-3 gap-4">
            <div className="border-r border-gray-400  pr-4">
              <UpcomingCards camps={camps} />
            </div>
            <div className="border-r border-gray-400 px-4">
              <LiveCards camps={camps} />
            </div>
            <div className="px-4">
              <CompletedCards camps={camps} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CampHome;
