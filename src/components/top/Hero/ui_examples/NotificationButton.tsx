import type { Component } from 'solid-js';

import { bellIconSvg, notificationButton } from './NotificationButton.css';
import { BellIcon } from '../../../icons/BellIcon';

export const NotificationButton: Component = () => {
  return (
    <button class={notificationButton}>
      <BellIcon className={bellIconSvg} />
    </button>
  );
};
