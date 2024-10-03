"use client";

import * as React from "react";


export default function ContactInput() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [img_url, setImgUrl] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      setEmailError(true);
      return;
    }

    console.log({ name, email, img_url });
    
    setName("");
    setEmail("");
    setImgUrl("");
    setEmailError(false);
  };

  return (
    <section className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-5xl font-bold mb-9 mt-6 text-center text-blue-950">
        Add New Contact
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-300"
        />

        <input
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) {
              setEmailError(false);
            }
          }}
          required
          className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 transition duration-300 ${
            emailError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-950'
          }`}
        />

        <input
          placeholder="Image URL"
          name="img_url"
          value={img_url}
          onChange={(e) => setImgUrl(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-300"
        />
      </form>

      <div className="mt-16 mb-0">
        <button
          className="w-full p-4 bg-blue-950 text-white font-semibold rounded-md hover:bg-zinc-950 transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
}