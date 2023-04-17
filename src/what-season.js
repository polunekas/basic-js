const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
 if (date === undefined) {
 let result = "Unable to determine the time of year!"
 return result
 }

  try { if (isNaN(date) || !(Object.prototype.toString.call(date) === "[object Date]") )
      throw new Error("Invalid date!")
  } catch {throw new Error("Invalid date!")}

	let month_value = date.getMonth()
	if(month_value ===2 || month_value ===3|| month_value ===4) {return 'spring'}
	else if(month_value===5 || month_value===6 || month_value===7) {return 'summer'}
	else if(month_value===8 || month_value===9 || month_value===10) {return 'autumn'}
	else if (month_value===11 || month_value===0 || month_value===1) {return 'winter'}
  // remove line with error and write your code here
 
}

module.exports = {
  getSeason
};
