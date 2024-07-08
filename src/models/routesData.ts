/* This is temporary file to store all data until the server is implemented */

import IRoute from "./route";

const RoutesData: IRoute[] = [
  {
    id: 1,
    name: "EuroVelo bike roads",
    distance: "150km",
    duration: 5,
    type: "road",
    difficulty: 2,
    country: "Austria",
    image: "pictures/eurovelo.jpg",
  },
  {
    id: 2,
    name: "Caucasus high mountains",
    distance: "180km",
    duration: 5,
    type: "mountain trails",
    difficulty: 3,
    country: "Georgia",
    image: "pictures/caucasus.jpg",
  },
  {
    id: 3,
    name: "Around the lakes",
    distance: "150km",
    duration: 3,
    type: "gravel",
    difficulty: 1,
    country: "Ukraine",
    image: "pictures/lakes.jpg",
  },
  {
    id: 4,
    name: "Magic of the wild mountains",
    distance: "100km",
    duration: 3,
    type: "mountain trails",
    difficulty: 2,
    country: "Ukraine",
    image: "pictures/wild.jpg",
  },
  {
    id: 5,
    name: "Along the Black sea shore",
    distance: "200km",
    duration: 4,
    type: "gravel",
    difficulty: 3,
    country: "Ukraine",
    image: "pictures/blacksea.jpg",
  },
  {
    id: 6,
    name: "Rewarding mountain passes",
    distance: "300km",
    duration: 7,
    type: "road",
    difficulty: 3,
    country: "Austria",
    image: "pictures/passes.jpg",
  },
  {
    id: 7,
    name: "Rewarding mountain passes 1111111111111",
    distance: "300km",
    duration: 7,
    type: "road",
    difficulty: 3,
    country: "Austria",
    image: "pictures/passes.jpg",
  },
  {
    id: 8,
    name: "Rewarding mountain passes 22222222222222",
    distance: "300km",
    duration: 7,
    type: "road",
    difficulty: 3,
    country: "Austria",
    image: "pictures/passes.jpg",
  },
  {
    id: 9,
    name: "Rewarding mountain passes 33333333333333333",
    distance: "300km",
    duration: 7,
    type: "road",
    difficulty: 3,
    country: "Austria",
    image: "pictures/passes.jpg",
  },
  {
    id: 10,
    name: "Rewarding mountain passes 4444444444444444",
    distance: "300km",
    duration: 7,
    type: "road",
    difficulty: 3,
    country: "Austria",
    image: "pictures/passes.jpg",
  },
];

export default RoutesData;

export const Countries: string[] = RoutesData.map(
  (route) => route.country
).filter((value, index, array) => array.indexOf(value) === index);
