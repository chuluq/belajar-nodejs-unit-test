import Mustache from 'mustache';

test('Menggunakan Mustache', () => {
  const data = Mustache.render('Hello {{name}}', {name: 'Chuluq'});

  expect(data).toBe('Hello Chuluq');
});

test('Menggunakan Mustache Cache', () => {
  Mustache.parse('Hello {{name}}');

  const data = Mustache.render('Hello {{name}}', {name: 'Chuluq'});

  expect(data).toBe('Hello Chuluq');
});

test('Tags', () => {
  const data = Mustache.render('Hello {{name}}, my hobby is {{{hobby}}}', {
    name: 'Chuluq',
    hobby: '<b>Programming</b>',
  });

  expect(data).toBe('Hello Chuluq, my hobby is <b>Programming</b>');
});