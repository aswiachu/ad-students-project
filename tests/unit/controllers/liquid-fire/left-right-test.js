import { module, test } from 'qunit';
import { setupTest } from 'students-project/tests/helpers';

module('Unit | Controller | liquid-fire/left-right', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:liquid-fire/left-right');
    assert.ok(controller);
  });
});
