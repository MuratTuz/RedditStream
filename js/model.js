
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
    
    saveUser(user, password);
}

function addTopic(newTopic) {
    $('.navigation').prepend (`<i>${newTopic}</i>`);
    $('#selectionCategory').append(`<option value=${newTopic}>${newTopic}</option>`);
    
    saveTopic(newTopic);
}
function renderPosts(topicID) {
    let topicArray = getTopic(); 
    let currentTopic = topicArray[topicID];

    $(`.content-overflow`).innerHTML = '';
    getReadyPost(currentTopic);
    
}

function addNewPost(newPost) {
    let post = savePost(newPost); 
    
    $(`.content-overflow`).prepend(`<div class="post-show" data-id="${post.postID}">
                                        <div class="post-show-votes">  
                                        <img src="img/up.png" alt="up image" title="Like" class="img-up">
                                        <img class="tooltippic" src="img/like-dislike.jpeg" height="110" width="115"> 
                                        <p class="votes-count">0</p>
                                        <img src="img/down.png" alt="down image" title="Dislike" class="img-down">     
                                        <img class="tooltippic" src="img/like-dislike.jpeg" height="110" width="115">                          
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
                                                <input type="text" class="comment-add-input">
                                                <button class="comment-add-button">Comment</button>
                                            </div>
                                            <div class="comment-buttons">
                                                <button class="comment-show-button">Show Comment</button>
                                                <button class="comment-hide-button">Hide Comment</button>
                                            </div>
                                            <div class="comment-show">
                                                <div class="comment-show-user">
                                                </div>
                                            </div>
                                        </div>
                                    </div>`);  
}

function upVote(postID, user) {
    let postObject = getPost(postID);
    let currentPost = new CreatePost(postObject);
    
    // check if user votes before
    if (!currentPost.checkVotes(user)) {
        currentPost.addUpVote(user);
        let votes = currentPost.getVotes();
        $(`div[data-id=${postID.toString()}] .votes-count`).text(votes.toString());
        savePost(currentPost);
    } else {
        alert('You have voted this Post before!');
    }
}

function downVote(postID, user) {
    let postObject = getPost(postID);
    let currentPost = new CreatePost(postObject);
    
    // check if user votes before
    if (!currentPost.checkVotes(user)) {
        currentPost.addDownVote(user);
        let votes = currentPost.getVotes();
        $(`div[data-id=${postID.toString()}] .votes-count`).text(votes.toString());
        savePost(currentPost);
    } else {
        alert('You have voted this Post before!');
    }    
}

function pushComment(postID, user, comment) {
    let postInstance = getPost(postID);
    let currentPost = new CreatePost(postInstance); 
    
    let commentIndex = currentPost.comments.findIndex ( element => element.name == user);
    // check if user comments before
    if (commentIndex == -1) { // If not
        currentPost.addComment(user, comment); // add comment both object and html
        $(`div[data-id=${postID.toString()}] .comment-show-user`).prepend(`<div class="comment-show-user-comments">
        <p>${user}</p>
        <p>${comment}</p>
        </div>`);
        $(`div[data-id=${postID.toString()}] .comment-add-input`).val('');
        
    } else if(confirm('You have commented before. Do you want to update?')){
        currentPost.comments[commentIndex].comment = comment;
        renderComments(currentPost); // updates comment on html
        $(`div[data-id=${postID.toString()}] .comment-add-input`).val('');
    }    
    
    savePost(currentPost);
}

/**
 * 
 * @param {*} currentPost 
 * Clear all comments in HTML view and gets them from localStorage when a comment is to be updated.
 */
function renderComments(currentPost) {
    let commentArray = currentPost.getComments();

    // Cleans the all comments for rendering
    $(`div[data-id=${currentPost.postID.toString()}] .comment-show-user`).innerHTML = '';

    // Adds comments in to the <div> as regard to 'newest is up' rule
    commentArray.forEach(element => {
        $(`div[data-id=${currentPost.postID.toString()}] .comment-show-user`).prepend(`<div class="comment-show-user-comments">
        <p>${element.name}</p>
        <p>${element.comment}</p>
        </div>`);
        
    });

}

function loginCheck(loginUser) {
    if (loginUser != 'Login') {
        return true;
    }
    alert('Please login first!');
    return false;
}

function topicCheck(categoryTopic) {
    if (categoryTopic != 'Category') {
        return true;
    }
    alert('Please select a category!');
    return false;
}

function commentShowClick(eventListen) {
    
            /*

          // Attach the listener to the list is another solution
          // It will fire when each .comment-add-button is clicked
          $('.comment-add-button').addEventListener('click', f_name, false);

        function f_name(e){
            // e.target refers to the clicked $('.comment-add-button') element
            // This is different than e.currentTarget which would refer to the parent of .comment-add-button element
            e.target.style.visibility = 'hidden';
          }
          
          */
 
}

