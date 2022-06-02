import { NavigationLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <NavigationLink to="/login">Login</NavigationLink>
      <NavigationLink to="/register">Register</NavigationLink>
    </div>
  );
}
