import React from "react";

const MyProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-white sm:p-0">
      <div className="flex flex-col items-center justify-start w-full max-w-screen-sm h-full px-4 py-6">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center">
          <div className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-full bg-gray-300 sm:my-0 sm:block">
            <img
              src="https://picsum.photos/200"
              alt="Profile picture"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full sm:pl-16">
            <h1 className="text-2xl font-bold mb-4">John Doe</h1>
            <p className="text-lg font-mediummy-2">
              Email: johndoe@example.com
            </p>
            <p className="text-lg font-medium my-2">Location: New York, NY</p>
          </div>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-5"
          
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default MyProfilePage;
