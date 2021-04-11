var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');
var data = [
    {
        name: "Cloud's Rest",
        image:"https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Desert Mesa",
        image:"https://images.unsplash.com/photo-1563024767-5bd8ee292c3f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Canyon floor",
        image:"https://images.unsplash.com/photo-1528433556524-74e7e3bfa599?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODV8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]
function seedDB(){
    Campground.deleteMany({},function(err){
        // Remove all campgrounds
        if(err){
            console.log(err);
        }
        else{
            console.log("removed campgrounds!");
            // Add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed,function(err, campground){
                    if(err){
                        console.log(err);
                    }else {
                        console.log("Added a campground");
                        // create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            },function(err, comment){
                                if(err){
                                    console.log(err);
                                }else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created a new comment");
                                }
                            });
                    }
                });
            });
        }
    });
    // Add a few comments
}
module.exports = seedDB;
