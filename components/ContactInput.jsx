"use client";

import * as React from "react";

export default function ContactInput() {
  const formRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    e.preventDefault();
    console.log({
      name: form["name"].value,
      email: form["email"].value,
      img_url: form["img_url"].value || null,
    });
    form.reset();
  };

  return (
    <section className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-5xl font-bold mb-9 mt-6 text-center text-blue-950">
        Add New Contact
      </h2>
      <form className="space-y-4" ref={formRef}>
          <input
            placeholder="Name"
            name="name"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-300"
          />

          <input
            placeholder="Email"
            name="email"
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-300"
          />

          <input
            placeholder="Image URL"
            name="img_url"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-300"
          />
        
      </form>
      <button
        className="w-full mt-14 mb-2 p-4 bg-blue-950 text-white font-semibold rounded-md hover:bg-zinc-950 transition duration-300"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
}
