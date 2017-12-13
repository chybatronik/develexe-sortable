/* eslint-disable */

clone = function(obj) {
  //// eslint-disable-next-line
  var newObj = (obj instanceof Array) ? [] : {};
  var i;
  for (i in obj) {
      if (i === 'clone')
          continue;
      if (obj[i] && typeof obj[i] === "object") {
          newObj[i] = clone(obj[i]);
      }
      else
          newObj[i] = obj[i]
  } return newObj;
};
