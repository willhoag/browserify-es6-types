browserify-es6-types
=======

An attempt at using browserify with es6 and type assertions. It uses `npm run bundle` to run **browserify** using the **6to5ify** and **flowcheck** transforms.


```bash
git clone 'https://github.com/willhoag/browserify-es6-types.git'
cd ./browserify-es6-types
npm install # install deps
npm run bundle # creates bundle.js

# then just open index.html in a browser and check the console
```


**NOTE** - fails when mixing certain es6 constructs with type checking.

```js
let x:string = 'string' // works

function addOne(x:number):number {
  return x + 1;
} // works

class X {
  constructor(x:string) {
    this.x = x;
  }
} // breaks
```
