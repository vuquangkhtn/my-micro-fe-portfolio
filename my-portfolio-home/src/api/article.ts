import imgMediumSrc from 'assets/medium.png';

const articles = [
  {
    id: 'article-1',
    thumbnail: imgMediumSrc,
    url: 'https://medium.com/geekculture/how-to-manage-states-in-react-applications-effectively-d31b2f740496',
    title: 'How to manage states in React applications effectively',
    description:
      'you can keep not only a clean and readable state management but also reduce the complex logic handling in your applications.',
  },
  {
    id: 'article-2',
    url: 'https://my-porfolio-common-library.vercel.app/',
    title: 'My Porfolio Common Library',
    description:
      'a React UI library with a comprehensive set of components for My Porfolio page.',
  },
  {
    id: 'article-3',
    url: 'https://my-porfolio-server.herokuapp.com/graphql',
    title: 'My Porfolio Server',
    description:
      'a server using Graphql which store and dispatch data for My Porfolio page.',
  },
];

export default articles;
