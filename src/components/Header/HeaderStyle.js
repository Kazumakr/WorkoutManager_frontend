import styled from "styled-components";

import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: black;
	position: relative;
	z-index: 2;
`;
export const Left = styled.div``;
export const Right = styled.div``;
export const Logo = styled.h1`
	color: white;
	${mobile({ fontSize: "20px" })}
`;
export const AccountIcon = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: block;
	background-color: #57c9d5;
	position: relative;
	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
	${tablet({ width: "40px", height: "40px" })}
	${mobile({ width: "35px", height: "35px" })}
`;

export const AccountInitial = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 22px;
	background-color: #57c9d5;
`;
export const Menu = styled.ul`
	width: 120px;
	position: absolute;
	top: 100%;
	right: 1%;
	padding: 25px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	color: white;
	background: black;
	transition: 1s opacity;
	text-align: center;
	list-style: none;
	z-index: 3;
	border: 1px solid white;
	border-radius: 10px;

	li {
		margin: 5px 0;
		&:hover {
			text-decoration: underline;
			cursor: pointer;
		}
	}
`;
