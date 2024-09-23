import { useSelector } from 'react-redux';
const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <h1>Profile</h1>
      <h3>Bienvenid@ {user.name}</h3>
      <h5>Tus datos:</h5>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* <img src={`http://localhost:3000/${user.user_img}`} alt="" /> */}
    </>
  );
};
export default Profile;
