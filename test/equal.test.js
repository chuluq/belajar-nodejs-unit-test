test("test toBe", () => {
  const name = "Chuluq";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Chuluq");
});
