/*Template.notification_item.helpers({
  need_role: function(){
    return moment(this.timestamp).fromNow();
  },
}); */


/* this is sample code on which I am contemplating modeling my code.
Template.input.events({
    'click #send': function() {
      var message = $('#newMessage').val();
      var username = $('#username').val();
      if (!message || !username) {
        alert('Fill out both fields yo!');
      }
      Meteor.saveMessage({
        message: message,
        username: username
      });
    }
});

//testing this as an option to force users to select a role.
Template.input.events({ 
if (profile.role !="Educator" || !="Solver") {
  alert("Please select a role of Educator or Solver.");
}
Meteor.saveMessage({
  role: role,
});
}); */

/*Template.notification_item.events({
  'click .action-link': function(event, instance){
    var notificationId=instance.data._id;
    Notifications.update(
    {_id: notificationId},
    {
      $set:{
        read: true
      }
    }
  );  
}); */