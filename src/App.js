import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={'elo'} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
