function allTheArgs(func, ...args) {
  // Your code here 
  return function(...additionalArgs){
    return func.call(this, ...args, ...additionalArgs);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
