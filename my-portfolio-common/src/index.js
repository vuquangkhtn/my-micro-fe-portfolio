// import { Icon } from '@iconify/react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import TextArea from './components/Input/TextArea';
import Link from './components/Link/Link';
import NavBarToggler from './components/Animated/NavBarToggler';
import Maintenance from './components/Page/Maintenance';
import Page404 from './components/Page/Page404';
import Page500 from './components/Page/Page500';
import Popup from './components/Confirm/Popup';
import confirmable from './components/Confirm/confirmable';
import createConfirmation from './components/Confirm/createConfirmation';

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

export { Button, Input, TextArea, Link, NavBarToggler, confirmKit, StaticPages };
