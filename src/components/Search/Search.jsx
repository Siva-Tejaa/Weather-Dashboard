import React from "react";

//Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center relative">
        <FaLocationDot
          fontSize="1.2em"
          color="#D3D3D3"
          className="absolute left-2"
        />
        <input
          type="text"
          inputMode="text"
          className="w-[100%] p-2 pl-[35px] rounded-l-md outline-none"
        />
        <button className="p-3 px-4 bg-[#e45c4d] text-white rounded-r-md">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
