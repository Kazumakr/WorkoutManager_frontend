import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	height: calc(100vh - 120px);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
	${tablet({ height: "unset", padding: "15px 0 130px 0" })}
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const Title = styled.span`
	color: white;
	font-size: 40px;
	margin-bottom: 10px;
	${mobile({ fontSize: "30px" })}
`;
export const Area = styled.span`
	color: white;
	font-size: 30px;
	margin: 30px 0;
	${mobile({ fontSize: "26px" })}
`;
export const Form = styled.form`
	display: flex;
	${tablet({ flexDirection: "column", width: "100%" })}
`;
export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 10px;
`;
export const Label = styled.label`
	color: white;
	font-size: 18px;
`;
export const Input = styled.input`
	border: 1px solid white;
	border-radius: 5px;
	padding: 10px;
	margin: 10px 5px 15px 0;
	color: gray;
`;
export const InputContainer = styled.div``;
export const AreaSelect = styled.select`
	border: none;
	font-size: 24px;
	margin-left: 5px;

	color: white;
	background-color: black;
`;
export const Select = styled.select`
	border: 1px solid white;
	border-radius: 5px;
	padding: 10px;
	margin: 10px 0 15px 0;
	color: gray;
`;
export const Option = styled.option``;

export const ButtonContainer = styled.div`
	display: flex;
	align-self: flex-end;
	margin-top: 20px;
	${tablet({ alignSelf: "center" })}
`;
export const Button = styled.button`
	color: black;
	border: none;
	background-color: white;
	padding: 10px;
	margin-left: 15px;
	width: 100px;
	font-size: 18px;
	border-radius: 10px;
	&:hover {
		cursor: pointer;
		color: white;
		background-color: black;
		border: 1px solid white;
	}
`;
