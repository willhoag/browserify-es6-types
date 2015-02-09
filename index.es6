import {map} from 'ramda';

class Test {
  constructor(num) {
    this.num = num;
  }
}

function addOne(num:Test):number {
  let x = num.num;
  return x + 1;
};

let list = map(addOne, [new Test(1), new Test(2), new Test(3)]);
console.log(list);
