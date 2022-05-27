import type { Component } from 'solid-js';

import {
  container,
  divider,
  menuItem,
  menuList,
  userProfileContainer,
  userProfileIcon,
  userProfileName,
  userProfileTextArea,
  userProfileUserId,
} from './UserMenu.css';
import profileIcon from './../../../../assets/img/profile_icon.jpg';

export const UserMenu: Component = () => {
  return (
    <div class={container}>
      <div class={userProfileContainer}>
        <img class={userProfileIcon} src={profileIcon} />
        <div class={userProfileTextArea}>
          <div class={userProfileName}>G4RDS</div>
          <div class={userProfileUserId}>@G4RDS</div>
        </div>
      </div>
      <div class={divider} />
      <ul class={menuList}>
        <li class={menuItem}>設定</li>
        <li class={menuItem}>ログアウト</li>
      </ul>
    </div>
  );
};
