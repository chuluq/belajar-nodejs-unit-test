import Mustache from 'mustache';
import fs from 'fs/promises';

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

test('Nested Object', () => {
  const data = Mustache.render('Hello {{person.name}}', {
    person: {
      name: 'Chuluq',
    },
  });

  expect(data).toBe('Hello Chuluq');
});

test('Mustache File', async () => {
  const helloTemplate = await fs.readFile('./templates/hello.mustache').
      then(data => data.toString());

  const data = Mustache.render(helloTemplate, {
    title: 'Chuluq',
  });

  expect(data).toContain('Chuluq');
});

test('Mustache Sections Not Show', async () => {
  const helloTemplate = await fs.readFile('./templates/person.mustache').
      then(data => data.toString());

  const data = Mustache.render(helloTemplate, {});

  expect(data).not.toContain('Hello Person');
});

test('Mustache Sections Show', async () => {
  const helloTemplate = await fs.readFile('./templates/person.mustache').
      then(data => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: 'Chuluq',
    },
  });

  expect(data).toContain('Hello Person');
});

test('Mustache Sections Data', async () => {
  const helloTemplate = await fs.readFile('./templates/person.mustache').
      then(data => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: 'Chuluq',
    },
  });

  expect(data).toContain('Hello Person Chuluq!');
});

test('Inverted Sections', async () => {
  const helloTemplate = await fs.readFile('./templates/person.mustache').
      then(data => data.toString());

  const data = Mustache.render(helloTemplate, {});

  expect(data).toContain('Hello Guest');
});

test('List', async () => {
  const helloTemplate = await fs.readFile('./templates/hobbies.mustache').
      then(data => data.toString());

  const data = Mustache.render(helloTemplate, {
    hobbies: ['Coding', 'Gaming','Reading']
  });

  expect(data).toContain('Coding');
  expect(data).toContain('Gaming');
  expect(data).toContain('Reading');
});