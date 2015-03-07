ItineraryList = new Meteor.Collection('itineraries');

Router.map(function(){
  this.route('home', {path: '/'});
  this.route('additionalInfo');
  this.route('confirmation');
});

if (Meteor.isClient) {
  // counter starts at 0

  Session.setDefault('counter', 0);

  Template.itineraries.helpers({
    'itinerary': function(){
      var currentUserId = Meteor.userId();
      return ItineraryList.find();
    }
  });

  Template.formFirst.helpers({

  });

  Template.formFirst.events({
    'submit form': function(event){
      event.preventDefault();
      Router.go('additionalInfo');
      // var currentUserId = Meteor.userId();
      ItineraryList.insert({
        when: event.target.itinWhen.value,
        length: event.target.itinLength.value,
        budget: event.target.itinBudget.value
        // createdBy: currentUserId
      });
    }
  });

  Template.additionalInfo.events({
    'submit form': function(event){
      event.preventDefault();
      Router.go('confirmation');
      // var currentUserId = Meteor.userId();
      ItineraryList.insert({
        name: event.target.itinName.value,
        email: event.target.itinEmail.value,
        description: event.target.itinDescription.value
        // createdBy: currentUserId
      });
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
