
// const apples:number=5; --> can't assign any value
let apples:number=5;

// apples='jsjds' --> error
apples = 10;

let one:number=1;
let two:string='two'
let hasPath:boolean=true;
let nothingMatch:null=null
let nothings:undefined=undefined;

// objects
let  now:Date=new Date();

//arrays
let colors:string[]=['red','green','white'];
let codeNo:number[]=[12,22,22,11,0o11];
let truths:boolean[]=[false,true,false,false,true];

//Classes
class Car{

}
//instance of Car
let car:Car=new Car();

//Object literal
let point:{x:number;y:number}={
  x:10,
  y:20
};

// Function

const logNumber:(i:number) => void= (i:number) => {
  console.log(i);
}

/*const logNumber:(i:number) --> type
=> void                      --> non-return types
= (i:number) =>              --> accepts the only number type arguments 
*/






