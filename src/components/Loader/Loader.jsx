import PropTypes from 'prop-types';
import { PuffLoader , ClipLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <PuffLoader
      color={'#36d7b7'}
      loading={true}
      cssOverride={{ display: 'block', margin: '31% auto' }}
      size={60}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export const LoaderSmall = ({ color }) => {
  return (
<ClipLoader
  color={color}
  size={15}
  speedMultiplier={1}
/>
  );
};

LoaderSmall.propTypes = {
  color: PropTypes.string.isRequired,
};