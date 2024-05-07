// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('email test 1: true', () => {
  expect(isEmail('test123@gmail.com')).toBe(true);
});

test('email test 2: true', () => {
  expect(isEmail('testmail@gmail.com')).toBe(true);
});

test('email test 3: false', () => {
  expect(isEmail('#23fga@gmail.com')).toBe(false);
});

test('email test 4: false', () => {
  expect(isEmail('5452353a@.com')).toBe(false);
});


test('phonenumber test 1: true', () => {
  expect(isPhoneNumber("523-412-5161")).toBe(true);
});

test('phonenumber test 2: true', () => {
  expect(isPhoneNumber("555-123-4567")).toBe(true);
});


test('phonenumber test 3: false', () => {
  expect(isPhoneNumber("523-(412)-5161")).toBe(false);
});

test('phonenumber test 4: false', () => {
  expect(isPhoneNumber("12341411")).toBe(false);
});

test('strongPassword test 1: true', () => {
  expect(isStrongPassword("aBcd123456789")).toBe(true);
});

test('strongPassword test 2: true', () => {
  expect(isStrongPassword("Hello1234")).toBe(true);
});


test('strongPassword test 3: false', () => {
  expect(isPhoneNumber("12345")).toBe(false);
});

test('strongPassword test 4: false', () => {
  expect(isPhoneNumber("password")).toBe(false);
});

test('isDate test 1: true', () => {
  expect(isDate("05/06/2024")).toBe(true);
});

test('isDate test 2: true', () => {
  expect(isDate("12/31/2025")).toBe(true);
});


test('isDate test 3: false', () => {
  expect(isDate("5/6/24")).toBe(false);
});

test('isDate test 4: false', () => {
  expect(isDate("3/40/223")).toBe(false);
});

test('isHexColor test 1: true', () => {
  expect(isHexColor("3F4a7d")).toBe(true);
});

test('isHexColor test 2: true', () => {
  expect(isHexColor("#FFF")).toBe(true);
});


test('isHexColor test 3: false', () => {
  expect(isHexColor("#G12E4F")).toBe(false);
});

test('isHexColor test 4: false', () => {
  expect(isHexColor("#12345")).toBe(false);
});