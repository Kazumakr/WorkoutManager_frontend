import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
	Container,
	Wrapper,
	TitleContainer,
	UpdateTitle,
	Form,
	Label,
	Input,
	UpdateButton,
	ButtonContainer,
	FormGroupCheck,
	LinkSection,
	StyledLink,
} from "./SettingStyle";
import { AuthContext } from "../../context/AuthContext";
const Setting = () => {
	let { id } = useParams();
	const { isLoggedin, setIsLoggedin } = useContext(AuthContext);

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");
	const [height, setHeight] = useState(0);
	const [weight, setWeight] = useState(0);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		axios
			.get(`http://localhost:3001/auth/singleuser/${id}`, {
				headers: { accessToken: localStorage.getItem("accessToken") },
			})
			.then((res) => {
				setUsername(res.data.username);
				setEmail(res.data.email);
				setGender(res.data.gender);
				setHeight(res.data.height);
				setWeight(res.data.weight);
			});
	}, [id]);

	const handleUpdate = (event) => {
		event.preventDefault();
		setSuccess(false);
		const updatedUser = { username, email, gender, height, weight };
		axios
			.put(`http://localhost:3001/auth/${id}`, updatedUser, {
				headers: { accessToken: localStorage.getItem("accessToken") },
			})
			.then((res) => {
				setIsLoggedin({
					...isLoggedin,
					username: res.data.username,
				});
				setSuccess(true);
			});
	};

	return (
		<Container>
			<Wrapper>
				<TitleContainer>
					<UpdateTitle>Account Settings</UpdateTitle>
					{success && (
						<span style={{ textAlign: "center", color: "lightgreen" }}>
							Profile has been updated
						</span>
					)}
				</TitleContainer>
				<Form>
					<Label>Username:</Label>
					<Input
						type="text"
						name="name"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
					<Label>Email</Label>
					<Input
						type="email"
						name="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<Label>Gender</Label>
					<FormGroupCheck>
						<Input
							type="radio"
							value="Male"
							checked={gender === "Male"}
							onChange={(event) => setGender(event.target.value)}
						/>
						<span style={{ margin: "0 5px", color: "white" }}>Male</span>
						<Input
							type="radio"
							value="Female"
							checked={gender === "Female"}
							onChange={(event) => setGender(event.target.value)}
						/>
						<span style={{ margin: "0 5px", color: "white" }}>Female</span>
					</FormGroupCheck>
					<Label>Height</Label>
					<div>
						<Input
							type="number"
							name="height"
							value={height ?? ""}
							onChange={(event) => setHeight(event.target.value)}
						/>
						<span style={{ color: "white" }}>cm</span>
					</div>
					<Label>Weight</Label>
					<div>
						<Input
							type="number"
							name="weight"
							value={weight ?? ""}
							onChange={(event) => setWeight(event.target.value)}
						/>
						<span style={{ color: "white" }}>kg</span>
					</div>

					<ButtonContainer>
						<UpdateButton onClick={handleUpdate}>Update</UpdateButton>
					</ButtonContainer>
					<LinkSection>
						<StyledLink to={`/changepassword/${id}`}>
							Change Password
						</StyledLink>
						<StyledLink to={`/deleteaccount/${id}`}>Delete Account</StyledLink>
					</LinkSection>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Setting;
