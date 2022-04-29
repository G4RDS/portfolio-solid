import type { Component } from 'solid-js';

import { container, name, nameContainer, position } from './Hero.css';

export const Hero: Component = () => {
  return (
    <div class={container}>
      <h1 class={nameContainer}>
        <span class={name}>G4RDS</span>
        <span class={position}>Frontend Engineer</span>
      </h1>
    </div>
  );
};
