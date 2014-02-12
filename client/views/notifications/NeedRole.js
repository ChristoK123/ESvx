Template.notification_item.helpers({
  need_role: function(){
    return moment(this.timestamp).fromNow();
  },
});



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