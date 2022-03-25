import React from "react";
import {
	Circle,
	Fill,
	InsideCircle,
	MaskFull,
	MaskHalf,
	Wrapper,
} from "./ProgressCircleStyle";

const ProgressCircle = ({ days, levelColor }) => {
	let deg;
	if (days?.length <= 100) {
		deg = (days.length / 100) * 180;
	} else if (days?.length <= 300) {
		deg = ((days?.length - 100) / 200) * 180;
	} else if (days?.length <= 500) {
		deg = ((days?.length - 300) / 200) * 180;
	} else if (days?.length <= 700) {
		deg = ((days?.length - 500) / 200) * 180;
	} else if (days?.length <= 1000) {
		deg = ((days?.length - 700) / 300) * 180;
	} else {
		deg = 180;
	}
	return (
		<Wrapper>
			<Circle>
				<MaskFull deg={deg}>
					<Fill deg={deg} style={{ backgroundColor: levelColor }}></Fill>
				</MaskFull>
				<MaskHalf>
					<Fill deg={deg} style={{ backgroundColor: levelColor }}></Fill>
				</MaskHalf>
				<InsideCircle style={{ color: levelColor }}>
					{days?.length} days
				</InsideCircle>
			</Circle>
		</Wrapper>
	);
};

export default ProgressCircle;
