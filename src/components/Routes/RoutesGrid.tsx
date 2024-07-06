import RouteCard from './RouteCard';
import Route from '../../models/Route';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

const CARDS_PER_PAGE = 3;
//TODO: request data from server
const routesData: Route[] = [
  {
    id: 1,
    name: "EuroVelo bike roads",
    distance: "150km",
    duration: "5 days",
    type: "road",
    difficulty: 2,
    country: "Austria",
    image: "pictures/eurovelo.jpg"
  },
  {
    id: 2,
    name: "Caucasus high mountains",
    distance: "180km",
    duration: "5 days",
    type: "mountain trails",
    difficulty: 3,
    country: "Georgia",
    image: "pictures/caucasus.jpg"
  },
  {
    id: 3,
    name: "Around the lakes",
    distance: "150km",
    duration: "3 days",
    type: "gravel",
    difficulty: 1,
    country: "Ukraine",
    image: "pictures/lakes.jpg"
  },
  {
    id: 4,
    name: "Magic of the wild mountains",
    distance: "100km",
    duration: "2 days",
    type: "mountain trails",
    difficulty: 2,
    country: "Ukraine",
    image: "pictures/wild.jpg"
  },
  {
    id: 5,
    name: "Along the Black sea shore",
    distance: "200km",
    duration: "4 days",
    type: "gravel",
    difficulty: 3,
    country: "Ukraine",
    image: "pictures/blacksea.jpg"
  },
  {
    id: 6,
    name: "Rewarding mountain passes",
    distance: "300km",
    duration: "7 days",
    type: "road",
    difficulty: 3,
    country: "Austria",
    image: "pictures/passes.jpg"
  },
  {
    id: 7,
    name: "Rewarding mountain passes 1111111111111",
    distance: "300km",
    duration: "7 days",
    type: "road",
    difficulty: 3,
    country: "Austria",
    image: "pictures/passes.jpg"
  },
  {
    id: 8,
    name: "Rewarding mountain passes 22222222222222",
    distance: "300km",
    duration: "7 days",
    type: "road",
    difficulty: 3,
    country: "Austria",
    image: "pictures/passes.jpg"
  },
  {
    id: 9,
    name: "Rewarding mountain passes 33333333333333333",
    distance: "300km",
    duration: "7 days",
    type: "road",
    difficulty: 3,
    country: "Austria",
    image: "pictures/passes.jpg"
  },
  {
    id: 10,
    name: "Rewarding mountain passes 4444444444444444",
    distance: "300km",
    duration: "7 days",
    type: "road",
    difficulty: 3,
    country: "Austria",
    image: "pictures/passes.jpg"
  }
];
const numberOfPages = Math.ceil(routesData.length/CARDS_PER_PAGE);

const Routes = () => {
  const [filteredRoutes, setFilteredRoutes] = useState(routesData.slice(0,CARDS_PER_PAGE));

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) =>
    setFilteredRoutes(routesData.slice((page-1)*CARDS_PER_PAGE, page*CARDS_PER_PAGE))

  return (
    <section id="routes">
      <h2 className="text-center">Explore the routes for your next adventure</h2>
      <div className="grid grid-cols-3 gap-5">
        {filteredRoutes.map((route: Route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Pagination count={numberOfPages} color="primary" onChange={handleChangePage}/>
      </div>
    </section>
  );
};

export default Routes;