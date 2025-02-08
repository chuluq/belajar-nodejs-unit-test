import { callMe, MyException } from "../src/exception";

test("exception", () => {
  expect(() => callMe("Chuluq")).toThrow();
  expect(() => callMe("Chuluq")).toThrow(MyException);
  expect(() => callMe("Chuluq")).toThrow("Oops my exception happens");
});

test("exception not happens", () => {
  expect(callMe("Budi")).toBe("OK");
});
