import { images } from "../constants";
import { FaHeart, FaCoins, FaCalendar } from "react-icons/fa";
import { LuChartNoAxesCombined, LuMonitor } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-12 px-4 md:px-16 lg:px-32">
      {/* Hero Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-10">
        {/* Left Side Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
            The ultimate product <br /> with pleasure
          </h1>
          <p className="mt-4 text-gray-600 text-lg lg:w-11/12">
            Let your product do the magic care for you. Change the quality of
            your personality by changing your appearance. Everything reflects
            your character, and we’re taking care of it.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <button className="bg-orange-500 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:bg-orange-600">
              Get Started
            </button>
            <button className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium shadow-lg hover:bg-gray-300">
              Learn More
            </button>
          </div>

          {/* Services Section */}
          <div className="services-container w-full mb-20 lg:mb-0">
            <h3 className="mt-20 font-bold md:-mb-6">Our Services:</h3>
            <div className="mt-12 grid grid-cols-2 items-start sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs">
              <div className="flex md:flex-col justify-start items-start md:w-full">
                <div className="bg-customBlueDark p-3 w-full flex justify-around items-center md:block md:h-20">
                  <LuMonitor className="text-2xl text-white " />
                  <p className=" font-medium text-white/90">
                    Electronic Products
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-col items-start justify-center  lg:w-full">
                <div className="bg-customBlueDark p-3 w-full flex justify-around items-center md:block md:h-20">
                  <BsGraphUp className="text-2xl text-white " />
                  <p className=" font-medium text-white">In-Demand Products</p>
                </div>
              </div>
              <div className="flex sm:flex-col items-start lg:w-full">
                <div className="bg-customBlueDark p-3 w-full flex justify-around items-center md:block md:h-20">
                  <FaCoins className="text-2xl text-white " />
                  <p className=" font-medium text-white">Best Prices</p>
                </div>
              </div>
              <div className="flex md:flex-col items-start lg:w-full">
                <div className="bg-customBlueDark p-3 w-full flex justify-around items-center md:block md:h-20">
                  <FaCalendar className="text-2xl text-white " />
                  <p className="font-medium text-white">1-Year Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-1/2 lg:mt-0 relative w-11/12 lg:-top-8">
          {/* Illustration */}
          <div className="relative z-10 aspect-square w-full flex justify-center items-center">
            <div className="circle1 bg-customBlueLight absolute w-full h-full z-0 rounded-full"></div>
            <div className="circle2 bg-customBlueMedium absolute w-5/6 h-5/6 z-0 rounded-full"></div>
            <div className="circle3 bg-customBlueDark absolute w-2/3 h-2/3 z-0 rounded-full"></div>

            <img
              src={images.HeroSVG}
              alt="Hero Illustration"
              className="mx-auto lg:ml-auto w-2/3 max-w-md p-4 z-10"
            />
          </div>
          {/* Floating Stats */}
          <div className="absolute top-4 md:top-1/2 left-1/2 md:left-7 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-md p-4 w-auto z-20 text-sm">
            <p className="text-lg font-bold text-gray-800">35K+</p>
            <p className="text-xs text-gray-600">Products everyday on sale</p>
          </div>

          <div className="absolute md:bottom-10 bottom-3  md:right-8 right-20 sm:bottom-20 sm:right-8 transform translate-x-10 translate-y-10 bg-white shadow-lg rounded-lg p-4 sm:w-auto w-24 flex flex-col justify-center items-center z-20">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-customOrange p-[0.3rem] rounded-full border-[0.4rem] border-white/95 backdrop-blur-lg">
              <FaHeart className=" text-white text-lg sm:text-xl flex justify-center items-center" />
            </div>
            <p className="text-xs sm:text-sm text-gray-600 block relative top-2">
              Our Clients
            </p>
            <div className="flex items-center gap-3 mt-6">
              <FaCircleUser className=" sm:text-2xl text-lg" />
              <FaCircleUser className="sm:text-2xl text-lg" />
              <FaCircleUser className=" sm:text-2xl text-lg" />
            </div>
          </div>

          <div className="chart absolute lg:right-4 lg:top-28 top-12 right-3 z-30 bg-customOrange rounded-full p-2 lg:border-[0.7rem] border-[0.4rem] border-white/95 backdrop-blur-lg sm:right-48">
            <LuChartNoAxesCombined className="text-white sm:text-5xl text-2xl transform -rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
