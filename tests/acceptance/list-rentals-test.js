import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('show rentals as homepage', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', "should redirect automatically");
  });

  test('link to about route exists', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about page');
  });

  test('link to contact route exists', async function(assert) {
    await visit('/');
    await click('.menu-contact');
    assert.equal(currentURL(), '/contact', 'should navigate to contact page');
  });

  test('list available rentals', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 rental listings');
  });

  test('filter the list of rentals by city', async function(assert) {});

  test('show details for a selected rental', async function(assert) {});
});
