import RouteCard from './RouteCard';
import IRoute from '../../models/route';

const RoutesGrid = ({filteredRoutes}: {filteredRoutes: IRoute[]}) => {
  return (
    <section id="routes">
      <div className="grid grid-cols-3 gap-5">
        {filteredRoutes.map((route: IRoute) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </section>
  );
};

export default RoutesGrid;