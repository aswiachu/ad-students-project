import { module, test } from 'qunit';
import { setupRenderingTest } from 'students-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | select-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SelectComponent />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <SelectComponent>
        template block text
      </SelectComponent>
    `);

    assert.dom().hasText('template block text');
  });
});
