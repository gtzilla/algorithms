const _ = require("underscore");
const moment = require("moment");
const shuffler = require("../fisher_yates_shuffle.js");
let similarities = [];

test('shuffler output array length matches.', function(){
  const initial_arr = [1,2,3,4,5,6];
  const sorted = shuffler(initial_arr.slice(0));  
  expect(sorted.length).toBe(initial_arr.length);
  console.log("sorted", sorted);
  let idx = 0, similarities = [];
  while(idx < initial_arr.length) {
    if(sorted[idx] === initial_arr[idx]) {
      similarities.push(true);
    }
    idx += 1;
  }  
});

test('sorted array', function(){
  const initial_arr = [1,2,3,4,5,6];
  const sorted = shuffler(initial_arr.slice(0));  
  expect(sorted.length).toBe(initial_arr.length);
  let idx = 0, similarities = [];
  while(idx < initial_arr.length) {
    if(sorted[idx] === initial_arr[idx]) 
      similarities.push(true);
    idx += 1;
  }
  expect(similarities.length).not.toBe(initial_arr.length)
})


