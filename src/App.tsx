import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';

// ROUTES
import Home from './Routes/Home'
import Portfolio from './Routes/Portfolio'
import PageNotFound from './Routes/PageNotFound';

// DATA
import { lightTheme, darkTheme } from './Data/ThemesData';


export const ThemeContext = React.createContext(lightTheme)

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme')==='light'?lightTheme:darkTheme)

  useEffect(()=>{
    localStorage.setItem('theme', theme===lightTheme?'light':'dark')
  },[theme])

  // STYLES
  const style = {
    transition: 'background-color 0.5s'
  }

  return (
    <div className={`App bg-${theme.background}`} style={style}>
      <ThemeContext.Provider value={theme}>
        <NavigationBar toggleTheme={()=>{setTheme(theme===lightTheme?darkTheme:lightTheme)}} />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
