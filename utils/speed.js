const start = performance.now();
let num = 0;
for(let i = 0; i < 1000000000; i++){
     num = num + i;
}

const end = performance.now();

const execution = end - start;
console.log(start, end, execution, num );