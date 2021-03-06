import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import NewPost from './components/Settings/NewPost/NewPost';
import Call from './routes/Call/Call';
import Categories from './routes/Categories/Categories';
import Category from './routes/Category/Category';
import ForgotPassword from './routes/ForgotPassword/ForgotPassword';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Logout from './routes/Logout/Logout';
import Me from './routes/Me/Me';
import Post from './routes/Post/Post';
import Register from './routes/Register/Register';
import AuthContext from './store/AuthContext';
import { CallContextProvider } from './store/CallContext';
import ThemeContext from './store/ThemeContext';

function App() {
    const themeContext = useContext(ThemeContext);
    const authContext = useContext(AuthContext);
    const theme = themeContext.theme;
    const auth = authContext;
    const { isAuth } = auth;
    let background;
    theme === 'light' ? (background = 'white') : (background = '#202020');
    document.body.style.background = background;
    return (
        <BrowserRouter>
            <Layout theme={theme} auth={auth}>
                <Routes>
                    <Route path="/" element={<Home theme={theme} />} exact />
                    <Route
                        path="/login"
                        element={isAuth ? <Navigate to="/me" /> : <Login theme={theme} auth={auth} />}
                    ></Route>
                    <Route
                        path="/forgot_password"
                        element={isAuth ? <Navigate to="/me" /> : <ForgotPassword theme={theme} />}
                    />
                    <Route
                        path="/register"
                        element={isAuth ? <Navigate to="/me" /> : <Register theme={theme} auth={auth} />}
                    />
                    <Route
                        path="/new-post"
                        element={!isAuth ? <Navigate to="/login" /> : <NewPost theme={theme} auth={auth} />}
                    />
                    <Route path="/post/:id" element={<Post theme={theme} />} />
                    <Route path="/categories" element={<Categories theme={theme} />} />
                    <Route path="/:category" element={<Category theme={theme} />} />
                    <Route path="/me" element={<Me theme={theme} auth={auth}></Me>} />
                    <Route path="/logout" element={<Logout theme={theme} auth={auth} />} />
                    <Route
                        path="/call/:id"
                        element={
                            <CallContextProvider>
                                <Call />
                            </CallContextProvider>
                        }
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
