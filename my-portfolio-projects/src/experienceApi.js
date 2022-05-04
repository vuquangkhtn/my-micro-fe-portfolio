import { BehaviorSubject } from 'rxjs';

const EXPERIENCE_QUERY = `query Experience {
  experiences {
    id
    company {
      time
    },
    name
    description
    industry
    skills
  }
}`;

export const projects = new BehaviorSubject(null);

export const getExperiences = async () => {
	const { data } = await fetch(`http://localhost:4000/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		body: JSON.stringify({
			query: EXPERIENCE_QUERY,
		})
	})
		.then(r => r.json());
	projects.next(data || {});
	return data;
};