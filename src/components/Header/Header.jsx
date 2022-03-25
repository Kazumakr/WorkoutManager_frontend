import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import {
	Container,
	Left,
	Right,
	Logo,
	AccountIcon,
	AccountInitial,
	Menu,
} from "./HeaderStyle";
const Header = () => {
	const [show, setShow] = useState(false);

	const ref = useRef();
	const { isLoggedin, setIsLoggedin, level } = useContext(AuthContext);

	useEffect(() => {
		const ClickedOutside = (e) => {
			if (show && ref.current && !ref.current.contains(e.target)) {
				setShow(false);
			}
		};
		document.addEventListener("mousedown", ClickedOutside);
		return () => {
			document.removeEventListener("mousedown", ClickedOutside);
		};
	}, [show]);

	const handleLogout = () => {
		localStorage.removeItem("accessToken");
		setIsLoggedin({
			username: "",
			id: 0,
			Days: [],
			status: false,
		});
	};

	return (
		<Container ref={ref}>
			<Left>
				<Link to="/">
					<Logo>WORKOUT MANAGER</Logo>
				</Link>
			</Left>

			{isLoggedin.status ? (
				<Right>
					<AccountIcon
						onClick={() => setShow(!show)}
						style={{ backgroundColor: level }}
					>
						<AccountInitial style={{ backgroundColor: level }}>
							{(() => isLoggedin.username[0]?.toUpperCase())()}
						</AccountInitial>
					</AccountIcon>
					<Menu style={show ? { display: "block" } : { display: "none" }}>
						<li>
							<Link to={`/schedule`} style={{ color: "white" }}>
								Schedule
							</Link>
						</li>
						<li>
							<Link to={`/setting/${isLoggedin.id}`} style={{ color: "white" }}>
								Setting
							</Link>
						</li>
						<li onClick={handleLogout}>Logout</li>
					</Menu>
				</Right>
			) : null}
		</Container>
	);
};

export default Header;
