
class CreatePost {
    constructor(user, topic, title, image, message) {
        this.postID;
        this.user = user;
        this.topic = topic;
        this.title = title;
        this.image = image;
        this.message = message;
        this.comments = [];
        this.upVotes = [];
        this.downVotes = [];
    };

    checkVotes(user) {
        // Check if user votes before and so its name is kept in upVotes or downVotes array.
        // If the one votes before then return true, and false otherwise
        let upResult = this.upVotes.find ( (element) => element == user);
        let downResult = this.downVotes.find ( (element) => element == user);
        
        if (upResult || downResult) {
            return true;
        }
        
        return false;
    };
    addComment(user, comment) {
        this.comments.push ({name:user, comment:comment});
    };
    getComment() {
        return this.comments;
    };
    addUpVotes(user) {
        this.upVotes.push (user);
    };
    addDownVotes(user) {
        this.downVotes.push (user);
    };
    getVotes() {
        return (this.upVotes.length - this.downVotes.length);
    };

}