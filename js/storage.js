


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

    let userData = {name:user, pass:password};
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

    // To give uniqe ID for each 
    //newTopic.ID = topicList.length;
    topicList.push(newTopic);

    topicArray = JSON.stringify(topicList);
    localStorage.setItem('topics', topicArray);

    return topicList;
}

function savePost(post) {

    let postArray = localStorage.getItem('posts');
    let postList = JSON.parse(postArray);

    
    if (!postList) {        
    
        postList = [];
    }

    if (post.postID) {
        // if the post has an id, so that is alreaady exist. Then update the existed post 
        let indexID = postList.findIndex ( (element) => element.postID == post.postID);
        postList[indexID] = post;

    } else {
    // To give uniqe ID for each post performing some operations
    post.postID = postList.length;
    postList.push(post);
    
    }

    postArray = JSON.stringify(postList);
    localStorage.setItem('posts', postArray);

    return post;
}

// to get wanted Post from postArray in localStorage
function getPost(postID) {

    let postArray = localStorage.getItem('posts');
    let postList = JSON.parse(postArray);

    return postList[postID];
} 


function updatePost(postID, attr, info) {

    let postArray = localStorage.getItem('posts');
    let postList = JSON.parse(postArray);

    let postID = postList.findIndex ( (element) => element.ID == post.ID);

    postList[postID].addUpVotes(attr, info);
    if (attr == '') {
        
    } else {
        
    }

    postArray = JSON.stringify(postList);
    localStorage.setItem('posts', postArray);

    return postList;
} 
