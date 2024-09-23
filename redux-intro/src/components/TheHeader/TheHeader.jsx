import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';

const TheHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="theheader">
      {/* <h1> Social Network </h1> */}
      <Link to="/"> Home | </Link>

      {user ? (
        <>
        <Link to="/profile">Profile {user.name}</Link>
        <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login | </Link>
          <Link to="/register">Register | </Link>
        </>
      )}
    </nav>
  );
};

export default TheHeader;
