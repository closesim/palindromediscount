const assert = require('assert');

const { isPalindrome, checkTextForPal } = require('../../utils/palindrome.util');

describe('Palindrome Test Cases', () => {
  it('Should be true for abba', () => {
    assert.equal(isPalindrome('abba'), true);
    assert.equal(isPalindrome('hola'), false);
  });

  it('Should check text for palindromes', () => {
    assert.equal(checkTextForPal('rlñlw abba'), true);
    assert.equal(checkTextForPal('test racecar'), true);
    assert.equal(checkTextForPal('decima cuarta'), false);
  });
});
