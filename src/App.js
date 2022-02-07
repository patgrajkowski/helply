import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import ForgotPassword from './routes/ForgotPassword/ForgotPassword';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import NewPost from './routes/NewPost/NewPost';
import Post from './routes/Post/Post';
import Register from './routes/Register/Register';
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
          <Route path='/' element={<Home theme={theme} />} exact />
          <Route path='/login' element={<Login theme={theme} />} />
          <Route
            path='/forgot-password'
            element={<ForgotPassword theme={theme} />}
          />
          <Route path='/register' element={<Register theme={theme} />} />
          <Route path='/new-post' element={<NewPost theme={theme} />} />
          <Route path='/post' element={<Post theme={theme} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
