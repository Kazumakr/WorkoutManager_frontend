import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	height: "unset";
	display: flex;
	position: relative;

	justify-content: center;
	background-color: black;
	padding-top: 20px;
	padding-bottom: 180px;
	${tablet({ flexDirection: "column", height: "unset" })}
`;
export const Left = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Right = styled.div`
	display: flex;
	flex-direction: column;

	${mobile({ width: "100%" })}
`;
export const StatusSection = styled.div`
	display: flex;
`;
export const TextSection = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 15px;
`;
export const Level = styled.div`
	color: #57c9d5;
	font-size: 18px;
`;
export const Status = styled.div`
	color: #57c9d5;
	font-size: 35px;
`;
export const ProgressWrap = styled.div`
	width: 100px;
	height: 100px;
	background: white;
	border-radius: 50%;
	border: 1px solid #cdcbd0;
	color: white;
`;
export const Area = styled.span`
	color: white;
	font-size: 35px;
	margin-bottom: 20px;
	${mobile({ fontSize: "25px" })}
`;

export const Table = styled.ul`
	width: 700px;
	${tablet({ width: "720px" })}
	${mobile({ width: "100%" })}
`;
export const TableHeader = styled.li`
	border-radius: 3px;
	padding: 25px 20px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	background-color: black;
	border: 1px solid white;

	color: white;
	font-size: 14px;
	text-transform: uppercase;
	letter-spacing: 0.03em;
	${mobile({ display: "none" })}
`;
export const TableRow = styled.li`
	border-radius: 3px;
	padding: 20px 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	box-shadow: 0px 0px 9px 0px rgba(1, 1, 1, 0.7);
	margin: 15px 0;
	${mobile({
		flexDirection: "column",
		margin: "0 40px 20px 0",
		alignItems: "unset",
	})}
`;

export const Col1 = styled.div`
	text-align: center;
	flex-basis: 20%;
	${mobile({ flexBasis: "100%", display: "flex", padding: "10px 0" })}
	&:before {
		${mobile({
			color: "gray",
			paddingRight: "5px",
			flexBasis: "50%",
			textAlign: "left",
			content: "attr(data-label)",
		})}
	}
`;
export const Col2 = styled.div`
	text-align: center;

	flex-basis: 20%;
	${mobile({ flexBasis: "100%", display: "flex", padding: "10px 0" })}

	&:before {
		${mobile({
			color: "gray",
			paddingRight: "5px",
			flexBasis: "50%",
			textAlign: "left",
			content: "attr(data-label)",
		})}
	}
`;
export const Col3 = styled.div`
	text-align: center;

	flex-basis: 10%;
	${mobile({ flexBasis: "100%", display: "flex", padding: "10px 0" })}

	&:before {
		${mobile({
			color: "gray",
			paddingRight: "5px",
			flexBasis: "50%",
			textAlign: "left",
			content: "attr(data-label)",
		})}
	}
`;
export const Col4 = styled.div`
	text-align: center;
	font-size: 14px;
	flex-basis: 25%;
	${mobile({ flexBasis: "100%", display: "flex", padding: "10px 0" })}

	&:before {
		${mobile({
			color: "gray",
			paddingRight: "5px",
			flexBasis: "50%",
			textAlign: "left",
			content: "attr(data-label)",
			fontSize: "16px",
		})}
	}
`;
export const Col5 = styled.div`
	text-align: center;
	font-size: 14px;

	flex-basis: 20%;
	${mobile({
		flexBasis: "100%",
		display: "flex",
		padding: "10px 0",
	})}

	&:before {
		${mobile({
			color: "gray",
			paddingRight: "5px",
			flexBasis: "50%",
			textAlign: "left",
			content: "attr(data-label)",
		})}
	}
`;
export const Col6 = styled.div`
	text-align: center;
	flex-basis: 5%;
	margin-left: 10px;

	${mobile({
		flexBasis: "100%",
		display: "flex",
		padding: "10px 0",
	})}

	&:before {
		${mobile({
			color: "gray",
			paddingRight: "5px",
			flexBasis: "50%",
			textAlign: "right",
			content: "attr(data-label)",
		})}
	}
`;

export const Button = styled.button`
	color: black;
	border: none;
	background-color: white;
	padding: 10px;

	width: 100px;
	font-size: 18px;
	border-radius: 5px;
	&:hover {
		cursor: pointer;
		color: white;
		background-color: black;
		border: 1px solid white;
	}
	${mobile({
		fontSize: "15px",
		width: "90px",
	})}
`;

export const ButtonSection = styled.div`
	display: flex;
	justify-content: space-between;

	${tablet({
		margin: "10px 20px",
	})}
`;

export const LoadButton = styled.button`
	align-self: center;
	color: white;
	border: 1px solid white;
	background-color: black;
	padding: 10px;

	width: 120px;
	font-size: 18px;
	border-radius: 5px;
	&:hover {
		cursor: pointer;
		color: black;
		background-color: white;
		border: none;
	}
	${mobile({
		fontSize: "15px",
		width: "100px",
	})}
`;

export const IconContainer = styled.div`
	width: 30px;
	height: 30px;
	background-color: white;
	border-radius: 50%;
	color: ${(props) => props.color};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
	${mobile({
		marginRight: "15px",
	})}
	&:hover {
		background-color: ${(props) => props.color};
		color: white;
		cursor: pointer;
	}
`;
