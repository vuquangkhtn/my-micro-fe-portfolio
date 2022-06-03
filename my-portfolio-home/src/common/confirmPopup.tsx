import { confirmKit } from 'my-portfolio-common';
const { confirmable, createConfirmation, Popup } = confirmKit;

const ConfirmPopup = confirmable(Popup);
const confirmPopup = createConfirmation(ConfirmPopup);

export default confirmPopup;
