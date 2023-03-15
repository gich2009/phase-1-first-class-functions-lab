// Code your solution in this file!
// Note that the naming convention *RHS (right hand side) is employed to mean 
// *Parameter

const returnFirstTwoDrivers = function (arrayDriversRHS){
  //Assert that the parameter is an array.
  //if not an array, return a null array.
  if (!Array.isArray(arrayDriversRHS)) return [null];

  //Assert that the array parameter's has more than two drivers
  //If it has less than 2 drivers, return a null array.
  if (arrayDriversRHS.length < 2) return [null];
  

  return [arrayDriversRHS[0], arrayDriversRHS[1]];
}

const returnLastTwoDrivers = function (arrayDriversRHS){
  //Assert that the parameter is an array.
  //if not an array, return a null array.
  if (!Array.isArray(arrayDriversRHS)) return [null];

  //Assert that the array parameter's has more than two drivers
  //If it has less than 2 drivers, return a null array.
  if (arrayDriversRHS.length < 2) return [null];

  return [arrayDriversRHS[arrayDriversRHS.length - 2], arrayDriversRHS[arrayDriversRHS.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (multiplierRHS) {
  return (parameter) => parameter * multiplierRHS;
}


const fareDoubler = (fareRHS) => fareRHS * 2;


const fareTripler = (fareRHS) => fareRHS * 3;


function selectDifferentDrivers(arrayOfDriversRHS, functionRHS){
  if (functionRHS === returnFirstTwoDrivers)
    return returnFirstTwoDrivers(arrayOfDriversRHS);

  if (functionRHS === returnLastTwoDrivers)
    return returnLastTwoDrivers(arrayOfDriversRHS);

  //if neither of the expected functions are passed, then return a null array.
  return [null];
}