import PropTypes from 'prop-types';
import clear from '../../img/clear.svg';
import search from '../../img/search.svg';
import { Box, Input, Label, Clear, Search, Icon } from './Filter.styled';

const Filter = ({ value, onFilterChange, onFilterClear }) => {
  return (
    <Box>
      <Search>
        <Icon src={search} width="15px" />
      </Search>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        name="filter"
        type="filter"
        value={value}
        onChange={event => onFilterChange(event)}
      />
      {value && (
        <Clear
          type="button"
          onClick={() => onFilterClear()}
          title="Сlick to clear filter"
        >
          <Icon src={clear} width="20px" />
        </Clear>
      )}
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired,
};

export default Filter;