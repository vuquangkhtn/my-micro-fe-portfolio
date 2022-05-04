import * as downloadUtils from '../download';

describe('download utils', () => {
  describe('download function', () => {
    it('should generate and click on link to download', () => {
      const mockBlob = new Blob();
      const mockName = 'new-file.pdf';
      const linkMock = {
        setAttribute: jest.fn(),
        click: jest.fn(),
      };
      
      global.URL.createObjectURL = jest.fn();
      document.createElement = jest.fn().mockReturnValue(linkMock);
      downloadUtils.download(mockBlob, mockName);
      expect(document.createElement).toHaveBeenCalledWith('a');
      expect(global.URL.createObjectURL).toHaveBeenCalledWith(mockBlob);
      expect(linkMock.setAttribute).toHaveBeenCalledWith('download', mockName);
      expect(linkMock.click).toHaveBeenCalledWith();

    });
  });
});
