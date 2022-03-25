import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
	Container,
	Wrapper,
	Title,
	Button,
	Table,
	Thead,
	Tbody,
	ButtonContainer,
	Desc,
} from "./ScheduleStyle";

const Schedule = () => {
	const [schedule, setSchedule] = useState([]);
	useEffect(() => {
		axios
			.get("https://react-node-workoutmanager.herokuapp.com/schedule", {
				headers: { accessToken: localStorage.getItem("accessToken") },
			})
			.then((res) => {
				setSchedule(res.data);
			});
	}, []);
	return (
		<Container>
			{schedule ? (
				<Wrapper>
					<Title>Schedule</Title>
					<>
						<Table style={{ color: "white" }}>
							<Thead>
								<tr>
									<th>Sun</th>
									<th>Mon</th>
									<th>Tue</th>
									<th>Wed</th>
									<th>Thu</th>
									<th>Fri</th>
									<th>Sat</th>
								</tr>
							</Thead>
							<Tbody>
								<tr>
									<td>{schedule.Sun}</td>
									<td>{schedule.Mon}</td>
									<td>{schedule.Tue}</td>
									<td>{schedule.Wed}</td>
									<td>{schedule.Thu}</td>
									<td>{schedule.Fri}</td>
									<td>{schedule.Sat}</td>
								</tr>
							</Tbody>
						</Table>
						<ButtonContainer>
							<Link to={"/editschedule"}>
								<Button>EDIT</Button>
							</Link>
						</ButtonContainer>
					</>
				</Wrapper>
			) : (
				<Wrapper>
					<Title>Schedule</Title>

					<Desc>This is a sample schedule. Create your own schedule!</Desc>
					<Table style={{ color: "white" }}>
						<Thead>
							<tr>
								<th>Sun</th>
								<th>Mon</th>
								<th>Tue</th>
								<th>Wed</th>
								<th>Thu</th>
								<th>Fri</th>
								<th>Sat</th>
							</tr>
						</Thead>
						<Tbody>
							<tr>
								<td>Chest</td>
								<td>Arm</td>
								<td></td>
								<td>Shoulder</td>
								<td>Legs</td>
								<td></td>
								<td>Arm, Stomach</td>
							</tr>
						</Tbody>
					</Table>
					<ButtonContainer>
						<Link to={"/editschedule"}>
							<Button>Create</Button>
						</Link>
					</ButtonContainer>
				</Wrapper>
			)}
		</Container>
	);
};

export default Schedule;
