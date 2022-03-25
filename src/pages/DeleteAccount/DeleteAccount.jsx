import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
	Container,
	Title,
	Form,
	Label,
	Input,
	Button,
	Gide,
} from "./DeleteAccountStyle";
import { AuthContext } from "../../context/AuthContext";
const DeleteAccount = () => {
	const { id } = useParams();
	const { isLoggedin, setIsLoggedin } = useContext(AuthContext);

	const [username, setUsername] = useState("");
	const handleDelete = (event) => {
		event.preventDefault();
		axios
			.delete(
				`https://react-node-workoutmanager.herokuapp.com/users/delete/${id}`,
				{
					headers: { accessToken: localStorage.getItem("accessToken") },
				}
			)
			.then(() => {
				localStorage.removeItem("accessToken");
				setIsLoggedin({
					username: "",
					id: 0,
					Days: [],
					status: false,
				});
			});
	};
	return (
		<Container>
			<Title>Delete Account</Title>
			<Gide>
				If you delete your account, you will also delete your all items. <br />
				If it is okay with you, please enter your Email address and press the
				delete button.
			</Gide>
			<Form>
				<Label>Username</Label>
				<Input
					type="text"
					placeholder="Enter Username"
					required
					onChange={(event) => setUsername(event.target.value)}
				/>
				<Button
					type="submit"
					disabled={username !== isLoggedin.username}
					onClick={handleDelete}
				>
					Delete Account
				</Button>
			</Form>
		</Container>
	);
};

export default DeleteAccount;
