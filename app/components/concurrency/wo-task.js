import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class WoTaskComponent extends Component {
  @tracked number = 0;
  @tracked isLoading = false;

  generateRandom() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 100));
      }, 3000);
    });
  }

  @action
  async getNumber() {
    this.isLoading = true;
    const n = await this.generateRandom();
    if (this.isDestroyed) {
      console.log('Component destroyed');
      return;
    }
    this.number = n;
    this.isLoading = false;
  }
}
