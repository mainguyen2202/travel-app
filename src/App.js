// import './App.css';
import Footer from './components/headerFooter/Footer';
import Header from './components/headerFooter/Header';
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';

function App() {

	useEffect(() => {
		console.log("app");
		console.log("key", process.env.REACT_APP_GOOGLE_MAPS_KEY);
	  }, []);

	return (
		<div className="App">
			<div className='app-header'>
				<Header />
			</div>
			<div className='app-content'>
				{/* để phần con của nó */}
				<Outlet />
				{/* app content */}
			</div>
			<div className='app-header'>
				<Footer />
			</div>

		</div>
	);
}

export default App;
