
/**
*  In order to check index.html DOM inputs whether they are empty or not
*  using length property
*  
* @param {*} user 
* @param {*} password 
*/
function emptyValidate(...theArgs) {
    
    let result = theArgs.find ( (element) => element.length == 0);
    if (result =="") return false;
    
    return true;
}

/**
* Adds user selection list button on the header in index.html and
* at the same time this function saves user and password
* information to localStorage
* @param {*} user 
* @param {*} password 
*/
function addUser(user, password) {
    
    $('#selection-user').append(`<option value=${user}>${user}</option>`);
    
    saveAndGetUser(user, password);
}

function addTopic(newTopic) {
    $('.navigation').prepend (`<i>${newTopic}</i>`);
    $('#selectionCategory').append(`<option value=${newTopic}>${newTopic}</option>`);
    
    saveAndGetTopic(newTopic);
}

function addNewPost(newPost) {
    let post = savePost(newPost); 
    
    $(`.content-overflow`).prepend(`<div class="post-show" data-id="${post.postID}">
                                        <div class="post-show-votes">  
                                            <img class="tooltippic" src="img/like-dislike.jpeg" height="110" width="115">                           
                                            <img src="img/up.png" alt="up image" title="Like" id="img-up">
                                            <p id="votes-count">0</p>
                                            <img src="img/down.png" alt="down image" title="Dislike" id="img-down">                           
                                        </div>
                                        <div class="post-show-info">
                                            <div class="post-show-info-heading">
                                                <div class="post-show-info-heading-text">
                                                <p>${post.topic}</p>
                                                <p>${post.user}</p>
                                                <p>${post.title}</p>
                                                </div>
                                                <div class="post-show-info-heading-picture">
                                                    <img src="img/${post.image}" alt="Topic Picture">
                                                </div>
                                            </div>
                                            <p>${post.message}</p>
                                            <div class="comment-add">
                                                <input type="text" id="comment-add-input">
                                                <button id="comment-add-button">Comment</button>
                                            </div>
                                            <div class="comment-buttons">
                                                <button id="comment-show-button">Show Comment</button>
                                                <button id="comment-hide-button">Hide Comment</button>
                                            </div>
                                            <div class="comment-show">
                                                <div class="comment-show-user">
                                                </div>
                                            </div>
                                        </div>
                                    </div>`);  
}

function upVote(postID, user, votes) {
    let currentPost = getPost(postID);
    
    // check if user votes before
    if (!currentPost.checkVotes(user)) {
        currentPost.addUpVotes(user);
        votes++;
        $(`div[data-id=${postID.toString()}] #votes-count`).val(votes.toString());
        savePost(currentPost);
    } else {
        alert('You have voted this Post before!');
    }
}

function downVote(postID, user, votes) {
    let currentPost = getPost(postID);
    
    // check if user votes before
    if (!currentPost.checkVotes(user)) {
        currentPost.addDownVotes(user);
        votes--;
        $(`div[data-id=${postID.toString()}] #votes-count`).val(votes.toString());
        savePost(currentPost);
    } else {
        alert('You have voted this Post before!');
    }    
}

function pushComment(postID, user, comment) {
    let currentPost = getPost(postID);
    
    let commentIndex = currentPost.comments.findIndex ( element => element.name == user);
    // check if user comments before
    if (!commentIndex) { // If not
        currentPost.addComment(user, comment);
        $(`div[data-id=${postID.toString()}] #comment-show-user`).prepend(`<div class="comment-show-user-comments">
        <p>${user}</p>
        <p>${comment}</p>
        </div>`);
        
    } else if(confirm('You have commented before. Do you want to update?')){
        currentPost.comments[commentIndex].comment = comment;
    }    
    
    savePost(currentPost);
}
