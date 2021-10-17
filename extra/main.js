const allUsers = [
    { username: "Jane", password: "123456" },
    { username: "admin", password: "abc123" },
  ];
  
  const createUser = function (username, password) {
    //   return "hi"
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

