import styled from "styled-components";
import { Link } from "react-router-dom";

import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	height: calc(100vh - 100px);
	display: flex;
	justify-content: center;
	background: black;
	${tablet({ height: "unset" })}
`;
export const Wrapper = styled.div`
	width: 30vw;
	padding: 20px;
	${tablet({ width: "50vw" })}
	${mobile({ width: "70vw" })}
`;
export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const UpdateTitle = styled.div`
	font-size: 30px;
	margin-bottom: 20px;
	color: white;
	${mobile({ fontSize: "24px" })}
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
export const Label = styled.label`
	font-size: 20px;
	margin-top: 20px;
	color: white;
`;

export const Input = styled.input`
	border: none;
	padding: 10px;
	border-bottom: 1px solid lightgray;
	margin: 10px 0 15px 0;
	background-color: black;
	color: gray;
`;

export const UpdateButton = styled.button`
	color: black;
	border: none;
	background-color: white;
	padding: 10px;
	margin: 20px 0;
	width: 300px;
	font-size: 18px;
	border-radius: 10px;

	&:hover {
		cursor: pointer;
		color: white;
		background-color: black;
		border: 1px solid white;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-self: center;
	${mobile({ width: "100%" })}
`;

export const Textarea = styled.textarea`
	color: gray;
	margin-top: 10px;
	margin-bottom: 10px;
	height: 50px;
	border: none;
	border-bottom: 1px solid lightgray;
`;

export const LinkSection = styled.div`
	align-self: center;
	width: 280px;
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	${mobile({ width: "100%", fontSize: "13px" })}
`;

export const StyledLink = styled(Link)`
	color: white;
	&:hover {
		text-decoration: underline;
	}
`;

export const FormGroupCheck = styled.div`
	display: flex;
	align-items: center;
`;
