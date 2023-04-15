const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
 result = {}
 
  for (let i = 0;i<domains.length; i++) {
   const items = domains[i].split('.')
    let s =''
 
   //reverse
	for(let j = items.length -1; j >=0;j --) {
		s +=`.${items[j]}`
		if(!result[s]) {
		result[s]=result[s]+1
		
		} else {
				result[s] =1
		}
	}
	return result
  }

  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
