import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as router from 'react-router-dom';
import * as downloadUtils from '../../utils/download';
import About from '../About';


describe('About', () => {
  it('should show actions when there is not user info', () => {
    const section = render(<About user={{}} />);
    const downloadButton = section.getByText('Download Resume');
    const getContactButton = section.getByText('Get my contact');

    expect(downloadButton).toBeInTheDocument();
    expect(getContactButton).toBeInTheDocument();
  });

  it('should show user info', () => {
    const userMock = { name: 'Quang Nguyen', position: 'Web Developer' };
    const section = render(<About user={userMock} />);
    const nameText = section.getByText(userMock.name);
    const positionText = section.getByText(userMock.position);

    expect(nameText).toBeInTheDocument();
    expect(positionText).toBeInTheDocument();
  });

  it('should insert #contact to url directly when GetMyContact button clicked', async () => {
    const useNavigate = jest.spyOn(router, 'useNavigate');
    const mockRouter = { push: jest.fn() };
    useNavigate.mockReturnValue(mockRouter);

    const section = render(<About user={{}} />);
    const getContactButton = section.getByText('Get my contact');
    userEvent.click(getContactButton);

    expect(mockRouter.push).toHaveBeenCalledWith('#contact');
  });

  describe('Download Resume function', () => {
    let section;

    const showDownloadConfirmation = () => {
      const downloadButton = screen.queryByText('Download Resume');
      if (downloadButton) {
        userEvent.click(downloadButton);
      }
    };

    const closeDownloadConfirmation = () => {
      const cancelButton = screen.queryByText('Cancel');
      if (cancelButton) {
        userEvent.click(cancelButton);
      }
    };

    const closeMessage = () => {
      const confirmButton = screen.queryByText('Yes');
      if (confirmButton) {
        userEvent.click(confirmButton);
      }
    };

    beforeEach(() => {
      section = render(<About user={{}} />);
    });

    it('should open Download Confirmation when Download button clicked', () => {
      expect(screen.queryByText('Download Confirmation')).not.toBeInTheDocument();
      showDownloadConfirmation();
      expect(screen.getByText('Download Confirmation')).toBeInTheDocument();
      expect(screen.getByText('Are you sure to donwload this resume?')).toBeInTheDocument();
      closeDownloadConfirmation();
    });

    it('should close Download Confirmation when Cancel button clicked', () => {
      showDownloadConfirmation();
      expect(screen.getByText('Download Confirmation')).toBeInTheDocument();
      closeDownloadConfirmation();
      expect(screen.queryByText('Download Confirmation')).not.toBeInTheDocument();
    });

    describe('Accept Download', () => {
      let downloadMock;
      beforeEach(() => {
        downloadMock = jest.spyOn(downloadUtils, 'download');
        downloadMock.mockReturnValue();
      });

      afterEach(() => {
        downloadMock.mockClear();
      });

      it('should close Download Confirmation and show success message when download successfully', async () => {
        global.fetch = jest.fn(() =>
          Promise.resolve({ blob: jest.fn() })
        );
        showDownloadConfirmation();
        expect(screen.getByText('Download Confirmation')).toBeInTheDocument();
        userEvent.click(screen.queryByText('Yes'));
        expect(screen.queryByText('Download Confirmation')).not.toBeInTheDocument();

        await screen.findByText('Download Resume Successfully');
        expect(downloadMock).toHaveBeenCalledTimes(1);
        closeMessage();
        fetch.mockClear();
      });

      it('should close Download Confirmation and show error message when download failed', async () => {
        global.fetch = jest.fn(() =>
          Promise.reject({ err: 'Error' })
        );
        showDownloadConfirmation();
        expect(screen.getByText('Download Confirmation')).toBeInTheDocument();
        userEvent.click(screen.queryByText('Yes'));
        expect(screen.queryByText('Download Confirmation')).not.toBeInTheDocument();

        await screen.findByText('Download Resume Failed');
        expect(downloadMock).not.toHaveBeenCalled();
        closeMessage();
        fetch.mockClear();
      });
    });

  });
});
