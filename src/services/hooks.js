import { useSelector } from 'react-redux';
// import {
//   selectUser,
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from '../redux/auth/selectors';

export const useAuth = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);
  // const user = useSelector(selectUser);
const { isLoggedIn, isRefreshing, user } = useSelector(state => state.auth);
  return { isLoggedIn, isRefreshing, user };
};

