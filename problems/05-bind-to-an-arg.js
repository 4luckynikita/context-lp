function bindToAnArg(func, arg) {
  return function(...args){
    return func.call(this, arg, ...args);
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
