



$(function(){

    /**
 * Eventlistener for New User button on the header of index.html
 * This function ensures username and password info correctly 
 * to be entered. However it adds the info to the localStorage and
 * SelectionUser button on the header in the index.html
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

    $('#new-post-button').on('click', () => {
        let user = $('#selection-user').val();
        let topic = $('#selectionCategory').val();
        let title = $('#title').val();
        let image = $('#imageUrl').val();
        let message = $('#post-message').val();

        let postValidation = emptyValidate(user, topic, title, image, message);
        if (postValidation) {
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

    $('.content-overflow').on('click', '#img-up',  function() {
        let user = $('#selection-user').val();
        let x = event.target;
        // get vote count and parse into number for incereasing
        let votesString = $(event.target).next('#votes-count').text();
        let votes = parseInt(votesString, 10);

        let postID = $(event.target).closest("div[data-id]").data('id');
        upVote(postID, user, votes);

        /*
        function hide(e){
            // e.target refers to the clicked <li> element
            // This is different than e.currentTarget which would refer to the parent <ul> in this context
            e.target.style.visibility = 'hidden';
          }
          
          // Attach the listener to the list
          // It will fire when each <li> is clicked
          ul.addEventListener('click', hide, false);
          */
    });

    $('.content-overflow').on('click', '#img-down',  function() {
        let user = $('#selection-user').val();
        // get vote count and parse into number for incereasing
        let votesString = $(this).prev('#votes-count').val();
        let votes = parseInt(votesString, 10);

        let postID = $(this).closest("div[data-id]").data('id');
        downVote(postID, user, votes);
    });

    $('#comment-add-button').on('click', () => {
        let user = $('#selection-user').val();
        let comment = $('#comment-add-input').val();
        let postID = $(this).closest("div[data-id]").data('id');

        pushComment(postID, user, comment);
    });
});