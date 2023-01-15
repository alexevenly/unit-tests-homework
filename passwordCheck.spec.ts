import { equal } from "assert";
import passwordCheck from "./passwordCheck";

describe("Typescript usage suite", () => {
  it("should be able to execute a test", () => {
    equal(true, true);
  });
  it("should return expected string", () => {
    equal(passwordCheck("Test1"), "incoming-static");//it'll fail on first run - adjust validation of error message
  });
});
