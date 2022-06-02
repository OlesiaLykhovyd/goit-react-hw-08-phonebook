import { Link, Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h1>Welcome to Phonebook application.</h1>
      <p>
        Please <Link to="/register">register</Link> or{' '}
        <Link to="/logIn">log in</Link> to get access to the phonebook =)
      </p>
      <Outlet />
    </>
  );
}
