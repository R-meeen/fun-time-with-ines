const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
let html = '', elements = {};
const app = {
  set innerHTML(value) { html = value; elements = {}; },
  querySelector(selector) {
    return elements[selector] ??= { dataset: {}, style: {}, focus() {}, select() {}, clientWidth: 300, clientHeight: 150, offsetWidth: 170, offsetHeight: 50 };
  },
  querySelectorAll(selector) {
    const attribute = selector.slice(1, -1);
    return [...html.matchAll(new RegExp(attribute + '="([^"]+)"', 'g'))].map(match => {
      const element = this.querySelector(`[${attribute}="${match[1]}"]`);
      element.dataset[attribute === 'data-choice' ? 'choice' : 'rating'] = match[1];
      return element;
    });
  }
};
let copied = '', timer;
const context = vm.createContext({
  document: { querySelector: () => app },
  navigator: { clipboard: { writeText: async value => { copied = value; } } },
  setTimeout: callback => { timer = callback; }, clearTimeout() {}
});
const run = source => vm.runInContext(source, context);
const click = selector => app.querySelector(selector).onclick();
run(fs.readFileSync('catalog.js', 'utf8'));
run(fs.readFileSync('app.js', 'utf8'));
const catalog = run('ideas');
assert.equal(catalog.length, 25);
assert(!catalog.some(idea => idea.id === '269'));
assert(catalog.some(idea => idea.id === 'tonka' && idea.food.includes('vegan')));
const homeCards = catalog.filter(idea => idea.activity === 'home');
assert.equal(homeCards.length, 3);
assert.equal(new Set(homeCards.map(idea => idea.image)).size, 3);
assert.equal(homeCards.find(idea => idea.id === 'boardgames').image, 'images/cozy-evening.png');
assert(homeCards.every(idea => !idea.description.includes('vegan')));
assert.equal(new Set(catalog.map(idea => idea.id)).size, catalog.length);
for (const idea of catalog) {
  for (const path of [idea.image, ...(idea.extras || [])]) assert(fs.existsSync(path), `Missing asset: ${path}`);
  if (idea.source) assert(idea.source.startsWith('https://'));
}
for (const vibe of ['cozy', 'adventurous', 'romantic', 'playful']) {
  for (const activity of ['outside', 'creative', 'explore', 'home']) {
    context.preferences = { vibe, activity, food: ['vegan', 'dinner', 'picnic', 'coffee'], ending: ['sunset', 'movie'] };
    const matches = run('rankIdeas(preferences)');
    assert.equal(new Set(matches.map(idea => idea.id)).size, matches.length);
    const activities = matches.filter(idea => idea.category === 'activity');
    assert(activities.every(idea => idea.activity === activity));
    if (activity === 'home' && vibe !== 'cozy') assert.equal(activities.length, 0);
    else assert(activities.length > 0);
  }
}
run("picks={vibe:'adventurous',activity:'explore',food:['vegan'],ending:['movie']};");
assert(!run('rankIdeas(picks)').some(idea => idea.id === 'kish'));
assert(run('rankIdeas(picks)').some(idea => idea.id === 'wencheng'));
run("picks.food=['vegan','dinner'];");
assert.equal(run("rankIdeas(picks).filter(idea=>idea.id==='wencheng').length"), 1);
run("picks={vibe:'romantic',activity:'outside',food:['coffee'],ending:['sunset']};");
assert.equal(run('rankIdeas(picks)[0].id'), 'palmengarten');
run("picks={vibe:'romantic',activity:'creative',food:['coffee'],ending:['movie']};");
assert.equal(run('rankIdeas(picks)[0].id'), 'therme');
// Complete a real sequence, preserving multiple food and ending choices.
run('picks={};step=0;build();');
click('[data-choice="cozy"]'); click('#next');
click('[data-choice="home"]'); click('#next');
click('[data-choice="vegan"]'); click('[data-choice="coffee"]'); click('#next');
click('[data-choice="movie"]'); click('[data-choice="custom"]');
assert.equal(run("hasSelection('ending')"), false);
const field = app.querySelector('#ending-idea'); field.value = 'Tea <and> stars'; field.oninput();
click('#next');
assert(html.includes('cozy-evening.png'));
assert.equal(run('picks.ending.length'), 2);
assert(html.includes('Tea &lt;and&gt; stars'));
assert.equal(run('matches.filter(idea=>idea.activity==="home").length'), 3);
assert(!html.includes('undefined'));
const count = run('matches.length');
for (let i = 0; i < count; i++) click(`[data-rating="${i % 2 ? 'maybe' : 'love'}"]`);
assert(html.includes('Your favorites'));
assert(html.includes('result-venue'));
assert(run('summaryText()').includes('Own idea: Tea <and> stars'));
(async () => {
  await click('#copy'); assert(copied.includes('Board games')); assert(copied.includes('\n'));
  click('#review'); assert(html.includes('IDEA 1 OF'));
  run('summary()'); click('#restart'); assert.equal(run('Object.keys(picks).length'), 0);
  // Keep the cheeky choice working after the catalog change.
  click('[data-choice="playful"]'); const winning = app.querySelector('#winning');
  for (let i = 0; i < 5; i++) {
    winning.onclick({ type: 'click', detail: 1, preventDefault() {} });
    assert.equal(run('picks.challenge'), undefined); timer();
  }
  winning.onclick({ detail: 1 }); assert.equal(run('picks.challenge'), 'winning');
  console.log('Passed: 25 cards and assets, matching combinations, vegan filters, deduplication, full flow, custom text, copying, restart, five dodges.');
})().catch(error => { console.error(error); process.exitCode = 1; });
