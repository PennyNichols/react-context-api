import React, { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

const ChangeColor = () => {
	const { changeColor, students } = useContext(StudentContext);

	return (
		<div>
			{students.map((student) => (
				<div>
					<h3>Name: {student.name}</h3>
					Color:{" "}
					<input
						type="text"
						placeholder={student.color}
						onChange={(e) => changeColor(e.target.value, student.id)}
					/>
				</div>
			))}
		</div>
	);
};

export default ChangeColor;
