ItineraryList = new Meteor.Collection('itineraries');

MainController = RouteController.extend({
	layoutTemplate:"mainLayout",
  // yield navbar and footer templates to navbar and footer regions respectively
  yieldTemplates:{
  	"navbar":{
  		to:"navbar"
  	},
  	"footer":{
  		to:"footer"
  	}
  }
});

HomeController = MainController.extend({
	template:"home"
});

AdminController = MainController.extend({
	template: "admin"
});

Router.map(function(){
	this.route('home', {path: '/', controller:"HomeController"});
	this.route('admin',{controller:"AdminController"});
	this.route('secondaryForm', {path: '/more-info', controller:"MainController"});
	this.route('confirmation',{controller:"MainController"});
});