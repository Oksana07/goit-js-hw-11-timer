const refs = {
  stopTimer: document.querySelector('.timer'),
  divTimer: document.querySelector('#timer-1'),
  spanDays: document.querySelector('[data-value="days"]'),
  spanHours: document.querySelector('[data-value="hours"]'),
  spanMins: document.querySelector('[data-value="mins"]'),
  spanSecs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  setInt = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    this.setTimeComponents(deltaTime);
    this.stopTime(deltaTime);
  }, 1000);

  pad(value) {
    return String(value).padStart(2, '0');
  }

  setTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.spanDays.textContent = `${days}`;
    refs.spanHours.textContent = `${hours}`;
    refs.spanMins.textContent = `${mins}`;
    refs.spanSecs.textContent = `${secs}`;
  }

  stopTime(time) {
    if (time < 0) {
      refs.stopTimer.textContent = 'You missed the action. ))) We are waiting for you next time. Best wishes.';
      refs.stopTimer.style.backgroundColor = 'rgba(66, 60, 60, 0.5)';
      refs.stopTimer.style.fontSize = '48px';
      refs.stopTimer.style.color = 'red';
      refs.stopTimer.style.textAlign = 'center';
      refs.stopTimer.style.fontWeight = '700';
      refs.stopTimer.style.width = '700px';
      refs.stopTimer.style.padding = '25px';
    }
  }
}

const Countdown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 11, 2021'),
});