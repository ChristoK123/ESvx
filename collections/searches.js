//creates a collection of all searches performed on the site.
//admin can update/remove search entries.

Searches = new Meteor.Collection('searches');

Searches.allow({
  update: isAdminById
, remove: isAdminById
});

