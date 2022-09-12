/**
 *
 * @param {string} str
 * @param  {...any} rest
 * @returns
 */
function format(str, ...rest) {
  if (typeof str !== "string" || str instanceof String) {
    return false;
  }

  let re = /\{(\w+)\}/g; // match curl bracket and value inside
  let replaceWith = [...rest]; // get a copy 
  let allCurly = str.match(re) || []; // get all curl bracket
  for (let i = 0; i < allCurly.length; i++) { // loop through the curl bracket
    str = str.replace(allCurly[i], replaceWith[i]); // replace them in str
  }
  return str;
}

console.log(format("{a} {b} {d}", "daniel", "codex", "it's somthing"));
console.log(format("{a} something really cool", "daniel"));
console.log(format("{something}", "daniel"));
console.log(format("{1} {wow} {3}", "daniel", "codex", "something"));
console.log(format("{1} {2} {3}", 1, 2, 3));
console.log(format("{1}", "hello")); 

module.exports = format;
