import { module, test } from 'qunit';
import { setupTest } from 'students-project/tests/helpers';

module('Unit | Route | Multiple-dates', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:multiple-dates');
    assert.ok(route);
  });
});
