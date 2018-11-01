// Code your solution here:
function driversWithRevenueOver(array, num) {
  return array.filter(function (driver) {
      return driver.revenue > num
  });
}

function driverNamesWithRevenueOver(array, num) {
  let filteredArray = driversWithRevenueOver(array, num);
  return filteredArray.map(function (driver) {
    return driver.name
  })
}

function exactMatch(array, matcher) {
  // access the matcher object's key so i can call the value using the bracket notation
  const mKey = Object.keys(matcher)
  return array.filter(function (driver) {
    return driver[mKey] === matcher[mKey]
  });
}

function exactMatchToList(array, matcher) {
  const filteredArray = exactMatch(array, matcher)
  return filteredArray.map(function (driver) {
    return driver.name
  });
}
