import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import Container from '../Container/Container';
import { ReactComponent as IconBook } from '../../img/book.svg';
import Notification from 'components/Notification/Notification';
import { Header, Logo, BlueText, OutletBox } from './SharedLayout.styled';
import UserMenu from '../UserMenu/UserMenu';
import { useAuth } from '../../services/hooks';

const SharedLayout = () => {
  const { isRefreshing } = useAuth();

  return (
    <Container>
      <Header>
        <Logo to="/">
          <IconBook
            style={{ fill: 'currentColor', width: '23px', marginRight: '5px' }}
          />
          Phone<BlueText>book</BlueText>
        </Logo>
        <UserMenu />
      </Header>
      <OutletBox>
        <Suspense fallback={<Loader />}>
          {isRefreshing ? (
            <Notification message={'Updating user information...'} />
          ) : (
            <Outlet />
          )}
        </Suspense>
      </OutletBox>
    </Container>
  );
};

export default SharedLayout;