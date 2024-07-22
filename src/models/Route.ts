export default interface IRoute {
  id: number,
  title: string,
  distance: string,
  duration: number,
  type: string,
  difficulty: string,
  country: string,
  imagename: string,
}

export interface IRouteData {
  routes: IRoute[];
  numberOfPages: number;
}

export interface IFilters {
  countries?: string[];
  difficulty?: DifficultyEnum;
  duration?: number;
  type?: RouteTypeEnum;
  page: number;
  itemsPerPage: number;
}

export interface IFilterOptions {
  countries: string[];
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