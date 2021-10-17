const addToArray = function (array, string) {
    array.push(string);
    return array;
  };

  const convertToString = function (array) {
    let arr=array.join(" ");
    return arr;
  };

  const updateOrCreate = function (array, value, index) {
    if(array.length>index)
    {
       array[index]=value;
       return array;
    }
    return "there is no element to updated in this index";

  };

  const sliceArray = function (array) {
      let arr=[]
      for(let i=0;i<array.length;i++)
      {
          if(typeof array[i]==='string')
          {
              arr.push(array[i])
          }
      }
      return arr;
     
  };


  const users = [
    ["Jane", "123456" ],
    ["admin", "abc123" ],
  ];
  
  const login = function (username, password) {
      
      for(let i=0;i<users.length;i++)
      {
          if(users[i][0]==username&&users[i][1]==password)
          {
             return "Login Successful";
          }
      }
      return "Login Failed"
    
    };
  



  const maximumNumber = function (numbers) {
    let max=numbers[0];
    for(let i=1;i<numbers.length;i++)
    {
       if(max<numbers[i])
       {
           max=numbers[i];
       }
      
    }
    return max;
  };


  const reversString = function (string) {
    let arr=string.split('');
    let rev=arr.reverse();
    let strRev= rev.join("");
    
    return strRev;
  };
  


  