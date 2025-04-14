import Component from '@glimmer/component';
import { task, timeout } from 'ember-concurrency';

export default class WTaskComponent extends Component {
  // getNumber = task(async function () {
  //     console.log("called");
  //     await timeout(2000);
  //     this.number = Math.floor(Math.random() * 100);
  // })

  @task
  *getNumber() {
    console.log('called');
    yield timeout(2000);
    return Math.floor(Math.random() * 100);
  }
}
