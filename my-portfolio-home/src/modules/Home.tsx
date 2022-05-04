import React, { useState, useEffect } from "react";

import About from 'modules/About';
import Skills from 'modules/Skills';
import Histories from 'modules/Histories';
import Articles from 'modules/Articles';
import Contact from 'modules/Contact';
import Footer from 'modules/Footer';
import { getHome } from 'api/home';
import { StaticPages } from 'common';

import Projects from "modules/Projects";
import Educations from "modules/Educations";

type HomeProps = {
	user: User;
	skills: Array<Skill>;
	histories: Array<History>;
	err: Object;
};

const Home: React.FC = () => {
	const [data, setData] = useState<HomeProps>({});
	const [err, setError] = useState();

	const { user = {}, skills, histories } = data;

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await getHome();
				setData(data);
			} catch (e) {
				setError(e);
			}
		}

		getData();
	}, [])

	if (err) {
		console.log(err)
		return <StaticPages.Maintenance />;
	}

	return (
		<div>
			<About user={user} />
			<Skills skills={skills} />
			<Histories histories={histories} />
			<Projects />
			<Educations />
			<Articles />
			<Contact user={user} />
			<Footer />
		</div>
	);
};

export default Home;
