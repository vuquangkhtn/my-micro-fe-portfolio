const HOMEPAGE_QUERY = `query HomePage($userId: ID!) {
  user(id: $userId) {
    id
    name
    phone
    address
    email
    github
    linkedin
    position
    bio
  }

  skills {
    id
    name
    detail
  }

  histories {
    id
    name
    company
    time
    nextTime {
      time
    }
  }

  educations {
    id
    organization
    name
    description
  }
}`;

export const getHome: () => Promise<HomeResponse> = async () => {
  const data = await fetch(`http://localhost:4000/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: HOMEPAGE_QUERY,
      variables: { userId: 'user-1' },
    })
  })
    .then(r => r.json());
  return data;
};
