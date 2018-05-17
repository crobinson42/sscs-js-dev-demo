/*

  https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy

*/

function multiplyBy(b) {
  return (target, property, descriptor) => () => target.arguments[0] * b;
}

class Math {

  @multiplyBy(10)
  timesTen(a) {}

}
