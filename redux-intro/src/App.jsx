import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TheHeader from './components/TheHeader/TheHeader.jsx';
import Home from './components/Home/Home.jsx'
import Profile from './components/Profile/Profile.jsx';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<TheHeader />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}


export default App;
