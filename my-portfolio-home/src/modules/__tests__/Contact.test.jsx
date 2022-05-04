import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../Contact';
import mockUser from '../../__mocks__/data/user';
import * as contactUtils from '../../api/contact';

describe('Contact section', () => {
  it('should render when there is no user info', () => {
    const { queryByText, queryByTitle } = render(<Contact user={{}} />);
    const informationHeader = queryByText('My information');
    expect(informationHeader).toBeInTheDocument();
    expect(queryByTitle('github')).not.toBeInTheDocument();
    expect(queryByTitle('linkedin')).not.toBeInTheDocument();
    expect(queryByTitle('phone')).not.toBeInTheDocument();
    expect(queryByText('Send Contact')).toBeInTheDocument();
  });

  it('should render when exist user info', () => {
    const { queryByTitle } = render(<Contact user={mockUser} />);
    expect(queryByTitle('github')).toBeInTheDocument();
    expect(queryByTitle('linkedin')).toBeInTheDocument();
    expect(queryByTitle('phone')).toBeInTheDocument();

  });

  describe('Send Contact action', () => {
    const showSendConfirmation = () => {
      userEvent.type(screen.queryByPlaceholderText('Your Name'), 'Quang Nguyen');
      userEvent.type(screen.queryByPlaceholderText('Email'), 'quang@yopmail.com');
      userEvent.click(screen.queryByText('Send Contact'));
    };

    it('should show error message when name or email are not inputed', () => {
      render(<Contact user={mockUser} />);
      expect(screen.queryByText('Send Contact Failed')).not.toBeInTheDocument();
      userEvent.click(screen.queryByText('Send Contact'));
      expect(screen.getByText('Send Contact Failed')).toBeInTheDocument();
      userEvent.click(screen.queryByText('Yes'));
    });

    it('should show confirmation when Send Contact button is clicked', () => {
      render(<Contact user={mockUser} />);
      expect(screen.queryByText('Send Contact Confirmation')).not.toBeInTheDocument();
      showSendConfirmation();
      expect(screen.getByText('Send Contact Confirmation')).toBeInTheDocument();
      userEvent.click(screen.queryByText('Cancel'));
    });

    describe('Send Contact Confirmation', () => {
      let addContactMock;

      beforeEach(() => {
        global.fetch = jest.fn(() =>
          Promise.resolve({ json: jest.fn() })
        );
        addContactMock = jest.spyOn(contactUtils, 'addContact');
      });

      afterEach(() => {
        addContactMock.mockClear();
        fetch.mockClear();
      });

      it('should close the confirmation when Cancel button clicked ', () => {
        render(<Contact user={mockUser} />);
        expect(screen.queryByText('Send Contact Confirmation')).not.toBeInTheDocument();
        showSendConfirmation();
        expect(screen.getByText('Send Contact Confirmation')).toBeInTheDocument();
        userEvent.click(screen.queryByText('Cancel'));
        expect(screen.queryByText('Send Contact Confirmation')).not.toBeInTheDocument();
        
      });

      it('should show success message when Send Contact succeeded', async () => {
        addContactMock.mockReturnValue(true);
        render(<Contact user={mockUser} />);
        expect(screen.queryByText('Send Contact Confirmation')).not.toBeInTheDocument();
        showSendConfirmation();
        
        expect(screen.getByText('Send Contact Confirmation')).toBeInTheDocument();
        userEvent.click(screen.queryByText('Yes'));
        expect(screen.queryByText('Send Contact Confirmation')).not.toBeInTheDocument();

        await screen.findByText('Send Contact Successfully');
        expect(addContactMock).toHaveBeenCalledTimes(1);
        userEvent.click(screen.queryByText('Yes'));
        expect(screen.queryByText('Send Contact Successfully')).not.toBeInTheDocument();

      });

      it('should show error message when Send Contact failed', async () => {
        addContactMock.mockReturnValue(false);
        render(<Contact user={mockUser} />);
        expect(screen.queryByText('Send Contact Confirmation')).not.toBeInTheDocument();
        showSendConfirmation();
        
        expect(screen.getByText('Send Contact Confirmation')).toBeInTheDocument();
        userEvent.click(screen.queryByText('Yes'));
        expect(screen.queryByText('Send Contact Confirmation')).not.toBeInTheDocument();

        await screen.findByText('Send Contact Failed');
        expect(addContactMock).toHaveBeenCalledTimes(1);
        userEvent.click(screen.queryByText('Yes'));
        expect(screen.queryByText('Send Contact Failed')).not.toBeInTheDocument();
      });
    });

  });
});
