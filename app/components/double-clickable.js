import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  doubleClick(event) {
    const box = event.target.querySelector('.checkbox');
    console.log(box);
    if (box) {
      box.checked = !box.checked;
    }
  }
});