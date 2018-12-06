


function saveUser(user, password) {

    let userArray = localStorage.getItem('users');
    let userList = JSON.parse(userArray);

    if (userList == undefined) {
        userList = new Array();
    }

    let userData = {'name':user, 'pass':password};
    userList.push(userData);

    userArray = JSON.stringify(userList);
    localStorage.setItem('users', userArray);

    return userList;
}