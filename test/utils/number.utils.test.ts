import { NumberUtils } from "../../src/index";
import { expect } from "chai";

describe(".NumberUtils", () => {
  describe("#isInteger", () => {
    // Number.isInteger(0);         // true
    // Number.isInteger(1);         // true
    // Number.isInteger(-100000);   // true
    // Number.isInteger(99999999999999999999999); // true
    // Number.isInteger(0.1);       // false
    // Number.isInteger(Math.PI);   // false
    // Number.isInteger(NaN);       // false
    // Number.isInteger(Infinity);  // false
    // Number.isInteger(-Infinity); // false
    // Number.isInteger('10');      // false
    // Number.isInteger(true);      // false
    // Number.isInteger(false);     // false
    // Number.isInteger([1]);       // false
    it("should return true if value is 0", () => {
      const value = 0;
      const result = NumberUtils.isInteger(value);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is 1", () => {
      const value = 1;
      const result = NumberUtils.isInteger(value);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is -10000", () => {
      const value = -10000;
      const result = NumberUtils.isInteger(value);
      expect(true).to.be.eq(result);
    });
    it("should return true if value is 99999999999999999999999", () => {
      const value = 99999999999999999999999;
      const result = NumberUtils.isInteger(value);
      expect(true).to.be.eq(result);
    });
    it("should return false if value is 0.1", () => {
      const value = 0.1;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is Math.PI", () => {
      const value = Math.PI;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is NaN", () => {
      const value = NaN;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is Infinity", () => {
      const value = Infinity;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is -Infinity", () => {
      const value = -Infinity;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is '10'", () => {
      const value = "10" as any;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is true", () => {
      const value = true as any;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is false", () => {
      const value = false as any;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is [1]", () => {
      const value = [1] as any;
      const result = NumberUtils.isInteger(value);
      expect(false).to.be.eq(result);
    });
  });

  describe("#isSafeInteger", () => {
    // Number.isSafeInteger(3);                    // true
    // Number.isSafeInteger(Math.pow(2, 53));      // false
    // Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
    // Number.isSafeInteger(NaN);                  // false
    // Number.isSafeInteger(Infinity);             // false
    // Number.isSafeInteger('3');                  // false
    // Number.isSafeInteger(3.1);                  // false
    // Number.isSafeInteger(3.0);                  // true
    it("should return false if value is 3", () => {
      const value = 3;
      const result = NumberUtils.isSafeInteger(value);
      expect(true).to.be.eq(result);
    });
    it("should return false if value is Math.pow(2, 53)", () => {
      const value = Math.pow(2, 53);
      const result = NumberUtils.isSafeInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return true if value is Math.pow(2, 53)-1", () => {
      const value = Math.pow(2, 53) - 1;
      const result = NumberUtils.isSafeInteger(value);
      expect(true).to.be.eq(result);
    });
    it("should return false if value is NaN", () => {
      const value = NaN;
      const result = NumberUtils.isSafeInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is Infinity", () => {
      const value = Infinity;
      const result = NumberUtils.isSafeInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is '3'", () => {
      const value = "3";
      const result = NumberUtils.isSafeInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is 3.1", () => {
      const value = 3.1;
      const result = NumberUtils.isSafeInteger(value);
      expect(false).to.be.eq(result);
    });
    it("should return false if value is 3.0", () => {
      const value = 3.0;
      const result = NumberUtils.isSafeInteger(value);
      expect(true).to.be.eq(result);
    });
  });

  describe("#toFixed", () => {
    it("should return default value if value is empty", () => {
      const value: number = null;
      const defaultValue = "--";
      const result = NumberUtils.toFixed(value, 2, defaultValue);
      expect(defaultValue).to.be.eq(result);
    });

    it("should return empty if value is empty and default value is not set", () => {
      const value: number = null;
      const result = NumberUtils.toFixed(value, 2);
      expect("").to.be.eq(result);
    });
    it("should return 1.00 if value is 1", () => {
      const value: number = 1;
      const result = NumberUtils.toFixed(value, 2);
      expect("1.00").to.be.eq(result);
    });
  })
});
