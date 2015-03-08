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


Router.map(function(){
	this.route('home', {path: '/', controller:"HomeController"});
	this.route('admin',{controller:"HomeController"});
	this.route('additionalInfo');
	this.route('confirmation');
});