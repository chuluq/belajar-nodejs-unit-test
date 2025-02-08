import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const result = await sayHelloAsync("Chuluq");
  expect(result).toBe("Hello Chuluq");
});

test("test async matchers", async () => {
  await expect(sayHelloAsync("Chuluq")).resolves.toBe("Hello Chuluq");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
