import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";
import { useNavigate } from "react-router-dom";

/* Checkbox component */
const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

/* Radio button component */
const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRanges = ["0–500", "501–1000", "1001–2000", "2001–3000"];
  const sortOptions = [
    "Price High to Low",
    "Price Low to High",
    "Newest First",
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start gap-10 pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* ROOMS SECTION */}
      <div className="w-full">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-2xl">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        {/* Rooms List */}
        <div className="flex flex-col gap-10">
          {roomsDummyData.map((room) => (
            <div
              key={room._id}
              className="flex flex-col md:flex-row gap-6 py-10 border-b border-gray-300 last:border-0"
            >
              {/* Image */}
              <img
                src={room.images[0]}
                alt={room.hotel.name}
                title="View Room Details"
                onClick={() => {
                  navigate(`/hotel_booking/rooms/${room._id}`);
                  window.scrollTo(0, 0);
                }}
                className="w-full md:w-1/2 max-h-64 object-cover rounded-xl shadow-lg cursor-pointer hover:opacity-90 transition"
              />

              {/* Room Details */}
              <div className="md:w-1/2 flex flex-col gap-2">
                <p className="text-gray-500">{room.hotel.city}</p>

                <h2
                  onClick={() => {
                    navigate(`/hotel_booking/rooms/${room._id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-800 text-3xl font-playfair cursor-pointer hover:underline"
                >
                  {room.hotel.name}
                </h2>

                <div className="flex items-center">
                  <StarRating rating={4} />
                  <p className="ml-2 text-sm text-gray-500">200+ reviews</p>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <img src={assets.locationIcon} alt="location" />
                  <span>{room.hotel.address}</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-4 mt-3 mb-6">
                  {room.amenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
                    >
                      <img
                        src={facilityIcons[item]}
                        alt={item}
                        className="w-5 h-5"
                      />
                      <span className="text-xs">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xl font-medium text-gray-700">
                  ${room.pricePerNight}/night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FILTER SECTION */}
      <div className="w-full lg:w-80 border border-gray-300 bg-white text-gray-600">
        {/* Filter Header */}
        <div
          className={`flex items-center justify-between px-5 py-3 border-gray-300 ${
            openFilters ? "border-b" : "lg:border-b"
          }`}
        >
          <p className="font-medium text-gray-800">FILTERS</p>
          <span
            onClick={() => setOpenFilters(!openFilters)}
            className="text-xs cursor-pointer lg:hidden"
          >
            {openFilters ? "HIDE" : "SHOW"}
          </span>
          <span className="hidden lg:block text-xs cursor-pointer">CLEAR</span>
        </div>

        {/* Filter Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            openFilters ? "max-h-[1000px]" : "max-h-0 lg:max-h-[1000px]"
          }`}
        >
          {/* Room Types */}
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 mb-2">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>

          {/* Price Range */}
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 mb-2">Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox key={index} label={range} />
            ))}
          </div>

          {/* Sort */}
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 mb-2">Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
