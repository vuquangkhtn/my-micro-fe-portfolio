import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as scrollUtils from '../../utils/scroll';
import Menu from '../Menu';

describe('Menu section', () => {
  it('should show menu items', () => {
    const { queryByText } = render(<Menu username='Quang' />);
    const skillOption = queryByText('Skill');
    const historyOption = queryByText('History');
    const projectOption = queryByText('Project');
    const contactOption = queryByText('Contact');
    const colorModeToggle = queryByText('Color mode');

    expect(skillOption).toBeInTheDocument();
    expect(historyOption).toBeInTheDocument();
    expect(projectOption).toBeInTheDocument();
    expect(contactOption).toBeInTheDocument();
    expect(colorModeToggle).toBeInTheDocument();
  });

  it('should show light icon for Light Mode', () => {
    const { queryByTestId } = render(<AppWrapper><Menu username='Quang' /></AppWrapper>);
    const lightIcon = queryByTestId('light-icon');
    expect(lightIcon).toBeInTheDocument();
  });

  it('should show dark icon for Dark Mode', () => {
    const { queryByTestId } = render(
      <AppWrapper darkMode={true}>
        <Menu username='Quang' />
      </AppWrapper>
    );
    const darkIcon = queryByTestId('dark-icon');
    expect(darkIcon).toBeInTheDocument();
  });

  it('should add top className when user scroll top', () => {
    jest.spyOn(scrollUtils, 'isScrollTop').mockReturnValue(true);
    jest.spyOn(scrollUtils, 'isScrollBottom').mockReturnValue(false);
    render(<Menu username='' />);
    fireEvent.scroll(document);

    expect(document.querySelector('nav').classList).toContain('headroom--top');
    expect(document.querySelector('nav').classList).toContain('headroom--not-bottom');
  });

  it('should add bottom className when user scroll top', () => {
    jest.spyOn(scrollUtils, 'isScrollTop').mockReturnValue(false);
    jest.spyOn(scrollUtils, 'isScrollBottom').mockReturnValue(true);
    render(<Menu username='' />);
    fireEvent.scroll(document);

    expect(document.querySelector('nav').classList).toContain('headroom--bottom');
    expect(document.querySelector('nav').classList).toContain('headroom--not-top');
  });

  it('should pin Menu when user scroll up', () => {
    jest.spyOn(scrollUtils, 'checkScrollDirectionIsUp').mockReturnValue(true);
    render(<Menu username='' />);
    fireEvent.wheel(document);
    expect(document.querySelector('nav').classList).toContain('headroom--pinned');
    expect(document.querySelector('nav').classList).not.toContain('headroom--unpinned');
  });

  it('should unpin Menu when user scroll down', () => {
    jest.spyOn(scrollUtils, 'checkScrollDirectionIsUp').mockReturnValue(false);
    render(<Menu username='' />);
    fireEvent.wheel(document);
    expect(document.querySelector('nav').classList).toContain('headroom--unpinned');
    expect(document.querySelector('nav').classList).not.toContain('headroom--pinned');
  });
});
