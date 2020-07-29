const Palindrome = module.exports;

Palindrome.isPalindrome = (word) => {
  const clean = word.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  const txtArray = clean.split('');
  let isPalindrome = true;
  txtArray.forEach((c, i) => {
    if (c !== clean[clean.length - 1 - i]) isPalindrome = false;
  });

  return isPalindrome;
};

Palindrome.checkTextForPal = (text) => {
  const search = Palindrome.isPalindrome(text)
  || text.split(' ')
    .find((word) => Palindrome.isPalindrome(word));

  return Boolean(search);
};
