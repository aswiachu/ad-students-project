import { module, test } from 'qunit';
import { setupTest } from 'students-project/tests/helpers';

module('Unit | Route | concurrency-demo', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:concurrency-demo');
    assert.ok(route);
  });
});
