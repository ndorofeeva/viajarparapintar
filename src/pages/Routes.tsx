import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import RoutesGrid from "../components/Routes/RoutesGrid";
import Filters from "../components/Routes/Filters";
import RoutesData, { Countries } from "../models/routesData"; //TODO: get from server
import IRoute, { IFilterOptions, IFilters } from "../models/route";

const CARDS_PER_PAGE = 3;
const filtersState: IFilters = {};
const filterOptions: IFilterOptions = {  //TODO: get from server
  countries: Countries,
  minDays: 1,
  maxDays: 7,
};

const RoutesPage = () => {
  const routesFirstPage = RoutesData.slice(0, CARDS_PER_PAGE); //TODO: server call
  const numberOfPagesInitial = getNumberOfPages(RoutesData.length);
  const [routes, setRoutes] = useState(routesFirstPage);
  const [filters, setFilters] = useState(filtersState);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(numberOfPagesInitial);


  const handleFiltersChange = (changedFilters: IFilters) => {
    setFilters(changedFilters);
    setRoutes(getFilteredRoutes(undefined, changedFilters));
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
    setRoutes(getFilteredRoutes(page));
  };

  /* TODO: should be server call with current page and filters */
function getFilteredRoutes(newPage?: number, changedFilters?: IFilters) {
  if (isFiltersEmpty(changedFilters ?? filters)) {
    setNumberOfPages(getNumberOfPages(RoutesData.length));
    setPage(1);
    return getPaginated(newPage ?? page, RoutesData);
  }
  const filteredRouts = RoutesData.filter((route) => isRouteApplicable(route, changedFilters ?? filters));
  setNumberOfPages(getNumberOfPages(filteredRouts.length));
  return getPaginated(newPage ?? page, filteredRouts);
}
/* endOf: should be server call with current page and filters */

  return (
    <>
      <h3 className="text-center">
        Explore the routes for your next adventure
      </h3>
      <section id="filters" className="pb-5">
        <Filters onchange={handleFiltersChange} filterOptions={filterOptions} />
      </section>
      <RoutesGrid filteredRoutes={routes} />
      <div className="flex justify-center mt-5">
        <Pagination
          count={numberOfPages}
          color="primary"
          onChange={handleChangePage}
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

function isFiltersEmpty (filters: IFilters) {
  return (!filters.countries || filters.countries.length === 0) &&
    !filters.difficulty &&
    !filters.duration &&
    !filters.type;
}

function isRouteApplicable(route: IRoute, filters: IFilters) {
  let condition = true;
    if (
      (filters.countries && !filters.countries.includes(route.country)) ||
      (filters.difficulty && filters.difficulty !== route.difficulty) ||
      (filters.duration && filters.duration !== route.duration)
    )
      condition = false;
    return condition;
}

function getNumberOfPages(routesLength: number) {
  return Math.ceil(routesLength / CARDS_PER_PAGE);
}
