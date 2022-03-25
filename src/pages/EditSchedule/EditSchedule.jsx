import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import {
	Container,
	Title,
	Form,
	Input,
	Label,
	Button,
} from "./EditScheduleStyle";
const EditSchedule = () => {
	const [Sun, setSun] = useState("");
	const [Mon, setMon] = useState("");
	const [Tue, setTue] = useState("");
	const [Wed, setWed] = useState("");
	const [Thu, setThu] = useState("");
	const [Fri, setFri] = useState("");
	const [Sat, setSat] = useState("");
	const [firstTime, setFirstTime] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://localhost:3001/schedule", {
				headers: { accessToken: localStorage.getItem("accessToken") },
			})
			.then((res) => {
				if (res.data) {
					setFirstTime(false);

					setSun(res.data.Sun);
					setMon(res.data.Mon);
					setTue(res.data.Tue);
					setWed(res.data.Wed);
					setThu(res.data.Thu);
					setFri(res.data.Fri);
					setSat(res.data.Sat);
				}
			});
	}, []);

	const handleCreate = (event) => {
		event.preventDefault();
		const newSchedule = {
			Sun,
			Mon,
			Tue,
			Wed,
			Thu,
			Fri,
			Sat,
		};
		axios
			.post("http://localhost:3001/schedule", newSchedule, {
				headers: { accessToken: localStorage.getItem("accessToken") },
			})
			.then(() => {
				navigate("/schedule");
			});
	};
	const handleUpdate = (event) => {
		event.preventDefault();
		const updatedSchedule = {
			Sun,
			Mon,
			Tue,
			Wed,
			Thu,
			Fri,
			Sat,
		};
		axios
			.put("http://localhost:3001/schedule", updatedSchedule, {
				headers: { accessToken: localStorage.getItem("accessToken") },
			})
			.then(() => {
				navigate("/schedule");
			});
	};
	return (
		<Container>
			{firstTime ? <Title>New Schedule</Title> : <Title>Edit Schedule</Title>}

			<Form>
				<Label>Sunday</Label>
				<Input
					type="text"
					placeholder="e.g) Chest,Shoulder,Rest"
					value={Sun}
					onChange={(event) => {
						setSun(event.target.value);
					}}
				/>
				<Label>Monday</Label>
				<Input
					type="text"
					placeholder="e.g) Chest,Shoulder,Rest"
					value={Mon}
					onChange={(event) => {
						setMon(event.target.value);
					}}
				/>

				<Label>Tuesday</Label>
				<Input
					type="text"
					placeholder="e.g) Chest,Shoulder,Rest"
					value={Tue}
					onChange={(event) => {
						setTue(event.target.value);
					}}
				/>
				<Label>Wednesday</Label>
				<Input
					type="text"
					placeholder="e.g) Chest,Shoulder,Rest"
					value={Wed}
					onChange={(event) => {
						setWed(event.target.value);
					}}
				/>
				<Label>Thursday</Label>
				<Input
					type="text"
					placeholder="e.g) Chest,Shoulder,Rest"
					value={Thu}
					onChange={(event) => {
						setThu(event.target.value);
					}}
				/>
				<Label>Friday</Label>
				<Input
					type="text"
					placeholder="e.g) Chest,Shoulder,Rest"
					value={Fri}
					onChange={(event) => {
						setFri(event.target.value);
					}}
				/>
				<Label>Saturday</Label>
				<Input
					type="text"
					placeholder="e.g) Chest,Shoulder,Rest"
					value={Sat}
					onChange={(event) => {
						setSat(event.target.value);
					}}
				/>
				{firstTime ? (
					<Button onClick={handleCreate}>Create</Button>
				) : (
					<Button onClick={handleUpdate}>Update</Button>
				)}
				<Link to="/schedule">
					<Button>Cancel</Button>
				</Link>
			</Form>
		</Container>
	);
};

export default EditSchedule;
