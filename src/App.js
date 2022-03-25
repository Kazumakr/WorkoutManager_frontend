import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddWorkout from "./pages/AddWorkout/AddWorkout";
import EditWorkout from "./pages/EditWorkout/EditWorkout";
import Setting from "./pages/Setting/Setting";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import DeleteAccount from "./pages/DeleteAccount/DeleteAccount";

import { AuthContext } from "./context/AuthContext";
import { useState, useEffect } from "react";

import axios from "axios";
import Schedule from "./pages/Schedule/Schedule";
import EditSchedule from "./pages/EditSchedule/EditSchedule";

function App() {
	const [isLoggedin, setIsLoggedin] = useState({
		username: "",
		id: 0,
		Days: [],
		status: false,
	});
	const [level, setLevel] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:3001/auth/auth", {
				headers: {
					accessToken: localStorage.getItem("accessToken"),
				},
			})
			.then((response) => {
				if (response.data?.error) {
					setIsLoggedin({ username: "", id: 0, Days: [], status: false });
				} else {
					console.log(response);

					setIsLoggedin({
						username: response.data?.username,
						id: response.data?.id,
						Days: response.data?.Days,
						status: true,
					});
				}
			});
	}, []);
	return (
		<AuthContext.Provider
			value={{ isLoggedin, setIsLoggedin, level, setLevel }}
		>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						exact
						path="/"
						element={isLoggedin.status ? <Home /> : <Login />}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/addworkout"
						element={isLoggedin.status ? <AddWorkout /> : <Login />}
					/>
					<Route
						path="/editworkout/:id"
						element={isLoggedin.status ? <EditWorkout /> : <Login />}
					/>
					<Route
						path="/setting/:id"
						element={isLoggedin.status ? <Setting /> : <Login />}
					/>
					<Route
						path="/changepassword/:id"
						element={isLoggedin.status ? <ChangePassword /> : <Login />}
					/>
					<Route
						path="/deleteaccount/:id"
						element={isLoggedin.status ? <DeleteAccount /> : <Login />}
					/>
					<Route
						path="/schedule"
						element={isLoggedin.status ? <Schedule /> : <Login />}
					/>
					<Route
						path="/editschedule"
						element={isLoggedin.status ? <EditSchedule /> : <Login />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
