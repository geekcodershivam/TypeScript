Typescript = Javascript+ A type system

Type system: 
1. helps us catch during development
2. uses type annotations to analyze our code
3. only  active during development
4. Doesn't provide any performance optimization


Process
Typescript --> Tscompiler --> Plain javascript --> render
  
Joke :)
It is best to think of Typescript as being like a friend sitting behind you while you are coding.

How to run
1. npm i typescript -g
2. npm i ts-node[--Optional]
3. if you install the ts-node
    .then(ts-node filename.ts)
4. General way: tsc filename.ts
5. node filename.js

Basic of Type:
Easy way to refer to the differnt properties + functions that a value has

example: class has a type, function has a type, array has a type;

String : 
1. its a string
2. it is a value that has all methods or properties that we assume that a string has


                         Types
                         /  \
                        /    \
                       /      \
                      /        \
              Primitive          Object
               /  \               /  \    
              /    \             /    \       
           number|string    functions|arrays
          boolean|symbol      classes|objects
             void|null
        undefined|   

Why do we care about types?
- Types are used by the typescript compiler to analyze our code for errors
- Types allow other engineers to understand what values are flowing around aur codebase.

Example: 

```TS
  const today=new Date();
  today.getMonth();
  const person={
  age:20
  }
  class Color{}
  const red=new Color();
```

Type Annotations and Type Inference
1. Variable
2. Functions
3. Objects

- Annotations : code we add to tell ts what type of value a variable will refer to.
- Inference : ts tries to figure out what type of value a variable refers to.





