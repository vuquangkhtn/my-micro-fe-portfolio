/* eslint-disable */
import React, { useState } from 'react';

const confirmable =
  (Component) =>
    ({ resolve, reject, dispose, ...restProps }) => {
      const [show, setShow] = useState(true);

      const handleResolve = (value) => {
        setShow(false);
        resolve(value);
      };

      const handleCancel = (value) => {
        setShow(false);
        reject(value);
      };

      const handleDismiss = () => {
        setShow(false);
        dispose();
      };

      return (
        <Component
          proceed={handleResolve}
          dismiss={handleDismiss}
          cancel={handleCancel}
          show={show}
          {...restProps}
        />
    )};

export default confirmable;
