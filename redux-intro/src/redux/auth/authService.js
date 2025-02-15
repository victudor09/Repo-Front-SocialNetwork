import axios from 'axios';
const API_URL = 'http://localhost:3001';


const register = async (userData) => {
	const res = await axios.post(`${API_URL}/users`, userData);
	return res.data;
};

const login = async (userData) => {
	const res = await axios.post(`${API_URL}/users/login`, userData)
	console.log('Respuesta de la API:', res.data);
	if (res.data) {
		localStorage.setItem('user', JSON.stringify(res.data.user.name))
		localStorage.setItem('email', JSON.stringify(res.data.user.email))
 		localStorage.setItem('token', JSON.stringify(res.data.token))
	}
	return res.data
}

const logout = async () => {
	const token = JSON.parse(localStorage.getItem('token'))
	const res = await 
	axios.delete(`${API_URL}/users/logout`, {
		headers: {
			authorization: token,
		}
	})
	if (res.data) localStorage.clear()
		return res.data
}


const authService = {
	register, login, logout
};


export default authService;
