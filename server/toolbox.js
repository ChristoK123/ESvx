Meteor.methods({
  updateCategories: function () {
    // TODO: see if this method is still necessary
    if(isAdmin(Meteor.user())){
      Posts.find().forEach(function(post){
        if(post.categories){
          console.log('Found categories for post "'+post.headline+'"');
          Posts.update(post._id,{$set:{userId:post.user_id}}, function(error){
            console.log(error);
          });
        }
      });
    }
  },

  //currently only the admin has invites.
  giveInvites: function () {
    if(isAdmin(Meteor.user()))
      Meteor.users.update({}, {$inc:{inviteCount: 1}}, {multi:true});
  },
  updateCategoryInPosts: function (categoryId) {
    check(categoryId, String);

    if (!isAdmin(Meteor.user()))
      throw new Meteor.Error(403, "Not an admin");

    var category = Categories.findOne(categoryId);
    if (!category) {
      Posts.update(
        {}
      , {$pull: {categories: {_id: categoryId}}}
      , {multi: true}
      );
    } else {
      // Such update is server-only, because Minimongo does not support $ yet
      //$set gives the categories field the value of categoryId to 'category'
      //and works on all matching entries in the Post collection.
      Posts.update(
        {'categories._id': categoryId}
      , {$set: {'categories.$': category}}
      , {multi: true}
      );
    }
  }
})