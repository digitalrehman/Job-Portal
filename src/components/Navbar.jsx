import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  let { openSignIn } = useClerk();
  let { user } = useUser();
  return (
    <div className="flex justify-between items-center py-4 px-10 shadow-md w-full">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Always <span className="text-gray-800">Apply</span>
      </Link>

      {user ? (
        <div className="flex items-center gap-5">
          <Link className="text-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold" to="/applications">Applied Jobs</Link>
            <div className=" font-semibold flex items-center gap-2">
              Hello, {user.firstName}
          <UserButton />
            </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <button className="text-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold">
            Recruiter Login
          </button>
          <button
            onClick={openSignIn}
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Candidate Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
