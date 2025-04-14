import { module, test } from 'qunit';
import { setupTest } from 'students-project/tests/helpers';

module('Unit | Controller | keyboard-demo', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:keyboard-demo');
    assert.ok(controller);
  });
});
