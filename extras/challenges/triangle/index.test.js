/**
 * ADD CODE HERE
 * NOTE: Don't forget to add your tests first
 */

describe("isEquilateral", () => {
  it("should return true when all 3 sides are equal", () => {
    const expected = true;
    const actual = isEquilateral(3, 3, 3);

    expect(actual).toEqual(expected);
  });
});

describe("isIsosceles", () => {
  it("should return true when only 2 sides are equal", () => {
    const expected = true;
    const actual = isEquilateral(3, 3, 4);

    expect(actual).toEqual(expected);
  });
});
