// shallow copying and deep copying
function clone(o) {
  let outerKeys = Object.keys(o),
    cloned = {};
  if (o instanceof Array) cloned = [];
  outerKeys.forEach((key) => {
    if (o[key] instanceof Object) cloned[key] = clone(o[key]);
    else cloned[key] = o[key];
  });
  return cloned;
}

let x = 9,
  y = "some string",
  z = [1, 2, 3, 4, 5, [0, 1, 2], { k1: { k2: { k3: 100 } } }],
  t = {
    name: "t",
    outerval: 10,
    nested: {
      innerval: 20,
    },
  };
console.log(JSON.stringify(z));
let xx = x;
let yy = y;
let zz = clone(z);
let tt = clone(t);

console.log(x, xx);
console.log(y, yy);
console.log(z, zz);
console.log(t, tt);

xx = 100;
yy = "another string";
zz.push(15);
tt.outerval = 100;
tt.nested.innerval = 40;
zz[6].k1.k2.k3 = -1;

console.log(x, xx);
console.log(y, yy);
console.log(z, zz);
console.log(t, tt);





//more modified//


function clone(o) {
  console.log("Current Parameter:", o);
  let outerKeys = Object.keys(o),
    cloned = {};
  if (o instanceof Array) cloned = [];
  outerKeys.forEach((key) => {
    console.log(`creating, key: ${key} value: ${o[key]} in cloned.`);
    if (o[key] instanceof Object) {
      console.log(`Cloning object at key ${key}:`, o[key]);
      cloned[key] = clone(o[key]);
      console.log("We got this:", cloned[key]);
    } else {
      cloned[key] = o[key];
    }
  });
  console.log("Returning:", cloned);
  return cloned;
}

let x = 9,
  y = "some string",
  z = [1, 2, 3, 4, 5, [0, 1, 2], { k1: { k2: { k3: 100 } } }],
  t = {
    name: "t",
    outerval: 10,
    nested: {
      innerval: 20,
      moreNested: {
        innerMostVal: -127,
      },
    },
  };
// console.log(JSON.stringify(z));
// let xx = x;
// let yy = y;
// let zz = clone(z);
console.log(`[first call] Cloning object:`, t);
let tt = clone(t);
console.log(`[first call] Returned Cloning object:`, tt);
// console.log(x, xx);
// console.log(y, yy);
// console.log(z, zz);
// console.log(t, tt);

// xx = 100;
// yy = "another string";
// zz.push(15);
// tt.outerval = 100;
// tt.nested.innerval = 40;
// zz[6].k1.k2.k3 = -1;

// console.log(x, xx);
// console.log(y, yy);
// console.log(z, zz);
// console.log(t, tt);
