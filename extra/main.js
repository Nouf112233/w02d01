const allUsers = [
    { username: "Jane", password: "123456" },
    { username: "admin", password: "abc123" },
  ];
  
  const createUser = function (username, password) {
    for(let i=0;i<allUsers.length;i++)
    {
        if(allUsers[i].username===username)
        {
            return "That username is not available"
        }
    }
    
    let newUser={username: username, password: password};
    allUsers.push(newUser);
    return "Registration successful";
    
  };



  const sliceArray = function (array, control) {
    let newArray=[];
    let ch = Math.floor(array.length/control);
    
    for(let i=0;i<ch;i++)
    {
     let items = array.splice(0,control)
     newArray.push(items) 
    }
    if(array.length){
      newArray.push(array)
    }
    
    return newArray;
  };
