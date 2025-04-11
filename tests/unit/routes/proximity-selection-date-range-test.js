import { module, test } from 'qunit';
import { setupTest } from 'students-project/tests/helpers';

module('Unit | Route | proximitySelection-date-range', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:proximity-selection-date-range');
    assert.ok(route);
  });
});
