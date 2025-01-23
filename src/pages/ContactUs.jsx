import React, { useState } from "react";
import Navbar from "../components1/Navbar";
import Footer from "../components1/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Thank you for contacting us! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#f9f9f9] py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-center text-gray-600 mb-10">
            We'd love to hear from you! Please fill out the form below, and
            we'll get in touch.
          </p>
          <form
            className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-md"
            onSubmit={handleSubmit}
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full p-4 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full p-4 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={`w-full p-4 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                value={formData.message}
                onChange={handleChange}
                rows="5"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#7AA93C] text-white px-6 py-3 rounded-md w-full font-semibold hover:bg-[#5b7e2d]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
