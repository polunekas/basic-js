const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} t_speed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi( d_number, t_speed ) {

let seconds, turns =1;
let result = {}
	for (let i = 1; i< d_number;i++) {
	turns=1+ 2*turns
}
seconds = Math.floor(turns*3600/t_speed)
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
