/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  const area = expressions[0];
  const perimeter = expressions[1];
  let innerOP = operation(perimeter, area);

  let s1 = (perimeter + innerOP) / 4;
  let s2 = (perimeter - innerOP) / 4;

  if (s1 > s2) {
    return [s2, s1];
  } else {
    return [s1, s2];
  }

  // s2 will always be smaller than s1, but i wanted to reverse it, but it refuses
  // return [s2,s1]
}

function operation(perimeter, area) {
  return Math.sqrt(Math.pow(perimeter, 2) - 16 * area);
}
