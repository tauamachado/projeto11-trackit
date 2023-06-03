import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthProvider from './AuthContext';

export default function App() {
  return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/cadastro" element={<RegisterPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
