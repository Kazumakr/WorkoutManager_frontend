import React, { useState } from "react";
import axios from "axios";
import {
	Container,
	Title,
	Form,
	Label,
	Input,
	Button,
} from "./ChangePasswordStyle";
import { useParams } from "react-router";

const ChangePassword = () => {
	let { id } = useParams();

	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.put(
				`http://localhost:3001/auth/changepassword/${id}`,
				{ oldPassword: oldPassword, newPassword: newPassword },
				{
					headers: { accessToken: localStorage.getItem("accessToken") },
				}
			)
			.then((res) => {
				if (res.data.error) {
					setError(res.data.error);
				}
				setSuccess(true);
			});
	};
	return (
		<Container>
			<Title>Change Password</Title>
			{success && (
				<span style={{ textAlign: "center", color: "lightgreen" }}>
					Password has been changed
				</span>
			)}
			{error && (
				<span style={{ textAlign: "center", color: "red" }}>{error}</span>
			)}
			<Form onSubmit={handleSubmit}>
				<Label>Old Passowrd</Label>
				<Input
					type="password"
					placeholder="Old Password"
					value={oldPassword}
					onChange={(event) => setOldPassword(event.target.value)}
				/>
				<Label>New Passowrd</Label>
				<Input
					type="password"
					placeholder="New Password"
					value={newPassword}
					onChange={(event) => setNewPassword(event.target.value)}
				/>

				<Label>Confirm Password</Label>
				<Input
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={(event) => setConfirmPassword(event.target.value)}
				/>

				{!(newPassword === confirmPassword) && (
					<span style={{ color: "red" }}>Confirma password does not match</span>
				)}
				<Button type="submit" disabled={!(newPassword === confirmPassword)}>
					Change Password
				</Button>
			</Form>
		</Container>
	);
};

export default ChangePassword;
