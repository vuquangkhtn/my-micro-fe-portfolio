import React from 'react';
import Button from '../Button/Button';
import createConfirmation from './createConfirmation';
import confirmable from './confirmable';
import Popup from './Popup';

export default {
  title: 'Common/Confirmation',
  component: Popup,
  argTypes: {}
};

const ConfirmPopup = confirmable(Popup);

const confirmPopup = createConfirmation(ConfirmPopup);

const Template = (args) => {
  const handleConfirm = async () => {
    try {
      const confirm = await confirmPopup(args);

      if (confirm) {
        alert('OK');
      } else {
        alert('cancel');
      }
    } catch (e) {
      alert('throw error');
    }
  };
  return (
    <div style={{ display: 'flex', height: '200vh' }}>
      <div>
        <Button onClick={handleConfirm}>Show confirm</Button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  header: 'Custom Confirm Popup',
  confirmation: 'Do you want to confirm?'
};

export const Message = Template.bind({});
Message.args = {
  ...Default.args,
  isMessage: true
};
