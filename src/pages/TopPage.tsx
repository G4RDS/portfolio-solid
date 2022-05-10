import type { Component } from 'solid-js';

import { pageContainer } from './TopPage.css';
import { Hero } from '../components/top/Hero';

export const TopPage: Component = () => {
  return (
    <div class={pageContainer}>
      <Hero />
    </div>
  );
};
