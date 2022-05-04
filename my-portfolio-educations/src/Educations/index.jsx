import { useEffect, useState } from "react";

const EDUCATION_QUERY = `query Education {
  educations {
    id
    organization
    name
    description
  }
}`

const getEducations = async () => {
  const data = await fetch(`http://localhost:4000/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: EDUCATION_QUERY,
    })
  })
    .then(r => r.json());
  return data;
};

const EducationList = ({ educations }) => (
  <div className="timeline">
    {educations.map(education => (
      <div key={education.id} className="timeline-wrapper">
        <div className="timeline-yr">
          <span>{education.organization}</span>
        </div>
        <div className="timeline-info">
          <h3><span />{education.name}</h3>
          <p>{education.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const Educations = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const loadEducations = async () => {
      const { data } = await getEducations();
      setEducations(data.educations);
    }
    loadEducations();
  }, [])

  if (!educations || educations.length === 0) return null;

  return (
    <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="education">
      <div className="container">
        <div className="row">

          <div className="col-12">
            <h2 className="mb-4">Educations</h2>
            <EducationList educations={educations} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Educations;
