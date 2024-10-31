import React, { useState } from "react";
import './SearchBar.css';

const SearchDropdown = ( { placeholder = "Search..." } ) => {
  // Sample data for the dropdown
  const items = [
    "Physics",
    "English",
    "History",
    "Philosophy",
    "Mathematics",
    "Computer Science",
    "Science",
  ];

  // State for search input, filtered results, and dropdown visibility
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Handle input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter items based on input
    if (value) {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
    setDropdownVisible(false); // Hide dropdown when typing
  };

  // Toggle dropdown visibility when button is clicked
  const handleButtonClick = () => {
    setDropdownVisible((prev) => !prev);
    if (!isDropdownVisible) {
      setFilteredItems(items); // Show all items if dropdown is visible
    } else {
      setFilteredItems([]); // Clear items if dropdown is hidden
    }
  };

  // Handle item selection
  const handleItemClick = (item) => {
    setSearchTerm(item);
    setFilteredItems([]); // Clear dropdown after selection
    setDropdownVisible(false); // Hide dropdown after selection
  };

  return (
    <div className="searchBar">
    <div className="inputWrapper">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        className="searchInput"
      />

      {/* Button to show all options */}
      <button
        onClick={handleButtonClick}
        className="dropDownButton"
      >
        ▼
      </button>
      </div>

      {/* Dropdown */}
      {(filteredItems.length > 0 || isDropdownVisible) && (
        <ul
          className="dropdown"
        >
          {filteredItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className="filteredItems"
              onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchDropdown;
