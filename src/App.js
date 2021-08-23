import './App.css';
import { Switch, Route } from 'react-router-dom';

import Blog from './pages/Blog/Blog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

function App() {
	return (
		<>
			<Header />

			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/blogs'>
					<Blog />
				</Route>
				<Route exact path='/projects'>
					<Projects />
				</Route>
			</Switch>

			<Footer />
		</>
	);
}

export default App;
