
class CreatePost {
    constructor(...args) {
        if (args[0] instanceof Object) { // updating existed object instance
            this.postID = args[0].postID || '';
            this.user = args[0].user || '';
            this.topic = args[0].topic || '';
            this.title = args[0].title || '';
            this.image = args[0].image || '';
            this.message = args[0].message || '';
            this.comments = args[0].comments || [];
            this.upVotes = args[0].upVotes || [];
            this.downVotes = args[0].downVotes || [];
        } 
        else { // creating object first time, assign variables in the order of - user, topic, title, image, message -
            this.postID; // later to be assigned
            this.user = args[0];
            this.topic = args[1];
            this.title = args[2];
            this.image = args[3];
            this.message = args[4];
            this.comments = []; // later to be assigned
            this.upVotes =  []; // later to be assigned
            this.downVotes = []; // later to be assigned
        }
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
    getComments() {
        return this.comments;
    };
    addUpVote(user) {
        this.upVotes.push (user);
    };
    addDownVote(user) {
        this.downVotes.push (user);
    };
    getVotes() {
        return (this.upVotes.length - this.downVotes.length);
    };
    
}