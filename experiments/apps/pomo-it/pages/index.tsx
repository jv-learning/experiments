import styles from './index.module.scss';
import Link from 'next/link';
import PomoTimer from '../components/pomo-timer/pomo-timer';
import { useRef, useState, useEffect } from 'react';
import { DateTime } from 'luxon';

export function Index() {
  // properties
  const timeValueInput = useRef(null);
  const [timeValue, setTimeValue] = useState<number>(23 * 60);
  const timerInterval = useRef(null);
  const [timer, setTimer] = useState<number>(23 * 60);

  // methods
  useEffect(() => {
    console.log({ DateTime });
    return () => {
      clearInterval(timerInterval.current);
    };
  }, []);

  useEffect(() => {
    if (timeValue <= 0) {
      alert('Time is up!');
      clearInterval(timerInterval.current);
      navigator?.vibrate(200);
    }
  }, [timeValue]);

  function handleOnStartClick() {
    // alert('hey');
    // startCountdown();
    timerInterval.current = setInterval(
      () => setTimeValue((curr) => curr - 1),
      1000
    );
  }

  function stopTimer() {
    clearInterval(timerInterval.current);
  }

  function formatTime(timeValue: number) {
    return `${`${~~(timeValue / 60)}`.padStart(2, '0')}:${`${
      timeValue % 60
    }`.padStart(2, '0')}`;
  }
  // render
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>Welcome pomo-it 👋</h1>
          </div>

          <div id="hero" className="rounded">
            <div className="text-container">
              <h2>
                <span>Time your day</span>
                <form onSubmit={null}>
                  <label htmlFor="name">Minutes:</label>
                  <input
                    id="name"
                    name="name"
                    type="number"
                    autoComplete="name"
                    ref={timeValueInput}
                    defaultValue={25}
                    required
                    onChange={(event) => setTimeValue(+event.target.value * 60)}
                  />
                </form>
              </h2>
              <button onClick={handleOnStartClick}>START</button>
              <button onClick={stopTimer}>STOP</button>
            </div>
            <div className="logo-container">
              {/* <PomoTimer time={timeValueInput.current?.value} /> */}
              {formatTime(timeValue)}
            </div>
          </div>

          <div id="middle-content">
            <Link href="/references">
              <a>References</a>
            </Link>
          </div>

          <div id="commands" className="rounded shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default Index;
