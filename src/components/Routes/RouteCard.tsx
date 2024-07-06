import Route from '../../models/Route';

type RouteProps = {
  route: Route;
};

const RouteCard = ({ route }: RouteProps) => (
  <div className="bg-slate-50">
    <img src={route.image} alt={route.name} width='100%' className="object-cover max-h-64"/>
    <h3>{route.name}</h3>
    <p>{route.distance}</p>
    <p>{route.duration}</p>
    <p>Type: {route.type}</p>
    <p>Difficulty: {route.difficulty}</p>
    <p>{route.country}</p>
  </div>
);

export default RouteCard;