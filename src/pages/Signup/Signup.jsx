import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Title, Form, Input, Label, Button } from "./SignupStyle";
const Signup = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		setError(false);
		const newUser = { username, email, password };
		axios.post("http://localhost:3001/auth/signup", newUser).then((res) => {
			if (res.data.error) {
				alert(res.data.error);
			} else {
				navigate("/login");
			}
		});
	};
	return (
		<Container>
			<Title>SignUp</Title>
			{error && (
				<span style={{ color: "red", marginTop: "10px" }}>
					Something went wrong
				</span>
			)}
			<Form>
				<Label>Username</Label>
				<Input
					type="text"
					placeholder="Username"
					onChange={(event) => setUsername(event.target.value)}
				/>
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
				<Label>Conrifm Password</Label>
				<Input
					type="password"
					placeholder="Confirm Password"
					onChange={(event) => setConfirmPassword(event.target.value)}
				/>
				{!(password === confirmPassword) && (
					<span style={{ color: "red", marginTop: "10px" }}>
						Confirma password does not match
					</span>
				)}
				<Button onClick={handleSubmit}>Signup</Button>
				<Link to="/login">
					<Button>Login</Button>
				</Link>
			</Form>
		</Container>
	);
};

export default Signup;
