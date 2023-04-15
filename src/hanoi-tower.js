const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi( disksNumber, turnsSpeed ) {
let result = {}
let turns =1;
	for (let i = 1; i< disksNumber;i++) {
	turns=1+ 2*turns
}
let seconds
seconds = Math.floor(turns*3600/turnsSpeed)
result = {
	turns: turns,
	seconds: seconds
}
return result

  // remove line with error and wri	te your code here
}

module.exports = {
  calculateHanoi
};
