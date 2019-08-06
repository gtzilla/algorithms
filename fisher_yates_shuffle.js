#!/usr/bin/env node
(function() {
'use strict';

/**
Fisher Yates Shuffle Algorithm circa 1938
## Usagae

Command line indefinite arity / variadic concatenation
expressed as string printed to stdout. pipeable
```
  ./fisher_yates_shuffle.js [1,2,3] [4,5,6] [101,102,103,104]
```

*/
function fisher_yates_shuffle(nums) {
  const shuffled = [];
  while(nums && nums.length > 0) {
    const k = Math.floor(Math.random() * nums.length);
    shuffled.push(...nums.splice(k,1));
  }
  return shuffled;
}

module.exports = fisher_yates_shuffle;
if(require.main !== module) return;
// only cli invoked
let orig_arr = [];
while(process.argv.length > 2) {
  try {
    let parsed = JSON.parse(process.argv.pop());
    if(!parsed.length || !parsed.splice) continue;
    orig_arr.push(...parsed);
  } catch(e){}
}

process.stdout.on('error', function() {
  console.log("Attention. There was a civil error.");
});
process.stdout.write( JSON.stringify(fisher_yates_shuffle(orig_arr)) );

})(this);
