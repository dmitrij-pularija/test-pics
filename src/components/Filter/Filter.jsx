import { modalState, setFilter } from '../../redux/status/slice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/status/selectors';
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
          <IconSearch stroke="currentColor" width="20px" height="20px" />
        </Search>
        <Input
          name="filter"
          type="filter"
          value={filter}
          autoComplete="off"
          placeholder="Find contacts"
          onChange={event => changeFilter(event)}
        />
        {filter && (
          <Clear
            type="button"
            onClick={() => clearFilter()}
            title="Сlick to clear filter"
          >
            <IconClear stroke="currentColor"  width="30px" height="30px" />
          </Clear>
        )}
      </InputField>
      <Add
        type="button"
        onClick={() => openModal()}
        title="Сlick to add new contact"
      >
        <IconAdd fill="currentColor"  width="25px" height="25px" />
      </Add>
    </Box>
  );
};

export default Filter;