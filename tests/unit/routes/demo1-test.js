import { module, test } from 'qunit';
import { setupTest } from 'students-project/tests/helpers';

module('Unit | Route | demo1', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:demo1');
    assert.ok(route);
  });
});
