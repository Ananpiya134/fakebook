import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "../../components/layout/PublicLayout";
import Login from "../Login";
import Register from "../Register";
import MainLayout from "../../components/layout/MainLayout";
import Home from "../Home";
import Friend from "../Friend";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function RouteConfig() {
	const { user } = useContext(AuthContext);

	return (
		<Routes>
			{user ? (
				<Route path="/" element={<MainLayout />}>
					<Route path="" element={<Home />} />
					<Route path="friend" element={<Friend />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			) : (
				<Route path="/" element={<PublicLayout />}>
					<Route path="" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="register" element={<Navigate to="/" />} />
				</Route>
			)}
		</Routes>
	);
}

export default RouteConfig;
