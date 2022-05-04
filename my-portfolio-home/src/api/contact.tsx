export const addContact = async ({
  email,
  name,
  description,
}: {
  email: string;
  name: string;
  description: string;
}) => {
  const data = await fetch(`${process.env.REACT_APP_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, name, description }),
  });
  return data.json();
};
