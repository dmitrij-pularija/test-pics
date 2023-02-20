import { modalState, setFilter } from '../../redux/statusSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { ReactComponent as IconClear } from '../../img/clear.svg';
import { ReactComponent as IconSearch } from '../../img/search.svg';
import { ReactComponent as IconAdd } from '../../img/add.svg';
import { Box, Input, Clear, Search, Add, InputField } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const changeFilter = ({ target: { value } }) => dispatch(setFilter(value));
  const clearFilter = () => dispatch(setFilter(''));
  const openModal = () => dispatch(modalState());

  return (
    <Box>
      <InputField>
        <Search>
          <IconSearch stroke="currentColor" />
        </Search>
        <Input
          name="filter"
          type="filter"
          value={filter}
          placeholder="Find contacts by name or number"
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
      </InputField>
      <Add
        type="button"
        autoFocus
        onClick={() => openModal()}
        title="Сlick to add new contact"
      >
        <IconAdd fill="currentColor" />
      </Add>
    </Box>
  );
};

export default Filter;