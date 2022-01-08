interface BigObject {
  [a:string] : undefined | {
    cvalue : typesForcValue
  }
}
type typesForcValue = undefined | string | number | BigObject;

function summ(a:BigObject): number {  
  const x: number[] = Object.keys(a).map((k) => {
      const elem = a[k];      
      if (typeof elem?.cvalue === "undefined") return 2021;
      if (typeof elem.cvalue === 'string') return parseInt(elem.cvalue)  || 2021;  
      if (typeof elem.cvalue === 'number') return elem.cvalue;    
      if (isBigObject(elem.cvalue)) return summ(elem.cvalue);
      return +elem.cvalue;
  });

  let sum: number = 0;
  for (let i = 0; i < x.length; i++) {
      sum += x[i];
  }
  return sum;
}

function isBigObject(elem: typesForcValue):boolean {
 if (typeof elem === 'object'){
   return true;
 } else {
   return false;
 }
}

const test1:BigObject = {
  hello: {cvalue: 1}, 
  world: { cvalue: 
     { yay: { cvalue: "2" }  } 
  },
  lod : undefined
};

console.log(summ(test1))

