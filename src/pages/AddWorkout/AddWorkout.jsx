import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import {
	Container,
	Wrapper,
	Title,
	Area,
	Form,
	FormGroup,
	Label,
	AreaSelect,
	Select,
	Option,
	Input,
	Button,
	ButtonContainer,
	InputContainer,
} from "./AddWorkoutStyle";
import { AuthContext } from "../../context/AuthContext";

const AddWorkout = () => {
	const { isLoggedin, setIsLoggedin } = useContext(AuthContext);
	const { search } = useLocation();
	let area = search.split("=")[1];

	const [menu, setMenu] = useState("");
	const [weight, setWeight] = useState(null);
	const [unit, setUnit] = useState("");
	const [parts, setParts] = useState("");
	const [date, setDate] = useState("");
	const [newArea, setNewArea] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		setNewArea(area);
	}, [area]);
	const HandleSubmit = () => {
		const newWorkout = {
			area: newArea,
			parts,
			menu,
			weight,
			unit,
			date,
		};
		axios
			.post("http://localhost:3001/workouts", newWorkout, {
				headers: { accessToken: localStorage.getItem("accessToken") },
			})
			.then((res) => {
				const modifiedDate = date.substring(0, 10);

				axios
					.post(
						`http://localhost:3001/days/${isLoggedin.id}`,
						{ date: modifiedDate },
						{
							headers: { accessToken: localStorage.getItem("accessToken") },
						}
					)
					.then((res) => {
						setIsLoggedin({ ...isLoggedin, Days: res.data });

						navigate("/");
					});
			});
	};

	return (
		<Container>
			<Wrapper>
				<Title>Add New Workout</Title>
				<Area>
					Area :
					<AreaSelect
						defaultValue={area}
						onChange={(event) => setNewArea(event.target.value)}
					>
						<Option value="">Select an area</Option>
						<Option value="Legs">Legs</Option>
						<Option value="Shoulder">Shoulder</Option>
						<Option value="Chest">Chest</Option>
						<Option value="Arm">Arm</Option>
						<Option value="Stomach">Stomach</Option>
					</AreaSelect>
				</Area>
				<Form>
					<FormGroup>
						<Label>Parts</Label>
						{(() => {
							switch (newArea) {
								case "Legs":
									return (
										<Select
											defaultValue={"DEFAULT"}
											onChange={(event) => setParts(event.target.value)}
										>
											<Option value="DEFAULT">Select parts of your body</Option>
											<Option value="WholeLegs">WholeLegs</Option>
											<Option value="Hamstring">Hamstrings</Option>
											<Option value="Calves">Calves</Option>
											<Option value="Glutes">Glutes</Option>
											<Option value="Quadriceps">Quadriceps</Option>
										</Select>
									);

								case "Shoulder":
									return (
										<Select
											defaultValue={"DEFAULT"}
											onChange={(event) => setParts(event.target.value)}
										>
											<Option value="DEFAULT">Select parts of your body</Option>
											<Option value="WholeShoulder">WholeShoulder</Option>
											<Option value="Delts">Delts</Option>
											<Option value="FrontDeltoid">FrontDeltoid</Option>
											<Option value="SideDeltoid">SideDeltoid</Option>
											<Option value="RearDeltoid">RearDeltoid</Option>
											<Option value="Traps">Traps</Option>
										</Select>
									);

								case "Chest":
									return (
										<Select
											defaultValue={"DEFAULT"}
											onChange={(event) => setParts(event.target.value)}
										>
											<Option value="DEFAULT">Select parts of your body</Option>
											<Option value="WholeChest">WholeChest</Option>
											<Option value="UpperChest">UpperChest</Option>
											<Option value="MiddleChest">MiddleChest</Option>
											<Option value="LowerChest">LowerChest</Option>
										</Select>
									);

								case "Arm":
									return (
										<Select
											defaultValue={"DEFAULT"}
											onChange={(event) => setParts(event.target.value)}
										>
											<Option value="DEFAULT">Select parts of your body</Option>
											<Option value="WholeArms">WholeArms</Option>
											<Option value="Triceps">Triceps</Option>
											<Option value="Biceps">Biceps</Option>
											<Option value="Calves">Forearms</Option>
										</Select>
									);
								case "Stomach":
									return (
										<Select
											defaultValue={"DEFAULT"}
											onChange={(event) => setParts(event.target.value)}
										>
											<Option value="DEFAULT">Select parts of your body</Option>
											<Option value="Abs">Abs</Option>
											<Option value="Oblique">Oblique</Option>
										</Select>
									);

								default:
									return (
										<Select
											defaultValue={"DEFAULT"}
											onChange={(event) => setParts(event.target.value)}
										>
											<Option value="DEFAULT">Select an area first</Option>
										</Select>
									);
							}
						})()}
					</FormGroup>
					<FormGroup>
						<Label>Menu</Label>
						<Input
							type="text"
							onChange={(event) => setMenu(event.target.value)}
						/>
					</FormGroup>
					<FormGroup>
						<Label>Weight</Label>
						<InputContainer>
							<Input
								type="number"
								onChange={(event) => setWeight(event.target.value)}
							/>
							<Select
								defaultValue={"DEFAULT"}
								onChange={(event) => setUnit(event.target.value)}
							>
								<Option value="DEFAULT">unit</Option>
								<Option value="kg">kg</Option>
								<Option value="lbs">lbs</Option>
							</Select>
						</InputContainer>
					</FormGroup>
					<FormGroup>
						<Label>Date</Label>
						<Input
							type="datetime-local"
							pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
							onChange={(event) => {
								setDate(event.target.value);
							}}
						/>
					</FormGroup>
				</Form>
				<ButtonContainer>
					<Button onClick={HandleSubmit}>Add</Button>
					<Link to="/">
						<Button>Cancel</Button>
					</Link>
				</ButtonContainer>
			</Wrapper>
		</Container>
	);
};

export default AddWorkout;
