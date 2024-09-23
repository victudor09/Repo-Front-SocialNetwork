import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../../redux/auth/authSlice';
import { notification } from 'antd';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    /* username: '', */
    email: '',
    password: '',
    password2: '',
  });
  const { name, /* username, */ email, password, password2 } = formData;

  const dispatch = useDispatch();

  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: 'Success',
        description: message,
      });
    }
    if (isError) {
      notification.error({ message: 'Error', description: message });
    }
    
    dispatch(reset())

  }, [isSuccess, isError, message]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('formData', formData);

    if (password !== password2) {
      return notification.error({
        message: 'Error',
        description: 'Passwords does not match',
      });
    } else {
      notification.success({
        message: 'Success',
        description: 'User registered!',
      });

      return dispatch(register(formData));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <span>
        <p>Nombre: </p>
        <input type="text" name="name" value={name} onChange={onChange} />
      </span>

      {/* <span>
        <p>Username: </p>
        <input type="text" name="username" value={username} onChange={onChange} />
      </span> */}

      <span>
        <p>Email: </p>
        <input type="email" name="email" value={email} onChange={onChange} />
      </span>

      <span>
        <p>Password: </p>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </span>

      <span>
        <p>Confirm your Password: </p>
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
      </span>

      <span>
        <p>
          {' '}
          <button type="submit">Register</button>{' '}
        </p>
      </span>
    </form>
  );
};

export default Register;
