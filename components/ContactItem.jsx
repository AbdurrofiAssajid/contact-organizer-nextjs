import React from "react";


export default function ContactItem({ imgUrl, name, email }) {
  return (
<div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
  <h2 className="font-bold text-4xl text-blue-950 mt-3 mb-10">Contact List</h2>
  <div className="flex items-center p-4 justify-between rounded-lg custom-shadow">
    <div className="flex items-center space-x-4">
      <img
        src={
          imgUrl ??
          "https://dummyjson.com/image/400x200/003366/ffffff?text=Hi+Sabrina"
        }
        width={128}
        height={128}
        alt={name}
        className="rounded-full w-14 h-14"
      />
      <div className="flex flex-col space-y-1 ">
        <p className="text-lg font-semibold text-gray-900">Sabrina Carpenter</p>
        <p className="text-sm font-medium text-gray-600">sabrinacarpenter@gmail.com</p>
      </div>
    </div>
    <button className="bg-red-700 w-12 h-10 text-white font-bold rounded-md hover:bg-red-800 transition duration-300">
      x
    </button>
  </div>
</div>
  );
}
