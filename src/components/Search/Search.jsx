import { useContext, useState } from "react";

//Context
import { Context } from "../../utils/Context";

//Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const { city, setCity, getWeatherByCity } = useContext(Context);

  return (
    <div className="w-[100%] mb-2">
      <div className="flex items-center relative">
        <FaLocationDot
          fontSize="1.2em"
          color="#D3D3D3"
          className="absolute left-2"
        />
        <input
          type="search"
          inputMode="text"
          placeholder="Search City..."
          onChange={(e) => setCity(e.target.value)}
          className="w-[100%] p-2 pl-[35px] rounded-l-md outline-none"
        />
        <button
          className="p-3 px-4 bg-[#e45c4d] text-white rounded-r-md"
          onClick={() => {
            getWeatherByCity();
          }}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
