import type { Component } from 'solid-js';

import {
  container,
  name,
  nameContainer,
  position,
  uiExamplesContainer,
} from './Hero.css';
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
      </div>
    </div>
  );
};
