import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { IFilters, IFilterOptions } from '../../models/route';

interface IProps {
  onchange: (filters: IFilters) => void;
  filterOptions: IFilterOptions;
}

const Filters = ({onchange, filterOptions}: IProps) => {
 return (
  <>
    <Autocomplete
      multiple
      id="countries-select"
      options={filterOptions.countries}
      getOptionLabel={(option) => option}
      limitTags={1}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Countries" />}
      onChange={(e, countries) => onchange({countries: countries})}
    />
  </>
 )
}

export default Filters;
