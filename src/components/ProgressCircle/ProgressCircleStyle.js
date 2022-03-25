import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
	width: 100px;
	height: 100px;
	background: black;
	border-radius: 50%;
`;
export const Circle = styled.div``;
export const MaskHalf = styled.div`
	width: 100px;
	height: 100px;
	position: absolute;
	border-radius: 50%;
	clip: rect(0px, 100px, 100px, 50px);
`;

const progress = keyframes`
    0%{transform:rotate(0deg)}
    100%{transform: rotate(${(props) => props.deg}deg)}

`;
export const Fill = styled.div`
	width: 100px;
	height: 100px;
	position: absolute;
	border-radius: 50%;
	clip: rect(0px, 50px, 100px, 0px);
	background-color: #57c9d5;
	animation: ${progress} ease-in-out 2s;
	transform: rotate(${(props) => props.deg}deg);
`;
export const MaskFull = styled.div`
	width: 100px;
	height: 100px;
	position: absolute;
	border-radius: 50%;
	clip: rect(0px, 100px, 100px, 50px);
	animation: ${progress} ease-in-out 3s;
	transform: rotate(${(props) => props.deg}deg);
`;
export const InsideCircle = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background: black;
	line-height: 80px;
	text-align: center;
	margin-top: 10px;
	margin-left: 10px;
	color: #57c9d5;
	position: absolute;

	font-weight: 700;
	font-size: 18px;
`;
