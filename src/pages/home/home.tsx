import {
  action,
  autorun,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';

class Timer {
  time = 0;
  timeObj = {
    a: 1,
    b: 2,
  };
  constructor() {
    // makeAutoObservable(this);
    makeObservable(this, {
      time: observable, // observable 声明time是状态
      timeObj: observable, // observable 声明timeObj是状态

      add: action, // action 声明 add方法属于action
      addbound: action.bound,
      decide: action,
      addobja: action,
      computedTime: computed,
    });
  }
  add() {
    this.time += 1;
  }
  addbound() {
    this.time += 1;
  }

  decide() {
    this.time--;
  }

  addobja() {
    this.timeObj.a++;
  }

  get computedTime() {
    return this.time * 10;
  }
}

const TimerComponent = ({ timer }: { timer: Timer }) => {
  return (
    <div>
      <button onClick={() => timer.add()}>+1</button>
      <button onClick={() => timer.decide()}>-1</button>
      <button onClick={() => timer.addobja()}>obj a+1</button>

      <button onClick={timer.add}>no bound +1</button>
      <button onClick={timer.addbound}> bound +1</button>

      <button onClick={() => timer.time++}> no action +1</button>

      <button onClick={action(() => timer.time++)}> action +1</button>
    </div>
  );
};

const myTimer = new Timer();
const Home = observer(() => {
  // autorun(() => {
  //   console.log('timer has changed', myTimer.time, myTimer.timeObj.a);
  // });
  return (
    <div className="home ">
      <div>timer: {myTimer.time}</div>

      <div>obj -timer: {myTimer.timeObj.a}</div>

      <TimerComponent timer={myTimer} />
    </div>
  );
});

export { Home };
