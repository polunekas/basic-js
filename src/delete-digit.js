const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let str = String(n)
    let s_item = str.split('')
	
    return Math.max(...s_item.map((element,i)=>{
	let copy = s_item.slice();
let res = copy.splice(i,1).join('');
	return res}))
}
  // remove line with error and write your code here


module.exports = {
  deleteDigit
};
