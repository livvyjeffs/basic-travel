ItineraryList = new Meteor.Collection('itineraries');

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
      // var currentUserId = Meteor.userId();
      ItineraryList.insert({
        when: event.target.itinWhen.value,
        length: event.target.itinLength.value,
        budget: event.target.itinBudget.value
        // createdBy: currentUserId
      });
    }
  });

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
