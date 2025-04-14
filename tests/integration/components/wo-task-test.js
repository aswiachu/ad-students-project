import { module, test } from 'qunit';
import { setupRenderingTest } from 'students-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | wo-task', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<WoTask />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <WoTask>
        template block text
      </WoTask>
    `);

    assert.dom().hasText('template block text');
  });
});
