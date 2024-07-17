export default interface IRoute {
  id: number,
  name: string,
  distance: string,
  duration: number,
  type: string,
  difficulty: string,
  country: string,
  image: string,
}

export interface IFilters {
  countries?: string[];
  difficulty?: DifficultyEnum;
  duration?: number;
  type: RouteTypeEnum; 
}

export interface IFilterOptions {
  countries: string[];
  minDays: number;
  maxDays: number;
}

export enum RouteTypeEnum {
  Bike = 'Bike',
  Hike = 'Hike'
}

export enum DifficultyEnum {
  Low = 'Low',
  Moderate = 'Moderate',
  High = 'High'
}