import React from "react"


export default function ContactItem({ imgUrl, name, email }) {
  return (
    <>
    <div className=""> 
       <div className="flex items-center p-4 justify-between mt-4 mb-4 rounded-lg shadow-md">
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
      <div className="flex flex-col ">
        <p className="text-lg font-semibold text-gray-900">{name}</p>
        <p className="text-sm font-medium text-gray-600">{email}</p>
      </div>
    </div>
    <button className="bg-red-700 w-12 h-10 text-white font-bold rounded-md hover:bg-red-800 transition duration-300">
      x
    </button>
  </div>
    </div>
   </>
  

  );
}
