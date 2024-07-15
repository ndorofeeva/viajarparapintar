import IRoute, { DifficultyEnum } from "../../models/route";

type RouteProps = {
  route: IRoute;
};

const RouteCard = ({ route }: RouteProps) => {
  let difficultyImgSrc;
  switch(route.difficulty) {
    case DifficultyEnum.Low:
      difficultyImgSrc = 'icons/difficulty-low.png';
      break;
    case DifficultyEnum.Moderate:
      difficultyImgSrc = 'icons/difficulty-moderate.png';
      break;
    case DifficultyEnum.High:
      difficultyImgSrc = 'icons/difficulty-high.png';
  }
  return (
  <div className="bg-slate-50">
    <div className="h-60 relative ">
      <img
        src={route.image}
        alt={route.name}
        width="100%"
        className="object-cover max-h-[100%]"
      />
      <span className="bg-stone-800/75 text-white px-5 absolute bottom-0 left-0">
        {route.distance}
      </span>
      <span className="bg-stone-800/75 text-white px-5 absolute bottom-0 right-0">
        {route.duration} days
      </span>
    </div>
    <div className="px-5">
      <h3
        title={route.name}
        className="whitespace-nowrap overflow-hidden text-ellipsis text-center"
      >
        {route.name}
      </h3>
      <p className="text-center">Type: {route.type}</p>
      <p className="text-center">
        <span>Difficulty: </span>
        <img src={difficultyImgSrc} className="h-4" />
      </p>
      <p className="text-end opacity-30">{route.country}</p>
    </div>
  </div>
)};

export default RouteCard;
