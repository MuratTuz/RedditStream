


function saveAndGetUser(user, password) {

    let userArray = localStorage.getItem('users');
    let userList = JSON.parse(userArray);

    // to get a userList for page readiness without saving 
    if (!user) {
        return userList.map(element => element.name) || [];
    }
    if (!userList) {
        userList = [];
    }

    let userData = {'name':user, 'pass':password};
    userList.push(userData);

    userArray = JSON.stringify(userList);
    localStorage.setItem('users', userArray);

    return userList;
}

/**
 * 
 * @param {*} newTopic 
 * 
 * to get and save topics into local storage
 * sending null parameters refers to get topic list
 */
function saveAndGetTopic(newTopic) {

    let topicArray = localStorage.getItem('topics');
    let topicList = JSON.parse(topicArray);

    // to get a topicList for page readiness without saving 
    if (!newTopic) {
        return topicList || [];
    }

    if (!topicList) {
        topicList = [];
    }

    topicList.push(newTopic);

    topicArray = JSON.stringify(topicList);
    localStorage.setItem('topics', topicArray);

    return topicList;
}