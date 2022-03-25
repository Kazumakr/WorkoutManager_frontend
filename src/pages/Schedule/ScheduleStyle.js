import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	height: calc(100vh - 120px);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
	${tablet({ height: "unset", padding: "15px 0 150px 0" })}
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
export const Table = styled.table`
	margin-top: 20px;
	border-radius: 10px;
	border-collapse: collapse;
	th,
	td {
		padding: 15px 15px;
		height: 50px;
		${tablet({ padding: "10px 15px", height: "60px" })}
	}
	${tablet({ display: "flex" })}
`;
export const Thead = styled.thead`
	tr {
		background-color: black;
		color: white;
		${tablet({
			display: "flex",
			flexDirection: "column",
		})}
		th {
			width: 130px;
			border: 1px solid gray;
			${tablet({
				width: "180px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			})}
			${mobile({ width: "100px" })}
		}
	}
`;
export const Tbody = styled.tbody`
	tr {
		background-color: white;
		color: black;
		${tablet({ display: "flex", flexDirection: "column" })}
		td {
			border: 1px solid lightgray;
			overflow-wrap: break-word;
			${tablet({
				width: "250px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			})}
			${mobile({ width: "180px" })}
		}
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-self: flex-end;
	margin-top: 20px;
	${tablet({ alignSelf: "center" })}
`;

export const Desc = styled.p`
	color: white;
	font-size: 24px;
	margin: 10px 0;
	${mobile({ fontSize: "18px", width: "200px" })}
`;
