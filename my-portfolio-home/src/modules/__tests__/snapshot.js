import { render } from '@testing-library/react';
import About from '../About';
import Contact from '../Contact';
import Educations from '../Educations';
import Footer from '../Footer';
import Histories from '../Histories';
import Menu from '../Menu';
import Projects from '../Projects';
import Skills from '../Skills';
import Articles from '../Articles';

import mockUser from '../../__mocks__/data/user';
import mockEducations from '../../__mocks__/data/educations';
import mockHistories from '../../__mocks__/data/histories';
import mockExperiences from '../../__mocks__/data/experiences';
import mockSkills from '../../__mocks__/data/skills';

it('should render About', () => {
  const { container } = render(<About user={mockUser} />);
  expect(container).toMatchSnapshot();
});

it('should render Contact', () => {
  const { container } = render(<Contact user={mockUser} />);
  expect(container).toMatchSnapshot();
});

it('should render Educations', () => {
  const { container } = render(<Educations educations={mockEducations} />);
  expect(container).toMatchSnapshot();
});

it('should render Footer', () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});

it('should render Histories', () => {
  const { container } = render(<Histories histories={mockHistories} />);
  expect(container).toMatchSnapshot();
});

it('should render Menu', () => {
  const { container } = render(<Menu username="username" />);
  expect(container).toMatchSnapshot();
});

it('should render Projects', () => {
  const { container } = render(<Projects experiences={mockExperiences} />);
  expect(container).toMatchSnapshot();
});

it('should render Skills', () => {
  const { container } = render(<Skills skills={mockSkills} />);
  expect(container).toMatchSnapshot();
});

it('should render Articles', () => {
  const { container } = render(<Articles />);
  expect(container).toMatchSnapshot();
});
