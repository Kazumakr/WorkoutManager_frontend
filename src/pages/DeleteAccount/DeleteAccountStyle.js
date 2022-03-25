import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	height: calc(100vh - 130px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: black;
	${tablet({ height: "unset", padding: "30px 0 300px 0" })}
`;
export const Title = styled.span`
	font-size: 40px;
	color: white;
	${tablet({ marginBottom: "20px" })}

	${mobile({ fontSize: "28px" })}
`;
export const Form = styled.form`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	width: 400px;
	${mobile({ width: "70%" })}
`;
export const Label = styled.label`
	margin: 10px 0;
	color: white;
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
	margin: 20px 0;
	width: 100%;
	font-size: 18px;
	border-radius: 10px;

	&:hover {
		cursor: pointer;
		color: white;
		background-color: black;
		border: 1px solid white;
	}
	:disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}
`;

export const Gide = styled.p`
	margin: 20px 0;
	width: 600px;
	font-size: 18px;
	text-align: center;
	color: white;

	${mobile({ width: "80%", fontSize: "14px" })}
`;
