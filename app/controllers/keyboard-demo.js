import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { onKey } from 'ember-keyboard';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class KeyboardDemoController extends Controller {
  @tracked printMsg = false;
  @tracked changed = false;

  @service router;

  @onKey('KeyA')
  @action
  OnKeyA() {
    console.log('OnKeyA called');
    alert('OnKeyA is worked');
    this.printMsg = false;
    this.changed = false;
  }

  @onKey('KeyP')
  @action
  OnKeyP() {
    console.log('OnKeyP called');
    this.printMsg = true;
    this.changed = false;
  }

  @onKey('KeyN')
  @action
  OnKeyN() {
    console.log('OnKeyN called');
    this.router.transitionTo('keyboard-demo.keyboard');
    this.printMsg = false;
    this.changed = false;
  }

  @onKey('KeyC')
  @action
  OnKeyC() {
    console.log('OnKeyC called');
    this.changed = true;
    this.printMsg = false;
  }
}
