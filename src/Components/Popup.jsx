import React, { useState } from "react";
import { X } from "lucide-react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    phone: "",
    cnic: "",
    address: "",
    institute: "",
    experience: "",
    projectsUrl: "",
    referral: "",
    expectations: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[350px] md:w-full md:max-w-md relative max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 cursor-pointer right-2 md:right-4 text-gray-700 hover:text-gray-900"
        >
          <X size={24} />
        </button>

        {/* Form Header */}
        <div className="p-6 pb-4">
          <h2 className=" text-xl md:text-2xl font-bold text-center">
            Apply for Salesforce CRM Internship
          </h2>
        </div>

        {/* Form Content - Scrollable */}
        <div className="px-6 overflow-y-auto max-h-[60vh]">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full p-3 border border-main rounded focus:outline-none focus:ring-1 focus:ring-main"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="fatherName"
                  placeholder="Father's Name"
                  className="w-full p-3 border border-main rounded focus:outline-none focus:ring-1 focus:main"
                  required
                  value={formData.fatherName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="0320-1234567"
                  className="w-full p-3 border border-main rounded focus:outline-none focus:ring-1 focus:ring-main"
                  pattern="[0-9]{4}-[0-9]{7}"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="cnic"
                  placeholder="XXXXX-XXXXXXX-X"
                  className="w-full p-3 border border-main rounded focus:outline-none focus:ring-1 focus:ring-main"
                  pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                  required
                  value={formData.cnic}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Permanent Address"
                  className="w-full p-3 border border-main rounded focus:outline-none focus:ring-1 focus:ring-main"
                  required
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="institute"
                  placeholder="Institute"
                  className="w-full p-3 border border-main rounded focus:outline-none focus:ring-1 focus:ring-main"
                  required
                  value={formData.institute}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="experience"
                  placeholder="Working Experience"
                  className="w-full p-3 border border-main rounded focus:outline-none focus:ring-1 focus:ring-main"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="url"
                  name="projectsUrl"
                  placeholder="Your Past Projects URL"
                  className="w-full p-3 border border-main rounded focus:outline-none focus:ring-1 focus:ring-main"
                  value={formData.projectsUrl}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="referral"
                  placeholder="Where did you hear about internee.pk"
                  className="w-full p-3 border border-main rounded focus:outline-none focus:ring-1 focus:ring-main"
                  value={formData.referral}
                  onChange={handleChange}
                />
              </div>

              <div>
                <textarea
                  name="expectations"
                  placeholder="What Do You Expect From Us"
                  className="w-full p-3 border border-main rounded focus:outline-none focus:ring-1 focus:ring-main min-h-[80px]"
                  value={formData.expectations}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button - Fixed at bottom */}
            <div className="mt-6 mb-6">
              <button
                type="submit"
                className="w-full py-3 bg-main text-white font-medium rounded hover:bg-blue-500 transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
