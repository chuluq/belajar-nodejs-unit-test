test("string", () => {
  const name = "Moch Chaerul Chuluq";

  expect(name).toBe("Moch Chaerul Chuluq");
  expect(name).toMatch(/erul/);
});
