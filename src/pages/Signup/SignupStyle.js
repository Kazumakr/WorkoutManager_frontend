import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: black;
	${tablet({ height: "unset", padding: "15px 0 130px 0" })}
`;

export const Title = styled.span`
	color: white;
	font-size: 40px;
	margin-bottom: 10px;
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
	${mobile({ width: "80%" })}
`;
export const Label = styled.label`
	color: white;
	font-size: 18px;
`;
export const Input = styled.input`
	border: none;
	padding: 10px;
	border-bottom: 1px solid lightgray;
	margin: 10px 0 15px 0;
	background-color: black;
	color: white;
`;
export const Button = styled.button`
	color: black;
	border: none;
	background-color: white;
	padding: 10px;
	margin: 10px 0;
	width: 100%;
	font-size: 18px;
	border-radius: 10px;
	&:hover {
		cursor: pointer;
		color: white;
		background-color: black;
		border: 1px solid white;
	}
`;
