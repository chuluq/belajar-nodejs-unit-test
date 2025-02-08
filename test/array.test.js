test("array simple", () => {
  const names = ["moch", "chaerul", "chuluq"];
  expect(names).toEqual(["moch", "chaerul", "chuluq"]);
  expect(names).toContain("chuluq");
});

test("array object", () => {
  const persons = [{ name: "Chuluq" }, { name: "Budi" }];
  expect(persons).toContainEqual({
    name: "Chuluq",
  });
});
