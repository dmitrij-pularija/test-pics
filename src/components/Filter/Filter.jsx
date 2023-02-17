import { setFilter } from '../../redux/filterSlice';
import { modalState } from '../../redux/modalSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as IconClear } from '../../img/clear.svg';
import { ReactComponent as IconSearch } from '../../img/search.svg';
import { ReactComponent as IconAdd } from '../../img/add.svg';
import {
  Box,
  Input,
  Label,
  Clear,
  Search,
  Add,
  InputField,
} from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const changeFilter = ({ target: { value } }) => dispatch(setFilter(value));
  const clearFilter = () => dispatch(setFilter(''));
  const openModal = () => dispatch(modalState());

  return (
    <Box>
      <Search>
        <IconSearch stroke="currentColor" />
      </Search>
      <Label htmlFor="filter">Find contacts by name or number</Label>
      <InputField>
        <Input
          name="filter"
          type="filter"
          value={filter}
          onChange={event => changeFilter(event)}
        />
        {filter && (
          <Clear
            type="button"
            onClick={() => clearFilter()}
            title="Сlick to clear filter"
          >
            <IconClear stroke="currentColor" />
          </Clear>
        )}
        <Add
          type="button"
          onClick={() => openModal()}
          title="Сlick to add new contact"
        >
          <IconAdd fill="currentColor" />
        </Add>
      </InputField>
    </Box>
  );
};

export default Filter;