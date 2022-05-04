import { addContact } from '../contact';

describe('contact api', () => {

  afterEach(() => {
    fetch.mockClear();
  });

  it('should add Contact successfully', async () => {
    const mockResponse = { message: 'Add contact successfully' };
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: jest.fn().mockReturnValue(mockResponse) })
    );
    const result = await addContact({ email: 'email@yopmail.com', name: 'My Name', description: 'Description' });
    expect(result).toEqual(mockResponse);
  });
});
