import React, { useState } from "react";
import addPatient from "../../services/addPatient";
import { toast } from "react-toastify";
import axios from "axios";

const AddCampForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    age: "",
    allergic_information: "",
    medico: "",
    images: "",
    tooth_number: "",
    tooth_condition: "",
    periodontal_probing_depths: "",
    bleeding_on_probing: false,
    plaque_index: "",
    calculus_index: "",
    gingival_index: "",
    oral_cancer_screening_result: "",
    prescription: "",
    isAnemic: false,
    level: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post(
        "http://localhost:3000/api/beneficiary/create",
        formData,
      );
      console.log(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form data:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://www.rohinifoundation.org/images/iron_healthy_girl_child.jpg')",
        }}
      ></div>
      <div className="relative w-full max-w-6xl bg-white p-8 shadow-lg rounded-lg">
        <h1
          className="text-3xl font-bold text-gray-800 mb-8"
          style={{ textAlign: "center", color: "#0067FF" }}
        >
          Add New Beneficiary
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-wrap -mx-4">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          <button
            style={{
              backgroundColor: "#fe725e",
              border: "none",
              color: "white",
              padding: "15px 10px",
              textAlign: "center",
              textDecoration: "none",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
              borderRadius: "8px",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#fe725e")}
          >
            Use Doctor's Voice
          </button>
          </div>
          </form>

        <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="phonenumber"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="allergic_information"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Allergic Information
            </label>
            <input
              type="text"
              id="allergic_information"
              name="allergic_information"
              value={formData.allergic_information}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="medico"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Medico
            </label>
            <input
              type="text"
              id="medico"
              name="medico"
              value={formData.medico}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Images
            </label>
            <input
              type="text"
              id="images"
              name="images"
              value={formData.images}
              onChange={handleChange}
              placeholder="Enter image URLs, separated by commas"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="tooth_number"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Tooth Number
            </label>
            <input
              type="number"
              id="tooth_number"
              name="tooth_number"
              value={formData.tooth_number}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="tooth_condition"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Tooth Condition
            </label>
            <input
              type="text"
              id="tooth_condition"
              name="tooth_condition"
              value={formData.tooth_condition}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="periodontal_probing_depths"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Periodontal Probing Depths
            </label>
            <input
              type="number"
              id="periodontal_probing_depths"
              name="periodontal_probing_depths"
              value={formData.periodontal_probing_depths}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="bleeding_on_probing"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Bleeding on Probing
            </label>
            <input
              type="checkbox"
              id="bleeding_on_probing"
              name="bleeding_on_probing"
              checked={formData.bleeding_on_probing}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="plaque_index"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Plaque Index
            </label>
            <input
              type="number"
              id="plaque_index"
              name="plaque_index"
              value={formData.plaque_index}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="calculus_index"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Calculus Index
            </label>
            <input
              type="number"
              id="calculus_index"
              name="calculus_index"
              value={formData.calculus_index}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="gingival_index"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Gingival Index
            </label>
            <input
              type="number"
              id="gingival_index"
              name="gingival_index"
              value={formData.gingival_index}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full px-4 mb-6">
            <label
              htmlFor="oral_cancer_screening_result"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Oral Cancer Screening Result
            </label>
            <input
              type="text"
              id="oral_cancer_screening_result"
              name="oral_cancer_screening_result"
              value={formData.oral_cancer_screening_result}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full px-4 mb-6">
            <label
              htmlFor="prescription"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Prescription
            </label>
            <textarea
              id="prescription"
              name="prescription"
              value={formData.prescription}
              onChange={handleChange}
              required
              rows="4"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="isAnemic"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Is Anemic
            </label>
            <input
              type="checkbox"
              id="isAnemic"
              name="isAnemic"
              checked={formData.isAnemic}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6">
            <label
              htmlFor="level"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontSize: "20px" }}
            >
              Level
            </label>
            <input
              type="number"
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div
            className="w-full px-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{
                backgroundColor: "#fe725e",
                height: "60px",
                width: "fit-content",
                padding: "15px",
              }}
            >
              Add Beneficiary
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCampForm;
