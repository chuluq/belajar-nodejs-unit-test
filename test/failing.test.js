import { sayHello } from "../src/sayHello";

test("sayHello success", () => {
  expect(sayHello("Chuluq")).toBe("Hello Chuluq");
});

test.failing("sayHello error", () => {
  sayHello(null);
});

test("sayHello error matcher", () => {
  expect(() => sayHello(null)).toThrow();
});
