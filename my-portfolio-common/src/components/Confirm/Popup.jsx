import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  color: #5b5b5b;
  justify-content: center;
`;

const Container = styled.div`
  min-width: 400px;
  min-height: 200px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
`;

const Header = styled.h3`
  display: flex;
  justify-content: space-between;
  padding: 12px 10px 5px 10px;
  font-weight: bold;
`;

const Content = styled.span`
  flex: 1;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 300;
  min-height: 120px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;
  padding: 12px 8px;
  background-color: #f5f5f5;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Popup = ({ show, proceed, dismiss, header, confirmation, isMessage = false }) => {
  if (!show) return null;
  const handleCancel = () => {
    proceed(false);
  };

  return (
    <StyledPopup onClick={() => dismiss()}>
      <Container
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <Header>{header}</Header>
        <Content>{confirmation}</Content>
        <Actions>
          <Button mode="submit" onClick={() => proceed(true)}>
            Yes
          </Button>
          {!isMessage && (
            <Button mode="primary" onClick={handleCancel}>
              Cancel
            </Button>
          )}
        </Actions>
      </Container>
    </StyledPopup>
  );
};

Popup.propTypes = {
  isMessage: PropTypes.bool,
  show: PropTypes.bool,
  proceed: PropTypes.func,
  cancel: PropTypes.func,
  dismiss: PropTypes.func,
  confirmation: PropTypes.string,
  header: PropTypes.string
};

export default Popup;
