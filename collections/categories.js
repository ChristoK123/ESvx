//Creates a Categories collection.
Categories = new Meteor.Collection('categories');

//Categories can only be created/updated by admin.
Categories.allow({
  insert: isAdminById
, update: isAdminById
, remove: isAdminById
});
//returns an error if user is not logged in or not admin; otherwise
//user can insert a new category.
Meteor.methods({
  category: function(category){
    if (!Meteor.user() || !isAdmin(Meteor.user()))
      throw new Meteor.Error(i18n.t('You need to login and be an admin to add a new category.'))
    var categoryId=Categories.insert(category);
    return category.name;
  }
});