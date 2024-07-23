import { Routes, Route } from 'react-router-dom';
import RoutesPage from './pages/routes/Routes';
import RouteDetailsPage from './pages/routes/RouteDetails';
import Events from './pages/Events';
import Journal from './pages/Journal';
import About from './pages/About';

const Router = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<RoutesPage />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/routes/:id" element={<RouteDetailsPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </>
 );
};

export default Router;