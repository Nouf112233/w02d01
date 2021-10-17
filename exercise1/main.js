const sum = function (a, b) {
    return a+b;
  };

  const average = function (a, b) {
 
    return (a+b)/2;
  };

  const findFactorial = function (num) {
    let x = 1;
    for( let i=num;i>0;i--)
    {
        x=x*i;
    }
    return x;
  };

  const round = function (number) {
    let x = Math.round(number);
    return x;
  };

  const toThePowerOf = function (base, exponent) {
    let x = Math.pow(base, exponent);
    return x;
  };

  const randomNumber = function () {
    let x=Math.random();
    return x;
  };

  const oneOrZero = function () {
    let x= Math.random();
    let y= Math.round(x);
    return y;
  };
  

  const randomRange = function (number) {
    let x=Math.random()*number;
    return x;
  };

  const startsWith = function (string, character) {
    for(let i=0;i<string.length;i++)
    {
        if(string[i]==character)
        return true;
    }
    return false;
   };
  