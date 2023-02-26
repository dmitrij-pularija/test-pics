// import PuffLoader from 'react-spinners/PuffLoader';
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

export const LoaderSmall = () => {
  return (
<ClipLoader
  color="#36d7b7"
  size={15}
  speedMultiplier={1}
/>
  );
};

export default Loader;