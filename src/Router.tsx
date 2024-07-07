import { Routes, Route } from 'react-router-dom';
import RoutesPage from './pages/Routes';
import Events from './pages/Events';
import Journal from './pages/Journal';
import About from './pages/About';

const Router = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<RoutesPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </>
 );
};

export default Router;