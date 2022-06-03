import { Link } from 'react-router-dom';
import Container from 'components/Container';

export default function HomePage() {
  return (
    <Container>
      <h4>Welcome to Phonebook application.</h4>
      <p>
        Please <Link to="/register">register</Link> or{' '}
        <Link to="/logIn">log in</Link> to get access to the phonebook =)
      </p>
    </Container>
  );
}
