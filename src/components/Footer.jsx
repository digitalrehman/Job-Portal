import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 w-full px-10 mx-auto flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Always <span className="text-gray-800">Apply</span>
        </Link>
        <p className="text-center text-gray-500">
          © 2024 Job Portal. All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Facebook className="size-6 cursor-pointer text-blue-500 hover:text-blue-700" />
        <Instagram className="size-6 cursor-pointer text-blue-500 hover:text-blue-700" />
        <Twitter className="size-6 cursor-pointer text-blue-500 hover:text-blue-700" />
      </div>
    </div>
  );
};

export default Footer;
