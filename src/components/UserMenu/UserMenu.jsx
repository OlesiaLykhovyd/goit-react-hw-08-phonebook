import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <span>Welcome {userName}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
}
