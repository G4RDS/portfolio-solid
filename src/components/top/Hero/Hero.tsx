import type { Component } from 'solid-js';

import {
  container,
  name,
  nameContainer,
  position,
  uiExamplesContainer,
  uiExamplesSquare,
} from './Hero.css';
import { NotificationButton } from './ui_examples/NotificationButton';
import { UserMenu } from './ui_examples/UserMenu';
import { ValueDisplay } from './ui_examples/ValueDisplay';

export const Hero: Component = () => {
  return (
    <div class={container}>
      <h1 class={nameContainer}>
        <span class={name}>G4RDS</span>
        <span class={position}>Frontend Engineer</span>
      </h1>
      <div class={uiExamplesContainer}>
        <ValueDisplay />
        <UserMenu />
        <NotificationButton />
        <div class={uiExamplesSquare} />
      </div>
    </div>
  );
};
