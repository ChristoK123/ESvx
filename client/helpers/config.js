//Accounts required to submit username and related email.
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

EpicEditorOptions={
	container:  'editor',
	basePath:   '/editor',
	clientSideStorage: false,
	theme: {
		base:'/themes/base/epiceditor.css',
		preview:'/themes/preview/github.css',
		editor:'/themes/editor/epic-light.css'
	}
};
//Currently allows users to share with GooglePlus and Twitter.
SharrreOptions={
	share: {
	  googlePlus: true,
	  // facebook: true,
	  twitter: true,
	},
	buttons: {
	  googlePlus: {size: 'tall', annotation:'bubble'},
	  // facebook: {layout: 'box_count'},
	  twitter: {
	    count: 'vertical',
	    via: 'TelescopeApp'
	  },
	},
	enableHover: false,
	enableCounter: false,
	enableTracking: true
};

Statuses={
	pending: 1,
	approved: 2,
	rejected: 3
};

var stripeResponseHandler = function(status, response) {
 var $form = $('#payment-form');

 if (response.error) {
   // Show the errors on the form
   $form.find('.payment-errors').text(response.error.message);
   $form.find('button').prop('disabled', false);
 } else {
   // token contains id, last4, and card type
   var token = response.id;
   // Insert the token into the form so it gets submitted to the server
   $form.append($('<input type="hidden" name="stripeToken" />').val(token));
   // and submit
   $form.get(0).submit();
 }
};
