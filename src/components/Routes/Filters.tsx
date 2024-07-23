import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { IFilters, IFilterOptions, DifficultyEnum, RouteTypeEnum } from '../../models/route';

interface IProps {
  onchange: (filters: IFilters) => void;
  filterOptions: IFilterOptions;
  filterState: IFilters;
}

const Filters = ({onchange, filterOptions, filterState}: IProps) => {
  const handleCountryChange = (e: React.SyntheticEvent, countries: string[]) => {
    onchange({...filterState, countries: countries});
  }
  const handleDifficultyChange = (e: React.SyntheticEvent, difficulty: string | null) => {
    const difficultyValue = difficulty ? DifficultyEnum[difficulty as keyof typeof DifficultyEnum] : undefined;
    onchange({...filterState, difficulty: difficultyValue});
  }
  const handleTypeChange = (e: React.SyntheticEvent, type: string) => {
    if(type != null) 
      onchange({...filterState, type: RouteTypeEnum[type as keyof typeof RouteTypeEnum]});
  }
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
        onChange={handleCountryChange}
        className="pr-5"
      />
      <Autocomplete
        id="difficulty-select"
        options={Object.keys(DifficultyEnum)}
        getOptionLabel={(option) => option}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Difficulty" />}
        onChange={handleDifficultyChange}
        className="pr-5"
      />
      <ToggleButtonGroup
        color="primary"
        value={filterState.type}
        exclusive
        onChange={handleTypeChange}
        aria-label="Platform"
      >
        {Object.keys(RouteTypeEnum).map(type => (
          <ToggleButton key={type} value={type}>{type}</ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  )
}

export default Filters;
