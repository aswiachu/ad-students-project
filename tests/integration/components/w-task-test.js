import { module, test } from 'qunit';
import { setupRenderingTest } from 'students-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | w-task', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<WTask />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <WTask>
        template block text
      </WTask>
    `);

    assert.dom().hasText('template block text');
  });
});
