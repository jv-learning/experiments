import styles from './pomo-timer.module.scss';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface PomoTimerProps {
  time?: number;
  setTime?: (time: number) => void;
  startTime?: (time: number) => void;
}

export function PomoTimer(props: PomoTimerProps) {
  // properties
  const [timer, setTimer] = useState<number>(0);

  // methods
  function startTime(time) {}

  // render
  return (
    <div id="pomo-timer" className={styles.pomoTimer}>
      <h1>{timer}</h1>
    </div>
  );
}

export default PomoTimer;
