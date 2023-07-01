'use client';
import React, { useState, useRef } from 'react';
import style from './SearchSelect.module.css';

interface IOption {
  value: string;
  label: string;
}

interface SearchSelectProps {
  options: IOption[];
}

const SearchSelect: React.FC<SearchSelectProps> = ({ options }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOptionClick = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues((prevValues) => prevValues.filter((v) => v !== value));
    } else {
      setSelectedValues((prevValues) => [...prevValues, value]);
    }

    setSearchValue('');
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setIsDropdownOpen(true);
  };

  const handleDropdownClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  const handleBadgeClick = (value: string) => {
    setSelectedValues((prevValues) => prevValues.filter((v) => v !== value));
  };

  React.useEffect(() => {
    document.addEventListener('click', handleDropdownClickOutside);
    return () => {
      document.removeEventListener('click', handleDropdownClickOutside);
    };
  }, []);

  return (
    <div className={ style.container }>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        onClick={() => setIsDropdownOpen(true)}
        ref={inputRef}
        placeholder="Поиск..."
      />
      {isDropdownOpen && (
        <div ref={dropdownRef}>
          {options.length > 0 ? (
            options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                style={{
                  backgroundColor: selectedValues.includes(option.value) ? 'blue' : 'white',
                  color: selectedValues.includes(option.value) ? 'white' : 'black',
                  cursor: 'pointer',
                }}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div style={{ color: 'red' }}>Not Found</div>
          )}
        </div>
      )}
      <div>
        {selectedValues.map((value) => (
          <span
            key={value}
            style={{
              display: 'inline-block',
              backgroundColor: 'blue',
              color: 'white',
              padding: '2px 6px',
              marginRight: '4px',
              cursor: 'pointer',
            }}
            onClick={() => handleBadgeClick(value)}
          >
            {options.find((option) => option.value === value)?.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchSelect;






