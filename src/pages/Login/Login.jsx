import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Container, Title, Form, Input, Label, Button } from "./LoginStyle";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const { setIsLoggedin } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		setError(false);
		const userData = { email, password };
		axios
			.post(
				"https://react-node-workoutmanager.herokuapp.com/users/login",
				userData
			)
			.then((res) => {
				if (res.data.error) {
					alert(res.data.error);
				} else {
					localStorage.setItem("accessToken", res.data.token);
					setIsLoggedin({
						username: res.data.username,
						id: res.data.id,
						Days: res.data.Days,
						status: true,
					});

					navigate("/");
				}
			});
	};
	return (
		<Container>
			<Title>Login</Title>
			{error && (
				<span style={{ color: "red", marginTop: "10px" }}>
					Wrong Credentials
				</span>
			)}
			<Form onSubmit={handleSubmit}>
				<Label>Email</Label>
				<Input
					type="email"
					placeholder="Email"
					onChange={(event) => setEmail(event.target.value)}
				/>
				<Label>Password</Label>
				<Input
					type="password"
					placeholder="Password"
					onChange={(event) => setPassword(event.target.value)}
				/>
				<Button type="submit">Login</Button>
				<Link to="/signup">
					<Button>SignUp</Button>
				</Link>
			</Form>
		</Container>
	);
};

export default Login;
