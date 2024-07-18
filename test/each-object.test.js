import { sumAll } from "../src/sum";

const table = [
  { numbers: [], expected: 0 },
  { numbers: [10, 10, 10], expected: 30 },
  { numbers: [10, 10, 10, 50], expected: 80 },
  { numbers: [10, 10, 40], expected: 60 },
];

test.each(table)(
  "test sumAll($numbers) should result $expected",
  ({ numbers, expected }) => {
    expect(sumAll(numbers)).toBe(expected);
  }
);
