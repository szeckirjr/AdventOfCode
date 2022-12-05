import { getMaxCaloriesBrought, parseElfInput } from "./1_calorie_counting";
import { complexInput, simpleInput } from "./data";

describe("getMaxCaloriesBrought", () => {
  describe("single elf", () => {
    it("should return 0 for an empty string", () => {
      expect(getMaxCaloriesBrought("", 1)).toBe(0);
    });

    it("simple test", () => {
      expect(getMaxCaloriesBrought(simpleInput, 1)).toBe(24000);
    });

    it("complex test", () => {
      expect(getMaxCaloriesBrought(complexInput, 1)).toBe(65912);
    });
  });

  describe("multiple elves", () => {
    it("simple test", () => {
      expect(getMaxCaloriesBrought(simpleInput, 3)).toBe(45000);
    });

    it("complex test", () => {
      expect(getMaxCaloriesBrought(complexInput, 3)).toBe(195625);
    });
  });
});

describe("parseElfInput", () => {
  test("simple input", () => {
    const result = parseElfInput(simpleInput);
    expect(result).toEqual([
      [1000, 2000, 3000],
      [4000],
      [5000, 6000],
      [7000, 8000, 9000],
      [10000],
    ]);
  });

  test("empty input", () => {
    const result = parseElfInput("");
    expect(result).toEqual([[]]);
  });
});
