/**
 * Optimization-js
 * code from: https://github.com/optimization-js/optimization-js
 */

/**
 * Shuffles indicies of arrray.
 * @ignore
 * @param {Array} array Array to shuffle.
 */
function shuffleIndiciesOf(array: any) {
  var idx = [];
  for (var i = 0; i < array.length; i++) {
    idx.push(i);
  }
  for (var i = 0; i < array.length; i++) {
    var j = Math.floor(Math.random() * i);
    var tmp: any = idx[i];
    idx[i] = idx[j];
    idx[j] = tmp;
  }
  return idx;
}

/**
 * Minimize an unconstrained function using zero order Powell algorithm.
 * @param {function} fnc Function to be minimized. This function takes
 * array of size N as an input, and returns a scalar value as output,
 * which is to be minimized.
 * @param {Array} x0 An array of values of size N, which is an initialization
 *  to the minimization algorithm.
 * @return {Object} An object instance with two fields: argument, which
 * denotes the best argument found thus far, and fncvalue, which is a
 * value of the function at the best found argument.
 */
export const minimize_Powell = function (fnc: any, x0: any) {
  var eps = 1e-2;

  var convergence = false;
  var x = x0.slice(); // make copy of initialization
  var alpha = 0.001; // scaling factor

  var pfx = Math.exp(10);
  var fx = fnc(x);
  var pidx = 1;
  while (!convergence) {
    var indicies = shuffleIndiciesOf(x);
    convergence = true;

    // Perform update over all of the variables in random order
    for (var i = 0; i < indicies.length; i++) {
      x[indicies[i]] += 1e-6;
      var fxi = fnc(x);
      x[indicies[i]] -= 1e-6;
      var dx = (fxi - fx) / 1e-6;

      if (Math.abs(dx) > eps) {
        convergence = false;
      }

      x[indicies[i]] = x[indicies[i]] - alpha * dx;
      fx = fnc(x);
    }

    // a simple step size selection rule. Near x function acts linear
    // (this is assumed at least) and thus very small values of alpha
    // should lead to (small) improvement. Increasing alpha would
    // yield better improvement up to certain alpha size.

    alpha = pfx > fx ? alpha * 1.1 : alpha * 0.7;
    pfx = fx;

    pidx--;
    if (pidx === 0) {
      pidx = 1;
    }
  }

  var solution: any = {};
  solution.argument = x;
  solution.fncvalue = fx;

  return solution;
};
