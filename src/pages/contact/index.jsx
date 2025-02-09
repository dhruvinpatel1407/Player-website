import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveContactResponse } from "../../redux/actions";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", review: "", rating: 0 });
  const dispatch = useDispatch();
  const responses = useSelector((state) =>state.contactResponses || []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveContactResponse(formData));
    setFormData({ name: "", email: "", phone: "", review: "", rating: 0 });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-black p-10 space-y-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-blue-900 mb-2 text-center">Leave a Review</h2>
        <p className="text-gray-700 text-center mb-6">We'd love to hear your feedback! Please share your experience with us.</p>
        {responses.length > 0 && <p className="text-green-700 text-center">Review submitted successfully!</p>}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
          <div className="col-span-1">
            <label className="block text-gray-900 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg mt-1"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-900 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg mt-1"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-900 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg mt-1"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-900 font-medium">Review</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg mt-1 h-24"
              required
            ></textarea>
          </div>
          <div className="col-span-2 flex items-center space-x-2">
            <label className="block text-gray-900 font-medium">Rating:</label>
            {[1, 2, 3, 4, 5].map((value) => (
              <span key={value} className="text-yellow-500 cursor-pointer text-2xl" onClick={() => setFormData({ ...formData, rating: value })}>
                {value <= formData.rating ? "★" : "☆"}
              </span>
            ))}
          </div>
          <div className="col-span-2">
            <button type="submit" className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900">
              Submit Review
            </button>
          </div>
        </form>
      </div>
      {/* Reviews Section */}
      <div className="w-full max-w-5xl">
        <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">Website Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <strong className="text-gray-900">Alice</strong>
            <p className="text-yellow-500 text-lg">★★★★☆</p>
            <p className="text-gray-800 mt-2">Great website! Very user-friendly.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <strong className="text-gray-900">Bob</strong>
            <p className="text-yellow-500 text-lg">★★★★★</p>
            <p className="text-gray-800 mt-2">Loved the experience, highly recommended!</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <strong className="text-gray-900">Charlie</strong>
            <p className="text-yellow-500 text-lg">★★★☆☆</p>
            <p className="text-gray-800 mt-2">Good, but can be improved in some areas.</p>
          </div>
          {responses.length > 0 && responses.map((res, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
              <strong className="text-gray-900">{res.name}</strong>
              <p className="text-yellow-500 text-lg">{"★".repeat(res.rating) + "☆".repeat(5 - res.rating)}</p>
              <p className="text-gray-800 mt-2">{res.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
