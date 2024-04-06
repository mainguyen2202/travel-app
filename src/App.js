// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';

function App() {

	useEffect(() => {
		console.log("app");
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
