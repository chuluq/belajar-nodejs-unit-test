import { sayHelloAsync } from "../src/async";

test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("Chuluq")).resolves.toBe("Hello Chuluq");
});
test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("Chuluq")).resolves.toBe("Hello Chuluq");
});
test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("Chuluq")).resolves.toBe("Hello Chuluq");
});
