import test from 'ava';
import {
  isGreater,
  isGreaterOrEqual,
  isLower,
  isLowerOrEqual,
  isEqual
} from '../lib';

const notValidNumber = 'Hello';
const validSmallNumber = 1;
const validLargeNumber = 666;

test('isGreater', (t) => {
  const isGreaterThanValidSmall = isGreater(validSmallNumber);

  t.is(isGreaterThanValidSmall(2), true);
  t.is(isGreater(validLargeNumber)(777), true);
  t.is(isGreater(validLargeNumber)(1), false);
  t.throws(() => isGreater(notValidNumber)(12), 'Your input must be a number!');
});

test('isLower', (t) => {
  const isLowerThanValidSmall = isLower(validSmallNumber);

  t.is(isLowerThanValidSmall(0), true);
  t.is(isLower(validLargeNumber)(555), true);
  t.is(isLower(validLargeNumber)(777), false);
  t.throws(() => isLower(notValidNumber)(12), 'Your input must be a number!');
});

test('isGreaterOrEqual', (t) => {
  const isGreaterOrEqualThanValidSmall = isGreaterOrEqual(validSmallNumber);

  t.is(isGreaterOrEqualThanValidSmall(2), true);
  t.is(isGreaterOrEqualThanValidSmall(1), true);
  t.is(isGreaterOrEqual(validLargeNumber)(777), true);
  t.is(isGreaterOrEqual(validLargeNumber)(666), true);
  t.is(isGreaterOrEqual(validLargeNumber)(1), false);
  t.throws(() => isGreaterOrEqual(notValidNumber)(12), 'Your input must be a number!');
});

test('isLowerOrEqual', (t) => {
  const isLowerOrEqualThanValidSmall = isLowerOrEqual(validSmallNumber);

  t.is(isLowerOrEqualThanValidSmall(0), true);
  t.is(isLowerOrEqualThanValidSmall(1), true);
  t.is(isLowerOrEqual(validLargeNumber)(555), true);
  t.is(isLowerOrEqual(validLargeNumber)(666), true);
  t.is(isLowerOrEqual(validLargeNumber)(777), false);
  t.throws(() => isLowerOrEqual(notValidNumber)(12), 'Your input must be a number!');
});

test('isEqual', (t) => {
  const isEqualValidSmall = isEqual(validSmallNumber);
  t.is(isEqualValidSmall(1), true);
  t.is(isEqual(validLargeNumber)(666), true);
  t.is(isEqual(validLargeNumber)(111), false);
  t.throws(() => isEqual(notValidNumber)(12), 'Your input must be a number!');
});
