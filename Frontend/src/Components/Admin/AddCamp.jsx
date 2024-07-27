import React, { useState } from "react";
import { addCamp } from "../../services/addCamp"; 


const AddCampForm = () => {
  const [formData, setFormData] = useState({
    campName: "",
    totalPeople: "",
    date: "",
    schoolEmail: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addCamp(formData);
      console.log('Form Data Submitted:', response);
      // Handle success, e.g., display a success message or redirect
      alert('Camp added successfully!');
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle error, e.g., display an error message
      alert('Error submitting form data. Please try again.');
    }
    
    //console.log("Form Data Submitted:", formData);
    // Reset form after submission
    setFormData({
      campName: "",
      totalPeople: "",
      date: "",
      schoolEmail: "",
      status: "",
    });
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://media.licdn.com/dms/image/C4E12AQFRPsyBaFOF_w/article-cover_image-shrink_600_2000/0/1520190762053?e=2147483647&v=beta&t=1NR9aaLRP9r5JSYkULL2Mrm7tLkpE9U6JWwT2FogKiA')",
        }}
      ></div>
      <div className="relative w-full max-w-6xl bg-white p-8 shadow-lg rounded-lg">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            color: " #0067FF",
          }}
          className="text-3xl font-bold text-gray-800 mb-8"
        >
          Add New Camp
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="campName"
              style={{ fontSize: "20px" }}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Camp Name
            </label>
            <input
              type="text"
              id="campName"
              name="campName"
              value={formData.campName}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="total"
              style={{ fontSize: "20px" }}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Total People
            </label>
            <input
              type="String"
              id="total"
              name="totalPeople"
              value={formData.totalPeople}
              onChange={handleChange}
              required
              style={{ fontSize: "20px" }}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="date"
              style={{ fontSize: "20px" }}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="email"
              style={{ fontSize: "20px" }}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              School Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.schoolEmail}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="status"
              style={{ fontSize: "20px" }}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="w-full px-4"
          >
            <button
              type="submit"
              style={{
                backgroundColor: "#fe725e",
                height: "60px",
                width: "fit-content",
                padding: "15px",
              }}
              className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Camp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCampForm;
