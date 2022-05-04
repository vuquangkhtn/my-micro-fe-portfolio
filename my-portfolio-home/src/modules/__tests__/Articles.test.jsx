import { render } from '@testing-library/react';
import Articles from '../Articles';
import articles from '../../api/article';

describe('Articles Section', () => {
  it('should render with article list', () => {
    const { queryByText } = render(<Articles />);
    const header = queryByText('Articles');
    const items = document.querySelectorAll('.card');
    expect(header).toBeInTheDocument();
    expect(items).toHaveLength(articles.length);
  });
});
