import { render } from '@testing-library/react';
import Projects from '../Projects';
import mockProjects from '../../__mocks__/data/experiences';

describe('Projects Section', () => {
  it('should not be shown when there is no experiences', () => {
    const { queryByText } = render(<Projects />);
    const header = queryByText('Project Experiences');
    expect(header).toBeNull();
  });

  it('should render with experience list', () => {
    const { queryByText } = render(<Projects experiences={mockProjects} />);
    const header = queryByText('Project Experiences');
    const items = document.querySelectorAll('.timeline-wrapper');
    expect(header).toBeInTheDocument();
    expect(items).toHaveLength(mockProjects.length);
  });
});
