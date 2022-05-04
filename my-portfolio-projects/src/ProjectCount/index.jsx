import React, { useEffect, useState } from "react";
import { getExperiences, projects } from "../experienceApi";

const ProjectCount = () => {
	const [count, setCount] = useState(-1);

	useEffect(() => {
		getExperiences();
		return projects.subscribe((data) => {
			setCount(data && data.experiences ? data.experiences.length : 0);
		});
	}, []);

	return <span>{count}</span>;
}

export default ProjectCount;