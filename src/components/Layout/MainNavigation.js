import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from '../Store/Auth-context';
import { useSelector,useDispatch } from 'react-redux';
import { AuthSliceAction } from '../../Redux-store/AuthSlice';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
   const dispatch = useDispatch()
  const isLoggedIn = useSelector(state =>{
       return state.Auth.isLoggedIn
  });
 

  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler =()=>{
    dispatch(AuthSliceAction.logout())
      
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Expense Tracker</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
