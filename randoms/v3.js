/**
 * @function
 * Returns a float in [0, 1] (inclusive).
 *
 * `Math.random()` only produces values in [0, 1), so `1` is never returned
 * directly. To make the full closed interval [0, 1] reachable while keeping a
 * near-uniform distribution over floats, the rarest outcome (`0`) is used as a
 * trigger: when it occurs, a second draw decides whether to return the lower
 * bound (`0`) or the upper bound (`1`).
 *
 * Every other value in (0, 1) is returned as-is, so the function outputs a
 * continuous float across the whole range — not just the endpoints.
 *
 * Runs in constant time (no rejection loops).
 *
 * @returns {number} A float in [0, 1].
 */
function random() {
  const r = Math.random();
  if (r === 0) return Math.random() < 0.5 ? 0 : 1;
  return r;
}

module.exports = random;
