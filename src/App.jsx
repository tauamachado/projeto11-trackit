import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthProvider from './AuthContext';
import TodayPage from './pages/TodayPage';
import HabitsPage from './pages/HabitsPage';

export default function App() {
  return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/cadastro" element={<RegisterPage />} />
					<Route path="/hoje" element={<TodayPage />} />
					<Route path="/habitos" element={<HabitsPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
