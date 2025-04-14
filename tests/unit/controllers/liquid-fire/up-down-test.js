import { module, test } from 'qunit';
import { setupTest } from 'students-project/tests/helpers';

module('Unit | Controller | liquid-fire/up-down', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:liquid-fire/up-down');
    assert.ok(controller);
  });
});
