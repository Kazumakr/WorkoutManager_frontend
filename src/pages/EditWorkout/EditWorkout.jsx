import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

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
} from "./EditWorkoutStyle";
import { AuthContext } from "../../context/AuthContext";

const EditWorkout = () => {
	let { id } = useParams();
	const { isLoggedin, setIsLoggedin } = useContext(AuthContext);

	const [area, setArea] = useState("");
	const [parts, setParts] = useState("");
	const [menu, setMenu] = useState("");
	const [weight, setWeight] = useState("");
	const [date, setDate] = useState("");
	const [unit, setUnit] = useState("");

	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`https://react-node-workoutmanager.herokuapp.com/workouts/${id}`, {
				headers: { accessToken: localStorage.getItem("accessToken") },
			})
			.then((res) => {
				setArea(res.data.area);
				setParts(res.data.parts);
				setMenu(res.data.menu);
				setWeight(res.data.weight);
				setUnit(res.data.unit);
				setDate(res.data.date);
			});
	}, [id]);

	const handleUpdate = () => {
		const updatedWorkout = {
			area,
			parts,
			menu,
			weight,
			unit,
			date,
		};
		axios
			.put(
				`https://react-node-workoutmanager.herokuapp.com/workouts/${id}`,
				updatedWorkout,
				{
					headers: { accessToken: localStorage.getItem("accessToken") },
				}
			)
			.then((res) => {
				const modifiedDate = date.substring(0, 10);

				axios
					.post(
						`https://react-node-workoutmanager.herokuapp.com/days/${isLoggedin.id}`,
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
				<Title>Edit New Workout</Title>
				<Area>
					Area :
					<AreaSelect onChange={(event) => setArea(event.target.value)}>
						<Option value="">Select an area</Option>
						<Option value="Legs" selected={area === "Legs"}>
							Legs
						</Option>
						<Option value="Shoulder" selected={area === "Shoulder"}>
							Shoulder
						</Option>
						<Option value="Chest" selected={area === "Chest"}>
							Chest
						</Option>
						<Option value="Arm" selected={area === "Arm"}>
							Arm
						</Option>
						<Option value="Stomach" selected={area === "Stomach"}>
							Stomach
						</Option>
					</AreaSelect>
				</Area>
				<Form>
					<FormGroup>
						<Label>Parts</Label>
						{(() => {
							switch (area) {
								case "Legs":
									return (
										<Select
											defaultValue={"DEFAULT"}
											onChange={(event) => setParts(event.target.value)}
										>
											<Option value="DEFAULT">Select parts of your body</Option>
											<Option
												value="Wholelegs"
												selected={parts === "WholeLegs"}
											>
												Whole Legs
											</Option>
											<Option
												value="Hamstring"
												selected={parts === "Hamstrings"}
											>
												Hamstrings
											</Option>
											<Option value="Calves" selected={parts === "Calves"}>
												Calves
											</Option>
											<Option value="Glutes" selected={parts === "Clutes"}>
												Glutes
											</Option>
											<Option
												value="Quadriceps"
												selected={parts === "Quadriceps"}
											>
												Quadriceps
											</Option>
										</Select>
									);

								case "Shoulder":
									return (
										<Select
											defaultValue={"DEFAULT"}
											onChange={(event) => setParts(event.target.value)}
										>
											<Option value="DEFAULT">Select parts of your body</Option>
											<Option
												value="WholeShoulder"
												selected={parts === "WholeShoulder"}
											>
												WholeShoulder
											</Option>
											<Option value="Delts" selected={parts === "Delts"}>
												Delts
											</Option>
											<Option
												value="FrontDeltoid"
												selected={parts === "FrontDeltoid"}
											>
												FrontDeltoid
											</Option>
											<Option
												value="SideDeltoid"
												selected={parts === "SideDeltoid"}
											>
												SideDeltoid
											</Option>
											<Option
												value="RearDeltoid"
												selected={parts === "RearDeltoid"}
											>
												RearDeltoid
											</Option>
											<Option value="Traps" selected={parts === "Traps"}>
												Traps
											</Option>
										</Select>
									);

								case "Chest":
									return (
										<Select
											defaultValue={"DEFAULT"}
											onChange={(event) => setParts(event.target.value)}
										>
											<Option value="DEFAULT">Select parts of your body</Option>
											<Option
												value="WholeChest"
												selected={parts === "WholeChest"}
											>
												WholeChest
											</Option>
											<Option
												value="UpperChest"
												selected={parts === "UpperChest"}
											>
												UpperChest
											</Option>
											<Option
												value="MiddleChest"
												selected={parts === "MiddleChest"}
											>
												MiddleChest
											</Option>
											<Option
												value="LowerChest"
												selected={parts === "LowerChest"}
											>
												LowerChest
											</Option>
										</Select>
									);

								case "Arm":
									return (
										<Select
											defaultValue={"DEFAULT"}
											onChange={(event) => setParts(event.target.value)}
										>
											<Option value="DEFAULT">Select parts of your body</Option>
											<Option
												value="WholeArms"
												selected={parts === "WholeArms"}
											>
												WholeArms
											</Option>
											<Option value="Triceps" selected={parts === "Triceps"}>
												Triceps
											</Option>
											<Option value="Biceps" selected={parts === "Biceps"}>
												Biceps
											</Option>
											<Option value="Calves" selected={parts === "Calves"}>
												Forearms
											</Option>
										</Select>
									);
								case "Stomach":
									return (
										<Select
											defaultValue={"DEFAULT"}
											onChange={(event) => setParts(event.target.value)}
										>
											<Option value="DEFAULT">Select parts of your body</Option>
											<Option value="Abs" selected={parts === "Abs"}>
												Abs
											</Option>
											<Option value="Oblique" selected={parts === "Oblique"}>
												Oblique
											</Option>
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
							value={menu}
							onChange={(event) => setMenu(event.target.value)}
						/>
					</FormGroup>
					<FormGroup>
						<Label>Weight</Label>
						<InputContainer>
							<Input
								type="number"
								value={weight}
								onChange={(event) => setWeight(event.target.value)}
							/>
							<Select
								defaultValue={"DEFAULT"}
								onChange={(event) => setUnit(event.target.value)}
							>
								<Option value="DEFAULT">unit</Option>

								<Option value="kg" selected={unit === "kg"}>
									kg
								</Option>
								<Option value="lbs" selected={unit === "lbs"}>
									lbs
								</Option>
							</Select>
						</InputContainer>
					</FormGroup>
					<FormGroup>
						<Label>Date</Label>
						<Input
							type="datetime-local"
							pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
							value={moment(date).format().substring(0, 16)}
							onChange={(event) => setDate(event.target.value)}
						/>
					</FormGroup>
				</Form>
				<ButtonContainer>
					<Button onClick={handleUpdate}>Update</Button>
					<Link to="/">
						<Button>Cancel</Button>
					</Link>
				</ButtonContainer>
			</Wrapper>
		</Container>
	);
};

export default EditWorkout;
