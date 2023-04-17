const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
  let length = arr.length
  let flag
	for (let i=0; i< length;i++) {
		if(Array.isArray(arr[i])) {
		flag = 1} else flag = 0
	}
    if(flag = 1){
	return 1
	}
	result = this.calculateDepth(arr.flat()) +1
	return result
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
