import { useContext } from "react";

//Context
import { Context } from "../../utils/Context";
import { ICON_URL } from "../../utils/api/api";

//ICONS
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { PiPulseBold } from "react-icons/pi";
import { TbSunrise, TbSunset } from "react-icons/tb";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";

const Card = () => {
  const { cityData } = useContext(Context);

  if (!cityData.main) {
    return <p className="text-white">Loading....</p>;
  }

  let sunrise = new Date(cityData?.sys?.sunrise * 1000);
  let sunrisetime = `${sunrise.getHours()}:${sunrise.getMinutes()}`;

  let sunset = new Date(cityData?.sys?.sunset * 1000);
  let sunsettime = `${sunset.getHours()}:${sunset.getMinutes()}`;

  //   const { temp, humidity, pressure } = cityData?.main;
  //   const { main: weatherType, icon, description } = cityData?.weather[0];
  //   const { name } = cityData;
  //   const { speed } = cityData.wind;
  //   const { country, sunrise, sunset } = cityData.sys;
  return (
    <div className="text-white flex flex-col gap-3 w-[100%]">
      <div className="flex flex-row items-center justify-between">
        <button className="flex gap-1 text-sm shadow-[0px_0px_50px_-3px_rgba(0,0,0,0.2)] p-2 border border-solid border-[white] rounded-md">
          <MdMyLocation fontSize="1.3em" />
          <span>Get Current Location</span>
        </button>
        <div className="flex text-sm">
          <button className="p-2 px-3 border border-solid border-[grey]">
            °C
          </button>
          <button className="p-2 px-3 border border-solid border-[grey]">
            °F
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        <div className="w-[100%] md:w-[48%]">
          {/* <p>
            {cityData?.name}, {cityData?.sys?.country}
          </p> */}
          {/* <div className="flex items-center gap-2 justify-between w-[100%]">
            <div className="flex flex-col items-center">
              <img src={`${ICON_URL}/${cityData?.weather[0]?.icon}@2x.png`} />
              <p>{cityData?.weather[0]?.main}</p>
            </div>
            <p className="text-5xl">
              {(cityData?.main?.temp - 273.15).toFixed(2)}&deg;C
            </p>
          </div> */}
          <table className="w-[100%]">
            <tbody>
              <tr>
                <td>
                  <div className="flex flex-col items-center">
                    <img
                      src={`${ICON_URL}/${cityData?.weather[0]?.icon}@2x.png`}
                    />
                    <p>{cityData?.weather[0]?.main}</p>
                  </div>
                </td>
                <td>
                  <p className="text-4xl">
                    {(cityData?.main?.temp - 273.15).toFixed(2)}&deg;C
                  </p>
                  <p>
                    {cityData?.name}, {cityData?.sys?.country}
                  </p>
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <div className="flex items-center justify-center gap-1">
                    <FaTemperatureHigh fontSize="2.5em" />
                    <div className="flex flex-col items-center">
                      <p>
                        {(cityData?.main?.temp_max - 273.15).toFixed(2)}&deg;C
                      </p>
                      <p>Max. Temp.</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-1">
                    <FaTemperatureLow fontSize="2.4em" />
                    <div className="flex flex-col items-center">
                      <p>
                        {(cityData?.main?.temp_min - 273.15).toFixed(2)}&deg;C
                      </p>
                      <p>Min. Temp.</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="hidden md:block border-r-[#E7E9EB] border-r border-solid"></div>
        <hr className="my-4 md:hidden" />

        <div className="w-[100%] flex flex-col gap-1 md:w-[48%]">
          <p>
            Feels like{" "}
            <strong>
              {(cityData?.main?.feels_like - 273.15).toFixed(2)}&deg;C
            </strong>
          </p>
          <br />
          <table className="w-[100%]">
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center justify-center gap-1 md:justify-normal">
                    <WiHumidity fontSize="2.5em" />
                    <div className="flex flex-col items-center">
                      <p>{cityData?.main?.humidity}%</p>
                      <p>Humidity</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-1 md:justify-normal">
                    <FiWind fontSize="2.4em" />
                    <div className="flex flex-col items-center">
                      <p>{cityData?.wind?.speed}km/h</p>
                      <p>Wind</p>
                    </div>
                  </div>
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <div className="flex items-center justify-center gap-1 md:justify-normal">
                    <PiPulseBold fontSize="2.4em" />
                    <div className="flex flex-col items-center">
                      <p>{cityData?.main?.pressure}mbar</p>
                      <p>Pressure</p>
                    </div>
                  </div>
                </td>
                {/* <td>
                  <div className="flex items-center gap-1">
                    <FiWind fontSize="2.5em" />
                    <div className="flex flex-col items-center gap-1">
                      <p>{cityData?.wind?.speed}km/h</p>
                      <p>Pressure</p>
                    </div>
                  </div>
                </td> */}
              </tr>
              <br />
              <tr>
                <td>
                  <div className="flex items-center justify-center gap-1 md:justify-normal">
                    <TbSunrise fontSize="2.4em" />
                    <div className="flex flex-col items-center">
                      <p>{sunrisetime} AM</p>
                      <p>Sunrise</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-1 md:justify-normal">
                    <TbSunset fontSize="2.5em" />
                    <div className="flex flex-col items-center">
                      <p>{sunsettime} PM</p>
                      <p>Sunset</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
