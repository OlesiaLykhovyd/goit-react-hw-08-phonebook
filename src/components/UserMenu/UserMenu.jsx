import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { WelcomeText } from './UserMenu.styled';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <WelcomeText>Welcome {userName}</WelcomeText>
      <Button
        type="button"
        variant="outline-danger"
        size="sm"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </Button>{' '}
    </div>
  );
}
