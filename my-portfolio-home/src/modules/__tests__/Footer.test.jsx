import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Section', () => {
  it('should show footer text', () => {
    const { queryByText } = render(<Footer />);
    const footText = queryByText('Designed by');
    expect(footText).toBeInTheDocument();
  });
});
