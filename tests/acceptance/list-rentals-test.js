import { module, test } from 'qunit';
import { 
  visit,
  currentURL,
  click,
  fillIn,
  triggerKeyEvent
} from '@ember/test-helpers';
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

  test('filter the list of rentals by city', async function(assert) {
    await visit('/');
    await fillIn('.list-filter input', 'Denver');
    await triggerKeyEvent('.list-filter input', 'keyup', 69);
    assert.equal(this.element.querySelectorAll('.results .listing').length, 1, 'should display 1 listing');
    assert.ok(this.element.querySelector('.listing .location').textContent.includes('Denver'), 'should contain 1 listing with location Denver');
  });

  test('should show details for a specific rental', async function(assert) {
    await visit('/rentals');
    await click(".grand-old-mansion");
    assert.equal(currentURL(), '/rentals/grand-old-mansion', "should navigate to show route");
    assert.ok(this.element.querySelector('.show-listing h2').textContent.includes("Grand Old Mansion"), 'should list rental title');
    assert.ok(this.element.querySelector('.show-listing .description'), 'should list a description of the property');
  });});
