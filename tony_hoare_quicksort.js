#!/usr/bin/env node
'use strict';
/**
  Tony Hoare QuickSort partition approach. Dual index. circa 1959
*/
function quicksort(num_arr, lo, hi) {
  if(lo >= hi) return num_arr;
  const pivot = partition(num_arr, lo, hi);
  quicksort(num_arr, lo, pivot);
  quicksort(num_arr, pivot+1, hi);
  return num_arr;
}

function partition(num_arr, lo, hi) {
  const pivot = num_arr[parseInt(lo + (hi-lo)/2)];
  while(true) {
    while(num_arr[lo] < pivot) {
      lo += 1;
    }
    while(num_arr[hi] > pivot) {
      hi -= 1;
    }
    if(lo >= hi) return hi;
    swap(num_arr, lo, hi);  
    lo += 1;
    hi -= 1;
  }
  return hi;
}

function swap(arr, lo, hi) {
  const lo_orig = arr[lo];
  const hi_orig = arr[hi];
  arr[lo] = hi_orig;
  arr[hi] = lo_orig;
  return arr;
}

module.exports = quicksort;
if(require.main !== module) return;
// cli here. variadic script: node tony_hoare_quick_sort.js [1,2,3,4 ] [ 10,11,12]
const accumulator_arr = [];
function is_invalid_JSON_arr_str(_str) {
  return (!_str.endsWith(']') || !_str.startsWith('['));
}

while(process.argv.length > 2) {
  let cli_arg = '';
  while(is_invalid_JSON_arr_str(cli_arg)) {
    cli_arg = process.argv.pop() + cli_arg; // prepend b/c pop
  }  
  try {
    let parsed = JSON.parse(cli_arg);
    if(!parsed.length || !parsed.splice) continue;
    accumulator_arr.push(...parsed);
  } catch(e) { console.error('ERROR', cli_arg, e); }
}
process.stdout.write( JSON.stringify(quicksort(accumulator_arr, 0, accumulator_arr.length-1)) );

