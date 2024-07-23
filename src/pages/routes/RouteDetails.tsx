import RouteService from '../../services/route-service';
import { IRouteDetails } from "../../models/route";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RouteDetails = () => {
  const { id } = useParams();
  const [routeDetails, setRouteDetails] = useState<IRouteDetails>();
  
  useEffect(
    () => {
      id && RouteService.get(id).then(response => {
        setRouteDetails(response);
      });
    },
    []
  );

  return (
    <>
      {routeDetails ? (
        <>
          <h1 className="text-center"> {routeDetails.title} </h1>
          <h3> {routeDetails.highlightedText} </h3>
          <div className='flex h-60 overflow-auto'>
            {
              routeDetails.photos.map(photo => (
                <img
                  src={`/pictures/${photo}`}
                  alt={photo}
                  key={photo}
                  className="object-cover max-h-[100%] pr-1"
                />
              ))
            }
          </div>
          <p> {routeDetails.mainText} </p>
        </>
      ) : (
        <p> No data </p>
      )}
    </>
  );
}

export default RouteDetails;
