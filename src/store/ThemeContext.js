import React, { useState } from 'react';

const ThemeContext = React.createContext({
  theme: 'light',
  changeTheme: (theme) => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState('light');
  const changeThemeHandler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const contextValue = {
    theme: theme,
    changeTheme: changeThemeHandler,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
