


    
function getReadyTopic() {
    let topicArray = getTopic();
    if (topicArray) {
        topicArray.forEach((newTopic, index) => {
            $('.navigation').prepend(`<i data-id =${index}>${newTopic}</i>`);
            $('#selectionCategory').append(`<option value=${newTopic}>${newTopic}</option>`);
        });
    }
}


function getReadyUser() {
    let userArray = getUser();
    if (userArray) {
        userArray.forEach(user => {
            $('#selection-user').append(`<option value=${user}>${user}</option>`);
        });
    }
}

function getReadyPost(topic) {
    let postArray = getPost(null);
    let topicArray = getTopic(); 
    let currentTopic;

    if (!topic) { // if topic parameter is null then use last added topic for ordering posts else use given topic name
        currentTopic = topicArray[topicArray.length - 1]
    } 
    else{
        currentTopic = topic;
    }
    
    if (postArray && topicArray) {  // check topicArray for postArray.map is not to be halted     
        // gets all posts of last added topic in the topic array
        postArray.filter( postElement => postElement.topic == currentTopic)
             .forEach( postElement => {
                        let post = new CreatePost(postElement);
                        let postHtml =`<div class="post-show" data-id="${post.postID}">
                        <div class="post-show-votes">  
                            <img src="img/up.png" alt="up image" title="Like" class="img-up">
                            <img class="tooltippic" src="img/like-dislike.jpeg" height="110" width="115"> 
                            <p class="votes-count">${post.getVotes()}</p>
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
                                    <img src="${document.location}/img/${post.image}" alt="Topic Picture">
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
                                <div class="comment-show-user">`;
                     
                            let commentString='';
                            post.comments.forEach(element => {
                            commentString +=`<div class="comment-show-user-comments">
                            <p>${element.name}</p>
                            <p>${element.comment}</p>
                            </div>`;
                            });
                     
                    postHtml += commentString + '</div></div></div></div>';  
                    $(`.content-overflow`).prepend(postHtml);  
            });
    }

}
