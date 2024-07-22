import http from './api'
import IRoute, {IFilters, IRouteData} from '../models/route'
import { AxiosResponse } from 'axios';

class RouteService {
  async getAll(): Promise<IRoute[]> {
    const response: AxiosResponse<IRoute[], never> = await http.get('/api/routes');
    return response.data;
  }

  async getAllWithFilter(filters: IFilters): Promise<IRouteData> {
    let query = '/api/routes';
    const queryConditions: string[] = [];

    if(filters.countries && filters.countries.length > 0) 
      queryConditions.push(filters.countries.map(country => `countries=${country}`).join('&'));
    if(filters.difficulty) queryConditions.push(`difficulty=${filters.difficulty}`);
    if(filters.type) queryConditions.push(`type=${filters.type}`);

    if(queryConditions.length > 0) query = `${query}?${queryConditions.join('&')}`;

    query = `${query}&page=${filters.page}&itemsPerPage=${filters.itemsPerPage}`;

    const response: AxiosResponse<IRouteData, never> = await http.get(query);
    return response.data;
  }

  async getCountries(): Promise<string[]> {
    const response: AxiosResponse<string[], never> = await http.get('/api/routes/countries');
    return response.data;
  }
}

export default new RouteService();
