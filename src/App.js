import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cast from './pages/Cast';
import Philosophy from './pages/Philosophy';
import Apply from './pages/Apply';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='cast' element={<Cast />} />
            <Route path='philosophy' element={<Philosophy />} />
            <Route path='apply' element={<Apply />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
