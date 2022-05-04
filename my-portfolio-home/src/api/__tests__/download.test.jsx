import { downloadResume } from '../download';
import * as downloadUtils from '../../utils/download';

describe('download api', () => {

  afterEach(() => {
    fetch.mockClear();
  });

  it('should download resume successfully', async () => {
    const mockResponse = { message: 'Download Resume successfully' };
    global.fetch = jest.fn(() =>
      Promise.resolve({ blob: jest.fn().mockReturnValue(mockResponse) })
    );
    jest.spyOn(downloadUtils, 'download').mockReturnValue();
    
    const result = await downloadResume();
    expect(result).toEqual(true);
  });
});
