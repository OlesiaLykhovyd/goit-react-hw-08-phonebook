import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavigationLink } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {isLoggedIn ? (
        <NavigationLink to="/contacts">Contacts</NavigationLink>
      ) : (
        <NavigationLink to="/">Home</NavigationLink>
      )}
    </nav>
  );
}
