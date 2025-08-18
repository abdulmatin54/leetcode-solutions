/* Bubble Sort for Code360: handles single or multiple test cases */

function bubbleSort(arr, n) {
  // Standard optimized bubble sort (in-place)
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
      }
    }
    if (!swapped) break; // already sorted
  }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();    
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  // Read all remaining lines, tokenize as numbers (works with any spacing/newlines)
  const all = [];
  while (true) {
    const line = readLine();
    if (line === undefined) break;
    all.push(line);
  }
  const tokens = all.join(' ').trim().split(/\s+/).filter(s => s.length > 0).map(Number);
  let idx = 0;

  // Try to parse as multiple test cases: T, then for each test: n and n numbers
  let outputs = [];
  let okMulti = false;

  if (tokens.length > 0 && Number.isInteger(tokens[0]) && tokens[0] > 0) {
    const T = tokens[0];
    let tryIdx = 1;
    let tmpOut = [];
    let valid = true;

    for (let t = 0; t < T; t++) {
      if (tryIdx >= tokens.length) { valid = false; break; }
      const n = tokens[tryIdx++];
      if (!Number.isInteger(n) || n < 0 || tryIdx + n > tokens.length) { valid = false; break; }
      const arr = tokens.slice(tryIdx, tryIdx + n);
      tryIdx += n;

      bubbleSort(arr, n);
      tmpOut.push(arr.join(' '));
    }
    if (valid && tryIdx === tokens.length) {
      // Clean multi-test parse succeeded
      outputs = tmpOut;
      okMulti = true;
    }
  }

  if (!okMulti) {
    // Fallback: single test => first number is n, followed by n elements
    let n = tokens[idx++] || 0;
    const arr = tokens.slice(idx, idx + n);
    bubbleSort(arr, arr.length);
    outputs = [arr.join(' ')];
  }

  console.log(outputs.join('\n'));
}
