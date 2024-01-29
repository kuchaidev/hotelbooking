import React, {useState} from "react";
import { Business, CalendarToday, Percent } from '@mui/icons-material';
import Datepicker from "react-tailwindcss-datepicker"; 

function Hero() {
  const [value, setValue] = useState({ 
    startDate: null ,
    endDate: null 
  }); 
    
  const handleValueChange = (newValue) => {
    setValue(newValue); 
  } 
  return (
    <>
      <div className="hero bg-cover h-screen font-display">
        {/* Hero content */}
        <div className="px-10 space-y-5 h-96 py-6">
          <h2 className="px-[300px] mx-10 py-16 font-display text-[45.78px] font-bold text-white text-center drop-shadow-2xl indent-0">
            Your ideal vacation starts here. Reserve your dream house now!
          </h2>
          {/*Form Section*/}
          <div className="mx-[400px] bg-white rounded-xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-3 mb-4">
            <div className="mb-4 text-left">
              <label className="mb-2" for="destination">
                Destination
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="destination" type="text" placeholder="Where to?" />
            </div>
            {/* <div className="mb-4 text-left">
              <label className="mb-2 font-display" for="destination">
                Dates
              </label>
              <Datepicker 
                primaryColor={"fuchsia"} 
                value={value} 
                onChange={handleValueChange} 
                showShortcuts={true} 
              />           
            </div> */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-left">
                <label className="mb-2" for="dates">
                  Dates
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input className="mt-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-left">
                <label className="mb-2" for="dates">
                  Guests and Rooms
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input className="mt-6 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
              </div>
            </div>
            <div className="block relative top-10">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                Search
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-between gap-4 px-[300px] py-5 font-display text-primary-blue">
        <div className="mx-5 grid grid-cols-3 gap-3 text-left alight-right">
          <div className="ml-auto my-auto">
            <Percent sx={{ fontSize: 50 }}/> 
          </div>
          <span className="col-span-2">
            Enjoy up to 20% on exclusive deals when you sign up as a Tranquil club member.
          </span>
        </div>
        <div className="mx-5 grid grid-cols-3 gap-3 text-left alight-right">
          <div className="ml-auto my-auto">
            <CalendarToday sx={{ fontSize: 50 }}/> 
          </div>
          <span className="col-span-2">
            Hassle-free refunds and options for rescheduling for a flexible schedules.
          </span>
        </div>
        <div className="mx-5 grid grid-cols-3 gap-3 text-left alight-right">
          <div className="ml-auto my-auto">
            <Business sx={{ fontSize: 50 }}/> 
          </div>
          <span className="col-span-2">
            All properties come with world-class amenities at all price ranges.
          </span>
        </div>
      </div>
    </>
  );
};
export default Hero;