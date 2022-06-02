import { Icon } from '@iconify/react';
import Button from './Button/Button';
import Input from './Input/Input';
import TextArea from './Input/TextArea';
import Link from './Link/Link';
import NavBarToggler from './Animated/NavBarToggler';
import Maintenance from './Page/Maintenance';
import Page404 from './Page/Page404';
import Page500 from './Page/Page500';
import Popup from './Confirm/Popup';
import confirmable from './Confirm/confirmable';
import createConfirmation from './Confirm/createConfirmation';

const confirmKit = {
  Popup,
  confirmable,
  createConfirmation
};

const StaticPages = {
  Maintenance,
  Page404,
  Page500
};

export { Button, Input, TextArea, Link, NavBarToggler, Icon, confirmKit, StaticPages };
