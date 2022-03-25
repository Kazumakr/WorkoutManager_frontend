import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import HumanBody from "../../components/HumanBody/HumanBody";
import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import {
	Container,
	Left,
	Right,
	StatusSection,
	TextSection,
	Level,
	Status,
	Area,
	Table,
	TableHeader,
	TableRow,
	Col1,
	Col2,
	Col3,
	Col4,
	Col5,
	Col6,
	Button,
	ButtonSection,
	LoadButton,
	IconContainer,
} from "./HomeStyle";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
	const [area, setArea] = useState("All");
	const [workouts, setWorkouts] = useState([]);
	const { search } = useLocation();
	const [limit, setLimit] = useState(3);

	const { isLoggedin, level, setLevel } = useContext(AuthContext);

	useEffect(() => {
		if (search === "") {
			setArea("All");
		}
		axios
			.get(
				`https://react-node-workoutmanager.herokuapp.com/workouts/workoutslist/${limit}` +
					search,
				{
					headers: { accessToken: localStorage.getItem("accessToken") },
				}
			)
			.then((res) => {
				setWorkouts(res.data);
			});
	}, [search, limit]);

	useEffect(() => {
		setLimit(3);
	}, [search]);

	const handleDelete = (id) => {
		axios
			.delete(
				`https://react-node-workoutmanager.herokuapp.com/workouts/${id}`,
				{
					headers: { accessToken: localStorage.getItem("accessToken") },
				}
			)
			.then(() => {
				setWorkouts(
					workouts.filter((workout) => {
						return workout.id !== id;
					})
				);
			});
	};

	const handleLoad = () => {
		setLimit(limit + 2);
	};

	if (isLoggedin.Days?.length <= 100) {
		setLevel("Aqua");
	} else if (isLoggedin.Days?.length <= 300) {
		setLevel("Lime");
	} else if (isLoggedin.Days?.length <= 500) {
		setLevel("Magenta");
	} else if (isLoggedin.Days?.length <= 700) {
		setLevel("Yellow");
	} else if (isLoggedin.Days?.length <= 1000) {
		setLevel("Red");
	} else {
		setLevel("White");
	}

	return (
		<Container>
			<Left>
				<StatusSection>
					<TextSection>
						<Level style={{ color: level }}>Level</Level>
						<Status style={{ color: level }}>{level}</Status>
					</TextSection>
					<ProgressCircle days={isLoggedin.Days} levelColor={level} />
				</StatusSection>
				<HumanBody setArea={setArea} levelColor={level} />
			</Left>
			<Right>
				<ButtonSection>
					<Area>Area : {area}</Area>
					<Link to={`/addworkout?area=${area}`}>
						<Button>Add New</Button>
					</Link>
				</ButtonSection>
				<Table>
					<TableHeader>
						<Col1>Parts</Col1>
						<Col2>Menu</Col2>
						<Col3>Weight</Col3>
						<Col4>Date</Col4>
						<Col5>Status</Col5>
						<Col6></Col6>
					</TableHeader>
					{workouts.map((workout, index) => (
						<TableRow key={index}>
							<Col1 data-label="Parts">{workout.parts}</Col1>
							<Col2 data-label="Menu">{workout.menu}</Col2>
							<Col3 data-label="Weight">
								{workout.weight}
								{workout.unit}
							</Col3>
							<Col4 data-label="Date">
								{moment(workout.date).format("lll")}
							</Col4>

							{(() => {
								const timeDiff = Math.floor(
									Math.abs(Date.now() - new Date(workout.date).getTime()) /
										(60 * 1000)
								);
								const d = Math.floor(timeDiff / 60 / 24);
								const h = Math.floor((timeDiff / 60) % 24);
								const m = Math.floor(timeDiff % 60);
								const dDis = d > 0 ? d + (d === 1 ? " day " : " days ") : "";
								const hDis = h > 0 ? h + " h " : "";
								const mDis = m > 0 ? m + " min " : "";

								if (timeDiff <= 48 * 60) {
									return (
										<Col5 data-label="Status" style={{ color: "blue" }}>
											Rest
											<br />
											{hDis}
											{mDis} ago
										</Col5>
									);
								} else if (timeDiff <= 72 * 60) {
									return (
										<Col5 data-label="Status" style={{ color: "lightgreen" }}>
											Ready
											<br />
											{hDis}
											{mDis} ago
										</Col5>
									);
								} else {
									return (
										<Col5 data-label="Status" style={{ color: "red" }}>
											Lazy
											<br />
											{dDis}
											{hDis}
											{mDis} ago
										</Col5>
									);
								}
							})()}
							<Col6 data-label="">
								<Link
									to={`editworkout/${workout.id}`}
									style={{ color: "black" }}
								>
									<IconContainer color="green">
										<FaRegEdit />
									</IconContainer>
								</Link>
								<IconContainer color={"DarkRed"}>
									<FaTrashAlt onClick={() => handleDelete(workout.id)} />
								</IconContainer>
							</Col6>
						</TableRow>
					))}
				</Table>
				<LoadButton onClick={handleLoad}>Load More</LoadButton>
			</Right>
		</Container>
	);
};

export default Home;
