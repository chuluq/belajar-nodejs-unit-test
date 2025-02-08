export class MyException extends Error {}

export const callMe = (name) => {
  if (name === "Chuluq") {
    throw new MyException("Oops my exception happens");
  } else {
    return "OK";
  }
};
