import PuffLoader from 'react-spinners/PuffLoader';

const Loader = () => {
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

export default Loader;