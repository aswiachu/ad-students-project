import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class KeyboardController extends Controller {
  @service router;

  @action
  goBack() {
    this.router.transitionTo('keyboard-demo');
  }
}
