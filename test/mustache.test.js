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