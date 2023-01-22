import PropTypes from 'prop-types';
import { Component } from 'react';
import clear from '../../img/clear.svg';
import search from '../../img/search.svg';
import { Box, Input, Label, Clear, Search, Icon } from './Filter.styled';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ filter: value });
    this.props.onFilterChange(value);
  };

  handleClick = () => {
    this.setState({ filter: '' });
    this.props.onFilterChange('');
  };

  render() {
    return (
      <Box>
        <Search>
          <Icon src={search} width="10px" />
        </Search>
        <Label htmlFor="filter">Find contacts by name</Label>
        <Input
          name="filter"
          type="filter"
          value={this.state.filter}
          onChange={this.handleChange}
        />
        {this.state.filter && (
          <Clear type="rutton" onClick={this.handleClick} title="Сlick to clear filter">
            <Icon src={clear} width="10px" />
          </Clear>
        )}
      </Box>
    );
  }
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
  };
}

export default Filter;