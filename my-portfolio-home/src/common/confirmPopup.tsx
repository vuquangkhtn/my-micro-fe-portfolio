import { confirmKit } from 'my-porfolio-common-library';
const { confirmable, createConfirmation, Popup } = confirmKit;

const ConfirmPopup = confirmable(Popup);
const confirmPopup = createConfirmation(ConfirmPopup);

export default confirmPopup;
