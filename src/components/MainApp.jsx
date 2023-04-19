import {
	Link,
	Navigate,
	NavLink,
	Route,
	Routes,
	BrowserRouter as Router,
} from 'react-router-dom';

import { AboutPage } from '../pages/AboutPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
//import { NotFoundPage } from './NotFoundPage';
import { NavComponent } from './components/NavComponent';
import {UserProvider} from '../context/UserProvider'
import { PrivateRoutes } from './PrivateRoutes';
import { TodoApp } from '.';

export const MainApp = () => {
	return (
		<>
			<Router>
				<UserProvider>
				<NavComponent />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="*" element={<Navigate to="/" />} />
					{/* <Route path="*" element={<LoginPage />} /> */}
					<Route path='/todo/:id' element={<PrivateRoutes><TodoApp/> </PrivateRoutes>}/>

				</Routes>
				</UserProvider>
			</Router>
		</>
	);
};
