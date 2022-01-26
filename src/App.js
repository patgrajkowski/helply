import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Login from './Routes/Login/Login';
import Register from './Routes/Register/Register';
import ThemeContext from './store/ThemeContext';

function App() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  let background;
  theme === 'light' ? (background = 'white') : (background = '#202020');
  document.body.style.background = background;
  return (
    <BrowserRouter>
      <Layout theme={theme}>
        <Routes>
          <Route path='/' element={<LoadingSpinner theme={theme} />} exact />
          <Route path='/login' element={<Login theme={theme} />} />
          <Route path='/register' element={<Register theme={theme} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
