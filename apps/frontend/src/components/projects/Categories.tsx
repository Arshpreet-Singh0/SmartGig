import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FilterDropdowns = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    experienceLevel: '',
    projectLength: '',
    budgetRange: ''
  });
  const [dropdownOpen, setDropdownOpen] = useState({
    category: false,
    experienceLevel: false,
    projectLength: false,
    budgetRange: false
  });

  const filterOptions = [
    {
      key: 'category',
      label: 'Category',
      options: ['Web Development', 'Graphic Design', 'Digital Marketing', 'Software Development']
    },
    {
      key: 'experienceLevel',
      label: 'Experience Level',
      options: ['Beginner', 'Intermediate', 'Expert']
    },
    {
      key: 'projectLength',
      label: 'Project Length',
      options: ['Less than 1 month', '1-3 months', '3-6 months', 'More than 6 months']
    },
    {
      key: 'budgetRange',
      label: 'Budget Range',
      options: ['Less than $500', '$500-$1500', '$1500-$5000', 'More than $5000']
    }
  ];

  const toggleDropdown = (key) => {
    setDropdownOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelectFilter = (key, option) => {
    setSelectedFilters(prev => ({ ...prev, [key]: option }));
    setDropdownOpen(prev => ({ ...prev, [key]: false }));
  };

  return (
    <div className=" border-b border-gray-300">
      <div className='flex items-center px-20 h-20 w-[75%] mx-auto gap-12'>
        <h3>Filter </h3>

        {filterOptions.map(filter => (
          <div key={filter.key} className="relative">
            <button
              onClick={() => toggleDropdown(filter.key)}
              className="w-full text-left bg-[#f5f5f5] border border-gray-300 rounded-lg px-4 py-2 flex justify-between items-center hover:bg-[#efefef] focus:outline-none"
            >
              {selectedFilters[filter.key] || filter.label}
              <ChevronDown className={`transition-transform ${dropdownOpen[filter.key] ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen[filter.key] && (
              <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 w-44">
                {filter.options.map(option => (
                  <li
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectFilter(filter.key, option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdowns;
