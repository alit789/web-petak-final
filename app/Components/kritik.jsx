"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Notif from "./notif"; // Adjust the import path according to your project structure

export default function Kritik() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notif, setNotif] = useState({
    visible: false,
    message: "",
    type: "success", // success or error
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r6rlure", //  EmailJS Service ID
        "template_ackbazk", // EmailJS Template ID
        e.target,
        "4mJbithFdyB2SVntc" // EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setNotif({
            visible: true,
            message: "Message sent successfully!",
            type: "success",
          });
        },
        (error) => {
          console.log(error.text);
          setNotif({
            visible: true,
            message: "Failed to send message.",
            type: "error",
          });
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="fixed bottom-6 left-6">
        {notif.visible && (
          <Notif
            message={notif.message}
            type={notif.type}
            visible={notif.visible}
            onClose={() => setNotif({ ...notif, visible: false })}
          />
        )}
      </div>
      <div className="p-6 shadow-sm border w-full h-auto rounded-xl">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="text-2xl">Send Me a Question..</h1>
            <p className="text-sm my-2 w-full md:w-2/3">
              Do you want to get notified when a new component is added to
              Flowbite? Sign up for our newsletter and you'll be among the first
              to find out about new features, components, versions, and tools.
            </p>

            {/* nama */}
            <div className="block md:flex gap-3">
              <label className="input input-bordered mt-3 flex items-center gap-2 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  id="name"
                  type="text"
                  className="grow"
                  placeholder="Your Name"
                />
              </label>

              {/* email */}
              <label className="input mt-3 w-full input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  id="email"
                  className="grow"
                  placeholder="Email"
                />
              </label>
            </div>

            {/* message */}
            <textarea
              className="textarea textarea-bordered mt-3 w-full"
              placeholder="Send Your Question"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary btn-md mt-3">
              Send
              <span style={{ marginTop: "2px" }}>
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
