



$(function(){

    /**
     * Initialiser funtions
     */
    getReadyTopic();

    getReadyUser();

    getReadyPost(null);

    /**
     * Eventlistener funtions
     */
    $('#new-user-button').on('click', () => {
        let user = $('#username').val();
        let password = $('#password').val();

        let userValidation = emptyValidate(user, password);
        if (userValidation) {
            addUser(user, password);
        }
        else {
            alert('Please enter username and password');
        }

        $('#username').val("");
        $('#password').val("") 
    });

    
    $('#add-topic-button').on('click', () => {
        let newTopic = $('#add-topic-input').val();

        let topicValidation = emptyValidate(newTopic);
        if (topicValidation) {
            addTopic(newTopic);
        }
        else {
            alert('Please enter a topic name');
        }

        // to clear textbox
        $('#add-topic-input').val("");

    });

    $('.navigation').on('click', 'i', function(){
        // <i data-id>
        let index = $(event.target).data('id');
        renderPosts(index);

    });

    $('#new-post-button').on('click', () => {
        let user = $('#selection-user').val();
        let topic = $('#selectionCategory').val();
        let title = $('#title').val();
        let image = $('#imageUrl').val();
        let message = $('#post-message').val();

        let postValidation = emptyValidate(user, topic, title, image, message);
        if (postValidation && loginCheck(user) && topicCheck(topic)) {
            let newPost = new CreatePost(user, topic, title, image, message);
            addNewPost(newPost);
            
            // Cleaning DOM elements
            $('#title').val('');
            $('#imageUrl').val('');
            $('#post-message').val('');
        }
        else {
            alert('Please enter all fields for a New Post');
        }        
    });

    // votes up (like-dislike) and increases the like number
    $('.content-overflow').on('click', '.img-up',  function() {
        let user = $('#selection-user').val();
        if (loginCheck(user)) {
            let postID = $(event.target).closest("div[data-id]").data('id');
            upVote(postID, user);
        }
    });

    // votes down (like-dislike) and increases the dislike number
    $('.content-overflow').on('click', '.img-down',  function() {
        let user = $('#selection-user').val();
        if (loginCheck(user)) {
            let postID = $(event.target).closest("div[data-id]").data('id');
            downVote(postID, user);
        }
    });

    // adds comment
   $('.content-overflow').on('click', '.comment-add-button', function() {
        let user = $('#selection-user').val();
        if (loginCheck(user)) {
            let comment = $(event.target).prev('.comment-add-input').val();
            let postID = $(event.target).closest("div[data-id]").data('id');
            pushComment(postID, user, comment);
        }
    });

    // shows user comments
    $('.content-overflow').on('click', '.comment-show-button', function() {
        let postID = $(event.target).closest("div[data-id]").data('id');
        $(`div[data-id=${postID.toString()}] .comment-show-user`).css('display', 'flex');
    });

    // hides user comments and collapses the comment container <div>
    $('.content-overflow').on('click', '.comment-hide-button', function() {
        let postID = $(event.target).closest("div[data-id]").data('id');
        $(`div[data-id=${postID.toString()}] .comment-show-user`).css('display', 'none')
    });
});