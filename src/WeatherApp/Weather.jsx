import React, { useState } from "react";

export default function Weather() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const search = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b1a33c41b497c90f0972ac0215ddc9c3`
      );

      if (!response.ok) {
        throw new Error("Weather data not found");
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Weather Information
          </h2>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="location"
            >
              Enter Location:
            </label>
            <input
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter weather location"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={search}
          >
            Get Weather
          </button>
          {error && <p className="text-red-500">{error}</p>}
          {weatherData && (
            <div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-200 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-sm">{weatherData.name}</p>
                </div>
                <div className="bg-blue-200 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Temperature</h3>
                  <p className="text-sm">
                    {weatherData.main.temp} °C
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-200 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Feels like</h3>
                  <p className="text-sm">
                    {weatherData.main.feels_like} °C
                  </p>
                </div>
                <div className="bg-blue-200 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Humidity</h3>
                  <p className="text-sm">{weatherData.main.humidity} %</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-200 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Wind</h3>
                  <p className="text-sm">{weatherData.wind.speed} km/h</p>
                </div>
                <div className="bg-blue-200 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Visibility</h3>
                  <p className="text-sm">
                    {weatherData.visibility} km
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
