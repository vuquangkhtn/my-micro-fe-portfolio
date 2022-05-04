import { render } from '@testing-library/react';
import Histories from '../Histories';
import mockHistories from '../../__mocks__/data/histories';

describe('Histories Section', () => {
  it('should not be shown when there is no histories', () => {
    const { queryByText } = render(<Histories />);
    const header = queryByText('Histories');
    expect(header).toBeNull();
  });

  it('should render with history list', () => {
    const { queryByText } = render(<Histories histories={mockHistories} />);
    const header = queryByText('Histories');
    const items = document.querySelectorAll('.timeline-wrapper');
    expect(header).toBeInTheDocument();
    expect(items).toHaveLength(mockHistories.length);
  });
});
