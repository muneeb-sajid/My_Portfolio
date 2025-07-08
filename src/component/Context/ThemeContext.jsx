// src/context/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// ThemeProvider component to wrap your application
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolioTheme'); // Using a specific key for localStorage
    return savedTheme ? savedTheme : 'dark'; // Default to dark theme
  });

  // Effect to apply the theme class to the body element and save preference
  useEffect(() => {
    document.body.className = theme; // Apply 'dark' or 'light' class to body
    localStorage.setItem('portfolioTheme', theme); // Save the current theme to localStorage
  }, [theme]); // Re-run effect whenever the 'theme' state changes

  // Function to toggle between 'dark' and 'light' themes
  const toggleTheme = () => {
    alert ("Hello");
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to easily consume the ThemeContext in any component
export const useTheme = () => useContext(ThemeContext);