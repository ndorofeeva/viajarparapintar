export default interface IRoute {
  id: number,
  name: string,
  distance: string,
  duration: number,
  type: string,
  difficulty: number,
  country: string,
  image: string,
}

export interface IFilters {
  countries?: string[];
  difficulty?: DifficultyEnum;
  duration?: number;
  type?: RouteTypeEnum; 
}

export interface IFilterOptions {
  countries: string[];
  minDays: number;
  maxDays: number;
}

export enum RouteTypeEnum {
  'Bike' = 1,
  'Hike' = 2
}

export enum DifficultyEnum {
  'Low' = 1,
  'Moderate' = 2,
  'High' = 3
}