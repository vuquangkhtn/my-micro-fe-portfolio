import React from 'react';
import ReactDOM from 'react-dom';

const createConfirmation = (Component) => (props) => {
  const wrapper = document.body.appendChild(document.createElement('div'));

  function dispose() {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(wrapper);
      setTimeout(() => {
        if (document.body.contains(wrapper)) {
          document.body.removeChild(wrapper);
          document.body.style.overflow = 'unset';
        }
      });
    });
  }

  const promise = new Promise((resolve, reject) => {
    ReactDOM.render(
      <Component resolve={resolve} reject={reject} dispose={dispose} {...props} />,
      wrapper
    );
    document.body.style.overflow = 'hidden';
  });

  return promise.then(
    (result) => {
      dispose();
      return result;
    },
    (result) => {
      dispose();
      return Promise.reject(result);
    }
  );
};

export default createConfirmation;
