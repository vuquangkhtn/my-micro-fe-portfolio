import { render } from '@testing-library/react';
import Skills from '../Skills';
import mockSkills from '../../__mocks__/data/skills';

describe('Skills Section', () => {
  it('should not be shown when there is no skills', () => {
    const { queryByText } = render(<Skills />);
    const header = queryByText('Skills');
    expect(header).toBeNull();
  });

  it('should render with Skill list', () => {
    const { queryByText, queryByTestId } = render(<Skills skills={mockSkills} />);
    const header = queryByText('Skills');
    const itemList = queryByTestId('skill-list');
    expect(header).toBeInTheDocument();
    expect(itemList.childNodes).toHaveLength(mockSkills.length);
  });
});
