import PropTypes from 'prop-types';
import add from '../../img/add.svg';
import clear from '../../img/clear.svg';
import search from '../../img/search.svg';
import {
  Box,
  Input,
  Label,
  Clear,
  Search,
  Icon,
  Add,
  InputField,
} from './Filter.styled';

const Filter = ({ value, onFilterChange, onFilterClear, onAdd }) => {
  return (
    <Box>
      <Search>
        <Icon src={search} width="20px" />
      </Search>
      <Label htmlFor="filter">Find contacts by name</Label>
      <InputField>
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
            <Icon src={clear} width="30px" />
          </Clear>
        )}
        <Add
          type="button"
          onClick={() => onAdd()}
          title="Сlick to add new contact"
        >
          <Icon src={add} width="30px" />
        </Add>
      </InputField>
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Filter;