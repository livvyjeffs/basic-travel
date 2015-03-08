ItineraryList = new Meteor.Collection('itineraries');

Router.map(function(){
	this.route('home', {path: '/'});
	this.route('additionalInfo');
	this.route('confirmation');
	this.route('admin');
});