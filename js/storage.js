


function saveUser(user, password) {

    let userArray = localStorage.getItem('users');
    let userList = JSON.parse(userArray);

    if (!userList) {
        userList = [];
    }

    let userData = {name:user, pass:password}; // user, password
    userList.push(userData);

    userArray = JSON.stringify(userList);
    localStorage.setItem('users', userArray);

    return userList;
}

function getUser() {
    let userArray = localStorage.getItem('users');
    let userList = JSON.parse(userArray);

    if (userList) {
        return userList.map(element => element.name);
    }
    return null;
}

/**
 * 
 * @param  {...any} args 
 * If called with an argument of new topic then saves the new topic into topic list in localStorage.
 * If called with empty or null argument then returns topic list without saving any.
 */
function saveTopic(newTopic) {

    let topicArray = localStorage.getItem('topics');
    let topicList = JSON.parse(topicArray);

    if (!topicList) {
        topicList = [];
    }

    topicList.push(newTopic);

    topicArray = JSON.stringify(topicList);
    localStorage.setItem('topics', topicArray);

    return topicList;
}

function getTopic() {
    let topicArray = localStorage.getItem('topics');
    let topicList = JSON.parse(topicArray);

    return topicList;
}

/**
 * 
 * @param {*} post 
 * Gives an unique ID to post value and saves the value into localStorage.
 * If a post already has an ID so that post is to be updated.
 * Returns post which has an ID
 */
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
    } 
    else {
        // To give uniqe ID for each post performing some operations
        post.postID = postList.length + 1;
        postList.push(post);   
    }

    postArray = JSON.stringify(postList);
    localStorage.setItem('posts', postArray);

    return post;
}

/**
 * 
 * @param {*} postID 
 * Finds requested "post" from localStorage as regard to post.ID and
 * returns it. If postID == null then return all list for page readiness
 */
function getPost(postID) {

    let postArray = localStorage.getItem('posts');
    let postList = JSON.parse(postArray);
    if (postID == null) {
        return postList;
    }
    let indexID = postList.findIndex ( (element) => element.postID == postID);
    return postList[indexID];
} 

// Simdilik bos fonksiyon
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
