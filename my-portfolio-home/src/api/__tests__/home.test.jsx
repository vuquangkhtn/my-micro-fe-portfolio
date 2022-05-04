import { getHome } from '../home';
import mockUser from '../../__mocks__/data/user';

describe('home api', () => {

  afterEach(() => {
    fetch.mockClear();
  });

  it('should get information for Homepage successfully', async () => {
    const mockResponse = { user: mockUser };
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: jest.fn().mockReturnValue(mockResponse) })
    );
    const result = await getHome();
    expect(result).toEqual(mockResponse);
  });
});
