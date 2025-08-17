/* Selection Sort (Code360: multiple test cases) */

function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    // swap
    const tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = "";
process.stdin.on('data', d => (input_stdin += d));
process.stdin.on('end', () => main(input_stdin));

function main(raw) {
  // Read all numbers regardless of line breaks / extra spaces
  const tokens = raw.trim().split(/\s+/).map(Number);
  let idx = 0;

  // Try to read T test cases (as per Code360 format)
  let T = tokens[idx++];

  // Fallback: if T is not sane, treat input as single test: n then array
  const saneT = Number.isInteger(T) && T > 0;
  if (!saneT) {
    idx = 0;            // reset
    T = 1;              // single test
  }

  let outputs = [];

  for (let t = 0; t < T; t++) {
    const n = tokens[idx++];
    const arr = tokens.slice(idx, idx + n);
    idx += n;

    selectionSort(arr, n);
    outputs.push(arr.join(" "));
  }

  console.log(outputs.join("\n"));
}
