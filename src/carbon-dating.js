const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
let number_activity = parseFloat(sampleActivity)
	//verification tests
	if (typeof(sampleActivity) !== 'string' || isNaN(number_activity)||
	 number_activity<=0 || number_activity > MODERN_ACTIVITY ) {
	 	return false
	 }

  let a = 0.693/HALF_LIFE_PERIOD;
  let b = Math.log10 (MODERN_ACTIVITY/number_activity);
  result = b/a
  return Math.floor(result)
}

module.exports = {
  dateSample
};
