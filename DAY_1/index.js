let operation = process.argv[2]

let a = process.argv[3]
let b = process.argv[4]

if(operation == "sum"){
    sum(Number(a), Number(b))
}

if(operation == "sub"){
    sub(Number(a), Number(b))
}

if(operation == "mul") {
    mul(Number(a), Number(b))
}

if(operation == "div") {
    div(Number(a), Number(b))
}

function sub(a,b) {
    console.log(a-b)
}

function sum(a,b){
    console.log(a+b)
}

function mul(a,b){
    console.log(a*b)
}

function div(a,b){
    console.log(a/b)
}

// Asynchronous
const {
    randomBytes,
  } = require('node:crypto');
  
  randomBytes(256, (err, buf) => {
    if (err) throw err;
    console.log(`${buf.length} bytes of random data: ${buf.toString('binary')}`);
  })