import { useState } from "react";
import { FaShoppingCart, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const productCategories = ["Electronics", "Clothing", "Home & Kitchen"];

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <nav
      className={`p-4 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Title and Links */}
        <div className="flex items-center space-x-6">
          <div className="text-2xl font-bold">eShop</div>
          <ul
            className={`lg:flex lg:space-x-6 items-center ${
              menuOpen ? "block" : "hidden"
            } lg:block absolute lg:relative top-16 lg:top-0 right-0 md:right-5 -left-6 md:left-0 lg:left-12 lg:w-auto bg-white bg-opacity-20 backdrop-blur-md lg:bg-transparent ${
              isDarkMode ? "lg:bg-gray-800 text-white" : "text-gray-800"
            } shadow-lg lg:shadow-none`}
          >
            <li className="border-b lg:border-none p-4 lg:p-0">
              <a href="#" className="hover:text-gray-500">
                Products
              </a>
            </li>
            <li className="relative border-b lg:border-none p-4 lg:p-0">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-gray-500"
              >
                Categories
              </button>
              {dropdownOpen && (
                <div
                  className={`absolute lg:absolute top-12 left-0 w-40 bg-white border shadow-md rounded ${
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <ul>
                    {productCategories.map((everyProduct, index) => (
                      <li onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                        key={index}
                      >
                        {everyProduct}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Right Section: Hamburger Menu and Icons */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Add to Cart */}
          <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-500" />

          {/* Theme Toggle */}
          <button onClick={toggleTheme}>
            {isDarkMode ? (
              <FaSun className="text-xl hover:text-yellow-500" />
            ) : (
              <FaMoon className="text-xl hover:text-gray-500" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
