import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import RoutesGrid from "../components/Routes/RoutesGrid";
import Filters from "../components/Routes/Filters";
import RouteService from '../services/route-service';
import IRoute, { IFilterOptions, IFilters, RouteTypeEnum } from "../models/route";

const CARDS_PER_PAGE = 6;

const RoutesPage = () => {
  const [routes, setRoutes] = useState<IRoute[]>([]);
  const [filters, setFilters] = useState<IFilters>({page: 1, itemsPerPage: CARDS_PER_PAGE, type: RouteTypeEnum.Bike});
  const [filterOptions, setFilterOptions] = useState<IFilterOptions>({countries: []});
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [page, setPage] = useState(1);
  
  useEffect(
    () => {
      RouteService.getAllWithFilter(filters).then(response => {
        setRoutes(response.routes);
        setNumberOfPages(response.numberOfPages);
      });
      RouteService.getCountries().then(response => {
        setFilterOptions({countries: response});
      });
    },
    []
  );

  const handleFiltersChange = (changedFilters: IFilters) => {
    setFilters(changedFilters);
    setPage(1);
    const requestParams: IFilters = {...changedFilters, page: 1, itemsPerPage: CARDS_PER_PAGE};
    RouteService.getAllWithFilter(requestParams).then(response => {
      setRoutes(response.routes);
      setNumberOfPages(response.numberOfPages);
    })
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
    const requestParams: IFilters = {...filters, page: page, itemsPerPage: CARDS_PER_PAGE};
    RouteService.getAllWithFilter(requestParams).then(response => {
      setRoutes(response.routes);
      setNumberOfPages(response.numberOfPages);
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
          page={page}
          color="primary"
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default RoutesPage;
