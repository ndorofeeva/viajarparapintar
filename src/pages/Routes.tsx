import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import RoutesGrid from "../components/Routes/RoutesGrid";
import Filters from "../components/Routes/Filters";
import RouteService from '../services/route-service';
import IRoute, { IFilterOptions, IFilters, RouteTypeEnum } from "../models/route";

const CARDS_PER_PAGE = 3;
const filtersState: IFilters = { type: RouteTypeEnum.Bike };

const RoutesPage = () => {
  const [routes, setRoutes] = useState<IRoute[]>([]);
  const [filters, setFilters] = useState(filtersState);
  const [page, setPage] = useState(1);
  const [filterOptions, setFilterOptions] = useState<IFilterOptions>({countries: []});
  const [numberOfPages, setNumberOfPages] = useState(0);
  
  useEffect(
    () => {
      RouteService.getAll().then(response => {
        setRoutes(response.slice(0, CARDS_PER_PAGE)); //TODO: pagination from server
        setFilterOptions(getCountriesFromRoutes(response));
        setNumberOfPages(getNumberOfPages(response.length));
      });
    },
    []
  );

  const handleFiltersChange = (changedFilters: IFilters) => {
    console.log(changedFilters);
    setFilters(changedFilters);
    RouteService.getAllWithFilter(changedFilters).then(response => {
      console.log(response);
      setPage(1);
      setRoutes(getPaginated(page, response)); //TODO: pagination from server
      setNumberOfPages(getNumberOfPages(response.length));
    })
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
    RouteService.getAll().then(response => {
      setRoutes(getPaginated(page, response)); //TODO: pagination from server
      setNumberOfPages(getNumberOfPages(response.length));
    });
  };

  return (
    <>
      <h3 className="text-center">
        Explore the routes for your next adventure
      </h3>
      <section id="filters" className="flex pb-5">
        <Filters onchange={handleFiltersChange} filterOptions={filterOptions} filterState={filters} />
      </section>
      <RoutesGrid filteredRoutes={routes} />
      <div className="flex justify-center mt-5">
        <Pagination
          count={numberOfPages}
          color="primary"
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default RoutesPage;

function getPaginated (page: number, routes: IRoute[]) {
  return routes.slice(
    (page - 1) * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE);
}

function getNumberOfPages(routesLength: number) {
  return Math.ceil(routesLength / CARDS_PER_PAGE);
}

function getCountriesFromRoutes(routes: IRoute[]) {
  return {countries: routes.map(route => route.country).filter((value, index, array) => array.indexOf(value) === index)};
}