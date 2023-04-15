const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	split_s1 = s1.split('')
	split_s2 = s2.split('')
	let common_counting = 0
split_s1.map(element => {
	if(split_s2.includes(element)){
		common_counting++
		split_s2.splice(split_s2.indexOf(element),1)
		}
});
return common_counting
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
