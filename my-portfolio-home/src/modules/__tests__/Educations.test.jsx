import { render } from '@testing-library/react';
import Educations from '../Educations';
import mockEducations from '../../__mocks__/data/educations';

describe('Educations Section', () => {
  it('should not be shown when there is no educations', () => {
    const { queryByText } = render(<Educations />);
    const header = queryByText('Educations');
    expect(header).toBeNull();
  });

  it('should render with education list', () => {
    const { queryByText } = render(<Educations educations={mockEducations} />);
    const header = queryByText('Educations');
    const items = document.querySelectorAll('.timeline-wrapper');
    expect(header).toBeInTheDocument();
    expect(items).toHaveLength(mockEducations.length);
  });
});
