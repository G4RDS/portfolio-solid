import type { Component } from 'solid-js';

import {
  assetIconSvg,
  compareContainer,
  compareDuration,
  container,
  increasingIcon,
  increasingRate,
  valueText,
  valueTitle,
} from './ValueDisplay.css';
import { ArrowUpIcon } from '../../../icons/ArrowUpIcon';

export const ValueDisplay: Component = () => {
  return (
    <div class={container}>
      <div class={valueTitle}>Some value</div>
      <div class={valueText}>2,560</div>
      <div class={compareContainer}>
        <div class={increasingIcon}>
          <ArrowUpIcon className={assetIconSvg} />
        </div>
        <p class={increasingRate}>+0.5%</p>
        <p class={compareDuration}>higher than last week</p>
      </div>
    </div>
  );
};
